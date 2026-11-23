# Changed — Bundle Modifications Report (Part 059 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `59 / 104` (**414** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 058](part-058.md) · [Part 060 →](part-060.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (3534 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 2615. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21596-L21598` → after: `L21715-L21717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21715-L21717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21715-L21717) · [Before (L21596-L21598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21596-L21598)

```diff
-             const ek = fk.f.get().getCurrentLanguageCode(),
-               ik = (0, Dk.r)(kk.str.params, Ak.c.shown),
-               Sk = (0, Dk.v)(ek, kk.str.translationKey, ik);
+             const zC = wC.h.get().getCurrentLanguageCode(),
+               ZC = (0, QC.q)(CC.str.params, IC.d.shown),
+               bC = (0, QC.t)(zC, CC.str.translationKey, ZC);
```

#### 2616. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21636` → after: `L21755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21755) · [Before (L21636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21636)

```diff
-       const Dk = null !== (ek = Bk(kk) ? null === (ik = kk.style) || void 0 === ik ? void 0 : ik.fontSize : void 0) && void 0 !== ek ? ek : `${Ek.DEFAULT_FONT_SIZE}px`;
+       const QC = null !== (zC = aC(CC) ? null === (ZC = CC.style) || void 0 === ZC ? void 0 : ZC.fontSize : void 0) && void 0 !== zC ? zC : `${XC.DEFAULT_FONT_SIZE}px`;
```

#### 2617. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21641-L21642` → after: `L21760-L21761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21760-L21761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21760-L21761) · [Before (L21641-L21642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21641-L21642)

```diff
-       const ek = (0, bk.c)(kk, (0, bk.l)(kk));
-       return ek || console.warn(`Unknown rank icon "${kk}" \u2014 not in the bundled Font Awesome subset.`), ek
+       const zC = (0, nC.b)(CC, (0, nC.h)(CC));
+       return zC || console.warn(`Unknown rank icon "${CC}" \u2014 not in the bundled Font Awesome subset.`), zC
```

#### 2618. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21653-L21655` → after: `L21772-L21774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21772-L21774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21772-L21774) · [Before (L21653-L21655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21653-L21655)

```diff
-         const ek = fk.f.get().getCurrentLanguageCode(),
-           ik = (0, Dk.r)(kk.str.params, Ak.c.shown);
-         return (0, Dk.x)(ek, kk.str.translationKey, ik)
+         const zC = wC.h.get().getCurrentLanguageCode(),
+           ZC = (0, QC.q)(CC.str.params, IC.d.shown);
+         return (0, QC.u)(zC, CC.str.translationKey, ZC)
```

#### 2619. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21657` → after: `L21776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21776) · [Before (L21657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21657)

```diff
-       return "entityName" in kk.str ? (0, Ck.f)(kk.str.entityName, Ak.c.shown) : ""
+       return "entityName" in CC.str ? (0, JC.g)(CC.str.entityName, IC.d.shown) : ""
```

#### 2620. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21661` → after: `L21780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21780) · [Before (L21661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21661)

```diff
-       if ((0, Lk.F)(kk) || 0 === kk.length) return {
+       if ((0, xC.H)(CC) || 0 === CC.length) return {
```

#### 2621. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21738` → after: `L21857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21857) · [Before (L21738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21738)

```diff
-           const Kk = (0, Mk.g)(fk);
+           const WC = (0, FC.j)(wC);
```

#### 2622. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21741` → after: `L21860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21860) · [Before (L21741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21741)

```diff
-             nk = (0, uk.h)(kk.icon),
+             MC = (0, YC.j)(CC.icon),
```

#### 2623. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21754` → after: `L21873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21873) · [Before (L21754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21754)

```diff
-           const Hk = (0, qk.g)(kk.icon, Dk);
+           const SC = (0, dC.h)(CC.icon, QC);
```

#### 2624. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21757` → after: `L21876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21876) · [Before (L21757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21757)

```diff
-               const ek = (0, uk.e)(kk);
+               const zC = (0, YC.i)(CC);
```

#### 2625. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21762-L21763` → after: `L21881-L21882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21881-L21882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21881-L21882) · [Before (L21762-L21763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21762-L21763)

```diff
-               if (rk.e.includes(kk)) return {
-                 url: dk.e.getTexture(kk, sk.g.ICON).url,
+               if (fC.c.includes(CC)) return {
+                 url: eC.c.getTexture(CC, vC.j.ICON).url,
```

#### 2626. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21768-L21769` → after: `L21887-L21888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21887-L21888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21887-L21888) · [Before (L21768-L21769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21768-L21769)

```diff
-                 const ek = null === (ik = mk.h.itemsClient[kk]) || void 0 === ik ? void 0 : ik.type;
-                 return Pe.includes(ek) ? (console.error(new Error(`Invalid icon type ${ek} is not supported in nametags`).stack), {
+                 const zC = null === (ZC = qC.g.itemsClient[CC]) || void 0 === ZC ? void 0 : ZC.type;
+                 return fz.includes(zC) ? (console.error(new Error(`Invalid icon type ${zC} is not supported in nametags`).stack), {
```

#### 2627. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21775` → after: `L21894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21894) · [Before (L21775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21775)

```diff
-                 } : "GrayscaleArmour" === ek || Pk.c[kk] ? {
+                 } : "GrayscaleArmour" === zC || oC.b[CC] ? {
```

#### 2628. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21787` → after: `L21906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21906) · [Before (L21787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21787)

```diff
-           if ((0, Ik.b)(null === (Sk = mk.h.itemsClient[kk.icon]) || void 0 === Sk ? void 0 : Sk.type)) {
+           if ((0, mC.b)(null === (bC = qC.g.itemsClient[CC.icon]) || void 0 === bC ? void 0 : bC.type)) {
```

#### 2629. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21789-L21790` → after: `L21908-L21909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21908-L21909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21908-L21909) · [Before (L21789-L21790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21789-L21790)

```diff
-             if (!mk.h.itemsClient[ek].itemTexture) return void(0, qk.e)(ek, Dk).then((kk => {
-               Uk(kk), (0, pk.j)(fk)
+             if (!qC.g.itemsClient[zC].itemTexture) return void(0, dC.d)(zC, QC).then((CC => {
+               gC(CC), (0, GC.g)(wC)
```

#### 2630. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21803` → after: `L21922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21922) · [Before (L21803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21803)

```diff
-               return bk.drawImage(kk, 0, 0), bk.globalCompositeOperation = "multiply", bk.fillStyle = `rgb(${ik}, ${Dk}, ${fk})`, bk.fillRect(0, 0, Sk.width, Sk.height), bk.globalCompositeOperation = "destination-in", bk.drawImage(kk, 0, 0), Sk
+               return nC.drawImage(CC, 0, 0), nC.globalCompositeOperation = "multiply", nC.fillStyle = `rgb(${ZC}, ${QC}, ${wC})`, nC.fillRect(0, 0, bC.width, bC.height), nC.globalCompositeOperation = "destination-in", nC.drawImage(CC, 0, 0), bC
```

#### 2631. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21805` → after: `L21924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21924) · [Before (L21805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21805)

```diff
-             vk[kk.icon] = ek, Uk(ek), (0, pk.j)(fk)
+             lC[CC.icon] = zC, gC(zC), (0, GC.g)(wC)
```

#### 2632. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21808` → after: `L21927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21927) · [Before (L21808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21808)

```diff
-             Uk(Yk), (0, pk.j)(fk)
+             gC(AC), (0, GC.g)(wC)
```

#### 2633. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21812` → after: `L21931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21931) · [Before (L21812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21812)

```diff
-       const nk = (0, Mk.g)(fk);
+       const MC = (0, FC.j)(wC);
```

#### 2634. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21814` → after: `L21933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21933) · [Before (L21814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21814)

```diff
-         const fk = null !== bk && void 0 !== bk ? bk : Rk(kk, nk);
+         const wC = null !== nC && void 0 !== nC ? nC : OC(CC, MC);
```

#### 2635. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21823` → after: `L21942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21942) · [Before (L21823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21823)

```diff
-             Uk = "string" === typeof nk ? nk : nk.join(" "),
+             gC = "string" === typeof MC ? MC : MC.join(" "),
```

#### 2636. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21838-L21839` → after: `L21957-L21958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21957-L21958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21957-L21958) · [Before (L21838-L21839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21838-L21839)

```diff
-       const wk = null !== bk && void 0 !== bk ? bk : Rk(kk, nk),
-         lk = Bk(kk) && null !== (Kk = (0, Sk.$b)(kk.style)) && void 0 !== Kk ? Kk : "white";
+       const pC = null !== nC && void 0 !== nC ? nC : OC(CC, MC),
+         PC = aC(CC) && null !== (WC = (0, bC.Wb)(CC.style)) && void 0 !== WC ? WC : "white";
```

#### 2637. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21862` → after: `L21981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21981) · [Before (L21862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21862)

```diff
-         const Dk = null !== (ek = null === (ik = kk.style) || void 0 === ik ? void 0 : ik.fontSize) && void 0 !== ek ? ek : `${Ek.DEFAULT_FONT_SIZE}px`;
+         const QC = null !== (zC = null === (ZC = CC.style) || void 0 === ZC ? void 0 : ZC.fontSize) && void 0 !== zC ? zC : `${XC.DEFAULT_FONT_SIZE}px`;
```

#### 2638. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21872-L21875` → after: `L21991-L21994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21991-L21994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21991-L21994) · [Before (L21872-L21875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21872-L21875)

```diff
-       const bk = kk.yH.XF(),
-         rk = (0, pk.d)(kk, `${ik}Tex`, Dk, fk, {
-           mipped: Kk.f.nearestLinearMipLinear,
-           unmipped: Kk.f.nearestLinearMipNearest
+       const nC = CC.Vg.Km(),
+         fC = (0, GC.d)(CC, `${ZC}Tex`, QC, wC, {
+           mipped: WC.h.nearestLinearMipLinear,
+           unmipped: WC.h.nearestLinearMipNearest
```

#### 2639. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21877` → after: `L21996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR21996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L21996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L21996) · [Before (L21877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21877)

```diff
-         Pk = (0, xk.l)(kk.yH, ik, (0, nk.l)({
+         oC = (0, NC.n)(CC.Vg, ZC, (0, MC.g)({
```

#### 2640. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21881-L21882` → after: `L22000-L22001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22000-L22001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22000-L22001) · [Before (L21881-L21882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21881-L21882)

```diff
-       Pk.metadata = new kk.yH.mw, Pk.metadata[Uk.x] = !0, Pk.billboardMode = Hk.c.BILLBOARDMODE_ALL, Pk.renderingGroupId = wk.d;
-       const mk = kk.mY.add([0, 0, 0], 1, 1, Pk, [0, 0, 0]);
+       oC.metadata = new CC.Vg.DS, oC.metadata[gC.x] = !0, oC.billboardMode = SC.e.BILLBOARDMODE_ALL, oC.renderingGroupId = pC.b;
+       const qC = CC.JR.add([0, 0, 0], 1, 1, oC, [0, 0, 0]);
```

#### 2641. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21884-L21885` → after: `L22003-L22004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22003-L22004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22003-L22004) · [Before (L21884-L21885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21884-L21885)

```diff
-       kk.mY.wq(mk, kk.mY.names.fL, {
-         qU: ek
+       CC.JR.lH(qC, CC.JR.names.Xx, {
+         og: zC
```

#### 2642. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21890-L21891` → after: `L22009-L22010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22009-L22010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22009-L22010) · [Before (L21890-L21891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21890-L21891)

```diff
-         name: `${ik}Mat`,
-         bw: bk,
+         name: `${ZC}Mat`,
+         sS: nC,
```

#### 2643. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21896` → after: `L22015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22015) · [Before (L21896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21896)

```diff
-           ...(0, pk.h)(rk)
+           ...(0, GC.e)(fC)
```

#### 2644. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21899` → after: `L22018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22018) · [Before (L21899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21899)

```diff
-           (0, pk.b)(ek, "planes"), Mk = (0, Yk.c)(ek, kk.yH, Sk ? {
+           (0, GC.c)(zC, "planes"), FC = (0, AC.b)(zC, CC.Vg, bC ? {
```

#### 2645. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21909` → after: `L22028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22028) · [Before (L21909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21909)

```diff
-       return Pk.material = Lk, Sk ? kk.mY.gkk(mk).Uik = !1 : (0, lk.e)(Pk), Pk.ZF.add((() => {
+       return oC.material = xC, bC ? CC.JR.fzC(qC).JZC = !1 : (0, PC.g)(oC), oC.Tm.add((() => {
```

#### 2646. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21922-L21923` → after: `L22041-L22042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22041-L22042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22041-L22042) · [Before (L21922-L21923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21922-L21923)

```diff
-       const fk = (0, wk.q)(ek, ik, Dk);
-       return kk.renderingGroupId = fk ? wk.d : wk.l, fk
+       const wC = (0, pC.o)(zC, ZC, QC);
+       return CC.renderingGroupId = wC ? pC.b : pC.i, wC
```

#### 2647. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21926` → after: `L22045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22045) · [Before (L21926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21926)

```diff
-   38276: (kk, ek, ik) => {
+   38515: (CC, zC, ZC) => {
```

#### 2648. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21928` → after: `L22047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22047) · [Before (L21928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21928)

```diff
-       b: () => mk,
+       c: () => qC,
```

#### 2649. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21930-L21931` → after: `L22049-L22050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22049-L22050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22049-L22050) · [Before (L21930-L21931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21930-L21931)

```diff
-       h: () => Pk,
-       j: () => rk
+       e: () => oC,
+       g: () => fC
```

#### 2650. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21933-L21935` → after: `L22052-L22054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22052-L22054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22052-L22054) · [Before (L21933-L21935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21933-L21935)

```diff
-     var Dk = ik(36903),
-       fk = ik(36798),
-       Sk = ik(38279);
+     var QC = ZC(37175),
+       wC = ZC(37063),
+       bC = ZC(38517);
```

#### 2651. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21939` → after: `L22058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22058) · [Before (L21939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21939)

```diff
-           return !kk.yH.engine.needPOTTextures
+           return !CC.Vg.engine.needPOTTextures
```

#### 2652. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21942` → after: `L22061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22061) · [Before (L21942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21942)

```diff
-       return (0, Dk.j)(kk.yH.XF(), ek, {
+       return (0, QC.n)(CC.Vg.Km(), zC, {
```

#### 2653. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21952` → after: `L22071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22071) · [Before (L21952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21952)

```diff
-       (0, Dk.O)(kk, !0, !kk.sampler.noMipmap)
+       (0, QC.V)(CC, !0, !CC.sampler.noMipmap)
```

#### 2654. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21959` → after: `L22078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22078) · [Before (L21959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21959)

```diff
-         transparencyMode: fk.r.alphaTestAndBlend,
+         transparencyMode: wC.t.alphaTestAndBlend,
```

#### 2655. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21961` → after: `L22080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22080) · [Before (L21961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21961)

```diff
-         alphaMode: fk.d.premultiplied,
+         alphaMode: wC.c.premultiplied,
```

#### 2656. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21967-L21968` → after: `L22086-L22087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22086-L22087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22086-L22087) · [Before (L21967-L21968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21967-L21968)

```diff
-       kk.diffuseTexture.sampler.noMipmap || (0, fk.s)(kk, Sk.e, {
-         lodBias: Sk.d[ek]
+       CC.diffuseTexture.sampler.noMipmap || (0, wC.u)(CC, bC.c, {
+         lodBias: bC.b[zC]
```

#### 2657. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21972` → after: `L22091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22091) · [Before (L21972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21972)

```diff
-   38787: (kk, ek, ik) => {
+   39051: (CC, zC, ZC) => {
```

#### 2658. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21979` → after: `L22098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22098) · [Before (L21979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21979)

```diff
-     var Dk = ik(99),
+     var QC = ZC(77),
```

#### 2659. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21981-L21983` → after: `L22100-L22102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22100-L22102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22100-L22102) · [Before (L21981-L21983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21981-L21983)

```diff
-       Sk = (ik(3421), ik(4961), ik(3419)),
-       bk = ik(6505);
-     ik(6477);
+       bC = (ZC(3436), ZC(4998), ZC(3432)),
+       nC = ZC(6660);
+     ZC(6630);
```

#### 2660. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L21993-L21994` → after: `L22112-L22113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22112-L22113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22112-L22113) · [Before (L21993-L21994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L21993-L21994)

```diff
-           if ((0, Sk.k)(Dk.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), mk().then((kk => {
-             kk && fk.f.removeItem(Sk.e)
+           if ((0, bC.f)(QC.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), qC().then((CC => {
+             CC && wC.i.removeItem(bC.b)
```

#### 2661. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22001` → after: `L22120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22120) · [Before (L22001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22001)

```diff
-         return (0, Sk.h)(Dk.featureFlags.settings.canUseShaderPacks)
+         return (0, bC.e)(QC.featureFlags.settings.canUseShaderPacks)
```

#### 2662. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22022` → after: `L22141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22141) · [Before (L22022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22022)

```diff
-         return this.compiling ??= Promise.all([ik.e(77), ik.e(133), ik.e(139)]).then((() => ik(41318))).then((kk => (kk.prefetchCompiler(), kk))), this.compiling
+         return this.compiling ??= Promise.all([ZC.e(77), ZC.e(133), ZC.e(140)]).then((() => ZC(41559))).then((CC => (CC.prefetchCompiler(), CC))), this.compiling
```

#### 2663. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22036` → after: `L22155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22155) · [Before (L22036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22036)

```diff
-       if (!(0, Sk.m)(Dk.featureFlags.settings.canUseShaderPacks)) return null;
+       if (!(0, bC.g)(QC.featureFlags.settings.canUseShaderPacks)) return null;
```

#### 2664. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22038-L22039` → after: `L22157-L22158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22157-L22158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22157-L22158) · [Before (L22038-L22039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22038-L22039)

```diff
-         const kk = await (0, bk.f)(!0);
-         return kk || fk.f.setItem(Sk.e, !1), kk
+         const CC = await (0, nC.e)(!0);
+         return CC || wC.i.setItem(bC.b, !1), CC
```

#### 2665. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22041` → after: `L22160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22160) · [Before (L22041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22041)

```diff
-         return console.error("Failed to read the stored shader pack", kk), fk.f.removeItem(Sk.e), null
+         return console.error("Failed to read the stored shader pack", CC), wC.i.removeItem(bC.b), null
```

#### 2666. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22052` → after: `L22171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22171) · [Before (L22052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22052)

```diff
-   38818: (kk, ek, ik) => {
+   39100: (CC, zC, ZC) => {
```

#### 2667. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22054-L22055` → after: `L22173-L22174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22173-L22174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22173-L22174) · [Before (L22054-L22055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22054-L22055)

```diff
-       e: () => Kk,
-       g: () => xk
+       c: () => WC,
+       f: () => NC
```

#### 2668. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22057-L22064` → after: `L22176-L22183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22176-L22183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22176-L22183) · [Before (L22057-L22064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22057-L22064)

```diff
-     var Dk = ik(165),
-       fk = ik(179),
-       Sk = ik(1444),
-       bk = ik(2866),
-       rk = ik(1459),
-       Pk = ik(35995),
-       mk = ik(630),
-       Mk = ik(38787);
+     var QC = ZC(134),
+       wC = ZC(171),
+       bC = ZC(1430),
+       nC = ZC(2927),
+       fC = ZC(1439),
+       oC = ZC(36346),
+       qC = ZC(625),
+       FC = ZC(39051);
```

#### 2669. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22067` → after: `L22186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22186) · [Before (L22067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22067)

```diff
-       (0, bk.reportClientError)("matchmake_failed", kk, Dk.n[Dk.n.SHADER_PACK])
+       (0, nC.reportClientError)("matchmake_failed", CC, QC.l[QC.l.SHADER_PACK])
```

#### 2670. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22072-L22073` → after: `L22191-L22192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22191-L22192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22191-L22192) · [Before (L22072-L22073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22072-L22073)

```diff
-         bk = (0, Pk.c)();
-       Dk && null !== bk && await rk.b.reportShaderPackSession(kk, {
+         nC = (0, oC.d)();
+       QC && null !== nC && await fC.d.reportShaderPackSession(CC, {
```

#### 2671. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22076` → after: `L22195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22195) · [Before (L22076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22076)

```diff
-         game: (0, Sk.f)(ek, fk.D, "other"),
+         game: (0, bC.f)(zC, wC.H, "other"),
```

#### 2672. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22082` → after: `L22201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22201) · [Before (L22082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22082)

```diff
-   6477: (kk, ek, ik) => {
+   6630: (CC, zC, ZC) => {
```

#### 2673. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22087` → after: `L22206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22206) · [Before (L22087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22087)

```diff
-     var Dk = ik(4965);
+     var QC = ZC(5002);
```

#### 2674. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22092` → after: `L22211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22211) · [Before (L22092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22092)

```diff
-       return Sk ??= Promise.all([ik.e(72), ik.e(190)]).then((() => ik(40060))).then((kk => {
+       return bC ??= Promise.all([ZC.e(72), ZC.e(188)]).then((() => ZC(40313))).then((CC => {
```

#### 2675. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22098` → after: `L22217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22217) · [Before (L22098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22098)

```diff
-         return fk ??= (0, Dk.h)(ik, Sk, ek), fk
+         return wC ??= (0, QC.k)(ZC, bC, zC), wC
```

#### 2676. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22107` → after: `L22226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22226) · [Before (L22107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22107)

```diff
-   33693: (kk, ek, ik) => {
+   34076: (CC, zC, ZC) => {
```

#### 2677. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22112` → after: `L22231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22231) · [Before (L22112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22112)

```diff
-       e: () => Dk
+       b: () => QC
```

#### 2678. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22115` → after: `L22234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22234) · [Before (L22115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22115)

```diff
-   38807: (kk, ek, ik) => {
+   39085: (CC, zC, ZC) => {
```

#### 2679. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22117` → after: `L22236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22236) · [Before (L22117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22117)

```diff
-       b: () => fk
+       c: () => wC
```

#### 2680. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22128` → after: `L22247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22247) · [Before (L22128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22128)

```diff
-           }] = await Promise.all([Promise.resolve().then((() => ik(1688))), Promise.resolve().then((() => ik(1333)))]);
+           }] = await Promise.all([Promise.resolve().then((() => ZC(1645))), Promise.resolve().then((() => ZC(1307)))]);
```

#### 2681. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22144` → after: `L22263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22263) · [Before (L22144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22144)

```diff
-   39182: (kk, ek, ik) => {
+   39439: (CC, zC, ZC) => {
```

#### 2682. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22146-L22148` → after: `L22265-L22267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22265-L22267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22265-L22267) · [Before (L22146-L22148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22146-L22148)

```diff
-       c: () => Dk,
-       d: () => Sk,
-       e: () => fk
+       b: () => QC,
+       f: () => bC,
+       j: () => wC
```

#### 2683. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22182` → after: `L22301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22301) · [Before (L22182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22182)

```diff
-   39159: (kk, ek, ik) => {
+   39413: (CC, zC, ZC) => {
```

#### 2684. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22184` → after: `L22303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22303) · [Before (L22184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22184)

```diff
-       b: () => fk
+       e: () => wC
```

#### 2685. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22186` → after: `L22305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22305) · [Before (L22186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22186)

```diff
-     var Dk = ik(1850);
+     var QC = ZC(1806);
```

#### 2686. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22189` → after: `L22308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22308) · [Before (L22189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22189)

```diff
-       return (0, Dk.l)(kk, ek) < ik
+       return (0, QC.m)(CC, zC) < ZC
```

#### 2687. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22192` → after: `L22311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22311) · [Before (L22192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22192)

```diff
-   36621: (kk, ek, ik) => {
+   36889: (CC, zC, ZC) => {
```

#### 2688. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22194` → after: `L22313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22313) · [Before (L22194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22194)

```diff
-       d: () => Dk.g
+       e: () => QC.g
```

#### 2689. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22196` → after: `L22315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22315) · [Before (L22196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22196)

```diff
-     var Dk = ik(9020)
+     var QC = ZC(9194)
```

#### 2690. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22198` → after: `L22317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22317) · [Before (L22198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22198)

```diff
-   36627: (kk, ek, ik) => {
+   36892: (CC, zC, ZC) => {
```

#### 2691. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22200` → after: `L22319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22319) · [Before (L22200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22200)

```diff
-       b: () => Dk.q
+       e: () => QC.m
```

#### 2692. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22202` → after: `L22321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22321) · [Before (L22202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22202)

```diff
-     var Dk = ik(36630)
+     var QC = ZC(36897)
```

#### 2693. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22204` → after: `L22323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22323) · [Before (L22204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22204)

```diff
-   36617: (kk, ek, ik) => {
+   36886: (CC, zC, ZC) => {
```

#### 2694. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22208` → after: `L22327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22327) · [Before (L22208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22208)

```diff
-     const Dk = [() => ik(36621).d, () => ik(36627).b, () => ik(36037).e, () => ik(36673).f, () => ik(37231).getCaughtUpMeshRotation, () => ik(37262).tickMovementPrePhysics, () => ik(37289).c, () => [ik(37348).tickMovementInputsPrePhysics, ik(37380).C, ik(37606).b, ik(37617).e], ( … [truncated]
+     const QC = [() => ZC(36889).e, () => ZC(36892).e, () => ZC(36393).c, () => ZC(36940).e, () => ZC(37477).getCaughtUpMeshRotation, () => ZC(37506).tickMovementPrePhysics, () => ZC(37523).d, () => [ZC(37574).tickMovementInputsPrePhysics, ZC(37609).x, ZC(37852).e, ZC(37868).c], ( … [truncated]
```

#### 2695. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22211` → after: `L22330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22330) · [Before (L22211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22211)

```diff
-       return await kk(), ik(39150)
+       return await CC(), ZC(39406)
```

#### 2696. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22214-L22299` → after: `L22333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22333) · [Before (L22214-L22299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22214-L22299)

```diff
-   38345: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => Pk,
-       g: () => Kk,
-       i: () => Hk,
-       j: () => Mk,
-       l: () => mk,
-       p: () => nk
-     });
-     var Dk = ik(293),
-       fk = ik(1684);
-     const Sk = "A valid external Instance reference no longer exists.",
-       bk = [
-         [1e4, "<10s", "lt10s"],
-         [6e4, "<1m", "lt1m"],
-         [3e5, "<5m", "lt5m"],
- ... (70 more removed lines; see GitHub link above)
+   39406: (CC, zC, ZC) => {
```

#### 2697. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22301` → after: `L22335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22335) · [Before (L22301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22301)

```diff
-       InGameUi: () => fk.b,
+       InGameUi: () => wC.c,
```

#### 2698. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22309-L22316` → after: `L22343-L22351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22343-L22351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22343-L22351) · [Before (L22309-L22316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22309-L22316)

```diff
-     var Dk = ik(36348),
-       fk = ik(36023),
-       Sk = ik(1104),
-       bk = ik(3693),
-       rk = ik(623),
-       Pk = ik(8892),
-       mk = ik(1187),
-       Mk = ik(36011);
+     var QC = ZC(36647),
+       wC = ZC(36378),
+       bC = ZC(1078),
+       nC = ZC(3677),
+       fC = ZC(622),
+       oC = ZC(9057),
+       qC = ZC(1152),
+       FC = ZC(1257),
+       WC = ZC(36369);
```

#### 2699. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22332-L22333` → after: `L22367-L22368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22367-L22368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22367-L22368) · [Before (L22332-L22333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22332-L22333)

```diff
-         const ek = "string" === typeof kk ? kk : JSON.stringify(kk);
-         return Promise.reject(new Error(`Matchmake answer holds no seat (${typeof kk}): ${String(ek).slice(0,150)}`))
+         const zC = "string" === typeof CC ? CC : JSON.stringify(CC);
+         return Promise.reject(new Error(`Matchmake answer holds no seat (${typeof CC}): ${String(zC).slice(0,150)}`))
```

#### 2700. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22338` → after: `L22373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22373) · [Before (L22338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22338)

```diff
-           if (kk.aborted) return void Dk((0, mk.i)(kk));
+           if (CC.aborted) return void QC((0, qC.g)(CC));
```

#### 2701. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22341` → after: `L22376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22376) · [Before (L22341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22341)

```diff
-               fk.giveUp((0, mk.i)(kk))
+               wC.giveUp((0, qC.g)(CC))
```

#### 2702. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22352` → after: `L22387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22387) · [Before (L22352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22352)

```diff
-         return null !== (kk = null === (ek = this.seatRequest) || void 0 === ek ? void 0 : ek.leg) && void 0 !== kk ? kk : this.lastLeg
+         return null !== (CC = null === (zC = this.seatRequest) || void 0 === zC ? void 0 : zC.leg) && void 0 !== CC ? CC : this.lastLeg
```

#### 2703. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22356` → after: `L22391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22391) · [Before (L22356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22356)

```diff
-         if (null !== ik && void 0 !== ik && ik.givenUp) throw new Mk.e(ik.leg);
+         if (null !== ZC && void 0 !== ZC && ZC.givenUp) throw new WC.f(ZC.leg);
```

#### 2704. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22364` → after: `L22399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22399) · [Before (L22364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22364)

```diff
-           this.giveUp(new Mk.e(this.leg))
+           this.giveUp(new WC.f(this.leg))
```

#### 2705. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22378` → after: `L22413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22413) · [Before (L22378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22378)

```diff
-             this.opened = !0, this.countdown.socketOpened()
+             this.opened = !0, this.countdown.socketOpened(), (0, FC.o)("wasm_socket_open", performance.now())
```

#### 2706. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22395-L22411` → after: `L22430-L22446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22430-L22446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22430-L22446) · [Before (L22395-L22411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22395-L22411)

```diff
-     var nk = ik(1177),
-       Uk = ik(38238),
-       Hk = ik(38316),
-       wk = ik(35822),
-       lk = ik(22),
-       pk = ik(35977),
-       yk = ik(38787),
-       Yk = ik(33693),
-       Lk = ik(36913),
-       Ck = ik(4592),
-       Ak = ik(1302),
-       jk = ik(2704),
-       sk = ik(36601),
-       dk = ik(1893),
-       Vk = ik(1218),
-       Fk = ik(3642),
- ... (1 more removed lines; see GitHub link above)
+     var gC = ZC(1149),
+       SC = ZC(38479),
+       pC = ZC(38563),
+       PC = ZC(36165),
+       GC = ZC(20),
+       RC = ZC(36329),
+       AC = ZC(39051),
+       xC = ZC(34076),
+       JC = ZC(37190),
+       IC = ZC(4599),
+       iC = ZC(1275),
+       vC = ZC(2753),
+       eC = ZC(36880),
+       hC = ZC(1840),
+       KC = ZC(1183),
+       YC = ZC(3611),
+ ... (1 more added lines; see GitHub link above)
```

#### 2707. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22416-L22418` → after: `L22451-L22453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22451-L22453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22451-L22453) · [Before (L22416-L22418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22416-L22418)

```diff
-           if (!ik || null !== (ek = ik.mY.eek(ik.Qq)) && void 0 !== ek && ek.crouching) return !1;
-           const Dk = (0, jk.d)();
-           return (0, uk.b)(Dk.getLifeformEyePos(ik.Qq, !1), kk, Dk.getBlockReach(ik.Qq))
+           if (!ZC || null !== (zC = ZC.JR.MzC(ZC.qE)) && void 0 !== zC && zC.crouching) return !1;
+           const QC = (0, vC.c)();
+           return (0, dC.e)(QC.getLifeformEyePos(ZC.qE, !1), CC, QC.getBlockReach(ZC.qE))
```

#### 2708. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22425-L22427` → after: `L22460-L22462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22460-L22462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22460-L22462) · [Before (L22425-L22427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22425-L22427)

```diff
-               Lr: !1,
-               hb: kk,
-               ab: null
+               PF: !1,
+               Nn: CC,
+               Mn: null
```

#### 2709. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22429` → after: `L22464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22464) · [Before (L22429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22429)

```diff
-             (0, Fk.sendColyMessage)(bk.Gh, {
+             (0, YC.sendColyMessage)(nC.Fh, {
```

#### 2710. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22431-L22432` → after: `L22466-L22467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22466-L22467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22466-L22467) · [Before (L22431-L22432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22431-L22432)

```diff
-               Yr: Vk.e.DownFirePrimary
-             }, !0), (0, Fk.sendColyMessage)(bk.Gh, {
+               pF: KC.e.DownFirePrimary
+             }, !0), (0, YC.sendColyMessage)(nC.Fh, {
```

#### 2711. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22434` → after: `L22469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22469) · [Before (L22434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22434)

```diff
-               Yr: Vk.e.UpFirePrimary
+               pF: KC.e.UpFirePrimary
```

#### 2712. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22439` → after: `L22474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22474) · [Before (L22439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22439)

```diff
-     var zk = ik(330),
+     var EC = ZC(338),
```

#### 2713. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22441` → after: `L22476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22476) · [Before (L22441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22441)

```diff
-       vk = ik(38021);
+       XC = ZC(38268);
```

#### 2714. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22445` → after: `L22480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22480) · [Before (L22445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22445)

```diff
-       (0, Fk.sendColyMessage)(bk.Ph, kk, !0)
+       (0, YC.sendColyMessage)(nC.Nh, CC, !0)
```

#### 2715. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22449-L22451` → after: `L22484-L22486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22484-L22486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22484-L22486) · [Before (L22449-L22451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22449-L22451)

```diff
-       (0, Fk.sendColyMessage)(bk.Th, {
-         tM: kk,
-         XM: "a"
+       (0, YC.sendColyMessage)(nC.Ph, {
+         iq: CC,
+         vq: "a"
```

#### 2716. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22479` → after: `L22514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22514) · [Before (L22479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22479)

```diff
-         vk.h.setMultiplierType(vk.d, kk)
+         XC.d.setMultiplierType(XC.c, CC)
```

#### 2717. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22482` → after: `L22517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22517) · [Before (L22482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22482)

```diff
-         (0, Fk.sendColyMessage)(bk.uj);
+         (0, YC.sendColyMessage)(nC.Aj);
```

#### 2718. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22484-L22485` → after: `L22519-L22520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22519-L22520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22519-L22520) · [Before (L22484-L22485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22484-L22485)

```diff
-           ek = kk.mY.jW(kk.Qq);
-         ek && (Qk().set(ek.Cw, 0, 0, 0), Qk().set(ek.WE, 0, 0, 0), Qk().set(ek.XE, 0, 0, 0))
+           zC = CC.JR.eT(CC.qE);
+         zC && (lC().set(zC.Np, 0, 0, 0), lC().set(zC.Hr, 0, 0, 0), lC().set(zC.Vr, 0, 0, 0))
```

#### 2719. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22489-L22490` → after: `L22524-L22525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22524-L22525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22524-L22525) · [Before (L22489-L22490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22489-L22490)

```diff
-         ek = kk, (0, Fk.sendColyMessage)(bk.Qj, {
-           SP: ek
+         zC = CC, (0, YC.sendColyMessage)(nC.Tj, {
+           wF: zC
```

#### 2720. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22494-L22497` → after: `L22529-L22532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22529-L22532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22529-L22532) · [Before (L22494-L22497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22494-L22497)

```diff
-     var tk = ik(37774),
-       Xk = ik(26),
-       Bk = ik(36382),
-       ck = ik(1920);
+     var TC = ZC(38018),
+       aC = ZC(28),
+       tC = ZC(36676),
+       DC = ZC(1872);
```

#### 2721. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22523` → after: `L22558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22558) · [Before (L22523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22523)

```diff
-         vM: Sk
+         Vn: bC
```

#### 2722. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22525` → after: `L22560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22560) · [Before (L22525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22525)

```diff
-       const bk = (0, jk.d)(),
+       const nC = (0, vC.c)(),
```

#### 2723. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22550` → after: `L22585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22585) · [Before (L22550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22550)

```diff
-         vM: Sk,
+         Vn: bC,
```

#### 2724. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22559` → after: `L22594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22594) · [Before (L22559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22559)

```diff
-       crafting: (0, ck.p)((function() {
+       crafting: (0, DC.l)((function() {
```

#### 2725. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22565-L22566` → after: `L22600-L22601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22600-L22601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22600-L22601) · [Before (L22565-L22566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22565-L22566)

```diff
-           ek = kk.Qq;
-         if (!kk.mY.Sek(ek)) return Zk = {
+           zC = CC.qE;
+         if (!CC.JR.PzC(zC)) return yC = {
```

#### 2726. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22571` → after: `L22606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22606) · [Before (L22571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22571)

```diff
-         const ik = kk.mY.Dek(ek),
+         const ZC = CC.JR.SzC(zC),
```

#### 2727. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22574` → after: `L22609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22609) · [Before (L22574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22574)

```diff
-           } = (0, jk.d)(),
+           } = (0, vC.c)(),
```

#### 2728. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22579` → after: `L22614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22614) · [Before (L22579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22579)

```diff
-             } = Dk.getRecipesForItem(ek, kk.name)[kk.vM];
+             } = QC.getRecipesForItem(zC, CC.name)[CC.Vn];
```

#### 2729. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22582` → after: `L22617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22617) · [Before (L22582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22582)

```diff
-               vM: kk.vM,
+               Vn: CC.Vn,
```

#### 2730. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22594` → after: `L22629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22629) · [Before (L22594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22594)

```diff
-       }), [...ck.g, "syncedInvenFromServer", "craftingRecipesEdited", Ok])
+       }), [...DC.f, "syncedInvenFromServer", "craftingRecipesEdited", LC])
```

#### 2731. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22605` → after: `L22640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22640) · [Before (L22605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22605)

```diff
-         } = (0, jk.d)(), Sk = (0, jk.e)().Qq;
+         } = (0, vC.c)(), bC = (0, vC.e)().qE;
```

#### 2732. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22616` → after: `L22651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22651) · [Before (L22616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22616)

```diff
-         for (let Pk = 0; Pk < Bk.e; Pk++) {
+         for (let oC = 0; oC < tC.c; oC++) {
```

#### 2733. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22638` → after: `L22673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22673) · [Before (L22638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22638)

```diff
-         Tk = kk, Xk.j.tm(Ok)
+         jC = CC, aC.o.bp(LC)
```

#### 2734. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22643` → after: `L22678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22678) · [Before (L22643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22643)

```diff
-           vM: ik,
+           Vn: ZC,
```

#### 2735. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22647-L22650` → after: `L22682-L22685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22682-L22685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22682-L22685) · [Before (L22647-L22650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22647-L22650)

```diff
-           Sk = (0, jk.d)(),
-           rk = Sk.craftingManager.craftItem(fk.Qq, fk.mY.Dek(fk.Qq), ek, ik, null !== Dk && void 0 !== Dk ? Dk : 1 / 0);
-         if (rk.EM > 0) {
-           const kk = Sk.client.inventoryPrediction.record(tk.c.craft(Sk.craftingManager, fk.Qq, ek, ik, rk.EM));
+           bC = (0, vC.c)(),
+           fC = bC.craftingManager.craftItem(wC.qE, wC.JR.SzC(wC.qE), zC, ZC, null !== QC && void 0 !== QC ? QC : 1 / 0);
+         if (fC.Cf > 0) {
+           const CC = bC.client.inventoryPrediction.record(TC.c.craft(bC.craftingManager, wC.qE, zC, ZC, fC.Cf));
```

#### 2736. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22652-L22656` → after: `L22687-L22691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22687-L22691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22687-L22691) · [Before (L22652-L22656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22652-L22656)

```diff
-             (0, Fk.sendColyMessage)(bk.jh, {
-               QM: kk,
-               vM: ek,
-               EM: ik,
-               ub: Dk
+             (0, YC.sendColyMessage)(nC._g, {
+               kn: CC,
+               Vn: zC,
+               Cf: ZC,
+               bn: QC
```

#### 2737. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22658` → after: `L22693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22693) · [Before (L22658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22658)

```diff
-           }(ek, ik, rk.EM, kk)
+           }(zC, ZC, fC.Cf, CC)
```

#### 2738. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22668` → after: `L22703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22703) · [Before (L22668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22668)

```diff
-         const fk = (0, jk.d)(),
+         const wC = (0, vC.c)(),
```

#### 2739. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22670` → after: `L22705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22705) · [Before (L22670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22670)

```diff
-           rk = fk.craftingManager.salvageItem(Sk.mY.Dek(Sk.Qq), ek, ik, Dk);
+           fC = wC.craftingManager.salvageItem(bC.JR.SzC(bC.qE), zC, ZC, QC);
```

#### 2740. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22672-L22675` → after: `L22707-L22710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22707-L22710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22707-L22710) · [Before (L22672-L22675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22672-L22675)

```diff
-         return rk && (Pk = ek, mk = Dk, Mk = fk.client.inventoryPrediction.record(tk.c.salvage(fk.craftingManager, ek, Dk)), (0, Fk.sendColyMessage)(bk.yj, {
-           Ob: Pk,
-           gb: mk,
-           ub: Mk
+         return fC && (oC = zC, qC = QC, FC = wC.client.inventoryPrediction.record(TC.c.salvage(wC.craftingManager, zC, QC)), (0, YC.sendColyMessage)(nC.Ej, {
+           hn: oC,
+           Kn: qC,
+           bn: FC
```

#### 2741. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22685-L22688` → after: `L22720-L22723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22720-L22723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22720-L22723) · [Before (L22685-L22688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22685-L22688)

```diff
-         fk = ek, Sk = ik, rk = Dk, (0, Fk.sendColyMessage)(bk.rh, {
-           lP: fk,
-           yP: Sk,
-           pP: rk
+         wC = zC, bC = ZC, fC = QC, (0, YC.sendColyMessage)(nC.ih, {
+           WF: wC,
+           MF: bC,
+           NF: fC
```

#### 2742. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22692-L22702` → after: `L22727-L22737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22727-L22737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22727-L22737) · [Before (L22692-L22702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22692-L22702)

```diff
-     var ke = ik(36630),
-       ee = ik(36991),
-       ie = ik(189),
-       De = ik(9020),
-       fe = ik(6328),
-       Se = ik(591),
-       be = ik(4417),
-       re = ik(37009),
-       Pe = ik(37764),
-       me = ik(39166);
-     const Me = ie.g.entityInteractReach + 1;
+     var Cz = ZC(36897),
+       zz = ZC(37260),
+       Zz = ZC(184),
+       Qz = ZC(9194),
+       wz = ZC(6484),
+       bz = ZC(597),
+       nz = ZC(4402),
+       fz = ZC(37275),
+       oz = ZC(37998),
+       qz = ZC(39421);
+     const Fz = Zz.f.entityInteractReach + 1;
```

#### 2743. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22706` → after: `L22741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22741) · [Before (L22706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22706)

```diff
-       return null !== (ek = re.b.aimsFromBody(kk) ? kk.Lkk : null) && void 0 !== ek ? ek : kk.camera.yN()
+       return null !== (zC = fz.b.aimsFromBody(CC) ? CC.ECC : null) && void 0 !== zC ? zC : CC.camera.yB()
```

#### 2744. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22712` → after: `L22747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22747) · [Before (L22712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22712)

```diff
-         Sk = null !== (ek = null === (ik = fk.mY.iek(fk.Qq)) || void 0 === ik ? void 0 : ik.selectedItem) && void 0 !== ek ? ek : null,
+         bC = null !== (zC = null === (ZC = wC.JR.gzC(wC.qE)) || void 0 === ZC ? void 0 : ZC.selectedItem) && void 0 !== zC ? zC : null,
```

#### 2745. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22714` → after: `L22749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22749) · [Before (L22714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22714)

```diff
-       if ((0, be.f)(null === Sk || void 0 === Sk ? void 0 : Sk.typeObj.type) && fk.mY.eek(fk.Qq).crouching) return;
+       if ((0, nz.c)(null === bC || void 0 === bC ? void 0 : bC.typeObj.type) && wC.JR.MzC(wC.qE).crouching) return;
```

#### 2746. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22716-L22717` → after: `L22751-L22752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22751-L22752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22751-L22752) · [Before (L22716-L22717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22716-L22717)

```diff
-         const ek = (0, jk.e)().mY.ZZ((0, jk.e)().Qq).position;
-         for (const ik of (0, jk.d)().client.iterateEntityIds())
+         const zC = (0, vC.e)().JR.lL((0, vC.e)().qE).position;
+         for (const ZC of (0, vC.c)().client.iterateEntityIds())
```

#### 2747. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22720-L22721` → after: `L22755-L22756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22755-L22756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22755-L22756) · [Before (L22720-L22721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22720-L22721)

```diff
-       }(bk) ? jk.h.localPlayerPickActionHelper.pickCameraRayEntity(kk, ie.g.entityInteractReach) : null;
-       return rk && (0, ee.e)(rk.eId) ? (0, ee.c)(rk.eId) : null !== (Dk = function(kk) {
+       }(nC) ? vC.g.localPlayerPickActionHelper.pickCameraRayEntity(CC, Zz.f.entityInteractReach) : null;
+       return fC && (0, zz.f)(fC.eId) ? (0, zz.e)(fC.eId) : null !== (QC = function(CC) {
```

#### 2748. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22723-L22724` → after: `L22758-L22759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22758-L22759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22758-L22759) · [Before (L22723-L22724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22723-L22724)

```diff
-           ik = (0, jk.d)(),
-           Dk = null === ek.Lkk || kk === ek.Lkk ? ek.bkk : ek.pickBlock(null, kk, ik.getBlockReach(ek.Qq), ek.Skk);
+           ZC = (0, vC.c)(),
+           QC = null === zC.ECC || CC === zC.ECC ? zC.pCC : zC.pickBlock(null, CC, ZC.getBlockReach(zC.qE), zC.SCC);
```

#### 2749. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22727` → after: `L22762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22762) · [Before (L22727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22727)

```diff
-           PJ: fk,
+           HV: wC,
```

#### 2750. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22730` → after: `L22765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22765) · [Before (L22730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22730)

```diff
-         if ((0, De.m)((0, De.e)(fk))) return De.g[fk].meta.open ? me.f.close : me.f.open;
+         if ((0, Qz.q)((0, Qz.e)(wC))) return Qz.g[wC].meta.open ? qz.h.close : qz.h.open;
```

#### 2751. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22734` → after: `L22769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22769) · [Before (L22734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22734)

```diff
-         if ((0, Pe.i)(bk) || (0, Pe.z)(bk, ik.playerCanChangePos(ek.Qq, ...Sk))) return me.f.open;
+         if ((0, oz.r)(nC) || (0, oz.O)(nC, ZC.playerCanChangePos(zC.qE, ...bC))) return qz.h.open;
```

#### 2752. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22736` → after: `L22771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22771) · [Before (L22736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22736)

```diff
-       }(kk)) && void 0 !== Dk ? Dk : rk ? function(kk, ek, ik) {
+       }(CC)) && void 0 !== QC ? QC : fC ? function(CC, zC, ZC) {
```

#### 2753. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22743` → after: `L22778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22778) · [Before (L22743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22743)

```diff
-           } = (0, jk.d)(),
+           } = (0, vC.c)(),
```

#### 2754. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22745-L22747` → after: `L22780-L22782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22780-L22782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22780-L22782) · [Before (L22745-L22747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22745-L22747)

```diff
-           mk = (0, Pe.x)(bk, Sk, ek);
-         if (null !== mk) return "Milk" === mk ? me.f.milk : "Sheared" === (null === Pk || void 0 === Pk ? void 0 : Pk.metaInfo) ? void 0 : me.f.shear;
-         const Mk = null !== (Dk = null === Pk || void 0 === Pk ? void 0 : Pk.ownerDbId) && void 0 !== Dk ? Dk : null,
+           qC = (0, oz.I)(nC, bC, zC);
+         if (null !== qC) return "Milk" === qC ? qz.h.milk : "Sheared" === (null === oC || void 0 === oC ? void 0 : oC.metaInfo) ? void 0 : qz.h.shear;
+         const FC = null !== (QC = null === oC || void 0 === oC ? void 0 : oC.ownerDbId) && void 0 !== QC ? QC : null,
```

#### 2755. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22749-L22752` → after: `L22784-L22787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22784-L22787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22784-L22787) · [Before (L22749-L22752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22749-L22752)

```diff
-         if ((0, Pe.h)(Sk, bk)) {
-           if (null === Mk && (0, Pe.t)(Sk, bk)) return me.f.tame;
-           const kk = null === Mk && (0, Pe.p)(Sk, bk) ? (0, Pe.y)(Sk) : void 0;
-           return void 0 !== kk ? (0, me.p)(kk) : Kk && (0, Pe.n)(Sk, bk) ? me.f.feed : void 0
+         if ((0, oz.n)(bC, nC)) {
+           if (null === FC && (0, oz.F)(bC, nC)) return qz.h.tame;
+           const CC = null === FC && (0, oz.B)(bC, nC) ? (0, oz.K)(bC) : void 0;
+           return void 0 !== CC ? (0, qz.s)(CC) : WC && (0, oz.x)(bC, nC) ? qz.h.feed : void 0
```

#### 2756. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22755-L22757` → after: `L22790-L22792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22790-L22792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22790-L22792) · [Before (L22755-L22757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22755-L22757)

```diff
-           nk = xk.mY.vkk(xk.Qq).physicsState.type === fe.o.DEFAULT,
-           Uk = null === ik || (0, be.f)(ik.typeObj.type);
-         return "Saddled" === (null === Pk || void 0 === Pk ? void 0 : Pk.metaInfo) && nk && Uk && (null === Mk || Kk) ? me.f.ride : void 0
+           MC = NC.JR.yCC(NC.qE).physicsState.type === wz.r.DEFAULT,
+           gC = null === ZC || (0, nz.c)(ZC.typeObj.type);
+         return "Saddled" === (null === oC || void 0 === oC ? void 0 : oC.metaInfo) && MC && gC && (null === FC || WC) ? qz.h.ride : void 0
```

#### 2757. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22762` → after: `L22797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22797) · [Before (L22762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22762)

```diff
-       const ik = (0, jk.e)().mY.ZZ(kk);
+       const ZC = (0, vC.e)().JR.lL(CC);
```

#### 2758. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22769` → after: `L22804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22804) · [Before (L22769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22769)

```diff
-       if (null !== (ik = fk.zq[fk.Qq][kk]) && void 0 !== ik && ik.interactable) return !0;
+       if (null !== (ZC = wC.QE[wC.qE][CC]) && void 0 !== ZC && ZC.interactable) return !0;
```

#### 2759. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22773-L22774` → after: `L22808-L22809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22808-L22809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22808-L22809) · [Before (L22773-L22774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22773-L22774)

```diff
-         } = (0, jk.d)();
-       return null !== Sk && ((0, Pe.h)(Sk, ek) || null !== (0, Pe.x)(ek, Sk, 0) || "Saddled" === (null === (Dk = bk.getColyseusEntity(kk)) || void 0 === Dk ? void 0 : Dk.metaInfo))
+         } = (0, vC.c)();
+       return null !== bC && ((0, oz.n)(bC, zC) || null !== (0, oz.I)(zC, bC, 0) || "Saddled" === (null === (QC = nC.getColyseusEntity(CC)) || void 0 === QC ? void 0 : QC.metaInfo))
```

#### 2760. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22784-L22786` → after: `L22819-L22821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22819-L22821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22819-L22821) · [Before (L22784-L22786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22784-L22786)

```diff
-           } = (0, jk.d)(),
-           Dk = ek.zq[ek.Qq],
-           fk = ek.mY.ZZ(ek.Qq).position,
+           } = (0, vC.c)(),
+           QC = zC.QE[zC.qE],
+           wC = zC.JR.lL(zC.qE).position,
```

#### 2761. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22794` → after: `L22829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22829) · [Before (L22794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22794)

```diff
-           const [Mk, Kk, nk] = ek.mY.ZZ(xk).position, Uk = ik.getColyseusEntity(xk);
+           const [FC, WC, MC] = zC.JR.lL(NC).position, gC = ZC.getColyseusEntity(NC);
```

#### 2762. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22806-L22807` → after: `L22841-L22842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22841-L22842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22841-L22842) · [Before (L22806-L22807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22806-L22807)

```diff
-       const ik = null === (ek = (0, jk.e)().mY.lek(kk)) || void 0 === ek ? void 0 : ek.lifeformType;
-       return Se.m.includes(ik) ? ik : null
+       const ZC = null === (zC = (0, vC.e)().JR.KzC(CC)) || void 0 === zC ? void 0 : zC.lifeformType;
+       return bz.p.includes(ZC) ? ZC : null
```

#### 2763. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22809-L22810` → after: `L22844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22844) · [Before (L22809-L22810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22809-L22810)

```diff
-     var le = ik(1911),
-       pe = ik(1284);
+     var Pz = ZC(1865);
```

#### 2764. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22846` → after: `L22880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22880) · [Before (L22846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22846)

```diff
-           fk = (0, jk.d)();
+           wC = (0, vC.c)();
```

#### 2765. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22848` → after: `L22882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22882) · [Before (L22848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22848)

```diff
-         if ("off" !== Le && null !== (kk = le.c.get("canAltAction")) && void 0 !== kk && kk) {
+         if ("off" !== Az && null !== (CC = Pz.e.get("canAltAction")) && void 0 !== CC && CC) {
```

#### 2766. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22855-L22860` → after: `L22889-L22894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22889-L22894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22889-L22894) · [Before (L22855-L22860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22855-L22860)

```diff
-             const fk = ek ? Ke(Dk) : null !== (bk = Dk.Lkk) && void 0 !== bk ? bk : Dk.camera.yN(),
-               Kk = Dk.mY.vy(Dk.Qq),
-               xk = ek && null !== (rk = null === (Pk = Dk.bkk) || void 0 === Pk ? void 0 : Pk.PJ) && void 0 !== rk ? rk : 0,
-               nk = ek ? null === (mk = Dk.mY.iek(Dk.Qq)) || void 0 === mk || null === (Mk = mk.selectedItem) || void 0 === Mk ? void 0 : Mk.name : void 0,
-               Uk = ek && Dk.mY.eek(Dk.Qq).crouching,
-               Hk = ek ? Dk.camera.HO : 0,
+             const wC = zC ? Wz(QC) : null !== (nC = QC.ECC) && void 0 !== nC ? nC : QC.camera.yB(),
+               WC = QC.JR.yG(QC.qE),
+               NC = zC && null !== (fC = null === (oC = QC.pCC) || void 0 === oC ? void 0 : oC.HV) && void 0 !== fC ? fC : 0,
+               MC = zC ? null === (qC = QC.JR.gzC(QC.qE)) || void 0 === qC || null === (FC = qC.selectedItem) || void 0 === FC ? void 0 : FC.name : void 0,
+               gC = zC && QC.JR.MzC(QC.qE).crouching,
+               SC = zC ? QC.camera.uL : 0,
```

#### 2767. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22868` → after: `L22902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22902) · [Before (L22868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22868)

```diff
-                   if (null !== ek) return (0, ee.c)(ek)
+                   if (null !== zC) return (0, zz.e)(zC)
```

#### 2768. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22871` → after: `L22905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22905) · [Before (L22871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22871)

```diff
-               kk.shown === bk && kk.label === (null !== Dk && void 0 !== Dk ? Dk : null) || (kk.shown = bk, kk.label = null !== Dk && void 0 !== Dk ? Dk : null, Sk = !0)
+               CC.shown === nC && CC.label === (null !== QC && void 0 !== QC ? QC : null) || (CC.shown = nC, CC.label = null !== QC && void 0 !== QC ? QC : null, bC = !0)
```

#### 2769. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22875` → after: `L22909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22909) · [Before (L22875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22875)

```diff
-         const Kk = null === (ek = Dk.bkk) || void 0 === ek ? void 0 : ek.PJ;
+         const WC = null === (zC = QC.pCC) || void 0 === zC ? void 0 : zC.HV;
```

#### 2770. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22880-L22881` → after: `L22914-L22915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22914-L22915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22914-L22915) · [Before (L22880-L22881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22880-L22881)

```diff
-           this.block.prevBlockId !== ek && (this.block.prevClientOptStr = `${kk.rootName}CrosshairText`, this.block.prevBlockId = ek);
-           const ik = null !== (xk = fk.getClientPredictedOption(Dk.Qq, this.block.prevClientOptStr)) && void 0 !== xk ? xk : fk.getDefaultItemStat(ek, "CrosshairText");
+           this.block.prevBlockId !== zC && (this.block.prevClientOptStr = `${CC.rootName}CrosshairText`, this.block.prevBlockId = zC);
+           const ZC = null !== (NC = wC.getClientPredictedOption(QC.qE, this.block.prevClientOptStr)) && void 0 !== NC ? NC : wC.getDefaultItemStat(zC, "CrosshairText");
```

#### 2771. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22887` → after: `L22921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22921) · [Before (L22887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22887)

```diff
-               ik = ek.mY.Aek(ek.Qq).fistItem;
+               ZC = zC.JR.lzC(zC.qE).fistItem;
```

#### 2772. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22889` → after: `L22923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22923) · [Before (L22889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22889)

```diff
-             const Dk = null !== ik.targetedPosition ? ek.Fy(ik.targetedPosition) : 0;
+             const QC = null !== ZC.targetedPosition ? zC.rG(ZC.targetedPosition) : 0;
```

#### 2773. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22891-L22894` → after: `L22925-L22928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22925-L22928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22925-L22928) · [Before (L22891-L22894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22891-L22894)

```diff
-             const fk = (0, jk.d)();
-             if (fk.getBlockTypeIsHarvestable(ek.Qq, Dk)) return null;
-             const Sk = null !== (kk = fk.getItemStat(ek.Qq, Dk, "harvestLevel")) && void 0 !== kk ? kk : 0;
-             return ke.s[Sk] ? ke.s[Sk] : null
+             const wC = (0, vC.c)();
+             if (wC.getBlockTypeIsHarvestable(zC.qE, QC)) return null;
+             const bC = null !== (CC = wC.getItemStat(zC.qE, QC, "harvestLevel")) && void 0 !== CC ? CC : 0;
+             return Cz.n[bC] ? Cz.n[bC] : null
```

#### 2774. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22897` → after: `L22931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22931) · [Before (L22897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22897)

```diff
-         return this.target = (0, ck.r)(nk, {
+         return this.target = (0, DC.n)(MC, {
```

#### 2775. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22901` → after: `L22935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22935) · [Before (L22901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22901)

```diff
-           blockText: null !== (ik = this.block.text) && void 0 !== ik ? ik : null,
+           blockText: null !== (ZC = this.block.text) && void 0 !== ZC ? ZC : null,
```

#### 2776. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22910` → after: `L22944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22944) · [Before (L22910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22910)

```diff
-           return null !== (kk = null === (ek = je) || void 0 === ek ? void 0 : ek.target) && void 0 !== kk ? kk : Ye
+           return null !== (CC = null === (zC = Iz) || void 0 === zC ? void 0 : zC.target) && void 0 !== CC ? CC : Rz
```

#### 2777. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22915` → after: `L22949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22949) · [Before (L22915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22915)

```diff
-           const ik = (0, pe.v)((() => {
+           const ZC = (0, FC.z)((() => {
```

#### 2778. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22928` → after: `L22962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22962) · [Before (L22928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22928)

```diff
-     var Ve = ik(36848);
+     var ez = ZC(37112);
```

#### 2779. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22931` → after: `L22965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22965) · [Before (L22931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22931)

```diff
-       return (0, Xk.k)(`otherEntitySettingsClientifiedEId|${(0,jk.e)().Qq}|_isAlive`, kk)
+       return (0, aC.q)(`otherEntitySettingsClientifiedEId|${(0,vC.e)().qE}|_isAlive`, CC)
```

#### 2780. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22939-L22940` → after: `L22973-L22974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22973-L22974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22973-L22974) · [Before (L22939-L22940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22939-L22940)

```diff
-               Dk = null === (kk = ik.zq[ik.Qq]) || void 0 === kk ? void 0 : kk[ik.Qq];
-             return void 0 !== Dk && "_isAlive" in Dk && (null !== (ek = Dk._isAlive) && void 0 !== ek ? ek : Ve.d._isAlive)
+               QC = null === (CC = ZC.QE[ZC.qE]) || void 0 === CC ? void 0 : CC[ZC.qE];
+             return void 0 !== QC && "_isAlive" in QC && (null !== (zC = QC._isAlive) && void 0 !== zC ? zC : ez.d._isAlive)
```

#### 2781. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22946` → after: `L22980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22980) · [Before (L22946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22946)

```diff
-         ironChestOpenRequested: (0, ck.d)("OpenIronChest", (function(kk) {
+         ironChestOpenRequested: (0, DC.c)("OpenIronChest", (function(CC) {
```

#### 2782. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22951` → after: `L22985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22985) · [Before (L22951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22951)

```diff
-           const fk = (0, jk.d)(),
+           const wC = (0, vC.c)(),
```

#### 2783. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22960` → after: `L22994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22994) · [Before (L22960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22960)

```diff
-           watch: kk => (0, Xk.k)("EffectUpdate", (ek => {
+           watch: CC => (0, aC.q)("EffectUpdate", (zC => {
```

#### 2784. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22962` → after: `L22996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22996) · [Before (L22962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22962)

```diff
-               ee: ik,
+               gQ: ZC,
```

#### 2785. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22965` → after: `L22999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR22999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L22999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L22999) · [Before (L22965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22965)

```diff
-             (0, Dk.f)(ik) && kk(fk)
+             (0, QC.h)(ZC) && CC(wC)
```

#### 2786. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22976` → after: `L23010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23010) · [Before (L22976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22976)

```diff
-             Ke: ik,
+             Jb: ZC,
```

#### 2787. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22978` → after: `L23012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23012) · [Before (L22978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22978)

```diff
-             xe: fk
+             Ib: wC
```

#### 2788. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22980` → after: `L23014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23014) · [Before (L22980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22980)

```diff
-           (0, jk.d)().client.gameRecorder.recordFlyingMiddleText(ek, ik, Dk, fk)
+           (0, vC.c)().client.gameRecorder.recordFlyingMiddleText(zC, ZC, QC, wC)
```

#### 2789. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22985-L22986` → after: `L23019-L23020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23019-L23020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23019-L23020) · [Before (L22985-L22986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22985-L22986)

```diff
-         this.inventoryOpen = !1, Xk.j.subscribe("DropItemKeyPressed", (kk => {
-           this.inventoryOpen ? Xk.j.tm("DropInvenItem", kk) : Xk.j.tm("DropHotbarItem", kk)
+         this.inventoryOpen = !1, aC.o.subscribe("DropItemKeyPressed", (CC => {
+           this.inventoryOpen ? aC.o.bp("DropInvenItem", CC) : aC.o.bp("DropHotbarItem", CC)
```

#### 2790. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L22993-L22997` → after: `L23027-L23031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23027-L23031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23027-L23031) · [Before (L22993-L22997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L22993-L22997)

```diff
-     var Qe = ik(37779),
-       ve = ik(37584),
-       Ee = ik(37792),
-       he = ik(38795),
-       ae = ik(1207);
+     var Hz = ZC(38022),
+       Ez = ZC(37827),
+       lz = ZC(38031),
+       Xz = ZC(39068),
+       cz = ZC(1169);
```

#### 2791. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23001-L23002` → after: `L23035-L23036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23035-L23036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23035-L23036) · [Before (L23001-L23002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23001-L23002)

```diff
-       const ik = (0, jk.d)(),
-         Dk = ik.dn.metadatas[kk];
+       const ZC = (0, vC.c)(),
+         QC = ZC.qM.metadatas[CC];
```

#### 2792. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23004` → after: `L23038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23038) · [Before (L23004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23004)

```diff
-       const fk = (0, jk.e)().Qq,
+       const wC = (0, vC.e)().qE,
```

#### 2793. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23010` → after: `L23044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23044) · [Before (L23010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23010)

```diff
-       const rk = null === (ek = jk.h.itemsClient[kk]) || void 0 === ek ? void 0 : ek.armourReduction;
+       const fC = null === (zC = vC.g.itemsClient[CC]) || void 0 === zC ? void 0 : zC.armourReduction;
```

#### 2794. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23021` → after: `L23055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23055) · [Before (L23021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23021)

```diff
-             for (const ek of Object.keys((0, jk.d)().dn.metadatas)) {
+             for (const zC of Object.keys((0, vC.c)().qM.metadatas)) {
```

#### 2795. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23026` → after: `L23060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23060) · [Before (L23026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23026)

```diff
-           }(), (0, ck.t)((kk => {
+           }(), (0, DC.p)((CC => {
```

#### 2796. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23043` → after: `L23077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23077) · [Before (L23043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23043)

```diff
-               fk = null === kk ? null : (0, ck.r)(ek[Dk], kk);
+               wC = null === CC ? null : (0, DC.n)(zC[QC], CC);
```

#### 2797. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23061` → after: `L23095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23095) · [Before (L23061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23061)

```diff
-       return kk.mY.Sek(kk.Qq) ? kk.mY.fek(kk.Qq) : null
+       return CC.JR.PzC(CC.qE) ? CC.JR.pzC(CC.qE) : null
```

#### 2798. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23068` → after: `L23102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23102) · [Before (L23068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23068)

```diff
-         attributes: (0, ve.c)(kk.attributes)
+         attributes: (0, Ez.e)(CC.attributes)
```

#### 2799. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23074-L23075` → after: `L23108-L23109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23108-L23109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23108-L23109) · [Before (L23074-L23075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23074-L23075)

```diff
-       if (!kk.bD || null === kk.PD) return null;
-       const ek = [...kk.PD];
+       if (!CC.bQ || null === CC.fQ) return null;
+       const zC = [...CC.fQ];
```

#### 2800. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23077` → after: `L23111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23111) · [Before (L23077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23077)

```diff
-       if ("Iron" === kk.rD) {
+       if ("Iron" === CC.nQ) {
```

#### 2801. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23079` → after: `L23113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23113) · [Before (L23079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23079)

```diff
-         const kk = (0, jk.d)(),
+         const CC = (0, vC.c)(),
```

#### 2802. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23082` → after: `L23116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23116) · [Before (L23082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23082)

```diff
-           Gb: [...null !== (Dk = kk.client.ironChestPasskeyCache.getCachedPasskeyForChest(ek)) && void 0 !== Dk ? Dk : [0, 0, 0, 0]]
+           zn: [...null !== (QC = CC.client.ironChestPasskeyCache.getCachedPasskeyForChest(zC)) && void 0 !== QC ? QC : [0, 0, 0, 0]]
```

#### 2803. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23088` → after: `L23122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23122) · [Before (L23088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23088)

```diff
-         type: kk.rD,
+         type: CC.nQ,
```

#### 2804. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23090` → after: `L23124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23124) · [Before (L23090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23090)

```diff
-         numSlots: kk.bD.numSlots,
+         numSlots: CC.bQ.numSlots,
```

#### 2805. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23106` → after: `L23140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23140) · [Before (L23106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23106)

```diff
-       const rk = (0, jk.d)(),
+       const fC = (0, vC.c)(),
```

#### 2806. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23114` → after: `L23148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23148) · [Before (L23114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23114)

```diff
-         displayName: null !== (ek = bk.attributes.customDisplayName) && void 0 !== ek ? ek : rk.getItemStat((0, jk.e)().Qq, Pk, "displayName"),
+         displayName: null !== (zC = nC.attributes.customDisplayName) && void 0 !== zC ? zC : fC.getItemStat((0, vC.e)().qE, oC, "displayName"),
```

#### 2807. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23116` → after: `L23150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23150) · [Before (L23116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23116)

```diff
-         clipSize: null !== (ik = null !== (Dk = null === (fk = bk.attributes.customAttributes.gunStats) || void 0 === fk ? void 0 : fk.clipSize) && void 0 !== Dk ? Dk : null === (Sk = le.c.get(`${Pk}GunStats`)) || void 0 === Sk ? void 0 : Sk.clipSize) && void 0 !== ik ? ik : kk.t … [truncated]
+         clipSize: null !== (ZC = null !== (QC = null === (wC = nC.attributes.customAttributes.gunStats) || void 0 === wC ? void 0 : wC.clipSize) && void 0 !== QC ? QC : null === (bC = Pz.e.get(`${oC}GunStats`)) || void 0 === bC ? void 0 : bC.clipSize) && void 0 !== ZC ? ZC : CC.t … [truncated]
```

#### 2808. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23122` → after: `L23156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23156) · [Before (L23122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23122)

```diff
-         inventory: (0, ck.p)((function() {
+         inventory: (0, DC.l)((function() {
```

#### 2809. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23133` → after: `L23167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23167) · [Before (L23133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23133)

```diff
-           kk.bD ? ek = kk.bD.items.map(Te) : kk.inCreative && (oe ??= Ee.c.map((kk => ({
+           CC.bQ ? zC = CC.bQ.items.map(tz) : CC.inCreative && (Dz ??= lz.e.map((CC => ({
```

#### 2810. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23135-L23136` → after: `L23169-L23170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23169-L23170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23169-L23170) · [Before (L23135-L23136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23135-L23136)

```diff
-             amount: (0, jk.d)().getItemTypeObj(kk).stackable ? 1 : null,
-             attributes: (0, ve.f)(kk)
+             amount: (0, vC.c)().getItemTypeObj(CC).stackable ? 1 : null,
+             attributes: (0, Ez.h)(CC)
```

#### 2811. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23147-L23148` → after: `L23181-L23182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23181-L23182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23181-L23182) · [Before (L23147-L23148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23147-L23148)

```diff
-         }), [...ck.g, "chestToggleFromServer", "syncedInvenFromServer", Je], (0, ck.o)("creative")),
-         hotbar: (0, ck.p)((function() {
+         }), [...DC.f, "chestToggleFromServer", "syncedInvenFromServer", kz], (0, DC.j)("creative")),
+         hotbar: (0, DC.l)((function() {
```

#### 2812. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23161` → after: `L23195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23195) · [Before (L23161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23161)

```diff
-         }), [...ck.g, "localPlayerNewShotsLeft"], (0, ck.k)("DisplayName", "GunStats")),
+         }), [...DC.f, "localPlayerNewShotsLeft"], (0, DC.i)("DisplayName", "GunStats")),
```

#### 2813. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23167-L23168` → after: `L23201-L23202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23201-L23202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23201-L23202) · [Before (L23167-L23168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23167-L23168)

```diff
-               } = (0, jk.d)(), ek = (0, jk.e)().Qq, ik = {};
-               for (const fk of Object.keys(ke.q)) kk.getPossibleEnchantments(ek, fk).length > 0 && (ik[fk] = !0);
+               } = (0, vC.c)(), zC = (0, vC.e)().qE, ZC = {};
+               for (const wC of Object.keys(Cz.m)) CC.getPossibleEnchantments(zC, wC).length > 0 && (ZC[wC] = !0);
```

#### 2814. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23170` → after: `L23204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23204) · [Before (L23170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23170)

```diff
-               for (const fk of Object.keys(he.i)) Dk[fk] = !0;
+               for (const wC of Object.keys(Xz.f)) QC[wC] = !0;
```

#### 2815. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23181-L23183` → after: `L23215-L23217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23215-L23217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23215-L23217) · [Before (L23181-L23183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23181-L23183)

```diff
-         creativeVisibility: (0, ck.p)((function() {
-           const kk = (0, jk.d)(),
-             ek = (0, jk.e)().Qq,
+         creativeVisibility: (0, DC.l)((function() {
+           const CC = (0, vC.c)(),
+             zC = (0, vC.e)().qE,
```

#### 2816. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23185` → after: `L23219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23219) · [Before (L23185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23185)

```diff
-           for (const Dk of Ee.c) {
+           for (const QC of lz.e) {
```

#### 2817. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23190` → after: `L23224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23224) · [Before (L23190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23190)

```diff
-             publicLobby: (0, ae.I)((0, Ak.c)().lobbyName),
+             publicLobby: (0, cz.U)((0, iC.d)().lobbyName),
```

#### 2818. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23193` → after: `L23227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23227) · [Before (L23193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23193)

```diff
-         }), ["connectedGameChanged"], (0, ck.k)("ShowInCreativeInven"))
+         }), ["connectedGameChanged"], (0, DC.i)("ShowInCreativeInven"))
```

#### 2819. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23200-L23208` → after: `L23234-L23242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23234-L23242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23234-L23242) · [Before (L23200-L23208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23200-L23208)

```diff
-       hotbarSlotRequested: (0, ck.d)("setSelectedInventorySlotI"),
-       hotbarScrolled: (0, ck.d)("ScrollInventorySlot"),
-       hotbarDropRequested: (0, ck.d)("DropHotbarItem"),
-       inventoryDropRequested: (0, ck.d)("DropInvenItem"),
-       numberKeyPressed: (0, ck.d)("numkeyPressed"),
-       chestToggled: (0, ck.d)("chestToggleFromServer"),
-       chestRefreshed: (0, ck.d)("chestRefreshedFromServer", ei),
-       inventorySynced: (0, ck.d)("syncedInvenFromServer", ei),
-       enchantingTableOpened: (0, ck.d)("enchantingTable", (kk => {
+       hotbarSlotRequested: (0, DC.c)("setSelectedInventorySlotI"),
+       hotbarScrolled: (0, DC.c)("ScrollInventorySlot"),
+       hotbarDropRequested: (0, DC.c)("DropHotbarItem"),
+       inventoryDropRequested: (0, DC.c)("DropInvenItem"),
+       numberKeyPressed: (0, DC.c)("numkeyPressed"),
+       chestToggled: (0, DC.c)("chestToggleFromServer"),
+       chestRefreshed: (0, DC.c)("chestRefreshedFromServer", CZ),
+       inventorySynced: (0, DC.c)("syncedInvenFromServer", CZ),
+       enchantingTableOpened: (0, DC.c)("enchantingTable", (CC => {
```

#### 2820. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23211` → after: `L23245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23245) · [Before (L23211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23211)

```diff
-           wP: ik
+           SF: ZC
```

#### 2821. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23215` → after: `L23249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23249) · [Before (L23215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23215)

```diff
-           blockName: (0, jk.d)().getMetaInfo(ik).rootName
+           blockName: (0, vC.c)().getMetaInfo(ZC).rootName
```

#### 2822. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23222` → after: `L23256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23256) · [Before (L23222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23222)

```diff
-       return kk.mY.fek(kk.Qq)
+       return CC.JR.pzC(CC.qE)
```

#### 2823. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23228` → after: `L23262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23262) · [Before (L23228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23228)

```diff
-         ek.mY.Dek(ek.Qq).setSelectedSlotIndex(kk), ik = kk, (0, Fk.sendColyMessage)(bk.gi, ik)
+         zC.JR.SzC(zC.qE).setSelectedSlotIndex(CC), ZC = CC, (0, YC.sendColyMessage)(nC.hi, ZC)
```

#### 2824. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23264-L23266` → after: `L23298-L23300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23298-L23300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23298-L23300) · [Before (L23264-L23266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23264-L23266)

```diff
-         kk = (0, jk.d)().client.inventoryPrediction.predict(tk.c.closeChest()), (0, Fk.sendColyMessage)(bk.Yg, {
-           ub: kk
-         }), Xk.j.tm(Je)
+         CC = (0, vC.c)().client.inventoryPrediction.predict(TC.c.closeChest()), (0, YC.sendColyMessage)(nC.Ng, {
+           bn: CC
+         }), aC.o.bp(kz)
```

#### 2825. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23274` → after: `L23308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23308) · [Before (L23274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23274)

```diff
-           Gb: ik
+           zn: ZC
```

#### 2826. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23277-L23279` → after: `L23311-L23313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23311-L23313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23311-L23313) · [Before (L23277-L23279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23277-L23279)

```diff
-           (0, Fk.sendColyMessage)(bk.Dg, {
-             le: kk,
-             Gb: ek
+           (0, YC.sendColyMessage)(nC.qg, {
+             hQ: CC,
+             zn: zC
```

#### 2827. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23286` → after: `L23320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23320) · [Before (L23286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23286)

```diff
-           Gb: ik
+           zn: ZC
```

#### 2828. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23290-L23291` → after: `L23324-L23325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23324-L23325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23324-L23325) · [Before (L23290-L23291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23290-L23291)

```diff
-             le: kk,
-             Gb: ek
+             hQ: CC,
+             zn: zC
```

#### 2829. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23299` → after: `L23333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23333) · [Before (L23299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23299)

```diff
-           (0, Fk.sendColyMessage)(bk.Yh, kk)
+           (0, YC.sendColyMessage)(nC.Xh, CC)
```

#### 2830. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23303-L23305` → after: `L23337-L23339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23337-L23339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23337-L23339) · [Before (L23303-L23305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23303-L23305)

```diff
-     var bi = ik(6320),
-       ri = ik(38664),
-       Pi = ik(39171);
+     var bZ = ZC(6480),
+       nZ = ZC(38931),
+       fZ = ZC(39426);
```

#### 2831. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23327` → after: `L23361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23361) · [Before (L23327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23327)

```diff
-           const Pk = ek.events.map((kk => (0, Xk.k)(kk, rk)));
+           const oC = zC.events.map((CC => (0, aC.q)(CC, fC)));
```

#### 2832. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23336-L23338` → after: `L23370-L23372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23370-L23372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23370-L23372) · [Before (L23336-L23338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23336-L23338)

```diff
-         health: me.m,
-         aura: me.h,
-         heldItemAim: (0, ck.p)((function() {
+         health: qz.n,
+         aura: qz.j,
+         heldItemAim: (0, DC.l)((function() {
```

#### 2833. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23341` → after: `L23375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23375) · [Before (L23341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23341)

```diff
-             Dk = null === (kk = ik.mY.Aek(ik.Qq)) || void 0 === kk ? void 0 : kk.JY,
+             QC = null === (CC = ZC.JR.lzC(ZC.qE)) || void 0 === CC ? void 0 : CC.Hx,
```

#### 2834. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23353` → after: `L23387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23387) · [Before (L23353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23353)

```diff
-           return !0 === (null === ek || void 0 === ek || null === (kk = ek.mY.eek(ek.Qq)) || void 0 === kk ? void 0 : kk.crouching)
+           return !0 === (null === zC || void 0 === zC || null === (CC = zC.JR.MzC(zC.qE)) || void 0 === CC ? void 0 : CC.crouching)
```

#### 2835. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23362` → after: `L23396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23396) · [Before (L23362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23362)

```diff
-             return (0, Pe.k)(null === (kk = ik.mY.iek(ik.Qq)) || void 0 === kk || null === (ek = kk.selectedItem) || void 0 === ek ? void 0 : ek.name)
+             return (0, oz.v)(null === (CC = ZC.JR.gzC(ZC.qE)) || void 0 === CC || null === (zC = CC.selectedItem) || void 0 === zC ? void 0 : zC.name)
```

#### 2836. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23368-L23371` → after: `L23402-L23405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23402-L23405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23402-L23405) · [Before (L23368-L23371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23368-L23371)

```diff
-             ek = null === kk || void 0 === kk ? void 0 : kk.mY.vkk(kk.Qq);
-           if (!ek) return (0, me.j)(!1, !1);
-           const ik = (0, bi.d)(!0 === le.c.get("creative"), ek.physicsState.type) && kk.mY.Cek(kk.Qq).isAlive;
-           return (0, me.j)(ik, ek._flying)
+             zC = null === CC || void 0 === CC ? void 0 : CC.JR.yCC(CC.qE);
+           if (!zC) return (0, qz.m)(!1, !1);
+           const ZC = (0, bZ.f)(!0 === Pz.e.get("creative"), zC.physicsState.type) && CC.JR.EzC(CC.qE).isAlive;
+           return (0, qz.m)(ZC, zC._flying)
```

#### 2837. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23375-L23376` → after: `L23409-L23410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23409-L23410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23409-L23410) · [Before (L23375-L23376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23375-L23376)

```diff
-         cosmeticsUpdated: (0, ck.d)("playerCosmeticsUpdated", (kk => {
-           const ek = (0, jk.e)().ykk;
+         cosmeticsUpdated: (0, DC.c)("playerCosmeticsUpdated", (CC => {
+           const zC = (0, vC.e)().mCC;
```

#### 2838. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23379-L23381` → after: `L23413-L23415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23413-L23415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23413-L23415) · [Before (L23379-L23381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23379-L23381)

```diff
-               yD: ik,
-               YD: Dk,
-               LD: fk
+               xQ: ZC,
+               JQ: QC,
+               IQ: wC
```

#### 2839. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23385-L23386` → after: `L23419-L23420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23419-L23420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23419-L23420) · [Before (L23385-L23386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23385-L23386)

```diff
-               YD: Dk,
-               LD: fk
+               JQ: QC,
+               IQ: wC
```

#### 2840. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23390` → after: `L23424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23424) · [Before (L23390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23390)

```diff
-         shotDamageToShow: (0, me.n)((kk => {
+         shotDamageToShow: (0, qz.r)((CC => {
```

#### 2841. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23393` → after: `L23427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23427) · [Before (L23393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23393)

```diff
-           return !0 === (null === (ek = ik.zq[ik.Qq][kk]) || void 0 === ek ? void 0 : ek.showDamageAmounts)
+           return !0 === (null === (zC = ZC.QE[ZC.qE][CC]) || void 0 === zC ? void 0 : zC.showDamageAmounts)
```

#### 2842. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23395` → after: `L23429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23429) · [Before (L23395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23395)

```diff
-         boardEditRequested: (0, ck.d)("EditBoard", (kk => {
+         boardEditRequested: (0, DC.c)("EditBoard", (CC => {
```

#### 2843. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23403-L23404` → after: `L23437-L23438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23437-L23438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23437-L23438) · [Before (L23403-L23404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23403-L23404)

```diff
-             } = (0, jk.d)();
-             return (0, Pi.b)(ek, ik, kk)
+             } = (0, vC.c)();
+             return (0, fZ.e)(zC, ZC, CC)
```

#### 2844. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23413` → after: `L23447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23447) · [Before (L23413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23413)

```diff
-           (0, jk.d)().client.cameraController.applyTemporaryThirdPerson(ek)
+           (0, vC.c)().client.cameraController.applyTemporaryThirdPerson(zC)
```

#### 2845. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23416` → after: `L23450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23450) · [Before (L23416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23416)

```diff
-           (0, ri.g)(kk)
+           (0, nZ.d)(CC)
```

#### 2846. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23427` → after: `L23461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23461) · [Before (L23427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23427)

```diff
-           (0, Fk.sendColyMessage)(bk.Wh, {
+           (0, YC.sendColyMessage)(nC.Th, {
```

#### 2847. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23436` → after: `L23470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23470) · [Before (L23436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23436)

```diff
-           (0, Fk.sendColyMessage)(bk.bh, kk, !0)
+           (0, YC.sendColyMessage)(nC.Qg, CC, !0)
```

#### 2848. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23445-L23447` → after: `L23479-L23481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23479-L23481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23479-L23481) · [Before (L23445-L23447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23445-L23447)

```diff
-         Dk = ek, fk = ik, (0, Fk.sendColyMessage)(bk.uh, {
-           ob: Dk,
-           Zb: fk
+         QC = zC, wC = ZC, (0, YC.sendColyMessage)(nC.rh, {
+           vn: QC,
+           en: wC
```

#### 2849. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23453` → after: `L23487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23487) · [Before (L23453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23453)

```diff
-           PP: ik
+           hF: ZC
```

#### 2850. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23456-L23459` → after: `L23490-L23493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23490-L23493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23490-L23493) · [Before (L23456-L23459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23456-L23459)

```diff
-         Dk = ek, fk = ik, (0, Fk.sendColyMessage)(bk.ck, {
-           Nb: Dk,
-           Rb: fk,
-           Jb: 5
+         QC = zC, wC = ZC, (0, YC.sendColyMessage)(nC.hk, {
+           Lq: QC,
+           Uq: wC,
+           Bq: 5
```

#### 2851. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23465` → after: `L23499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23499) · [Before (L23465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23465)

```diff
-           PP: ik
+           hF: ZC
```

#### 2852. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23468` → after: `L23502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23502) · [Before (L23468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23468)

```diff
-           (0, Fk.sendColyMessage)(bk.$j, {
+           (0, YC.sendColyMessage)(nC.ek, {
```

#### 2853. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23470` → after: `L23504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23504) · [Before (L23470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23470)

```diff
-             PP: ek
+             hF: zC
```

#### 2854. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23475-L23477` → after: `L23509-L23511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23509-L23511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23509-L23511) · [Before (L23475-L23477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23475-L23477)

```diff
-     var Ui = ik(37694),
-       Hi = ik(38575),
-       wi = ik(99);
+     var MZ = ZC(37947),
+       gZ = ZC(38824),
+       SZ = ZC(77);
```

#### 2855. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23493` → after: `L23527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23527) · [Before (L23493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23493)

```diff
-           lifeformType: null === kk && null !== rk && void 0 !== rk ? rk : null,
+           lifeformType: null === CC && null !== fC && void 0 !== fC ? fC : null,
```

#### 2856. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23499-L23500` → after: `L23533-L23534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23533-L23534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23533-L23534) · [Before (L23499-L23500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23499-L23500)

```diff
-       const Pk = (0, jk.d)(),
-         mk = (0, Dk.f)(fk),
+       const oC = (0, vC.c)(),
+         qC = (0, QC.h)(wC),
```

#### 2857. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23506-L23507` → after: `L23540-L23541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23540-L23541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23540-L23541) · [Before (L23506-L23507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23506-L23507)

```diff
-         lifeformType: null === Mk && null !== (ek = null !== Kk && void 0 !== Kk ? Kk : rk) && void 0 !== ek ? ek : null,
-         colour: bk || (0, Hi.h)(fk, "killfeedColour") || (mk ? "#2727f1" : "#912c2c"),
+         lifeformType: null === FC && null !== (zC = null !== WC && void 0 !== WC ? WC : fC) && void 0 !== zC ? zC : null,
+         colour: nC || (0, gZ.f)(wC, "killfeedColour") || (qC ? "#2727f1" : "#912c2c"),
```

#### 2858. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23509` → after: `L23543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23543) · [Before (L23509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23509)

```diff
-         realName: "Player" === Kk && null !== (ik = Pk.getRawEntityName(fk)) && void 0 !== ik ? ik : null
+         realName: "Player" === WC && null !== (ZC = oC.getRawEntityName(wC)) && void 0 !== ZC ? ZC : null
```

#### 2859. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23513` → after: `L23547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23547) · [Before (L23513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23513)

```diff
-         players: (0, ck.p)((function() {
+         players: (0, DC.l)((function() {
```

#### 2860. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23515` → after: `L23549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23549) · [Before (L23515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23515)

```diff
-           const ek = (0, jk.d)();
+           const zC = (0, vC.c)();
```

#### 2861. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23526` → after: `L23560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23560) · [Before (L23526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23526)

```diff
-               name: null !== (fk = ek.getRawEntityName(bk)) && void 0 !== fk ? fk : null,
+               name: null !== (wC = zC.getRawEntityName(nC)) && void 0 !== wC ? wC : null,
```

#### 2862. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23528` → after: `L23562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23562) · [Before (L23528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23528)

```diff
-               cosmetics: null !== (Sk = Ui.c[bk]) && void 0 !== Sk ? Sk : null
+               cosmetics: null !== (bC = MZ.d[nC]) && void 0 !== bC ? bC : null
```

#### 2863. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23534` → after: `L23568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23568) · [Before (L23534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23534)

```diff
-             localId: null !== (kk = (0, jk.e)().ykk) && void 0 !== kk ? kk : null
+             localId: null !== (CC = (0, vC.e)().mCC) && void 0 !== CC ? CC : null
```

#### 2864. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23537` → after: `L23571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23571) · [Before (L23537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23537)

```diff
-         lobbyLeaderboardRows: (0, ck.p)((function() {
+         lobbyLeaderboardRows: (0, DC.l)((function() {
```

#### 2865. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23539` → after: `L23573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23573) · [Before (L23539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23539)

```diff
-           for (const bk of null !== (ek = null === (ik = (0, jk.d)()) || void 0 === ik ? void 0 : ik.getPlayerIds()) && void 0 !== ek ? ek : []) {
+           for (const nC of null !== (zC = null === (ZC = (0, vC.c)()) || void 0 === ZC ? void 0 : ZC.getPlayerIds()) && void 0 !== zC ? zC : []) {
```

#### 2866. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23542-L23544` → after: `L23576-L23578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23576-L23578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23576-L23578) · [Before (L23542-L23544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23542-L23544)

```diff
-               colour: null !== (Dk = (0, Hi.h)(bk, "colorInLobbyLeaderboard")) && void 0 !== Dk ? Dk : null,
-               values: null !== (fk = (0, Hi.h)(bk, "lobbyLeaderboardValues")) && void 0 !== fk ? fk : null,
-               tags: null !== (Sk = (0, Hi.h)(bk, "lobbyLeaderboardTags")) && void 0 !== Sk ? Sk : null
+               colour: null !== (QC = (0, gZ.f)(nC, "colorInLobbyLeaderboard")) && void 0 !== QC ? QC : null,
+               values: null !== (wC = (0, gZ.f)(nC, "lobbyLeaderboardValues")) && void 0 !== wC ? wC : null,
+               tags: null !== (bC = (0, gZ.f)(nC, "lobbyLeaderboardTags")) && void 0 !== bC ? bC : null
```

#### 2867. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23553` → after: `L23587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23587) · [Before (L23553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23553)

```diff
-             const ek = (0, Xk.k)("playerKilled", (ek => {
+             const zC = (0, aC.q)("playerKilled", (zC => {
```

#### 2868. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23573` → after: `L23607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23607) · [Before (L23573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23573)

```diff
-               ik = (0, Xk.k)("customKillfeed", (ek => {
+               ZC = (0, aC.q)("customKillfeed", (zC => {
```

#### 2869. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23591` → after: `L23625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23625) · [Before (L23591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23591)

```diff
-         chatReceived: (0, me.i)((function(kk) {
+         chatReceived: (0, qz.k)((function(CC) {
```

#### 2870. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23593` → after: `L23627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23627) · [Before (L23593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23593)

```diff
-           const Dk = (0, jk.d)(),
+           const QC = (0, vC.c)(),
```

#### 2871. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23597-L23599` → after: `L23631-L23633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23631-L23633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23631-L23633) · [Before (L23597-L23599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23597-L23599)

```diff
-             name: null !== fk && void 0 !== fk ? fk : null,
-             local: fk === Dk.getRawEntityName((0, jk.e)().Qq),
-             profileEffect: null !== (ek = null === (ik = Ui.c[kk]) || void 0 === ik ? void 0 : ik.profileEffect) && void 0 !== ek ? ek : null
+             name: null !== wC && void 0 !== wC ? wC : null,
+             local: wC === QC.getRawEntityName((0, vC.e)().qE),
+             profileEffect: null !== (zC = null === (ZC = MZ.d[CC]) || void 0 === ZC ? void 0 : ZC.profileEffect) && void 0 !== zC ? zC : null
```

#### 2872. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23606` → after: `L23640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23640) · [Before (L23606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23606)

```diff
-           (0, Fk.sendColyMessage)(bk.Fj, kk)
+           (0, YC.sendColyMessage)(nC.Ij, CC)
```

#### 2873. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23619` → after: `L23653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23653) · [Before (L23619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23619)

```diff
-             shopVersion: le.c.get("_shopVersion"),
+             shopVersion: Pz.e.get("_shopVersion"),
```

#### 2874. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23627-L23631` → after: `L23661-L23665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23661-L23665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23661-L23665) · [Before (L23627-L23631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23627-L23631)

```diff
-       (0, Fk.sendColyMessage)(bk.uk, {
-         lr: kk,
-         yr: ek,
-         kr: ik,
-         er: Dk
+       (0, YC.sendColyMessage)(nC.yk, {
+         ZF: CC,
+         QF: zC,
+         Zq: ZC,
+         Qq: QC
```

#### 2875. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23637` → after: `L23671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23671) · [Before (L23637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23637)

```diff
-           hM: ek,
+           cq: zC,
```

#### 2876. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23646` → after: `L23680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23680) · [Before (L23646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23646)

```diff
-           Xk.j.tm("chat", kk)
+           aC.o.bp("chat", CC)
```

#### 2877. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23648-L23650` → after: `L23682-L23684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23682-L23684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23682-L23684) · [Before (L23648-L23650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23648-L23650)

```diff
-           (0, Fk.sendColyMessage)(bk.Hg, {
-             hM: kk,
-             aM: ek
+           (0, YC.sendColyMessage)(nC.sg, {
+             cq: CC,
+             uq: zC
```

#### 2878. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23656-L23657` → after: `L23690-L23691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23690-L23691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23690-L23691) · [Before (L23656-L23657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23656-L23657)

```diff
-         ek = kk, (0, Fk.sendColyMessage)(bk.Fh, {
-           FP: ek
+         zC = CC, (0, YC.sendColyMessage)(nC.Ch, {
+           Cn: zC
```

#### 2879. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23664` → after: `L23698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23698) · [Before (L23664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23664)

```diff
-           kr: Dk,
+           Zq: QC,
```

#### 2880. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23672` → after: `L23706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23706) · [Before (L23672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23672)

```diff
-           kr: ik,
+           Zq: ZC,
```

#### 2881. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23679` → after: `L23713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23713) · [Before (L23679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23679)

```diff
-           (0, Fk.sendColyMessage)(bk.oj, kk)
+           (0, YC.sendColyMessage)(nC.vj, CC)
```

#### 2882. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23685` → after: `L23719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23719) · [Before (L23685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23685)

```diff
-           kr: ik,
+           Zq: ZC,
```

#### 2883. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23689-L23691` → after: `L23723-L23725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23723-L23725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23723-L23725) · [Before (L23689-L23691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23689-L23691)

```diff
-           (0, Fk.sendColyMessage)("customGame" === kk ? bk.lh : bk.Zh, {
-             kr: ek,
-             er: ik
+           (0, YC.sendColyMessage)("customGame" === CC ? nC.ch : nC.Yh, {
+             Zq: zC,
+             Qq: ZC
```

#### 2884. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23697-L23698` → after: `L23731-L23732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23731-L23732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23731-L23732) · [Before (L23697-L23698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23697-L23698)

```diff
-           (0, Fk.sendColyMessage)(bk.wi, {
-             gP: kk
+           (0, YC.sendColyMessage)(nC.ui, {
+             Bn: CC
```

#### 2885. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23704` → after: `L23738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23738) · [Before (L23704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23704)

```diff
-           (0, Fk.sendColyMessage)(bk.lk, kk)
+           (0, YC.sendColyMessage)(nC.qk, CC)
```

#### 2886. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23708-L23709` → after: `L23742-L23743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23742-L23743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23742-L23743) · [Before (L23708-L23709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23708-L23709)

```diff
-     var si = ik(39173),
-       di = ik(38610);
+     var IZ = ZC(39432),
+       iZ = ZC(38868);
```

#### 2887. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23718-L23721` → after: `L23752-L23755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23752-L23755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23752-L23755) · [Before (L23718-L23721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23718-L23721)

```diff
-         fk = ek, Sk = ik, rk = Dk, (0, Fk.sendColyMessage)(bk.dk, {
-           kK: fk,
-           eK: Sk,
-           iK: rk
+         wC = zC, bC = ZC, fC = QC, (0, YC.sendColyMessage)(nC.kk, {
+           cn: wC,
+           rn: bC,
+           sn: fC
```

#### 2888. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23731-L23734` → after: `L23765-L23768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23765-L23768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23765-L23768) · [Before (L23731-L23734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23731-L23734)

```diff
-         fk = ek, Sk = ik, rk = Dk, (0, Fk.sendColyMessage)(bk.hk, {
-           Bb: fk,
-           cb: Sk,
-           Tb: rk
+         wC = zC, bC = ZC, fC = QC, (0, YC.sendColyMessage)(nC.nk, {
+           eq: wC,
+           hq: bC,
+           Kq: fC
```

#### 2889. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23739` → after: `L23773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23773) · [Before (L23739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23739)

```diff
-           (0, Fk.sendColyMessage)(bk.pk, kk)
+           (0, YC.sendColyMessage)(nC.sk, CC)
```

#### 2890. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23748-L23750` → after: `L23782-L23784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23782-L23784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23782-L23784) · [Before (L23748-L23750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23748-L23750)

```diff
-         Dk = ek, fk = (0, si.d)(ik), (0, Fk.sendColyMessage)(bk.Cj, {
-           wP: fk,
-           HP: Dk
+         QC = zC, wC = (0, IZ.d)(ZC), (0, YC.sendColyMessage)(nC.Fj, {
+           SF: wC,
+           gF: QC
```

#### 2891. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23755` → after: `L23789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23789) · [Before (L23755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23755)

```diff
-           (0, Fk.sendColyMessage)(bk.ah, kk, (0, di.f)(kk))
+           (0, YC.sendColyMessage)(nC.Og, CC, (0, iZ.d)(CC))
```

#### 2892. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23759` → after: `L23793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23793) · [Before (L23759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23759)

```diff
-     var Fi = ik(37268);
+     var eZ = ZC(37512);
```

#### 2893. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23761-L23762` → after: `L23795-L23796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23795-L23796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23795-L23796) · [Before (L23761-L23762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23761-L23762)

```diff
-     var qi = ik(38666),
-       Ii = ik(37614);
+     var KZ = ZC(38937),
+       YZ = ZC(37864);
```

#### 2894. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23767` → after: `L23801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23801) · [Before (L23767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23767)

```diff
-         bw: Sk,
+         sS: bC,
```

#### 2895. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23769-L23770` → after: `L23803-L23804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23803-L23804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23803-L23804) · [Before (L23769-L23770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23769-L23770)

```diff
-       } = kk.yH, rk = kk.yH.wik(), Pk = ek * (null !== (Dk = null === rk || void 0 === rk ? void 0 : rk.renderWidth) && void 0 !== Dk ? Dk : bk.getRenderWidth()), mk = ik * (null !== (fk = null === rk || void 0 === rk ? void 0 : rk.renderHeight) && void 0 !== fk ? fk : bk.getRend … [truncated]
-       return rk ? (0, Ii.g)(rk, Pk, mk) : Sk.createPickingRay(Pk, mk, null, null)
+       } = CC.Vg, fC = CC.Vg.iZC(), oC = zC * (null !== (QC = null === fC || void 0 === fC ? void 0 : fC.renderWidth) && void 0 !== QC ? QC : nC.getRenderWidth()), qC = ZC * (null !== (wC = null === fC || void 0 === fC ? void 0 : fC.renderHeight) && void 0 !== wC ? wC : nC.getRend … [truncated]
+       return fC ? (0, YZ.i)(fC, oC, qC) : bC.createPickingRay(oC, qC, null, null)
```

#### 2896. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23772-L23774` → after: `L23806-L23808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23806-L23808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23806-L23808) · [Before (L23772-L23774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23772-L23774)

```diff
-     var Qi = ik(37670),
-       vi = ik(39182);
-     const Ei = (0, De.h)("Water");
+     var mZ = ZC(37928),
+       HZ = ZC(39439);
+     const EZ = (0, Qz.k)("Water");
```

#### 2897. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23776` → after: `L23810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23810) · [Before (L23776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23776)

```diff
-         fullInventory: (0, ck.p)((function() {
+         fullInventory: (0, DC.l)((function() {
```

#### 2898. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23778-L23780` → after: `L23812-L23814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23812-L23814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23812-L23814) · [Before (L23778-L23780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23778-L23780)

```diff
-         }), ["playerInventoryComponentChanged"], (0, ck.o)("useInventory", "useFullInventory")),
-         freeCamera: (0, ck.p)((function() {
-           const kk = (0, jk.d)().client.freeCameraController;
+         }), ["playerInventoryComponentChanged"], (0, DC.j)("useInventory", "useFullInventory")),
+         freeCamera: (0, DC.l)((function() {
+           const CC = (0, vC.c)().client.freeCameraController;
```

#### 2899. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23790` → after: `L23824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23824) · [Before (L23790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23790)

```diff
-           return kk.mY.vy(kk.Qq)
+           return CC.JR.yG(CC.qE)
```

#### 2900. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23794` → after: `L23828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23828) · [Before (L23794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23794)

```diff
-           return null !== (kk = null === (ek = (0, jk.e)().bkk) || void 0 === ek ? void 0 : ek.position) && void 0 !== kk ? kk : null
+           return null !== (CC = null === (zC = (0, vC.e)().pCC) || void 0 === zC ? void 0 : zC.position) && void 0 !== CC ? CC : null
```

#### 2901. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23807` → after: `L23841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23841) · [Before (L23807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23807)

```diff
-           (0, jk.d)().iN(bk, bk);
+           (0, vC.c)().lB(nC, nC);
```

#### 2902. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23811` → after: `L23845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23845) · [Before (L23811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23811)

```diff
-           return (0, vi.d)(((kk, ek, ik) => (rk = Dk.Ux.lT(kk, ek, ik), 0 !== rk)), bk, [Sk.x, Sk.y, Sk.z], vi.c, Pk, mk) ? {
+           return (0, HZ.f)(((CC, zC, ZC) => (fC = QC.fN.Wy(CC, zC, ZC), 0 !== fC)), nC, [bC.x, bC.y, bC.z], HZ.b, oC, qC) ? {
```

#### 2903. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23820-L23823` → after: `L23854-L23857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23854-L23857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23854-L23857) · [Before (L23820-L23823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23820-L23823)

```diff
-             mY: Sk,
-             Qq: bk
-           } = (0, jk.e)(), rk = null === (kk = Sk.iek(bk)) || void 0 === kk ? void 0 : kk.selectedItem;
-           return null !== rk && void 0 !== rk && null !== (ek = rk.attributes) && void 0 !== ek && null !== (ik = ek.customAttributes) && void 0 !== ik && null !== (Dk = ik.enchantments) && void 0 !== Dk && Dk.Momentum && null !== (fk = Sk.Aek(bk).fistItem.momentumFrac) && void 0 … [truncated]
+             JR: bC,
+             qE: nC
+           } = (0, vC.e)(), fC = null === (CC = bC.gzC(nC)) || void 0 === CC ? void 0 : CC.selectedItem;
+           return null !== fC && void 0 !== fC && null !== (zC = fC.attributes) && void 0 !== zC && null !== (ZC = zC.customAttributes) && void 0 !== ZC && null !== (QC = ZC.enchantments) && void 0 !== QC && QC.Momentum && null !== (wC = bC.lzC(nC).fistItem.momentumFrac) && void 0 … [truncated]
```

#### 2904. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23825-L23826` → after: `L23859-L23860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23859-L23860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23859-L23860) · [Before (L23825-L23826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23825-L23826)

```diff
-         screenPos: kk => (0, Qi.j)((0, jk.e)(), kk),
-         cameraZoom: () => (0, jk.d)().client.cameraController.getZoomDistance(),
+         screenPos: CC => (0, mZ.f)((0, vC.e)(), CC),
+         cameraZoom: () => (0, vC.c)().client.cameraController.getZoomDistance(),
```

#### 2905. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23829` → after: `L23863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23863) · [Before (L23829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23829)

```diff
-           return (0, jk.d)().client.freeCameraController.isEnabled() ? kk.mY.vy(kk.camera.uZ) : null
+           return (0, vC.c)().client.freeCameraController.isEnabled() ? CC.JR.yG(CC.camera.YL) : null
```

#### 2906. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23833-L23834` → after: `L23867-L23868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23867-L23868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23867-L23868) · [Before (L23833-L23834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23833-L23834)

```diff
-             ek = kk.mY.jW(kk.Qq);
-           if (!ek || kk.mY.vkk(kk.Qq)._flying) return !1;
+             zC = CC.JR.eT(CC.qE);
+           if (!zC || CC.JR.yCC(CC.qE)._flying) return !1;
```

#### 2907. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23838` → after: `L23872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23872) · [Before (L23838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23838)

```diff
-           } = kk.mY.ZZ(kk.Qq);
+           } = CC.JR.lL(CC.qE);
```

#### 2908. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23842` → after: `L23876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23876) · [Before (L23842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23842)

```diff
-               Cw: Dk
+               Np: QC
```

#### 2909. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23861` → after: `L23895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23895) · [Before (L23861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23861)

```diff
-             Cw: ek.Cw,
+             Np: zC.Np,
```

#### 2910. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23863` → after: `L23897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23897) · [Before (L23863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23863)

```diff
-           }, ((ek, ik, Dk) => kk.Ux.pT(ek, ik, Dk) ? "ground" : kk.Ux.ZJ(ek, ik, Dk) ? kk.Ux.lT(ek, ik, Dk) === Ei ? "ground" : "hazard" : "empty"))
+           }, ((zC, ZC, QC) => CC.fN.Sy(zC, ZC, QC) ? "ground" : CC.fN.Z4(zC, ZC, QC) ? CC.fN.Wy(zC, ZC, QC) === EZ ? "ground" : "hazard" : "empty"))
```

#### 2911. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23867` → after: `L23901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23901) · [Before (L23867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23867)

```diff
-           return (0, Fi.e)(kk, kk.Qq, !1).map((kk => (0, De.e)(kk)))
+           return (0, eZ.i)(CC, CC.qE, !1).map((CC => (0, Qz.e)(CC)))
```

#### 2912. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23872` → after: `L23906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23906) · [Before (L23872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23872)

```diff
-           (0, jk.d)().client.cameraController.setCameraZoom(kk)
+           (0, vC.c)().client.cameraController.setCameraZoom(CC)
```

#### 2913. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23875` → after: `L23909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23909) · [Before (L23875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23875)

```diff
-           (0, jk.d)().client.freeCameraController.setMovesFly(kk)
+           (0, vC.c)().client.freeCameraController.setMovesFly(CC)
```

#### 2914. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23878` → after: `L23912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23912) · [Before (L23878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23878)

```diff
-           (0, jk.e)().xkk(kk && {
+           (0, vC.e)().JCC(CC && {
```

#### 2915. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23884` → after: `L23918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23918) · [Before (L23884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23884)

```diff
-     var Xi = ik(39187);
+     var uZ = ZC(39446);
```

#### 2916. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23888` → after: `L23922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23922) · [Before (L23888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23888)

```diff
-         ek = (0, jk.d)();
+         zC = (0, vC.c)();
```

#### 2917. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23892` → after: `L23926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23926) · [Before (L23892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23892)

```diff
-           const ik = null === (ek = kk.mY.ZZ(kk.Qq)) || void 0 === ek ? void 0 : ek.position;
+           const ZC = null === (zC = CC.JR.lL(CC.qE)) || void 0 === zC ? void 0 : zC.position;
```

#### 2918. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23896` → after: `L23930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23930) · [Before (L23896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23896)

```diff
-           const ik = kk.Ux.lik(ek[0], ek[1], ek[2]);
+           const ZC = CC.fN.eZC(zC[0], zC[1], zC[2]);
```

#### 2919. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23902` → after: `L23936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23936) · [Before (L23902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23902)

```diff
-           const Dk = kk.mY.Dek(kk.Qq);
+           const QC = CC.JR.SzC(CC.qE);
```

#### 2920. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23904` → after: `L23938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23938) · [Before (L23904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23904)

```diff
-             slots: (null !== (ek = null === Dk || void 0 === Dk ? void 0 : Dk.items) && void 0 !== ek ? ek : []).map((kk => kk ? {
+             slots: (null !== (zC = null === QC || void 0 === QC ? void 0 : QC.items) && void 0 !== zC ? zC : []).map((CC => CC ? {
```

#### 2921. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23908` → after: `L23942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23942) · [Before (L23908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23908)

```diff
-             heldSlot: null !== (ik = null === Dk || void 0 === Dk ? void 0 : Dk.getSelectedSlotIndex()) && void 0 !== ik ? ik : 0
+             heldSlot: null !== (ZC = null === QC || void 0 === QC ? void 0 : QC.getSelectedSlotIndex()) && void 0 !== ZC ? ZC : 0
```

#### 2922. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23916` → after: `L23950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23950) · [Before (L23916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23916)

```diff
-             if (String(bk) === String(kk.Qq) || bk === kk.ykk) continue;
+             if (String(nC) === String(CC.qE) || nC === CC.mCC) continue;
```

#### 2923. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23918` → after: `L23952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23952) · [Before (L23918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23918)

```diff
-               Pk = null === (fk = kk.mY.ZZ(bk)) || void 0 === fk ? void 0 : fk.position;
+               oC = null === (wC = CC.JR.lL(nC)) || void 0 === wC ? void 0 : wC.position;
```

#### 2924. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23922-L23923` → after: `L23956-L23957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23956-L23957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23956-L23957) · [Before (L23922-L23923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23922-L23923)

```diff
-               kind: "Player" === mk ? "player" : "Player" === rk ? null !== mk && void 0 !== mk ? mk : "NPC" : rk,
-               name: null !== (Sk = ek.getRawEntityName(bk)) && void 0 !== Sk ? Sk : null,
+               kind: "Player" === qC ? "player" : "Player" === fC ? null !== qC && void 0 !== qC ? qC : "NPC" : fC,
+               name: null !== (bC = zC.getRawEntityName(nC)) && void 0 !== bC ? bC : null,
```

#### 2925. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23931` → after: `L23965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23965) · [Before (L23931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23931)

```diff
-           for (const Dk of ek.client.iterateItemIds()) kk.mY.lkk(Dk, "itemState") && ik++;
+           for (const QC of zC.client.iterateItemIds()) CC.JR.YCC(QC, "itemState") && ZC++;
```

#### 2926. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23937` → after: `L23971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23971) · [Before (L23937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23937)

```diff
-       worldCodeAiChunk: kk => Promise.resolve((0, Xi.d)(Bi(), kk)),
+       worldCodeAiChunk: CC => Promise.resolve((0, uZ.e)(rZ(), CC)),
```

#### 2927. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23940-L23943` → after: `L23974-L23977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23974-L23977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23974-L23977) · [Before (L23940-L23943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23940-L23943)

```diff
-     var Ti = ik(36535),
-       oi = ik(36539),
-       Zi = ik(36552),
-       Oi = ik(36564);
+     var TZ = ZC(36802),
+       aZ = ZC(36811),
+       tZ = ZC(36831),
+       DZ = ZC(36842);
```

#### 2928. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23947` → after: `L23981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23981) · [Before (L23947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23947)

```diff
-         if (!ik) throw new Error(oi.e.viewerLoadFailed.text);
+         if (!ZC) throw new Error(aZ.c.viewerLoadFailed.text);
```

#### 2929. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23950` → after: `L23984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23984) · [Before (L23950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23950)

```diff
-           Dk = (0, Zi.d)(kk)
+           QC = (0, tZ.b)(CC)
```

#### 2930. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23952` → after: `L23986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23986) · [Before (L23952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23952)

```diff
-           throw fk instanceof Oi.d && fk.older ? new Error(oi.e.replayTooOld.text, {
+           throw wC instanceof DZ.g && wC.older ? new Error(aZ.c.replayTooOld.text, {
```

#### 2931. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23963` → after: `L23997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L23997) · [Before (L23963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23963)

```diff
-         return null === kk ? null : (0, Zi.f)(kk)
+         return null === CC ? null : (0, tZ.c)(CC)
```

#### 2932. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23967` → after: `L24001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24001) · [Before (L23967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23967)

```diff
-         return null !== (kk = null === (ek = this.replayer()) || void 0 === ek ? void 0 : ek.getFileHandle()) && void 0 !== kk ? kk : null
+         return null !== (CC = null === (zC = this.replayer()) || void 0 === zC ? void 0 : zC.getFileHandle()) && void 0 !== CC ? CC : null
```

#### 2933. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23976` → after: `L24010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24010) · [Before (L23976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23976)

```diff
-         return null !== (kk = null === (ek = this.replayer()) || void 0 === ek ? void 0 : ek.getRecording()) && void 0 !== kk ? kk : null
+         return null !== (CC = null === (zC = this.replayer()) || void 0 === zC ? void 0 : zC.getRecording()) && void 0 !== CC ? CC : null
```

#### 2934. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23980` → after: `L24014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24014) · [Before (L23980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23980)

```diff
-         return null === (kk = (0, jk.d)().client) || void 0 === kk ? void 0 : kk.gameReplayer
+         return null === (CC = (0, vC.c)().client) || void 0 === CC ? void 0 : CC.gameReplayer
```

#### 2935. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23983-L23985` → after: `L24017-L24019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24017-L24019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24017-L24019) · [Before (L23983-L23985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23983-L23985)

```diff
-     var Gi = ik(1905);
-     var Ni = ik(38662),
-       Ri = ik(36018);
+     var yZ = ZC(1858);
+     var LZ = ZC(38923),
+       UZ = ZC(36375);
```

#### 2936. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23990` → after: `L24024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24024) · [Before (L23990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23990)

```diff
-       return null === (kk = (0, jk.d)()) || void 0 === kk || null === (ek = kk.client) || void 0 === ek ? void 0 : ek.gameReplayer
+       return null === (CC = (0, vC.c)()) || void 0 === CC || null === (zC = CC.client) || void 0 === zC ? void 0 : zC.gameReplayer
```

#### 2937. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23995` → after: `L24029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24029) · [Before (L23995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L23995)

```diff
-       return null === (kk = (0, jk.d)()) || void 0 === kk || null === (ek = kk.client) || void 0 === ek ? void 0 : ek.gameRecorder
+       return null === (CC = (0, vC.c)()) || void 0 === CC || null === (zC = CC.client) || void 0 === zC ? void 0 : zC.gameRecorder
```

#### 2938. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24007` → after: `L24041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24041) · [Before (L24007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24007)

```diff
-         const ik = Ji.map((ik => (0, Xk.k)(ik, (() => {
+         const ZC = BZ.map((ZC => (0, aC.q)(ZC, (() => {
```

#### 2939. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24029-L24030` → after: `L24063-L24064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24063-L24064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24063-L24064) · [Before (L24029-L24030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24029-L24030)

```diff
-                 Dk = null !== (ek = null === ik || void 0 === ik ? void 0 : ik.getRecording()) && void 0 !== ek ? ek : null;
-               return ik && null !== Dk ? (kk = (0, ck.r)(kk, {
+                 QC = null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.getRecording()) && void 0 !== zC ? zC : null;
+               return ZC && null !== QC ? (CC = (0, DC.n)(CC, {
```

#### 2940. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24032` → after: `L24066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24066) · [Before (L24032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24032)

```diff
-                 Px: ik.getLastAppliedTickIndex(),
+                 ZN: ZC.getLastAppliedTickIndex(),
```

#### 2941. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24034` → after: `L24068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24068) · [Before (L24034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24034)

```diff
-                 uF: Dk.meta.uF,
+                 Jm: QC.meta.Jm,
```

#### 2942. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24038` → after: `L24072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24072) · [Before (L24038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24038)

```diff
-                 freecam: (0, jk.d)().client.freeCameraController.isEnabled()
+                 freecam: (0, vC.c)().client.freeCameraController.isEnabled()
```

#### 2943. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24055` → after: `L24089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24089) · [Before (L24055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24055)

```diff
-                 Pk = null !== (Sk = null === rk || void 0 === rk || null === (bk = rk.getRecording()) || void 0 === bk ? void 0 : bk.editState) && void 0 !== Sk ? Sk : null;
+                 oC = null !== (bC = null === fC || void 0 === fC || null === (nC = fC.getRecording()) || void 0 === nC ? void 0 : nC.editState) && void 0 !== bC ? bC : null;
```

#### 2944. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24060` → after: `L24094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24094) · [Before (L24060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24060)

```diff
-               return null !== kk && Pk === ek && mk === ik && Mk === Dk && Kk === fk || (ek = Pk, ik = mk, Dk = Mk, fk = Kk, kk = (0, ck.r)(kk, {
+               return null !== CC && oC === zC && qC === ZC && FC === QC && WC === wC || (zC = oC, ZC = qC, QC = FC, wC = WC, CC = (0, DC.n)(CC, {
```

#### 2945. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24087` → after: `L24121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24121) · [Before (L24087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24087)

```diff
-               return kk = (0, ck.r)(kk, {
+               return CC = (0, DC.n)(CC, {
```

#### 2946. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24101` → after: `L24135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24135) · [Before (L24101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24101)

```diff
-                     Sk && null === ik ? ik = (0, pe.v)(Dk) : Sk || null === ik || (ik(), ik = null), kk(fk)
+                     bC && null === ZC ? ZC = (0, FC.z)(QC) : bC || null === ZC || (ZC(), ZC = null), CC(wC)
```

#### 2947. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24103` → after: `L24137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24137) · [Before (L24103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24103)

```diff
-                   fk = ["gameRecorder|setRecording", "gameRecorder|setClipping", "gameRecorder|clipSettingsChanged"].map((kk => (0, Xk.k)(kk, Dk)));
+                   wC = ["gameRecorder|setRecording", "gameRecorder|setClipping", "gameRecorder|clipSettingsChanged"].map((CC => (0, aC.q)(CC, QC)));
```

#### 2948. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24112` → after: `L24146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24146) · [Before (L24112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24112)

```diff
-           replayVideoExporting: (0, ck.p)(Ni.c, ["replayViewer|videoExportChanged"])
+           replayVideoExporting: (0, DC.l)(LZ.e, ["replayViewer|videoExportChanged"])
```

#### 2949. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24121-L24122` → after: `L24155-L24156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24155-L24156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24155-L24156) · [Before (L24121-L24122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24121-L24122)

```diff
-           replayUiActionRequested: (0, ck.d)("replayViewer|uiActionRequested"),
-           replayViewerRequested: (0, ck.d)("replayViewer|requested")
+           replayUiActionRequested: (0, DC.c)("replayViewer|uiActionRequested"),
+           replayViewerRequested: (0, DC.c)("replayViewer|requested")
```

#### 2950. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24143` → after: `L24177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24177) · [Before (L24143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24143)

```diff
-             if ((0, Ni.c)()) return;
+             if ((0, LZ.e)()) return;
```

#### 2951. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24150` → after: `L24184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24184) · [Before (L24150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24150)

```diff
-               Px: ik,
+               ZN: ZC,
```

#### 2952. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24222` → after: `L24256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24256) · [Before (L24222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24222)

```diff
-             if ((0, Ri.g)(kk)) {
+             if ((0, UZ.f)(CC)) {
```

#### 2953. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24227` → after: `L24261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24261) · [Before (L24227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24227)

```diff
-                 throw (0, Ri.g)(!kk), ik
+                 throw (0, UZ.f)(!CC), ZC
```

#### 2954. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24229` → after: `L24263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24263) · [Before (L24229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24229)

```diff
-               Xk.j.tm("replayViewer|openChanged", kk)
+               aC.o.bp("replayViewer|openChanged", CC)
```

#### 2955. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24239` → after: `L24273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24273) · [Before (L24239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24239)

```diff
-               0 === ek && 0 === ik || (kk.camera.wT.dx = ek, kk.camera.wT.dy = ik, kk.camera.bZ = 1, kk.camera.sG(!0), kk.camera.bZ = 0)
+               0 === zC && 0 === ZC || (CC.camera.Fy.dx = zC, CC.camera.Fy.dy = ZC, CC.camera.wL = 1, CC.camera.aU(!0), CC.camera.wL = 0)
```

#### 2956. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24243` → after: `L24277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24277) · [Before (L24243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24243)

```diff
-             (0, jk.d)().client.freeCameraController.setAnalogueMove(kk)
+             (0, vC.c)().client.freeCameraController.setAnalogueMove(CC)
```

#### 2957. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24248` → after: `L24282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24282) · [Before (L24248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24248)

```diff
-               XM: ik
+               vq: ZC
```

#### 2958. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24250` → after: `L24284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24284) · [Before (L24250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24250)

```diff
-             (0, jk.d)().client.freeCameraController.handlefreeCamKeyPress(ek, null, ik)
+             (0, vC.c)().client.freeCameraController.handlefreeCamKeyPress(zC, null, ZC)
```

#### 2959. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24268` → after: `L24302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24302) · [Before (L24268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24268)

```diff
-             } = (0, jk.e)(), ik = ek.vy(), Dk = ek.FN();
+             } = (0, vC.e)(), ZC = zC.yG(), QC = zC.HO();
```

#### 2960. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24274` → after: `L24308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24308) · [Before (L24274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24274)

```diff
-           leaveGameReloadsPage: () => (0, jk.d)().client.leaveGameReloadsPage()
+           leaveGameReloadsPage: () => (0, vC.c)().client.leaveGameReloadsPage()
```

#### 2961. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24279-L24289` → after: `L24313-L24323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24313-L24323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24313-L24323) · [Before (L24279-L24289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24279-L24289)

```diff
-     var rD = ik(35983),
-       PD = ik(314),
-       mD = ik(711),
-       MD = ik(2388),
-       KD = ik(2395),
-       xD = ik(37348),
-       nD = ik(1850),
-       UD = ik(4716),
-       HD = ik(36136),
-       wD = ik(38655),
-       lD = ik(37962);
+     var wQ = ZC(36335),
+       bQ = ZC(326),
+       nQ = ZC(694),
+       fQ = ZC(2348),
+       oQ = ZC(2351),
+       qQ = ZC(37574),
+       FQ = ZC(1806),
+       WQ = ZC(4706),
+       NQ = ZC(36474),
+       MQ = ZC(38913),
+       gQ = ZC(38210);
```

#### 2962. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24294-L24296` → after: `L24328-L24330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24328-L24330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24328-L24330) · [Before (L24294-L24296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24294-L24296)

```diff
-         Sk = null !== (kk = null === (ek = fk.mY.iek(fk.Qq)) || void 0 === ek ? void 0 : ek.selectedItem) && void 0 !== kk ? kk : null,
-         bk = Sk ? (0, jk.d)().getItemStat(fk.Qq, Sk.name, "attackCooldownMs") : null,
-         rk = (0, PD._c)(bk, null === Sk || void 0 === Sk || null === (ik = Sk.attributes.customAttributes) || void 0 === ik || null === (Dk = ik.enchantments) || void 0 === Dk ? void 0 : Dk["Attack Speed"]);
+         bC = null !== (CC = null === (zC = wC.JR.gzC(wC.qE)) || void 0 === zC ? void 0 : zC.selectedItem) && void 0 !== CC ? CC : null,
+         nC = bC ? (0, vC.c)().getItemStat(wC.qE, bC.name, "attackCooldownMs") : null,
+         fC = (0, bQ.Oc)(nC, null === bC || void 0 === bC || null === (ZC = bC.attributes.customAttributes) || void 0 === ZC || null === (QC = ZC.enchantments) || void 0 === QC ? void 0 : QC["Attack Speed"]);
```

#### 2963. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24317` → after: `L24351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24351) · [Before (L24317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24317)

```diff
-     var YD = ik(1273);
+     var PQ = ZC(1240);
```

#### 2964. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24322` → after: `L24356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24356) · [Before (L24322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24322)

```diff
-       return null === (kk = ek.mY.Aek(ek.Qq)) || void 0 === kk ? void 0 : kk.JY
+       return null === (CC = zC.JR.lzC(zC.qE)) || void 0 === CC ? void 0 : CC.Hx
```

#### 2965. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24331` → after: `L24365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24365) · [Before (L24331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24331)

```diff
-       Sk ? null === Dk || void 0 === Dk || Dk.pik() : null === Dk || void 0 === Dk || Dk.yik(), (0, wD.l)(Sk ? Vk.e.UpFireSecondary : Vk.e.UpFirePrimary), (0, wD.h)(!1)
+       bC ? null === QC || void 0 === QC || QC.hZC() : null === QC || void 0 === QC || QC.KZC(), (0, MQ.o)(bC ? KC.e.UpFireSecondary : KC.e.UpFirePrimary), (0, MQ.g)(!1)
```

#### 2966. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24335-L24337` → after: `L24369-L24371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24369-L24371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24369-L24371) · [Before (L24335-L24337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24335-L24337)

```diff
-       kk === HD.e.Attack ? CD("primary-fire", ek, Dk, ik) : kk === HD.e.Use ? CD("alt-fire", ek, Dk, ik) : kk === HD.e.Action1 ? (! function(kk) {
-         (0, Fk.sendColyMessage)(bk._j, kk)
-       }(ek), ek && null !== ik && void 0 !== ik && ik.isGun() && ik.reload(Date.now())) : kk === HD.e.Action2 ? ek ? null === ik || void 0 === ik || ik.touchDownSecondary() : null === ik || void 0 === ik || ik.touchUpSecondary() : ek ? null === ik || void 0 === ik || ik.touchDown … [truncated]
+       CC === NQ.d.Attack ? RQ("primary-fire", zC, QC, ZC) : CC === NQ.d.Use ? RQ("alt-fire", zC, QC, ZC) : CC === NQ.d.Action1 ? (! function(CC) {
+         (0, YC.sendColyMessage)(nC.ak, CC)
+       }(zC), zC && null !== ZC && void 0 !== ZC && ZC.isGun() && ZC.reload(Date.now())) : CC === NQ.d.Action2 ? zC ? null === ZC || void 0 === ZC || ZC.touchDownSecondary() : null === ZC || void 0 === ZC || ZC.touchUpSecondary() : zC ? null === ZC || void 0 === ZC || ZC.touchDown … [truncated]
```

#### 2967. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24341` → after: `L24375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24375) · [Before (L24341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24341)

```diff
-       (0, wD.l)(Vk.e.DownFireSecondary), (0, wD.l)(Vk.e.UpFireSecondary)
+       (0, MQ.o)(KC.e.DownFireSecondary), (0, MQ.o)(KC.e.UpFireSecondary)
```

#### 2968. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24352` → after: `L24386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24386) · [Before (L24352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24352)

```diff
-             if (ek.noteTry(kk, ik), this.attackTries = ek, (0, YD.w)() && !(0, ri.e)())(0, lD.c)(), null === (Dk = LD()) || void 0 === Dk || Dk.repeatAttack();
+             if (zC.noteTry(CC, ZC), this.attackTries = zC, (0, PQ.x)() && !(0, nZ.c)())(0, gQ.f)(), null === (QC = GQ()) || void 0 === QC || QC.repeatAttack();
```

#### 2969. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24364` → after: `L24398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24398) · [Before (L24364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24364)

```diff
-         if (ek === HD.e.Interact) return this.interactTouches.set(kk, {
+         if (zC === NQ.d.Interact) return this.interactTouches.set(CC, {
```

#### 2970. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24368-L24370` → after: `L24402-L24404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24402-L24404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24402-L24404) · [Before (L24368-L24370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24368-L24370)

```diff
-           qte: UD.d.getCurrentState().isActive
-         }), void(0, wD.h)(!0);
-         if (ek === HD.e.Boost) return this.boostTouches.add(kk), void this.boost();
+           qte: WQ.c.getCurrentState().isActive
+         }), void(0, MQ.g)(!0);
+         if (zC === NQ.d.Boost) return this.boostTouches.add(CC), void this.boost();
```

#### 2971. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24373` → after: `L24407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24407) · [Before (L24373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24373)

```diff
-           this.pressedItems.set(ek, kk), AD(ek, !0, kk, ik), ek === HD.e.Attack && (this.attackTries = new yD(Date.now(), pD()), this.scheduleAttackRepeat())
+           this.pressedItems.set(zC, CC), AQ(zC, !0, CC, ZC), zC === NQ.d.Attack && (this.attackTries = new pQ(Date.now(), SQ()), this.scheduleAttackRepeat())
```

#### 2972. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24382` → after: `L24416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24416) · [Before (L24382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24382)

```diff
-         return fk ? (this.move(kk, ek, ik), this.interactTouches.delete(kk), (0, wD.h)(!1), fk.qte || fk.dragged || this.interact(), !0) : this.release(kk, Dk)
+         return wC ? (this.move(CC, zC, ZC), this.interactTouches.delete(CC), (0, MQ.g)(!1), wC.qte || wC.dragged || this.interact(), !0) : this.release(CC, QC)
```

#### 2973. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24385` → after: `L24419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24419) · [Before (L24385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24385)

```diff
-         if (this.interactTouches.delete(kk) || this.boostTouches.delete(kk)) return (0, wD.h)(!1), !0;
+         if (this.interactTouches.delete(CC) || this.boostTouches.delete(CC)) return (0, MQ.g)(!1), !0;
```

#### 2974. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24391` → after: `L24425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24425) · [Before (L24391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24391)

```diff
-         return ik === HD.e.Attack && (clearTimeout(this.attackRepeat), this.attackRepeat = null), AD(ik, !1, this.pressedItems.get(ik), ek), this.pressedItems.delete(ik), !0
+         return ZC === NQ.d.Attack && (clearTimeout(this.attackRepeat), this.attackRepeat = null), AQ(ZC, !1, this.pressedItems.get(ZC), zC), this.pressedItems.delete(ZC), !0
```

#### 2975. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24406-L24407` → after: `L24440-L24441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24440-L24441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24440-L24441) · [Before (L24406-L24407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24406-L24407)

```diff
-         const ek = UD.d.getCurrentState().isActive;
-         (0, wD.h)(!0);
+         const zC = WQ.c.getCurrentState().isActive;
+         (0, MQ.g)(!0);
```

#### 2976. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24410` → after: `L24444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24444) · [Before (L24410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24410)

```diff
-         const Dk = ik.mY.vkk(ik.Qq),
+         const QC = ZC.JR.yCC(ZC.qE),
```

#### 2977. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24412` → after: `L24446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24446) · [Before (L24412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24412)

```diff
-         (0, Pe.c)(Dk) > 0 && (fk === this.boostCooldownEnd || fk === (null === (kk = this.queuedBoost) || void 0 === kk ? void 0 : kk.cooldownEnd)) || (this.dropQueuedBoost(), this.boostOnceCooled(Dk))
+         (0, oz.f)(QC) > 0 && (wC === this.boostCooldownEnd || wC === (null === (CC = this.queuedBoost) || void 0 === CC ? void 0 : CC.cooldownEnd)) || (this.dropQueuedBoost(), this.boostOnceCooled(QC))
```

#### 2978. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24415` → after: `L24449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24449) · [Before (L24415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24415)

```diff
-         if ((0, Pe.c)(kk) <= 0) return function() {
+         if ((0, oz.f)(CC) <= 0) return function() {
```

#### 2979. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24423` → after: `L24457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24457) · [Before (L24423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24423)

```diff
-               ik = kk.mY.vkk(kk.Qq);
+               ZC = CC.JR.yCC(CC.qE);
```

#### 2980. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24425` → after: `L24459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24459) · [Before (L24425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24425)

```diff
-           }), (0, Pe.c)(kk));
+           }), (0, oz.f)(CC));
```

#### 2981. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24436` → after: `L24470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24470) · [Before (L24436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24436)

```diff
-     var dD = ik(36121);
+     var IQ = ZC(36463);
```

#### 2982. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24444` → after: `L24479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24479) · [Before (L24444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24444)

```diff
-       (0, KD.m)(QD), VD ??= Xk.j.Ql("leaveGame", (() => {
+       (0, oQ.k)(mQ), iQ ??= aC.o.nG("leaveGame", (() => {
```

#### 2983. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24447-L24448` → after: `L24482-L24483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24482-L24483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24482-L24483) · [Before (L24447-L24448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24447-L24448)

```diff
-             VD && (Xk.j.unsubscribe(VD), VD = null);
-             FD = !1, WD(!1), (0, KD.m)(null)
+             iQ && (aC.o.unsubscribe(iQ), iQ = null);
+             vQ = !1, HQ(!1), uQ(!1), (0, oQ.k)(null)
```

#### 2984. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24453-L24454` → after: `L24488-L24489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24488-L24489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24488-L24489) · [Before (L24453-L24454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24453-L24454)

```diff
-       if (kk === MD.k.UiCapture && 0 !== (ek & MD.t.TouchControls) && (FD = 0 !== (fk & MD.t.TouchControls)), WD(FD), aD()) switch (kk) {
-         case MD.k.Joystick:
+       if (CC === fQ.j.UiCapture && 0 !== (zC & fQ.v.TouchControls) && (vQ = 0 !== (wC & fQ.v.TouchControls)), CC === fQ.j.UiCapture && 0 !== (zC & fQ.v.ScreenshotMode) && HQ(0 !== (wC & fQ.v.ScreenshotMode)), uQ(vQ), cQ()) switch (CC) {
+         case fQ.j.Joystick:
```

#### 2985. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24457` → after: `L24492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24492) · [Before (L24457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24457)

```diff
-         case MD.k.TouchButton:
+         case fQ.j.TouchButton:
```

#### 2986. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24463` → after: `L24498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24498) · [Before (L24463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24463)

```diff
-               case MD.s.Jump: {
+               case fQ.r.Jump: {
```

#### 2987. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24465-L24466` → after: `L24500-L24501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24500-L24501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24500-L24501) · [Before (L24465-L24466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24465-L24466)

```diff
-                 kk.mY.Iek().touchJump = ek, kk.mY.eek(kk.Qq).jumping = ek;
-                 const Dk = kk.mY.vkk(kk.Qq);
+                 CC.JR.TzC().touchJump = zC, CC.JR.MzC(CC.qE).jumping = zC;
+                 const QC = CC.JR.yCC(CC.qE);
```

#### 2988. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24470` → after: `L24505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24505) · [Before (L24470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24470)

```diff
-               case MD.s.Crouch:
+               case fQ.r.Crouch:
```

#### 2989. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24472` → after: `L24507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24507) · [Before (L24472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24472)

```diff
-                   const kk = (0, jk.e)().mY.vkk((0, jk.e)().Qq);
+                   const CC = (0, vC.e)().JR.yCC((0, vC.e)().qE);
```

#### 2990. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24476-L24477` → after: `L24511-L24512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24511-L24512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24511-L24512) · [Before (L24476-L24477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24476-L24477)

```diff
-               case MD.s.Pov:
-                 ek && Xk.j.tm("SwapCameraZoom");
+               case fQ.r.Pov:
+                 zC && aC.o.bp("SwapCameraZoom");
```

#### 2991. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24479-L24480` → after: `L24514-L24515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24514-L24515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24514-L24515) · [Before (L24479-L24480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24479-L24480)

```diff
-               case MD.s.Fly:
-                 ek && ((0, jk.e)().mY.Iek().toggleFly = !0, ik && ID && ED(qD, !1))
+               case fQ.r.Fly:
+                 zC && ((0, vC.e)().JR.TzC().toggleFly = !0, ZC && YQ && lQ(KQ, !1))
```

#### 2992. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24482` → after: `L24517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24517) · [Before (L24482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24482)

```diff
-           }(ek, 0 !== (fk & KD.b))
+           }(zC, 0 !== (wC & oQ.c))
```

#### 2993. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24487` → after: `L24527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24527) · [Before (L24487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24487)

```diff
-       const ik = (0, jk.e)().mY.Iek();
+       const ZC = (0, vC.e)().JR.TzC();
```

#### 2994. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24501` → after: `L24541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24541) · [Before (L24501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24501)

```diff
-       kk.mY.Iek().touchCrouch = ek, kk.mY.eek(kk.Qq).setCrouching(ek), (0, xD.updateTouchMoveSpeed)(kk)
+       CC.JR.TzC().touchCrouch = zC, CC.JR.MzC(CC.qE).setCrouching(zC), (0, qQ.updateTouchMoveSpeed)(CC)
```

#### 2995. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24511-L24512` → after: `L24551-L24552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24551-L24552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24551-L24552) · [Before (L24511-L24512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24511-L24512)

```diff
-       vk.h.setMultiplierType(vk.d, (0, mD.i)(lk.b.get("clientEscMenuOptions")));
-       const ek = (0, jk.e)().mY.Iek();
+       XC.d.setMultiplierType(XC.c, (0, nQ.o)(GC.b.get("clientEscMenuOptions")));
+       const zC = (0, vC.e)().JR.TzC();
```

#### 2996. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24514-L24552` → after: `L24554-L24600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24554-L24600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24554-L24600) · [Before (L24514-L24552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24514-L24552)

```diff
-       const ik = function() {
-           const kk = (0, jk.e)(),
-             ek = () => (0, jk.d)().client.scriptedCameraController,
-             ik = () => !re.b.aimsFromBody(kk) || ek().aimsAtCursor,
-             Dk = () => {
-               kk.Sy = (0, jk.d)().getBlockReach(kk.Qq), re.b.aimsFromBody(kk) || (kk.Ykk = null, kk.Lkk = null)
-             },
-             fk = new sD((() => {
-               Kk(), Dk(), kk.mkk()
-             })),
-             Sk = (ik, Dk) => {
-               const fk = ek();
-               if (fk.aimsAtCursor) return fk.aimAtClientPoint(ik, Dk), void kk.mkk();
-               if (re.b.aimsFromBody(kk)) return;
-               const Sk = kk.container.canvas.getBoundingClientRect(),
-                 {
- ... (23 more removed lines; see GitHub link above)
+       const ZC = function(CC) {
+         const zC = (0, vC.e)(),
+           ZC = () => (0, vC.c)().client.scriptedCameraController,
+           QC = () => !fz.b.aimsFromBody(zC) || ZC().aimsAtCursor,
+           wC = () => {
+             zC.yp = (0, vC.c)().getBlockReach(zC.qE), fz.b.aimsFromBody(zC) || (zC.HCC = null, zC.ECC = null)
+           },
+           bC = new JQ((() => {
+             NC(), wC(), zC.RCC()
+           })),
+           nC = (CC, QC) => {
+             const wC = ZC();
+             if (wC.aimsAtCursor) return wC.aimAtClientPoint(CC, QC), void zC.RCC();
+             if (fz.b.aimsFromBody(zC)) return;
+             const bC = zC.container.canvas.getBoundingClientRect(),
+               {
+ ... (31 more added lines; see GitHub link above)
```

#### 2997. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24554-L24640` → after: `L24602-L24642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24602-L24642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24602-L24642) · [Before (L24554-L24640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24554-L24640)

```diff
-               if (rk = ek, ik.qte || fk.XM) return;
-               Sk(ik.startX, ik.startY);
-               const Mk = null !== (Dk = kk.Lkk) && void 0 !== Dk ? Dk : kk.camera.yN(),
-                 Kk = jk.h.localPlayerPickActionHelper.getPickEntityResult(Mk);
-               if (!kk.Mkk && !Kk) return;
-               const xk = null === (bk = kk.Mkk) || void 0 === bk ? void 0 : bk.position.join("|");
-               Pk = setTimeout((() => {
-                 var ek, ik;
-                 Pk = null;
-                 const Dk = null !== (ek = kk.Lkk) && void 0 !== ek ? ek : kk.camera.yN(),
-                   fk = jk.h.localPlayerPickActionHelper.getPickEntityResult(Dk);
-                 if (!kk.Mkk && !fk) return;
-                 const Sk = null === (ik = kk.Mkk) || void 0 === ik ? void 0 : ik.position.join("|");
-                 (xk === Sk && xk || Kk === fk && Kk) && ((0, wD.l)(Vk.e.TouchDownLong), kk.mY.jek(kk.Qq).Lik(), mk = !0)
-               }), 300)
-             },
- ... (71 more removed lines; see GitHub link above)
+               qC = null;
+               const QC = null !== (CC = zC.ECC) && void 0 !== CC ? CC : zC.camera.yB(),
+                 wC = vC.g.localPlayerPickActionHelper.getPickEntityResult(QC);
+               if (!zC.ACC && !wC) return;
+               const bC = null === (ZC = zC.ACC) || void 0 === ZC ? void 0 : ZC.position.join("|");
+               (NC === bC && NC || WC === wC && WC) && ((0, MQ.o)(KC.e.TouchDownLong), zC.JR.XzC(zC.qE).dZC(), FC = !0)
+             }), 300)
+           },
+           gC = () => {
+             oC = null, FC = !1, WC(), bC.holds(NQ.d.Attack) || bC.holds(NQ.d.Use) || (zC.JR.XzC(zC.qE).KZC(), (0, MQ.o)(KC.e.UpFirePrimary)), wC()
+           },
+           SC = (CC, zC) => {
+             bC.release(CC, zC) || fC.delete(CC) && ((0, MQ.g)(!1), CC === oC && gC())
+           },
+           pC = CC => {
+             for (const zC of bC.ids())(0, IQ.h)(CC.touches, zC) || SC(zC, CC);
+ ... (25 more added lines; see GitHub link above)
```

#### 2998. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24642-L24656` → after: `L24644-L24697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24644-L24697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24644-L24697) · [Before (L24642-L24656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24642-L24656)

```diff
-             },
-             Ck = kk => {
-               for (let ek = 0; ek < kk.changedTouches.length; ek++) Uk(kk.changedTouches[ek].identifier, kk)
-             },
-             Ak = document.getElementById("noa-container"),
-             sk = {
-               passive: !0
-             };
-           return Ak.addEventListener("touchstart", yk, sk), Ak.addEventListener("touchmove", Yk, sk), Ak.addEventListener("touchend", Lk, sk), Ak.addEventListener("touchcancel", Ck, sk), document.addEventListener("visibilitychange", lk), () => {
-             Ak.removeEventListener("touchstart", yk), Ak.removeEventListener("touchmove", Yk), Ak.removeEventListener("touchend", Lk), Ak.removeEventListener("touchcancel", Ck), document.removeEventListener("visibilitychange", lk), wk(null)
-           }
-         }(),
-         Dk = le.c.subscribe("canCrouch", (kk => {
-           !1 === kk && ED(!1, !1)
-         }));
+               const gC = {
+                 startMs: Date.now(),
+                 startX: qC,
+                 startY: FC,
+                 dragged: !1,
+                 qte: WQ.c.getCurrentState().isActive
+               };
+               fC.set(nC, gC), (0, MQ.g)(!0), null === oC && MC(nC, gC)
+             }
+           },
+           xC = CC => {
+             pC(CC);
+             for (let zC = 0; zC < CC.changedTouches.length; zC++) {
+               const {
+                 identifier: ZC,
+                 clientX: wC,
+ ... (38 more added lines; see GitHub link above)
```

#### 2999. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24660` → after: `L24701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24701) · [Before (L24660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24660)

```diff
-         ek.touchJump = !1, kk.mY.eek(kk.Qq).jumping = !1, ED(!1, !1), ek.isTouchscreen = !1
+         zC.touchJump = !1, CC.JR.MzC(CC.qE).jumping = !1, lQ(!1, !1), zC.isTouchscreen = !1
```

#### 3000. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24664` → after: `L24705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24705) · [Before (L24664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24664)

```diff
-     const BD = ["b", 0, 1, 160, 3, 223, 9, 7, "e", 98, 4, 8, 255, "length", "undefined", void 0, 173, 55, "a", 63, 6, "fromCodePoint", 12, "push", 67, 91, 8191, 88, 13, 14, 2, 5, !1, !0, "i", 74, 19, "c", 68, 42, 141, "h", 106, 143, "f", "d", 206, 186, 242, 220, 195, 241, 39, 26, … [truncated]
+     const TQ = [1, "b", 0, "h", "c", "i", 13, 192, 210, 4, 8, 255, "length", "e", 3, 245, "undefined", void 0, 2, 36, 229, "a", 63, 6, "fromCodePoint", 7, 12, "push", 10, 5, 200, 230, 122, !1, 38, 128, "g", 91, 49, 8191, 88, 14, "d", 58, 22, 11, !0, 235, 236, 83, "f", 157, 228, 2 … [truncated]
```

#### 3001. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24667` → after: `L24708-L24719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24708-L24719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24708-L24719) · [Before (L24667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24667)

```diff
-       return kk[BD[13]] = BD[2], typeof xf !== BD[14] && xf ? (new xf).decode(new nf(kk[BD[1]])) : typeof Uf !== BD[14] && Uf ? Uf.from(kk[BD[1]]).toString("utf-8") : lf(kk[BD[1]])
+       return CC[TQ[12]] = TQ[0], typeof rQ[CC[TQ[2]]] === TQ[16] ? rQ[CC[TQ[2]]] = function(...CC) {
+         for (jQ(CC[TQ[12]] = TQ[0], CC[TQ[0]] = 'M/O*_;|I?+4r18#5ctT>0u$@RH=]bUASQB2"Co6EGd,evl)sNm!iZW9Ln%{K&jP(FwJVgxYD:hkaqpzX[`<.73~^y}f', CC[TQ[1]] = "" + (CC[TQ[2]] || ""), CC[TQ[4]] = CC[TQ[1]].length, CC[TQ[9]] = [], CC[TQ[7]] = TQ[2], CC[TQ[8]] = TQ[2], CC[TQ[6]] = -TQ[0 … [truncated]
+           if (CC[TQ[5]] = CC[TQ[0]].indexOf(CC[TQ[1]][CC[TQ[3]]]), CC[TQ[5]] !== -TQ[0])
+             if (CC[TQ[6]] < TQ[2]) CC[TQ[6]] = CC[TQ[5]];
+             else {
+               jQ(CC[TQ[6]] += CC[TQ[5]] * TQ[37], CC[TQ[7]] |= CC[TQ[6]] << CC[TQ[8]], CC[TQ[8]] += (CC[TQ[6]] & TQ[39]) > TQ[40] ? TQ[6] : TQ[41]);
+               do {
+                 jQ(CC[TQ[9]].push(CC[TQ[7]] & TQ[11]), CC[TQ[7]] >>= TQ[10], CC[TQ[8]] -= TQ[10])
+               } while (CC[TQ[8]] > TQ[25]);
+               CC[TQ[6]] = -TQ[0]
+             } return CC[TQ[6]] > -TQ[0] && CC[TQ[9]].push((CC[TQ[7]] | CC[TQ[6]] << CC[TQ[8]]) & TQ[11]), tQ(CC[TQ[9]])
+       }(sQ[CC[TQ[2]]]) : rQ[CC[TQ[2]]]
```

#### 3002. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24671-L24688` → after: `L24723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24723) · [Before (L24671-L24688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24671-L24688)

```diff
-       if (kk[BD[13]] = BD[4], kk[BD[1]] === function(kk) {
-           return typeof tD[kk] === BD[14] ? tD[kk] = function(kk) {
-             var ek, ik, Dk, fk, Sk, bk, rk;
-             for (ZD(ek = "" + (kk || ""), ik = ek.length, Dk = [], fk = BD[1], Sk = BD[1], bk = -BD[2]), rk = BD[1]; rk < ik; rk++) {
-               var Pk = 'J&x7"w{2[<|%GmW/yg(ZPCVvOh_R]>HBLkq5l^1N+@on,j$Yd!`;fp#=8iU0sKtM3auE4Fbe?9}D.)STr6cA:~QX*Iz'.indexOf(ek[rk]);
-               if (Pk !== -BD[2])
-                 if (bk < BD[1]) bk = Pk;
-                 else {
-                   ZD(bk += Pk * BD[25], fk |= bk << Sk, Sk += (bk & BD[26]) > BD[27] ? BD[28] : BD[29]);
-                   do {
-                     ZD(Dk.push(fk & BD[12]), fk >>= BD[11], Sk -= BD[11])
-                   } while (Sk > BD[7]);
-                   bk = -BD[2]
-                 }
-             }
-             return bk > -BD[2] && Dk.push((fk | bk << Sk) & BD[12]), cD(Dk)
- ... (2 more removed lines; see GitHub link above)
+       return CC[TQ[12]] = TQ[0], typeof Fw !== TQ[16] && Fw ? (new Fw).decode(new Ww(CC[TQ[2]])) : typeof Nw !== TQ[16] && Nw ? Nw.from(CC[TQ[2]]).toString("utf-8") : Sw(CC[TQ[2]])
```

#### 3003. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24696-L24728` → after: `L24731-L24794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24731-L24794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24731-L24794) · [Before (L24696-L24728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24696-L24728)

```diff
-     ZD(tD = {}, XD = ["w#h?JaxOZ._j#]0)^K:OMh|", "+hIUKEPrn7+9XTGBV~s`fIqb]M}jKgce1u", "[_wSMN]u", 'L~E>Y?d`dk,A"Al#ClS`Yz<u"1Rm`#8vZ>,eW(|', ',D.m{]bbFrUj0(&)+x]?JU*Qx5..cb/pvzbS^YC/6k^{eg"S', '*<l?X9p`+?Gdf@Y"qKk:|N:QD/xou', ".1B_)Ne;0/cM,F(3|ll8VF#TcQA9Jr3W=sC$Cy,$7ZNg|E9#m30" … [truncated]
-         var kk, ek, ik, Dk = [function() {
-           return globalThis
-         }, function() {
-           return global
-         }, function() {
-           return window
-         }, function() {
-           return new Function("return this")()
-         }];
-         ZD(kk = void 0, ek = []);
-         try {
-           ZD(kk = Object, ek[BD[23]]("".__proto__.constructor.name))
-         } catch (nf) {}
-         kk: for (ik = BD[1]; ik < Dk[BD[13]]; ik++) try {
-           var fk;
- ... (17 more removed lines; see GitHub link above)
+     jQ(rQ = {}, sQ = ['UU_!]%Wd{r{"E=X=i+]U/~.d{t', "5(zSviB>.9p/P`46J2IBIxaaz?H{H:Pt3KW4", '9N,QgWGRjWwh5sSAXHEqYPK"$>e[G_', "wt#LKXs>Z>aY>#@2j9Gm[.OCV%b8o:Z]rTYZa`GC!([YQNoR0i/", "/9g=IWQ[((k[9jJo]2O", "H+#L291CAJlZ4;QU}r*", "IDAIC9q)5((K/", "uU)Ig:jdZ>an:5e6$9#B5`@Ug8ib/", "y# … [truncated]
+       jQ(CC[TQ[12]] = TQ[2], CC[TQ[4]] = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }], CC[TQ[0]] = TQ[17], CC[TQ[13]] = []);
+       try {
+         jQ(CC[TQ[0]] = Object, CC[TQ[13]][TQ[27]]("".__proto__.constructor.name))
+       } catch (sQ) {}
+       CC: for (CC[TQ[14]] = TQ[2]; CC[TQ[14]] < CC[TQ[4]][TQ[12]]; CC[TQ[14]]++) try {
+         for (CC[TQ[0]] = CC[TQ[4]][CC[TQ[14]]](), CC[-TQ[15]] = TQ[2]; CC[-TQ[15]] < CC[TQ[13]][TQ[12]]; CC[-TQ[15]]++)
+           if (typeof CC[TQ[0]][CC[TQ[13]][CC[-TQ[15]]]] === TQ[16]) continue CC;
+ ... (48 more added lines; see GitHub link above)
```

#### 3004. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24730` → after: `L24796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24796) · [Before (L24730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24730)

```diff
-                 ZD(kk[BD[7]] += kk[BD[6]] * BD[25], kk[BD[8]] |= kk[BD[7]] << kk[BD[9]], kk[BD[9]] += (kk[BD[7]] & BD[26]) > BD[27] ? BD[28] : BD[29]);
+                 jQ(CC[TQ[25]] += CC[-TQ[49]] * TQ[37], CC[TQ[13]] |= CC[TQ[25]] << CC[TQ[50]], CC[TQ[50]] += (CC[TQ[25]] & TQ[39]) > TQ[40] ? TQ[6] : TQ[41]);
```

#### 3005. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L24732-L25085` → after: `L24798-L24801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24798-L24801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24798-L24801) · [Before (L24732-L25085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L24732-L25085)

```diff
-                   ZD(kk[BD[10]].push(kk[BD[8]] & BD[12]), kk[BD[8]] >>= BD[11], kk[BD[9]] -= BD[11])
-                 } while (kk[BD[9]] > BD[7]);
-                 kk[BD[7]] = -BD[2]
-               } return kk[BD[7]] > -BD[2] && kk[BD[10]].push((kk[BD[8]] | kk[BD[7]] << kk[BD[9]]) & BD[12]), cD(kk[BD[10]])
-         }(XD[kk[BD[1]]]) : tD[kk[BD[1]]]
-       }(82) + "7" in oD && function(...kk) {
-         ZD(kk[BD[13]] = BD[1], kk[BD[18]] = function(...ek) {
-           return ek[BD[13]] = BD[30], kk[BD[0]]({}, ek[BD[1]], ek[BD[2]])
-         }, kk[BD[0]] = function(...ek) {
-           if (ZD(ek[BD[13]] = BD[4], ek[BD[18]] = {}), ek[BD[1]][ek[BD[2]] + ek[BD[30]]] !== BD[15]) return ek[BD[1]][ek[BD[2]] + ek[BD[30]]];
-           if (ek[BD[2]] === ek[BD[30]]) return BD[33];
-           for (ek[BD[0]] = BD[1]; ek[BD[0]] < ek[BD[2]].length; ek[BD[0]]++) ek[BD[18]][ek[BD[2]][ek[BD[0]]]] === BD[15] && (ek[BD[18]][ek[BD[2]][ek[BD[0]]]] = BD[1]), ek[BD[18]][ek[BD[30]][ek[BD[0]]]] === BD[15] && (ek[BD[18]][ek[BD[30]][ek[BD[0]]]] = BD[1]), ZD(ek[BD[18]][ek[BD … [truncated]
-           for (ek[BD[31]] in ek[BD[18]])
-             if (ek[BD[18]][ek[BD[31]]] !== BD[1]) return ek[BD[1]][ek[BD[2]] + ek[BD[30]]] = BD[32], BD[32];
-           for (ek[BD[20]] = BD[2]; ek[BD[20]] < ek[BD[2]].length; ek[BD[20]]++)
-             if (kk[BD[0]](ek[BD[1]], ek[BD[2]].substr(BD[1], ek[BD[20]]), ek[BD[30]].substr(BD[1], ek[BD[20]])) && kk[BD[0]](ek[BD[1]], ek[BD[2]].substr(ek[BD[20]]), ek[BD[30]].substr(ek[BD[20]])) || kk[BD[0]](ek[BD[1]], ek[BD[2]].substr(BD[1], ek[BD[20]]), ek[BD[30]].substr(ek[B … [truncated]
- ... (338 more removed lines; see GitHub link above)
+                   jQ(CC[TQ[42]].push(CC[TQ[13]] & TQ[11]), CC[TQ[13]] >>= TQ[10], CC[TQ[50]] -= TQ[10])
+                 } while (CC[TQ[50]] > TQ[25]);
+                 CC[TQ[25]] = -TQ[0]
+               } return CC[TQ[25]] > -TQ[0] && CC[TQ[42]].push((CC[TQ[13]] | CC[TQ[25]] << CC[TQ[50]]) & TQ[11]), tQ(CC[TQ[42]])
```

#### 3006. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25087-L25100` → after: `L24803-L24805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24803-L24805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24803-L24805) · [Before (L25087-L25100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25087-L25100)

```diff
-       })(), (() => {
-         function kk(kk) {
-           return typeof tD[kk] === BD[14] ? tD[kk] = function(...kk) {
-             for (ZD(kk[BD[13]] = BD[2], kk[BD[2]] = 'W30&#;.y[u8At1!^_/@%=:><~w`$2x7]gHJBFCfhPTVcdIsRUKNMjirDE|Y(9Gv5b?4{S"*enzqpm6LOoQa}+kX)lZ,', kk[-BD[95]] = "" + (kk[BD[1]] || ""), kk[BD[4]] = kk[-BD[95]].length, kk[BD[45]] = [], kk[BD[8]] = BD[1], kk[BD[44]] = BD[1], kk[BD[7 … [truncated]
-               if (kk[BD[6]] = kk[BD[2]].indexOf(kk[-BD[95]][kk[BD[41]]]), kk[BD[6]] !== -BD[2])
-                 if (kk[BD[7]] < BD[1]) kk[BD[7]] = kk[BD[6]];
-                 else {
-                   ZD(kk[BD[7]] += kk[BD[6]] * BD[25], kk[BD[8]] |= kk[BD[7]] << kk[BD[44]], kk[BD[44]] += (kk[BD[7]] & BD[26]) > BD[27] ? BD[28] : BD[29]);
-                   do {
-                     ZD(kk[BD[45]].push(kk[BD[8]] & BD[12]), kk[BD[8]] >>= BD[11], kk[BD[44]] -= BD[11])
-                   } while (kk[BD[44]] > BD[7]);
-                   kk[BD[7]] = -BD[2]
-                 } return kk[BD[7]] > -BD[2] && kk[BD[45]].push((kk[BD[8]] | kk[BD[7]] << kk[BD[44]]) & BD[12]), cD(kk[BD[45]])
-           }(XD[kk]) : tD[kk]
+ 
+         function zC(...zC) {
+           return zC[TQ[12]] = TQ[0], typeof rQ[zC[TQ[2]]] === TQ[16] ? rQ[zC[TQ[2]]] = CC(sQ[zC[TQ[2]]]) : rQ[zC[TQ[2]]]
```

#### 3007. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25107-L25117` → after: `L24808-L24818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24808-L24818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24808-L24818) · [Before (L25107-L25117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25107-L25117)

```diff
-             function ik(...kk) {
-               switch (kk[BD[13]] = BD[2], ((kk[BD[1]] & BD[96]) !== BD[1]) * BD[2] + (kk[BD[1]] < BD[1]) * BD[30]) {
-                 case BD[1]:
-                   return [kk[BD[1]] % BD[96], Math.trunc(kk[BD[1]] / BD[97])];
-                 case BD[2]:
-                   return [kk[BD[1]] % BD[96] - BD[96], Math.trunc(kk[BD[1]] / BD[97]) + BD[2]];
-                 case BD[30]:
-                   return [((kk[BD[1]] + BD[96]) % BD[96] + BD[96]) % BD[96], Math.round(kk[BD[1]] / BD[97])];
-                 case BD[4]:
-                   return [kk[BD[1]] % BD[96], Math.trunc(kk[BD[1]] / BD[97])]
-               }
+         function ZC(...CC) {
+           jQ(CC[TQ[12]] = TQ[2], CC[-TQ[52]] = function(...CC) {
+             for (jQ(CC[TQ[12]] = TQ[0], CC[TQ[21]] = CC[TQ[2]].length, CC[TQ[18]] = [], CC[TQ[4]] = TQ[2], CC[TQ[9]] = TQ[2], CC[TQ[2]].sort(((CC, zC) => CC - zC))), CC[TQ[51]] = TQ[2]; CC[TQ[51]] < CC[TQ[21]]; CC[TQ[51]]++)
+               if (!(CC[TQ[51]] > TQ[2] && CC[TQ[2]][CC[TQ[51]]] === CC[TQ[2]][CC[TQ[51]] - TQ[0]]))
+                 for (jQ(CC[TQ[4]] = CC[TQ[51]] + TQ[0], CC[TQ[9]] = CC[TQ[21]] - TQ[0]); CC[TQ[4]] < CC[TQ[9]];)
+                   if (CC[TQ[2]][CC[TQ[51]]] + CC[TQ[2]][CC[TQ[4]]] + CC[TQ[2]][CC[TQ[9]]] < TQ[2]) CC[TQ[4]]++;
+                   else if (CC[TQ[2]][CC[TQ[51]]] + CC[TQ[2]][CC[TQ[4]]] + CC[TQ[2]][CC[TQ[9]]] > TQ[2]) CC[TQ[9]]--;
+             else {
+               for (CC[TQ[18]].push([CC[TQ[2]][CC[TQ[51]]], CC[TQ[2]][CC[TQ[4]]], CC[TQ[2]][CC[TQ[9]]]]); CC[TQ[4]] < CC[TQ[9]] && CC[TQ[2]][CC[TQ[4]]] === CC[TQ[2]][CC[TQ[4]] + TQ[0]];) CC[TQ[4]]++;
+               for (; CC[TQ[4]] < CC[TQ[9]] && CC[TQ[2]][CC[TQ[9]]] === CC[TQ[2]][CC[TQ[9]] - TQ[0]];) CC[TQ[9]]--;
+               jQ(CC[TQ[4]]++, CC[TQ[9]]--)
```

#### 3008. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25119-L25131` → after: `L24820-L24828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24820-L24828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24820-L24828) · [Before (L25119-L25131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25119-L25131)

```diff
-             kk[BD[13]] = BD[1], ZD(kk[BD[18]] = ek([BD[30], BD[10]]), kk[BD[0]] = ek([BD[2], BD[30]]), kk[BD[30]] = kk[BD[18]] + kk[BD[0]], kk[-BD[98]] = kk[BD[30]] - kk[BD[0]], kk[BD[8]] = kk[-BD[98]] * BD[30], kk[-BD[99]] = kk[BD[8]] / BD[30], console.log(ik(kk[BD[30]])), conso … [truncated]
-           }(), BD[33]) {
-           function ek(...kk) {
-             for (ZD(kk[BD[13]] = BD[2], kk[BD[18]] = 'WuhAIEFac1tpQ=_mr6MeZX"k^#o`n73JLBqv)dlU,CST2V@&]Ggys<(~;b*4[{95wf}$RN:?.x8H>DjY/P0%!iz+OK|', kk[-BD[101]] = "" + (kk[BD[1]] || ""), kk[-BD[100]] = kk[-BD[101]].length, kk[BD[10]] = [], kk[BD[47]] = BD[1], kk[BD[103]] = BD[1], … [truncated]
-               if (kk[BD[102]] = kk[BD[18]].indexOf(kk[-BD[101]][kk[-BD[75]]]), kk[BD[102]] !== -BD[2])
-                 if (kk[BD[7]] < BD[1]) kk[BD[7]] = kk[BD[102]];
-                 else {
-                   ZD(kk[BD[7]] += kk[BD[102]] * BD[25], kk[BD[47]] |= kk[BD[7]] << kk[BD[103]], kk[BD[103]] += (kk[BD[7]] & BD[26]) > BD[27] ? BD[28] : BD[29]);
-                   do {
-                     ZD(kk[BD[10]].push(kk[BD[47]] & BD[12]), kk[BD[47]] >>= BD[11], kk[BD[103]] -= BD[11])
-                   } while (kk[BD[103]] > BD[7]);
-                   kk[BD[7]] = -BD[2]
-                 } return kk[BD[7]] > -BD[2] && kk[BD[10]].push((kk[BD[47]] | kk[BD[7]] << kk[BD[103]]) & BD[12]), cD(kk[BD[10]])
+             return CC[TQ[18]]
+           }, console.log(CC[-TQ[52]]))
+         }
+         aQ(111) in DQ && ZC();
+         let QC = TQ[33];
+         jQ(setInterval((() => {
+           if (!QC && (0, vC[TQ[13]])()) {
+             let CC = TQ[17];
+             jQ(QC = TQ[46], (0, YC[aQ(112)])(nC.Li, CC))
```

#### 3009. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25133` → after: `L24830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24830) · [Before (L25133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25133)

```diff
- 
+         }), 2679), (0, YC[zC(113) + zC(114)])(((...CC) => {
```

#### 3010. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25135` → after: `L24832-L24843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24832-L24843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24832-L24843) · [Before (L25135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25135)

```diff
-             return kk[BD[13]] = BD[2], typeof tD[kk[BD[1]]] === BD[14] ? tD[kk[BD[1]]] = ek(XD[kk[BD[1]]]) : tD[kk[BD[1]]]
+             return CC[TQ[12]] = TQ[0], typeof rQ[CC[TQ[2]]] === TQ[16] ? rQ[CC[TQ[2]]] = function(...CC) {
+               for (jQ(CC[TQ[12]] = TQ[0], CC[TQ[0]] = 'pw:1WADOu{yKT^!65Ft3")?znoYCE_diP@eU&ax2Q.v/>Z8bMl4H=0~mj+sIh,X$<#Sc9G(`;qRrfLN]gJ}7V[%|*Bk', CC[TQ[18]] = "" + (CC[TQ[2]] || ""), CC[TQ[4]] = CC[TQ[18]].length, CC[TQ[56]] = [], CC[-TQ[54]] = TQ[2], CC[-TQ[55]] = TQ[2], CC[T … [truncated]
+                 if (CC[TQ[53]] = CC[TQ[0]].indexOf(CC[TQ[18]][CC[TQ[10]]]), CC[TQ[53]] !== -TQ[0])
+                   if (CC[TQ[36]] < TQ[2]) CC[TQ[36]] = CC[TQ[53]];
+                   else {
+                     jQ(CC[TQ[36]] += CC[TQ[53]] * TQ[37], CC[-TQ[54]] |= CC[TQ[36]] << CC[-TQ[55]], CC[-TQ[55]] += (CC[TQ[36]] & TQ[39]) > TQ[40] ? TQ[6] : TQ[41]);
+                     do {
+                       jQ(CC[TQ[56]].push(CC[-TQ[54]] & TQ[11]), CC[-TQ[54]] >>= TQ[10], CC[-TQ[55]] -= TQ[10])
+                     } while (CC[-TQ[55]] > TQ[25]);
+                     CC[TQ[36]] = -TQ[0]
+                   } return CC[TQ[36]] > -TQ[0] && CC[TQ[56]].push((CC[-TQ[54]] | CC[TQ[36]] << CC[-TQ[55]]) & TQ[11]), tQ(CC[TQ[56]])
+             }(sQ[CC[TQ[2]]]) : rQ[CC[TQ[2]]]
```

#### 3011. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25137-L25165` → after: `L24845-L24849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24845-L24849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24845-L24849) · [Before (L25137-L25165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25137-L25165)

```diff
-           let Dk = BD[32];
-           ZD(setInterval(((...ek) => {
-             if (ek[BD[13]] = BD[1], kk(120) + "t" in oD && function(...kk) {
-                 kk[BD[13]] = BD[1]
-               }(), !Dk && (BD[1], jk[BD[8]])()) {
-               function ik(...kk) {
-                 for (ZD(kk[BD[13]] = BD[2], kk[-BD[105]] = 'P~z8>w=_]}"@XdSo^t?3WuyT`1LB/a$)CEV#s&Df+(U9N;7ec5|lpjkR2JIZ%rq,vxH[O.n!gF:mQ4hMb0Y<GA6Ki*{', kk[BD[106]] = "" + (kk[BD[1]] || ""), kk[BD[72]] = kk[BD[106]].length, kk[BD[45]] = [], kk[BD[8]] = BD[1], kk[BD[31]] = BD[1], … [truncated]
-                   if (kk[BD[6]] = kk[-BD[105]].indexOf(kk[BD[106]][kk[BD[107]]]), kk[BD[6]] !== -BD[2])
-                     if (kk[BD[7]] < BD[1]) kk[BD[7]] = kk[BD[6]];
-                     else {
-                       ZD(kk[BD[7]] += kk[BD[6]] * BD[25], kk[BD[8]] |= kk[BD[7]] << kk[BD[31]], kk[BD[31]] += (kk[BD[7]] & BD[26]) > BD[27] ? BD[28] : BD[29]);
-                       do {
-                         ZD(kk[BD[45]].push(kk[BD[8]] & BD[12]), kk[BD[8]] >>= BD[11], kk[BD[31]] -= BD[11])
-                       } while (kk[BD[31]] > BD[7]);
-                       kk[BD[7]] = -BD[2]
-                     } return kk[BD[7]] > -BD[2] && kk[BD[45]].push((kk[BD[8]] | kk[BD[7]] << kk[BD[31]]) & BD[12]), cD(kk[BD[45]])
- ... (13 more removed lines; see GitHub link above)
+           CC[TQ[12]] = TQ[2], zC(115) + "1" in DQ && function(...CC) {
+             function ZC(...CC) {
+               for (jQ(CC[TQ[12]] = TQ[0], CC[TQ[21]] = 'Lrq0udmA,3focZ2(%`V^1#6gH8Bx_}.pTyPU:!?4;$=+{sFJD&O[/>W)hS~<abn@wC"X9e*IlQENY|7Rzv5GikjKMt]', CC[TQ[18]] = "" + (CC[TQ[2]] || ""), CC[TQ[4]] = CC[TQ[18]].length, CC[TQ[42]] = [], CC[TQ[58]] = TQ[2], CC[TQ[23]] = TQ[2], CC[TQ … [truncated]
+                 if (CC[-TQ[57]] = CC[TQ[21]].indexOf(CC[TQ[18]][CC[TQ[3]]]), CC[-TQ[57]] !== -TQ[0])
+                   if (CC[TQ[25]] < TQ[2]) CC[TQ[25]] = CC[-TQ[57]];
```

#### 3012. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25167-L25176` → after: `L24851-L24856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24851-L24856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24851-L24856) · [Before (L25167-L25176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25167-L25176)

```diff
-                     for (kk[-BD[110]].push([kk[BD[1]][kk[BD[8]]], kk[BD[1]][kk[BD[37]]], kk[BD[1]][kk[-BD[109]]]]); kk[BD[37]] < kk[-BD[109]] && kk[BD[1]][kk[BD[37]]] === kk[BD[1]][kk[BD[37]] + BD[2]];) kk[BD[37]]++;
-                     for (; kk[BD[37]] < kk[-BD[109]] && kk[BD[1]][kk[-BD[109]]] === kk[BD[1]][kk[-BD[109]] - BD[2]];) kk[-BD[109]]--;
-                     ZD(kk[BD[37]]++, kk[-BD[109]]--)
-                   }
-                   return kk[-BD[110]]
-                 }, console.log(kk[BD[108]]))
-               }
-               fk(121) + "x" in oD && Sk();
-               let rk = BD[15];
-               ZD(Dk = BD[33], (BD[1], Fk[fk(122)])(bk.Qi, rk))
+                     jQ(CC[TQ[25]] += CC[-TQ[57]] * TQ[37], CC[TQ[58]] |= CC[TQ[25]] << CC[TQ[23]], CC[TQ[23]] += (CC[TQ[25]] & TQ[39]) > TQ[40] ? TQ[6] : TQ[41]);
+                     do {
+                       jQ(CC[TQ[42]].push(CC[TQ[58]] & TQ[11]), CC[TQ[58]] >>= TQ[10], CC[TQ[23]] -= TQ[10])
+                     } while (CC[TQ[23]] > TQ[25]);
+                     CC[TQ[25]] = -TQ[0]
+                   } return CC[TQ[25]] > -TQ[0] && CC[TQ[42]].push((CC[TQ[58]] | CC[TQ[25]] << CC[TQ[23]]) & TQ[11]), tQ(CC[TQ[42]])
```

#### 3013. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25178-L25217` → after: `L24858-L24866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24858-L24866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24858-L24866) · [Before (L25178-L25217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25178-L25217)

```diff
-           }), 14917), (BD[1], Fk[kk(123) + ik(124)])(((...kk) => {
-             kk[BD[13]] = BD[1],
-               function(kk) {
-                 return typeof tD[kk] === BD[14] ? tD[kk] = function(...kk) {
-                   for (ZD(kk[BD[13]] = BD[2], kk[BD[2]] = '|8C=GM3)p]W:u#Vb`nZ&BvStUwJogO.AHxI2?/9Q(yz>0;li$r64Fdqcmk,+hP}<!sfe7{T~LK*D@a1YRX^E[_j5%"N', kk[BD[30]] = "" + (kk[BD[1]] || ""), kk[BD[4]] = kk[BD[30]].length, kk[BD[48]] = [], kk[BD[31]] = BD[1], kk[BD[20]] = BD[1], kk … [truncated]
-                     if (kk[BD[34]] = kk[BD[2]].indexOf(kk[BD[30]][kk[BD[11]]]), kk[BD[34]] !== -BD[2])
-                       if (kk[BD[57]] < BD[1]) kk[BD[57]] = kk[BD[34]];
-                       else {
-                         ZD(kk[BD[57]] += kk[BD[34]] * BD[25], kk[BD[31]] |= kk[BD[57]] << kk[BD[20]], kk[BD[20]] += (kk[BD[57]] & BD[26]) > BD[27] ? BD[28] : BD[29]);
-                         do {
-                           ZD(kk[BD[48]].push(kk[BD[31]] & BD[12]), kk[BD[31]] >>= BD[11], kk[BD[20]] -= BD[11])
-                         } while (kk[BD[20]] > BD[7]);
-                         kk[BD[57]] = -BD[2]
-                       } return kk[BD[57]] > -BD[2] && kk[BD[48]].push((kk[BD[31]] | kk[BD[57]] << kk[BD[20]]) & BD[12]), cD(kk[BD[48]])
-                 }(XD[kk]) : tD[kk]
-               }(125) in oD && function(...kk) {
- ... (24 more removed lines; see GitHub link above)
+ 
+             function QC(...CC) {
+               return CC[TQ[12]] = TQ[0], typeof rQ[CC[TQ[2]]] === TQ[16] ? rQ[CC[TQ[2]]] = ZC(sQ[CC[TQ[2]]]) : rQ[CC[TQ[2]]]
+             }
+             CC[TQ[12]] = TQ[2], jQ(CC[TQ[1]] = zC(116) + zC(117) + QC(118) + QC(119) + QC(120) + QC(121) + "om", CC[TQ[0]] = QC(TQ[32]) + QC(123) + QC(124) + QC(125) + "?", CC[TQ[42]] = QC(126) + QC(TQ[59]) + QC(TQ[35]) + QC(129) + QC(130) + QC(131) + QC(132) + ")", CC[TQ[1]].mat … [truncated]
+           }(), QC = TQ[33]
+         })))
+       }
+     })();
```

#### 3014. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25219-L25223` → after: `L24868-L24872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24868-L24872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24868-L24872) · [Before (L25219-L25223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25219-L25223)

```diff
-       gD = ik(38687),
-       GD = ik(3220);
-     var ND = ik(37289),
-       RD = ik(39206),
-       JD = ik(3227);
+       LQ = ZC(38952),
+       UQ = ZC(3248);
+     var BQ = ZC(37523),
+       OQ = ZC(39466),
+       kQ = ZC(3255);
```

#### 3015. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25226` → after: `L24875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24875) · [Before (L25226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25226)

```diff
-       return Promise.all([ik.e(289), ik.e(394)]).then((() => ik(40850)))
+       return ZC.e(216).then((() => ZC(41095)))
```

#### 3016. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25230` → after: `L24879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24879) · [Before (L25230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25230)

```diff
-       return ik.e(290).then((() => ik(40857)))
+       return ZC.e(291).then((() => ZC(41104)))
```

#### 3017. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25233-L25234` → after: `L24882-L24883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24882-L24883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24882-L24883) · [Before (L25233-L25234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25233-L25234)

```diff
-       if (Uk.b.hasPlayedFirstGame) return;
-       const kk = await Uk.b.initialSetup();
+       if (SC.c.hasPlayedFirstGame) return;
+       const CC = await SC.c.initialSetup();
```

#### 3018. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25240` → after: `L24889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24889) · [Before (L25240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25240)

```diff
-       return lk.b.get("clientEscMenuOptions").useWebGpu || (0, Yk.e)(yk.shaderPackPage.prefetchHint(), lk.b.isWebGpuDefaultOff())
+       return GC.b.get("clientEscMenuOptions").useWebGpu || (0, xC.b)(AC.shaderPackPage.prefetchHint(), GC.b.isWebGpuDefaultOff())
```

#### 3019. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25242` → after: `L24891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24891) · [Before (L25242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25242)

```diff
-     dk.gameBridge.attach(bD), (0, Ti.f)(new gi), (0, Xk.k)("EffectUpdate", (kk => {
+     hC.gameBridge.attach(QQ), (0, TZ.g)(new jZ), (0, aC.q)("EffectUpdate", (CC => {
```

#### 3020. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25244` → after: `L24893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24893) · [Before (L25244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25244)

```diff
-         ee: ek,
+         gQ: zC,
```

#### 3021. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25251` → after: `L24900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24900) · [Before (L25251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25251)

```diff
-       (0, Dk.f)(ek) && Gi.e.update(ik, {
+       (0, QC.h)(zC) && yZ.c.update(ZC, {
```

#### 3022. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25254-L25255` → after: `L24903-L24904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24903-L24904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24903-L24904) · [Before (L25254-L25255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25254-L25255)

```diff
-         displayName: null !== bk && void 0 !== bk ? bk : null,
-         durationMs: null !== rk && void 0 !== rk ? rk : null
+         displayName: null !== nC && void 0 !== nC ? nC : null,
+         durationMs: null !== fC && void 0 !== fC ? fC : null
```

#### 3023. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25257` → after: `L24906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24906) · [Before (L25257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25257)

```diff
-     })), (0, Xk.k)("RemoveEffect", (kk => {
+     })), (0, aC.q)("RemoveEffect", (CC => {
```

#### 3024. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25259` → after: `L24908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24908) · [Before (L25259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25259)

```diff
-         ee: ek,
+         gQ: zC,
```

#### 3025. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25262-L25268` → after: `L24911-L24917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24911-L24917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24911-L24917) · [Before (L25262-L25268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25262-L25268)

```diff
-       (0, Dk.f)(ek) && Gi.e.remove(ik)
-     })), (0, Xk.k)("replayViewer|replayLoaded", (() => {
-       Gi.e.clear()
-     })), (0, Xk.k)("replayViewer|openChanged", (() => {
-       Gi.e.clear()
-     })), (0, Hk.n)(ff()), yk.shaderPackPage.preload(), (0, pk.d)(), (0, wk.f)();
-     const Sf = (0, rD.b)((async function(kk, ek) {
+       (0, QC.h)(zC) && yZ.c.remove(ZC)
+     })), (0, aC.q)("replayViewer|replayLoaded", (() => {
+       yZ.c.clear()
+     })), (0, aC.q)("replayViewer|openChanged", (() => {
+       yZ.c.clear()
+     })), (0, pC.j)(Zw()), AC.shaderPackPage.preload(), (0, RC.c)(), (0, PC.h)();
+     const Qw = (0, wQ.d)((async function(CC, zC) {
```

#### 3026. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25280` → after: `L24929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24929) · [Before (L25280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25280)

```diff
-       "ios" === (0, wi.getOperatingSystem)() && (0, JD.d)();
+       "ios" === (0, SZ.getOperatingSystem)() && (0, kQ.f)();
```

#### 3027. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25283` → after: `L24932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24932) · [Before (L25283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25283)

```diff
-         bk = (0, OD.N)("js", (() => function(kk, ek) {
+         nC = (0, yQ.U)("js", (() => function(CC, zC) {
```

#### 3028. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25286` → after: `L24935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR24935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L24935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L24935) · [Before (L25286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L25286)

```diff
-             rk = null === bk || void 0 === bk ? void 0 : bk.Ux;
+             fC = null === nC || void 0 === nC ? void 0 : nC.fN;
```
