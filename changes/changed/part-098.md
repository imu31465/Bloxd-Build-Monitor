# Changed — Bundle Modifications Report (Part 098 / 141)

- **Updated at**: `2026-11-25T09:11 JST`
- **Part**: `98 / 141` (**421** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 097](part-097.md) · [Part 099 →](part-099.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (igzsf.a0b73a5f → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (962 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 849. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15337-L15340` → after: `L15337-L15340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15337-L15340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15337-L15340) · [Before (L15337-L15340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15337-L15340)

```diff
-             if (null === Ot) return tt.includes(Nt.d) ? `${tt} is every page at once, too long to read: read ${Nt.k}, then the page you need.` : `Only Bloxd's docs can be read: ${Nt.k} and the pages it links to.`;
-             const qt = `There is no docs page at ${tt}. ${Nt.k} lists every page with its link.`,
-               Dt = `${tt} couldn't be read just now. Use get_docs instead.`,
-               mt = (0, Mt.d)(2e4, Vt);
+             if (null === TB) return BB.includes(yB.e) ? `${BB} is every page at once, too long to read: read ${yB.i}, then the page you need.` : `Only Bloxd's docs can be read: ${yB.i} and the pages it links to.`;
+             const JB = `There is no docs page at ${BB}. ${yB.i} lists every page with its link.`,
+               oB = `${BB} couldn't be read just now. Use get_docs instead.`,
+               GB = (0, UB.c)(2e4, ZB);
```

#### 850. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15344` → after: `L15344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15344) · [Before (L15344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15344)

```diff
-               const tt = await fetch(`${et}${Ot}`, {
+               const BB = await fetch(`${IB}${TB}`, {
```

#### 851. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15356-L15357` → after: `L15356-L15357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15356-L15357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15356-L15357) · [Before (L15356-L15357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15356-L15357)

```diff
-             const Ht = (0, Nt.u)(Ot);
-             return null !== Ht && null === Ht.part && dt.length > Nt.b ? `${tt} is too long to read whole: read the part you need. Its parts start at ${yt.c}${(0,Nt.r)(Ht.name,0)}, and ${Nt.k} says what each part has.` : dt.length <= 4e4 ? dt : (console.warn("AI Helper: a docs fi … [truncated]
+             const cB = (0, yB.v)(TB);
+             return null !== cB && null === cB.part && vB.length > yB.b ? `${BB} is too long to read whole: read the part you need. Its parts start at ${qB.b}${(0,yB.q)(cB.name,0)}, and ${yB.i} says what each part has.` : vB.length <= 4e4 ? vB : (console.warn("AI Helper: a docs fi … [truncated]
```

#### 852. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15365-L15367` → after: `L15365-L15367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15365-L15367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15365-L15367) · [Before (L15365-L15367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15365-L15367)

```diff
-             lookups: [...(null !== (Vt = et.options.lookups) && void 0 !== Vt ? Vt : []).map(UQ), ...jt],
-             worldCodeFiles: null !== (Ot = dt.worldCodeFiles) && void 0 !== Ot ? Ot : et.options.worldCodeFiles,
-             viewedPaths: [...null !== (qt = et.options.viewedPaths) && void 0 !== qt ? qt : [], ...Ht]
+             lookups: [...(null !== (ZB = IB.options.lookups) && void 0 !== ZB ? ZB : []).map(Ah), ...kB],
+             worldCodeFiles: null !== (TB = vB.worldCodeFiles) && void 0 !== TB ? TB : IB.options.worldCodeFiles,
+             viewedPaths: [...null !== (JB = IB.options.viewedPaths) && void 0 !== JB ? JB : [], ...cB]
```

#### 853. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15383` → after: `L15383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15383) · [Before (L15383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15383)

```diff
-           trialErrors: null !== Vt && void 0 !== Vt ? Vt : Ot.trialErrors
+           trialErrors: null !== ZB && void 0 !== ZB ? ZB : TB.trialErrors
```

#### 854. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15396` → after: `L15396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15396) · [Before (L15396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15396)

```diff
-         EV(), (0, IH.b)(At)
+         zZ(), (0, Hc.c)(fB)
```

#### 855. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15399-L15400` → after: `L15399-L15400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15399-L15400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15399-L15400) · [Before (L15399-L15400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15399-L15400)

```diff
-       if (!gt || void 0 === (null === jV || void 0 === jV ? void 0 : jV.endedAt) || (null === XV || void 0 === XV ? void 0 : XV.target.key) !== Ut.key) return void(void 0 === (null === jV || void 0 === jV ? void 0 : jV.endedAt) || XV || (0, IH.i)(At));
-       const tt = (0, IH.i)(At);
+       if (!DB || void 0 === (null === vZ || void 0 === vZ ? void 0 : vZ.endedAt) || (null === cZ || void 0 === cZ ? void 0 : cZ.target.key) !== uB.key) return void(void 0 === (null === vZ || void 0 === vZ ? void 0 : vZ.endedAt) || cZ || (0, Hc.q)(fB));
+       const BB = (0, Hc.q)(fB);
```

#### 856. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15402` → after: `L15402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15402) · [Before (L15402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15402)

```diff
-       const et = (0, IH.A)(tt);
+       const IB = (0, Hc.B)(BB);
```

#### 857. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15413` → after: `L15413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15413) · [Before (L15413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15413)

```diff
-         text: (0, IH.w)(tt.errors),
+         text: (0, Hc.y)(BB.errors),
```

#### 858. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15422` → after: `L15422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15422) · [Before (L15422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15422)

```diff
-           forgetStatus: et ? "forgotten" : "hE"
+           forgetStatus: IB ? "forgotten" : "XF"
```

#### 859. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15424` → after: `L15424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15424) · [Before (L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15424)

```diff
-         for (const et of null !== (Vt = tt.forgetNotes) && void 0 !== Vt ? Vt : []) {
+         for (const IB of null !== (ZB = BB.forgetNotes) && void 0 !== ZB ? ZB : []) {
```

#### 860. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15444` → after: `L15444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15444) · [Before (L15444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15444)

```diff
-             const dt = new Map(sH(null !== (Ot = tt[qt]) && void 0 !== Ot ? Ot : "").map((tt => [tt.key, tt.value]))),
+             const vB = new Map(Kc(null !== (TB = BB[JB]) && void 0 !== TB ? TB : "").map((BB => [BB.key, BB.value]))),
```

#### 861. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15450` → after: `L15450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15450) · [Before (L15450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15450)

```diff
-               et && et.value !== Vt && jt.get(tt) === et.value && (Ht = null !== (Xt = nH(Ht, et, Vt)) && void 0 !== Xt ? Xt : Ht)
+               IB && IB.value !== ZB && kB.get(BB) === IB.value && (cB = null !== (nB = Vc(cB, IB, ZB)) && void 0 !== nB ? nB : cB)
```

#### 862. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15466` → after: `L15466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15466) · [Before (L15466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15466)

```diff
-           return et.length > 0 ? OX(et, "undoing") : 0 === tt.length ? "Before undoing settings" : `Before undoing settings: ${(tt.length>3?[...tt.slice(0,3),tt.length-3+" more"]:tt).join(", ")}`
+           return IB.length > 0 ? Zn(IB, "undoing") : 0 === BB.length ? "Before undoing settings" : `Before undoing settings: ${(BB.length>3?[...BB.slice(0,3),BB.length-3+" more"]:BB).join(", ")}`
```

#### 863. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15477` → after: `L15477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15477) · [Before (L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15477)

```diff
-         (0, CH.B)("aiNotes", !et)
+         (0, Cc.A)("aiNotes", !IB)
```

#### 864. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15479` → after: `L15479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15479) · [Before (L15479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15479)

```diff
-         (0, CH.B)("aiGameSettings", Vt)
+         (0, Cc.A)("aiGameSettings", ZB)
```

#### 865. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15481-L15482` → after: `L15481-L15482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15481-L15482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15481-L15482) · [Before (L15481-L15482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15481-L15482)

```diff
-         (0, CH.B)("aiEdits", qt)
-       }), [qt]), (0, uH.k)("aiHelperOverview")
+         (0, Cc.A)("aiEdits", JB)
+       }), [JB]), (0, Qc.h)("aiHelperOverview")
```

#### 866. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15520-L15521` → after: `L15520-L15521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15520-L15521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15520-L15521) · [Before (L15520-L15521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15520-L15521)

```diff
-       return null !== (et = null !== (Vt = null === Ot || void 0 === Ot ? void 0 : Ot.about) && void 0 !== Vt ? Vt : null === Ot || void 0 === Ot ? void 0 : Ot.text) && void 0 !== et ? et : "a change"
-     }, RO = me.filter(RV), IO = null === (bt = RO[RO.length - 1]) || void 0 === bt ? void 0 : bt.id, PO = null !== (Ct = null === (ut = RO.findLast((tt => "user" === tt.role))) || void 0 === ut ? void 0 : ut.id) && void 0 !== Ct ? Ct : 0, ZO = RO.length < me.length, LO = RO[RO.le … [truncated]
+       return null !== (IB = null !== (ZB = null === TB || void 0 === TB ? void 0 : TB.about) && void 0 !== ZB ? ZB : null === TB || void 0 === TB ? void 0 : TB.text) && void 0 !== IB ? IB : "a change"
+     }, aT = oI.filter(aZ), HT = null === (WB = aT[aT.length - 1]) || void 0 === WB ? void 0 : WB.id, MT = null !== (CB = null === (QB = aT.findLast((BB => "user" === BB.role))) || void 0 === QB ? void 0 : QB.id) && void 0 !== CB ? CB : 0, jT = aT.length < oI.length, PT = aT[aT.le … [truncated]
```

#### 867. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15523` → after: `L15523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15523) · [Before (L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15523)

```diff
-       kV(null !== (Vt = tt.retry) && void 0 !== Vt ? Vt : "", tt.retryShown, {
+       rZ(null !== (ZB = BB.retry) && void 0 !== ZB ? ZB : "", BB.retryShown, {
```

#### 868. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15611` → after: `L15611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15611) · [Before (L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15611)

```diff
-           tt.nextAt = Date.now() + (null !== (Ot = et[tt.count]) && void 0 !== Ot ? Ot : 0), tt.count++, Sd.refresh().then((() => {
+           BB.nextAt = Date.now() + (null !== (TB = IB[BB.count]) && void 0 !== TB ? TB : 0), BB.count++, iv.refresh().then((() => {
```

#### 869. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15626` → after: `L15626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15626) · [Before (L15626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15626)

```diff
-     const pO = rO ? `${rO.id}/${rO.model.id}` : null;
+     const bT = eT ? `${eT.id}/${eT.model.id}` : null;
```

#### 870. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15632` → after: `L15632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15632) · [Before (L15632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15632)

```diff
-       gO = "aiAnswer" === uO || ("aiNotes" === uO || "aiGameSettings" === uO || "aiGear" === uO) && TO ? uO : "aiPanel",
+       DT = "aiAnswer" === QT || ("aiNotes" === QT || "aiGameSettings" === QT || "aiGear" === QT) && ET ? QT : "aiPanel",
```

#### 871. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15641` → after: `L15641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15641) · [Before (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15641)

```diff
-         null === (tt = (ue ? sO : nO).current) || void 0 === tt || tt.focus()
+         null === (BB = (QI ? KT : VT).current) || void 0 === BB || BB.focus()
```

#### 872. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15716` → after: `L15716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15716) · [Before (L15716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15716)

```diff
-           children: "settings" === ue ? "AI settings" : ce ? `Edit ${Xd(ce)} key` : "Add an API key"
+           children: "settings" === QI ? "AI settings" : pI ? `Edit ${nv(pI)} key` : "Add an API key"
```

#### 873. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15721` → after: `L15721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15721) · [Before (L15721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15721)

```diff
-             children: ["Using:", " ", rO ? he ? "Bot.xd (free) for the next question" : WH(rO) : iO ? Cd : "Bot.xd (free)"]
+             children: ["Using:", " ", eT ? wI ? "Bot.xd (free) for the next question" : Yc(eT) : lT ? Cv : "Bot.xd (free)"]
```

#### 874. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15777` → after: `L15777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15777) · [Before (L15777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15777)

```diff
-             children: [(0, mt.jsx)(lt.b, {
+             children: [(0, GB.jsx)(zB.d, {
```

#### 875. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15807` → after: `L15807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15807) · [Before (L15807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15807)

```diff
-                   return null !== (et = tt.note) && void 0 !== et ? et : ""
+                   return null !== (IB = BB.note) && void 0 !== IB ? IB : ""
```

#### 876. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15823` → after: `L15823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15823) · [Before (L15823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15823)

```diff
-                 forgetNotes: Dt.length > 0 ? Dt : void 0
+                 forgetNotes: oB.length > 0 ? oB : void 0
```

#### 877. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15835` → after: `L15835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15835) · [Before (L15835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15835)

```diff
-                 Ht = void 0 !== jt && (null !== (Ot = dt[tt]) && void 0 !== Ot ? Ot : "") === fO.current[tt] ? {
+                 cB = void 0 !== kB && (null !== (TB = vB[BB]) && void 0 !== TB ? TB : "") === FT.current[BB] ? {
```

#### 878. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15839` → after: `L15839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15839) · [Before (L15839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15839)

```diff
-                 Xt = nH(null !== (qt = Ht[tt]) && void 0 !== qt ? qt : "", et, Vt);
+                 nB = Vc(null !== (JB = cB[BB]) && void 0 !== JB ? JB : "", IB, ZB);
```

#### 879. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15847-L15848` → after: `L15847-L15848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15847-L15848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15847-L15848) · [Before (L15847-L15848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15847-L15848)

```diff
-                 lt = `${tt}:${et.key}`,
-                 Et = null !== (Dt = aO.current.get(lt)) && void 0 !== Dt ? Dt : et.value;
+                 zB = `${BB}:${IB.key}`,
+                 FB = null !== (oB = yT.current.get(zB)) && void 0 !== oB ? oB : IB.value;
```

#### 880. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15872` → after: `L15872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15872) · [Before (L15872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15872)

```diff
-               return yO.current.includes(Qt) || yO.current.push(Qt), fO.current[tt] = null !== (mt = Ht[tt]) && void 0 !== mt ? mt : "", EO.current[tt] = Xt, aV.current = Date.now(), !0
+               return gT.current.includes(hB) || gT.current.push(hB), FT.current[BB] = null !== (GB = cB[BB]) && void 0 !== GB ? GB : "", zT.current[BB] = nB, yZ.current = Date.now(), !0
```

#### 881. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15899` → after: `L15899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15899) · [Before (L15899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15899)

```diff
-           editing: null !== ce && void 0 !== ce ? ce : void 0,
+           editing: null !== pI && void 0 !== pI ? pI : void 0,
```

#### 882. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15906` → after: `L15906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15906) · [Before (L15906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15906)

```diff
-         }, null !== (ht = null === ce || void 0 === ce ? void 0 : ce.id) && void 0 !== ht ? ht : "new"), Me && (0, mt.jsx)(UH, {
+         }, null !== (wB = null === pI || void 0 === pI ? void 0 : pI.id) && void 0 !== wB ? wB : "new"), UI && (0, GB.jsx)(uc, {
```

#### 883. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15909` → after: `L15909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15909) · [Before (L15909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15909)

```diff
-           qJ: KO,
+           cW: sT,
```

#### 884. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15927` → after: `L15927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15927) · [Before (L15927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15927)

```diff
-                 kV(IH.q, jl, {
+                 rZ(Hc.t, nz, {
```

#### 885. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15939` → after: `L15939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15939) · [Before (L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15939)

```diff
-               className: Dt()("WorldCodeAiEntry", `WorldCodeAiEntry-${tt.role}`, {
+               className: oB()("WorldCodeAiEntry", `WorldCodeAiEntry-${BB.role}`, {
```

#### 886. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15970` → after: `L15970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15970) · [Before (L15970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15970)

```diff
-                         files: null !== (et = tt.undoFiles) && void 0 !== et ? et : {}
+                         files: null !== (IB = BB.undoFiles) && void 0 !== IB ? IB : {}
```

#### 887. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15985` → after: `L15985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15985) · [Before (L15985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15985)

```diff
-                         return (null !== (et = qt[tt.path]) && void 0 !== et ? et : "") === tt.after
+                         return (null !== (IB = JB[BB.path]) && void 0 !== IB ? IB : "") === BB.after
```

#### 888. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15995` → after: `L15995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR15995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L15995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L15995) · [Before (L15995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L15995)

```diff
-               }) : "assistant" === tt.role ? (0, mt.jsx)(Ht.d, {
+               }) : "assistant" === BB.role ? (0, GB.jsx)(cB.e, {
```

#### 889. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16014` → after: `L16014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16014) · [Before (L16014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16014)

```diff
-                       children: tt.forgetNotes.map((tt => `"${tt}"`)).join(", ")
+                       children: BB.forgetNotes.map((BB => `"${BB}"`)).join(", ")
```

#### 890. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16042` → after: `L16042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16042) · [Before (L16042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16042)

```diff
-                   return (null !== (et = It[tt.path]) && void 0 !== et ? et : "") !== tt.before
+                   return (null !== (IB = HB[BB.path]) && void 0 !== IB ? IB : "") !== BB.before
```

#### 891. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16044` → after: `L16044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16044) · [Before (L16044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16044)

```diff
-                 canEdit: wt ? Zt : !!Tt && (!tt.target.codeBlock || tt.target.canChangePos),
+                 canEdit: gB ? jB : !!EB && (!BB.target.codeBlock || BB.target.canChangePos),
```

#### 892. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16060` → after: `L16060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16060) · [Before (L16060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16060)

```diff
-                 checkPicked: wt ? lO : void 0,
+                 checkPicked: gB ? hT : void 0,
```

#### 893. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16073` → after: `L16073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16073) · [Before (L16073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16073)

```diff
-                         return (null !== (Vt = et[tt.path]) && void 0 !== Vt ? Vt : "") !== tt.after
+                         return (null !== (ZB = IB[BB.path]) && void 0 !== ZB ? ZB : "") !== BB.after
```

#### 894. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16090` → after: `L16090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16090) · [Before (L16090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16090)

```diff
-                   return (null !== (et = It[tt.path]) && void 0 !== et ? et : "") === tt.after
+                   return (null !== (IB = HB[BB.path]) && void 0 !== IB ? IB : "") === BB.after
```

#### 895. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16096` → after: `L16096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16096) · [Before (L16096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16096)

```diff
-                     if (!et) return void kV(`Fix this in your change: ${null===(Vt=tt.warnings)||void 0===Vt?void 0:Vt.join(" ")}`);
+                     if (!IB) return void rZ(`Fix this in your change: ${null===(ZB=BB.warnings)||void 0===ZB?void 0:ZB.join(" ")}`);
```

#### 896. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16110` → after: `L16110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16110) · [Before (L16110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16110)

```diff
-                       text: `Fixed without asking the AI: ${et.map(Uj).join(" ")}`,
+                       text: `Fixed without asking the AI: ${IB.map(uk).join(" ")}`,
```

#### 897. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16121` → after: `L16121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16121) · [Before (L16121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16121)

```diff
-                     return et.length > 0 ? `${fl} These names were checked against the game and are right, so keep them: ${et.map((tt=>`"${tt}"`)).join(", ")}.` : fl
+                     return IB.length > 0 ? `${qz} These names were checked against the game and are right, so keep them: ${IB.map((BB=>`"${BB}"`)).join(", ")}.` : qz
```

#### 898. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16124` → after: `L16124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16124) · [Before (L16124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16124)

```diff
-                     return null !== (et = tt.swappedTo) && void 0 !== et ? et : []
+                     return null !== (IB = BB.swappedTo) && void 0 !== IB ? IB : []
```

#### 899. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16127` → after: `L16127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16127) · [Before (L16127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16127)

```diff
-                 busy: wt ? !!Qe : !nV
+                 busy: gB ? !!nI : !VZ
```

#### 900. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16133-L16135` → after: `L16133-L16135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16133-L16135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16133-L16135) · [Before (L16133-L16135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16133-L16135)

```diff
-                   const Xt = null !== (Ot = null === (qt = tt.question) || void 0 === qt ? void 0 : qt.question) && void 0 !== Ot ? Ot : "",
-                     Qt = null !== (Dt = null === (mt = tt.askedFor) || void 0 === mt ? void 0 : mt.request) && void 0 !== Dt ? Dt : "";
-                   kV(BH(Qt, Xt, et), null !== et && void 0 !== et ? et : "Let the AI pick", {
+                   const nB = null !== (TB = null === (JB = BB.question) || void 0 === JB ? void 0 : JB.question) && void 0 !== TB ? TB : "",
+                     hB = null !== (oB = null === (GB = BB.askedFor) || void 0 === GB ? void 0 : GB.request) && void 0 !== oB ? oB : "";
+                   rZ(tc(hB, nB, IB), null !== IB && void 0 !== IB ? IB : "Let the AI pick", {
```

#### 901. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16138-L16139` → after: `L16138-L16139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16138-L16139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16138-L16139) · [Before (L16138-L16139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16138-L16139)

```diff
-                     asked: Vt && et ? `${Qt} ${et}` : null,
-                     guardWords: BH(null !== (jt = null === (Ht = tt.askedFor) || void 0 === Ht ? void 0 : Ht.guardWords) && void 0 !== jt ? jt : "", Xt, et)
+                     asked: ZB && IB ? `${hB} ${IB}` : null,
+                     guardWords: tc(null !== (kB = null === (cB = BB.askedFor) || void 0 === cB ? void 0 : cB.guardWords) && void 0 !== kB ? kB : "", nB, IB)
```

#### 902. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16152-L16153` → after: `L16152-L16153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16152-L16153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16152-L16153) · [Before (L16152-L16153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16152-L16153)

```diff
-                 built: null !== (jt = tt.planBuilt) && void 0 !== jt ? jt : 0,
-                 done: null !== (Xt = tt.planDone) && void 0 !== Xt ? Xt : 0,
+                 built: null !== (kB = BB.planBuilt) && void 0 !== kB ? kB : 0,
+                 done: null !== (nB = BB.planDone) && void 0 !== nB ? nB : 0,
```

#### 903. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16156` → after: `L16156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16156) · [Before (L16156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16156)

```diff
-                   const Ot = null !== (Vt = tt.plan) && void 0 !== Vt ? Vt : [];
+                   const TB = null !== (ZB = BB.plan) && void 0 !== ZB ? ZB : [];
```

#### 904. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16161-L16163` → after: `L16161-L16163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16161-L16163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16161-L16163) · [Before (L16161-L16163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16161-L16163)

```diff
-                       const Vt = tt.map(((tt, Vt) => `${Vt+1}. ${tt}${Vt<et?" (built)":""}`)).join("\n");
-                       return `Build step ${et+1} of our plan now: ${tt[et]}\nThe whole plan:\n${Vt}\nBuild only step ${et+1}, keeping what earlier steps built, so I can try it before the next.`
-                     }(Ot, et), `Build step ${et+1}: ${Ot[et]}`, {
+                       const ZB = BB.map(((BB, ZB) => `${ZB+1}. ${BB}${ZB<IB?" (built)":""}`)).join("\n");
+                       return `Build step ${IB+1} of our plan now: ${BB[IB]}\nThe whole plan:\n${ZB}\nBuild only step ${IB+1}, keeping what earlier steps built, so I can try it before the next.`
+                     }(TB, IB), `Build step ${IB+1}: ${TB[IB]}`, {
```

#### 905. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16181` → after: `L16181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16181) · [Before (L16181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16181)

```diff
-               }, "asked" === tt.noteStatus ? "asked" : "hE"), !Nt && bt, tt.lookups && (0, mt.jsx)(bl, {
+               }, "asked" === BB.noteStatus ? "asked" : "XF"), !yB && WB, BB.lookups && (0, GB.jsx)(Qz, {
```

#### 906. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16222` → after: `L16222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16222) · [Before (L16222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16222)

```diff
-                   Yt(Cl(null !== (et = tt.worldCode) && void 0 !== et ? et : []))
+                   AB(wz(null !== (IB = BB.worldCode) && void 0 !== IB ? IB : []))
```

#### 907. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16224` → after: `L16224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16224) · [Before (L16224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16224)

```diff
-               }), wt && "ask" === tt.trial && tt.id > PO && Ft <= (null !== (Qt = tt.trialErrors) && void 0 !== Qt ? Qt : 0) && (0, mt.jsxs)("div", {
+               }), gB && "ask" === BB.trial && BB.id > MT && RB <= (null !== (hB = BB.trialErrors) && void 0 !== hB ? hB : 0) && (0, GB.jsxs)("div", {
```

#### 908. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16303` → after: `L16303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16303) · [Before (L16303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16303)

```diff
-                       request: null !== (et = tt.retry) && void 0 !== et ? et : "",
+                       request: null !== (IB = BB.retry) && void 0 !== IB ? IB : "",
```

#### 909. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16325` → after: `L16325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16325) · [Before (L16325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16325)

```diff
-                   ...Aj.h,
+                   ...fk.c,
```

#### 910. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16327` → after: `L16327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16327) · [Before (L16327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16327)

```diff
-                   disabled: (null !== (lt = tt.retryAt) && void 0 !== lt ? lt : 0) > ne,
+                   disabled: (null !== (zB = BB.retryAt) && void 0 !== zB ? zB : 0) > VI,
```

#### 911. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16333` → after: `L16333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16333) · [Before (L16333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16333)

```diff
-                   children: (null !== (Et = tt.retryAt) && void 0 !== Et ? Et : 0) > ne ? `Try again in ${ul((null!==(ft=tt.retryAt)&&void 0!==ft?ft:0)-ne)}` : "Try again"
+                   children: (null !== (FB = BB.retryAt) && void 0 !== FB ? FB : 0) > VI ? `Try again in ${Oz((null!==(NB=BB.retryAt)&&void 0!==NB?NB:0)-VI)}` : "Try again"
```

#### 912. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16359` → after: `L16359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16359) · [Before (L16359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16359)

```diff
-               title: null !== (Jt = tt.logTitle) && void 0 !== Jt ? Jt : tt.isCalm ? "Update" : "Problem",
+               title: null !== (dB = BB.logTitle) && void 0 !== dB ? dB : BB.isCalm ? "Update" : "Problem",
```

#### 913. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16377` → after: `L16377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16377) · [Before (L16377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16377)

```diff
-               ...Aj.h,
+               ...fk.c,
```

#### 914. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16384` → after: `L16384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16384) · [Before (L16384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16384)

```diff
-               ...Aj.h,
+               ...fk.c,
```

#### 915. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16390-L16391` → after: `L16390-L16391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16390-L16391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16390-L16391) · [Before (L16390-L16391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16390-L16391)

```diff
-             }), (Zt ? Ve ? nQ : sQ : []).map((tt => (0, Ot.createElement)("button", {
-               ...Aj.h,
+             }), (jB ? II ? Iz : Bz : []).map((BB => (0, TB.createElement)("button", {
+               ...fk.c,
```

#### 916. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16400` → after: `L16400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16400) · [Before (L16400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16400)

```diff
-             children: [rO ? We ? `Bloxd's safety check first makes sure your request is about your game, then it goes with your code to ${rO.model.name} with your key.` : `Your request goes with your code to ${rO.model.name} with your key, without Bloxd's safety check.` : iO ? "d … [truncated]
+             children: [eT ? YI ? `Bloxd's safety check first makes sure your request is about your game, then it goes with your code to ${eT.model.name} with your key.` : `Your request goes with your code to ${eT.model.name} with your key, without Bloxd's safety check.` : lT ? "d … [truncated]
```

#### 917. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16419` → after: `L16419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16419) · [Before (L16419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16419)

```diff
-                 title: null !== (Wt = Kl(Qe)) && void 0 !== Wt ? Wt : "Thinking\u2026",
+                 title: null !== (YB = Yz(nI)) && void 0 !== YB ? YB : "Thinking\u2026",
```

#### 918. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16423` → after: `L16423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16423) · [Before (L16423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16423)

```diff
-                   children: [AX((null !== (St = Qe.until) && void 0 !== St ? St : ne) - ne), " Lots of people share Bot.xd."]
+                   children: [tn((null !== (iB = nI.until) && void 0 !== iB ? iB : VI) - VI), " Lots of people share Bot.xd."]
```

#### 919. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16427` → after: `L16427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16427) · [Before (L16427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16427)

```diff
-                   }), "screening" === Qe.phase && (null !== (ct = Qe.until) && void 0 !== ct ? ct : 0) > ne && (0, mt.jsxs)("span", {
+                   }), "screening" === nI.phase && (null !== (pB = nI.until) && void 0 !== pB ? pB : 0) > VI && (0, GB.jsxs)("span", {
```

#### 920. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16429` → after: `L16429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16429) · [Before (L16429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16429)

```diff
-                     children: [AX((null !== (Rt = Qe.until) && void 0 !== Rt ? Rt : ne) - ne), " Lots of people share the safety check."]
+                     children: [tn((null !== (aB = nI.until) && void 0 !== aB ? aB : VI) - VI), " Lots of people share the safety check."]
```

#### 921. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16432` → after: `L16432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16432) · [Before (L16432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16432)

```diff
-                     children: Qe.keyModel ? `${Qe.keyModel} is answering with your key.` : Qe.isSuperBot ? `${Cd} is answering from your usage.` : gX(Ie.current, Qe.model)
+                     children: nI.keyModel ? `${nI.keyModel} is answering with your key.` : nI.isSuperBot ? `${Cv} is answering from your usage.` : Sn(HI.current, nI.model)
```

#### 922. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16456` → after: `L16456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16456) · [Before (L16456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16456)

```diff
-                   children: Ve ? "Your code block runs once in your world, as if you clicked it. If it shows an error, the AI fixes it." : `Your change runs in your world for ${IH.B/1e3} seconds. If it shows an error, the AI fixes it.`
+                   children: II ? "Your code block runs once in your world, as if you clicked it. If it shows an error, the AI fixes it." : `Your change runs in your world for ${Hc.D/1e3} seconds. If it shows an error, the AI fixes it.`
```

#### 923. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16470` → after: `L16470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16470) · [Before (L16470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16470)

```diff
-               children: null !== (Vt = tt.shown) && void 0 !== Vt ? Vt : tt.text
+               children: null !== (ZB = BB.shown) && void 0 !== ZB ? ZB : BB.text
```

#### 924. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16473` → after: `L16473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16473) · [Before (L16473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16473)

```diff
-               children: [tt.id === iV ? "Pick Bot.xd to send it" : null !== (Ot = xQ[et]) && void 0 !== Ot ? Ot : "In line", (0, mt.jsx)("button", {
+               children: [BB.id === lZ ? "Pick Bot.xd to send it" : null !== (TB = Kh[IB]) && void 0 !== TB ? TB : "In line", (0, GB.jsx)("button", {
```

#### 925. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16493` → after: `L16493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16493) · [Before (L16493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16493)

```diff
-                 rt(null !== (tt = SV.path) && void 0 !== tt ? tt : Pt, null !== (et = SV.line) && void 0 !== et ? et : 1), (0, Qt.e)() && ot()
+                 eB(null !== (BB = iZ.path) && void 0 !== BB ? BB : MB, null !== (IB = iZ.line) && void 0 !== IB ? IB : 1), (0, hB.e)() && LB()
```

#### 926. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16495` → after: `L16495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16495) · [Before (L16495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16495)

```diff
-               children: [SV.path && SV.path !== Pt ? `${SV.path} line` : "Line", " ", SV.line]
+               children: [iZ.path && iZ.path !== MB ? `${iZ.path} line` : "Line", " ", iZ.line]
```

#### 927. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16504` → after: `L16504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16504) · [Before (L16504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16504)

```diff
-             ...Aj.h,
+             ...fk.c,
```

#### 928. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16508` → after: `L16508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16508) · [Before (L16508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16508)

```diff
-                 Te(Ft), rV.current(`Fix this error: ${WV}`)
+                 EI(RB), eZ.current(`Fix this error: ${YZ}`)
```

#### 929. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16513` → after: `L16513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16513) · [Before (L16513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16513)

```diff
-             ...Aj.h,
+             ...fk.c,
```

#### 930. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16517` → after: `L16517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16517) · [Before (L16517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16517)

```diff
-                 Te(Ft), rV.current(`Explain this error in simple words, and where it is in my code: ${WV}`)
+                 EI(RB), eZ.current(`Explain this error in simple words, and where it is in my code: ${YZ}`)
```

#### 931. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16564` → after: `L16564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16564) · [Before (L16564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16564)

```diff
-               placeholder: ie ? `How should ${XQ(ie)} change?` : FO ? "Or type your own answer here" : "Ask AI",
+               placeholder: lI ? `How should ${zh(lI)} change?` : RT ? "Or type your own answer here" : "Ask AI",
```

#### 932. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16571` → after: `L16571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16571) · [Before (L16571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16571)

```diff
-             }), (0, mt.jsx)(Xt.m, {
+             }), (0, GB.jsx)(nB.p, {
```

#### 933. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16576` → after: `L16576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16576) · [Before (L16576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16576)

```diff
-               children: (0, mt.jsx)(lt.b, {
+               children: (0, GB.jsx)(zB.d, {
```

#### 934. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16587` → after: `L16587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16587) · [Before (L16587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16587)

```diff
-             editsOn: Zt ? Pe : null,
+             editsOn: jB ? MI : null,
```

#### 935. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16592-L16594` → after: `L16592-L16594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16592-L16594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16592-L16594) · [Before (L16592-L16594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16592-L16594)

```diff
-               if (Qe) return 0 === BV.length ? "You can type your next request: it sends when this answer is done." : 1 === BV.length ? "1 request waiting: it sends when this answer is done." : `${BV.length} requests waiting: they send one at a time.`;
-               if (rO && he) return `Your next question goes to Bot.xd, then back to ${rO.model.name}.`;
-               if (rO) return `Your question and code go to ${km(rO.provider,rO.baseUrl,!0)}.${We?"":" Safety check off."}`;
+               if (nI) return 0 === tZ.length ? "You can type your next request: it sends when this answer is done." : 1 === tZ.length ? "1 request waiting: it sends when this answer is done." : `${tZ.length} requests waiting: they send one at a time.`;
+               if (eT && wI) return `Your next question goes to Bot.xd, then back to ${eT.model.name}.`;
+               if (eT) return `Your question and code go to ${mG(eT.provider,eT.baseUrl,!0)}.${YI?"":" Safety check off."}`;
```

#### 936. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16597` → after: `L16597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16597) · [Before (L16597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16597)

```diff
-                   return tt <= et ? null : `Limit resets in ${(0,Jd.e)(Math.ceil((tt-et)/6e4))}`
+                   return BB <= IB ? null : `Limit resets in ${(0,dv.d)(Math.ceil((BB-IB)/6e4))}`
```

#### 937. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16609` → after: `L16609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16609) · [Before (L16609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16609)

```diff
-               return hV > ne ? `Send now and it starts by itself. ${AX(hV-ne)}` : null
+               return wZ > VI ? `Send now and it starts by itself. ${tn(wZ-VI)}` : null
```

#### 938. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16617` → after: `L16617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16617) · [Before (L16617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16617)

```diff
-       onPrevious: "aiPanel" === gO ? ot : void 0,
+       onPrevious: "aiPanel" === DT ? LB : void 0,
```

#### 939. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16622` → after: `L16622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16622) · [Before (L16622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16622)

```diff
- }, 39842: (tt, et, Vt) => {
+ }, 39693: (BB, IB, ZB) => {
```

#### 940. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16625-L16626` → after: `L16626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16626) · [Before (L16625-L16626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16625-L16626)

```diff
-     g: () => Dt,
-     k: () => qt
+     d: () => JB
```

#### 941. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16635` → after: `L16635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16635) · [Before (L16635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16635)

```diff
-     const et = (null !== tt && void 0 !== tt ? tt : "").match(/-?\d+(?:\.\d+)?/g);
+     const IB = (null !== BB && void 0 !== BB ? BB : "").match(/-?\d+(?:\.\d+)?/g);
```

#### 942. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16640` → after: `L16640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16640) · [Before (L16640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16640)

```diff
-     return tt === et ? String(tt) : `${tt}-${et}`
+     return BB === IB ? String(BB) : `${BB}-${IB}`
```

#### 943. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16654` → after: `L16654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16654) · [Before (L16654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16654)

```diff
-           const tt = `${jt} ${Ht} ${qt}`,
+           const BB = `${kB} ${cB} ${JB}`,
```

#### 944. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16668` → after: `L16668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16668) · [Before (L16668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16668)

```diff
-     return qt.push(...Dt.values()), qt.sort(((tt, et) => tt.z0 - et.z0 || tt.x0 - et.x0)).map((tt => `x${mt(tt.x0,tt.x1)} z${mt(tt.z0,tt.z1)} ${tt.name}`))
+     return JB.push(...oB.values()), JB.sort(((BB, IB) => BB.z0 - IB.z0 || BB.x0 - IB.x0)).map((BB => `x${GB(BB.x0,BB.x1)} z${GB(BB.z0,BB.z1)} ${BB.name}`))
```

#### 945. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16675-L16676` → after: `L16675-L16676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16675-L16676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16675-L16676) · [Before (L16675-L16676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16675-L16676)

```diff
-       Xt = [`The chunk from ${tt.join(" ")} to ${jt.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
-     null !== qt && Xt.push(`The player's feet are at ${qt.map(Math.floor).join(" ")}, ${Ht?"in this chunk":"outside this chunk"}.`);
+       nB = [`The chunk from ${BB.join(" ")} to ${kB.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
+     null !== JB && nB.push(`The player's feet are at ${JB.map(Math.floor).join(" ")}, ${cB?"in this chunk":"outside this chunk"}.`);
```

#### 946. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16681` → after: `L16681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16681) · [Before (L16681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16681)

```diff
-       (null === Dt || void 0 === Dt ? void 0 : Dt.boxes) === qt ? Dt.to = Ot : Qt.push({
+       (null === oB || void 0 === oB ? void 0 : oB.boxes) === JB ? oB.to = TB : hB.push({
```

#### 947. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16691` → after: `L16691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16691) · [Before (L16691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16691)

```diff
-       const tt = `y${mt(Ot.from,Ot.to)}: ${Ot.boxes}`;
+       const BB = `y${GB(TB.from,TB.to)}: ${TB.boxes}`;
```

#### 948. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16693` → after: `L16693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16693) · [Before (L16693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16693)

```diff
-         Xt.push(`Cut short: the layers from y${Ot.from} up aren't shown, as there are too many blocks.`);
+         nB.push(`Cut short: the layers from y${TB.from} up aren't shown, as there are too many blocks.`);
```

#### 949. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16700` → after: `L16700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16700) · [Before (L16700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16700)

```diff
- }, 4995: (tt, et, Vt) => {
+ }, 4999: (BB, IB, ZB) => {
```

#### 950. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16702-L16703` → after: `L16702-L16704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16702-L16704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16702-L16704) · [Before (L16702-L16703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16702-L16703)

```diff
-     d: () => dt,
-     f: () => qt,
+     e: () => vB,
+     g: () => JB,
+     h: () => kB,
```

#### 951. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16705-L16706` → after: `L16706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16706) · [Before (L16705-L16706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16705-L16706)

```diff
-     m: () => mt,
-     q: () => Dt
+     l: () => oB
```

#### 952. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16708` → after: `L16708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16708) · [Before (L16708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16708)

```diff
-   var Ot = Vt(4986);
+   var TB = ZB(4995);
```

#### 953. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16717` → after: `L16717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16717) · [Before (L16717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16717)

```diff
-     mt = `${Ot.k} lists every page of the Bloxd Code API docs.`;
+     GB = `${TB.i} lists every page of the Bloxd Code API docs.`;
```

#### 954. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16720` → after: `L16720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16720) · [Before (L16720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16720)

```diff
-     return `${tt.url}${encodeURIComponent(et.toWellFormed())}`
+     return `${BB.url}${encodeURIComponent(IB.toWellFormed())}`
```

#### 955. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16733` → after: `L16733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16733) · [Before (L16733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16733)

```diff
- }, 4986: (tt, et, Vt) => {
+ }, 4995: (BB, IB, ZB) => {
```

#### 956. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16736` → after: `L16736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16736) · [Before (L16736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16736)

```diff
-     d: () => jt,
+     e: () => kB,
```

#### 957. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16741-L16744` → after: `L16742-L16744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16742-L16744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16742-L16744) · [Before (L16741-L16744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16741-L16744)

```diff
-     p: () => Xt,
-     r: () => Qt,
-     t: () => wt,
-     u: () => Et
+     q: () => hB,
+     u: () => gB,
+     v: () => FB
```

#### 958. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16746` → after: `L16746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16746) · [Before (L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16746)

```diff
-   var Ot = Vt(1676);
+   var TB = ZB(1651);
```

#### 959. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16749` → after: `L16749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16749) · [Before (L16749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16749)

```diff
-     mt = `${Ot.c}${Dt}`,
+     GB = `${TB.b}${oB}`,
```

#### 960. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16758` → after: `L16758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16758) · [Before (L16758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16758)

```diff
-     return `/docs/${Ht(tt)}.md`
+     return `/docs/${cB(BB)}.md`
```

#### 961. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16762` → after: `L16762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16762) · [Before (L16762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16762)

```diff
-     return `/docs/${Ht(tt)}/${et+1}.md`
+     return `/docs/${cB(BB)}/${IB+1}.md`
```

#### 962. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L16783` → after: `L16783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR16783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L16783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/92.js#L16783) · [Before (L16783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/92.js#L16783)

```diff
-     return `/docsHtml/${Ht(tt)}.html`
+     return `/docsHtml/${cB(BB)}.html`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/93.js` (igzsf.a0b73a5f → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/93.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b)

#### 1. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L4)

```diff
-   41494: (tt, et, Vt) => {
+   41304: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L7)

```diff
-       DOCS_LLMS_FULL_TXT_PATH: () => ke.d,
+       DOCS_LLMS_FULL_TXT_PATH: () => rI.e,
```

#### 3. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L9-L10)

```diff
-       DOCS_LLMS_TXT_URL: () => ke.k,
-       ROOT_LLMS_TXT_PATH: () => ke.l,
+       DOCS_LLMS_TXT_URL: () => rI.i,
+       ROOT_LLMS_TXT_PATH: () => rI.k,
```

#### 4. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L12)

```diff
-       arcadeModeStaticConfig: () => wt.b,
+       arcadeModeStaticConfig: () => gB.d,
```

#### 5. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L16-L20` → after: `L16-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L16-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L16-L20) · [Before (L16-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L16-L20)

```diff
-       bedwarsStaticConfig: () => Rt.b,
-       bloxdAggregatorConfig: () => dt.d,
-       bloxdPreprodAggregatorConfig: () => jt.c,
-       bloxdStagingAggregatorConfig: () => Ht.e,
-       bridgeBattleStaticConfig: () => rt.b,
+       bedwarsStaticConfig: () => aB.e,
+       bloxdAggregatorConfig: () => vB.e,
+       bloxdPreprodAggregatorConfig: () => kB.d,
+       bloxdStagingAggregatorConfig: () => cB.b,
+       bridgeBattleStaticConfig: () => eB.e,
```

#### 6. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L23)

```diff
-       clutchStaticConfig: () => xt.c,
+       clutchStaticConfig: () => xB.d,
```

#### 7. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L25)

```diff
-       containmentBreachStaticConfig: () => ee.b,
+       containmentBreachStaticConfig: () => BI.c,
```

#### 8. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L28-L29` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L28-L29) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L28-L29)

```diff
-       coreDefendersStaticConfig: () => te.c,
-       crazyGamesNinetyNineNightsBundle: () => Qt.c,
+       coreDefendersStaticConfig: () => SB.b,
+       crazyGamesNinetyNineNightsBundle: () => hB.d,
```

#### 9. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L31)

```diff
-       customGameSettings: () => Ot.d,
+       customGameSettings: () => TB.f,
```

#### 10. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L33)

```diff
-       customGamesListingPath: () => Le.h,
+       customGamesListingPath: () => PI.g,
```

#### 11. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L35-L37` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L35-L37) · [Before (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L35-L37)

```diff
-       docsPageHtmlPath: () => ke.m,
-       docsPageMarkdownPath: () => ke.p,
-       docsPagePartPath: () => ke.r,
+       docsPageHtmlPath: () => rI.l,
+       docsPageMarkdownPath: () => rI.m,
+       docsPagePartPath: () => rI.q,
```

#### 12. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L39)

```diff
-       docsSitePageMarkdownPath: () => ke.t,
+       docsSitePageMarkdownPath: () => rI.u,
```

#### 13. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L41-L43` → after: `L41-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L41-L43) · [Before (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L41-L43)

```diff
-       doodleStaticConfig: () => St.c,
-       dressUpStaticConfig: () => Tt.d,
-       eatToGrowStaticConfig: () => Oe.b,
+       doodleStaticConfig: () => iB.b,
+       dressUpStaticConfig: () => EB.c,
+       eatToGrowStaticConfig: () => ZI.d,
```

#### 14. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L45)

```diff
-       eviltowerStaticConfig: () => Mt.e,
+       eviltowerStaticConfig: () => UB.d,
```

#### 15. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L47-L52` → after: `L47-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L47-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L47-L52) · [Before (L47-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L47-L52)

```diff
-       extractionStaticConfig: () => Yt.d,
-       firstPartyStudioGames: () => Dt.d,
-       fishingStaticConfig: () => ft.c,
-       gameImageVariantHeights: () => Ke.e,
-       gameImageVariantsEncoding: () => ue.c,
-       getAllAggregatorGameNames: () => mt.c,
+       extractionStaticConfig: () => AB.e,
+       firstPartyStudioGames: () => oB.c,
+       fishingStaticConfig: () => NB.d,
+       gameImageVariantHeights: () => sI.b,
+       gameImageVariantsEncoding: () => QI.e,
+       getAllAggregatorGameNames: () => GB.d,
```

#### 16. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L54-L59` → after: `L54-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L54-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L54-L59) · [Before (L54-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L54-L59)

```diff
-       getCustomGameFromPath: () => ve.j,
-       getCustomGameListingPage: () => Le.j,
-       getCustomGamePagePath: () => ve.n,
-       getCustomGamePageRedirectPath: () => ve.o,
-       getCustomGameSchematicIdFromPath: () => ve.p,
-       getCustomGameThumbnailCandidates: () => be.d,
+       getCustomGameFromPath: () => OI.k,
+       getCustomGameListingPage: () => PI.h,
+       getCustomGamePagePath: () => OI.l,
+       getCustomGamePageRedirectPath: () => OI.m,
+       getCustomGameSchematicIdFromPath: () => OI.q,
+       getCustomGameThumbnailCandidates: () => WI.c,
```

#### 17. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L61-L69` → after: `L61-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L61-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L61-L69) · [Before (L61-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L61-L69)

```diff
-       getCustomGameUrlIdFromPath: () => ve.t,
-       getFirstPartyStudioGameName: () => Dt.f,
-       getGameCanonicalUrl: () => ve.u,
-       getGameImageBlurhash: () => Je.c,
-       getGameImagePath: () => he.e,
-       getGameImageVariantPath: () => Ke.k,
-       getGameImageVariantSource: () => Ce.c,
-       getGameImageVariants: () => Ce.g,
-       getGamePage: () => ve.A,
+       getCustomGameUrlIdFromPath: () => OI.u,
+       getFirstPartyStudioGameName: () => oB.g,
+       getGameCanonicalUrl: () => OI.w,
+       getGameImageBlurhash: () => dI.b,
+       getGameImagePath: () => wI.f,
+       getGameImageVariantPath: () => sI.j,
+       getGameImageVariantSource: () => CI.d,
+       getGameImageVariants: () => CI.e,
+       getGamePage: () => OI.G,
```

#### 18. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L71-L79` → after: `L71-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L71-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L71-L79) · [Before (L71-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L71-L79)

```diff
-       getGamePagePath: () => ve.v,
-       getGamePageRedirectPath: () => ve.w,
-       getGameSeoMetadata: () => ve.D,
-       getGameTileImagePaths: () => Ce.k,
-       getIndexedCustomGameListingPaths: () => Le.l,
-       getIndexedGamePages: () => ve.E,
-       getJsonLdScriptText: () => ve.H,
-       getPathGamePageContentGame: () => ve.K,
-       getPathSeoMetadata: () => ve.N,
+       getGamePagePath: () => OI.A,
+       getGamePageRedirectPath: () => OI.D,
+       getGameSeoMetadata: () => OI.I,
+       getGameTileImagePaths: () => CI.i,
+       getIndexedCustomGameListingPaths: () => PI.i,
+       getIndexedGamePages: () => OI.K,
+       getJsonLdScriptText: () => OI.N,
+       getPathGamePageContentGame: () => OI.R,
+       getPathSeoMetadata: () => OI.S,
```

#### 19. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L81-L88` → after: `L81-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L81-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L81-L88) · [Before (L81-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L81-L88)

```diff
-       getPlayerSeoMetadata: () => ve.O,
-       getSeoMetaTagAttributes: () => ve.Q,
-       getShaderPackPolicy: () => Ot.h,
-       getShaderPackSeoMetadata: () => ve.U,
-       getStaticGameConfig: () => Ot.k,
-       getStaticPageSeoMetadata: () => ve.W,
-       getUndescribedPageSeoMetadata: () => ve.Y,
-       goalRushStaticConfig: () => st.c,
+       getPlayerSeoMetadata: () => OI.V,
+       getSeoMetaTagAttributes: () => OI.Y,
+       getShaderPackPolicy: () => TB.j,
+       getShaderPackSeoMetadata: () => OI.ab,
+       getStaticGameConfig: () => TB.m,
+       getStaticPageSeoMetadata: () => OI.bb,
+       getUndescribedPageSeoMetadata: () => OI.db,
+       goalRushStaticConfig: () => KB.e,
```

#### 20. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L90-L91` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L90-L91) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L90-L91)

```diff
-       greenvilleStaticConfig: () => ct.b,
-       heroesvbrainrotsStaticConfig: () => nt.c,
+       greenvilleStaticConfig: () => pB.e,
+       heroesvbrainrotsStaticConfig: () => VB.e,
```

#### 21. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L93-L96` → after: `L93-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L93-L96) · [Before (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L93-L96)

```diff
-       infectionStaticConfig: () => Lt.c,
-       isGameIndexed: () => ve.$,
-       knockoutStaticConfig: () => pt.e,
-       lastStandStaticConfig: () => zt.c,
+       infectionStaticConfig: () => PB.d,
+       isGameIndexed: () => OI.eb,
+       knockoutStaticConfig: () => bB.d,
+       lastStandStaticConfig: () => XB.e,
```

#### 22. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L99-L106` → after: `L99-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L99-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L99-L106) · [Before (L99-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L99-L106)

```diff
-       luckyTowersStaticConfig: () => vt.e,
-       murderMysteryStaticConfig: () => It.c,
-       naturalDisasterStaticConfig: () => kt.b,
-       ninetyNineNightsStaticConfig: () => Gt.e,
-       normaliseFirstPartyGameNames: () => Dt.g,
-       oneBlockStaticConfig: () => bt.d,
-       paintballStaticConfig: () => Ft.c,
-       parkourStaticConfig: () => lt.b,
+       luckyTowersStaticConfig: () => OB.c,
+       murderMysteryStaticConfig: () => HB.b,
+       naturalDisasterStaticConfig: () => rB.c,
+       ninetyNineNightsStaticConfig: () => mB.b,
+       normaliseFirstPartyGameNames: () => oB.i,
+       oneBlockStaticConfig: () => WB.e,
+       paintballStaticConfig: () => RB.e,
+       parkourStaticConfig: () => zB.d,
```

#### 23. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L108-L109` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L108-L109) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L108-L109)

```diff
-       piratesStaticConfig: () => Kt.c,
-       plotsStaticConfig: () => ut.c,
+       piratesStaticConfig: () => sB.e,
+       plotsStaticConfig: () => QB.b,
```

#### 24. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L111)

```diff
-       pvpCivStaticConfig: () => Ve.d,
+       pvpCivStaticConfig: () => II.c,
```

#### 25. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L113-L114` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L113-L114) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L113-L114)

```diff
-       rankedStaticConfig: () => Ut.d,
-       readDocsPageMarkdownPath: () => ke.u,
+       rankedStaticConfig: () => uB.e,
+       readDocsPageMarkdownPath: () => rI.v,
```

#### 26. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L116-L120` → after: `L116-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L116-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L116-L120) · [Before (L116-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L116-L120)

```diff
-       renderSeoMetaTags: () => ve.bb,
-       rocketParkourStaticConfig: () => ot.e,
-       rocketSpleefStaticConfig: () => ht.d,
-       seoSiteOrigin: () => Fe.c,
-       shootingStaticConfig: () => Et.c,
+       renderSeoMetaTags: () => OI.ib,
+       rocketParkourStaticConfig: () => LB.d,
+       rocketSpleefStaticConfig: () => wB.c,
+       seoSiteOrigin: () => RI.b,
+       shootingStaticConfig: () => FB.b,
```

#### 27. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L123)

```diff
-       skyblockStaticConfig: () => Jt.d,
+       skyblockStaticConfig: () => dB.b,
```

#### 28. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L132` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L132) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L132)

```diff
-     var Ot = Vt(839);
+     var TB = ZB(810);
```

#### 29. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L136-L146` → after: `L136-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L136-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L136-L152) · [Before (L136-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L136-L146)

```diff
-       return null !== (et = null === (Vt = (0, Ot.k)(tt)) || void 0 === Vt ? void 0 : Vt.defaultListedVariation) && void 0 !== et ? et : tt
-     }
-     var Dt = Vt(1099),
-       mt = Vt(1130),
-       dt = Vt(836),
-       jt = Vt(823),
-       Ht = Vt(827),
-       Xt = Vt(821),
-       Qt = Vt(818),
-       lt = Vt(843),
-       Et = Vt(869),
+       return null !== (IB = null === (ZB = (0, TB.m)(BB)) || void 0 === ZB ? void 0 : ZB.defaultListedVariation) && void 0 !== IB ? IB : BB
+     }
+     var oB = ZB(1051),
+       GB = ZB(1075),
+       vB = ZB(803),
+       kB = ZB(788),
+       cB = ZB(796),
+       nB = ZB(779),
+       hB = ZB(770),
+       zB = ZB(817),
+       FB = ZB(840),
+       NB = ZB(820),
+       gB = ZB(826),
+       qB = ZB(828),
+       yB = ZB(832),
+       UB = ZB(844),
+ ... (1 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L148-L149` → after: `L154-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L154-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L154-L156) · [Before (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L148-L149)

```diff
-       wt = Vt(853),
-       yt = Vt(859),
+       CB = ZB(857),
+       QB = ZB(860),
+       sB = ZB(862),
```

#### 31. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L151-L154` → after: `L158-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L158-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L158-L164) · [Before (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L151-L154)

```diff
-       Mt = Vt(877),
-       bt = Vt(886),
-       Jt = Vt(894),
-       Ct = Vt(912),
+       OB = ZB(873),
+       YB = ZB(878),
+       iB = ZB(885),
+       pB = ZB(893),
+       aB = ZB(901),
+       HB = ZB(908),
+       MB = ZB(914),
```

#### 32. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L156-L161` → after: `L166-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L166-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L166-L171) · [Before (L156-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L156-L161)

```diff
-       Kt = Vt(922),
-       ht = Vt(929),
-       vt = Vt(934),
-       Wt = Vt(937),
-       St = Vt(940),
-       ct = Vt(945),
+       PB = ZB(923),
+       RB = ZB(927),
+       rB = ZB(936),
+       mB = ZB(938),
+       XB = ZB(941),
+       LB = ZB(944),
```

#### 33. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L164-L168` → after: `L174-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L174-L176) · [Before (L164-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L164-L168)

```diff
-       Pt = Vt(957),
-       Zt = Vt(964),
-       Lt = Vt(968),
-       Ft = Vt(970),
-       kt = Vt(975),
+       fB = ZB(962),
+       lB = ZB(967),
+       AB = ZB(976),
```

#### 34. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L170-L188` → after: `L178-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L178-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L178-L188) · [Before (L170-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L170-L188)

```diff
-       zt = Vt(991),
-       ot = Vt(998),
-       rt = Vt(1001),
-       Ut = Vt(1009),
-       At = Vt(1016),
-       it = Vt(1024),
-       Yt = Vt(1031),
-       Bt = Vt(1035),
-       pt = Vt(1037),
-       xt = Vt(1045),
-       Tt = Vt(1049),
-       gt = Vt(1052),
-       st = Vt(1059),
-       nt = Vt(1067),
-       te = Vt(1073),
-       ee = Vt(1075),
- ... (3 more removed lines; see GitHub link above)
+       bB = ZB(993),
+       xB = ZB(996),
+       EB = ZB(1004),
+       DB = ZB(1007),
+       KB = ZB(1011),
+       VB = ZB(1013),
+       SB = ZB(1017),
+       BI = ZB(1025),
+       II = ZB(1032),
+       ZI = ZB(1039),
+       TI = ZB(1046);
```

#### 35. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L404-L411` → after: `L404-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L404-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L404-L411) · [Before (L404-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L404-L411)

```diff
-     var be = Vt(1661),
-       Je = Vt(1674),
-       Ce = Vt(3577),
-       ue = Vt(3593),
-       Ke = Vt(1667),
-       he = Vt(3585),
-       ve = Vt(1641),
-       We = Vt(1687);
+     var WI = ZB(1632),
+       dI = ZB(1642),
+       CI = ZB(3685),
+       QI = ZB(3696),
+       sI = ZB(1638),
+       wI = ZB(3688),
+       OI = ZB(1614),
+       YI = ZB(1663);
```

#### 36. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L414-L433` → after: `L414-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L414-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L414-L433) · [Before (L414-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L414-L433)

```diff
-       return `<${tt}><h2>${(0,ve.g)(et)}</h2>${Vt}</${tt}>`
-     }
- 
-     function ce(tt) {
-       return tt.map((tt => `<p>${(0,ve.g)(tt)}</p>`)).join("")
-     }
- 
-     function Re(tt) {
-       return `<ul>${tt.map((tt=>`<li>${tt}</li>`)).join("")}</ul>`
-     }
- 
-     function Ie(tt) {
-       return Re(tt.map(ve.g))
-     }
- 
-     function Pe(tt, et) {
- ... (4 more removed lines; see GitHub link above)
+       return `<${BB}><h2>${(0,OI.g)(IB)}</h2>${ZB}</${BB}>`
+     }
+ 
+     function pI(BB) {
+       return BB.map((BB => `<p>${(0,OI.g)(BB)}</p>`)).join("")
+     }
+ 
+     function aI(BB) {
+       return `<ul>${BB.map((BB=>`<li>${BB}</li>`)).join("")}</ul>`
+     }
+ 
+     function HI(BB) {
+       return aI(BB.map(OI.g))
+     }
+ 
+     function MI(BB, IB) {
+ ... (4 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L437` → after: `L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L437) · [Before (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L437)

```diff
-       const Vt = (0, ve.A)(tt);
+       const ZB = (0, OI.G)(BB);
```

#### 38. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L446)

```diff
-           return `<h3>${(0,ve.g)(et)}</h3><p>${(0,ve.g)(Vt)}</p>`
+           return `<h3>${(0,OI.g)(IB)}</h3><p>${(0,OI.g)(ZB)}</p>`
```

#### 39. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L448-L452` → after: `L448-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L448-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L448-L452) · [Before (L448-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L448-L452)

```diff
-       return `<main style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><article>${[`<header><h1>${(0,ve.g)(Ot.name)}</h1><p>${(0,ve.g)(Ot.description)}</p></header>`,Se("section",qt.whatIs,ce(Ot.whatIs)),Se("section",qt.howToPlay,ce(Ot.howToPlay)) … [truncated]
-     }
-     var Le = Vt(1680),
-       Fe = Vt(1676),
-       ke = Vt(4986)
+       return `<main style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><article>${[`<header><h1>${(0,OI.g)(TB.name)}</h1><p>${(0,OI.g)(TB.description)}</p></header>`,iI("section",JB.whatIs,pI(TB.whatIs)),iI("section",JB.howToPlay,pI(TB.howToPlay)) … [truncated]
+     }
+     var PI = ZB(1657),
+       RI = ZB(1651),
+       rI = ZB(4995)
```

#### 40. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L454)

```diff
-   4986: (tt, et, Vt) => {
+   4995: (BB, IB, ZB) => {
```

#### 41. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L457` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L457) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L457)

```diff
-       d: () => jt,
+       e: () => kB,
```

#### 42. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L462-L465` → after: `L463-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L463-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L463-L465) · [Before (L462-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L462-L465)

```diff
-       p: () => Xt,
-       r: () => Qt,
-       t: () => wt,
-       u: () => Et
+       q: () => hB,
+       u: () => gB,
+       v: () => FB
```

#### 43. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L467)

```diff
-     var Ot = Vt(1676);
+     var TB = ZB(1651);
```

#### 44. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L470` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L470) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L470)

```diff
-       mt = `${Ot.c}${Dt}`,
+       GB = `${TB.b}${oB}`,
```

#### 45. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L479` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L479) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L479)

```diff
-       return `/docs/${Ht(tt)}.md`
+       return `/docs/${cB(BB)}.md`
```

#### 46. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L483` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L483) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L483)

```diff
-       return `/docs/${Ht(tt)}/${et+1}.md`
+       return `/docs/${cB(BB)}/${IB+1}.md`
```

#### 47. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L504` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/93.js#L504) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/93.js#L504)

```diff
-       return `/docsHtml/${Ht(tt)}.html`
+       return `/docsHtml/${cB(BB)}.html`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/94.js` (igzsf.a0b73a5f → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/94.js` (3947 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030)

#### 1. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1)

```diff
- /*! For license information please see igzsf.94.2f83ebcc.chunk.js.LICENSE.txt */
+ /*! For license information please see c6gaap.94.a0a18958.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L5)

```diff
-   39771: () => {
+   39622: () => {
```

#### 3. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L8)

```diff
-   39792: (tt, et, Vt) => {
+   39641: (BB, IB, ZB) => {
```

#### 4. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L21)

```diff
-       wt = Vt(9427).d,
+       gB = ZB(9301).b,
```

#### 5. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L36)

```diff
-         var lt = 0 === Ht ? Vt : 1 === Ht ? Ot : qt;
+         var zB = 0 === cB ? ZB : 1 === cB ? TB : JB;
```

#### 6. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L46-L47` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L46-L47) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L46-L47)

```diff
-           var Jt = yt > 0 ? (Xt[Ht] - mt[Ht]) / yt : (Qt[Ht] - Dt[Ht]) / yt,
-             Ct = yt > 0 ? (Qt[Ht] - jt - Dt[Ht]) / yt : (Xt[Ht] + jt - mt[Ht]) / yt;
+           var dB = qB > 0 ? (nB[cB] - GB[cB]) / qB : (hB[cB] - oB[cB]) / qB,
+             CB = qB > 0 ? (hB[cB] - kB - oB[cB]) / qB : (nB[cB] + kB - GB[cB]) / qB;
```

#### 7. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L74-L75` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L74-L75) · [Before (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L74-L75)

```diff
-         var Jt = Et ? Nt + 1 - wt : wt - Nt;
-         Jt < 0 && (Jt = 0), jt[lt] = bt < 1 / 0 ? bt * Jt : 1 / 0
+         var dB = FB ? yB + 1 - gB : gB - yB;
+         dB < 0 && (dB = 0), kB[zB] = WB < 1 / 0 ? WB * dB : 1 / 0
```

#### 8. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L156-L157` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L156-L157) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L156-L157)

```diff
-           var rt = ct ? wt : 1;
-           if (kt > 0 ? Qt[ut] = Math.round(Qt[ut] * rt) / rt : Ht[ut] = Math.round(Ht[ut] * rt) / rt, et(Jt, ut, kt, Gt)) return Jt;
+           var eB = pB ? gB : 1;
+           if (rB > 0 ? hB[QB] = Math.round(hB[QB] * eB) / eB : cB[QB] = Math.round(cB[QB] * eB) / eB, IB(dB, QB, rB, mB)) return dB;
```

#### 9. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L186)

```diff
-   39842: (tt, et, Vt) => {
+   39693: (BB, IB, ZB) => {
```

#### 10. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L189-L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L190) · [Before (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L189-L190)

```diff
-       g: () => Dt,
-       k: () => qt
+       d: () => JB
```

#### 11. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L199)

```diff
-       const et = (null !== tt && void 0 !== tt ? tt : "").match(/-?\d+(?:\.\d+)?/g);
+       const IB = (null !== BB && void 0 !== BB ? BB : "").match(/-?\d+(?:\.\d+)?/g);
```

#### 12. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L204)

```diff
-       return tt === et ? String(tt) : `${tt}-${et}`
+       return BB === IB ? String(BB) : `${BB}-${IB}`
```

#### 13. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L218)

```diff
-             const tt = `${jt} ${Ht} ${qt}`,
+             const BB = `${kB} ${cB} ${JB}`,
```

#### 14. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L232)

```diff
-       return qt.push(...Dt.values()), qt.sort(((tt, et) => tt.z0 - et.z0 || tt.x0 - et.x0)).map((tt => `x${mt(tt.x0,tt.x1)} z${mt(tt.z0,tt.z1)} ${tt.name}`))
+       return JB.push(...oB.values()), JB.sort(((BB, IB) => BB.z0 - IB.z0 || BB.x0 - IB.x0)).map((BB => `x${GB(BB.x0,BB.x1)} z${GB(BB.z0,BB.z1)} ${BB.name}`))
```

#### 15. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L239-L240` → after: `L239-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L239-L240) · [Before (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L239-L240)

```diff
-         Xt = [`The chunk from ${tt.join(" ")} to ${jt.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
-       null !== qt && Xt.push(`The player's feet are at ${qt.map(Math.floor).join(" ")}, ${Ht?"in this chunk":"outside this chunk"}.`);
+         nB = [`The chunk from ${BB.join(" ")} to ${kB.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
+       null !== JB && nB.push(`The player's feet are at ${JB.map(Math.floor).join(" ")}, ${cB?"in this chunk":"outside this chunk"}.`);
```

#### 16. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L245)

```diff
-         (null === Dt || void 0 === Dt ? void 0 : Dt.boxes) === qt ? Dt.to = Ot : Qt.push({
+         (null === oB || void 0 === oB ? void 0 : oB.boxes) === JB ? oB.to = TB : hB.push({
```

#### 17. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L255)

```diff
-         const tt = `y${mt(Ot.from,Ot.to)}: ${Ot.boxes}`;
+         const BB = `y${GB(TB.from,TB.to)}: ${TB.boxes}`;
```

#### 18. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L257)

```diff
-           Xt.push(`Cut short: the layers from y${Ot.from} up aren't shown, as there are too many blocks.`);
+           nB.push(`Cut short: the layers from y${TB.from} up aren't shown, as there are too many blocks.`);
```

#### 19. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L265)

```diff
-   39850: (tt, et, Vt) => {
+   39701: (BB, IB, ZB) => {
```

#### 20. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L267-L268` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L267-L268) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L267-L268)

```diff
-       e: () => Ot,
-       h: () => qt
+       d: () => TB,
+       g: () => JB
```

#### 21. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L273)

```diff
-   37110: (tt, et, Vt) => {
+   36909: (BB, IB, ZB) => {
```

#### 22. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L276-L278` → after: `L277-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L277-L278) · [Before (L276-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L276-L278)

```diff
-       h: () => ut,
-       i: () => Kt,
-       k: () => ft
+       f: () => sB,
+       h: () => NB
```

#### 23. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L280)

```diff
-     var Ot = Vt(1140),
+     var TB = ZB(1091),
```

#### 24. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L283-L290` → after: `L283-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L283-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L283-L290) · [Before (L283-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L283-L290)

```diff
-       mt = Vt(83),
-       dt = Vt(1472),
-       jt = Vt(1556),
-       Ht = Vt(1464),
-       Xt = Vt(1371),
-       Qt = Vt(1286),
-       lt = Vt(37112),
-       Et = Vt(1188);
+       GB = ZB(82),
+       vB = ZB(1429),
+       kB = ZB(1516),
+       cB = ZB(1421),
+       nB = ZB(1343),
+       hB = ZB(1248),
+       zB = ZB(36916),
+       FB = ZB(1153);
```

#### 25. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L294)

```diff
-       return (0, Dt.useEffect)((() => (Vt((0, lt.j)(tt)), (0, lt.G)((() => {
+       return (0, oB.useEffect)((() => (ZB((0, zB.j)(BB)), (0, zB.I)((() => {
```

#### 26. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L314` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L314) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L314)

```diff
-       const Vt = (0, lt.n)(tt),
+       const ZB = (0, zB.k)(BB),
```

#### 27. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L316)

```diff
-       return !Vt.slice(Ot + 1).some((et => (0, lt.u)(tt, et)))
+       return !ZB.slice(TB + 1).some((IB => (0, zB.r)(BB, IB)))
```

#### 28. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L326)

```diff
-       const jt = et && (0, lt.s)(qt, Dt),
+       const kB = IB && (0, zB.o)(JB, oB),
```

#### 29. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L328` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L328) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L328)

```diff
-         Qt = mt ? Ot : Vt;
+         hB = GB ? TB : ZB;
```

#### 30. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L331` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L331) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L331)

```diff
-         null === dt || void 0 === dt || dt(), (0, lt.o)(qt, Dt)
+         null === vB || void 0 === vB || vB(), (0, zB.n)(JB, oB)
```

#### 31. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L334)

```diff
-       }), (0, Xt.w)("popup", null !== Qt && void 0 !== Qt ? Qt : Vt, Et, et && null !== Qt, null, jt ? void 0 : "controller:menusSkipTutorial")
+       }), (0, nB.t)("popup", null !== hB && void 0 !== hB ? hB : ZB, FB, IB && null !== hB, null, kB ? void 0 : "controller:menusSkipTutorial")
```

#### 32. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L347)

```diff
-       } = (0, Qt.H)(), dt = Nt(et, Vt);
+       } = (0, hB.G)(), vB = yB(IB, ZB);
```

#### 33. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L354)

```diff
-           children: [(0, lt.s)(et, Vt) && (0, Et.jsx)(jt.g, {
+           children: [(0, zB.o)(IB, ZB) && (0, FB.jsx)(kB.k, {
```

#### 34. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L357)

```diff
-               null === Dt || void 0 === Dt || Dt(), (0, lt.o)(et, Vt)
+               null === oB || void 0 === oB || oB(), (0, zB.n)(IB, ZB)
```

#### 35. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L360)

```diff
-           }), !qt && (0, Et.jsx)(jt.f, {
+           }), !JB && (0, FB.jsx)(kB.g, {
```

#### 36. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L363` → after: `L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L363) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L363)

```diff
-               (0, lt.d)(Vt)
+               (0, zB.f)(ZB)
```

#### 37. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L367)

```diff
-           }), !dt && (0, Et.jsx)(jt.g, {
+           }), !vB && (0, FB.jsx)(kB.k, {
```

#### 38. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L441)

```diff
-       } = (0, dt.c)({
+       } = (0, vB.b)({
```

#### 39. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L501)

```diff
-       }), (0, Ht.k)())
+       }), (0, cB.i)())
```

#### 40. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L542` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L542) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L542)

```diff
-       }), (0, Ht.k)()) : null
+       }), (0, cB.i)()) : null
```

#### 41. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L545` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L545) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L545)

```diff
-   39453: (tt, et, Vt) => {
+   39319: (BB, IB, ZB) => {
```

#### 42. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L549-L550` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L549-L550) · [Before (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L549-L550)

```diff
-     var Ot = Vt(1842),
-       qt = Vt(1450),
+     var TB = ZB(1821),
+       JB = ZB(1403),
```

#### 43. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L552)

```diff
-       mt = Vt(1140),
+       GB = ZB(1091),
```

#### 44. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L554-L555` → after: `L554-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L554-L555) · [Before (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L554-L555)

```diff
-       jt = Vt(1556),
-       Ht = Vt(106);
+       kB = ZB(1516),
+       cB = ZB(105);
```

#### 45. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L560` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L560) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L560)

```diff
-       return "webm" === tt ? Xt : Qt
+       return "webm" === BB ? nB : hB
```

#### 46. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L572` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L572) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L572)

```diff
-     var wt = Vt(1188);
+     var gB = ZB(1153);
```

#### 47. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L641` → after: `L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L641) · [Before (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L641)

```diff
-             children: `Your device does not support exporting. Try recording with an external software like ${tt}.`
+             children: `Your device does not support exporting. Try recording with an external software like ${BB}.`
```

#### 48. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L644` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L644) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L644)

```diff
-             children: (0, wt.jsx)(jt.G, {
+             children: (0, gB.jsx)(kB.M, {
```

#### 49. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L716` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L716) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L716)

```diff
-           children: [(0, wt.jsx)(jt.m, {
+           children: [(0, gB.jsx)(kB.p, {
```

#### 50. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L726` → after: `L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L726) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L726)

```diff
-           }), (0, wt.jsx)(jt.G, {
+           }), (0, gB.jsx)(kB.M, {
```

#### 51. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L736-L738` → after: `L736-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L736-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L736-L738) · [Before (L736-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L736-L738)

```diff
-     var Jt = Vt(5030),
-       Ct = Vt(37238),
-       ut = Vt(37243);
+     var dB = ZB(5028),
+       CB = ZB(37019),
+       QB = ZB(37024);
```

#### 52. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L743` → after: `L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L743) · [Before (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L743)

```diff
-         const tt = (0, ut.e)();
+         const BB = (0, QB.b)();
```

#### 53. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L748` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L748) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L748)

```diff
-           of Ct.g)
+           of CB.d)
```

#### 54. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L777)

```diff
-     var Wt = Vt(39288);
+     var YB = ZB(39152);
```

#### 55. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L781` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L781) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L781)

```diff
-       tt.holdInput(!1), (0, Wt.g)(!1)
+       BB.holdInput(!1), (0, YB.e)(!1)
```

#### 56. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L785` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L785) · [Before (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L785)

```diff
-       if ((0, Wt.c)() || St) return;
+       if ((0, YB.d)() || iB) return;
```

#### 57. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L827` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L827) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L827)

```diff
-       const Xt = null !== (et = null === (Vt = Dt.startFailure) || void 0 === Vt ? void 0 : Vt.call(Dt)) && void 0 !== et ? et : null;
+       const nB = null !== (IB = null === (ZB = oB.startFailure) || void 0 === ZB ? void 0 : ZB.call(oB)) && void 0 !== IB ? IB : null;
```

#### 58. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L833)

```diff
-           return !(0, Wt.c)() && ((0, Wt.g)(!0), tt.holdInput(!0), !0)
+           return !(0, YB.d)() && ((0, YB.e)(!0), BB.holdInput(!0), !0)
```

#### 59. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L837)

```diff
-         Qt = await vt(mt.includeUi, (() => Dt.canvas()), Dt.bI)
+         hB = await OB(GB.includeUi, (() => oB.canvas()), oB.bM)
```

#### 60. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L850` → after: `L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L850) · [Before (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L850)

```diff
-         ft = Dt.playbackSpeed(), Dt.closeViewer(), Dt.setPlaybackSpeed(1), Dt.pause(), Dt.seekToTick(null !== dt && void 0 !== dt ? dt : 0);
+         NB = oB.playbackSpeed(), oB.closeViewer(), oB.setPlaybackSpeed(1), oB.pause(), oB.seekToTick(null !== vB && void 0 !== vB ? vB : 0);
```

#### 61. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L858)

```diff
-           return null !== Vt && void 0 !== Vt ? Vt : null
+           return null !== ZB && void 0 !== ZB ? ZB : null
```

#### 62. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L865` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L865) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L865)

```diff
-           if (!et) throw new Error(`No MediaRecorder mime type available for ${tt}`);
+           if (!IB) throw new Error(`No MediaRecorder mime type available for ${BB}`);
```

#### 63. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L908` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L908) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L908)

```diff
-         const Xt = null !== (ut = null === (Rt = Dt.playbackFailure) || void 0 === Rt ? void 0 : Rt.call(Dt)) && void 0 !== ut ? ut : null;
+         const nB = null !== (QB = null === (aB = oB.playbackFailure) || void 0 === aB ? void 0 : aB.call(oB)) && void 0 !== QB ? QB : null;
```

#### 64. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L911` → after: `L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L911) · [Before (L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L911)

```diff
-           subtitle: `${Xt} Nothing was saved.`
+           subtitle: `${nB} Nothing was saved.`
```

#### 65. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L916` → after: `L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L916) · [Before (L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L916)

```diff
-         wt.size > 0 ? (0, Ot.c)(wt, function(tt, et) {
+         gB.size > 0 ? (0, TB.d)(gB, function(BB, IB) {
```

#### 66. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L920-L921` → after: `L920-L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L920-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L920-L921) · [Before (L920-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L920-L921)

```diff
-           if (tt) return `${tt.replace(/\.bloxdreplay$/i,"")}.${Vt}`;
-           return `bloxd-replay-${Date.now()}.${Vt}`
+           if (BB) return `${BB.replace(/\.bloxdreplay$/i,"")}.${ZB}`;
+           return `bloxd-replay-${Date.now()}.${ZB}`
```

#### 67. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L954)

```diff
-   5021: (tt, et, Vt) => {
+   5019: (BB, IB, ZB) => {
```

#### 68. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L956-L957` → after: `L956-L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L956-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L956-L957) · [Before (L956-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L956-L957)

```diff
-       e: () => Xt,
-       i: () => Qt
+       d: () => nB,
+       g: () => hB
```

#### 69. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L959-L960` → after: `L959-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L959-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L959-L960) · [Before (L959-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L959-L960)

```diff
-     var Ot = Vt(5030),
-       qt = Vt(26);
+     var TB = ZB(5028),
+       JB = ZB(20);
```

#### 70. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1017` → after: `L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1017) · [Before (L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1017)

```diff
-       if (!Dt || !mt || !qt.b.get("soundOnFromAd")) return () => {};
+       if (!oB || !GB || !JB.d.get("soundOnFromAd")) return () => {};
```

#### 71. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1019)

```diff
-       return null === (Vt = dt._autoResume) || void 0 === Vt || Vt.call(dt), Xt(Dt, mt, tt, et, qt.b.get("soundVolume"), (() => {
+       return null === (ZB = vB._autoResume) || void 0 === ZB || ZB.call(vB), nB(oB, GB, BB, IB, JB.d.get("soundVolume"), (() => {
```

#### 72. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1025` → after: `L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1025) · [Before (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1025)

```diff
-   39819: (tt, et, Vt) => {
+   39671: (BB, IB, ZB) => {
```

#### 73. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1027` → after: `L1027-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1027-L1028) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1027)

```diff
-       b: () => lt,
+       c: () => zB,
+       d: () => NB,
```

#### 74. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1029-L1030` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1030) · [Before (L1029-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1029-L1030)

```diff
-       i: () => Ht,
-       j: () => Qt,
+       h: () => hB,
```

#### 75. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1032-L1034` → after: `L1032-L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1032-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1032-L1034) · [Before (L1032-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1032-L1034)

```diff
-       p: () => mt,
-       t: () => Xt,
-       v: () => wt
+       m: () => GB,
+       o: () => nB,
+       s: () => gB
```

#### 76. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1036-L1039` → after: `L1036-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1036-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1036-L1039) · [Before (L1036-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1036-L1039)

```diff
-     var Ot = Vt(2043),
-       qt = Vt(31),
-       Dt = Vt(2054);
-     const mt = (0, Dt.l)((function() {
+     var TB = ZB(2029),
+       JB = ZB(24),
+       oB = ZB(2046);
+     const GB = (0, oB.h)((function() {
```

#### 77. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1042-L1045` → after: `L1042-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1042-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1042-L1045) · [Before (L1042-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1042-L1045)

```diff
-           health: null !== (tt = Ot.b.get("_health")) && void 0 !== tt ? tt : null,
-           maxHealth: null !== (et = Ot.b.get("_totalMaxHealth")) && void 0 !== et ? et : null,
-           shield: null !== (Vt = Ot.b.get("_shield")) && void 0 !== Vt ? Vt : null,
-           maxShield: null !== (qt = Ot.b.get("maxShield")) && void 0 !== qt ? qt : null
+           health: null !== (BB = TB.c.get("_health")) && void 0 !== BB ? BB : null,
+           maxHealth: null !== (IB = TB.c.get("_totalMaxHealth")) && void 0 !== IB ? IB : null,
+           shield: null !== (ZB = TB.c.get("_shield")) && void 0 !== ZB ? ZB : null,
+           maxShield: null !== (JB = TB.c.get("maxShield")) && void 0 !== JB ? JB : null
```

#### 78. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1047)

```diff
-       }), [], (0, Dt.k)("_health", "_totalMaxHealth", "_shield", "maxShield")),
+       }), [], (0, oB.f)("_health", "_totalMaxHealth", "_shield", "maxShield")),
```

#### 79. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1065` → after: `L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1065) · [Before (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1065)

```diff
-     const Ht = (0, Dt.l)((function() {
+     const cB = (0, oB.h)((function() {
```

#### 80. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1067-L1068` → after: `L1067-L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1067-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1067-L1068) · [Before (L1067-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1067-L1068)

```diff
-       return null !== (tt = Ot.b.get("_aura")) && void 0 !== tt ? tt : null
-     }), [], (0, Dt.k)("_aura"));
+       return null !== (BB = TB.c.get("_aura")) && void 0 !== BB ? BB : null
+     }), [], (0, oB.f)("_aura"));
```

#### 81. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1072` → after: `L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1072) · [Before (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1072)

```diff
-         watch: et => (0, qt.n)("shotPlayer", (Vt => {
+         watch: IB => (0, JB.p)("shotPlayer", (ZB => {
```

#### 82. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1089` → after: `L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1089) · [Before (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1089)

```diff
-       return (0, Dt.d)("chat", (et => {
+       return (0, oB.b)("chat", (IB => {
```

#### 83. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1096` → after: `L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1096) · [Before (L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1096)

```diff
-           serverChatMsgId: null !== Vt && void 0 !== Vt ? Vt : null,
+           serverChatMsgId: null !== ZB && void 0 !== ZB ? ZB : null,
```

#### 84. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1115` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1115) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1115)

```diff
-         translationKey: `touchKeys:${tt}`
+         translationKey: `touchKeys:${BB}`
```

#### 85. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1136` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1136) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1136)

```diff
-   38872: (tt, et, Vt) => {
+   38687: (BB, IB, ZB) => {
```

#### 86. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1142-L1143` → after: `L1142-L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1142-L1143) · [Before (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1142-L1143)

```diff
-       BloxdWasmFetchError: () => lm.c,
-       BloxdWasmHttpError: () => lm.f,
+       BloxdWasmFetchError: () => FG.d,
+       BloxdWasmHttpError: () => FG.e,
```

#### 87. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1145-L1150` → after: `L1145-L1150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1145-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1145-L1150) · [Before (L1145-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1145-L1150)

```diff
-       BloxdWasmTimeoutError: () => lm.j,
-       MAX_RETRY_AFTER_MS: () => lm.n,
-       PROMISE_HOOK_CODES: () => Em.c,
-       RETRY_DELAYS_MS: () => lm.r,
-       STALL_TIMEOUT_MS: () => lm.u,
-       WASM_HOOKS_ENFORCED: () => Nm.e,
+       BloxdWasmTimeoutError: () => FG.k,
+       MAX_RETRY_AFTER_MS: () => FG.q,
+       PROMISE_HOOK_CODES: () => NG.b,
+       RETRY_DELAYS_MS: () => FG.s,
+       STALL_TIMEOUT_MS: () => FG.w,
+       WASM_HOOKS_ENFORCED: () => UG.d,
```

#### 88. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1152-L1167` → after: `L1152-L1167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1152-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1152-L1167) · [Before (L1152-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1152-L1167)

```diff
-       bloxdTextureWasmUrl: () => wm.b,
-       bloxdWasmCore: () => Qm.d,
-       compileBloxdTextureWasm: () => wm.c,
-       compileBloxdWasmAhead: () => Xm.d,
-       compileBloxdWasmBrowser: () => Xm.h,
-       describeBloxdWasmFailure: () => jm.k,
-       fetchBytes: () => lm.I,
-       getBloxdWasm: () => jm.F,
-       getBloxdWasmBuild: () => jm.n,
-       getBloxdWasmFailureReason: () => jm.q,
-       getBloxdWasmFailureStage: () => jm.s,
-       getBloxdWasmFailureStatus: () => jm.w,
-       getBloxdWasmLoadCompile: () => Xm.k,
-       getBloxdWasmMemory: () => jm.z,
-       getBloxdWasmModule: () => jm.A,
-       getBloxdWasmStatus: () => jm.D,
+       bloxdTextureWasmUrl: () => qG.c,
+       bloxdWasmCore: () => zG.e,
+       compileBloxdTextureWasm: () => qG.f,
+       compileBloxdWasmAhead: () => hG.b,
+       compileBloxdWasmBrowser: () => hG.c,
+       describeBloxdWasmFailure: () => cG.g,
+       fetchBytes: () => FG.K,
+       getBloxdWasm: () => cG.x,
+       getBloxdWasmBuild: () => cG.i,
+       getBloxdWasmFailureReason: () => cG.j,
+       getBloxdWasmFailureStage: () => cG.m,
+       getBloxdWasmFailureStatus: () => cG.o,
+       getBloxdWasmLoadCompile: () => hG.e,
+       getBloxdWasmMemory: () => cG.r,
+       getBloxdWasmModule: () => cG.t,
+       getBloxdWasmStatus: () => cG.u,
```

#### 89. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1169-L1191` → after: `L1169-L1191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1169-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1169-L1191) · [Before (L1169-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1169-L1191)

```diff
-       getLastBloxdWasmPanic: () => jm.J,
-       initBloxdWasmBrowser: () => Qm.e,
-       initBloxdWasmFromModule: () => Qm.f,
-       isBloxdWasmDownloadFailureRetryable: () => jm.T,
-       isBloxdWasmLoadUnstreamed: () => lm.M,
-       isBloxdWasmReady: () => jm.W,
-       isEnforceableWasmReport: () => Nm.k,
-       isPromiseHookReport: () => Nm.o,
-       isPunishedWasmReport: () => Nm.p,
-       isRendererWasmReport: () => Nm.r,
-       isRetryableDownloadFailure: () => lm.N,
-       isWeightedWasmReport: () => Nm.u,
-       loadBloxdWasmBrowser: () => Xm.o,
-       markBloxdWasmFailed: () => jm.Y,
-       noteBloxdRenderDebugHook: () => Nm.v,
-       onBloxdWasmFailed: () => jm.$,
- ... (7 more removed lines; see GitHub link above)
+       getLastBloxdWasmPanic: () => cG.B,
+       initBloxdWasmBrowser: () => zG.h,
+       initBloxdWasmFromModule: () => zG.i,
+       isBloxdWasmDownloadFailureRetryable: () => cG.K,
+       isBloxdWasmLoadUnstreamed: () => FG.S,
+       isBloxdWasmReady: () => cG.M,
+       isEnforceableWasmReport: () => UG.l,
+       isPromiseHookReport: () => UG.q,
+       isPunishedWasmReport: () => UG.s,
+       isRendererWasmReport: () => UG.t,
+       isRetryableDownloadFailure: () => FG.U,
+       isWeightedWasmReport: () => UG.w,
+       loadBloxdWasmBrowser: () => hG.h,
+       markBloxdWasmFailed: () => cG.O,
+       noteBloxdRenderDebugHook: () => UG.A,
+       onBloxdWasmFailed: () => cG.S,
+ ... (7 more added lines; see GitHub link above)
```

#### 90. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1193-L1197` → after: `L1193-L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1193-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1193-L1197) · [Before (L1193-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1193-L1197)

```diff
-     Vt(36757);
-     var qt = Vt(38876),
-       Dt = Vt(9454),
-       mt = Vt(36990),
-       dt = Vt(391);
+     ZB(36540);
+     var JB = ZB(38696),
+       oB = ZB(9328),
+       GB = ZB(36771),
+       vB = ZB(360);
```

#### 91. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1207-L1215` → after: `L1207-L1215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1207-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1207-L1215) · [Before (L1207-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1207-L1215)

```diff
-     var Ht = Vt(38945),
-       Xt = Vt(9425),
-       Qt = Vt(241),
-       lt = Vt(2290),
-       Et = Vt(38394),
-       ft = Vt(229),
-       wt = Vt(3217),
-       yt = Vt(31),
-       Nt = Vt(404),
+     var cB = ZB(38766),
+       nB = ZB(9296),
+       hB = ZB(212),
+       zB = ZB(2326),
+       FB = ZB(38202),
+       NB = ZB(201),
+       gB = ZB(3316),
+       qB = ZB(24),
+       yB = ZB(364),
```

#### 92. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1217-L1245` → after: `L1217-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1217-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1217-L1253) · [Before (L1217-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1217-L1245)

```diff
-       bt = Vt(38157),
-       Jt = Vt(37467),
-       Ct = Vt(37875),
-       ut = Vt(37545),
-       Kt = Vt(38215),
-       ht = Vt(37502),
-       vt = Vt(38922),
-       Wt = Vt(37454),
-       St = Vt(38068),
-       ct = Vt(37694),
-       Rt = Vt(37699),
-       It = Vt(38347),
-       Pt = Vt(38172),
-       Zt = Vt(38120),
-       Lt = Vt(106),
-       Ft = Vt(38879),
- ... (13 more removed lines; see GitHub link above)
+       WB = ZB(37956),
+       dB = ZB(37253),
+       CB = ZB(37671),
+       QB = ZB(37336),
+       sB = ZB(38010),
+       wB = ZB(37296),
+       OB = ZB(38741),
+       YB = ZB(37243),
+       iB = ZB(37869),
+       pB = ZB(37495),
+       aB = ZB(37504),
+       HB = ZB(38159),
+       MB = ZB(37975),
+       jB = ZB(37923),
+       PB = ZB(105),
+       RB = ZB(38703),
+ ... (21 more added lines; see GitHub link above)
```

#### 93. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1264` → after: `L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1264) · [Before (L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1264)

```diff
-               if (et.has(Dt.name.toLowerCase())) throw new Error(`Two nodes are named ${Dt.name}`);
+               if (IB.has(oB.name.toLowerCase())) throw new Error(`Two nodes are named ${oB.name}`);
```

#### 94. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1267` → after: `L1267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1267) · [Before (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1267)

```diff
-                 if (Dt.hasGeometry) throw new Error(`Mesh ${Dt.name} has nodes under it: put them in a group beside it`);
+                 if (oB.hasGeometry) throw new Error(`Mesh ${oB.name} has nodes under it: put them in a group beside it`);
```

#### 95. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1305` → after: `L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1305) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1305)

```diff
-       return je(Ot) < je(Vt) ? Ot : Vt
+       return vI(TB) < vI(ZB) ? TB : ZB
```

#### 96. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1311` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1311) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1311)

```diff
-         return tt + ("string" === typeof et ? 1 : (void 0 === et.collapsesTo ? 0 : 1) + je(null !== (Vt = et.children) && void 0 !== Vt ? Vt : []))
+         return BB + ("string" === typeof IB ? 1 : (void 0 === IB.collapsesTo ? 0 : 1) + vI(null !== (ZB = IB.children) && void 0 !== ZB ? ZB : []))
```

#### 97. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1318` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1318) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1318)

```diff
-           if ("pI" in tt && !0 === tt.pI) throw new Error(`${tt.name} is drawn as an instance of another mesh`);
+           if ("vR" in BB && !0 === BB.vR) throw new Error(`${BB.name} is drawn as an instance of another mesh`);
```

#### 98. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1323` → after: `L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1323) · [Before (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1323)

```diff
-           return !Ot(tt) || Vt(tt).length > 0 ? null : `${null!==(et=null===(qt=tt.material)||void 0===qt?void 0:qt.uniqueId)&&void 0!==et?et:"none"} ${tt.getVerticesDataKinds().sort().join(",")}`
+           return !TB(BB) || ZB(BB).length > 0 ? null : `${null!==(IB=null===(JB=BB.material)||void 0===JB?void 0:JB.uniqueId)&&void 0!==IB?IB:"none"} ${BB.getVerticesDataKinds().sort().join(",")}`
```

#### 99. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1337` → after: `L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1337) · [Before (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1337)

```diff
-             let qt, Dt = null !== (et = mt.get(Vt)) && void 0 !== et ? et : 1;
+             let JB, oB = null !== (IB = GB.get(ZB)) && void 0 !== IB ? IB : 1;
```

#### 100. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1339` → after: `L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1339) · [Before (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1339)

```diff
-               Dt++, qt = `${tt}|${Dt}`
+               oB++, JB = `${BB}|${oB}`
```

#### 101. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1348)

```diff
-                 Xt = null === tt ? null : `${tt}/${mt.toLowerCase()}`;
+                 nB = null === BB ? null : `${BB}/${GB.toLowerCase()}`;
```

#### 102. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1370` → after: `L1370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1370) · [Before (L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1370)

```diff
-       const Ot = xt.g.itemsClient[et],
+       const TB = xB.l.itemsClient[IB],
```

#### 103. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1373-L1374` → after: `L1373-L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1373-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1373-L1374) · [Before (L1373-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1373-L1374)

```diff
-           const Vt = (0, st.m)(tt);
-           if (null !== Vt) return te.g.enabled && te.g.hasAnimation(Vt) ? {
+           const ZB = (0, KB.s)(BB);
+           if (null !== ZB) return SB.f.enabled && SB.f.hasAnimation(ZB) ? {
```

#### 104. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1376` → after: `L1376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1376) · [Before (L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1376)

```diff
-             moved: te.g.bonesMoved(Vt)
+             moved: SB.f.bonesMoved(ZB)
```

#### 105. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1378` → after: `L1378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1378) · [Before (L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1378)

```diff
-           const Ot = null === (et = Xt.h[tt]) || void 0 === et ? void 0 : et.meshEntityBones;
+           const TB = null === (IB = nB.f[BB]) || void 0 === IB ? void 0 : IB.meshEntityBones;
```

#### 106. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1385` → after: `L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1385) · [Before (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1385)

```diff
-       const Dt = tt.Bf.xI;
+       const oB = BB.Ig.kR;
```

#### 107. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1390` → after: `L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1390) · [Before (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1390)

```diff
-         const Vt = `skeletalVehicle|${et}`,
+         const ZB = `skeletalVehicle|${IB}`,
```

#### 108. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1393` → after: `L1393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1393) · [Before (L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1393)

```diff
-             const qt = tt.Bf.vI(),
+             const JB = BB.Ig.JR(),
```

#### 109. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1399` → after: `L1399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1399) · [Before (L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1399)

```diff
-               jt = await (0, Ve.f)(Dt, qt, mt, dt);
+               kB = await (0, II.e)(oB, JB, GB, vB);
```

#### 110. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1403` → after: `L1403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1403) · [Before (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1403)

```diff
-                   const Vt = tt.meshes.find((tt => tt.name === Oe.d));
+                   const ZB = BB.meshes.find((BB => BB.name === ZI.e));
```

#### 111. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1409-L1410` → after: `L1409-L1410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1409-L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1409-L1410) · [Before (L1409-L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1409-L1410)

```diff
-               if (null !== Vt.vehicleType && !te.g.animatesModel(Vt.vehicleType, [Oe.d, ...Ot])) return console.error(`Animation for ${Vt.vehicleType}: its clips move none of the model's bones, so it draws as one mesh`), jt.dispose(), !1;
-               if (Dt.length > 0) return console.error(`${et.name}'s model has no ${Dt.join(", ")} to keep as bones, so it draws as one mesh`), jt.dispose(), !1;
+               if (null !== ZB.vehicleType && !SB.f.animatesModel(ZB.vehicleType, [ZI.e, ...TB])) return console.error(`Animation for ${ZB.vehicleType}: its clips move none of the model's bones, so it draws as one mesh`), kB.dispose(), !1;
+               if (oB.length > 0) return console.error(`${IB.name}'s model has no ${oB.join(", ")} to keep as bones, so it draws as one mesh`), kB.dispose(), !1;
```

#### 112. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1420-L1424` → after: `L1420-L1424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1420-L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1420-L1424) · [Before (L1420-L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1420-L1424)

```diff
-             for (const yt of lt) Ee(tt.Bf, yt, et.name);
-             for (const yt of Qt) yt.eZ(), yt.material ? yt.sideOrientation = ht.e.ClockWiseSideOrientation : ((0, ct.f)(yt) || yt.vI().wZ(yt), yt.Av(!1));
-             for (const yt of Qt) yt.material && tt.Bf.aZ(yt);
-             const Et = tt.Bf.xI,
-               ft = tt.YE ? {
+             for (const qB of zB) zI(BB.Ig, qB, IB.name);
+             for (const qB of hB) qB.yR(), qB.material ? qB.sideOrientation = wB.d.ClockWiseSideOrientation : ((0, pB.d)(qB) || qB.JR().jR(qB), qB.qY(!1));
+             for (const qB of hB) qB.material && BB.Ig.uR(qB);
+             const FB = BB.Ig.kR,
+               NB = BB.oN ? {
```

#### 113. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1428` → after: `L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1428) · [Before (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1428)

```diff
-               uQ: 8,
+               ah: 8,
```

#### 114. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1436` → after: `L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1436) · [Before (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1436)

```diff
-             }), Et.setPickableForType(Ot, null !== Vt.vehicleType), Et.setCullableForType(Ot, !0), (0, ee.s)(Xt), !0
+             }), FB.setPickableForType(TB, null !== ZB.vehicleType), FB.setCullableForType(TB, !0), (0, BI.m)(nB), !0
```

#### 115. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1445` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1445) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1445)

```diff
-             console.error(`Could not load the bones of ${et}, so it draws as one mesh\n`, tt), Dt.set(et, {
+             console.error(`Could not load the bones of ${IB}, so it draws as one mesh\n`, BB), oB.set(IB, {
```

#### 116. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1461-L1463` → after: `L1461-L1463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1461-L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1461-L1463) · [Before (L1461-L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1461-L1463)

```diff
-           Dt.Av(et, !0), Dt.setPosition(et, 0, 0, 0), Dt.setRotationEuler(et, 0, 0, 0), Dt.set(et, "aOpacity", 1), Dt.set(et, "aLightLevels", nt.c);
-           const [qt, mt, jt] = Array.isArray(Vt) ? Vt : [Vt, Vt, Vt], Ht = Ot.bakeInScaling;
-           if (Dt.setScale(et, -qt * Ht, mt * Ht, jt * Ht), tt.YE) {
+           oB.qY(IB, !0), oB.setPosition(IB, 0, 0, 0), oB.setRotationEuler(IB, 0, 0, 0), oB.set(IB, "aOpacity", 1), oB.set(IB, "aLightLevels", VB.b);
+           const [JB, GB, kB] = Array.isArray(ZB) ? ZB : [ZB, ZB, ZB], cB = TB.bakeInScaling;
+           if (oB.setScale(IB, -JB * cB, GB * cB, kB * cB), BB.oN) {
```

#### 117. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1475` → after: `L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1475) · [Before (L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1475)

```diff
-         return "string" === typeof tt ? [tt] : [tt.nodeName, ...le(null !== (et = tt.children) && void 0 !== et ? et : [])]
+         return "string" === typeof BB ? [BB] : [BB.nodeName, ...hI(null !== (IB = BB.children) && void 0 !== IB ? IB : [])]
```

#### 118. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1480-L1484` → after: `L1480-L1484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1480-L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1480-L1484) · [Before (L1480-L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1480-L1484)

```diff
-       et.name = `${Vt}SkeletalVehicleMat`;
-       const Ot = (0, Wt.X)(et);
-       (0, Wt.C)(Ot), (0, De.e)(et, (() => {
-         (0, qe.d)(Ot, tt), (0, it.d)(Ot, !0)
-       })), (0, De.f)(et)
+       IB.name = `${ZB}SkeletalVehicleMat`;
+       const TB = (0, YB._)(IB);
+       (0, YB.J)(TB), (0, JI.d)(IB, (() => {
+         (0, TI.c)(TB, BB), (0, lB.e)(TB, !0)
+       })), (0, JI.e)(IB)
```

#### 119. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1504` → after: `L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1504) · [Before (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1504)

```diff
-         this.bloxd = void 0, this.ql = void 0
+         this.bloxd = void 0, this.Nz = void 0
```

#### 120. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1513` → after: `L1513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1513) · [Before (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1513)

```diff
-         return ye.sourcesByScene.set(tt, Vt), (0, pt.c)(tt, (() => {
+         return gI.sourcesByScene.set(BB, ZB), (0, bB.d)(BB, (() => {
```

#### 121. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1518-L1521` → after: `L1518-L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1518-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1518-L1521) · [Before (L1518-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1518-L1521)

```diff
-         this.bloxd = tt, this.ql = tt.ql;
-         const et = (0, pt.c)(this.ql.Bf.vI(), (() => {
-           for (const tt of this.bloxd.mJ.bZ("isBoard")) {
-             const et = this.bloxd.mJ.getState(tt.uZ, "hidingMeshManager");
+         this.bloxd = BB, this.Nz = BB.Nz;
+         const IB = (0, bB.d)(this.Nz.Ig.JR(), (() => {
+           for (const BB of this.bloxd.zW.fR("isBoard")) {
+             const IB = this.bloxd.zW.getState(BB.bR, "hidingMeshManager");
```

#### 122. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1529` → after: `L1529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1529) · [Before (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1529)

```diff
-           for (const tt of this.bloxd.mJ.bZ("isBoard")) this.bloxd.mJ.deleteEntity(tt.uZ)
+           for (const BB of this.bloxd.zW.fR("isBoard")) this.bloxd.zW.deleteEntity(BB.bR)
```

#### 123. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1534` → after: `L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1534) · [Before (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1534)

```diff
-         (0, ot.e)(this.ql).mergeParticleSystemUpdate((0, zt.c)(tt), et, Vt);
+         (0, LB.c)(this.Nz).mergeParticleSystemUpdate((0, XB.e)(BB), IB, ZB);
```

#### 124. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1536` → after: `L1536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1536) · [Before (L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1536)

```diff
-         (0, kt.B)(qt) || (0, Zt.d)(qt, Vt)
+         (0, rB.L)(JB) || (0, jB.d)(JB, ZB)
```

#### 125. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1539` → after: `L1539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1539) · [Before (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1539)

```diff
-         return (0, ot.e)(this.ql).getParticleSystemUpdate((0, zt.c)(tt), null !== et && void 0 !== et ? et : "__root__")
+         return (0, LB.c)(this.Nz).getParticleSystemUpdate((0, XB.e)(BB), null !== IB && void 0 !== IB ? IB : "__root__")
```

#### 126. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1545-L1546` → after: `L1545-L1546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1545-L1546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1545-L1546) · [Before (L1545-L1546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1545-L1546)

```diff
-           jt = null !== (qt = null === dt || void 0 === dt || null === (Dt = dt.persisted.shared.text) || void 0 === Dt ? void 0 : Dt.toString()) && void 0 !== qt ? qt : "",
-           Ht = null !== (mt = null === dt || void 0 === dt ? void 0 : dt.persisted.shared.textSize) && void 0 !== mt ? mt : 0;
+           kB = null !== (JB = null === vB || void 0 === vB || null === (oB = vB.persisted.shared.text) || void 0 === oB ? void 0 : oB.toString()) && void 0 !== JB ? JB : "",
+           cB = null !== (GB = null === vB || void 0 === vB ? void 0 : vB.persisted.shared.textSize) && void 0 !== GB ? GB : 0;
```

#### 127. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1549-L1551` → after: `L1549-L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1549-L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1549-L1551) · [Before (L1549-L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1549-L1551)

```diff
-             position: gt.uf.Zero(),
-             rotation: gt.uf.Zero(),
-             cj: gt.uf.One()
+             position: DB.rN.Zero(),
+             rotation: DB.rN.Zero(),
+             ek: DB.rN.One()
```

#### 128. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1554` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1554) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1554)

```diff
-           "" === jt.trim() ? et = (0, bt.f)(this.ql.Bf, "EmptyBoardMesh") : (et = this.createBoardTextPlane(jt, Ht, 1, 7 / 8, 256), (0, rt.g)(tt, Ot, .375), tt.rotation.y += Math.PI, et.rotation = tt.rotation);
+           "" === kB.trim() ? IB = (0, WB.e)(this.Nz.Ig, "EmptyBoardMesh") : (IB = this.createBoardTextPlane(kB, cB, 1, 7 / 8, 256), (0, eB.i)(BB, TB, .375), BB.rotation.y += Math.PI, IB.rotation = BB.rotation);
```

#### 129. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1571` → after: `L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1571) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1571)

```diff
-         } = Dt.h.find((et => {
+         } = oB.l.find((IB => {
```

#### 130. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1576-L1578` → after: `L1576-L1578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1576-L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1576-L1578) · [Before (L1576-L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1576-L1578)

```diff
-         })), [Xt, , Qt] = Dt.u[qt][1], [lt, Et] = Dt.l[qt], ft = Ht + .01, wt = [.5 + Xt * (dt - 1) / 2 + lt * ft, .5 - (jt - 1) / 2, .5 + Qt * (dt - 1) / 2 + Et * ft];
-         et = (0, mt.k)(et, Vt, dt, jt);
-         const yt = (0, mt.q)(dt, jt),
+         })), [nB, , hB] = oB.r[JB][1], [zB, FB] = oB.m[JB], NB = cB + .01, gB = [.5 + nB * (vB - 1) / 2 + zB * NB, .5 - (kB - 1) / 2, .5 + hB * (vB - 1) / 2 + FB * NB];
+         IB = (0, GB.o)(IB, ZB, vB, kB);
+         const qB = (0, GB.u)(vB, kB),
```

#### 131. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1582` → after: `L1582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1582) · [Before (L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1582)

```diff
-           return tt.rotation = new gt.uf(0, (qt + 1) * Math.PI / 2, 0), {
+           return BB.rotation = new DB.rN(0, (JB + 1) * Math.PI / 2, 0), {
```

#### 132. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1590-L1596` → after: `L1590-L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1590-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1590-L1596) · [Before (L1590-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1590-L1596)

```diff
-           Bf: dt
-         } = this.ql, {
-           Fw: jt
-         } = dt, Ht = Math.round(Dt * Vt), Xt = Math.round(Dt * Ot), Qt = (0, Bt.f)(this.ql, "BoardDynamicTexture", Ht, Xt, {
-           mipped: Jt.k.trilinear,
-           unmipped: Jt.k.bilinear
-         }), lt = (0, bt.q)(dt, "BoardPlane", (0, Ct.j)({
+           Ig: vB
+         } = this.Nz, {
+           lg: kB
+         } = vB, cB = Math.round(oB * ZB), nB = Math.round(oB * TB), hB = (0, tB.d)(this.Nz, "BoardDynamicTexture", cB, nB, {
+           mipped: dB.j.trilinear,
+           unmipped: dB.j.bilinear
+         }), zB = (0, WB.n)(vB, "BoardPlane", (0, CB.f)({
```

#### 133. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1599-L1600` → after: `L1599-L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1599-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1599-L1600) · [Before (L1599-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1599-L1600)

```diff
-         })), Et = Dt / 256, ft = (0, ut.h)(Qt);
-         qt.b.fontSize = mt.d[et].ingameFontSize * Et, qt.b.fontWeight = "bold", qt.b.font = "'Jetbrains Mono', monospace", Lt.featureFlags.canSeePlayerWrittenText && qt.b.drawText(ft, tt, 0, (-10 - 7 * et) * Et, Ht, Xt), (0, Bt.k)(Qt);
+         })), FB = oB / 256, NB = (0, QB.g)(hB);
+         JB.e.fontSize = GB.d[IB].ingameFontSize * FB, JB.e.fontWeight = "bold", JB.e.font = "'Jetbrains Mono', monospace", PB.featureFlags.canSeePlayerWrittenText && JB.e.drawText(NB, BB, 0, (-10 - 7 * IB) * FB, cB, nB), (0, tB.g)(hB);
```

#### 134. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1605` → after: `L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1605) · [Before (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1605)

```diff
-           Fw: jt,
+           lg: kB,
```

#### 135. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1610` → after: `L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1610) · [Before (L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1610)

```diff
-             ...(0, Bt.h)(Qt)
+             ...(0, tB.f)(hB)
```

#### 136. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1618` → after: `L1618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1618) · [Before (L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1618)

```diff
-         return lt.material = wt, lt.eZ(), lt
+         return zB.material = gB, zB.yR(), zB
```

#### 137. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1622-L1623` → after: `L1622-L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1622-L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1622-L1623) · [Before (L1622-L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1622-L1623)

```diff
-           mJ: Ot
-         } = this.ql, qt = Ot.add(tt, 1, 1);
+           zW: TB
+         } = this.Nz, JB = TB.add(BB, 1, 1);
```

#### 138. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1625` → after: `L1625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1625) · [Before (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1625)

```diff
-         Ot.RZ(qt, "hidingMeshManager", {
+         TB.xR(JB, "hidingMeshManager", {
```

#### 139. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1627` → after: `L1627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1627) · [Before (L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1627)

```diff
-             if ((0, pt.b)(this.ql)) return;
+             if ((0, bB.c)(this.Nz)) return;
```

#### 140. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1632` → after: `L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1632) · [Before (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1632)

```diff
-             Dt = tt, Ot.RZ(qt, Ot.names.mesh, {
+             oB = BB, TB.xR(JB, TB.names.mesh, {
```

#### 141. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1639` → after: `L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1639) · [Before (L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1639)

```diff
-             null === (tt = Dt) || void 0 === tt || tt.dispose(!1, !0), Ot.ZZ(qt, Ot.names.mesh)
+             null === (BB = oB) || void 0 === BB || BB.dispose(!1, !0), TB.Qr(JB, TB.names.mesh)
```

#### 142. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1643` → after: `L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1643) · [Before (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1643)

```diff
-           mj: "Board",
+           Ev: "Board",
```

#### 143. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1645` → after: `L1645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1645) · [Before (L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1645)

```diff
-         }), Ot.RZ(qt, "isBoard")
+         }), TB.xR(JB, "isBoard")
```

#### 144. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1649-L1650` → after: `L1649-L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1649-L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1649-L1650) · [Before (L1649-L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1649-L1650)

```diff
-         for (const qt of this.bloxd.mJ.bZ("isBoard"))
-           if (Mt().squaredDistance(this.bloxd.mJ.YM(qt.uZ), Ot) < .01) return void this.bloxd.mJ.deleteEntity(qt.uZ)
+         for (const JB of this.bloxd.zW.fR("isBoard"))
+           if (UB().squaredDistance(this.bloxd.zW.aU(JB.bR), TB) < .01) return void this.bloxd.zW.deleteEntity(JB.bR)
```

#### 145. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1653-L1655` → after: `L1653-L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1653-L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1653-L1655) · [Before (L1653-L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1653-L1655)

```diff
-         for (const Ot of this.bloxd.mJ.bZ("isBoard")) {
-           const [qt, Dt, mt] = (0, kt.O)(this.bloxd.mJ.YM(Ot.uZ));
-           qt === tt && Dt === et && mt === Vt && this.bloxd.mJ.deleteEntity(Ot.uZ)
+         for (const TB of this.bloxd.zW.fR("isBoard")) {
+           const [JB, oB, GB] = (0, rB._)(this.bloxd.zW.aU(TB.bR));
+           JB === BB && oB === IB && GB === ZB && this.bloxd.zW.deleteEntity(TB.bR)
```

#### 146. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1660` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1660) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1660)

```diff
-             return "Fireball" === tt ? jt("Fireball Block", .95) : "RPG" === tt ? jt("Rocket", .5) : "Obby RPG" === tt ? jt("Obby Rocket", .5) : "Super RPG" === tt ? jt("Super Rocket", .7) : "Grenade Launcher" === tt ? jt("Grenade", .357) : "Iceball" === tt ? jt("Iceball Block",  … [truncated]
+             return "Fireball" === BB ? kB("Fireball Block", .95) : "RPG" === BB ? kB("Rocket", .5) : "Obby RPG" === BB ? kB("Obby Rocket", .5) : "Super RPG" === BB ? kB("Super Rocket", .7) : "Grenade Launcher" === BB ? kB("Grenade", .357) : "Iceball" === BB ? kB("Iceball Block",  … [truncated]
```

#### 147. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1667-L1669` → after: `L1667-L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1667-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1667-L1669) · [Before (L1667-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1667-L1669)

```diff
-           Vt = xt.g.itemsClient[et.item],
-           Ot = et.thrownRole ? Vt.getMeshWithRole(et.scale, Kt.b.thrown) : Vt.getMesh(et.scale);
-         return et.billboard && (Ot.billboardMode = ht.e.BILLBOARDMODE_Y), Ot
+           ZB = xB.l.itemsClient[IB.item],
+           TB = IB.thrownRole ? ZB.getMeshWithRole(IB.scale, sB.d.thrown) : ZB.getMesh(IB.scale);
+         return IB.billboard && (TB.billboardMode = wB.d.BILLBOARDMODE_Y), TB
```

#### 148. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1672` → after: `L1672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1672) · [Before (L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1672)

```diff
-         const Vt = this.ql.Bf.vI(),
+         const ZB = this.Nz.Ig.JR(),
```

#### 149. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1678-L1679` → after: `L1678-L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1678-L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1678-L1679) · [Before (L1678-L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1678-L1679)

```diff
-           Ot = this.ql.Bf.xZ(`${et.texture}|minLifetime${et.minLifeTime}`, Vt);
-         if (Ot.texture = (0, Jt.w)(tt, (0, wt.g)(et.texture)), "timeFraction" in et.colorGradients[0])
+           TB = this.Nz.Ig.Kr(`${IB.texture}|minLifetime${IB.minLifeTime}`, ZB);
+         if (TB.texture = (0, dB.u)(BB, (0, gB.f)(IB.texture)), "timeFraction" in IB.colorGradients[0])
```

#### 150. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1681-L1682` → after: `L1681-L1682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1681-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1681-L1682) · [Before (L1681-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1681-L1682)

```diff
-             const tt = qt.maxColor ? (0, Zt.n)(qt.maxColor) : void 0;
-             Ot.addColorGradient(qt.timeFraction, (0, Zt.n)(qt.minColor), tt)
+             const BB = JB.maxColor ? (0, jB.j)(JB.maxColor) : void 0;
+             TB.addColorGradient(JB.timeFraction, (0, jB.j)(JB.minColor), BB)
```

#### 151. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1685` → after: `L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1685) · [Before (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1685)

```diff
-             Ot.addColorGradient(1, (0, Zt.p)(255, 255, 255, tt), (0, Zt.p)(255, 255, 255, 1)), Ot.useRampGradients = !0, Ot.addColorRemapGradient(0, tt, 1), Ot.addColorRemapGradient(1, tt, 1), Pt.e.applyRampColoursToPSystem(Ot, et.colorGradients.map((tt => tt.color)))
+             TB.addColorGradient(1, (0, jB.l)(255, 255, 255, BB), (0, jB.l)(255, 255, 255, 1)), TB.useRampGradients = !0, TB.addColorRemapGradient(0, BB, 1), TB.addColorRemapGradient(1, BB, 1), MB.d.applyRampColoursToPSystem(TB, IB.colorGradients.map((BB => BB.color)))
```

#### 152. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1687` → after: `L1687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1687) · [Before (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1687)

```diff
-         Ot.blendMode = et.blendMode, Ot.minLifeTime = et.minLifeTime, Ot.maxLifeTime = et.maxLifeTime, Ot.minEmitPower = et.minEmitPower, Ot.maxEmitPower = et.maxEmitPower, Ot.minSize = et.minSize, Ot.maxSize = et.maxSize, Ot.gravity = new gt.uf(et.gravity[0], et.gravity[1], et.g … [truncated]
+         TB.blendMode = IB.blendMode, TB.minLifeTime = IB.minLifeTime, TB.maxLifeTime = IB.maxLifeTime, TB.minEmitPower = IB.minEmitPower, TB.maxEmitPower = IB.maxEmitPower, TB.minSize = IB.minSize, TB.maxSize = IB.maxSize, TB.gravity = new DB.rN(IB.gravity[0], IB.gravity[1], IB.g … [truncated]
```

#### 153. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1692` → after: `L1692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1692) · [Before (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1692)

```diff
-         const et = this.ql.Bf.vI(),
+         const IB = this.Nz.Ig.JR(),
```

#### 154. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1694-L1695` → after: `L1694-L1695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1694-L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1694-L1695) · [Before (L1694-L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1694-L1695)

```diff
-         (0, Zt.z)(this.ql, Vt), Vt.createBoxEmitter(new gt.uf(Math.min(tt.dir1[0], tt.dir2[0]), Math.min(tt.dir1[1], tt.dir2[1]), Math.min(tt.dir1[2], tt.dir2[2])), new gt.uf(Math.max(tt.dir1[0], tt.dir2[0]), Math.max(tt.dir1[1], tt.dir2[1]), Math.max(tt.dir1[2], tt.dir2[2])), ne … [truncated]
-         new Pt.g(Vt, tt.maxLifeTime).emitAmount(tt.manualEmitCount), this.bloxd.client.gameRecorder.recordParticleEffectPlayed(tt)
+         (0, jB.x)(this.Nz, ZB), ZB.createBoxEmitter(new DB.rN(Math.min(BB.dir1[0], BB.dir2[0]), Math.min(BB.dir1[1], BB.dir2[1]), Math.min(BB.dir1[2], BB.dir2[2])), new DB.rN(Math.max(BB.dir1[0], BB.dir2[0]), Math.max(BB.dir1[1], BB.dir2[1]), Math.max(BB.dir1[2], BB.dir2[2])), ne … [truncated]
+         new MB.e(ZB, BB.maxLifeTime).emitAmount(BB.manualEmitCount), this.bloxd.client.gameRecorder.recordParticleEffectPlayed(BB)
```

#### 155. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1698-L1699` → after: `L1698-L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1698-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1698-L1699) · [Before (L1698-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1698-L1699)

```diff
-         if (tt instanceof vt.b) return !1;
-         const et = `${tt.blendMode}|${tt.useRampGradients}`,
+         if (BB instanceof OB.d) return !1;
+         const IB = `${BB.blendMode}|${BB.useRampGradients}`,
```

#### 156. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1701` → after: `L1701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1701) · [Before (L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1701)

```diff
-           Ot = this.ql.Bf.vI();
+           TB = this.Nz.Ig.JR();
```

#### 157. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1705` → after: `L1705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1705) · [Before (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1705)

```diff
-         const Ot = this.ql.Bf.vI();
+         const TB = this.Nz.Ig.JR();
```

#### 158. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1709` → after: `L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1709) · [Before (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1709)

```diff
-             Ot = null !== (qt = et.meshOffset) && void 0 !== qt ? qt : Mt().Re(0, tt / 2, 0),
+             TB = null !== (JB = IB.meshOffset) && void 0 !== JB ? JB : UB().nZ(0, BB / 2, 0),
```

#### 159. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1711` → after: `L1711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1711) · [Before (L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1711)

```diff
-             jt = Qe(this.ql, et.blockName, et.size);
+             kB = nI(this.Nz, IB.blockName, IB.size);
```

#### 160. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1713` → after: `L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1713) · [Before (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1713)

```diff
-             RP: jt,
+             gR: kB,
```

#### 161. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1720-L1721` → after: `L1720-L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1720-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1720-L1721) · [Before (L1720-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1720-L1721)

```diff
-               RP: null,
-               mesh: (0, bt.r)(this.ql.Bf, `skeletalVehicleLoading|${et.blockName}`),
+               gR: null,
+               mesh: (0, WB.p)(this.Nz.Ig, `skeletalVehicleLoading|${IB.blockName}`),
```

#### 162. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1728-L1729` → after: `L1728-L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1728-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1728-L1729) · [Before (L1728-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1728-L1729)

```diff
-             RP: null,
-             mesh: null !== (Dt = null === (mt = xt.g.itemsClient[et.blockName]) || void 0 === mt ? void 0 : mt.getMesh(et.size, Vt)) && void 0 !== Dt ? Dt : null,
+             gR: null,
+             mesh: null !== (oB = null === (GB = xB.l.itemsClient[IB.blockName]) || void 0 === GB ? void 0 : GB.getMesh(IB.size, ZB)) && void 0 !== oB ? oB : null,
```

#### 163. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1742` → after: `L1742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1742) · [Before (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1742)

```diff
-             yt = `${tt}|${JSON.stringify(ft)}${lt?"|mirrored":""}`,
+             qB = `${BB}|${JSON.stringify(NB)}${zB?"|mirrored":""}`,
```

#### 164. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1748` → after: `L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1748) · [Before (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1748)

```diff
-               qt = et.diffuseColor ? void 0 : (0, Ht.h)(et.texture);
+               JB = IB.diffuseColor ? void 0 : (0, cB.f)(IB.texture);
```

#### 165. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1760` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1760) · [Before (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1760)

```diff
-               } = wt.e.getTexture((0, Ht.h)(et.texture), Tt.k.BLOCK);
+               } = gB.e.getTexture((0, cB.f)(IB.texture), EB.m.BLOCK);
```

#### 166. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1762` → after: `L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1762) · [Before (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1762)

```diff
-                   transparencyMode: Wt.n.alphaTest,
+                   transparencyMode: YB.o.alphaTest,
```

#### 167. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1768` → after: `L1768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1768) · [Before (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1768)

```diff
-                     samplingMode: Jt.k.nearestNearestMipLinear,
+                     samplingMode: dB.j.nearestNearestMipLinear,
```

#### 168. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1778` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1778) · [Before (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1778)

```diff
-                 const tt = null === (Nt = Xt.h[et.texture]) || void 0 === Nt ? void 0 : Nt.textureInfo;
+                 const BB = null === (yB = nB.f[IB.texture]) || void 0 === yB ? void 0 : yB.textureInfo;
```

#### 169. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1780-L1781` → after: `L1780-L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1780-L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1780-L1781) · [Before (L1780-L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1780-L1781)

```diff
-                 if (tt && "object" === typeof tt && "animTextures" in tt) Vt = (0, St.j)(tt.animTextures.length, null !== (Kt = tt.animationInterval) && void 0 !== Kt ? Kt : 200), qt = tt.animTextures[0];
-                 else console.warn(`Box mesh entity animateTexture=true but texture "${et.texture}" is not an animated block \u2014 rendering static.`)
+                 if (BB && "object" === typeof BB && "animTextures" in BB) ZB = (0, iB.g)(BB.animTextures.length, null !== (sB = BB.animationInterval) && void 0 !== sB ? sB : 200), JB = BB.animTextures[0];
+                 else console.warn(`Box mesh entity animateTexture=true but texture "${IB.texture}" is not an animated block \u2014 rendering static.`)
```

#### 170. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1787-L1788` → after: `L1787-L1788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1787-L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1787-L1788) · [Before (L1787-L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1787-L1788)

```diff
-               name: `${yt}EntityMesh`,
-               Fw: Ot,
+               name: `${qB}EntityMesh`,
+               lg: TB,
```

#### 171. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1794` → after: `L1794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1794) · [Before (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1794)

```diff
-                 Vt && (0, Wt.p)(tt, St.e, Vt), (0, it.d)(tt, !0), (0, Wt.B)(tt)
+                 ZB && (0, YB.r)(BB, iB.e, ZB), (0, lB.e)(BB, !0), (0, YB.F)(BB)
```

#### 172. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1797` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1797) · [Before (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1797)

```diff
-             }), mt = et.faceUV ? et.faceUV.map((tt => [tt[0] + .01, tt[1] + .01, tt[2] - .01, tt[3] - .01])) : void 0, dt = (0, bt.q)(this.ql.Bf, `${yt}EntityMesh`, (0, Ct.c)({
+             }), GB = IB.faceUV ? IB.faceUV.map((BB => [BB[0] + .01, BB[1] + .01, BB[2] - .01, BB[3] - .01])) : void 0, vB = (0, WB.n)(this.Nz.Ig, `${qB}EntityMesh`, (0, CB.b)({
```

#### 173. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1803-L1805` → after: `L1803-L1805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1803-L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1803-L1805) · [Before (L1803-L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1803-L1805)

```diff
-             if (dt.material = Dt, dt.tL("aOpacity", 1), dt.qL.aOpacity = 1, this.ql.YE) {
-               const tt = void 0 === qt ? void 0 : (0, Qt.c)(Xt.s, qt);
-               dt.tL("aShaderPackItem", 4), dt.qL.aShaderPackItem = new gt.Vector4(void 0 === tt ? 0 : tt + 1, 0, 0, 0)
+             if (vB.material = oB, vB.Im("aOpacity", 1), vB.Zm.aOpacity = 1, this.Nz.oN) {
+               const BB = void 0 === JB ? void 0 : (0, hB.e)(nB.r, JB);
+               vB.Im("aShaderPackItem", 4), vB.Zm.aShaderPackItem = new DB.Vector4(void 0 === BB ? 0 : BB + 1, 0, 0, 0)
```

#### 174. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1807` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1807) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1807)

```diff
-             dt.Cf = !0, dt.hf = !0, dt.Av(!1), (0, ct.f)(dt) || dt.vI().wZ(dt), ut.set(yt, dt), ht = dt
+             vB.RN = !0, vB.XN = !0, vB.qY(!1), (0, pB.d)(vB) || vB.JR().jR(vB), QB.set(qB, vB), wB = vB
```

#### 175. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1809-L1811` → after: `L1809-L1811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1809-L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1809-L1811) · [Before (L1809-L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1809-L1811)

```diff
-           const vt = ht.createInstance(`${yt}EntityMeshInstance`);
-           return vt.cj.set(Et * qt, Et * Dt, Et * mt), this.ql.Bf.ow(vt), (0, Rt.s)(vt, 0, 0, 0), Vt(vt), {
-             RP: null,
+           const OB = wB.createInstance(`${qB}EntityMeshInstance`);
+           return OB.ek.set(FB * JB, FB * oB, FB * GB), this.Nz.Ig.xg(OB), (0, aB.q)(OB, 0, 0, 0), ZB(OB), {
+             gR: null,
```

#### 176. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1813` → after: `L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1813) · [Before (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1813)

```diff
-             meshOffset: null !== (dt = et.meshOffset) && void 0 !== dt ? dt : Mt().Re(0, Dt / 2, 0),
+             meshOffset: null !== (vB = IB.meshOffset) && void 0 !== vB ? vB : UB().nZ(0, oB / 2, 0),
```

#### 177. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1823-L1824` → after: `L1823-L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1823-L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1823-L1824) · [Before (L1823-L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1823-L1824)

```diff
-               const dt = tt.vI(),
-                 jt = Math.min(4096, dt.Jf().getCaps().maxTextureSize),
+               const vB = BB.JR(),
+                 kB = Math.min(4096, vB.PN().getCaps().maxTextureSize),
```

#### 178. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1830` → after: `L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1830) · [Before (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1830)

```diff
-                 lt = (0, ut.i)(dt, "Leaderboard", {
+                 zB = (0, QB.k)(vB, "Leaderboard", {
```

#### 179. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1835` → after: `L1835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1835) · [Before (L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1835)

```diff
-                 Et = (0, ut.h)(lt),
+                 FB = (0, QB.g)(zB),
```

#### 180. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1838` → after: `L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1838) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1838)

```diff
-                 yt = null !== (qt = Ot.initial) && void 0 !== qt ? qt : null;
+                 qB = null !== (JB = TB.initial) && void 0 !== JB ? JB : null;
```

#### 181. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1840` → after: `L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1840) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1840)

```diff
-                 (0, Ft.d)(Et, ft.width, ft.height, Ht, et, {
+                 (0, RB.c)(FB, NB.width, NB.height, cB, IB, {
```

#### 182. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1845` → after: `L1845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1845) · [Before (L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1845)

```diff
-                 }), (0, ut.S)(lt, !0, !1)
+                 }), (0, QB.T)(zB, !0, !1)
```

#### 183. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1849` → after: `L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1849) · [Before (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1849)

```diff
-                   yt = null !== tt && void 0 !== tt ? tt : null, Nt()
+                   qB = null !== BB && void 0 !== BB ? BB : null, yB()
```

#### 184. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1853-L1854` → after: `L1853-L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1853-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1853-L1854) · [Before (L1853-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1853-L1854)

```diff
-                 }))) && void 0 !== Dt ? Dt : () => {},
-                 Kt = (0, pt.c)(dt, Nt, {
+                 }))) && void 0 !== oB ? oB : () => {},
+                 sB = (0, bB.d)(vB, yB, {
```

#### 185. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1861` → after: `L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1861) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1861)

```diff
-                   Fw: dt,
+                   lg: vB,
```

#### 186. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1869` → after: `L1869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1869) · [Before (L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1869)

```diff
-                 vt = (0, bt.q)(tt, "Leaderboard", (0, Ct.j)({
+                 OB = (0, WB.n)(BB, "Leaderboard", (0, CB.f)({
```

#### 187. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1874` → after: `L1874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1874) · [Before (L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1874)

```diff
-               return vt.material = ht, vt.ZI.add((() => {
+               return OB.material = wB, OB.oR.add((() => {
```

#### 188. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1877-L1878` → after: `L1877-L1878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1877-L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1877-L1878) · [Before (L1877-L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1877-L1878)

```diff
-             }(this.ql.Bf, et, null !== (ht = null === (vt = this.bloxd.client.getConnectionInfo()) || void 0 === vt ? void 0 : vt.userContext.whamm) && void 0 !== ht ? ht : null, {
-               initial: void 0 === tt ? null : null === (Pt = this.ql.dL[this.ql.lL]) || void 0 === Pt || null === (Zt = Pt[tt]) || void 0 === Zt ? void 0 : Zt._leaderboardAround,
+             }(this.Nz.Ig, IB, null !== (wB = null === (OB = this.bloxd.client.getConnectionInfo()) || void 0 === OB ? void 0 : OB.userContext.whamm) && void 0 !== wB ? wB : null, {
+               initial: void 0 === BB ? null : null === (MB = this.Nz.Tm[this.Nz.Jm]) || void 0 === MB || null === (jB = MB[BB]) || void 0 === jB ? void 0 : jB._leaderboardAround,
```

#### 189. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1881` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1881) · [Before (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1881)

```diff
-                 const Vt = yt.j.subscribe(`otherEntitySettingsClientifiedEId|${tt}|_leaderboardAround`, et);
+                 const ZB = qB.l.subscribe(`otherEntitySettingsClientifiedEId|${BB}|_leaderboardAround`, IB);
```

#### 190. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1883` → after: `L1883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1883) · [Before (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1883)

```diff
-                   yt.j.unsubscribe(Vt)
+                   qB.l.unsubscribe(ZB)
```

#### 191. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1887` → after: `L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1887) · [Before (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1887)

```diff
-               initial: (0, Ft.n)(et.leaderboardTop),
+               initial: (0, RB.m)(IB.leaderboardTop),
```

#### 192. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1889-L1890` → after: `L1889-L1890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1889-L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1889-L1890) · [Before (L1889-L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1889-L1890)

```diff
-                 const Vt = yt.j.subscribe(`leaderboardTop|${tt}`, (tt => {
-                   const Vt = (0, Ft.n)(tt);
+                 const ZB = qB.l.subscribe(`leaderboardTop|${BB}`, (BB => {
+                   const ZB = (0, RB.m)(BB);
```

#### 193. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1894` → after: `L1894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1894) · [Before (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1894)

```diff
-                   yt.j.unsubscribe(Vt)
+                   qB.l.unsubscribe(ZB)
```

#### 194. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1898-L1900` → after: `L1898-L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1898-L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1898-L1900) · [Before (L1898-L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1898-L1900)

```diff
-             qt = 2 * Ot.fL().boundingBox.extendSize.y;
-           return this.ql.Bf.ow(Ot), Vt(Ot), {
-             RP: null,
+             JB = 2 * TB.qm().boundingBox.extendSize.y;
+           return this.Nz.Ig.xg(TB), ZB(TB), {
+             gR: null,
```

#### 195. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1902` → after: `L1902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1902) · [Before (L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1902)

```diff
-             meshOffset: null !== (Gt = et.meshOffset) && void 0 !== Gt ? Gt : Mt().Re(0, qt / 2, 0),
+             meshOffset: null !== (mB = IB.meshOffset) && void 0 !== mB ? mB : UB().nZ(0, JB / 2, 0),
```

#### 196. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1912` → after: `L1912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1912) · [Before (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1912)

```diff
-           if ((0, kt.B)(et.eId)) console.error("No eId specified for mesh particle system, will not be possible to update it");
+           if ((0, rB.L)(IB.eId)) console.error("No eId specified for mesh particle system, will not be possible to update it");
```

#### 197. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1915-L1916` → after: `L1915-L1916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1915-L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1915-L1916) · [Before (L1915-L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1915-L1916)

```diff
-             (0, kt.B)(this.bloxd.meshParticleSystems[et.eId]) && (this.bloxd.meshParticleSystems[et.eId] = {});
-             const Vt = null !== (ot = et.nodeName) && void 0 !== ot ? ot : "__root__";
+             (0, rB.L)(this.bloxd.meshParticleSystems[IB.eId]) && (this.bloxd.meshParticleSystems[IB.eId] = {});
+             const ZB = null !== (LB = IB.nodeName) && void 0 !== LB ? LB : "__root__";
```

#### 198. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1919` → after: `L1919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1919) · [Before (L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1919)

```diff
-               (0, kt.B)(null === this || void 0 === this || null === (tt = this.bloxd) || void 0 === tt || null === (Ot = tt.meshParticleSystems) || void 0 === Ot ? void 0 : Ot[et.eId]) || (delete this.bloxd.meshParticleSystems[et.eId][Vt], 0 === Object.keys(this.bloxd.meshPartic … [truncated]
+               (0, rB.L)(null === this || void 0 === this || null === (BB = this.bloxd) || void 0 === BB || null === (TB = BB.meshParticleSystems) || void 0 === TB ? void 0 : TB[IB.eId]) || (delete this.bloxd.meshParticleSystems[IB.eId][ZB], 0 === Object.keys(this.bloxd.meshPartic … [truncated]
```

#### 199. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1922-L1923` → after: `L1922-L1923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1922-L1923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1922-L1923) · [Before (L1922-L1923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1922-L1923)

```diff
-           return this.ql.Bf.ow(Ot), Vt(Ot), {
-             RP: null,
+           return this.Nz.Ig.xg(TB), ZB(TB), {
+             gR: null,
```

#### 200. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1925` → after: `L1925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1925) · [Before (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1925)

```diff
-             meshOffset: null !== (zt = et.meshOffset) && void 0 !== zt ? zt : Mt().Re(0, et.height / 2, 0),
+             meshOffset: null !== (XB = IB.meshOffset) && void 0 !== XB ? XB : UB().nZ(0, IB.height / 2, 0),
```

#### 201. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1931-L1934` → after: `L1931-L1934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1931-L1934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1931-L1934) · [Before (L1931-L1934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1931-L1934)

```diff
-           const tt = this.ql.Bf.xI,
-             Ot = (0, It.k)("Player");
-           tt.Av(Ot, !0), tt.setPosition(Ot, 0, 0, 0), tt.setRotationEuler(Ot, 0, 0, 0), tt.set(Ot, "aOpacity", 1), tt.wL(Ot, "aOpacity", 1);
-           const qt = null === (rt = (0, lt.n)("head", null === (Ut = et.textures) || void 0 === Ut ? void 0 : Ut.head)) || void 0 === rt ? void 0 : rt.personModel;
+           const BB = this.Nz.Ig.kR,
+             TB = (0, HB.j)("Player");
+           BB.qY(TB, !0), BB.setPosition(TB, 0, 0, 0), BB.setRotationEuler(TB, 0, 0, 0), BB.set(TB, "aOpacity", 1), BB.Wm(TB, "aOpacity", 1);
+           const JB = null === (eB = (0, zB.h)("head", null === (uB = IB.textures) || void 0 === uB ? void 0 : uB.head)) || void 0 === eB ? void 0 : eB.personModel;
```

#### 202. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1939` → after: `L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1939) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1939)

```diff
-           const Dt = null !== (At = et.size) && void 0 !== At ? At : 1;
+           const oB = null !== (fB = IB.size) && void 0 !== fB ? fB : 1;
```

#### 203. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1941` → after: `L1941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1941) · [Before (L1941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1941)

```diff
-           for (const Vt of Et.c) {
+           for (const ZB of FB.d) {
```

#### 204. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1943` → after: `L1943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1943) · [Before (L1943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1943)

```diff
-             It.b.Player.meshApi.updatePlayerCosmetic(null, Ot, Vt, null === (nt = et.textures) || void 0 === nt ? void 0 : nt[Vt])
+             HB.d.Player.meshApi.updatePlayerCosmetic(null, TB, ZB, null === (VB = IB.textures) || void 0 === VB ? void 0 : VB[ZB])
```

#### 205. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1946` → after: `L1946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1946) · [Before (L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1946)

```diff
-             RP: Ot,
+             gR: TB,
```

#### 206. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1948-L1949` → after: `L1948-L1949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1948-L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1948-L1949) · [Before (L1948-L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1948-L1949)

```diff
-             meshOffset: null !== (Bt = et.meshOffset) && void 0 !== Bt ? Bt : Mt().Re(0, 0, 0),
-             nameYOffset: (null !== (st = null === qt || void 0 === qt ? void 0 : qt.height) && void 0 !== st ? st : ft.e.Yy) * Dt + .5
+             meshOffset: null !== (tB = IB.meshOffset) && void 0 !== tB ? tB : UB().nZ(0, 0, 0),
+             nameYOffset: (null !== (KB = null === JB || void 0 === JB ? void 0 : JB.height) && void 0 !== KB ? KB : NB.f.fq) * oB + .5
```

#### 207. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1957-L1958` → after: `L1957-L1958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1957-L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1957-L1958) · [Before (L1957-L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1957-L1958)

```diff
-         const Ot = `ParticleEmitter|${JSON.stringify(tt)}`,
-           qt = this.ql.Bf.vI(),
+         const TB = `ParticleEmitter|${JSON.stringify(BB)}`,
+           JB = this.Nz.Ig.JR(),
```

#### 208. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1961` → after: `L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1961) · [Before (L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1961)

```diff
-           const tt = (0, bt.q)(this.ql.Bf, `${Ot}EntityMesh`, (0, Ct.c)({
+           const BB = (0, WB.n)(this.Nz.Ig, `${TB}EntityMesh`, (0, CB.b)({
```

#### 209. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1966` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1966) · [Before (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1966)

```diff
-           tt.visibility = 0, tt.Cf = !0, tt.hf = !0, tt.Av(!1), tt.Gw = !1, (0, ct.f)(tt) || tt.vI().wZ(tt), (0, At.g)(tt), Dt.particleEmitter = tt
+           BB.visibility = 0, BB.RN = !0, BB.XN = !0, BB.qY(!1), BB.tg = !1, (0, pB.d)(BB) || BB.JR().jR(BB), (0, fB.h)(BB), oB.particleEmitter = BB
```

#### 210. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1968-L1969` → after: `L1968-L1969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1968-L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1968-L1969) · [Before (L1968-L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1968-L1969)

```diff
-         const mt = Dt.particleEmitter.createInstance(`${Ot}EntityMeshInstance`);
-         mt.cj.set(tt.width, tt.height, tt.depth), mt.Gw = !1, mt.position.set(0, 0, 0);
+         const GB = oB.particleEmitter.createInstance(`${TB}EntityMeshInstance`);
+         GB.ek.set(BB.width, BB.height, BB.depth), GB.tg = !1, GB.position.set(0, 0, 0);
```

#### 211. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1971` → after: `L1971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1971) · [Before (L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1971)

```diff
-         if ((0, kt.B)(tt.dir1) || (dt.direction1._x = tt.dir1[0], dt.direction1._y = tt.dir1[1], dt.direction1._z = tt.dir1[2]), (0, kt.B)(tt.dir2) || (dt.direction2._x = tt.dir2[0], dt.direction2._y = tt.dir2[1], dt.direction2._z = tt.dir2[2]), "ring" === tt.emitterShape && (dt. … [truncated]
+         if ((0, rB.L)(BB.dir1) || (vB.direction1._x = BB.dir1[0], vB.direction1._y = BB.dir1[1], vB.direction1._z = BB.dir1[2]), (0, rB.L)(BB.dir2) || (vB.direction2._x = BB.dir2[0], vB.direction2._y = BB.dir2[1], vB.direction2._z = BB.dir2[2]), "ring" === BB.emitterShape && (vB. … [truncated]
```

#### 212. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1974` → after: `L1974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1974) · [Before (L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1974)

```diff
-           (0, kt.B)(tt) || (0, Zt.d)(dt, tt)
+           (0, rB.L)(BB) || (0, jB.d)(vB, BB)
```

#### 213. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1983-L1993` → after: `L1983-L1993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1983-L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1983-L1993) · [Before (L1983-L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1983-L1993)

```diff
-     var Ne = Vt(38285),
-       ae = Vt(39),
-       Me = Vt(1333),
-       be = Vt(184),
-       Je = Vt(4641),
-       Ce = Vt(37931),
-       ue = Vt(1308),
-       Ke = Vt(1429),
-       he = Vt(38478),
-       ve = Vt(4204),
-       We = Vt(39768);
+     var qI = ZB(38099),
+       yI = ZB(36),
+       UI = ZB(1305),
+       WI = ZB(168),
+       dI = ZB(4691),
+       CI = ZB(37722),
+       QI = ZB(1281),
+       sI = ZB(1385),
+       wI = ZB(38295),
+       OI = ZB(4267),
+       YI = ZB(39618);
```

#### 214. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1996)

```diff
-         super(), et = et || {}, this.ql = tt;
+         super(), IB = IB || {}, this.Nz = BB;
```

#### 215. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L1998-L2002` → after: `L1998-L2002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L1998-L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L1998-L2002) · [Before (L1998-L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L1998-L2002)

```diff
-         this.element = Vt.element, this.canvas = Vt.canvas, this.cL = {
-           RL: !1,
-           YL: !1,
-           gL: !1,
-           bR: !!document.hasFocus()
+         this.element = ZB.element, this.canvas = ZB.canvas, this.Rm = {
+           Am: !1,
+           Km: !1,
+           BX: !1,
+           sH: !!document.hasFocus()
```

#### 216. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2005-L2008` → after: `L2005-L2008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2005-L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2005-L2008) · [Before (L2005-L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2005-L2008)

```diff
-         this.MJ = new We.e(this.element, 10), this.MJ.bI = et.bI, this.MJ.jF = et.jF, this.XF = (Ot = this.element, "pointerLockElement" in document && "function" === typeof Ot.requestPointerLock), this.JF = !!et.uF, this.MJ.uF = this.JF && this.XF, this.MJ.KF = et.KF, this.MJ.vF … [truncated]
-           tt !== this.cL.RL && (this.cL.RL = tt, tt && (this.ql.camera.kF = !0), this.emit(tt ? "gainedPointerLock" : "lostPointerLock"), tt && (this.cL.gL = !0))
-         }, this.MJ.YF = () => {
-           this.MJ.iN = tt.Bf.resize.bind(tt.Bf),
+         this.jW = new YI.c(this.element, 10), this.jW.bM = IB.bM, this.jW.yX = IB.yX, this.EX = (TB = this.element, "pointerLockElement" in document && "function" === typeof TB.requestPointerLock), this.gL = !!IB.qL, this.jW.qL = this.gL && this.EX, this.jW.dL = IB.dL, this.jW.wL … [truncated]
+           BB !== this.Rm.Am && (this.Rm.Am = BB, BB && (this.Nz.camera.uL = !0), this.emit(BB ? "gainedPointerLock" : "lostPointerLock"), BB && (this.Rm.BX = !0))
+         }, this.jW.fL = () => {
+           this.jW.kU = BB.Ig.resize.bind(BB.Ig),
```

#### 217. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2011` → after: `L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2011) · [Before (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2011)

```diff
-                 tt.cL.YL = !0;
+                 BB.Rm.Km = !0;
```

#### 218. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2013` → after: `L2013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2013) · [Before (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2013)

```diff
-                   tt.cL.YL = !1, document.removeEventListener(Vt.type, et)
+                   BB.Rm.Km = !1, document.removeEventListener(ZB.type, IB)
```

#### 219. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2018` → after: `L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2018) · [Before (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2018)

```diff
-               this.cL.gL = !0
+               this.Rm.BX = !0
```

#### 220. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2020` → after: `L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2020) · [Before (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2020)

```diff
-               this.cL.gL = !1
+               this.Rm.BX = !1
```

#### 221. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2022)

```diff
-               this.cL.bR = !0
+               this.Rm.sH = !0
```

#### 222. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2024` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2024) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2024)

```diff
-               this.cL.bR = !1
+               this.Rm.sH = !1
```

#### 223. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2027` → after: `L2027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2027) · [Before (L2027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2027)

```diff
-             this.cL.gL = !0, this.cL.bR = !0, this.element.removeEventListener("mousedown", et)
+             this.Rm.BX = !0, this.Rm.sH = !0, this.element.removeEventListener("mousedown", IB)
```

#### 224. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2029` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2029) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2029)

```diff
-           this.element.addEventListener("mousedown", et), this.emit("DOMready"), this.MJ.YF = null
+           this.element.addEventListener("mousedown", IB), this.emit("DOMready"), this.jW.fL = null
```

#### 225. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2037` → after: `L2037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2037) · [Before (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2037)

```diff
-         tt || (this.ql.camera.kF = !0), this.MJ.zy = !!tt && this.XF
+         BB || (this.Nz.camera.uL = !0), this.jW.mq = !!BB && this.EX
```

#### 226. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2040` → after: `L2040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2040) · [Before (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2040)

```diff
-         this.MJ.uF = !!tt && this.JF && this.XF
+         this.jW.qL = !!BB && this.gL && this.EX
```

#### 227. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2043` → after: `L2043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2043) · [Before (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2043)

```diff
-         return this.cL.RL
+         return this.Rm.Am
```

#### 228. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2046` → after: `L2046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2046) · [Before (L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2046)

```diff
-         return this.cL.YL
+         return this.Rm.Km
```

#### 229. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2049` → after: `L2049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2049) · [Before (L2049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2049)

```diff
-         return this.cL.gL
+         return this.Rm.BX
```

#### 230. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2052` → after: `L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2052) · [Before (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2052)

```diff
-         return this.cL.bR
+         return this.Rm.sH
```

#### 231. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2057` → after: `L2057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2057) · [Before (L2057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2057)

```diff
-       var et = tt.Vk || null;
+       var IB = BB.tL || null;
```

#### 232. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2073` → after: `L2073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2073) · [Before (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2073)

```diff
-     Vt(39771);
+     ZB(39622);
```

#### 233. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2093` → after: `L2093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2093) · [Before (L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2093)

```diff
-     var Pe = Vt(2934),
+     var MI = ZB(3e3),
```

#### 234. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2095` → after: `L2095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2095) · [Before (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2095)

```diff
-       Le = Vt(39780),
+       PI = ZB(39629),
```

#### 235. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2097-L2098` → after: `L2097-L2098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2097-L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2097-L2098) · [Before (L2097-L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2097-L2098)

```diff
-     var ke = Vt(39787),
-       Ge = Vt(404);
+     var rI = ZB(39636),
+       mI = ZB(364);
```

#### 236. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2101` → after: `L2101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2101) · [Before (L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2101)

```diff
-         this.xQ = new ke(tt.base, tt.vec), this.Sd = et, this.zk = !0, this.friction = Vt, this.restitution = Ot, this.gravityMultiplier = qt, this.Hl = Dt, this.Fk = !!mt, this.Nl = -1, this.fluidDrag = -1, this.fluidDragVert = -1, this.fluidDragHoriz = -1, this.Ql = null, this. … [truncated]
+         this.Tz = new rI(BB.base, BB.vec), this.Wv = IB, this.Gl = !0, this.friction = ZB, this.restitution = TB, this.gravityMultiplier = JB, this.Wz = oB, this.Tl = !!GB, this.iz = -1, this.fluidDrag = -1, this.fluidDragVert = -1, this.fluidDragHoriz = -1, this.Cz = null, this. … [truncated]
```

#### 237. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2104` → after: `L2104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2104) · [Before (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2104)

```diff
-         this.xQ.base[0] = tt.xQ.base[0], this.xQ.base[1] = tt.xQ.base[1], this.xQ.base[2] = tt.xQ.base[2], this.xQ.vec[0] = tt.xQ.vec[0], this.xQ.vec[1] = tt.xQ.vec[1], this.xQ.vec[2] = tt.xQ.vec[2], this.xQ.max[0] = tt.xQ.max[0], this.xQ.max[1] = tt.xQ.max[1], this.xQ.max[2] = t … [truncated]
+         this.Tz.base[0] = BB.Tz.base[0], this.Tz.base[1] = BB.Tz.base[1], this.Tz.base[2] = BB.Tz.base[2], this.Tz.vec[0] = BB.Tz.vec[0], this.Tz.vec[1] = BB.Tz.vec[1], this.Tz.vec[2] = BB.Tz.vec[2], this.Tz.max[0] = BB.Tz.max[0], this.Tz.max[1] = BB.Tz.max[1], this.Tz.max[2] = B … [truncated]
```

#### 238. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2107` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2107) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2107)

```diff
-         Ge.copy(this.xQ.base, tt.xQ.base), Ge.copy(this.xQ.vec, tt.xQ.vec), Ge.copy(this.xQ.max, tt.xQ.max), Ge.copy(this.Dy, tt.Dy), Ge.copy(this.resting, tt.resting), this.inFluid = tt.inFluid, this.ratioInFluid = tt.ratioInFluid, Ge.copy(this.QG, tt.QG), Ge.copy(this.lG, tt.lG … [truncated]
+         mI.copy(this.Tz.base, BB.Tz.base), mI.copy(this.Tz.vec, BB.Tz.vec), mI.copy(this.Tz.max, BB.Tz.max), mI.copy(this.zq, BB.zq), mI.copy(this.resting, BB.resting), this.inFluid = BB.inFluid, this.ratioInFluid = BB.ratioInFluid, mI.copy(this.Rl, BB.Rl), mI.copy(this.Al, BB.Al … [truncated]
```

#### 239. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2110` → after: `L2110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2110) · [Before (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2110)

```diff
-         oe(tt), Ge.subtract(tt, tt, this.xQ.base), this.xQ.translate(tt), this.wG()
+         LI(BB), mI.subtract(BB, BB, this.Tz.base), this.Tz.translate(BB), this.Kl()
```

#### 240. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2113` → after: `L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2113) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2113)

```diff
-         return Ge.clone(this.xQ.base)
+         return mI.clone(this.Tz.base)
```

#### 241. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2116` → after: `L2116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2116) · [Before (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2116)

```diff
-         oe(tt), this.QG[0] = this.QG[0] + tt[0], this.QG[1] = this.QG[1] + tt[1], this.QG[2] = this.QG[2] + tt[2], this.wG()
+         LI(BB), this.Rl[0] = this.Rl[0] + BB[0], this.Rl[1] = this.Rl[1] + BB[1], this.Rl[2] = this.Rl[2] + BB[2], this.Kl()
```

#### 242. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2119` → after: `L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2119) · [Before (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2119)

```diff
-         oe(tt), this.lG[0] = this.lG[0] + tt[0], this.lG[1] = this.lG[1] + tt[1], this.lG[2] = this.lG[2] + tt[2], this.wG()
+         LI(BB), this.Al[0] = this.Al[0] + BB[0], this.Al[1] = this.Al[1] + BB[1], this.Al[2] = this.Al[2] + BB[2], this.Kl()
```

#### 243. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2135` → after: `L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2135) · [Before (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2135)

```diff
-     var re = Vt(39787);
+     var eI = ZB(39636);
```

#### 244. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2142` → after: `L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2142) · [Before (L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2142)

```diff
-       this.Nl = .1, this.fluidDrag = .4, this.al = 2, this.gravity = [0, -10, 0], this.minBounceImpulse = .5
+       this.iz = .1, this.fluidDrag = .4, this.pz = 2, this.gravity = [0, -10, 0], this.minBounceImpulse = .5
```

#### 245. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2146` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2146) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2146)

```diff
-         tt = Object.assign(new Ae, tt), this.gravity = tt.gravity, this.Nl = tt.Nl, this.al = tt.al, this.fluidDrag = tt.fluidDrag, this.minBounceImpulse = tt.minBounceImpulse, this.bodies = [], this._tickNext = 0, this._tickEnd = 0, this.ll = tt.ll, this.mG = tt.mG, this.rollbac … [truncated]
+         BB = Object.assign(new fI, BB), this.gravity = BB.gravity, this.iz = BB.iz, this.pz = BB.pz, this.fluidDrag = BB.fluidDrag, this.minBounceImpulse = BB.minBounceImpulse, this.bodies = [], this._tickNext = 0, this._tickEnd = 0, this.Qz = BB.Qz, this.Ql = BB.Ql, this.rollbac … [truncated]
```

#### 246. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2152` → after: `L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2152) · [Before (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2152)

```diff
-         var mt = this.aG(tt, et, Vt, Ot, qt, Dt);
+         var GB = this.JA(BB, IB, ZB, TB, JB, oB);
```

#### 247. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2160` → after: `L2160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2160) · [Before (L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2160)

```diff
-         return !(et < 0) && (this.bodies.splice(et, 1), et < this._tickNext && this._tickNext--, et < this._tickEnd && this._tickEnd--, tt.xQ = tt.Hl = null, !0)
+         return !(IB < 0) && (this.bodies.splice(IB, 1), IB < this._tickNext && this._tickNext--, IB < this._tickEnd && this._tickEnd--, BB.Tz = BB.Wz = null, !0)
```

#### 248. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2163` → after: `L2163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2163) · [Before (L2163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2163)

```diff
-     var Ye = Vt(37935);
+     var AI = ZB(37729);
```

#### 249. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2187` → after: `L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2187) · [Before (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2187)

```diff
-           et > 0 && (jt = `alloc_failed ${et} bytes; ${jt}`)
+           IB > 0 && (kB = `alloc_failed ${IB} bytes; ${kB}`)
```

#### 250. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2193` → after: `L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2193) · [Before (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2193)

```diff
-         } = Te, Ht = new xe(`${et}${Ot}: ${qt} ${dt?"trapped":"threw"} (${jt})${mt}`);
+         } = EI, cB = new xI(`${IB}${TB}: ${JB} ${vB?"trapped":"threw"} (${kB})${GB}`);
```

#### 251. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2197-L2198` → after: `L2197-L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2197-L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2197-L2198) · [Before (L2197-L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2197-L2198)

```diff
-       const Ht = `${mt}${dt?", and wasm is off from now on":""}`;
-       se(`${Ot} ${dt?"trap":"error"}`, (() => new Error(`wasm physics: ${Ot}: ${qt} ${dt?"trapped":"threw"} (${jt}), so ${Ht}`)), Dt, !dt)
+       const cB = `${GB}${vB?", and wasm is off from now on":""}`;
+       KI(`${TB} ${vB?"trap":"error"}`, (() => new Error(`wasm physics: ${TB}: ${JB} ${vB?"trapped":"threw"} (${kB}), so ${cB}`)), oB, !vB)
```

#### 252. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2209` → after: `L2209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2209) · [Before (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2209)

```diff
-       Ot && console.error(jt), null === (qt = Vt.iE) || void 0 === qt || qt.call(Vt, jt)
+       TB && console.error(kB), null === (JB = ZB.JN) || void 0 === JB || JB.call(ZB, kB)
```

#### 253. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2250` → after: `L2250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2250) · [Before (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2250)

```diff
-       var Vt = (Vt, Ot, qt) => null !== et.Yk && Ot <= et.Yk || tt.testSolid(Vt, Ot, qt);
+       var ZB = (ZB, TB, JB) => null !== IB.Ul && TB <= IB.Ul || BB.testSolid(ZB, TB, JB);
```

#### 254. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2272` → after: `L2272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2272) · [Before (L2272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2272)

```diff
-         uV = "function" === typeof et.yQ && "function" === typeof et.NQ && hV(et.yQ(), JV) && hV(et.NQ(), CV), uV || console.error(new Error("wasm physics: the module's layout differs from wasmPhysicsLayout.ts (a stale @bloxd/wasm build?), so physics and picks cannot run in wasm" … [truncated]
+         QZ = "function" === typeof IB.Ch && "function" === typeof IB.Qh && wZ(IB.Ch(), dZ) && wZ(IB.Qh(), CZ), QZ || console.error(new Error("wasm physics: the module's layout differs from wasmPhysicsLayout.ts (a stale @bloxd/wasm build?), so physics and picks cannot run in wasm" … [truncated]
```

#### 255. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2291` → after: `L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2291) · [Before (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2291)

```diff
-       return Vt.includes(".") ? Vt : Vt + ".0"
+       return ZB.includes(".") ? ZB : ZB + ".0"
```

#### 256. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2301` → after: `L2301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2301) · [Before (L2301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2301)

```diff
-       return tt ? et : 0
+       return BB ? IB : 0
```

#### 257. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2305-L2307` → after: `L2305-L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2305-L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2305-L2307) · [Before (L2305-L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2305-L2307)

```diff
-       const et = SV(tt.zk, 1) | SV(tt.Fk, 2) | SV(tt.preventFallOffEdge, 4) | SV(tt.alwaysApplyHorizFriction, 8) | SV(tt.slideOnCollision, 16) | SV(tt.rolledBackLastTick, 32) | SV(tt.depenetrate, 64) | SV(tt.inFluid, dV) | SV(tt.Hl, jV) | SV(tt.Ql, 512) | SV(tt.wakeInFluid, XV),
-         Vt = tt.Yk;
-       return null === Vt ? et : "number" === typeof Vt ? et | HV : null
+       const IB = iZ(BB.Gl, 1) | iZ(BB.Tl, 2) | iZ(BB.preventFallOffEdge, 4) | iZ(BB.alwaysApplyHorizFriction, 8) | iZ(BB.slideOnCollision, 16) | iZ(BB.rolledBackLastTick, 32) | iZ(BB.depenetrate, 64) | iZ(BB.inFluid, GZ) | iZ(BB.Wz, vZ) | iZ(BB.Cz, 512) | iZ(BB.wakeInFluid, cZ),
+         ZB = BB.Ul;
+       return null === ZB ? IB : "number" === typeof ZB ? IB | kZ : null
```

#### 258. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2317` → after: `L2317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2317) · [Before (L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2317)

```diff
-       const Ht = Ot.xQ;
+       const cB = TB.Tz;
```

#### 259. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2326` → after: `L2326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2326) · [Before (L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2326)

```diff
-       const Xt = Ot.Dy;
+       const nB = TB.zq;
```

#### 260. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L2328` → after: `L2328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L2328) · [Before (L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/94.js#L2328)

```diff
-       const Qt = Ot.QG;
+       const hB = TB.Rl;
```
