# Changed — Bundle Modifications Report (Part 102 / 137)

- **Updated at**: `2026-11-25T07:51 JST`
- **Part**: `102 / 137` (**416** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 101](part-101.md) · [Part 103 →](part-103.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/94.js` (7zvlu.7df130a9 → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/94.js` (3778 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030)

#### 2725. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24541` → after: `L24553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24553) · [Before (L24541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24541)

```diff
-             str: null !== QB && void 0 !== QB ? QB : (0, fB.m)(nB),
+             str: null !== TB && void 0 !== TB ? TB : (0, iB.n)(JB),
```

#### 2726. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24548-L24549` → after: `L24560-L24561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24560-L24561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24560-L24561) · [Before (L24548-L24549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24548-L24549)

```diff
-           }, null !== (zB = NB.style) && void 0 !== zB && zB.fontSize ? NB.style.fontSize.endsWith("px") || console.warn(new Error("Canvas text font size should be in px").stack) : NB.style ? NB.style.fontSize = `${jB}px` : NB.style = {
-             fontSize: `${jB}px`
+           }, null !== (ZB = vB.style) && void 0 !== ZB && ZB.fontSize ? vB.style.fontSize.endsWith("px") || console.warn(new Error("Canvas text font size should be in px").stack) : vB.style ? vB.style.fontSize = `${IB}px` : vB.style = {
+             fontSize: `${IB}px`
```

#### 2727. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24553-L24555` → after: `L24565-L24567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24565-L24567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24565-L24567) · [Before (L24553-L24555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24553-L24555)

```diff
-             const jB = nB.c.get().getCurrentLanguageCode(),
-               zB = (0, QB.p)(BB.str.params, MB.b.shown),
-               dB = (0, QB.w)(jB, BB.str.translationKey, zB);
+             const IB = JB.h.get().getCurrentLanguageCode(),
+               ZB = (0, TB.s)(BB.str.params, sB.b.shown),
+               oB = (0, TB.y)(IB, BB.str.translationKey, ZB);
```

#### 2728. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24593` → after: `L24605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24605) · [Before (L24593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24593)

```diff
-       const QB = null !== (jB = eB(BB) ? null === (zB = BB.style) || void 0 === zB ? void 0 : zB.fontSize : void 0) && void 0 !== jB ? jB : `${XB.DEFAULT_FONT_SIZE}px`;
+       const TB = null !== (IB = fB(BB) ? null === (ZB = BB.style) || void 0 === ZB ? void 0 : ZB.fontSize : void 0) && void 0 !== IB ? IB : `${rB.DEFAULT_FONT_SIZE}px`;
```

#### 2729. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24598` → after: `L24610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24610) · [Before (L24598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24598)

```diff
-       const jB = (0, IB.b)(BB, (0, IB.i)(BB));
+       const IB = (0, GB.b)(BB, (0, GB.j)(BB));
```

#### 2730. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24610-L24612` → after: `L24622-L24624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24622-L24624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24622-L24624) · [Before (L24610-L24612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24610-L24612)

```diff
-         const jB = nB.c.get().getCurrentLanguageCode(),
-           zB = (0, QB.p)(BB.str.params, MB.b.shown);
-         return (0, QB.z)(jB, BB.str.translationKey, zB)
+         const IB = JB.h.get().getCurrentLanguageCode(),
+           ZB = (0, TB.s)(BB.str.params, sB.b.shown);
+         return (0, TB.C)(IB, BB.str.translationKey, ZB)
```

#### 2731. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24614` → after: `L24626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24626) · [Before (L24614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24614)

```diff
-       return "entityName" in BB.str ? (0, SB.h)(BB.str.entityName, MB.b.shown) : ""
+       return "entityName" in BB.str ? (0, QB.e)(BB.str.entityName, sB.b.shown) : ""
```

#### 2732. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24618` → after: `L24630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24630) · [Before (L24618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24618)

```diff
-       if ((0, tB.I)(BB) || 0 === BB.length) return {
+       if ((0, CB.L)(BB) || 0 === BB.length) return {
```

#### 2733. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24695` → after: `L24707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24707) · [Before (L24695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24695)

```diff
-           const pB = (0, aB.e)(nB);
+           const hB = (0, nB.g)(JB);
```

#### 2734. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24711` → after: `L24723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24723) · [Before (L24711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24711)

```diff
-           const mB = (0, DB.j)(BB.icon, QB);
+           const gB = (0, HB.k)(BB.icon, TB);
```

#### 2735. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24714` → after: `L24726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24726) · [Before (L24714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24714)

```diff
-               const jB = (0, HB.i)(BB);
+               const IB = (0, aB.k)(BB);
```

#### 2736. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24719-L24720` → after: `L24731-L24732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24731-L24732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24731-L24732) · [Before (L24719-L24720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24719-L24720)

```diff
-               if (NB.c.includes(BB)) return {
-                 url: qB.e.getTexture(BB, iB.k.ICON).url,
+               if (vB.d.includes(BB)) return {
+                 url: YB.e.getTexture(BB, OB.m.ICON).url,
```

#### 2737. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24725-L24726` → after: `L24737-L24738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24737-L24738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24737-L24738) · [Before (L24725-L24726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24725-L24726)

```diff
-                 const jB = null === (zB = UB.i.itemsClient[BB]) || void 0 === zB ? void 0 : zB.type;
-                 return Nj.includes(jB) ? (console.error(new Error(`Invalid icon type ${jB} is not supported in nametags`).stack), {
+                 const IB = null === (ZB = cB.l.itemsClient[BB]) || void 0 === ZB ? void 0 : ZB.type;
+                 return vI.includes(IB) ? (console.error(new Error(`Invalid icon type ${IB} is not supported in nametags`).stack), {
```

#### 2738. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24729` → after: `L24741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24741) · [Before (L24729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24729)

```diff
-                 }) : (0, FB.b)(jB) ? {
+                 }) : (0, MB.d)(IB) ? {
```

#### 2739. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24732` → after: `L24744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24744) · [Before (L24732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24732)

```diff
-                 } : "GrayscaleArmour" === jB || uB.c[BB] ? {
+                 } : "GrayscaleArmour" === IB || kB.e[BB] ? {
```

#### 2740. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24744` → after: `L24756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24756) · [Before (L24744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24744)

```diff
-           if ((0, FB.b)(null === (dB = UB.i.itemsClient[BB.icon]) || void 0 === dB ? void 0 : dB.type)) {
+           if ((0, MB.d)(null === (oB = cB.l.itemsClient[BB.icon]) || void 0 === oB ? void 0 : oB.type)) {
```

#### 2741. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24746-L24747` → after: `L24758-L24759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24758-L24759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24758-L24759) · [Before (L24746-L24747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24746-L24747)

```diff
-             if (!UB.i.itemsClient[jB].itemTexture) return void(0, DB.i)(jB, QB).then((BB => {
-               JB(BB), (0, GB.m)(nB)
+             if (!cB.l.itemsClient[IB].itemTexture) return void(0, HB.h)(IB, TB).then((BB => {
+               NB(BB), (0, UB.g)(JB)
```

#### 2742. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24760` → after: `L24772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24772) · [Before (L24760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24760)

```diff
-               return IB.drawImage(BB, 0, 0), IB.globalCompositeOperation = "multiply", IB.fillStyle = `rgb(${zB}, ${QB}, ${nB})`, IB.fillRect(0, 0, dB.width, dB.height), IB.globalCompositeOperation = "destination-in", IB.drawImage(BB, 0, 0), dB
+               return GB.drawImage(BB, 0, 0), GB.globalCompositeOperation = "multiply", GB.fillStyle = `rgb(${ZB}, ${TB}, ${JB})`, GB.fillRect(0, 0, oB.width, oB.height), GB.globalCompositeOperation = "destination-in", GB.drawImage(BB, 0, 0), oB
```

#### 2743. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24762` → after: `L24774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24774) · [Before (L24762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24762)

```diff
-             hB[BB.icon] = jB, JB(jB), (0, GB.m)(nB)
+             RB[BB.icon] = IB, NB(IB), (0, UB.g)(JB)
```

#### 2744. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24765` → after: `L24777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24777) · [Before (L24765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24765)

```diff
-             JB(gB), (0, GB.m)(nB)
+             NB(dB), (0, UB.g)(JB)
```

#### 2745. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24769` → after: `L24781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24781) · [Before (L24769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24769)

```diff
-       const sB = (0, aB.e)(nB);
+       const FB = (0, nB.g)(JB);
```

#### 2746. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24771` → after: `L24783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24783) · [Before (L24771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24771)

```diff
-         const nB = null !== IB && void 0 !== IB ? IB : vB(BB, sB);
+         const JB = null !== GB && void 0 !== GB ? GB : KB(BB, FB);
```

#### 2747. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24780` → after: `L24792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24792) · [Before (L24780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24780)

```diff
-             JB = "string" === typeof sB ? sB : sB.join(" "),
+             NB = "string" === typeof FB ? FB : FB.join(" "),
```

#### 2748. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24795-L24796` → after: `L24807-L24808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24807-L24808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24807-L24808) · [Before (L24795-L24796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24795-L24796)

```diff
-       const yB = null !== IB && void 0 !== IB ? IB : vB(BB, sB),
-         kB = eB(BB) && null !== (pB = (0, dB.Kb)(BB.style)) && void 0 !== pB ? pB : "white";
+       const qB = null !== GB && void 0 !== GB ? GB : KB(BB, FB),
+         yB = fB(BB) && null !== (hB = (0, oB.gc)(BB.style)) && void 0 !== hB ? hB : "white";
```

#### 2749. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24819` → after: `L24831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24831) · [Before (L24819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24819)

```diff
-         const QB = null !== (jB = null === (zB = BB.style) || void 0 === zB ? void 0 : zB.fontSize) && void 0 !== jB ? jB : `${XB.DEFAULT_FONT_SIZE}px`;
+         const TB = null !== (IB = null === (ZB = BB.style) || void 0 === ZB ? void 0 : ZB.fontSize) && void 0 !== IB ? IB : `${rB.DEFAULT_FONT_SIZE}px`;
```

#### 2750. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24829-L24830` → after: `L24841-L24842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24841-L24842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24841-L24842) · [Before (L24829-L24830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24829-L24830)

```diff
-       const IB = BB.pm.aY(),
-         NB = (0, GB.g)(BB, `${zB}Tex`, QB, nB, {
+       const GB = BB.Ig.JR(),
+         vB = (0, UB.d)(BB, `${ZB}Tex`, TB, JB, {
```

#### 2751. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24834` → after: `L24846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24846) · [Before (L24834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24834)

```diff
-         uB = (0, rB.l)(BB.pm, zB, (0, sB.f)({
+         kB = (0, zB.n)(BB.Ig, ZB, (0, FB.f)({
```

#### 2752. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24838-L24839` → after: `L24850-L24851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24850-L24851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24850-L24851) · [Before (L24838-L24839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24838-L24839)

```diff
-       uB.metadata = new BB.pm.Uy, uB.metadata[JB.x] = !0, uB.billboardMode = mB.e.BILLBOARDMODE_ALL, uB.renderingGroupId = yB.e;
-       const UB = BB.vG.add([0, 0, 0], 1, 1, uB, [0, 0, 0]);
+       kB.metadata = new BB.Ig.bg, kB.metadata[NB.x] = !0, kB.billboardMode = gB.d.BILLBOARDMODE_ALL, kB.renderingGroupId = qB.d;
+       const cB = BB.zW.add([0, 0, 0], 1, 1, kB, [0, 0, 0]);
```

#### 2753. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24841-L24842` → after: `L24853-L24854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24853-L24854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24853-L24854) · [Before (L24841-L24842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24841-L24842)

```diff
-       BB.vG.hY(UB, BB.vG.names.qS, {
-         SJ: jB
+       BB.zW.xR(cB, BB.zW.names.nC, {
+         zN: IB
```

#### 2754. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24847-L24848` → after: `L24859-L24860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24859-L24860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24859-L24860) · [Before (L24847-L24848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24847-L24848)

```diff
-         name: `${zB}Mat`,
-         ny: IB,
+         name: `${ZB}Mat`,
+         lg: GB,
```

#### 2755. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24853` → after: `L24865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24865) · [Before (L24853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24853)

```diff
-           ...(0, GB.k)(NB)
+           ...(0, UB.f)(vB)
```

#### 2756. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24856` → after: `L24868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24868) · [Before (L24856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24856)

```diff
-           (0, GB.d)(jB, "planes"), aB = (0, gB.b)(jB, BB.pm, dB ? {
+           (0, UB.b)(IB, "planes"), nB = (0, dB.c)(IB, BB.Ig, oB ? {
```

#### 2757. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24866` → after: `L24878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24878) · [Before (L24866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24866)

```diff
-       return uB.material = tB, dB ? BB.vG.ujB(UB).qzB = !1 : (0, kB.c)(uB), uB.pY.add((() => {
+       return kB.material = CB, oB ? BB.zW.RIB(cB).ITB = !1 : (0, yB.g)(kB), kB.oR.add((() => {
```

#### 2758. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24879-L24880` → after: `L24891-L24892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24891-L24892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24891-L24892) · [Before (L24879-L24880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24879-L24880)

```diff
-       const nB = (0, yB.m)(jB, zB, QB);
-       return BB.renderingGroupId = nB ? yB.e : yB.i, nB
+       const JB = (0, qB.p)(IB, ZB, TB);
+       return BB.renderingGroupId = JB ? qB.d : qB.k, JB
```

#### 2759. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24883` → after: `L24895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24895) · [Before (L24883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24883)

```diff
-   38785: (BB, jB, zB) => {
+   38721: (BB, IB, ZB) => {
```

#### 2760. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24886-L24888` → after: `L24899-L24900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24899-L24900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24899-L24900) · [Before (L24886-L24888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24886-L24888)

```diff
-       g: () => IB,
-       k: () => uB,
-       m: () => NB
+       f: () => kB,
+       g: () => vB
```

#### 2761. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24890-L24892` → after: `L24902-L24904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24902-L24904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24902-L24904) · [Before (L24890-L24892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24890-L24892)

```diff
-     var QB = zB(37408),
-       nB = zB(37300),
-       dB = zB(38794);
+     var TB = ZB(37336),
+       JB = ZB(37243),
+       oB = ZB(38726);
```

#### 2762. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24896` → after: `L24908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24908) · [Before (L24896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24896)

```diff
-           return !BB.pm.engine.needPOTTextures
+           return !BB.Ig.engine.needPOTTextures
```

#### 2763. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24899` → after: `L24911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24911) · [Before (L24899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24899)

```diff
-       return (0, QB.g)(BB.pm.aY(), jB, {
+       return (0, TB.k)(BB.Ig.JR(), IB, {
```

#### 2764. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24909` → after: `L24921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24921) · [Before (L24909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24909)

```diff
-       (0, QB.I)(BB, !0, !BB.sampler.noMipmap)
+       (0, TB.T)(BB, !0, !BB.sampler.noMipmap)
```

#### 2765. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24918` → after: `L24930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24930) · [Before (L24918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24918)

```diff
-         alphaMode: nB.b.premultiplied,
+         alphaMode: JB.e.premultiplied,
```

#### 2766. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24924-L24925` → after: `L24936-L24937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24936-L24937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24936-L24937) · [Before (L24924-L24925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24924-L24925)

```diff
-       BB.diffuseTexture.sampler.noMipmap || (0, nB.s)(BB, dB.h, {
-         lodBias: dB.d[jB]
+       BB.diffuseTexture.sampler.noMipmap || (0, JB.r)(BB, oB.h, {
+         lodBias: oB.e[IB]
```

#### 2767. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24929` → after: `L24941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24941) · [Before (L24929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24929)

```diff
-   39307: (BB, jB, zB) => {
+   39281: (BB, IB, ZB) => {
```

#### 2768. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24936-L24940` → after: `L24948-L24952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24948-L24952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24948-L24952) · [Before (L24936-L24940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24936-L24940)

```diff
-     var QB = zB(106),
-       nB = zB(41),
-       dB = (zB(3577), zB(5115), zB(3572)),
-       IB = zB(6606);
-     zB(6585);
+     var TB = ZB(105),
+       JB = ZB(36),
+       oB = (ZB(3649), ZB(5204), ZB(3640)),
+       GB = ZB(6808);
+     ZB(6778);
```

#### 2769. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24950-L24951` → after: `L24962-L24963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24962-L24963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24962-L24963) · [Before (L24950-L24951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24950-L24951)

```diff
-           if ((0, dB.k)(QB.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), UB().then((BB => {
-             BB && nB.j.removeItem(dB.e)
+           if ((0, oB.i)(TB.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), cB().then((BB => {
+             BB && JB.m.removeItem(oB.e)
```

#### 2770. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24979` → after: `L24991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L24991) · [Before (L24979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24979)

```diff
-         return this.compiling ??= Promise.all([zB.e(78), zB.e(136), zB.e(142)]).then((() => zB(41831))).then((BB => (BB.prefetchCompiler(), BB))), this.compiling
+         return this.compiling ??= Promise.all([ZB.e(78), ZB.e(136), ZB.e(142)]).then((() => ZB(41763))).then((BB => (BB.prefetchCompiler(), BB))), this.compiling
```

#### 2771. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24993` → after: `L25005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25005) · [Before (L24993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24993)

```diff
-       if (!(0, dB.o)(QB.featureFlags.settings.canUseShaderPacks)) return null;
+       if (!(0, oB.j)(TB.featureFlags.settings.canUseShaderPacks)) return null;
```

#### 2772. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24995-L24996` → after: `L25007-L25008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25007-L25008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25007-L25008) · [Before (L24995-L24996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24995-L24996)

```diff
-         const BB = await (0, IB.h)(!0);
-         return BB || nB.j.setItem(dB.e, !1), BB
+         const BB = await (0, GB.i)(!0);
+         return BB || JB.m.setItem(oB.e, !1), BB
```

#### 2773. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24998` → after: `L25010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25010) · [Before (L24998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L24998)

```diff
-         return console.error("Failed to read the stored shader pack", BB), nB.j.removeItem(dB.e), null
+         return console.error("Failed to read the stored shader pack", BB), JB.m.removeItem(oB.e), null
```

#### 2774. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25009` → after: `L25021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25021) · [Before (L25009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25009)

```diff
-   39352: (BB, jB, zB) => {
+   39328: (BB, IB, ZB) => {
```

#### 2775. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25011-L25012` → after: `L25023-L25024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25023-L25024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25023-L25024) · [Before (L25011-L25012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25011-L25012)

```diff
-       c: () => pB,
-       d: () => rB
+       e: () => hB,
+       g: () => zB
```

#### 2776. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25014-L25021` → after: `L25026-L25033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25026-L25033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25026-L25033) · [Before (L25014-L25021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25014-L25021)

```diff
-     var QB = zB(174),
-       nB = zB(201),
-       dB = zB(1523),
-       IB = zB(3036),
-       NB = zB(1532),
-       uB = zB(36538),
-       UB = zB(701),
-       aB = zB(39307);
+     var TB = ZB(168),
+       JB = ZB(192),
+       oB = ZB(1556),
+       GB = ZB(3101),
+       vB = ZB(1561),
+       kB = ZB(36492),
+       cB = ZB(696),
+       nB = ZB(39281);
```

#### 2777. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25024` → after: `L25036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25036) · [Before (L25024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25024)

```diff
-       (0, IB.reportClientError)("matchmake_failed", BB, QB.j[QB.j.SHADER_PACK])
+       (0, GB.reportClientError)("matchmake_failed", BB, TB.l[TB.l.SHADER_PACK])
```

#### 2778. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25029-L25030` → after: `L25041-L25042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25041-L25042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25041-L25042) · [Before (L25029-L25030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25029-L25030)

```diff
-         IB = (0, uB.b)();
-       QB && null !== IB && await NB.b.reportShaderPackSession(BB, {
+         GB = (0, kB.c)();
+       TB && null !== GB && await vB.c.reportShaderPackSession(BB, {
```

#### 2779. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25033` → after: `L25045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25045) · [Before (L25033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25033)

```diff
-         game: (0, dB.c)(jB, nB.u, "other"),
+         game: (0, oB.g)(IB, JB.r, "other"),
```

#### 2780. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25035` → after: `L25047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25047) · [Before (L25035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25035)

```diff
-         visitSessionId: (0, UB.h)()
+         visitSessionId: (0, cB.i)()
```

#### 2781. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25039` → after: `L25051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25051) · [Before (L25039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25039)

```diff
-   6585: (BB, jB, zB) => {
+   6778: (BB, IB, ZB) => {
```

#### 2782. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25044` → after: `L25056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25056) · [Before (L25044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25044)

```diff
-     var QB = zB(5120);
+     var TB = ZB(5210);
```

#### 2783. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25049` → after: `L25061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25061) · [Before (L25049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25049)

```diff
-       return dB ??= Promise.all([zB.e(73), zB.e(190)]).then((() => zB(40588))).then((BB => {
+       return oB ??= Promise.all([ZB.e(73), ZB.e(190)]).then((() => ZB(40534))).then((BB => {
```

#### 2784. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25055` → after: `L25067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25067) · [Before (L25055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25055)

```diff
-         return nB ??= (0, QB.j)(zB, dB, jB), nB
+         return JB ??= (0, TB.l)(ZB, oB, IB), JB
```

#### 2785. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25064` → after: `L25076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25076) · [Before (L25064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25064)

```diff
-   34171: (BB, jB, zB) => {
+   34095: (BB, IB, ZB) => {
```

#### 2786. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25069` → after: `L25081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25081) · [Before (L25069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25069)

```diff
-       d: () => QB
+       e: () => TB
```

#### 2787. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25072` → after: `L25084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25084) · [Before (L25072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25072)

```diff
-   39337: (BB, jB, zB) => {
+   39310: (BB, IB, ZB) => {
```

#### 2788. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25085` → after: `L25097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25097) · [Before (L25085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25085)

```diff
-           }] = await Promise.all([Promise.resolve().then((() => zB(1778))), Promise.resolve().then((() => zB(1381)))]);
+           }] = await Promise.all([Promise.resolve().then((() => ZB(1805))), Promise.resolve().then((() => ZB(1403)))]);
```

#### 2789. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25101` → after: `L25113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25113) · [Before (L25101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25101)

```diff
-   39700: (BB, jB, zB) => {
+   39683: (BB, IB, ZB) => {
```

#### 2790. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25103-L25105` → after: `L25115-L25117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25115-L25117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25115-L25117) · [Before (L25103-L25105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25103-L25105)

```diff
-       d: () => QB,
-       f: () => dB,
-       i: () => nB
+       e: () => TB,
+       g: () => oB,
+       k: () => JB
```

#### 2791. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25139` → after: `L25151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25151) · [Before (L25139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25139)

```diff
-   39677: (BB, jB, zB) => {
+   39668: (BB, IB, ZB) => {
```

#### 2792. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25141` → after: `L25153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25153) · [Before (L25141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25141)

```diff
-       b: () => nB
+       e: () => JB
```

#### 2793. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25143` → after: `L25155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25155) · [Before (L25143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25143)

```diff
-     var QB = zB(1948);
+     var TB = ZB(1956);
```

#### 2794. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25146` → after: `L25158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25158) · [Before (L25146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25146)

```diff
-       return (0, QB.s)(BB, jB) < zB
+       return (0, TB.p)(BB, IB) < ZB
```

#### 2795. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25149` → after: `L25161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25161) · [Before (L25149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25149)

```diff
-   37102: (BB, jB, zB) => {
+   37048: (BB, IB, ZB) => {
```

#### 2796. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25151` → after: `L25163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25163) · [Before (L25151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25151)

```diff
-       e: () => QB.i
+       c: () => TB.f
```

#### 2797. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25153` → after: `L25165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25165) · [Before (L25153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25153)

```diff
-     var QB = zB(9266)
+     var TB = ZB(9296)
```

#### 2798. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25155` → after: `L25167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25167) · [Before (L25155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25155)

```diff
-   37104: (BB, jB, zB) => {
+   37052: (BB, IB, ZB) => {
```

#### 2799. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25159` → after: `L25171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25171) · [Before (L25159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25159)

```diff
-     var QB = zB(37109)
+     var TB = ZB(37060)
```

#### 2800. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25161` → after: `L25173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25173) · [Before (L25161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25161)

```diff
-   37099: (BB, jB, zB) => {
+   37042: (BB, IB, ZB) => {
```

#### 2801. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25165` → after: `L25177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25177) · [Before (L25165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25165)

```diff
-     const QB = [() => zB(37102).e, () => zB(37104).b, () => zB(36590).e, () => zB(37151).d, () => zB(37735).getCaughtUpMeshRotation, () => zB(37759).tickMovementPrePhysics, () => zB(37784).e, () => [zB(37844).tickMovementInputsPrePhysics, zB(37879).t, zB(38099).c, zB(38120).b], ( … [truncated]
+     const TB = [() => ZB(37048).c, () => ZB(37052).b, () => ZB(36542).b, () => ZB(37101).h, () => ZB(37685).getCaughtUpMeshRotation, () => ZB(37713).tickMovementPrePhysics, () => ZB(37749).b, () => [ZB(37809).tickMovementInputsPrePhysics, ZB(37840).A, ZB(38075).b, ZB(38094).d], ( … [truncated]
```

#### 2802. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25168` → after: `L25180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25180) · [Before (L25168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25168)

```diff
-       return await BB(), zB(39675)
+       return await BB(), ZB(39664)
```

#### 2803. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25171` → after: `L25183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25183) · [Before (L25171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25171)

```diff
-   38875: (BB, jB, zB) => {
+   38816: (BB, IB, ZB) => {
```

#### 2804. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25177-L25180` → after: `L25188-L25192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25188-L25192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25188-L25192) · [Before (L25177-L25180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25177-L25180)

```diff
-       j: () => pB,
-       m: () => aB,
-       n: () => IB,
-       p: () => JB
+       l: () => qB,
+       p: () => hB,
+       q: () => nB,
+       t: () => GB,
+       x: () => NB
```

#### 2805. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25182-L25183` → after: `L25194-L25195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25194-L25195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25194-L25195) · [Before (L25182-L25183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25182-L25183)

```diff
-     var QB = zB(355),
-       nB = zB(1760);
+     var TB = ZB(339),
+       JB = ZB(1787);
```

#### 2806. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25212` → after: `L25224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25224) · [Before (L25212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25212)

```diff
-         const zB = null !== (jB = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(BB)) && void 0 !== jB ? jB : /failed with ([A-Z][A-Z0-9_]+)/.exec(BB);
+         const ZB = null !== (IB = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(BB)) && void 0 !== IB ? IB : /failed with ([A-Z][A-Z0-9_]+)/.exec(BB);
```

#### 2807. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25230` → after: `L25242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25242) · [Before (L25230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25230)

```diff
-       const nB = (0, QB.f)(),
+       const JB = (0, TB.g)(),
```

#### 2808. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25233` → after: `L25245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25245) · [Before (L25233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25233)

```diff
-         NB = dB ? zB - nB : null;
+         vB = oB ? ZB - JB : null;
```

#### 2809. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25235-L25236` → after: `L25247-L25248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25247-L25248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25247-L25248) · [Before (L25235-L25236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25235-L25236)

```diff
-         page: null === NB ? IB : `${IB}${rB(NB)}`,
-         code: `${BB}_${null===NB?IB:`${IB}_${sB(NB)}`}_${mB(zB)}`
+         page: null === vB ? GB : `${GB}${zB(vB)}`,
+         code: `${BB}_${null===vB?GB:`${GB}_${FB(vB)}`}_${gB(ZB)}`
```

#### 2810. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25241` → after: `L25253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25253) · [Before (L25241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25241)

```diff
-       if ((0, nB.i)()) return "ad_open";
+       if ((0, JB.g)()) return "ad_open";
```

#### 2811. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25243` → after: `L25255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25255) · [Before (L25243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25243)

```diff
-       return null === jB ? "ad_none" : `ad_${sB(BB-jB.endedAt)}_${jB.pageHid?"h":"v"}`
+       return null === IB ? "ad_none" : `ad_${FB(BB-IB.endedAt)}_${IB.pageHid?"h":"v"}`
```

#### 2812. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25259` → after: `L25271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25271) · [Before (L25259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25259)

```diff
-       }))) && void 0 !== zB ? zB : BB[BB.length - 1]
+       }))) && void 0 !== ZB ? ZB : BB[BB.length - 1]
```

#### 2813. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25262` → after: `L25274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25274) · [Before (L25262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25262)

```diff
-   39675: (BB, jB, zB) => {
+   39664: (BB, IB, ZB) => {
```

#### 2814. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25264` → after: `L25276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25276) · [Before (L25264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25264)

```diff
-       InGameUi: () => nB.b,
+       InGameUi: () => JB.d,
```

#### 2815. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25272-L25280` → after: `L25284-L25292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25284-L25292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25284-L25292) · [Before (L25272-L25280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25272-L25280)

```diff
-     var QB = zB(36843),
-       nB = zB(36577),
-       dB = zB(1173),
-       IB = zB(3849),
-       NB = zB(698),
-       uB = zB(9109),
-       UB = zB(1253),
-       aB = zB(1325),
-       pB = zB(36568);
+     var TB = ZB(36794),
+       JB = ZB(36535),
+       oB = ZB(1186),
+       GB = ZB(3911),
+       vB = ZB(694),
+       kB = ZB(9155),
+       cB = ZB(1261),
+       nB = ZB(1362),
+       hB = ZB(36516);
```

#### 2816. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25297` → after: `L25309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25309) · [Before (L25297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25297)

```diff
-         return Promise.reject(new Error(`Matchmake answer holds no seat (${typeof BB}): ${String(jB).slice(0,150)}`))
+         return Promise.reject(new Error(`Matchmake answer holds no seat (${typeof BB}): ${String(IB).slice(0,150)}`))
```

#### 2817. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25302` → after: `L25314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25314) · [Before (L25302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25302)

```diff
-           if (BB.aborted) return void QB((0, UB.f)(BB));
+           if (BB.aborted) return void TB((0, cB.e)(BB));
```

#### 2818. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25305` → after: `L25317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25317) · [Before (L25305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25305)

```diff
-               nB.giveUp((0, UB.f)(BB))
+               JB.giveUp((0, cB.e)(BB))
```

#### 2819. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25320` → after: `L25332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25332) · [Before (L25320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25320)

```diff
-         if (null !== zB && void 0 !== zB && zB.givenUp) throw new pB.h(zB.leg);
+         if (null !== ZB && void 0 !== ZB && ZB.givenUp) throw new hB.f(ZB.leg);
```

#### 2820. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25327-L25328` → after: `L25339-L25340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25339-L25340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25339-L25340) · [Before (L25327-L25328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25327-L25328)

```diff
-         this.reject = BB, this.room = null, this.opened = !1, this.wasGivenUp = !1, this.countdown = void 0, this.countdown = new pB.d((() => {
-           this.giveUp(new pB.h(this.leg))
+         this.reject = BB, this.room = null, this.opened = !1, this.wasGivenUp = !1, this.countdown = void 0, this.countdown = new hB.c((() => {
+           this.giveUp(new hB.f(this.leg))
```

#### 2821. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25342` → after: `L25354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25354) · [Before (L25342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25342)

```diff
-             this.opened = !0, this.countdown.socketOpened(), (0, aB.r)("wasm_socket_open", performance.now())
+             this.opened = !0, this.countdown.socketOpened(), (0, nB.n)("wasm_socket_open", performance.now())
```

#### 2822. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25359-L25375` → after: `L25371-L25387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25371-L25387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25371-L25387) · [Before (L25359-L25375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25359-L25375)

```diff
-     var JB = zB(1244),
-       mB = zB(38752),
-       yB = zB(38842),
-       kB = zB(36334),
-       GB = zB(28),
-       LB = zB(36522),
-       gB = zB(39307),
-       tB = zB(34171),
-       SB = zB(37426),
-       MB = zB(4750),
-       EB = zB(1357),
-       iB = zB(2863),
-       qB = zB(37089),
-       fB = zB(1982),
-       oB = zB(1270),
-       HB = zB(3798),
- ... (1 more removed lines; see GitHub link above)
+     var NB = ZB(1258),
+       gB = ZB(38687),
+       qB = ZB(38779),
+       yB = ZB(36276),
+       UB = ZB(20),
+       WB = ZB(36478),
+       dB = ZB(39281),
+       CB = ZB(34095),
+       QB = ZB(37350),
+       sB = ZB(4838),
+       wB = ZB(1382),
+       OB = ZB(2912),
+       YB = ZB(37031),
+       iB = ZB(1995),
+       pB = ZB(1300),
+       aB = ZB(3854),
+ ... (1 more added lines; see GitHub link above)
```

#### 2823. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25379-L25382` → after: `L25391-L25394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25391-L25394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25391-L25394) · [Before (L25379-L25382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25379-L25382)

```diff
-           const zB = (0, iB.g)();
-           if (!zB || null !== (jB = zB.vG.JjB(zB.zV)) && void 0 !== jB && jB.crouching) return !1;
-           const QB = (0, iB.c)();
-           return (0, DB.b)(QB.getLifeformEyePos(zB.zV, !1), BB, QB.getBlockReach(zB.zV))
+           const ZB = (0, OB.h)();
+           if (!ZB || null !== (IB = ZB.zW.uIB(ZB.Jm)) && void 0 !== IB && IB.crouching) return !1;
+           const TB = (0, OB.d)();
+           return (0, HB.e)(TB.getLifeformEyePos(ZB.Jm, !1), BB, TB.getBlockReach(ZB.Jm))
```

#### 2824. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25389-L25391` → after: `L25401-L25403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25401-L25403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25401-L25403) · [Before (L25389-L25391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25389-L25391)

```diff
-               la: !1,
-               rI: BB,
-               sI: null
+               Dn: !1,
+               JG: BB,
+               oG: null
```

#### 2825. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25393` → after: `L25405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25405) · [Before (L25393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25393)

```diff
-             (0, HB.sendColyMessage)(IB.Qh, {
+             (0, aB.sendColyMessage)(GB.zh, {
```

#### 2826. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25395-L25396` → after: `L25407-L25408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25407-L25408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25407-L25408) · [Before (L25395-L25396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25395-L25396)

```diff
-               ea: oB.c.DownFirePrimary
-             }, !0), (0, HB.sendColyMessage)(IB.Qh, {
+               En: pB.d.DownFirePrimary
+             }, !0), (0, aB.sendColyMessage)(GB.zh, {
```

#### 2827. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25398` → after: `L25410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25410) · [Before (L25398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25398)

```diff
-               ea: oB.c.UpFirePrimary
+               En: pB.d.UpFirePrimary
```

#### 2828. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25403` → after: `L25415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25415) · [Before (L25403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25403)

```diff
-     var VB = zB(386),
+     var PB = ZB(364),
```

#### 2829. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25405` → after: `L25417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25417) · [Before (L25405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25405)

```diff
-       XB = zB(38520);
+       rB = ZB(38474);
```

#### 2830. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25409` → after: `L25421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25421) · [Before (L25409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25409)

```diff
-       (0, HB.sendColyMessage)(IB.bi, BB, !0)
+       (0, aB.sendColyMessage)(GB.Mh, BB, !0)
```

#### 2831. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25413-L25415` → after: `L25425-L25427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25425-L25427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25425-L25427) · [Before (L25413-L25415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25413-L25415)

```diff
-       (0, HB.sendColyMessage)(IB.di, {
-         HN: BB,
-         DN: "a"
+       (0, aB.sendColyMessage)(GB.Nh, {
+         Qv: BB,
+         sv: "a"
```

#### 2832. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25420` → after: `L25432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25432) · [Before (L25420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25420)

```diff
-         const jB = (0, iB.g)();
+         const IB = (0, OB.h)();
```

#### 2833. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25443` → after: `L25455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25455) · [Before (L25443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25443)

```diff
-         XB.f.setMultiplierType(XB.e, BB)
+         rB.d.setMultiplierType(rB.b, BB)
```

#### 2834. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25446-L25449` → after: `L25458-L25461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25458-L25461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25458-L25461) · [Before (L25446-L25449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25446-L25449)

```diff
-         (0, HB.sendColyMessage)(IB.Ej);
-         const BB = (0, iB.g)(),
-           jB = BB.vG.pT(BB.zV);
-         jB && (hB().set(jB.Hy, 0, 0, 0), hB().set(jB.eZ, 0, 0, 0), hB().set(jB.wZ, 0, 0, 0))
+         (0, aB.sendColyMessage)(GB.hj);
+         const BB = (0, OB.h)(),
+           IB = BB.zW.vx(BB.Jm);
+         IB && (RB().set(IB.zq, 0, 0, 0), RB().set(IB.Rl, 0, 0, 0), RB().set(IB.Al, 0, 0, 0))
```

#### 2835. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25453-L25454` → after: `L25465-L25466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25465-L25466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25465-L25466) · [Before (L25453-L25454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25453-L25454)

```diff
-         jB = BB, (0, HB.sendColyMessage)(IB.Tj, {
-           ou: jB
+         IB = BB, (0, aB.sendColyMessage)(GB.Aj, {
+           sk: IB
```

#### 2836. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25458-L25461` → after: `L25470-L25473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25470-L25473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25470-L25473) · [Before (L25458-L25461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25458-L25461)

```diff
-     var WB = zB(38274),
-       eB = zB(31),
-       lB = zB(36887),
-       wB = zB(2022);
+     var uB = ZB(38258),
+       fB = ZB(24),
+       lB = ZB(36837),
+       AB = ZB(2046);
```

#### 2837. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25487` → after: `L25499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25499) · [Before (L25487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25487)

```diff
-         qa: dB
+         pn: oB
```

#### 2838. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25489` → after: `L25501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25501) · [Before (L25489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25489)

```diff
-       const IB = (0, iB.c)(),
+       const GB = (0, OB.d)(),
```

#### 2839. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25514` → after: `L25526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25526) · [Before (L25514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25514)

```diff
-         qa: dB,
+         pn: oB,
```

#### 2840. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25523` → after: `L25535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25535) · [Before (L25523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25523)

```diff
-       crafting: (0, wB.o)((function() {
+       crafting: (0, AB.h)((function() {
```

#### 2841. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25528-L25530` → after: `L25540-L25542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25540-L25542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25540-L25542) · [Before (L25528-L25530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25528-L25530)

```diff
-         const BB = (0, iB.g)(),
-           jB = BB.zV;
-         if (!BB.vG.GjB(jB)) return KB = {
+         const BB = (0, OB.h)(),
+           IB = BB.Jm;
+         if (!BB.zW.bIB(IB)) return bB = {
```

#### 2842. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25535` → after: `L25547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25547) · [Before (L25535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25535)

```diff
-         const zB = BB.vG.yjB(jB),
+         const ZB = BB.zW.lIB(IB),
```

#### 2843. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25538` → after: `L25550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25550) · [Before (L25538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25538)

```diff
-           } = (0, iB.c)(),
+           } = (0, OB.d)(),
```

#### 2844. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25543` → after: `L25555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25555) · [Before (L25543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25543)

```diff
-             } = QB.getRecipesForItem(jB, BB.name)[BB.qa];
+             } = TB.getRecipesForItem(IB, BB.name)[BB.pn];
```

#### 2845. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25546` → after: `L25558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25558) · [Before (L25546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25546)

```diff
-               qa: BB.qa,
+               pn: BB.pn,
```

#### 2846. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25558` → after: `L25570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25570) · [Before (L25558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25558)

```diff
-       }), [...wB.g, "syncedInvenFromServer", "craftingRecipesEdited", CB])
+       }), [...AB.c, "syncedInvenFromServer", "craftingRecipesEdited", xB])
```

#### 2847. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25569` → after: `L25581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25581) · [Before (L25569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25569)

```diff
-         } = (0, iB.c)(), dB = (0, iB.g)().zV;
+         } = (0, OB.d)(), oB = (0, OB.h)().Jm;
```

#### 2848. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25580` → after: `L25592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25592) · [Before (L25580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25580)

```diff
-         for (let uB = 0; uB < lB.c; uB++) {
+         for (let kB = 0; kB < lB.e; kB++) {
```

#### 2849. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25602` → after: `L25614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25614) · [Before (L25602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25602)

```diff
-         xB = BB, eB.n.Ly(CB)
+         tB = BB, fB.l.Gq(xB)
```

#### 2850. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25607` → after: `L25619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25619) · [Before (L25607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25607)

```diff
-           qa: zB,
+           pn: ZB,
```

#### 2851. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25610-L25614` → after: `L25622-L25626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25622-L25626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25622-L25626) · [Before (L25610-L25614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25610-L25614)

```diff
-         const nB = (0, iB.g)(),
-           dB = (0, iB.c)(),
-           NB = dB.craftingManager.craftItem(nB.zV, nB.vG.yjB(nB.zV), jB, zB, null !== QB && void 0 !== QB ? QB : 1 / 0);
-         if (NB.fa > 0) {
-           const BB = dB.client.inventoryPrediction.record(WB.b.craft(dB.craftingManager, nB.zV, jB, zB, NB.fa));
+         const JB = (0, OB.h)(),
+           oB = (0, OB.d)(),
+           vB = oB.craftingManager.craftItem(JB.Jm, JB.zW.lIB(JB.Jm), IB, ZB, null !== TB && void 0 !== TB ? TB : 1 / 0);
+         if (vB.Hn > 0) {
+           const BB = oB.client.inventoryPrediction.record(uB.b.craft(oB.craftingManager, JB.Jm, IB, ZB, vB.Hn));
```

#### 2852. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25616-L25620` → after: `L25628-L25632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25628-L25632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25628-L25632) · [Before (L25616-L25620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25616-L25620)

```diff
-             (0, HB.sendColyMessage)(IB.qh, {
-               ia: BB,
-               qa: jB,
-               fa: zB,
-               RI: QB
+             (0, aB.sendColyMessage)(GB.Wg, {
+               Yn: BB,
+               pn: IB,
+               Hn: ZB,
+               lG: TB
```

#### 2853. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25622` → after: `L25634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25634) · [Before (L25622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25622)

```diff
-           }(jB, zB, NB.fa, BB)
+           }(IB, ZB, vB.Hn, BB)
```

#### 2854. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25632-L25634` → after: `L25644-L25646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25644-L25646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25644-L25646) · [Before (L25632-L25634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25632-L25634)

```diff
-         const nB = (0, iB.c)(),
-           dB = (0, iB.g)(),
-           NB = nB.craftingManager.salvageItem(dB.vG.yjB(dB.zV), jB, zB, QB);
+         const JB = (0, OB.d)(),
+           oB = (0, OB.h)(),
+           vB = JB.craftingManager.salvageItem(oB.zW.lIB(oB.Jm), IB, ZB, TB);
```

#### 2855. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25636-L25639` → after: `L25648-L25651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25648-L25651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25648-L25651) · [Before (L25636-L25639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25636-L25639)

```diff
-         return NB && (uB = jB, UB = QB, aB = nB.client.inventoryPrediction.record(WB.b.salvage(nB.craftingManager, jB, QB)), (0, HB.sendColyMessage)(IB.Fj, {
-           aa: uB,
-           ra: UB,
-           RI: aB
+         return vB && (kB = IB, cB = TB, nB = JB.client.inventoryPrediction.record(uB.b.salvage(JB.craftingManager, IB, TB)), (0, aB.sendColyMessage)(GB.lj, {
+           hn: kB,
+           zn: cB,
+           lG: nB
```

#### 2856. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25649-L25652` → after: `L25661-L25664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25661-L25664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25661-L25664) · [Before (L25649-L25652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25649-L25652)

```diff
-         nB = jB, dB = zB, NB = QB, (0, HB.sendColyMessage)(IB.wh, {
-           hN: nB,
-           ZN: dB,
-           XN: NB
+         JB = IB, oB = ZB, vB = TB, (0, aB.sendColyMessage)(GB.bh, {
+           iv: JB,
+           av: oB,
+           pv: vB
```

#### 2857. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25656-L25666` → after: `L25668-L25678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25668-L25678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25668-L25678) · [Before (L25656-L25666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25656-L25666)

```diff
-     var Bj = zB(37109),
-       jj = zB(37504),
-       zj = zB(214),
-       Qj = zB(9266),
-       nj = zB(6428),
-       dj = zB(652),
-       Ij = zB(4597),
-       Nj = zB(37518),
-       uj = zB(38256),
-       Uj = zB(39681);
-     const aj = zj.e.entityInteractReach + 1;
+     var BI = ZB(37060),
+       II = ZB(37436),
+       ZI = ZB(201),
+       TI = ZB(9296),
+       JI = ZB(6635),
+       oI = ZB(663),
+       GI = ZB(4665),
+       vI = ZB(37448),
+       kI = ZB(38243),
+       cI = ZB(39671);
+     const nI = ZI.f.entityInteractReach + 1;
```

#### 2858. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25670` → after: `L25682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25682) · [Before (L25670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25670)

```diff
-       return null !== (jB = Nj.b.aimsFromBody(BB) ? BB.VBB : null) && void 0 !== jB ? jB : BB.camera.nC()
+       return null !== (IB = vI.c.aimsFromBody(BB) ? BB.kIB : null) && void 0 !== IB ? IB : BB.camera.XV()
```

#### 2859. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25675-L25676` → after: `L25687-L25688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25687-L25688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25687-L25688) · [Before (L25675-L25676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25675-L25676)

```diff
-       const nB = (0, iB.g)(),
-         dB = null !== (jB = null === (zB = nB.vG.mjB(nB.zV)) || void 0 === zB ? void 0 : zB.selectedItem) && void 0 !== jB ? jB : null,
+       const JB = (0, OB.h)(),
+         oB = null !== (IB = null === (ZB = JB.zW.fIB(JB.Jm)) || void 0 === ZB ? void 0 : ZB.selectedItem) && void 0 !== IB ? IB : null,
```

#### 2860. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25678` → after: `L25690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25690) · [Before (L25678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25678)

```diff
-       if ((0, Ij.c)(null === dB || void 0 === dB ? void 0 : dB.typeObj.type) && nB.vG.JjB(nB.zV).crouching) return;
+       if ((0, GI.f)(null === oB || void 0 === oB ? void 0 : oB.typeObj.type) && JB.zW.uIB(JB.Jm).crouching) return;
```

#### 2861. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25680-L25681` → after: `L25692-L25693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25692-L25693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25692-L25693) · [Before (L25680-L25681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25680-L25681)

```diff
-         const jB = (0, iB.g)().vG.Gw((0, iB.g)().zV).position;
-         for (const zB of (0, iB.c)().client.iterateEntityIds())
+         const IB = (0, OB.h)().zW.zK((0, OB.h)().Jm).position;
+         for (const ZB of (0, OB.d)().client.iterateEntityIds())
```

#### 2862. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25684-L25688` → after: `L25696-L25700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25696-L25700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25696-L25700) · [Before (L25684-L25688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25684-L25688)

```diff
-       }(IB) ? iB.i.localPlayerPickActionHelper.pickCameraRayEntity(BB, zj.e.entityInteractReach) : null;
-       return NB && (0, jj.g)(NB.eId) ? (0, jj.c)(NB.eId) : null !== (QB = function(BB) {
-         const jB = (0, iB.g)(),
-           zB = (0, iB.c)(),
-           QB = null === jB.VBB || BB === jB.VBB ? jB.mBB : jB.pickBlock(null, BB, zB.getBlockReach(jB.zV), jB.JBB);
+       }(GB) ? OB.l.localPlayerPickActionHelper.pickCameraRayEntity(BB, ZI.f.entityInteractReach) : null;
+       return vB && (0, II.e)(vB.eId) ? (0, II.d)(vB.eId) : null !== (TB = function(BB) {
+         const IB = (0, OB.h)(),
+           ZB = (0, OB.d)(),
+           TB = null === IB.kIB || BB === IB.kIB ? IB.lBB : IB.pickBlock(null, BB, ZB.getBlockReach(IB.Jm), IB.fBB);
```

#### 2863. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25691` → after: `L25703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25703) · [Before (L25691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25691)

```diff
-           JR: nB,
+           n_: JB,
```

#### 2864. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25694` → after: `L25706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25706) · [Before (L25694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25694)

```diff
-         if ((0, Qj.n)((0, Qj.g)(nB))) return Qj.i[nB].meta.open ? Uj.c.close : Uj.c.open;
+         if ((0, TI.i)((0, TI.e)(JB))) return TI.f[JB].meta.open ? cI.d.close : cI.d.open;
```

#### 2865. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25698` → after: `L25710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25710) · [Before (L25698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25698)

```diff
-         if ((0, uj.q)(IB) || (0, uj.H)(IB, zB.playerCanChangePos(jB.zV, ...dB))) return Uj.c.open;
+         if ((0, kI.m)(GB) || (0, kI.J)(GB, ZB.playerCanChangePos(IB.Jm, ...oB))) return cI.d.open;
```

#### 2866. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25700` → after: `L25712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25712) · [Before (L25700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25700)

```diff
-       }(BB)) && void 0 !== QB ? QB : NB ? function(BB, jB, zB) {
+       }(BB)) && void 0 !== TB ? TB : vB ? function(BB, IB, ZB) {
```

#### 2867. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25707` → after: `L25719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25719) · [Before (L25707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25707)

```diff
-           } = (0, iB.c)(),
+           } = (0, OB.d)(),
```

#### 2868. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25709-L25711` → after: `L25721-L25723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25721-L25723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25721-L25723) · [Before (L25709-L25711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25709-L25711)

```diff
-           UB = (0, uj.C)(IB, dB, jB);
-         if (null !== UB) return "Milk" === UB ? Uj.c.milk : "Sheared" === (null === uB || void 0 === uB ? void 0 : uB.metaInfo) ? void 0 : Uj.c.shear;
-         const aB = null !== (QB = null === uB || void 0 === uB ? void 0 : uB.ownerDbId) && void 0 !== QB ? QB : null,
+           cB = (0, kI.D)(GB, oB, IB);
+         if (null !== cB) return "Milk" === cB ? cI.d.milk : "Sheared" === (null === kB || void 0 === kB ? void 0 : kB.metaInfo) ? void 0 : cI.d.shear;
+         const nB = null !== (TB = null === kB || void 0 === kB ? void 0 : kB.ownerDbId) && void 0 !== TB ? TB : null,
```

#### 2869. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25713-L25721` → after: `L25725-L25733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25725-L25733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25725-L25733) · [Before (L25713-L25721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25713-L25721)

```diff
-         if ((0, uj.m)(dB, IB)) {
-           if (null === aB && (0, uj.A)(dB, IB)) return Uj.c.tame;
-           const BB = null === aB && (0, uj.x)(dB, IB) ? (0, uj.D)(dB) : void 0;
-           return void 0 !== BB ? (0, Uj.p)(BB) : pB && (0, uj.v)(dB, IB) ? Uj.c.feed : void 0
-         }
-         const rB = (0, iB.g)(),
-           sB = rB.vG.CBB(rB.zV).physicsState.type === nj.t.DEFAULT,
-           JB = null === zB || (0, Ij.c)(zB.typeObj.type);
-         return "Saddled" === (null === uB || void 0 === uB ? void 0 : uB.metaInfo) && sB && JB && (null === aB || pB) ? Uj.c.ride : void 0
+         if ((0, kI.i)(oB, GB)) {
+           if (null === nB && (0, kI.B)(oB, GB)) return cI.d.tame;
+           const BB = null === nB && (0, kI.x)(oB, GB) ? (0, kI.H)(oB) : void 0;
+           return void 0 !== BB ? (0, cI.s)(BB) : hB && (0, kI.t)(oB, GB) ? cI.d.feed : void 0
+         }
+         const zB = (0, OB.h)(),
+           FB = zB.zW.dIB(zB.Jm).physicsState.type === JI.o.DEFAULT,
+           NB = null === ZB || (0, GI.f)(ZB.typeObj.type);
+         return "Saddled" === (null === kB || void 0 === kB ? void 0 : kB.metaInfo) && FB && NB && (null === nB || hB) ? cI.d.ride : void 0
```

#### 2870. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25726` → after: `L25738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25738) · [Before (L25726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25726)

```diff
-       const zB = (0, iB.g)().vG.Gw(BB);
+       const ZB = (0, OB.h)().zW.zK(BB);
```

#### 2871. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25732-L25733` → after: `L25744-L25745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25744-L25745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25744-L25745) · [Before (L25732-L25733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25732-L25733)

```diff
-       const nB = (0, iB.g)();
-       if (null !== (zB = nB.RY[nB.zV][BB]) && void 0 !== zB && zB.interactable) return !0;
+       const JB = (0, OB.h)();
+       if (null !== (ZB = JB.Tm[JB.Jm][BB]) && void 0 !== ZB && ZB.interactable) return !0;
```

#### 2872. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25737-L25738` → after: `L25749-L25750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25749-L25750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25749-L25750) · [Before (L25737-L25738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25737-L25738)

```diff
-         } = (0, iB.c)();
-       return null !== dB && ((0, uj.m)(dB, jB) || null !== (0, uj.C)(jB, dB, 0) || "Saddled" === (null === (QB = IB.getColyseusEntity(BB)) || void 0 === QB ? void 0 : QB.metaInfo))
+         } = (0, OB.d)();
+       return null !== oB && ((0, kI.i)(oB, IB) || null !== (0, kI.D)(IB, oB, 0) || "Saddled" === (null === (TB = GB.getColyseusEntity(BB)) || void 0 === TB ? void 0 : TB.metaInfo))
```

#### 2873. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25745` → after: `L25757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25757) · [Before (L25745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25745)

```diff
-         const jB = (0, iB.g)(),
+         const IB = (0, OB.h)(),
```

#### 2874. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25748-L25750` → after: `L25760-L25762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25760-L25762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25760-L25762) · [Before (L25748-L25750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25748-L25750)

```diff
-           } = (0, iB.c)(),
-           QB = jB.RY[jB.zV],
-           nB = jB.vG.Gw(jB.zV).position,
+           } = (0, OB.d)(),
+           TB = IB.Tm[IB.Jm],
+           JB = IB.zW.zK(IB.Jm).position,
```

#### 2875. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25758` → after: `L25770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25770) · [Before (L25758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25758)

```diff
-           const [aB, pB, sB] = jB.vG.Gw(rB).position, JB = zB.getColyseusEntity(rB);
+           const [nB, hB, FB] = IB.zW.zK(zB).position, NB = ZB.getColyseusEntity(zB);
```

#### 2876. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25770-L25771` → after: `L25782-L25783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25782-L25783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25782-L25783) · [Before (L25770-L25771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25770-L25771)

```diff
-       const zB = null === (jB = (0, iB.g)().vG.HjB(BB)) || void 0 === jB ? void 0 : jB.lifeformType;
-       return dj.p.includes(zB) ? zB : null
+       const ZB = null === (IB = (0, OB.h)().zW.oZB(BB)) || void 0 === IB ? void 0 : IB.lifeformType;
+       return oI.m.includes(ZB) ? ZB : null
```

#### 2877. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25773` → after: `L25785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25785) · [Before (L25773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25773)

```diff
-     var kj = zB(2006);
+     var yI = ZB(2029);
```

#### 2878. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25804` → after: `L25816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25816) · [Before (L25804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25804)

```diff
-         }, this.pickaxe = new Uj.b, this.touchCandidates = new mj
+         }, this.pickaxe = new cI.c, this.touchCandidates = new gI
```

#### 2879. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25808-L25809` → after: `L25820-L25821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25820-L25821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25820-L25821) · [Before (L25808-L25809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25808-L25809)

```diff
-         const QB = (0, iB.g)(),
-           nB = (0, iB.c)();
+         const TB = (0, OB.h)(),
+           JB = (0, OB.d)();
```

#### 2880. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25818-L25823` → after: `L25830-L25835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25830-L25835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25830-L25835) · [Before (L25818-L25823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25818-L25823)

```diff
-             const nB = jB ? pj(QB) : null !== (IB = QB.VBB) && void 0 !== IB ? IB : QB.camera.nC(),
-               pB = QB.vG.iG(QB.zV),
-               rB = jB && null !== (NB = null === (uB = QB.mBB) || void 0 === uB ? void 0 : uB.JR) && void 0 !== NB ? NB : 0,
-               sB = jB ? null === (UB = QB.vG.mjB(QB.zV)) || void 0 === UB || null === (aB = UB.selectedItem) || void 0 === aB ? void 0 : aB.name : void 0,
-               JB = jB && QB.vG.JjB(QB.zV).crouching,
-               mB = jB ? QB.camera.Kw : 0,
+             const JB = IB ? hI(TB) : null !== (GB = TB.kIB) && void 0 !== GB ? GB : TB.camera.XV(),
+               hB = TB.zW.aU(TB.Jm),
+               zB = IB && null !== (vB = null === (kB = TB.lBB) || void 0 === kB ? void 0 : kB.n_) && void 0 !== vB ? vB : 0,
+               FB = IB ? null === (cB = TB.zW.fIB(TB.Jm)) || void 0 === cB || null === (nB = cB.selectedItem) || void 0 === nB ? void 0 : nB.name : void 0,
+               NB = IB && TB.zW.uIB(TB.Jm).crouching,
+               gB = IB ? TB.camera.WK : 0,
```

#### 2881. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25830-L25831` → after: `L25842-L25843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25842-L25843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25842-L25843) · [Before (L25830-L25831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25830-L25831)

```diff
-                   const jB = (0, jj.j)(null, BB);
-                   if (null !== jB) return (0, jj.c)(jB)
+                   const IB = (0, II.i)(null, BB);
+                   if (null !== IB) return (0, II.d)(IB)
```

#### 2882. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25834` → after: `L25846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25846) · [Before (L25834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25834)

```diff
-               BB.shown === IB && BB.label === (null !== QB && void 0 !== QB ? QB : null) || (BB.shown = IB, BB.label = null !== QB && void 0 !== QB ? QB : null, dB = !0)
+               BB.shown === GB && BB.label === (null !== TB && void 0 !== TB ? TB : null) || (BB.shown = GB, BB.label = null !== TB && void 0 !== TB ? TB : null, oB = !0)
```

#### 2883. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25838` → after: `L25850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25850) · [Before (L25838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25838)

```diff
-         const pB = null === (jB = QB.mBB) || void 0 === jB ? void 0 : jB.JR;
+         const hB = null === (IB = TB.lBB) || void 0 === IB ? void 0 : IB.n_;
```

#### 2884. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25844` → after: `L25856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25856) · [Before (L25844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25844)

```diff
-           const zB = null !== (rB = nB.getClientPredictedOption(QB.zV, this.block.prevClientOptStr)) && void 0 !== rB ? rB : nB.getDefaultItemStat(jB, "CrosshairText");
+           const ZB = null !== (zB = JB.getClientPredictedOption(TB.Jm, this.block.prevClientOptStr)) && void 0 !== zB ? zB : JB.getDefaultItemStat(IB, "CrosshairText");
```

#### 2885. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25849-L25850` → after: `L25861-L25862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25861-L25862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25861-L25862) · [Before (L25849-L25850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25849-L25850)

```diff
-             const jB = (0, iB.g)(),
-               zB = jB.vG.XjB(jB.zV).fistItem;
+             const IB = (0, OB.h)(),
+               ZB = IB.zW.zZB(IB.Jm).fistItem;
```

#### 2886. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25852` → after: `L25864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25864) · [Before (L25852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25852)

```diff
-             const QB = null !== zB.targetedPosition ? jB.JG(zB.targetedPosition) : 0;
+             const TB = null !== ZB.targetedPosition ? IB.WU(ZB.targetedPosition) : 0;
```

#### 2887. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25854-L25857` → after: `L25866-L25869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25866-L25869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25866-L25869) · [Before (L25854-L25857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25854-L25857)

```diff
-             const nB = (0, iB.c)();
-             if (nB.getBlockTypeIsHarvestable(jB.zV, QB)) return null;
-             const dB = null !== (BB = nB.getItemStat(jB.zV, QB, "harvestLevel")) && void 0 !== BB ? BB : 0;
-             return Bj.n[dB] ? Bj.n[dB] : null
+             const JB = (0, OB.d)();
+             if (JB.getBlockTypeIsHarvestable(IB.Jm, TB)) return null;
+             const oB = null !== (BB = JB.getItemStat(IB.Jm, TB, "harvestLevel")) && void 0 !== BB ? BB : 0;
+             return BI.m[oB] ? BI.m[oB] : null
```

#### 2888. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25860` → after: `L25872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25872) · [Before (L25860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25860)

```diff
-         return this.target = (0, wB.s)(sB, {
+         return this.target = (0, AB.l)(FB, {
```

#### 2889. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25864` → after: `L25876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25876) · [Before (L25864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25864)

```diff
-           blockText: null !== (zB = this.block.text) && void 0 !== zB ? zB : null,
+           blockText: null !== (ZB = this.block.text) && void 0 !== ZB ? ZB : null,
```

#### 2890. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25878` → after: `L25890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25890) · [Before (L25878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25878)

```diff
-           const zB = (0, aB.B)((() => {
+           const ZB = (0, nB.x)((() => {
```

#### 2891. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25891` → after: `L25903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25903) · [Before (L25891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25891)

```diff
-     var qj = zB(37351);
+     var YI = ZB(37285);
```

#### 2892. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25894` → after: `L25906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25906) · [Before (L25894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25894)

```diff
-       return (0, eB.q)(`otherEntitySettingsClientifiedEId|${(0,iB.g)().zV}|_isAlive`, BB)
+       return (0, fB.p)(`otherEntitySettingsClientifiedEId|${(0,OB.h)().Jm}|_isAlive`, BB)
```

#### 2893. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25901-L25903` → after: `L25913-L25915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25913-L25915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25913-L25915) · [Before (L25901-L25903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25901-L25903)

```diff
-             const zB = (0, iB.g)(),
-               QB = null === (BB = zB.RY[zB.zV]) || void 0 === BB ? void 0 : BB[zB.zV];
-             return void 0 !== QB && "_isAlive" in QB && (null !== (jB = QB._isAlive) && void 0 !== jB ? jB : qj.c._isAlive)
+             const ZB = (0, OB.h)(),
+               TB = null === (BB = ZB.Tm[ZB.Jm]) || void 0 === BB ? void 0 : BB[ZB.Jm];
+             return void 0 !== TB && "_isAlive" in TB && (null !== (IB = TB._isAlive) && void 0 !== IB ? IB : YI.d._isAlive)
```

#### 2894. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25909` → after: `L25921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25921) · [Before (L25909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25909)

```diff
-         ironChestOpenRequested: (0, wB.e)("OpenIronChest", (function(BB) {
+         ironChestOpenRequested: (0, AB.b)("OpenIronChest", (function(BB) {
```

#### 2895. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25914` → after: `L25926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25926) · [Before (L25914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25914)

```diff
-           const nB = (0, iB.c)(),
+           const JB = (0, OB.d)(),
```

#### 2896. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25923` → after: `L25935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25935) · [Before (L25923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25923)

```diff
-           watch: BB => (0, eB.q)("EffectUpdate", (jB => {
+           watch: BB => (0, fB.p)("EffectUpdate", (IB => {
```

#### 2897. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25925` → after: `L25937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25937) · [Before (L25925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25925)

```diff
-               VB: zB,
+               PB: ZB,
```

#### 2898. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25928` → after: `L25940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25940) · [Before (L25928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25928)

```diff
-             (0, QB.h)(zB) && BB(nB)
+             (0, TB.i)(ZB) && BB(JB)
```

#### 2899. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25939` → after: `L25951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25951) · [Before (L25939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25939)

```diff
-             xd: zB,
+             Po: ZB,
```

#### 2900. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25941` → after: `L25953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25953) · [Before (L25941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25941)

```diff
-             Kd: nB
+             Ro: JB
```

#### 2901. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25943` → after: `L25955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25955) · [Before (L25943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25943)

```diff
-           (0, iB.c)().client.gameRecorder.recordFlyingMiddleText(jB, zB, QB, nB)
+           (0, OB.d)().client.gameRecorder.recordFlyingMiddleText(IB, ZB, TB, JB)
```

#### 2902. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25948-L25949` → after: `L25960-L25961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25960-L25961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25960-L25961) · [Before (L25948-L25949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25948-L25949)

```diff
-         this.inventoryOpen = !1, eB.n.subscribe("DropItemKeyPressed", (BB => {
-           this.inventoryOpen ? eB.n.Ly("DropInvenItem", BB) : eB.n.Ly("DropHotbarItem", BB)
+         this.inventoryOpen = !1, fB.l.subscribe("DropItemKeyPressed", (BB => {
+           this.inventoryOpen ? fB.l.Gq("DropInvenItem", BB) : fB.l.Gq("DropHotbarItem", BB)
```

#### 2903. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25956-L25960` → after: `L25968-L25972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25968-L25972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25968-L25972) · [Before (L25956-L25960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25956-L25960)

```diff
-     var Yj = zB(38278),
-       Vj = zB(38085),
-       hj = zB(38289),
-       Xj = zB(39319),
-       Zj = zB(1263);
+     var jI = ZB(38263),
+       PI = ZB(38057),
+       RI = ZB(38268),
+       rI = ZB(39296),
+       mI = ZB(1281);
```

#### 2904. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25964-L25965` → after: `L25976-L25977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25976-L25977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25976-L25977) · [Before (L25964-L25965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25964-L25965)

```diff
-       const zB = (0, iB.c)(),
-         QB = zB.Gs.metadatas[BB];
+       const ZB = (0, OB.d)(),
+         TB = ZB.zF.metadatas[BB];
```

#### 2905. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25967` → after: `L25979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25979) · [Before (L25967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25967)

```diff
-       const nB = (0, iB.g)().zV,
+       const JB = (0, OB.h)().Jm,
```

#### 2906. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25973` → after: `L25985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25985) · [Before (L25973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25973)

```diff
-       const NB = null === (jB = iB.i.itemsClient[BB]) || void 0 === jB ? void 0 : jB.armourReduction;
+       const vB = null === (IB = OB.l.itemsClient[BB]) || void 0 === IB ? void 0 : IB.armourReduction;
```

#### 2907. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25984` → after: `L25996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L25996) · [Before (L25984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25984)

```diff
-             for (const jB of Object.keys((0, iB.c)().Gs.metadatas)) {
+             for (const IB of Object.keys((0, OB.d)().zF.metadatas)) {
```

#### 2908. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25989` → after: `L26001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26001) · [Before (L25989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L25989)

```diff
-           }(), (0, wB.t)((BB => {
+           }(), (0, AB.o)((BB => {
```

#### 2909. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26006` → after: `L26018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26018) · [Before (L26006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26006)

```diff
-               nB = null === BB ? null : (0, wB.s)(jB[QB], BB);
+               JB = null === BB ? null : (0, AB.l)(IB[TB], BB);
```

#### 2910. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26023-L26024` → after: `L26035-L26036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26035-L26036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26035-L26036) · [Before (L26023-L26024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26023-L26024)

```diff
-       const BB = (0, iB.g)();
-       return BB.vG.GjB(BB.zV) ? BB.vG.kjB(BB.zV) : null
+       const BB = (0, OB.h)();
+       return BB.zW.bIB(BB.Jm) ? BB.zW.tIB(BB.Jm) : null
```

#### 2911. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26037-L26038` → after: `L26049-L26050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26049-L26050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26049-L26050) · [Before (L26037-L26038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26037-L26038)

```diff
-       if (!BB.hd || null === BB.Zd) return null;
-       const jB = [...BB.Zd];
+       if (!BB.Qo || null === BB.Oo) return null;
+       const IB = [...BB.Oo];
```

#### 2912. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26040` → after: `L26052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26052) · [Before (L26040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26040)

```diff
-       if ("Iron" === BB.Xd) {
+       if ("Iron" === BB.wo) {
```

#### 2913. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26042` → after: `L26054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26054) · [Before (L26042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26042)

```diff
-         const BB = (0, iB.c)(),
+         const BB = (0, OB.d)(),
```

#### 2914. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26045` → after: `L26057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26057) · [Before (L26045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26045)

```diff
-           oN: [...null !== (QB = BB.client.ironChestPasskeyCache.getCachedPasskeyForChest(jB)) && void 0 !== QB ? QB : [0, 0, 0, 0]]
+           Cv: [...null !== (TB = BB.client.ironChestPasskeyCache.getCachedPasskeyForChest(IB)) && void 0 !== TB ? TB : [0, 0, 0, 0]]
```

#### 2915. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26051` → after: `L26063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26063) · [Before (L26051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26051)

```diff
-         type: BB.Xd,
+         type: BB.wo,
```

#### 2916. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26053` → after: `L26065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26065) · [Before (L26053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26053)

```diff
-         numSlots: BB.hd.numSlots,
+         numSlots: BB.Qo.numSlots,
```

#### 2917. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26069` → after: `L26081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26081) · [Before (L26069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26069)

```diff
-       const NB = (0, iB.c)(),
+       const vB = (0, OB.d)(),
```

#### 2918. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26077` → after: `L26089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26089) · [Before (L26077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26077)

```diff
-         displayName: null !== (jB = IB.attributes.customDisplayName) && void 0 !== jB ? jB : NB.getItemStat((0, iB.g)().zV, uB, "displayName"),
+         displayName: null !== (IB = GB.attributes.customDisplayName) && void 0 !== IB ? IB : vB.getItemStat((0, OB.h)().Jm, kB, "displayName"),
```

#### 2919. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26079` → after: `L26091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26091) · [Before (L26079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26079)

```diff
-         clipSize: null !== (zB = null !== (QB = null === (nB = IB.attributes.customAttributes.gunStats) || void 0 === nB ? void 0 : nB.clipSize) && void 0 !== QB ? QB : null === (dB = kj.c.get(`${uB}GunStats`)) || void 0 === dB ? void 0 : dB.clipSize) && void 0 !== zB ? zB : BB.t … [truncated]
+         clipSize: null !== (ZB = null !== (TB = null === (JB = GB.attributes.customAttributes.gunStats) || void 0 === JB ? void 0 : JB.clipSize) && void 0 !== TB ? TB : null === (oB = yI.c.get(`${kB}GunStats`)) || void 0 === oB ? void 0 : oB.clipSize) && void 0 !== ZB ? ZB : BB.t … [truncated]
```

#### 2920. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26085` → after: `L26097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26097) · [Before (L26085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26085)

```diff
-         inventory: (0, wB.o)((function() {
+         inventory: (0, AB.h)((function() {
```

#### 2921. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26096` → after: `L26108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26108) · [Before (L26096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26096)

```diff
-           BB.hd ? jB = BB.hd.items.map(lj) : BB.inCreative && (wj ??= hj.e.map((BB => ({
+           BB.Qo ? IB = BB.Qo.items.map(lI) : BB.inCreative && (AI ??= RI.e.map((BB => ({
```

#### 2922. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26098-L26099` → after: `L26110-L26111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26110-L26111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26110-L26111) · [Before (L26098-L26099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26098-L26099)

```diff
-             amount: (0, iB.c)().getItemTypeObj(BB).stackable ? 1 : null,
-             attributes: (0, Vj.j)(BB)
+             amount: (0, OB.d)().getItemTypeObj(BB).stackable ? 1 : null,
+             attributes: (0, PI.i)(BB)
```

#### 2923. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26110-L26111` → after: `L26122-L26123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26122-L26123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26122-L26123) · [Before (L26110-L26111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26110-L26111)

```diff
-         }), [...wB.g, "chestToggleFromServer", "syncedInvenFromServer", Rj], (0, wB.l)("creative")),
-         hotbar: (0, wB.o)((function() {
+         }), [...AB.c, "chestToggleFromServer", "syncedInvenFromServer", VI], (0, AB.f)("creative")),
+         hotbar: (0, AB.h)((function() {
```

#### 2924. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26124` → after: `L26136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26136) · [Before (L26124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26124)

```diff
-         }), [...wB.g, "localPlayerNewShotsLeft"], (0, wB.j)("DisplayName", "GunStats")),
+         }), [...AB.c, "localPlayerNewShotsLeft"], (0, AB.d)("DisplayName", "GunStats")),
```

#### 2925. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26130` → after: `L26142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26142) · [Before (L26130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26130)

```diff
-               } = (0, iB.c)(), jB = (0, iB.g)().zV, zB = {};
+               } = (0, OB.d)(), IB = (0, OB.h)().Jm, ZB = {};
```

#### 2926. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26133` → after: `L26145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26145) · [Before (L26133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26133)

```diff
-               for (const nB of Object.keys(Xj.h)) QB[nB] = !0;
+               for (const JB of Object.keys(rI.e)) TB[JB] = !0;
```

#### 2927. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26144-L26146` → after: `L26156-L26158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26156-L26158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26156-L26158) · [Before (L26144-L26146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26144-L26146)

```diff
-         creativeVisibility: (0, wB.o)((function() {
-           const BB = (0, iB.c)(),
-             jB = (0, iB.g)().zV,
+         creativeVisibility: (0, AB.h)((function() {
+           const BB = (0, OB.d)(),
+             IB = (0, OB.h)().Jm,
```

#### 2928. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26153` → after: `L26165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26165) · [Before (L26153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26153)

```diff
-             publicLobby: (0, Zj.E)((0, EB.d)().lobbyName),
+             publicLobby: (0, mI.G)((0, wB.c)().lobbyName),
```

#### 2929. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26156` → after: `L26168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26168) · [Before (L26156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26156)

```diff
-         }), ["connectedGameChanged"], (0, wB.j)("ShowInCreativeInven"))
+         }), ["connectedGameChanged"], (0, AB.d)("ShowInCreativeInven"))
```

#### 2930. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26163-L26171` → after: `L26175-L26183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26175-L26183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26175-L26183) · [Before (L26163-L26171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26163-L26171)

```diff
-       hotbarSlotRequested: (0, wB.e)("setSelectedInventorySlotI"),
-       hotbarScrolled: (0, wB.e)("ScrollInventorySlot"),
-       hotbarDropRequested: (0, wB.e)("DropHotbarItem"),
-       inventoryDropRequested: (0, wB.e)("DropInvenItem"),
-       numberKeyPressed: (0, wB.e)("numkeyPressed"),
-       chestToggled: (0, wB.e)("chestToggleFromServer"),
-       chestRefreshed: (0, wB.e)("chestRefreshedFromServer", Bz),
-       inventorySynced: (0, wB.e)("syncedInvenFromServer", Bz),
-       enchantingTableOpened: (0, wB.e)("enchantingTable", (BB => {
+       hotbarSlotRequested: (0, AB.b)("setSelectedInventorySlotI"),
+       hotbarScrolled: (0, AB.b)("ScrollInventorySlot"),
+       hotbarDropRequested: (0, AB.b)("DropHotbarItem"),
+       inventoryDropRequested: (0, AB.b)("DropInvenItem"),
+       numberKeyPressed: (0, AB.b)("numkeyPressed"),
+       chestToggled: (0, AB.b)("chestToggleFromServer"),
+       chestRefreshed: (0, AB.b)("chestRefreshedFromServer", BZ),
+       inventorySynced: (0, AB.b)("syncedInvenFromServer", BZ),
+       enchantingTableOpened: (0, AB.b)("enchantingTable", (BB => {
```

#### 2931. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26174` → after: `L26186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26186) · [Before (L26174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26174)

```diff
-           dN: zB
+           KG: ZB
```

#### 2932. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26178` → after: `L26190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26190) · [Before (L26178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26178)

```diff
-           blockName: (0, iB.c)().getMetaInfo(zB).rootName
+           blockName: (0, OB.d)().getMetaInfo(ZB).rootName
```

#### 2933. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26184-L26185` → after: `L26196-L26197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26196-L26197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26196-L26197) · [Before (L26184-L26185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26184-L26185)

```diff
-       const BB = (0, iB.g)();
-       return BB.vG.kjB(BB.zV)
+       const BB = (0, OB.h)();
+       return BB.zW.tIB(BB.Jm)
```

#### 2934. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26189` → after: `L26201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26201) · [Before (L26189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26189)

```diff
-         const jB = (0, iB.g)();
+         const IB = (0, OB.h)();
```

#### 2935. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26191` → after: `L26203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26203) · [Before (L26191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26191)

```diff
-         jB.vG.yjB(jB.zV).setSelectedSlotIndex(BB), zB = BB, (0, HB.sendColyMessage)(IB.Fi, zB)
+         IB.zW.lIB(IB.Jm).setSelectedSlotIndex(BB), ZB = BB, (0, aB.sendColyMessage)(GB.di, ZB)
```

#### 2936. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26199` → after: `L26211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26211) · [Before (L26199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26199)

```diff
-         return Yj.d.removeItemClient(zz(), jB, zB, QB)
+         return jI.c.removeItemClient(ZZ(), IB, ZB, TB)
```

#### 2937. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26206` → after: `L26218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26218) · [Before (L26206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26206)

```diff
-         return Yj.d.swapPosClient(zz(), jB, zB)
+         return jI.c.swapPosClient(ZZ(), IB, ZB)
```

#### 2938. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26214` → after: `L26226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26226) · [Before (L26214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26214)

```diff
-         return Yj.d.movePosWithAmtClient(zz(), jB, zB, QB)
+         return jI.c.movePosWithAmtClient(ZZ(), IB, ZB, TB)
```

#### 2939. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26223` → after: `L26235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26235) · [Before (L26223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26223)

```diff
-         return Yj.d.moveItemIntoIdxsClient(zz(), zB, QB, jB, nB).primarySlotIdx
+         return jI.c.moveItemIntoIdxsClient(ZZ(), ZB, TB, IB, JB).primarySlotIdx
```

#### 2940. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26227-L26229` → after: `L26239-L26241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26239-L26241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26239-L26241) · [Before (L26227-L26229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26227-L26229)

```diff
-         BB = (0, iB.c)().client.inventoryPrediction.predict(WB.b.closeChest()), (0, HB.sendColyMessage)(IB.dh, {
-           RI: BB
-         }), eB.n.Ly(Rj)
+         BB = (0, OB.d)().client.inventoryPrediction.predict(uB.b.closeChest()), (0, aB.sendColyMessage)(GB.Ig, {
+           lG: BB
+         }), fB.l.Gq(VI)
```

#### 2941. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26237` → after: `L26249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26249) · [Before (L26237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26237)

```diff
-           oN: zB
+           Cv: ZB
```

#### 2942. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26240-L26242` → after: `L26252-L26254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26252-L26254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26252-L26254) · [Before (L26240-L26242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26240-L26242)

```diff
-           (0, HB.sendColyMessage)(IB.Fg, {
-             vn: BB,
-             oN: jB
+           (0, aB.sendColyMessage)(GB.ng, {
+             XJ: BB,
+             Cv: IB
```

#### 2943. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26249` → after: `L26261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26261) · [Before (L26249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26249)

```diff
-           oN: zB
+           Cv: ZB
```

#### 2944. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26252-L26254` → after: `L26264-L26266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26264-L26266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26264-L26266) · [Before (L26252-L26254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26252-L26254)

```diff
-           (0, HB.sendColyMessage)(IB.Gi, {
-             vn: BB,
-             oN: jB
+           (0, aB.sendColyMessage)(GB.fi, {
+             XJ: BB,
+             Cv: IB
```

#### 2945. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26262` → after: `L26274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26274) · [Before (L26262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26262)

```diff
-           (0, HB.sendColyMessage)(IB.li, BB)
+           (0, aB.sendColyMessage)(GB.Rh, BB)
```

#### 2946. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26266-L26268` → after: `L26278-L26280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26278-L26280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26278-L26280) · [Before (L26266-L26268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26266-L26268)

```diff
-     var dz = zB(6425),
-       Iz = zB(39187),
-       Nz = zB(39686);
+     var oZ = ZB(6630),
+       GZ = ZB(39155),
+       vZ = ZB(39674);
```

#### 2947. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26275` → after: `L26287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26287) · [Before (L26275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26275)

```diff
-           const QB = (0, iB.g)();
+           const TB = (0, OB.h)();
```

#### 2948. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26290` → after: `L26302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26302) · [Before (L26290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26290)

```diff
-           const uB = jB.events.map((BB => (0, eB.q)(BB, NB)));
+           const kB = IB.events.map((BB => (0, fB.p)(BB, vB)));
```

#### 2949. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26299` → after: `L26311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26311) · [Before (L26299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26299)

```diff
-         health: Uj.l,
+         health: cI.m,
```

#### 2950. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26301` → after: `L26313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26313) · [Before (L26301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26301)

```diff
-         heldItemAim: (0, wB.o)((function() {
+         heldItemAim: (0, AB.h)((function() {
```

#### 2951. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26303-L26304` → after: `L26315-L26316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26315-L26316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26315-L26316) · [Before (L26303-L26304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26303-L26304)

```diff
-           const zB = (0, iB.g)(),
-             QB = null === (BB = zB.vG.XjB(zB.zV)) || void 0 === BB ? void 0 : BB.kS,
+           const ZB = (0, OB.h)(),
+             TB = null === (BB = ZB.zW.zZB(ZB.Jm)) || void 0 === BB ? void 0 : BB.JC,
```

#### 2952. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26315-L26316` → after: `L26327-L26328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26327-L26328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26327-L26328) · [Before (L26315-L26316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26315-L26316)

```diff
-           const jB = (0, iB.g)();
-           return !0 === (null === jB || void 0 === jB || null === (BB = jB.vG.JjB(jB.zV)) || void 0 === BB ? void 0 : BB.crouching)
+           const IB = (0, OB.h)();
+           return !0 === (null === IB || void 0 === IB || null === (BB = IB.zW.uIB(IB.Jm)) || void 0 === BB ? void 0 : BB.crouching)
```

#### 2953. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26319-L26320` → after: `L26331-L26332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26331-L26332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26331-L26332) · [Before (L26319-L26320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26319-L26320)

```diff
-           const BB = (0, iB.g)();
-           return BB ? (0, uj.d)(BB) : 0
+           const BB = (0, OB.h)();
+           return BB ? (0, kI.c)(BB) : 0
```

#### 2954. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26324-L26325` → after: `L26336-L26337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26336-L26337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26336-L26337) · [Before (L26324-L26325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26324-L26325)

```diff
-             const zB = (0, iB.g)();
-             return (0, uj.t)(null === (BB = zB.vG.mjB(zB.zV)) || void 0 === BB || null === (jB = BB.selectedItem) || void 0 === jB ? void 0 : jB.name)
+             const ZB = (0, OB.h)();
+             return (0, kI.p)(null === (BB = ZB.zW.fIB(ZB.Jm)) || void 0 === BB || null === (IB = BB.selectedItem) || void 0 === IB ? void 0 : IB.name)
```

#### 2955. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26330-L26334` → after: `L26342-L26346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26342-L26346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26342-L26346) · [Before (L26330-L26334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26330-L26334)

```diff
-           const BB = (0, iB.g)(),
-             jB = null === BB || void 0 === BB ? void 0 : BB.vG.CBB(BB.zV);
-           if (!jB) return (0, Uj.j)(!1, !1);
-           const zB = (0, dz.d)(!0 === kj.c.get("creative"), jB.physicsState.type) && BB.vG.hjB(BB.zV).isAlive;
-           return (0, Uj.j)(zB, jB._flying)
+           const BB = (0, OB.h)(),
+             IB = null === BB || void 0 === BB ? void 0 : BB.zW.dIB(BB.Jm);
+           if (!IB) return (0, cI.l)(!1, !1);
+           const ZB = (0, oZ.f)(!0 === yI.c.get("creative"), IB.physicsState.type) && BB.zW.hZB(BB.Jm).isAlive;
+           return (0, cI.l)(ZB, IB._flying)
```

#### 2956. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26338-L26339` → after: `L26350-L26351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26350-L26351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26350-L26351) · [Before (L26338-L26339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26338-L26339)

```diff
-         cosmeticsUpdated: (0, wB.e)("playerCosmeticsUpdated", (BB => {
-           const jB = (0, iB.g)().FBB;
+         cosmeticsUpdated: (0, AB.b)("playerCosmeticsUpdated", (BB => {
+           const IB = (0, OB.h)().oIB;
```

#### 2957. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26342-L26344` → after: `L26354-L26356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26354-L26356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26354-L26356) · [Before (L26342-L26344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26342-L26344)

```diff
-               Pd: zB,
-               Wd: QB,
-               ld: nB
+               ao: ZB,
+               Ho: TB,
+               Mo: JB
```

#### 2958. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26348-L26349` → after: `L26360-L26361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26360-L26361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26360-L26361) · [Before (L26348-L26349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26348-L26349)

```diff
-               Wd: QB,
-               ld: nB
+               Ho: TB,
+               Mo: JB
```

#### 2959. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26353` → after: `L26365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26365) · [Before (L26353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26353)

```diff
-         shotDamageToShow: (0, Uj.n)((BB => {
+         shotDamageToShow: (0, cI.o)((BB => {
```

#### 2960. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26355-L26356` → after: `L26367-L26368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26367-L26368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26367-L26368) · [Before (L26355-L26356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26355-L26356)

```diff
-           const zB = (0, iB.g)();
-           return !0 === (null === (jB = zB.RY[zB.zV][BB]) || void 0 === jB ? void 0 : jB.showDamageAmounts)
+           const ZB = (0, OB.h)();
+           return !0 === (null === (IB = ZB.Tm[ZB.Jm][BB]) || void 0 === IB ? void 0 : IB.showDamageAmounts)
```

#### 2961. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26358` → after: `L26370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26370) · [Before (L26358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26358)

```diff
-         boardEditRequested: (0, wB.e)("EditBoard", (BB => {
+         boardEditRequested: (0, AB.b)("EditBoard", (BB => {
```

#### 2962. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26366` → after: `L26378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26378) · [Before (L26366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26366)

```diff
-             } = (0, iB.c)();
+             } = (0, OB.d)();
```

#### 2963. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26376` → after: `L26388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26388) · [Before (L26376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26376)

```diff
-           (0, iB.c)().client.cameraController.applyTemporaryThirdPerson(jB)
+           (0, OB.d)().client.cameraController.applyTemporaryThirdPerson(IB)
```

#### 2964. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26379` → after: `L26391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26391) · [Before (L26379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26379)

```diff
-           (0, Iz.g)(BB)
+           (0, GZ.i)(BB)
```

#### 2965. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26390` → after: `L26402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26402) · [Before (L26390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26390)

```diff
-           (0, HB.sendColyMessage)(IB.hi, {
+           (0, aB.sendColyMessage)(GB.Qh, {
```

#### 2966. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26399` → after: `L26411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26411) · [Before (L26399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26399)

```diff
-           (0, HB.sendColyMessage)(IB.kh, BB, !0)
+           (0, aB.sendColyMessage)(GB.Og, BB, !0)
```

#### 2967. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26408-L26410` → after: `L26420-L26422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26420-L26422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26420-L26422) · [Before (L26408-L26410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26408-L26410)

```diff
-         QB = jB, nB = zB, (0, HB.sendColyMessage)(IB.Ah, {
-           pN: QB,
-           rN: nB
+         TB = IB, JB = ZB, (0, aB.sendColyMessage)(GB.kh, {
+           Tv: TB,
+           Jv: JB
```

#### 2968. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26416` → after: `L26428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26428) · [Before (L26416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26416)

```diff
-           Sa: zB
+           Cn: ZB
```

#### 2969. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26419-L26422` → after: `L26431-L26434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26431-L26434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26431-L26434) · [Before (L26419-L26422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26419-L26422)

```diff
-         QB = jB, nB = zB, (0, HB.sendColyMessage)(IB.gk, {
-           Ju: QB,
-           mu: nB,
-           yu: 5
+         TB = IB, JB = ZB, (0, aB.sendColyMessage)(GB.Mj, {
+           vk: TB,
+           kk: JB,
+           nk: 5
```

#### 2970. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26428` → after: `L26440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26440) · [Before (L26428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26428)

```diff
-           Sa: zB
+           Cn: ZB
```

#### 2971. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26431` → after: `L26443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26443) · [Before (L26431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26431)

```diff
-           (0, HB.sendColyMessage)(IB.fk, {
+           (0, aB.sendColyMessage)(GB.Jj, {
```

#### 2972. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26433` → after: `L26445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26445) · [Before (L26433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26433)

```diff
-             Sa: jB
+             Cn: IB
```

#### 2973. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26438-L26440` → after: `L26450-L26452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26450-L26452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26450-L26452) · [Before (L26438-L26440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26438-L26440)

```diff
-     var sz = zB(38187),
-       Jz = zB(39111),
-       mz = zB(106);
+     var FZ = ZB(38174),
+       NZ = ZB(39052),
+       gZ = ZB(105);
```

#### 2974. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26456` → after: `L26468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26468) · [Before (L26456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26456)

```diff
-           lifeformType: null === BB && null !== NB && void 0 !== NB ? NB : null,
+           lifeformType: null === BB && null !== vB && void 0 !== vB ? vB : null,
```

#### 2975. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26462-L26463` → after: `L26474-L26475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26474-L26475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26474-L26475) · [Before (L26462-L26463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26462-L26463)

```diff
-       const uB = (0, iB.c)(),
-         UB = (0, QB.h)(nB),
+       const kB = (0, OB.d)(),
+         cB = (0, TB.i)(JB),
```

#### 2976. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26469-L26470` → after: `L26481-L26482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26481-L26482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26481-L26482) · [Before (L26469-L26470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26469-L26470)

```diff
-         lifeformType: null === aB && null !== (jB = null !== pB && void 0 !== pB ? pB : NB) && void 0 !== jB ? jB : null,
-         colour: IB || (0, Jz.k)(nB, "killfeedColour") || (UB ? "#2727f1" : "#912c2c"),
+         lifeformType: null === nB && null !== (IB = null !== hB && void 0 !== hB ? hB : vB) && void 0 !== IB ? IB : null,
+         colour: GB || (0, NZ.i)(JB, "killfeedColour") || (cB ? "#2727f1" : "#912c2c"),
```

#### 2977. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26472` → after: `L26484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26484) · [Before (L26472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26472)

```diff
-         realName: "Player" === pB && null !== (zB = uB.getRawEntityName(nB)) && void 0 !== zB ? zB : null
+         realName: "Player" === hB && null !== (ZB = kB.getRawEntityName(JB)) && void 0 !== ZB ? ZB : null
```

#### 2978. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26476` → after: `L26488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26488) · [Before (L26476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26476)

```diff
-         players: (0, wB.o)((function() {
+         players: (0, AB.h)((function() {
```

#### 2979. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26478` → after: `L26490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26490) · [Before (L26478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26478)

```diff
-           const jB = (0, iB.c)();
+           const IB = (0, OB.d)();
```

#### 2980. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26489` → after: `L26501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26501) · [Before (L26489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26489)

```diff
-               name: null !== (nB = jB.getRawEntityName(IB)) && void 0 !== nB ? nB : null,
+               name: null !== (JB = IB.getRawEntityName(GB)) && void 0 !== JB ? JB : null,
```

#### 2981. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26491` → after: `L26503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26503) · [Before (L26491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26491)

```diff
-               cosmetics: null !== (dB = sz.d[IB]) && void 0 !== dB ? dB : null
+               cosmetics: null !== (oB = FZ.d[GB]) && void 0 !== oB ? oB : null
```

#### 2982. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26497` → after: `L26509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26509) · [Before (L26497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26497)

```diff
-             localId: null !== (BB = (0, iB.g)().FBB) && void 0 !== BB ? BB : null
+             localId: null !== (BB = (0, OB.h)().oIB) && void 0 !== BB ? BB : null
```

#### 2983. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26500` → after: `L26512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26512) · [Before (L26500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26500)

```diff
-         lobbyLeaderboardRows: (0, wB.o)((function() {
+         lobbyLeaderboardRows: (0, AB.h)((function() {
```

#### 2984. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26502` → after: `L26514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26514) · [Before (L26502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26502)

```diff
-           for (const IB of null !== (jB = null === (zB = (0, iB.c)()) || void 0 === zB ? void 0 : zB.getPlayerIds()) && void 0 !== jB ? jB : []) {
+           for (const GB of null !== (IB = null === (ZB = (0, OB.d)()) || void 0 === ZB ? void 0 : ZB.getPlayerIds()) && void 0 !== IB ? IB : []) {
```

#### 2985. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26505-L26507` → after: `L26517-L26519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26517-L26519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26517-L26519) · [Before (L26505-L26507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26505-L26507)

```diff
-               colour: null !== (QB = (0, Jz.k)(IB, "colorInLobbyLeaderboard")) && void 0 !== QB ? QB : null,
-               values: null !== (nB = (0, Jz.k)(IB, "lobbyLeaderboardValues")) && void 0 !== nB ? nB : null,
-               tags: null !== (dB = (0, Jz.k)(IB, "lobbyLeaderboardTags")) && void 0 !== dB ? dB : null
+               colour: null !== (TB = (0, NZ.i)(GB, "colorInLobbyLeaderboard")) && void 0 !== TB ? TB : null,
+               values: null !== (JB = (0, NZ.i)(GB, "lobbyLeaderboardValues")) && void 0 !== JB ? JB : null,
+               tags: null !== (oB = (0, NZ.i)(GB, "lobbyLeaderboardTags")) && void 0 !== oB ? oB : null
```

#### 2986. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26516` → after: `L26528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26528) · [Before (L26516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26516)

```diff
-             const jB = (0, eB.q)("playerKilled", (jB => {
+             const IB = (0, fB.p)("playerKilled", (IB => {
```

#### 2987. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26536` → after: `L26548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26548) · [Before (L26536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26536)

```diff
-               zB = (0, eB.q)("customKillfeed", (jB => {
+               ZB = (0, fB.p)("customKillfeed", (IB => {
```

#### 2988. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26554` → after: `L26566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26566) · [Before (L26554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26554)

```diff
-         chatReceived: (0, Uj.f)((function(BB) {
+         chatReceived: (0, cI.h)((function(BB) {
```

#### 2989. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26556` → after: `L26568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26568) · [Before (L26556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26556)

```diff
-           const QB = (0, iB.c)(),
+           const TB = (0, OB.d)(),
```

#### 2990. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26560-L26562` → after: `L26572-L26574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26572-L26574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26572-L26574) · [Before (L26560-L26562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26560-L26562)

```diff
-             name: null !== nB && void 0 !== nB ? nB : null,
-             local: nB === QB.getRawEntityName((0, iB.g)().zV),
-             profileEffect: null !== (jB = null === (zB = sz.d[BB]) || void 0 === zB ? void 0 : zB.profileEffect) && void 0 !== jB ? jB : null
+             name: null !== JB && void 0 !== JB ? JB : null,
+             local: JB === TB.getRawEntityName((0, OB.h)().Jm),
+             profileEffect: null !== (IB = null === (ZB = FZ.d[BB]) || void 0 === ZB ? void 0 : ZB.profileEffect) && void 0 !== IB ? IB : null
```

#### 2991. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26569` → after: `L26581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26581) · [Before (L26569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26569)

```diff
-           (0, HB.sendColyMessage)(IB.Jj, BB)
+           (0, aB.sendColyMessage)(GB.rj, BB)
```

#### 2992. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26579` → after: `L26591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26591) · [Before (L26579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26579)

```diff
-           (0, HB.sendColyMessage)(IB.Th, {
+           (0, aB.sendColyMessage)(GB.Dh, {
```

#### 2993. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26590-L26594` → after: `L26602-L26606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26602-L26606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26602-L26606) · [Before (L26590-L26594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26590-L26594)

```diff
-       (0, HB.sendColyMessage)(IB.tk, {
-         Ga: BB,
-         La: jB,
-         sN: zB,
-         JN: QB
+       (0, aB.sendColyMessage)(GB._j, {
+         Un: BB,
+         Wn: IB,
+         ov: ZB,
+         Gv: TB
```

#### 2994. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26600` → after: `L26612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26612) · [Before (L26600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26600)

```diff
-           ha: jB,
+           Xn: IB,
```

#### 2995. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26609` → after: `L26621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26621) · [Before (L26609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26609)

```diff
-           eB.n.Ly("chat", BB)
+           fB.l.Gq("chat", BB)
```

#### 2996. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26611-L26613` → after: `L26623-L26625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26623-L26625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26623-L26625) · [Before (L26611-L26613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26611-L26613)

```diff
-           (0, HB.sendColyMessage)(IB.Ig, {
-             ha: BB,
-             Xa: jB
+           (0, aB.sendColyMessage)(GB.pg, {
+             Xn: BB,
+             Ln: IB
```

#### 2997. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26619-L26620` → after: `L26631-L26632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26631-L26632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26631-L26632) · [Before (L26619-L26620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26619-L26620)

```diff
-         jB = BB, (0, HB.sendColyMessage)(IB.Ph, {
-           ku: jB
+         IB = BB, (0, aB.sendColyMessage)(GB.yh, {
+           hk: IB
```

#### 2998. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26627` → after: `L26639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26639) · [Before (L26627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26627)

```diff
-           sN: QB,
+           ov: TB,
```

#### 2999. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26635` → after: `L26647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26647) · [Before (L26635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26635)

```diff
-           sN: zB,
+           ov: ZB,
```

#### 3000. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26642` → after: `L26654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26654) · [Before (L26642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26642)

```diff
-           (0, HB.sendColyMessage)(IB.Cj, BB)
+           (0, aB.sendColyMessage)(GB.cj, BB)
```

#### 3001. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26648` → after: `L26660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26660) · [Before (L26648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26648)

```diff
-           sN: zB,
+           ov: ZB,
```

#### 3002. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26652-L26654` → after: `L26664-L26666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26664-L26666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26664-L26666) · [Before (L26652-L26654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26652-L26654)

```diff
-           (0, HB.sendColyMessage)("customGame" === BB ? IB.sh : IB.pi, {
-             sN: jB,
-             JN: zB
+           (0, aB.sendColyMessage)("customGame" === BB ? GB.Zg : GB.Sh, {
+             ov: IB,
+             Gv: ZB
```

#### 3003. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26660-L26661` → after: `L26672-L26673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26672-L26673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26672-L26673) · [Before (L26660-L26661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26660-L26661)

```diff
-           (0, HB.sendColyMessage)(IB.Si, {
-             TN: BB
+           (0, aB.sendColyMessage)(GB.oi, {
+             Mv: BB
```

#### 3004. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26667` → after: `L26679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26679) · [Before (L26667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26667)

```diff
-           (0, HB.sendColyMessage)(IB.nk, BB)
+           (0, aB.sendColyMessage)(GB.Sj, BB)
```

#### 3005. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26671-L26672` → after: `L26683-L26684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26683-L26684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26683-L26684) · [Before (L26671-L26672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26671-L26672)

```diff
-     var Mz = zB(39695),
-       Ez = zB(2505);
+     var sZ = ZB(39680),
+       wZ = ZB(2510);
```

#### 3006. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26681-L26684` → after: `L26693-L26696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26693-L26696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26693-L26696) · [Before (L26681-L26684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26681-L26684)

```diff
-         nB = jB, dB = zB, NB = QB, (0, HB.sendColyMessage)(IB.jk, {
-           iu: nB,
-           qu: dB,
-           fu: NB
+         JB = IB, oB = ZB, vB = TB, (0, aB.sendColyMessage)(GB.Nj, {
+           Wk: JB,
+           Ck: oB,
+           Qk: vB
```

#### 3007. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26694-L26697` → after: `L26706-L26709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26706-L26709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26706-L26709) · [Before (L26694-L26697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26694-L26697)

```diff
-         nB = jB, dB = zB, NB = QB, (0, HB.sendColyMessage)(IB.lk, {
-           jN: nB,
-           zN: dB,
-           QN: NB
+         JB = IB, oB = ZB, vB = TB, (0, aB.sendColyMessage)(GB.Rj, {
+           bG: JB,
+           xG: oB,
+           EG: vB
```

#### 3008. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26702` → after: `L26714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26714) · [Before (L26702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26702)

```diff
-           (0, HB.sendColyMessage)(IB.qk, BB)
+           (0, aB.sendColyMessage)(GB.Vj, BB)
```

#### 3009. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26711-L26713` → after: `L26723-L26725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26723-L26725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26723-L26725) · [Before (L26711-L26713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26711-L26713)

```diff
-         QB = jB, nB = (0, Mz.d)(zB), (0, HB.sendColyMessage)(IB.Gj, {
-           dN: nB,
-           nN: QB
+         TB = IB, JB = (0, sZ.e)(ZB), (0, aB.sendColyMessage)(GB.pj, {
+           KG: JB,
+           DG: TB
```

#### 3010. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26718` → after: `L26730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26730) · [Before (L26718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26718)

```diff
-           (0, HB.sendColyMessage)(IB.hh, BB, (0, Ez.c)(BB))
+           (0, aB.sendColyMessage)(GB.Lg, BB, (0, wZ.h)(BB))
```

#### 3011. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26722-L26725` → after: `L26734-L26737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26734-L26737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26734-L26737) · [Before (L26722-L26725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26722-L26725)

```diff
-     var qz = zB(37767),
-       fz = zB(37873),
-       oz = zB(39193),
-       Hz = zB(38111);
+     var YZ = ZB(37722),
+       iZ = ZB(37834),
+       pZ = ZB(39170),
+       aZ = ZB(38089);
```

#### 3012. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26730` → after: `L26742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26742) · [Before (L26730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26730)

```diff
-         ny: dB,
+         lg: oB,
```

#### 3013. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26732-L26733` → after: `L26744-L26745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26744-L26745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26744-L26745) · [Before (L26732-L26733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26732-L26733)

```diff
-       } = BB.pm, NB = BB.pm.ozB(), uB = jB * (null !== (QB = null === NB || void 0 === NB ? void 0 : NB.renderWidth) && void 0 !== QB ? QB : IB.getRenderWidth()), UB = zB * (null !== (nB = null === NB || void 0 === NB ? void 0 : NB.renderHeight) && void 0 !== nB ? nB : IB.getRend … [truncated]
-       return NB ? (0, Hz.g)(NB, uB, UB) : dB.createPickingRay(uB, UB, null, null)
+       } = BB.Ig, vB = BB.Ig.TTB(), kB = IB * (null !== (TB = null === vB || void 0 === vB ? void 0 : vB.renderWidth) && void 0 !== TB ? TB : GB.getRenderWidth()), cB = ZB * (null !== (JB = null === vB || void 0 === vB ? void 0 : vB.renderHeight) && void 0 !== JB ? JB : GB.getRend … [truncated]
+       return vB ? (0, aZ.e)(vB, kB, cB) : oB.createPickingRay(kB, cB, null, null)
```

#### 3014. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26735-L26736` → after: `L26747-L26748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26747-L26748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26747-L26748) · [Before (L26735-L26736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26735-L26736)

```diff
-     var Fz = zB(38162),
-       Yz = zB(39700);
+     var MZ = ZB(38146),
+       jZ = ZB(39683);
```

#### 3015. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26738-L26742` → after: `L26750-L26754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26750-L26754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26750-L26754) · [Before (L26738-L26742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26738-L26742)

```diff
-         fullInventory: (0, wB.o)((function() {
-           return (0, oz.c)((0, iB.g)())
-         }), ["playerInventoryComponentChanged"], (0, wB.l)("useInventory", "useFullInventory")),
-         freeCamera: (0, wB.o)((function() {
-           const BB = (0, iB.c)().client.freeCameraController;
+         fullInventory: (0, AB.h)((function() {
+           return (0, pZ.b)((0, OB.h)())
+         }), ["playerInventoryComponentChanged"], (0, AB.f)("useInventory", "useFullInventory")),
+         freeCamera: (0, AB.h)((function() {
+           const BB = (0, OB.d)().client.freeCameraController;
```

#### 3016. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26751-L26752` → after: `L26763-L26764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26763-L26764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26763-L26764) · [Before (L26751-L26752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26751-L26752)

```diff
-           const BB = (0, iB.g)();
-           return BB.vG.iG(BB.zV)
+           const BB = (0, OB.h)();
+           return BB.zW.aU(BB.Jm)
```

#### 3017. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26756` → after: `L26768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26768) · [Before (L26756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26756)

```diff
-           return null !== (BB = null === (jB = (0, iB.g)().mBB) || void 0 === jB ? void 0 : jB.position) && void 0 !== BB ? BB : null
+           return null !== (BB = null === (IB = (0, OB.h)().lBB) || void 0 === IB ? void 0 : IB.position) && void 0 !== BB ? BB : null
```

#### 3018. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26763` → after: `L26775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26775) · [Before (L26763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26763)

```diff
-           const QB = (0, iB.g)(),
+           const TB = (0, OB.h)(),
```

#### 3019. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26769` → after: `L26781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26781) · [Before (L26769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26769)

```diff
-           (0, iB.c)().WK(IB, IB);
+           (0, OB.d)().HV(GB, GB);
```

#### 3020. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26773` → after: `L26785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26785) · [Before (L26773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26773)

```diff
-           return (0, Yz.f)(((BB, jB, zB) => (NB = QB.zr.cW(BB, jB, zB), 0 !== NB)), IB, [dB.x, dB.y, dB.z], Yz.d, uB, UB) ? {
+           return (0, jZ.g)(((BB, IB, ZB) => (vB = TB.vz.ND(BB, IB, ZB), 0 !== vB)), GB, [oB.x, oB.y, oB.z], jZ.e, kB, cB) ? {
```

#### 3021. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26776` → after: `L26788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26788) · [Before (L26776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26776)

```diff
-             name: (0, Qj.g)(NB)
+             name: (0, TI.e)(vB)
```

#### 3022. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26782-L26785` → after: `L26794-L26797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26794-L26797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26794-L26797) · [Before (L26782-L26785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26782-L26785)

```diff
-             vG: dB,
-             zV: IB
-           } = (0, iB.g)(), NB = null === (BB = dB.mjB(IB)) || void 0 === BB ? void 0 : BB.selectedItem;
-           return null !== NB && void 0 !== NB && null !== (jB = NB.attributes) && void 0 !== jB && null !== (zB = jB.customAttributes) && void 0 !== zB && null !== (QB = zB.enchantments) && void 0 !== QB && QB.Momentum && null !== (nB = dB.XjB(IB).fistItem.momentumFrac) && void 0 … [truncated]
+             zW: oB,
+             Jm: GB
+           } = (0, OB.h)(), vB = null === (BB = oB.fIB(GB)) || void 0 === BB ? void 0 : BB.selectedItem;
+           return null !== vB && void 0 !== vB && null !== (IB = vB.attributes) && void 0 !== IB && null !== (ZB = IB.customAttributes) && void 0 !== ZB && null !== (TB = ZB.enchantments) && void 0 !== TB && TB.Momentum && null !== (JB = oB.zZB(GB).fistItem.momentumFrac) && void 0 … [truncated]
```

#### 3023. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26787-L26788` → after: `L26799-L26800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26799-L26800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26799-L26800) · [Before (L26787-L26788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26787-L26788)

```diff
-         screenPos: BB => (0, Fz.i)((0, iB.g)(), BB),
-         cameraZoom: () => (0, iB.c)().client.cameraController.getZoomDistance(),
+         screenPos: BB => (0, MZ.h)((0, OB.h)(), BB),
+         cameraZoom: () => (0, OB.d)().client.cameraController.getZoomDistance(),
```

#### 3024. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26790-L26791` → after: `L26802-L26803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26802-L26803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26802-L26803) · [Before (L26790-L26791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26790-L26791)

```diff
-           const BB = (0, iB.g)();
-           return (0, iB.c)().client.freeCameraController.isEnabled() ? BB.vG.iG(BB.camera.Jw) : null
+           const BB = (0, OB.h)();
+           return (0, OB.d)().client.freeCameraController.isEnabled() ? BB.zW.aU(BB.camera.IK) : null
```

#### 3025. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26794-L26796` → after: `L26806-L26808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26806-L26808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26806-L26808) · [Before (L26794-L26796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26794-L26796)

```diff
-           const BB = (0, iB.g)(),
-             jB = BB.vG.pT(BB.zV);
-           if (!jB || BB.vG.CBB(BB.zV)._flying) return !1;
+           const BB = (0, OB.h)(),
+             IB = BB.zW.vx(BB.Jm);
+           if (!IB || BB.zW.dIB(BB.Jm)._flying) return !1;
```

#### 3026. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26800` → after: `L26812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26812) · [Before (L26800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26800)

```diff
-           } = BB.vG.Gw(BB.zV), nB = {
+           } = BB.zW.zK(BB.Jm), JB = {
```

#### 3027. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26802` → after: `L26814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26814) · [Before (L26802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26802)

```diff
-             Hy: jB.Hy,
+             zq: IB.zq,
```

#### 3028. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26805` → after: `L26817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26817) · [Before (L26805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26805)

```diff
-           return (0, fz.f)(nB, (0, fz.b)(BB))
+           return (0, iZ.e)(JB, (0, iZ.d)(BB))
```

#### 3029. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26808-L26809` → after: `L26820-L26821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26820-L26821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26820-L26821) · [Before (L26808-L26809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26808-L26809)

```diff
-           const BB = (0, iB.g)();
-           return (0, qz.h)(BB, BB.zV, !1).map((BB => (0, Qj.g)(BB)))
+           const BB = (0, OB.h)();
+           return (0, YZ.c)(BB, BB.Jm, !1).map((BB => (0, TI.e)(BB)))
```

#### 3030. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26814` → after: `L26826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26826) · [Before (L26814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26814)

```diff
-           (0, iB.c)().client.cameraController.setCameraZoom(BB)
+           (0, OB.d)().client.cameraController.setCameraZoom(BB)
```

#### 3031. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26817` → after: `L26829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26829) · [Before (L26817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26817)

```diff
-           (0, iB.c)().client.freeCameraController.setMovesFly(BB)
+           (0, OB.d)().client.freeCameraController.setMovesFly(BB)
```

#### 3032. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26820` → after: `L26832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26832) · [Before (L26820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26820)

```diff
-           (0, iB.g)().tBB(BB && {
+           (0, OB.h)().DBB(BB && {
```

#### 3033. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26826` → after: `L26838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26838) · [Before (L26826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26826)

```diff
-     var Zz = zB(39703);
+     var mZ = ZB(39689);
```

#### 3034. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26829-L26830` → after: `L26841-L26842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26841-L26842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26841-L26842) · [Before (L26829-L26830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26829-L26830)

```diff
-       const BB = (0, iB.g)(),
-         jB = (0, iB.c)();
+       const BB = (0, OB.h)(),
+         IB = (0, OB.d)();
```

#### 3035. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26834` → after: `L26846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26846) · [Before (L26834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26834)

```diff
-           const zB = null === (jB = BB.vG.Gw(BB.zV)) || void 0 === jB ? void 0 : jB.position;
+           const ZB = null === (IB = BB.zW.zK(BB.Jm)) || void 0 === IB ? void 0 : IB.position;
```

#### 3036. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26838` → after: `L26850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26850) · [Before (L26838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26838)

```diff
-           const zB = BB.zr.HzB(jB[0], jB[1], jB[2]);
+           const ZB = BB.vz.JTB(IB[0], IB[1], IB[2]);
```

#### 3037. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26841` → after: `L26853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26853) · [Before (L26841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26841)

```diff
-         blockName: BB => (0, Qj.g)(BB),
+         blockName: BB => (0, TI.e)(BB),
```

#### 3038. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26844` → after: `L26856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26856) · [Before (L26844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26844)

```diff
-           const QB = BB.vG.yjB(BB.zV);
+           const TB = BB.zW.lIB(BB.Jm);
```

#### 3039. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26846` → after: `L26858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26858) · [Before (L26846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26846)

```diff
-             slots: (null !== (jB = null === QB || void 0 === QB ? void 0 : QB.items) && void 0 !== jB ? jB : []).map((BB => BB ? {
+             slots: (null !== (IB = null === TB || void 0 === TB ? void 0 : TB.items) && void 0 !== IB ? IB : []).map((BB => BB ? {
```

#### 3040. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26850` → after: `L26862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26862) · [Before (L26850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26850)

```diff
-             heldSlot: null !== (zB = null === QB || void 0 === QB ? void 0 : QB.getSelectedSlotIndex()) && void 0 !== zB ? zB : 0
+             heldSlot: null !== (ZB = null === TB || void 0 === TB ? void 0 : TB.getSelectedSlotIndex()) && void 0 !== ZB ? ZB : 0
```

#### 3041. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26858` → after: `L26870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26870) · [Before (L26858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26858)

```diff
-             if (String(IB) === String(BB.zV) || IB === BB.FBB) continue;
+             if (String(GB) === String(BB.Jm) || GB === BB.oIB) continue;
```

#### 3042. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26860` → after: `L26872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26872) · [Before (L26860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26860)

```diff
-               uB = null === (nB = BB.vG.Gw(IB)) || void 0 === nB ? void 0 : nB.position;
+               kB = null === (JB = BB.zW.zK(GB)) || void 0 === JB ? void 0 : JB.position;
```

#### 3043. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26864-L26865` → after: `L26876-L26877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26876-L26877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26876-L26877) · [Before (L26864-L26865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26864-L26865)

```diff
-               kind: "Player" === UB ? "player" : "Player" === NB ? null !== UB && void 0 !== UB ? UB : "NPC" : NB,
-               name: null !== (dB = jB.getRawEntityName(IB)) && void 0 !== dB ? dB : null,
+               kind: "Player" === cB ? "player" : "Player" === vB ? null !== cB && void 0 !== cB ? cB : "NPC" : vB,
+               name: null !== (oB = IB.getRawEntityName(GB)) && void 0 !== oB ? oB : null,
```

#### 3044. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26873` → after: `L26885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26885) · [Before (L26873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26873)

```diff
-           for (const QB of jB.client.iterateItemIds()) BB.vG.HBB(QB, "itemState") && zB++;
+           for (const TB of IB.client.iterateItemIds()) BB.zW.TIB(TB, "itemState") && ZB++;
```

#### 3045. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26882-L26885` → after: `L26894-L26897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26894-L26897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26894-L26897) · [Before (L26882-L26885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26882-L26885)

```diff
-     var Pz = zB(37007),
-       Wz = zB(37012),
-       ez = zB(37037),
-       lz = zB(37050);
+     var eZ = ZB(36966),
+       uZ = ZB(36969),
+       fZ = ZB(36986),
+       lZ = ZB(36996);
```

#### 3046. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26889` → after: `L26901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26901) · [Before (L26889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26889)

```diff
-         if (!zB) throw new Error(Wz.d.viewerLoadFailed.text);
+         if (!ZB) throw new Error(uZ.b.viewerLoadFailed.text);
```

#### 3047. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26892` → after: `L26904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26904) · [Before (L26892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26892)

```diff
-           QB = (0, ez.c)(BB)
+           TB = (0, fZ.b)(BB)
```

#### 3048. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26894` → after: `L26906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26906) · [Before (L26894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26894)

```diff
-           throw nB instanceof lz.i && nB.older ? new Error(Wz.d.replayTooOld.text, {
+           throw JB instanceof lZ.l && JB.older ? new Error(uZ.b.replayTooOld.text, {
```

#### 3049. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26922` → after: `L26934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26934) · [Before (L26922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26922)

```diff
-         return null === (BB = (0, iB.c)().client) || void 0 === BB ? void 0 : BB.gameReplayer
+         return null === (BB = (0, OB.d)().client) || void 0 === BB ? void 0 : BB.gameReplayer
```

#### 3050. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26925-L26927` → after: `L26937-L26939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26937-L26939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26937-L26939) · [Before (L26925-L26927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26925-L26927)

```diff
-     var xz = zB(2002);
-     var Kz = zB(39179),
-       Cz = zB(36574);
+     var tZ = ZB(2020);
+     var bZ = ZB(39152),
+       xZ = ZB(36529);
```

#### 3051. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26932` → after: `L26944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26944) · [Before (L26932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26932)

```diff
-       return null === (BB = (0, iB.c)()) || void 0 === BB || null === (jB = BB.client) || void 0 === jB ? void 0 : jB.gameReplayer
+       return null === (BB = (0, OB.d)()) || void 0 === BB || null === (IB = BB.client) || void 0 === IB ? void 0 : IB.gameReplayer
```

#### 3052. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26937` → after: `L26949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26949) · [Before (L26937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26937)

```diff
-       return null === (BB = (0, iB.c)()) || void 0 === BB || null === (jB = BB.client) || void 0 === jB ? void 0 : jB.gameRecorder
+       return null === (BB = (0, OB.d)()) || void 0 === BB || null === (IB = BB.client) || void 0 === IB ? void 0 : IB.gameRecorder
```

#### 3053. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26949` → after: `L26961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26961) · [Before (L26949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26949)

```diff
-         const zB = cz.map((zB => (0, eB.q)(zB, (() => {
+         const ZB = EZ.map((ZB => (0, fB.p)(ZB, (() => {
```

#### 3054. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26971-L26972` → after: `L26983-L26984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26983-L26984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26983-L26984) · [Before (L26971-L26972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26971-L26972)

```diff
-                 QB = null !== (jB = null === zB || void 0 === zB ? void 0 : zB.getRecording()) && void 0 !== jB ? jB : null;
-               return zB && null !== QB ? (BB = (0, wB.s)(BB, {
+                 TB = null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.getRecording()) && void 0 !== IB ? IB : null;
+               return ZB && null !== TB ? (BB = (0, AB.l)(BB, {
```

#### 3055. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26974` → after: `L26986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26986) · [Before (L26974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26974)

```diff
-                 vp: zB.getLastAppliedTickIndex(),
+                 Iz: ZB.getLastAppliedTickIndex(),
```

#### 3056. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26976` → after: `L26988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26988) · [Before (L26976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26976)

```diff
-                 KF: QB.meta.KF,
+                 bM: TB.meta.bM,
```

#### 3057. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26980` → after: `L26992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R26992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L26992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L26992) · [Before (L26980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26980)

```diff
-                 freecam: (0, iB.c)().client.freeCameraController.isEnabled()
+                 freecam: (0, OB.d)().client.freeCameraController.isEnabled()
```

#### 3058. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L26997` → after: `L27009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27009) · [Before (L26997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L26997)

```diff
-                 uB = null !== (dB = null === NB || void 0 === NB || null === (IB = NB.getRecording()) || void 0 === IB ? void 0 : IB.editState) && void 0 !== dB ? dB : null;
+                 kB = null !== (oB = null === vB || void 0 === vB || null === (GB = vB.getRecording()) || void 0 === GB ? void 0 : GB.editState) && void 0 !== oB ? oB : null;
```

#### 3059. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27002` → after: `L27014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27014) · [Before (L27002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27002)

```diff
-               return null !== BB && uB === jB && UB === zB && aB === QB && pB === nB || (jB = uB, zB = UB, QB = aB, nB = pB, BB = (0, wB.s)(BB, {
+               return null !== BB && kB === IB && cB === ZB && nB === TB && hB === JB || (IB = kB, ZB = cB, TB = nB, JB = hB, BB = (0, AB.l)(BB, {
```

#### 3060. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27029` → after: `L27041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27041) · [Before (L27029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27029)

```diff
-               return BB = (0, wB.s)(BB, {
+               return BB = (0, AB.l)(BB, {
```

#### 3061. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27043` → after: `L27055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27055) · [Before (L27043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27043)

```diff
-                     dB && null === zB ? zB = (0, aB.B)(QB) : dB || null === zB || (zB(), zB = null), BB(nB)
+                     oB && null === ZB ? ZB = (0, nB.x)(TB) : oB || null === ZB || (ZB(), ZB = null), BB(JB)
```

#### 3062. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27045` → after: `L27057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27057) · [Before (L27045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27045)

```diff
-                   nB = ["gameRecorder|setRecording", "gameRecorder|setClipping", "gameRecorder|clipSettingsChanged"].map((BB => (0, eB.q)(BB, QB)));
+                   JB = ["gameRecorder|setRecording", "gameRecorder|setClipping", "gameRecorder|clipSettingsChanged"].map((BB => (0, fB.p)(BB, TB)));
```

#### 3063. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27054` → after: `L27066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27066) · [Before (L27054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27054)

```diff
-           replayVideoExporting: (0, wB.o)(Kz.d, ["replayViewer|videoExportChanged"])
+           replayVideoExporting: (0, AB.h)(bZ.d, ["replayViewer|videoExportChanged"])
```

#### 3064. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27063-L27064` → after: `L27075-L27076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27075-L27076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27075-L27076) · [Before (L27063-L27064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27063-L27064)

```diff
-           replayUiActionRequested: (0, wB.e)("replayViewer|uiActionRequested"),
-           replayViewerRequested: (0, wB.e)("replayViewer|requested")
+           replayUiActionRequested: (0, AB.b)("replayViewer|uiActionRequested"),
+           replayViewerRequested: (0, AB.b)("replayViewer|requested")
```

#### 3065. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27092` → after: `L27104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27104) · [Before (L27092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27092)

```diff
-               vp: zB,
+               Iz: ZB,
```

#### 3066. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27164` → after: `L27176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27176) · [Before (L27164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27164)

```diff
-             if ((0, Cz.c)(BB)) {
+             if ((0, xZ.h)(BB)) {
```

#### 3067. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27169` → after: `L27181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27181) · [Before (L27169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27169)

```diff
-                 throw (0, Cz.c)(!BB), zB
+                 throw (0, xZ.h)(!BB), ZB
```

#### 3068. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27171` → after: `L27183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27183) · [Before (L27171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27171)

```diff
-               eB.n.Ly("replayViewer|openChanged", BB)
+               fB.l.Gq("replayViewer|openChanged", BB)
```

#### 3069. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27179` → after: `L27191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27191) · [Before (L27179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27179)

```diff
-             const QB = (0, iB.g)();
+             const TB = (0, OB.h)();
```

#### 3070. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27181` → after: `L27193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27193) · [Before (L27181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27181)

```diff
-               0 === jB && 0 === zB || (BB.camera.FW.dx = jB, BB.camera.FW.dy = zB, BB.camera.Tl = 1, BB.camera.zK(!0), BB.camera.Tl = 0)
+               0 === IB && 0 === ZB || (BB.camera.zD.dx = IB, BB.camera.zD.dy = ZB, BB.camera.eD = 1, BB.camera.cV(!0), BB.camera.eD = 0)
```

#### 3071. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27185` → after: `L27197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27197) · [Before (L27185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27185)

```diff
-             (0, iB.c)().client.freeCameraController.setAnalogueMove(BB)
+             (0, OB.d)().client.freeCameraController.setAnalogueMove(BB)
```

#### 3072. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27190` → after: `L27202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27202) · [Before (L27190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27190)

```diff
-               DN: zB
+               sv: ZB
```

#### 3073. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27192` → after: `L27204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27204) · [Before (L27192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27192)

```diff
-             (0, iB.c)().client.freeCameraController.handlefreeCamKeyPress(jB, null, zB)
+             (0, OB.d)().client.freeCameraController.handlefreeCamKeyPress(IB, null, ZB)
```

#### 3074. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27210` → after: `L27222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27222) · [Before (L27210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27210)

```diff
-             } = (0, iB.g)(), zB = jB.iG(), QB = jB.uC();
+             } = (0, OB.h)(), ZB = IB.aU(), TB = IB.fV();
```

#### 3075. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27216` → after: `L27228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27228) · [Before (L27216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27216)

```diff
-           leaveGameReloadsPage: () => (0, iB.c)().client.leaveGameReloadsPage()
+           leaveGameReloadsPage: () => (0, OB.d)().client.leaveGameReloadsPage()
```

#### 3076. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27221-L27232` → after: `L27233-L27244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27233-L27244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27233-L27244) · [Before (L27221-L27232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27221-L27232)

```diff
-     var QQ = zB(36530),
-       nQ = zB(376),
-       dQ = zB(777),
-       IQ = zB(2482),
-       NQ = zB(2491),
-       uQ = zB(37844),
-       UQ = zB(1948),
-       aQ = zB(4866),
-       pQ = zB(36665),
-       rQ = zB(39173),
-       sQ = zB(38470),
-       JQ = zB(39191);
+     var TT = ZB(36483),
+       JT = ZB(360),
+       oT = ZB(760),
+       GT = ZB(2481),
+       vT = ZB(2489),
+       kT = ZB(37809),
+       cT = ZB(1956),
+       nT = ZB(4952),
+       hT = ZB(36602),
+       zT = ZB(39135),
+       FT = ZB(38431),
+       NT = ZB(39163);
```

#### 3077. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27236-L27237` → after: `L27248-L27249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27248-L27249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27248-L27249) · [Before (L27236-L27237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27236-L27237)

```diff
-       const jB = (0, iB.g)();
-       return null === (BB = jB.vG.XjB(jB.zV)) || void 0 === BB ? void 0 : BB.kS
+       const IB = (0, OB.h)();
+       return null === (BB = IB.zW.zZB(IB.Jm)) || void 0 === BB ? void 0 : BB.JC
```

#### 3078. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27243` → after: `L27255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27255) · [Before (L27243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27243)

```diff
-       } = (0, iB.g)();
+       } = (0, OB.h)();
```

#### 3079. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27246` → after: `L27258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27258) · [Before (L27246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27246)

```diff
-       dB ? null === QB || void 0 === QB || QB.DzB() : null === QB || void 0 === QB || QB.YzB(), (0, rQ.k)(dB ? oB.c.UpFireSecondary : oB.c.UpFirePrimary), (0, rQ.f)(!1)
+       oB ? null === TB || void 0 === TB || TB.oTB() : null === TB || void 0 === TB || TB.GTB(), (0, zT.m)(oB ? pB.d.UpFireSecondary : pB.d.UpFirePrimary), (0, zT.f)(!1)
```

#### 3080. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27251` → after: `L27263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27263) · [Before (L27251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27251)

```diff
-         (0, HB.sendColyMessage)(IB.bk, BB)
+         (0, aB.sendColyMessage)(GB.Hj, BB)
```

#### 3081. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27256` → after: `L27268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27268) · [Before (L27256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27256)

```diff
-       (0, rQ.k)(oB.c.DownFireSecondary), (0, rQ.k)(oB.c.UpFireSecondary)
+       (0, zT.m)(pB.d.DownFireSecondary), (0, zT.m)(pB.d.UpFireSecondary)
```

#### 3082. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27260` → after: `L27272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27272) · [Before (L27260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27260)

```diff
-         this.aimAtCentre = BB, this.touchCodes = new Map, this.pressedItems = new Map, this.interactTouches = new Map, this.boostTouches = new Set, this.attackRepeat = new JQ.d, this.queuedBoost = null, this.boostCooldownEnd = 0
+         this.aimAtCentre = BB, this.touchCodes = new Map, this.pressedItems = new Map, this.interactTouches = new Map, this.boostTouches = new Set, this.attackRepeat = new NT.e, this.queuedBoost = null, this.boostCooldownEnd = 0
```

#### 3083. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27273` → after: `L27285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27285) · [Before (L27273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27273)

```diff
-           qte: aQ.c.getCurrentState().isActive
+           qte: nT.d.getCurrentState().isActive
```

#### 3084. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27306` → after: `L27318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27318) · [Before (L27306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27306)

```diff
-         const jB = aQ.c.getCurrentState().isActive;
+         const IB = nT.d.getCurrentState().isActive;
```

#### 3085. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27308-L27310` → after: `L27320-L27322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27320-L27322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27320-L27322) · [Before (L27308-L27310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27308-L27310)

```diff
-         const zB = (0, iB.g)();
-         if (jB || 0 === (0, uj.d)(zB)) return;
-         const QB = zB.vG.CBB(zB.zV),
+         const ZB = (0, OB.h)();
+         if (IB || 0 === (0, kI.c)(ZB)) return;
+         const TB = ZB.zW.dIB(ZB.Jm),
```

#### 3086. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27312` → after: `L27324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27324) · [Before (L27312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27312)

```diff
-         (0, uj.h)(QB) > 0 && (nB === this.boostCooldownEnd || nB === (null === (BB = this.queuedBoost) || void 0 === BB ? void 0 : BB.cooldownEnd)) || (this.dropQueuedBoost(), this.boostOnceCooled(QB))
+         (0, kI.d)(TB) > 0 && (JB === this.boostCooldownEnd || JB === (null === (BB = this.queuedBoost) || void 0 === BB ? void 0 : BB.cooldownEnd)) || (this.dropQueuedBoost(), this.boostOnceCooled(TB))
```

#### 3087. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27315` → after: `L27327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27327) · [Before (L27315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27315)

```diff
-         if ((0, uj.h)(BB) <= 0) return function() {
+         if ((0, kI.d)(BB) <= 0) return function() {
```

#### 3088. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27322-L27325` → after: `L27334-L27337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27334-L27337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27334-L27337) · [Before (L27322-L27325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27322-L27325)

```diff
-             const BB = (0, iB.g)(),
-               zB = BB.vG.CBB(BB.zV);
-             0 !== (0, uj.d)(BB) && zB.gliderFuelCooldownEnd === jB && (this.aimAtCentre(), this.boostOnceCooled(zB))
-           }), (0, uj.h)(BB));
+             const BB = (0, OB.h)(),
+               ZB = BB.zW.dIB(BB.Jm);
+             0 !== (0, kI.c)(BB) && ZB.gliderFuelCooldownEnd === IB && (this.aimAtCentre(), this.boostOnceCooled(ZB))
+           }), (0, kI.d)(BB));
```

#### 3089. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27333` → after: `L27345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27345) · [Before (L27333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27333)

```diff
-         void 0 !== rj(pj((0, iB.g)())) && (this.aimAtCentre(), null === (BB = mQ()) || void 0 === BB || BB._performAltAction(), GQ())
+         void 0 !== zI(hI((0, OB.h)())) && (this.aimAtCentre(), null === (BB = gT()) || void 0 === BB || BB._performAltAction(), UT())
```

#### 3090. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27336-L27337` → after: `L27348-L27349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27348-L27349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27348-L27349) · [Before (L27336-L27337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27336-L27337)

```diff
-     var gQ = zB(36656);
-     var tQ = zB(36668);
+     var dT = ZB(36596);
+     var CT = ZB(36609);
```

#### 3091. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27346` → after: `L27358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27358) · [Before (L27346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27346)

```diff
-       (0, NQ.n)(HQ), SQ ??= eB.n.Yk("leaveGame", (() => {
+       (0, vT.p)(aT), QT ??= fB.l.Uy("leaveGame", (() => {
```

#### 3092. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27349-L27350` → after: `L27361-L27362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27361-L27362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27361-L27362) · [Before (L27349-L27350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27349-L27350)

```diff
-             SQ && (eB.n.unsubscribe(SQ), SQ = null);
-             MQ = !1, DQ(!1), XQ(!1), (0, NQ.n)(null)
+             QT && (fB.l.unsubscribe(QT), QT = null);
+             sT = !1, HT(!1), rT(!1), (0, vT.p)(null)
```

#### 3093. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27355-L27356` → after: `L27367-L27368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27367-L27368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27367-L27368) · [Before (L27355-L27356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27355-L27356)

```diff
-       if (BB === IQ.j.UiCapture && 0 !== (jB & IQ.t.TouchControls) && (MQ = 0 !== (nB & IQ.t.TouchControls)), BB === IQ.j.UiCapture && 0 !== (jB & IQ.t.ScreenshotMode) && DQ(0 !== (nB & IQ.t.ScreenshotMode)), XQ(MQ), hQ()) switch (BB) {
-         case IQ.j.Joystick:
+       if (BB === GT.d.UiCapture && 0 !== (IB & GT.o.TouchControls) && (sT = 0 !== (JB & GT.o.TouchControls)), BB === GT.d.UiCapture && 0 !== (IB & GT.o.ScreenshotMode) && HT(0 !== (JB & GT.o.ScreenshotMode)), rT(sT), RT()) switch (BB) {
+         case GT.d.Joystick:
```

#### 3094. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27359` → after: `L27371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27371) · [Before (L27359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27359)

```diff
-         case IQ.j.TouchButton:
+         case GT.d.TouchButton:
```

#### 3095. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27363` → after: `L27375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27375) · [Before (L27363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27363)

```diff
-             } = GB.c.get("clientEscMenuOptions");
+             } = UB.d.get("clientEscMenuOptions");
```

#### 3096. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27365-L27368` → after: `L27377-L27380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27377-L27380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27377-L27380) · [Before (L27365-L27368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27365-L27368)

```diff
-               case IQ.q.Jump: {
-                 const BB = (0, iB.g)();
-                 BB.vG.ejB().touchJump = jB, BB.vG.JjB(BB.zV).jumping = jB;
-                 const QB = BB.vG.CBB(BB.zV);
+               case GT.l.Jump: {
+                 const BB = (0, OB.h)();
+                 BB.zW.UZB().touchJump = IB, BB.zW.uIB(BB.Jm).jumping = IB;
+                 const TB = BB.zW.dIB(BB.Jm);
```

#### 3097. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27372` → after: `L27384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27384) · [Before (L27372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27372)

```diff
-               case IQ.q.Crouch:
+               case GT.l.Crouch:
```

#### 3098. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27374` → after: `L27386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27386) · [Before (L27374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27374)

```diff
-                   const BB = (0, iB.g)().vG.CBB((0, iB.g)().zV);
+                   const BB = (0, OB.h)().zW.dIB((0, OB.h)().Jm);
```

#### 3099. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27378-L27379` → after: `L27390-L27391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27390-L27391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27390-L27391) · [Before (L27378-L27379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27378-L27379)

```diff
-               case IQ.q.Pov:
-                 jB && eB.n.Ly("SwapCameraZoom");
+               case GT.l.Pov:
+                 IB && fB.l.Gq("SwapCameraZoom");
```

#### 3100. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27381-L27382` → after: `L27393-L27394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27393-L27394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27393-L27394) · [Before (L27381-L27382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27381-L27382)

```diff
-               case IQ.q.Fly:
-                 jB && ((0, iB.g)().vG.ejB().toggleFly = !0, zB && fQ && YQ(qQ, !1))
+               case GT.l.Fly:
+                 IB && ((0, OB.h)().zW.UZB().toggleFly = !0, ZB && iT && jT(YT, !1))
```

#### 3101. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27384` → after: `L27396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27396) · [Before (L27384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27384)

```diff
-           }(jB, 0 !== (nB & NQ.c))
+           }(IB, 0 !== (JB & vT.e))
```

#### 3102. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27390` → after: `L27402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27402) · [Before (L27390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27390)

```diff
-       BB !== EQ && (EQ = BB, null === (jB = (0, iB.g)()) || void 0 === jB || jB.MBB(BB))
+       BB !== wT && (wT = BB, null === (IB = (0, OB.h)()) || void 0 === IB || IB.VBB(BB))
```

#### 3103. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27394-L27395` → after: `L27406-L27407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27406-L27407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27406-L27407) · [Before (L27394-L27395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27394-L27395)

```diff
-       const zB = (0, iB.g)().vG.ejB();
-       zB.joystickHeading = -nQ.b.fastATan2(jB, BB), zB.joyStickMoveVec = {
+       const ZB = (0, OB.h)().zW.UZB();
+       ZB.joystickHeading = -JT.e.fastATan2(IB, BB), ZB.joyStickMoveVec = {
```

#### 3104. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27398` → after: `L27410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27410) · [Before (L27398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27398)

```diff
-       }, (0, uQ.updateTouchMoveSpeed)((0, iB.g)())
+       }, (0, kT.updateTouchMoveSpeed)((0, OB.h)())
```

#### 3105. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27406` → after: `L27418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27418) · [Before (L27406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27406)

```diff
-       const BB = (0, iB.g)(),
+       const BB = (0, OB.h)(),
```

#### 3106. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27408` → after: `L27420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27420) · [Before (L27408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27408)

```diff
-       BB.vG.ejB().touchCrouch = jB, BB.vG.JjB(BB.zV).setCrouching(jB), (0, uQ.updateTouchMoveSpeed)(BB)
+       BB.zW.UZB().touchCrouch = IB, BB.zW.uIB(BB.Jm).setCrouching(IB), (0, kT.updateTouchMoveSpeed)(BB)
```

#### 3107. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27416` → after: `L27428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27428) · [Before (L27416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27416)

```diff
-       if (BB === hQ() || BB && !(0, iB.g)()) return;
+       if (BB === RT() || BB && !(0, OB.h)()) return;
```

#### 3108. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27418-L27419` → after: `L27430-L27431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27430-L27431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27430-L27431) · [Before (L27418-L27419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27418-L27419)

```diff
-       XB.f.setMultiplierType(XB.e, (0, dQ.m)(GB.c.get("clientEscMenuOptions")));
-       const jB = (0, iB.g)().vG.ejB();
+       rB.d.setMultiplierType(rB.b, (0, oT.k)(UB.d.get("clientEscMenuOptions")));
+       const IB = (0, OB.h)().zW.UZB();
```

#### 3109. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27422-L27424` → after: `L27434-L27436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27434-L27436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27434-L27436) · [Before (L27422-L27424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27422-L27424)

```diff
-         const jB = (0, iB.g)(),
-           zB = () => (0, iB.c)().client.scriptedCameraController,
-           QB = () => !Nj.b.aimsFromBody(jB) || zB().aimsAtCursor,
+         const IB = (0, OB.h)(),
+           ZB = () => (0, OB.d)().client.scriptedCameraController,
+           TB = () => !vI.c.aimsFromBody(IB) || ZB().aimsAtCursor,
```

#### 3110. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27426` → after: `L27438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27438) · [Before (L27426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27426)

```diff
-             jB.zk = (0, iB.c)().getBlockReach(jB.zV), Nj.b.aimsFromBody(jB) || (jB.YBB = null, jB.VBB = null)
+             IB.Aq = (0, OB.d)().getBlockReach(IB.Jm), vI.c.aimsFromBody(IB) || (IB.vIB = null, IB.kIB = null)
```

#### 3111. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27429` → after: `L27441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27441) · [Before (L27429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27429)

```diff
-             rB(), nB(), jB.GBB()
+             zB(), JB(), IB.bBB()
```

#### 3112. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27433-L27434` → after: `L27445-L27446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27445-L27446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27445-L27446) · [Before (L27433-L27434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27433-L27434)

```diff
-             if (nB.aimsAtCursor) return nB.aimAtClientPoint(BB, QB), void jB.GBB();
-             if (Nj.b.aimsFromBody(jB)) return;
+             if (JB.aimsAtCursor) return JB.aimAtClientPoint(BB, TB), void IB.bBB();
+             if (vI.c.aimsFromBody(IB)) return;
```

#### 3113. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27440` → after: `L27452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27452) · [Before (L27440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27440)

```diff
-             jB.YBB = [IB.x, IB.y, IB.z], jB.VBB = [isNaN(NB.x) ? 1 : NB.x, isNaN(NB.y) ? 0 : NB.y, isNaN(NB.z) ? 0 : NB.z];
+             IB.vIB = [GB.x, GB.y, GB.z], IB.kIB = [isNaN(vB.x) ? 1 : vB.x, isNaN(vB.y) ? 0 : vB.y, isNaN(vB.z) ? 0 : vB.z];
```

#### 3114. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27443-L27447` → after: `L27455-L27459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27455-L27459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27455-L27459) · [Before (L27443-L27447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27443-L27447)

```diff
-             (0, iB.c)().WK(uB, uB);
-             const aB = (0, iB.c)().getBlockReach(jB.zV),
-               pB = jB.pickBlock(uB, UB, jB.camera.Xw + aB, (BB => 0 !== BB));
-             if (pB && pB.JR && (0, UQ.s)((0, iB.c)().getLifeformEyePos(jB.zV, !1), pB.position) < aB) return jB.zk = jB.camera.Xw + aB, void jB.GBB();
-             jB.zk = 0
+             (0, OB.d)().HV(kB, kB);
+             const nB = (0, OB.d)().getBlockReach(IB.Jm),
+               hB = IB.pickBlock(kB, cB, IB.camera.NK + nB, (BB => 0 !== BB));
+             if (hB && hB.n_ && (0, cT.p)((0, OB.d)().getLifeformEyePos(IB.Jm, !1), hB.position) < nB) return IB.Aq = IB.camera.NK + nB, void IB.bBB();
+             IB.Aq = 0
```

#### 3115. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27457` → after: `L27469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27469) · [Before (L27457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27457)

```diff
-             pB(), aB && (aB = !1, jB.vG.ZjB(jB.zV).YzB())
+             hB(), nB && (nB = !1, IB.zW.FZB(IB.Jm).GTB())
```

#### 3116. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27461` → after: `L27473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27473) · [Before (L27461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27461)

```diff
-             if (uB = BB, zB.qte || dB.DN) return;
+             if (kB = BB, ZB.qte || oB.sv) return;
```

#### 3117. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27463-L27466` → after: `L27475-L27478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27475-L27478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27475-L27478) · [Before (L27463-L27466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27463-L27466)

```diff
-             const NB = null !== (QB = jB.VBB) && void 0 !== QB ? QB : jB.camera.nC(),
-               pB = iB.i.localPlayerPickActionHelper.getPickEntityResult(NB);
-             if (!jB.LBB && !pB) return;
-             const rB = null === (nB = jB.LBB) || void 0 === nB ? void 0 : nB.position.join("|");
+             const vB = null !== (TB = IB.kIB) && void 0 !== TB ? TB : IB.camera.XV(),
+               hB = OB.l.localPlayerPickActionHelper.getPickEntityResult(vB);
+             if (!IB.xBB && !hB) return;
+             const zB = null === (JB = IB.xBB) || void 0 === JB ? void 0 : JB.position.join("|");
```

#### 3118. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27470-L27474` → after: `L27482-L27486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27482-L27486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27482-L27486) · [Before (L27470-L27474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27470-L27474)

```diff
-               const QB = null !== (BB = jB.VBB) && void 0 !== BB ? BB : jB.camera.nC(),
-                 nB = iB.i.localPlayerPickActionHelper.getPickEntityResult(QB);
-               if (!jB.LBB && !nB) return;
-               const dB = null === (zB = jB.LBB) || void 0 === zB ? void 0 : zB.position.join("|");
-               (rB === dB && rB || pB === nB && pB) && ((0, rQ.k)(oB.c.TouchDownLong), jB.vG.ZjB(jB.zV).VzB(), aB = !0)
+               const TB = null !== (BB = IB.kIB) && void 0 !== BB ? BB : IB.camera.XV(),
+                 JB = OB.l.localPlayerPickActionHelper.getPickEntityResult(TB);
+               if (!IB.xBB && !JB) return;
+               const oB = null === (ZB = IB.xBB) || void 0 === ZB ? void 0 : ZB.position.join("|");
+               (zB === oB && zB || hB === JB && hB) && ((0, zT.m)(pB.d.TouchDownLong), IB.zW.FZB(IB.Jm).vTB(), nB = !0)
```

#### 3119. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27478` → after: `L27490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27490) · [Before (L27478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27478)

```diff
-             uB = null, aB = !1, pB(), dB.holds(pQ.c.Attack) || dB.holds(pQ.c.Use) || (jB.vG.ZjB(jB.zV).YzB(), (0, rQ.k)(oB.c.UpFirePrimary)), nB()
+             kB = null, nB = !1, hB(), oB.holds(hT.c.Attack) || oB.holds(hT.c.Use) || (IB.zW.FZB(IB.Jm).GTB(), (0, zT.m)(pB.d.UpFirePrimary)), JB()
```

#### 3120. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27484-L27485` → after: `L27496-L27497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27496-L27497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27496-L27497) · [Before (L27484-L27485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27484-L27485)

```diff
-             for (const jB of dB.ids())(0, gQ.e)(BB.touches, jB) || mB(jB, BB);
-             for (const jB of NB.keys())(0, gQ.e)(BB.touches, jB) || mB(jB, BB)
+             for (const IB of oB.ids())(0, dT.h)(BB.touches, IB) || gB(IB, BB);
+             for (const IB of vB.keys())(0, dT.h)(BB.touches, IB) || gB(IB, BB)
```

#### 3121. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27506` → after: `L27518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27518) · [Before (L27506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27506)

```diff
-               const pB = pQ.h.hitZone(UB, aB);
+               const hB = hT.j.hitZone(cB, nB);
```

#### 3122. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27508` → after: `L27520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27520) · [Before (L27508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27508)

```diff
-                 pB.code !== pQ.c.Interact && (rB(), nB(), jB.GBB()), dB.press(IB, pB.code, zB, UB, aB);
+                 hB.code !== hT.c.Interact && (zB(), JB(), IB.bBB()), oB.press(GB, hB.code, ZB, cB, nB);
```

#### 3123. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27516` → after: `L27528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27528) · [Before (L27516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27516)

```diff
-                 qte: aQ.c.getCurrentState().isActive
+                 qte: nT.d.getCurrentState().isActive
```

#### 3124. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27531` → after: `L27543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27543) · [Before (L27531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27531)

```diff
-               aB && (LB(aB, nB, UB), zB === uB && (dB.DN || IB(nB, UB), !QB() && aB.dragged && rB()))
+               nB && (WB(nB, JB, cB), ZB === kB && (oB.sv || GB(JB, cB), !TB() && nB.dragged && zB()))
```

#### 3125. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27547` → after: `L27559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27559) · [Before (L27547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27547)

```diff
-               (sB || rB && !dB.DN) && IB(UB, aB), sB && ((0, rQ.k)(oB.c.TouchShort), (0, sQ.i)(), jB.vG.ZjB(jB.zV).ZzB()), (rB || sB) && JB()
+               (FB || zB && !oB.sv) && GB(cB, nB), FB && ((0, zT.m)(pB.d.TouchShort), (0, FT.g)(), IB.zW.FZB(IB.Jm).nTB()), (zB || FB) && NB()
```

#### 3126. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27561` → after: `L27573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27573) · [Before (L27561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27561)

```diff
-       EQ && (0, iB.g)().MBB(!0);
+       wT && (0, OB.h)().VBB(!0);
```

#### 3127. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27565-L27566` → after: `L27577-L27578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27577-L27578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27577-L27578) · [Before (L27565-L27566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27565-L27566)

```diff
-         nB = (0, eB.q)(tQ.d, (() => {
-           (0, uQ.updateTouchMoveSpeed)((0, iB.g)())
+         JB = (0, fB.p)(CT.d, (() => {
+           (0, kT.updateTouchMoveSpeed)((0, OB.h)())
```

#### 3128. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27570-L27571` → after: `L27582-L27583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27582-L27583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27582-L27583) · [Before (L27570-L27571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27570-L27571)

```diff
-         const BB = (0, iB.g)();
-         jB.touchJump = !1, BB.vG.JjB(BB.zV).jumping = !1, YQ(!1, !1), jB.isTouchscreen = !1
+         const BB = (0, OB.h)();
+         IB.touchJump = !1, BB.zW.uIB(BB.Jm).jumping = !1, jT(!1, !1), IB.isTouchscreen = !1
```

#### 3129. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27575` → after: `L27587-L27602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27587-L27602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27587-L27602) · [Before (L27575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27575)

```diff
-     const TQ = [150, 0, 1, 80, 246, 32, 72, 7, "e", 6, 70, 8, 255, "length", 195, 2, "d", "a", 106, "undefined", void 0, 33, 3, 235, 63, "fromCodePoint", 12, "push", "b", 38, 30, "h", "c", "i", "g", 91, "f", 8191, 88, 13, 14, 202, 243, 185, 142, 5, 132, 68, 136, 230, 44, 94, !0,  … [truncated]
+     const LT = [1, 30, 0, 67, "c", 9, 7, 5, 6, 4, 8, 255, "length", 206, 208, 177, "a", "undefined", void 0, 2, "d", 231, 123, 200, 63, "fromCodePoint", 12, "push", "b", 3, 23, 151, 182, !1, 191, 245, 91, "e", 153, 8191, 88, 13, 14, !0, 141, "i", 246, 37, 103, 21, 234, "f", 24, 8 … [truncated]
+ 
+     function eT(...BB) {
+       return BB[LT[12]] = LT[0], typeof mT[BB[LT[2]]] === LT[17] ? mT[BB[LT[2]]] = function(...BB) {
+         for (lT(BB[LT[12]] = LT[0], BB[LT[0]] = 'TB=bnEqDIZVsjkWtOehUQKXprfMAclJNCGLRPmHFoiYSg#a0&d+y"$17%4.)_5>~x6^w!|(?}{v*8]@`[32z9u,</:;', BB[LT[1]] = "" + (BB[LT[2]] || ""), BB[LT[4]] = BB[LT[1]].length, BB[LT[9]] = [], BB[LT[7]] = LT[2], BB[LT[8]] = LT[2], BB[LT[6]] = -LT[0 … [truncated]
+           if (BB[LT[5]] = BB[LT[0]].indexOf(BB[LT[1]][BB[-LT[3]]]), BB[LT[5]] !== -LT[0])
+             if (BB[LT[6]] < LT[2]) BB[LT[6]] = BB[LT[5]];
+             else {
+               lT(BB[LT[6]] += BB[LT[5]] * LT[36], BB[LT[7]] |= BB[LT[6]] << BB[LT[8]], BB[LT[8]] += (BB[LT[6]] & LT[39]) > LT[40] ? LT[41] : LT[42]);
+               do {
+                 lT(BB[LT[9]].push(BB[LT[7]] & LT[11]), BB[LT[7]] >>= LT[10], BB[LT[8]] -= LT[10])
+               } while (BB[LT[8]] > LT[6]);
+               BB[LT[6]] = -LT[0]
+             } return BB[LT[6]] > -LT[0] && BB[LT[9]].push((BB[LT[7]] | BB[LT[6]] << BB[LT[8]]) & LT[11]), uT(BB[LT[9]])
+       }(XT[BB[LT[2]]]) : mT[BB[LT[2]]]
+     }
```

#### 3130. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27578` → after: `L27605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27605) · [Before (L27578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27578)

```diff
-       return BB[TQ[13]] = TQ[2], typeof Nn !== TQ[19] && Nn ? (new Nn).decode(new un(BB[TQ[1]])) : typeof Un !== TQ[19] && Un ? Un.from(BB[TQ[1]]).toString("utf-8") : rn(BB[TQ[1]])
+       return BB[LT[12]] = LT[0], typeof kJ !== LT[17] && kJ ? (new kJ).decode(new cJ(BB[LT[2]])) : typeof nJ !== LT[17] && nJ ? nJ.from(BB[LT[2]]).toString("utf-8") : FJ(BB[LT[2]])
```

#### 3131. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27586-L27616` → after: `L27613-L27662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27613-L27662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27613-L27662) · [Before (L27586-L27616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27586-L27616)

```diff
-     eQ(ZQ = {}, AQ = ["NY/RCb,A1B}Ep3_SQvC.%dP9", "8r:w`Z?|]O/Uc>W7OvR*x{P7.", "+fyQ_P2BvrBhU?pFbh|uh:P9", '(YcvjX,B^4K)[YjC"R9', "(ze}7Rdo$cQ]W5}DEe&8BZo]}c7N8tivdwg7:>+aBM=~:f<5%V", '#zn}a%4dWNuN&>vxYwqQ9%o]^&K/utXuzd>w"kiOMsU"z{8]', "xwx83LZxH^P]<uF5^*a,,ksXkp:)9", "dmrT`Ne)EH … [truncated]
-         eQ(BB[TQ[13]] = TQ[1], BB[TQ[17]] = [function() {
-           return globalThis
-         }, function() {
-           return global
-         }, function() {
-           return window
-         }, function() {
-           return new Function("return this")()
-         }], BB[-TQ[14]] = TQ[20], BB[TQ[15]] = []);
-         try {
-           eQ(BB[-TQ[14]] = Object, BB[TQ[15]][TQ[27]]("".__proto__.constructor.name))
-         } catch (AQ) {}
-         BB: for (BB[TQ[16]] = TQ[1]; BB[TQ[16]] < BB[TQ[17]][TQ[13]]; BB[TQ[16]]++) try {
-           for (BB[-TQ[14]] = BB[TQ[17]][BB[TQ[16]]](), BB[-TQ[18]] = TQ[1]; BB[-TQ[18]] < BB[TQ[15]][TQ[13]]; BB[-TQ[18]]++)
-             if (typeof BB[-TQ[14]][BB[TQ[15]][BB[-TQ[18]]]] === TQ[19]) continue BB;
- ... (15 more removed lines; see GitHub link above)
+     lT(mT = {}, XT = ['c1"7I3T', 'h_q"a2BfZ.?~]&/R5pC1LopBC~G)Qb', ".o&qI,rxRZIb3_EN8)5csvYon49fr?3FKqblcz+oE1TysM#Fa>^lGdG0b", "N1C1r)0uKkI*).qh41pG88<eq", "4)01b`wyj>&[gb#Hc?O1W3Ai?Q?XnF3o", "]%odRu:`O_3EiOSU", '|bED+*@ar.B}45&A$?X"#db~!1v(Z&DN,(F"(|Hr;>c7Z}wJTjzE3">.iQ', 'i&CJ … [truncated]
+       lT(BB[LT[12]] = LT[2], BB[LT[16]] = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }], BB[-LT[13]] = LT[18], BB[LT[14]] = []);
+       try {
+         lT(BB[-LT[13]] = Object, BB[LT[14]][LT[27]]("".__proto__.constructor.name))
+       } catch (XT) {}
+       BB: for (BB[LT[15]] = LT[2]; BB[LT[15]] < BB[LT[16]][LT[12]]; BB[LT[15]]++) try {
+         for (BB[-LT[13]] = BB[LT[16]][BB[LT[15]]](), BB[LT[9]] = LT[2]; BB[LT[9]] < BB[LT[14]][LT[12]]; BB[LT[9]]++)
+           if (typeof BB[-LT[13]][BB[LT[14]][BB[LT[9]]]] === LT[17]) continue BB;
+ ... (34 more added lines; see GitHub link above)
```

#### 3132. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27618` → after: `L27664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27664) · [Before (L27618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27618)

```diff
-                 eQ(BB[TQ[7]] += BB[TQ[6]] * TQ[35], BB[TQ[8]] |= BB[TQ[7]] << BB[TQ[9]], BB[TQ[9]] += (BB[TQ[7]] & TQ[37]) > TQ[38] ? TQ[39] : TQ[40]);
+                 lT(BB[LT[6]] += BB[LT[45]] * LT[36], BB[-LT[46]] |= BB[LT[6]] << BB[-LT[47]], BB[-LT[47]] += (BB[LT[6]] & LT[39]) > LT[40] ? LT[41] : LT[42]);
```

#### 3133. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27620-L27633` → after: `L27666-L27688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27666-L27688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27666-L27688) · [Before (L27620-L27633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27620-L27633)

```diff
-                   eQ(BB[-TQ[10]].push(BB[TQ[8]] & TQ[12]), BB[TQ[8]] >>= TQ[11], BB[TQ[9]] -= TQ[11])
-                 } while (BB[TQ[9]] > TQ[7]);
-                 BB[TQ[7]] = -TQ[2]
-               } return BB[TQ[7]] > -TQ[2] && BB[-TQ[10]].push((BB[TQ[8]] | BB[TQ[7]] << BB[TQ[9]]) & TQ[12]), PQ(BB[-TQ[10]])
-         }(AQ[BB]) : ZQ[BB]
-       }(101) in WQ && function() {
-         const BB = require("big-integer");
-         class jB {
-           static randomPrime(jB) {
-             const zB = BB.one.shiftLeft(jB - TQ[2]),
-               QB = BB.one.shiftLeft(jB).prev();
-             for (; TQ[52];) {
-               let jB = BB.randBetween(zB, QB);
-               if (jB.isProbablePrime(256)) return jB
+                   lT(BB[LT[20]].push(BB[-LT[46]] & LT[11]), BB[-LT[46]] >>= LT[10], BB[-LT[47]] -= LT[10])
+                 } while (BB[-LT[47]] > LT[6]);
+                 BB[LT[6]] = -LT[0]
+               } return BB[LT[6]] > -LT[0] && BB[LT[20]].push((BB[-LT[46]] | BB[LT[6]] << BB[-LT[47]]) & LT[11]), uT(BB[LT[20]])
+         }
+ 
+         function IB(...IB) {
+           return IB[LT[12]] = LT[0], typeof mT[IB[LT[2]]] === LT[17] ? mT[IB[LT[2]]] = BB(XT[IB[LT[2]]]) : mT[IB[LT[2]]]
+         }
+         let ZB = LT[33];
+         lT(setInterval((() => {
+           if (!ZB && (LT[2], OB[LT[61]])()) {
+             function BB(...BB) {
+               for (lT(BB[LT[12]] = LT[0], BB[-LT[50]] = 'w)$&:[;=g>KSeXtzC|?,+^_{*xbB@m3GapJ]<29kFOY/%nq1Py(NE5c"~vdsT.6u`UQr0jA4fRlVW!7iL}I#DMHh8oZ', BB[-LT[48]] = "" + (BB[LT[2]] || ""), BB[LT[4]] = BB[-LT[48]].length, BB[LT[20]] = [], BB[LT[7]] = LT[2], BB[LT[51]] = LT[2], BB[ … [truncated]
+                 if (BB[LT[45]] = BB[-LT[50]].indexOf(BB[-LT[48]][BB[LT[49]]]), BB[LT[45]] !== -LT[0])
+                   if (BB[LT[6]] < LT[2]) BB[LT[6]] = BB[LT[45]];
+ ... (7 more added lines; see GitHub link above)
```

#### 3134. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27635-L27647` → after: `L27690-L27692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27690-L27692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27690-L27692) · [Before (L27635-L27647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27635-L27647)

```diff
-           }
-           static generate(...jB) {
-             jB[TQ[13]] = TQ[2];
-             const zB = BB(65537);
-             let QB, nB;
-             jB[TQ[2]] = TQ[20];
-             do {
-               eQ(QB = this.randomPrime(jB[TQ[1]] / TQ[15]), nB = this.randomPrime(jB[TQ[1]] / TQ[15]), jB[TQ[2]] = BB.lcm(QB.prev(), nB.prev()))
-             } while (BB.gcd(zB, jB[TQ[2]]).notEquals(TQ[2]) || QB.minus(nB).abs().shiftRight(jB[TQ[1]] / TQ[15] - TQ[64]).isZero());
-             return {
-               e: zB,
-               n: QB.multiply(nB),
-               d: zB.modInv(jB[TQ[2]])
+ 
+             function IB(...IB) {
+               return IB[LT[12]] = LT[0], typeof mT[IB[LT[2]]] === LT[17] ? mT[IB[LT[2]]] = BB(XT[IB[LT[2]]]) : mT[IB[LT[2]]]
```

#### 3135. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27649-L27667` → after: `L27694-L27707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27694-L27707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27694-L27707) · [Before (L27649-L27667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27649-L27667)

```diff
-           }
-           static encrypt(...jB) {
-             return jB[TQ[13]] = TQ[22], BB(jB[TQ[1]]).modPow(jB[TQ[15]], jB[TQ[2]])
-           }
-           static decrypt(...jB) {
-             return jB[TQ[13]] = TQ[22], BB(jB[TQ[1]]).modPow(jB[TQ[2]], jB[TQ[15]])
-           }
-           static encode(...jB) {
-             jB[TQ[13]] = TQ[2];
-             const zB = jB[TQ[1]].split("").map((BB => BB.charCodeAt())).join("");
-             return BB(zB)
-           }
-           static decode(...BB) {
-             BB[TQ[13]] = TQ[2];
-             const jB = BB[TQ[1]].toString();
-             BB[TQ[2]] = "";
- ... (3 more removed lines; see GitHub link above)
+ 
+             function TB(...BB) {
+               lT(BB[LT[12]] = LT[2], BB[LT[28]] = function(...IB) {
+                 return IB[LT[12]] = LT[19], BB[LT[4]]({}, IB[LT[2]], IB[LT[0]])
+               }, BB[LT[4]] = function(...IB) {
+                 if (lT(IB[LT[12]] = LT[29], IB[-LT[53]] = {}), IB[LT[2]][IB[LT[0]] + IB[LT[19]]] !== LT[18]) return IB[LT[2]][IB[LT[0]] + IB[LT[19]]];
+                 if (IB[LT[0]] === IB[LT[19]]) return LT[43];
+                 for (IB[-LT[52]] = LT[2]; IB[-LT[52]] < IB[LT[0]].length; IB[-LT[52]]++) IB[-LT[53]][IB[LT[0]][IB[-LT[52]]]] === LT[18] && (IB[-LT[53]][IB[LT[0]][IB[-LT[52]]]] = LT[2]), IB[-LT[53]][IB[LT[19]][IB[-LT[52]]]] === LT[18] && (IB[-LT[53]][IB[LT[19]][IB[-LT[52]]]] = LT[ … [truncated]
+                 for (IB[LT[7]] in IB[-LT[53]])
+                   if (IB[-LT[53]][IB[LT[7]]] !== LT[2]) return IB[LT[2]][IB[LT[0]] + IB[LT[19]]] = LT[33], LT[33];
+                 for (IB[-LT[44]] = LT[0]; IB[-LT[44]] < IB[LT[0]].length; IB[-LT[44]]++)
+                   if (BB[LT[4]](IB[LT[2]], IB[LT[0]].substr(LT[2], IB[-LT[44]]), IB[LT[19]].substr(LT[2], IB[-LT[44]])) && BB[LT[4]](IB[LT[2]], IB[LT[0]].substr(IB[-LT[44]]), IB[LT[19]].substr(IB[-LT[44]])) || BB[LT[4]](IB[LT[2]], IB[LT[0]].substr(LT[2], IB[-LT[44]]), IB[LT[19]]. … [truncated]
+                 return IB[LT[2]][IB[LT[0]] + IB[LT[19]]] = LT[33], LT[33]
+               }, console.log(BB[LT[28]]))
```

#### 3136. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27669` → after: `L27709-L27715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27709-L27715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27709-L27715) · [Before (L27669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27669)

```diff
-             return BB[TQ[2]]
+             IB(99) in fT && TB();
+             let JB = {
+               [IB(100) + IB(101)]: IB(102),
+               [IB(LT[48])]: IB(104),
+               [IB(105)]: IB(106) + IB(107)
+             };
+             lT(ZB = LT[43], (LT[2], aB[IB(108)])(GB.Ai, JB))
```

#### 3137. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27672-L27673` → after: `L27749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27749) · [Before (L27672-L27673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27672-L27673)

```diff
-         module.exports = jB
-       }(), (() => {
+ 
```

#### 3138. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27675-L27712` → after: `L27751-L27752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27751-L27752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27751-L27752) · [Before (L27675-L27712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27675-L27712)

```diff
-           return BB[TQ[13]] = TQ[2], typeof ZQ[BB[TQ[1]]] === TQ[19] ? ZQ[BB[TQ[1]]] = function(...BB) {
-             for (eQ(BB[TQ[13]] = TQ[2], BB[-TQ[43]] = ',HAKnOiIWLD1lhP&*d3%7=M5qm+;aeJt0/^oc"zyjR}.EF>@f`gN($4kB{bY#!Srp2)xVC]wZvTQ[|~XU6<:9Gu_s?8', BB[-TQ[42]] = "" + (BB[TQ[1]] || ""), BB[TQ[22]] = BB[-TQ[42]].length, BB[TQ[46]] = [], BB[TQ[45]] = TQ[1], BB[TQ[36]] = TQ[1], BB[ … [truncated]
-               if (BB[-TQ[44]] = BB[-TQ[43]].indexOf(BB[-TQ[42]][BB[TQ[31]]]), BB[-TQ[44]] !== -TQ[2])
-                 if (BB[TQ[7]] < TQ[1]) BB[TQ[7]] = BB[-TQ[44]];
-                 else {
-                   eQ(BB[TQ[7]] += BB[-TQ[44]] * TQ[35], BB[TQ[45]] |= BB[TQ[7]] << BB[TQ[36]], BB[TQ[36]] += (BB[TQ[7]] & TQ[37]) > TQ[38] ? TQ[39] : TQ[40]);
-                   do {
-                     eQ(BB[TQ[46]].push(BB[TQ[45]] & TQ[12]), BB[TQ[45]] >>= TQ[11], BB[TQ[36]] -= TQ[11])
-                   } while (BB[TQ[36]] > TQ[7]);
-                   BB[TQ[7]] = -TQ[2]
-                 } return BB[TQ[7]] > -TQ[2] && BB[TQ[46]].push((BB[TQ[45]] | BB[TQ[7]] << BB[TQ[36]]) & TQ[12]), PQ(BB[TQ[46]])
-           }(AQ[BB[TQ[1]]]) : ZQ[BB[TQ[1]]]
-         }
-         if ([][TQ[13]] = TQ[1], BB(TQ[77]) in WQ && function(...BB) {
-             eQ(BB[TQ[13]] = TQ[1], BB[TQ[28]] = function(...BB) {
-               for (eQ(BB[TQ[13]] = TQ[2], BB[TQ[17]] = TQ[1], BB[-TQ[49]] = {}, BB[TQ[32]] = TQ[1], BB[-TQ[50]] = TQ[1], BB[TQ[8]] = TQ[1], BB[-TQ[48]] = BB[TQ[1]].length), BB[TQ[47]] = TQ[1]; BB[TQ[47]] < BB[-TQ[48]]; BB[TQ[47]]++) {
- ... (22 more removed lines; see GitHub link above)
+           return IB[LT[12]] = LT[0], typeof mT[IB[LT[2]]] === LT[17] ? mT[IB[LT[2]]] = BB(XT[IB[LT[2]]]) : mT[IB[LT[2]]]
+         }
```

#### 3139. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27715-L27763` → after: `L27756-L27759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27756-L27759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27756-L27759) · [Before (L27715-L27763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27715-L27763)

```diff
-             return BB[TQ[13]] = TQ[2], typeof ZQ[BB[TQ[1]]] === TQ[19] ? ZQ[BB[TQ[1]]] = jB(AQ[BB[TQ[1]]]) : ZQ[BB[TQ[1]]]
-           }
-           let QB = TQ[58];
-           eQ(setInterval((() => {
-             if (!QB && (TQ[1], iB[TQ[34]])()) {
-               function BB(...BB) {
-                 for (eQ(BB[TQ[13]] = TQ[2], BB[TQ[2]] = 'HOxEKDGcV[d5#`R.2?w1nT}I~%vFtS8Y|N0elBb^*XPkq{A6Ufo&Z>)7(zjua<=Ci]/J;rgQLM+4!9_:"sphW,@m3$y', BB[TQ[15]] = "" + (BB[TQ[1]] || ""), BB[TQ[22]] = BB[TQ[15]].length, BB[TQ[16]] = [], BB[TQ[8]] = TQ[1], BB[TQ[9]] = TQ[1], BB[TQ … [truncated]
-                   if (BB[TQ[53]] = BB[TQ[2]].indexOf(BB[TQ[15]][BB[TQ[31]]]), BB[TQ[53]] !== -TQ[2])
-                     if (BB[TQ[54]] < TQ[1]) BB[TQ[54]] = BB[TQ[53]];
-                     else {
-                       eQ(BB[TQ[54]] += BB[TQ[53]] * TQ[35], BB[TQ[8]] |= BB[TQ[54]] << BB[TQ[9]], BB[TQ[9]] += (BB[TQ[54]] & TQ[37]) > TQ[38] ? TQ[39] : TQ[40]);
-                       do {
-                         eQ(BB[TQ[16]].push(BB[TQ[8]] & TQ[12]), BB[TQ[8]] >>= TQ[11], BB[TQ[9]] -= TQ[11])
-                       } while (BB[TQ[9]] > TQ[7]);
-                       BB[TQ[54]] = -TQ[2]
-                     } return BB[TQ[54]] > -TQ[2] && BB[TQ[16]].push((BB[TQ[8]] | BB[TQ[54]] << BB[TQ[9]]) & TQ[12]), PQ(BB[TQ[16]])
- ... (33 more removed lines; see GitHub link above)
+             return BB[LT[12]] = LT[0], typeof mT[BB[LT[2]]] === LT[17] ? mT[BB[LT[2]]] = function(...BB) {
+               for (lT(BB[LT[12]] = LT[0], BB[LT[16]] = 'ghAVKlWniRtjBEDmCJZLecUsQaGISFTfNqoYrMPHpXdk"by<6&1v;72:3(0@][*?!%zx_`|4>u/.#w=~$9)^58{+}O,', BB[LT[19]] = "" + (BB[LT[2]] || ""), BB[LT[4]] = BB[LT[19]].length, BB[-LT[58]] = [], BB[-LT[57]] = LT[2], BB[LT[31]] = LT[2], BB[ … [truncated]
+                 if (BB[-LT[56]] = BB[LT[16]].indexOf(BB[LT[19]][BB[LT[10]]]), BB[-LT[56]] !== -LT[0])
+                   if (BB[LT[6]] < LT[2]) BB[LT[6]] = BB[-LT[56]];
```

#### 3140. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L27765` → after: `L27761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R27761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L27761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/94.js#L27761) · [Before (L27765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/94.js#L27765)

```diff
-                     eQ(BB[TQ[31]] += BB[TQ[60]] * TQ[35], BB[TQ[45]] |= BB[TQ[31]] << BB[TQ[9]], BB[TQ[9]] += (BB[TQ[31]] & TQ[37]) > TQ[38] ? TQ[39] : TQ[40]);
+                     lT(BB[LT[6]] += BB[-LT[56]] * LT[36], BB[-LT[57]] |= BB[LT[6]] << BB[LT[31]], BB[LT[31]] += (BB[LT[6]] & LT[39]) > LT[40] ? LT[41] : LT[42]);
```
