# Changed — Bundle Modifications Report (Part 006 / 132)

- **Updated at**: `2026-11-21T10:00 JST`
- **Part**: `6 / 132` (**387** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 005](part-005.md) · [Part 007 →](part-007.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/103.js` (halsg.2bd74967 → x17cru.159bd7ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/103.js` (2652 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e)

#### 1858. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L20710-L20711` → after: `L20710-L20711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR20710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L20710-L20711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L20710-L20711) · [Before (L20710-L20711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L20710-L20711)

```diff
-           hb = `${bb.x},${bb.z}`,
-           ab = null !== (Gb = Bb.get(hb)) && void 0 !== Gb ? Gb : {
+           kd = `${dd.x},${dd.z}`,
+           Kd = null !== (Wd = pd.get(kd)) && void 0 !== Wd ? Wd : {
```

#### 1859. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L20717` → after: `L20717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR20717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L20717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L20717) · [Before (L20717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L20717)

```diff
-             y: null !== (Ub = bb.y) && void 0 !== Ub ? Ub : 0,
+             y: null !== (Pd = dd.y) && void 0 !== Pd ? Pd : 0,
```

#### 1860. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L20721` → after: `L20721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR20721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L20721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L20721) · [Before (L20721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L20721)

```diff
-         if (ab.count += ub, ab.sumX += (null !== (Lb = bb.centreX) && void 0 !== Lb ? Lb : bb.x + Ob) * ub, ab.sumZ += (null !== (Yb = bb.centreZ) && void 0 !== Yb ? Yb : bb.z + Ob) * ub, ub > ab.yCount) ab.y = null !== (Sb = bb.y) && void 0 !== Sb ? Sb : 0, ab.yCount = ub;
+         if (Kd.count += Jd, Kd.sumX += (null !== (Zd = dd.centreX) && void 0 !== Zd ? Zd : dd.x + Nd) * Jd, Kd.sumZ += (null !== (gd = dd.centreZ) && void 0 !== gd ? gd : dd.z + Nd) * Jd, Jd > Kd.yCount) Kd.y = null !== (Cd = dd.y) && void 0 !== Cd ? Cd : 0, Kd.yCount = Jd;
```

#### 1861. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L20761` → after: `L20761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR20761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L20761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L20761) · [Before (L20761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L20761)

```diff
-     return ub ? bW(bb) : `x ${Math.round(bb.centreX)}, z ${Math.round(bb.centreZ)}`
+     return Jd ? Jv(dd) : `x ${Math.round(dd.centreX)}, z ${Math.round(dd.centreZ)}`
```

#### 1862. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L20766` → after: `L20766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR20766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L20766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L20766) · [Before (L20766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L20766)

```diff
-     return ub === hb ? `${ub}` : `${ub} to ${hb}`
+     return Jd === kd ? `${Jd}` : `${Jd} to ${kd}`
```

#### 1863. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L20768` → after: `L20768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR20768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L20768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L20768) · [Before (L20768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L20768)

```diff
-   return `x ${Bb(hb.map((bb=>Math.round(bb.centreX))))}, z ${Bb(hb.map((bb=>Math.round(bb.centreZ))))}`
+   return `x ${pd(kd.map((dd=>Math.round(dd.centreX))))}, z ${pd(kd.map((dd=>Math.round(dd.centreZ))))}`
```

#### 1864. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L20777` → after: `L20777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR20777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L20777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L20777) · [Before (L20777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L20777)

```diff
-   }, Gb = ub.reduce(((bb, ub) => Ob(ub) < Ob(bb) ? ub : bb));
+   }, Wd = Jd.reduce(((dd, Jd) => Nd(Jd) < Nd(dd) ? Jd : dd));
```

#### 1865. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L20789` → after: `L20789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR20789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L20789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L20789) · [Before (L20789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L20789)

```diff
-       for (const Bb of ub) null !== Bb.event && Bb.words.includes(bb) && hb.set(`${Bb.category}\n${NJ(Bb.event)}`, bb)
+       for (const pd of Jd) null !== pd.event && pd.words.includes(dd) && kd.set(`${pd.category}\n${Xj(pd.event)}`, dd)
```

#### 1866. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L20829` → after: `L20829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR20829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L20829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L20829) · [Before (L20829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L20829)

```diff
-     const ab = 0 === ub.length ? Yb : function(bb, ub, hb, Bb) {
+     const Kd = 0 === Jd.length ? gd : function(dd, Jd, kd, pd) {
```

#### 1867. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L20869` → after: `L20869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR20869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L20869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L20869) · [Before (L20869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L20869)

```diff
-                   Lb = bb.slice(0, Kb) + rb.slice(null !== (Zb = null === Ub || void 0 === Ub ? void 0 : Ub[0].length) && void 0 !== Zb ? Zb : 0);
+                   Zd = dd.slice(0, Gd) + Bd.slice(null !== (Qd = null === Pd || void 0 === Pd ? void 0 : Pd[0].length) && void 0 !== Qd ? Qd : 0);
```

#### 1868. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L20874` → after: `L20874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR20874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L20874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L20874) · [Before (L20874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L20874)

```diff
-                     Yb = null === Ub || hb ? "" : Ob ? null !== (Xb = Ub[1]) && void 0 !== Xb ? Xb : "" : `${null!==(pb=Ub[1])&&void 0!==pb?pb:""}, where ${ub.clusterShare}% of \`${ub.event}\` events happen`;
+                     gd = null === Pd || kd ? "" : Nd ? null !== (Ld = Pd[1]) && void 0 !== Ld ? Ld : "" : `${null!==(Od=Pd[1])&&void 0!==Od?Od:""}, where ${Jd.clusterShare}% of \`${Jd.event}\` events happen`;
```

#### 1869. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L20886-L20887` → after: `L20886-L20887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR20886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L20886-L20887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L20886-L20887) · [Before (L20886-L20887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L20886-L20887)

```diff
-                 nb = null !== (Lb = null === jb || void 0 === jb ? void 0 : jb[1]) && void 0 !== Lb ? Lb : null === (Yb = DJ.exec(db)) || void 0 === Yb ? void 0 : Yb[1],
-                 Db = null !== (Sb = null === (ab = qJ.exec(rb.slice(null !== (Hb = null === jb || void 0 === jb ? void 0 : jb[0].length) && void 0 !== Hb ? Hb : 0))) || void 0 === ab ? void 0 : ab[1]) && void 0 !== Sb ? Sb : "",
+                 ad = null !== (Zd = null === sd || void 0 === sd ? void 0 : sd[1]) && void 0 !== Zd ? Zd : null === (gd = ij.exec(qd)) || void 0 === gd ? void 0 : gd[1],
+                 Md = null !== (Cd = null === (Kd = Tj.exec(Bd.slice(null !== (od = null === sd || void 0 === sd ? void 0 : sd[0].length) && void 0 !== od ? od : 0))) || void 0 === Kd ? void 0 : Kd[1]) && void 0 !== Cd ? Cd : "",
```

#### 1870. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L20892` → after: `L20892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR20892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L20892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L20892) · [Before (L20892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L20892)

```diff
-                   return yJ(bb, Kb, Wb + (null !== (ub = null === jb || void 0 === jb ? void 0 : jb[0].length) && void 0 !== ub ? ub : 0), xb, Bb)
+                   return cj(dd, Gd, vd + (null !== (Jd = null === sd || void 0 === sd ? void 0 : sd[0].length) && void 0 !== Jd ? Jd : 0), Fd, pd)
```

#### 1871. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L20926` → after: `L20926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR20926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L20926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L20926) · [Before (L20926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L20926)

```diff
-                 to: ` at ${mJ(Ub,!1)}`,
+                 to: ` at ${Uj(Pd,!1)}`,
```

#### 1872. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21002` → after: `L21002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21002) · [Before (L21002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21002)

```diff
-         return null === ub ? null : "-" === bb.text ? -ub : ub
+         return null === Jd ? null : "-" === dd.text ? -Jd : Jd
```

#### 1873. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21018` → after: `L21018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21018) · [Before (L21018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21018)

```diff
-         bb = ub ? bb / Gb : bb * Gb
+         dd = Jd ? dd / Wd : dd * Wd
```

#### 1874. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21029` → after: `L21029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21029) · [Before (L21029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21029)

```diff
-         bb = ub ? bb - Ob : bb + Ob
+         dd = Jd ? dd - Nd : dd + Nd
```

#### 1875. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21034` → after: `L21034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21034) · [Before (L21034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21034)

```diff
-   return null !== Lb && hb === ub.length && Number.isFinite(Lb) ? Lb : null
+   return null !== Zd && kd === Jd.length && Number.isFinite(Zd) ? Zd : null
```

#### 1876. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21040` → after: `L21040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21040) · [Before (L21040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21040)

```diff
- const kJ = `\\b(${QH})\\b`,
+ const tj = `\\b(${pl})\\b`,
```

#### 1877. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21042-L21043` → after: `L21042-L21043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21042-L21043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21042-L21043) · [Before (L21042-L21043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21042-L21043)

```diff
-   cJ = new RegExp(`${kJ}${`((?:(?!\\b(?:${QH})\\b|\\.\\s|[!?;\\n]).){0,80}?)`}(?:\\bfrom\\s+${TJ}\\s+to\\s+|${TJ}\\s*(?:\u2192|->)\\s*)${TJ}`, "gi"),
-   QJ = new RegExp(`${kJ}[*_]*\\s+${TJ}\\s+to\\s+${TJ}`, "gi"),
+   zj = new RegExp(`${tj}${`((?:(?!\\b(?:${pl})\\b|\\.\\s|[!?;\\n]).){0,80}?)`}(?:\\bfrom\\s+${Vj}\\s+to\\s+|${Vj}\\s*(?:\u2192|->)\\s*)${Vj}`, "gi"),
+   Hj = new RegExp(`${tj}[*_]*\\s+${Vj}\\s+to\\s+${Vj}`, "gi"),
```

#### 1878. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21060` → after: `L21060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21060) · [Before (L21060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21060)

```diff
-     if ((null !== (ub = bb.slice(0, Yb).match(/`/g)) && void 0 !== ub ? ub : []).length % 2 === 1) return Lb;
+     if ((null !== (Jd = dd.slice(0, gd).match(/`/g)) && void 0 !== Jd ? Jd : []).length % 2 === 1) return Zd;
```

#### 1879. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21062` → after: `L21062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21062) · [Before (L21062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21062)

```diff
-     return null === ab || ab === Lb ? Lb : (Bb++, ab)
+     return null === Kd || Kd === Zd ? Zd : (pd++, Kd)
```

#### 1880. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21083` → after: `L21083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21083) · [Before (L21083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21083)

```diff
-     for (const Bb of null !== (hb = null === bb || void 0 === bb ? void 0 : bb.constants) && void 0 !== hb ? hb : []) {
+     for (const pd of null !== (kd = null === dd || void 0 === dd ? void 0 : dd.constants) && void 0 !== kd ? kd : []) {
```

#### 1881. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21096` → after: `L21096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21096) · [Before (L21096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21096)

```diff
-         const [hb, Bb, Ob, Gb, Ub, Lb] = bb, Yb = null !== Gb && void 0 !== Gb ? Gb : Ub;
+         const [kd, pd, Nd, Wd, Pd, Zd] = dd, gd = null !== Wd && void 0 !== Wd ? Wd : Pd;
```

#### 1882. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21108` → after: `L21108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21108) · [Before (L21108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21108)

```diff
-           Sb = be.test(Yb) ? null !== (Bb = hb.get(Yb)) && void 0 !== Bb ? Bb : null : FJ(Ub),
+           Cd = Aj.test(gd) ? null !== (pd = kd.get(gd)) && void 0 !== pd ? pd : null : rj(Pd),
```

#### 1883. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21115` → after: `L21115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21115) · [Before (L21115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21115)

```diff
-     markdown: 0 === Ob ? bb : Gb.join("\n"),
+     markdown: 0 === Nd ? dd : Wd.join("\n"),
```

#### 1884. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21143` → after: `L21143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21143) · [Before (L21143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21143)

```diff
-         const ub = Bb.indexOf(`\`${bb}\``);
+         const Jd = pd.indexOf(`\`${dd}\``);
```

#### 1885. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21146` → after: `L21146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21146) · [Before (L21146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21146)

```diff
-       const ub = (0, wU.f)(Bb, new RegExp(`${(0,HU.i)(bb)}(?![\\w$])`), wU.m)[0];
+       const Jd = (0, OP.f)(pd, new RegExp(`${(0,LP.h)(dd)}(?![\\w$])`), OP.m)[0];
```

#### 1886. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21205` → after: `L21205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21205) · [Before (L21205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21205)

```diff
-     return (null !== (ub = bb.messages) && void 0 !== ub ? ub : []).some((bb => {
+     return (null !== (Jd = dd.messages) && void 0 !== Jd ? Jd : []).some((dd => {
```

#### 1887. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21243` → after: `L21243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21243) · [Before (L21243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21243)

```diff
-     markdown: 0 === Bb.length ? bb : Ob.join("\n"),
+     markdown: 0 === pd.length ? dd : Nd.join("\n"),
```

#### 1888. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21259` → after: `L21259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21259) · [Before (L21259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21259)

```diff
-     return Ce(bb) && (null !== (ub = bb.match(/\p{L}/gu)) && void 0 !== ub ? ub : []).length >= 4
+     return vX(dd) && (null !== (Jd = dd.match(/\p{L}/gu)) && void 0 !== Jd ? Jd : []).length >= 4
```

#### 1889. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21265` → after: `L21265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21265) · [Before (L21265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21265)

```diff
-       return bb.length < Ke ? null : `${bb.replace(/\.+$/,"")}\u2026`
+       return dd.length < IX ? null : `${dd.replace(/\.+$/,"")}\u2026`
```

#### 1890. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21270` → after: `L21270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21270) · [Before (L21270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21270)

```diff
-     return `${(Ob>Ae/2?Bb.slice(0,Ob):Bb).replace(/[\s,.;:!?-]+$/,"")}\u2026`
+     return `${(Nd>eX/2?pd.slice(0,Nd):pd).replace(/[\s,.;:!?-]+$/,"")}\u2026`
```

#### 1891. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21273` → after: `L21273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21273) · [Before (L21273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21273)

```diff
-     words: `"${ub}"`,
+     words: `"${Jd}"`,
```

#### 1892. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21291` → after: `L21291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21291) · [Before (L21291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21291)

```diff
-       return null !== (ub = bb.messages) && void 0 !== ub ? ub : bb.playerText.map((bb => ({
+       return null !== (Jd = dd.messages) && void 0 !== Jd ? Jd : dd.playerText.map((dd => ({
```

#### 1893. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21315` → after: `L21315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21315) · [Before (L21315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21315)

```diff
-   const Ob = re(null !== (ub = bb.messages) && void 0 !== ub ? ub : [], (bb => {
+   const Nd = qX(null !== (Jd = dd.messages) && void 0 !== Jd ? Jd : [], (dd => {
```

#### 1894. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21326` → after: `L21326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21326) · [Before (L21326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21326)

```diff
-   const hb = re(null !== (ub = bb.messages) && void 0 !== ub ? ub : [], (bb => {
+   const kd = qX(null !== (Jd = dd.messages) && void 0 !== Jd ? Jd : [], (dd => {
```

#### 1895. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21339` → after: `L21339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21339) · [Before (L21339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21339)

```diff
-   const hb = re(null !== (ub = bb.messages) && void 0 !== ub ? ub : [], (bb => {
+   const kd = qX(null !== (Jd = dd.messages) && void 0 !== Jd ? Jd : [], (dd => {
```

#### 1896. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21356` → after: `L21356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21356) · [Before (L21356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21356)

```diff
-         values: (null !== (ub = bb[2]) && void 0 !== ub ? ub : "").split(/,\s*/).filter((bb => "" !== bb.trim()))
+         values: (null !== (Jd = dd[2]) && void 0 !== Jd ? Jd : "").split(/,\s*/).filter((dd => "" !== dd.trim()))
```

#### 1897. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21360` → after: `L21360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21360) · [Before (L21360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21360)

```diff
-   return hb.length > 0 ? hb : bb.events
+   return kd.length > 0 ? kd : dd.events
```

#### 1898. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21379` → after: `L21379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21379) · [Before (L21379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21379)

```diff
-       return 0 === hb.length ? null : hb.length < bb.length ? `${hb.join(", ")}, \u2026` : hb.join(", ")
+       return 0 === kd.length ? null : kd.length < dd.length ? `${kd.join(", ")}, \u2026` : kd.join(", ")
```

#### 1899. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21382` → after: `L21382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21382) · [Before (L21382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21382)

```diff
-     words: `(${Bb})`,
+     words: `(${pd})`,
```

#### 1900. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21409` → after: `L21409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21409) · [Before (L21409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21409)

```diff
-     words: `${Bb.replace(/(^|\s)([a-z])/g,((bb,ub,hb)=>ub+hb.toUpperCase()))}${/\bboss$/.test(Bb)?"":" boss"}`,
+     words: `${pd.replace(/(^|\s)([a-z])/g,((dd,Jd,kd)=>Jd+kd.toUpperCase()))}${/\bboss$/.test(pd)?"":" boss"}`,
```

#### 1901. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21418` → after: `L21418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21418) · [Before (L21418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21418)

```diff
-   se = new RegExp(`(?:^|[._])(?:(?:ROUND|MATCH|GAME)_?(?:TIME|LENGTH|DURATION)${Ne}?|(?:ROUND|MATCH|GAME)${Ne}|TIME_?LIMIT${Ne}?)$`),
+   fX = new RegExp(`(?:^|[._])(?:(?:ROUND|MATCH|GAME)_?(?:TIME|LENGTH|DURATION)${XX}?|(?:ROUND|MATCH|GAME)${XX}|TIME_?LIMIT${XX}?)$`),
```

#### 1902. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21427` → after: `L21427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21427) · [Before (L21427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21427)

```diff
-     Gb = /MS\b|MILLI/.test(Ob) || /\*\s*1000\b/.test(ub) ? Bb / 1e3 : /SEC/.test(Ob) ? Bb : /MIN/.test(Ob) ? 60 * Bb : null;
+     Wd = /MS\b|MILLI/.test(Nd) || /\*\s*1000\b/.test(Jd) ? pd / 1e3 : /SEC/.test(Nd) ? pd : /MIN/.test(Nd) ? 60 * pd : null;
```

#### 1903. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21429` → after: `L21429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21429) · [Before (L21429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21429)

```diff
-   if (Gb < 60) return `${Gb} second${1===Gb?"":"s"}`;
+   if (Wd < 60) return `${Wd} second${1===Wd?"":"s"}`;
```

#### 1904. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21431` → after: `L21431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21431) · [Before (L21431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21431)

```diff
-   return Number.isInteger(2 * Ub) ? `${Ub} minute${1===Ub?"":"s"}` : null
+   return Number.isInteger(2 * Pd) ? `${Pd} minute${1===Pd?"":"s"}` : null
```

#### 1905. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21449` → after: `L21449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21449) · [Before (L21449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21449)

```diff
-     words: `\`${Bb} = ${Ob}\``,
+     words: `\`${pd} = ${Nd}\``,
```

#### 1906. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21493-L21494` → after: `L21493-L21494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21493-L21494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21493-L21494) · [Before (L21493-L21494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21493-L21494)

```diff
-       wb = `${Hb?"Your":"your"} ${Sb} ${hb.words}`
-     } else if ("boss" === ub) wb = `${Yb} ${Sb}${hb.words}`;
+       ld = `${od?"Your":"your"} ${Cd} ${kd.words}`
+     } else if ("boss" === Jd) ld = `${gd} ${Cd}${kd.words}`;
```

#### 1907. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21497` → after: `L21497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21497) · [Before (L21497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21497)

```diff
-       const ub = null !== (Ob = hb.length) && void 0 !== Ob ? Ob : null,
+       const Jd = null !== (Nd = kd.length) && void 0 !== Nd ? Nd : null,
```

#### 1908. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21499-L21502` → after: `L21499-L21502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21499-L21502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21499-L21502) · [Before (L21499-L21502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21499-L21502)

```diff
-         Gb = null !== Bb && (0, wU.f)(bb, new RegExp(`${Bb.replace(".","\\.")}(?![\\d.])`), (0, wU.j)("\\d.")).length > 0;
-       wb = `${Yb} ${Sb} (${null===ub||Gb?hb.words:`${hb.words.slice(0,-1)} // ${ub}\``})`
-     } else wb = `${Hb?"Your":"your"} ${Sb} (${hb.words})`;
-     return `${bb.slice(0,Ub)}${wb}${bb.slice(Lb)}`
+         Wd = null !== pd && (0, OP.f)(dd, new RegExp(`${pd.replace(".","\\.")}(?![\\d.])`), (0, OP.k)("\\d.")).length > 0;
+       ld = `${gd} ${Cd} (${null===Jd||Wd?kd.words:`${kd.words.slice(0,-1)} // ${Jd}\``})`
+     } else ld = `${od?"Your":"your"} ${Cd} (${kd.words})`;
+     return `${dd.slice(0,Pd)}${ld}${dd.slice(Zd)}`
```

#### 1909. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21574` → after: `L21574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21574) · [Before (L21574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21574)

```diff
-   return bb.length > ke ? `${(0,HU.m)(bb,ke-1).trimEnd()}\u2026` : bb
+   return dd.length > tX ? `${(0,LP.o)(dd,tX-1).trimEnd()}\u2026` : dd
```

#### 1910. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21579` → after: `L21579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21579) · [Before (L21579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21579)

```diff
-   const Gb = null !== (hb = bb.messages) && void 0 !== hb ? hb : [],
+   const Wd = null !== (kd = dd.messages) && void 0 !== kd ? kd : [],
```

#### 1911. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21583` → after: `L21583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21583) · [Before (L21583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21583)

```diff
-       return void 0 === bb ? null : null !== (ub = null === (hb = /\bapi\.(\w+)/.exec(bb)) || void 0 === hb ? void 0 : hb[1]) && void 0 !== ub ? ub : null
+       return void 0 === dd ? null : null !== (Jd = null === (kd = /\bapi\.(\w+)/.exec(dd)) || void 0 === kd ? void 0 : kd[1]) && void 0 !== Jd ? Jd : null
```

#### 1912. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21585` → after: `L21585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21585) · [Before (L21585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21585)

```diff
-   return null !== (Bb = null !== (Ob = Lb.find((bb => /\bwelcome\b/i.test(bb.text)))) && void 0 !== Ob ? Ob : Lb[0]) && void 0 !== Bb ? Bb : null
+   return null !== (pd = null !== (Nd = Zd.find((dd => /\bwelcome\b/i.test(dd.text)))) && void 0 !== Nd ? Nd : Zd[0]) && void 0 !== pd ? pd : null
```

#### 1913. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21613` → after: `L21613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21613) · [Before (L21613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21613)

```diff
-       Lb = null === Ub ? ub : ub.slice(Ub[0].length);
+       Zd = null === Pd ? Jd : Jd.slice(Pd[0].length);
```

#### 1914. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21615` → after: `L21615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21615) · [Before (L21615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21615)

```diff
-       LN.test(Lb) || !Bb.isAddStep(Lb) ? Gb.push(ub) : Ob || (Gb.push(`${Ub[1]}${Bb.change}`), Ob = !0);
+       Pf.test(Zd) || !pd.isAddStep(Zd) ? Wd.push(Jd) : Nd || (Wd.push(`${Pd[1]}${pd.change}`), Nd = !0);
```

#### 1915. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21618` → after: `L21618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21618) · [Before (L21618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21618)

```diff
-     const Yb = (0, wU.z)(Lb, /\s+(?=[A-Z`"])/g, (0, wU.r)(".!?")).flatMap((bb => !Bb.isAddSentence(bb) || LN.test(bb) ? [bb] : Ob ? [] : (Ob = !0, [Bb.change])));
+     const gd = (0, OP.u)(Zd, /\s+(?=[A-Z`"])/g, (0, OP.r)(".!?")).flatMap((dd => !pd.isAddSentence(dd) || Pf.test(dd) ? [dd] : Nd ? [] : (Nd = !0, [pd.change])));
```

#### 1916. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21630` → after: `L21630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21630) · [Before (L21630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21630)

```diff
-   Gb[Sb] = `${fl.exec(Gb[Sb])[1]}replace the line \`${Bb.replacedLine}\``;
+   Wd[Cd] = `${VI.exec(Wd[Cd])[1]}replace the line \`${pd.replacedLine}\``;
```

#### 1917. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21640-L21641` → after: `L21640-L21641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21640-L21641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21640-L21641) · [Before (L21640-L21641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21640-L21641)

```diff
-       const Lb = (null !== (hb = ab.get(Ob)) && void 0 !== hb ? hb : 0) + 1;
-       return ab.set(Ob, Lb), `${Bb[1]}${Lb}${Bb[3]}${bb.slice(Bb[0].length)}`
+       const Zd = (null !== (kd = Kd.get(Nd)) && void 0 !== kd ? kd : 0) + 1;
+       return Kd.set(Nd, Zd), `${pd[1]}${Zd}${pd[3]}${dd.slice(pd[0].length)}`
```

#### 1918. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21648` → after: `L21648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21648) · [Before (L21648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21648)

```diff
-   wN = /\b(?:after\s+\d|seconds?\s+after|minutes?\s+after|later|if\s+(?:they|the player|players)\s+(?:hasn't|haven't|has not|have not|didn't|don't)|every|each time|again|at\s+\d+\s+minutes?)\b/i,
+   of = /\b(?:after\s+\d|seconds?\s+after|minutes?\s+after|later|if\s+(?:they|the player|players)\s+(?:hasn't|haven't|has not|have not|didn't|don't)|every|each time|again|at\s+\d+\s+minutes?)\b/i,
```

#### 1919. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21665-L21667` → after: `L21665-L21667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21665-L21667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21665-L21667) · [Before (L21665-L21667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21665-L21667)

```diff
-   pN = new RegExp(`^,?\\s*(?:that|which)\\s+(${XN})(?:s|es)?\\b\\s*`, "i"),
-   oN = new RegExp(`^,?\\s*(${XN.replace(/e\|/g,"|").replace(/e$/,"")})ing\\b\\s*`, "i"),
-   AN = new RegExp(`^,?\\s*to\\s+(${XN})\\b\\s*`, "i");
+   Lf = new RegExp(`^,?\\s*(?:that|which)\\s+(${Qf})(?:s|es)?\\b\\s*`, "i"),
+   Of = new RegExp(`^,?\\s*(${Qf.replace(/e\|/g,"|").replace(/e$/,"")})ing\\b\\s*`, "i"),
+   ef = new RegExp(`^,?\\s*to\\s+(${Qf})\\b\\s*`, "i");
```

#### 1920. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21681` → after: `L21681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21681) · [Before (L21681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21681)

```diff
-       Ob = null !== (hb = ZN[Bb]) && void 0 !== hb ? hb : ZN[`${Bb}e`];
+       Nd = null !== (kd = lf[pd]) && void 0 !== kd ? kd : lf[`${pd}e`];
```

#### 1921. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21714` → after: `L21714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21714) · [Before (L21714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21714)

```diff
-     Lb = null !== (ub = null === (hb = Te.exec(Ub)) || void 0 === hb ? void 0 : hb[0]) && void 0 !== ub ? ub : "",
+     Zd = null !== (Jd = null === (kd = VX.exec(Pd)) || void 0 === kd ? void 0 : kd[0]) && void 0 !== Jd ? Jd : "",
```

#### 1922. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21716` → after: `L21716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21716) · [Before (L21716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21716)

```diff
-     Sb = null !== (Bb = null === (Ob = ce.exec(Yb)) || void 0 === Ob ? void 0 : Ob[0]) && void 0 !== Bb ? Bb : "";
+     Cd = null !== (pd = null === (Nd = zX.exec(gd)) || void 0 === Nd ? void 0 : Nd[0]) && void 0 !== pd ? pd : "";
```

#### 1923. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21718` → after: `L21718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21718) · [Before (L21718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21718)

```diff
-     head: `${Gb[0]}${Lb}`,
+     head: `${Wd[0]}${Zd}`,
```

#### 1924. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21727` → after: `L21727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21727) · [Before (L21727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21727)

```diff
-   if (null === Ob || wN.test(Ob.text) || /\b(?:change|replace|rewrite|edit|update|existing|current)\b/i.test(Ob.text)) return null;
+   if (null === Nd || of.test(Nd.text) || /\b(?:change|replace|rewrite|edit|update|existing|current)\b/i.test(Nd.text)) return null;
```

#### 1925. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21729` → after: `L21729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21729) · [Before (L21729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21729)

```diff
-   if (null === Gb || HN.test(null !== (hb = Gb[1]) && void 0 !== hb ? hb : "")) return null;
+   if (null === Wd || Kf.test(null !== (kd = Wd[1]) && void 0 !== kd ? kd : "")) return null;
```

#### 1926. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21733` → after: `L21733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21733) · [Before (L21733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21733)

```diff
-   Ub = Ub.slice(null !== (Bb = null === Lb || void 0 === Lb ? void 0 : Lb[0].length) && void 0 !== Bb ? Bb : 0);
+   Pd = Pd.slice(null !== (pd = null === Zd || void 0 === Zd ? void 0 : Zd[0].length) && void 0 !== pd ? pd : 0);
```

#### 1927. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21736` → after: `L21736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21736) · [Before (L21736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21736)

```diff
-   if (null === Yb) return /\bwelcome\b/i.test(null !== (Sb = Gb[1]) && void 0 !== Sb ? Sb : "") ? "drop" : null;
+   if (null === gd) return /\bwelcome\b/i.test(null !== (Cd = Wd[1]) && void 0 !== Cd ? Cd : "") ? "drop" : null;
```

#### 1928. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21738-L21739` → after: `L21738-L21739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21738-L21739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21738-L21739) · [Before (L21738-L21739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21738-L21739)

```diff
-     Hb = `change your welcome message ("${bN(ub.text)}") so it also ${Yb.verb} ${Yb.after}`;
-   return `${Ob.head}${ab}${""===ab&&/^[A-Z]/.test(Ob.text)?`C${Hb.slice(1)}`:Hb}`
+     od = `change your welcome message ("${AX(Jd.text)}") so it also ${gd.verb} ${gd.after}`;
+   return `${Nd.head}${Kd}${""===Kd&&/^[A-Z]/.test(Nd.text)?`C${od.slice(1)}`:od}`
```

#### 1929. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21756` → after: `L21756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21756) · [Before (L21756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21756)

```diff
-   const Yb = (null !== (Bb = null !== (Ob = null !== (Gb = Lb[1]) && void 0 !== Gb ? Gb : Lb[2]) && void 0 !== Ob ? Ob : Lb[3]) && void 0 !== Bb ? Bb : Lb[4]).trim(),
+   const gd = (null !== (pd = null !== (Nd = null !== (Wd = Zd[1]) && void 0 !== Wd ? Wd : Zd[2]) && void 0 !== Nd ? Nd : Zd[3]) && void 0 !== pd ? pd : Zd[4]).trim(),
```

#### 1930. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21767` → after: `L21767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21767) · [Before (L21767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21767)

```diff
-   return null === Hb ? "drop" : `${Ub.head}Your shop already has "${Yb}": make it ${nN[Hb[1].toLowerCase()]}${ab.slice(Hb[0].length)}`
+   return null === od ? "drop" : `${Pd.head}Your shop already has "${gd}": make it ${sf[od[1].toLowerCase()]}${Kd.slice(od[0].length)}`
```

#### 1931. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21778-L21779` → after: `L21778-L21779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21778-L21779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21778-L21779) · [Before (L21778-L21779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21778-L21779)

```diff
-   const Yb = Qe(null !== (hb = null !== (Bb = null !== (Ob = Lb[1]) && void 0 !== Ob ? Ob : Lb[2]) && void 0 !== Bb ? Bb : Lb[3]) && void 0 !== hb ? hb : Lb[4]),
-     Sb = (null !== (Gb = ub.calls) && void 0 !== Gb ? Gb : []).flatMap((bb => {
+   const gd = HX(null !== (kd = null !== (pd = null !== (Nd = Zd[1]) && void 0 !== Nd ? Nd : Zd[2]) && void 0 !== pd ? pd : Zd[3]) && void 0 !== kd ? kd : Zd[4]),
+     Cd = (null !== (Wd = Jd.calls) && void 0 !== Wd ? Wd : []).flatMap((dd => {
```

#### 1932. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21781` → after: `L21781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21781) · [Before (L21781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21781)

```diff
-       return "giveItem" === bb.name && Qe(null !== (ub = bb.strings[0]) && void 0 !== ub ? ub : "") === Yb ? [QY(bb.where)] : []
+       return "giveItem" === dd.name && HX(null !== (Jd = dd.strings[0]) && void 0 !== Jd ? Jd : "") === gd ? [JC(dd.where)] : []
```

#### 1933. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21788` → after: `L21788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21788) · [Before (L21788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21788)

```diff
-   return Sb.length > 0 && (0 === ab.size ? !Hb : [...ab].every((bb => Sb.includes(bb))))
+   return Cd.length > 0 && (0 === Kd.size ? !od : [...Kd].every((dd => Cd.includes(dd))))
```

#### 1934. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21797` → after: `L21797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21797) · [Before (L21797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21797)

```diff
-   const Lb = (null !== (hb = ub.calls) && void 0 !== hb ? hb : []).filter((bb => bb.strings.some((bb => /leaderboard/i.test(bb)))));
+   const Zd = (null !== (kd = Jd.calls) && void 0 !== kd ? kd : []).filter((dd => dd.strings.some((dd => /leaderboard/i.test(dd)))));
```

#### 1935. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21801-L21802` → after: `L21801-L21802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21801-L21802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21801-L21802) · [Before (L21801-L21802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21801-L21802)

```diff
-     return /\bkills?\s*:/i.test(null !== (ub = bb.line) && void 0 !== ub ? ub : "")
-   })) || (null !== (Yb = ub.messages) && void 0 !== Yb ? Yb : []).some((bb => {
+     return /\bkills?\s*:/i.test(null !== (Jd = dd.line) && void 0 !== Jd ? Jd : "")
+   })) || (null !== (gd = Jd.messages) && void 0 !== gd ? gd : []).some((dd => {
```

#### 1936. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21811` → after: `L21811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21811) · [Before (L21811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21811)

```diff
-     return (null !== (ub = bb.line) && void 0 !== ub ? ub : "").toLowerCase().includes(Sb)
+     return (null !== (Jd = dd.line) && void 0 !== Jd ? Jd : "").toLowerCase().includes(Cd)
```

#### 1937. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21848` → after: `L21848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21848) · [Before (L21848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21848)

```diff
-         Kb = ON.test(`${ob}\n${Ab}`) || "" !== lb && lb === UN(pb.text),
+         Gd = pf.test(`${ed}\n${Rd}`) || "" !== Id && Id === Wf(Od.text),
```

#### 1938. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21851` → after: `L21851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21851) · [Before (L21851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21851)

```diff
-       const Cb = Kb ? Xb.trim() : /[.!?]$/.test(pb.text.trim()) ? `${pb.text.trim()} ${Wb}` : `${pb.text.trim()}. ${Wb}`,
+       const xd = Gd ? Ld.trim() : /[.!?]$/.test(Od.text.trim()) ? `${Od.text.trim()} ${vd}` : `${Od.text.trim()}. ${vd}`,
```

#### 1939. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21855-L21856` → after: `L21855-L21856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21855-L21856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21855-L21856) · [Before (L21855-L21856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21855-L21856)

```diff
-         nb = `${pb.line.slice(0,rb.start)}${(0,HU.V)(Cb,rb.quote)}${pb.line.slice(rb.end)}`,
-         Db = `Change your welcome message ("${bN(pb.text)}") to "${Cb}".`,
+         ad = `${Od.line.slice(0,Bd.start)}${(0,LP.R)(xd,Bd.quote)}${Od.line.slice(Bd.end)}`,
+         Md = `Change your welcome message ("${AX(Od.text)}") to "${xd}".`,
```

#### 1940. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21864` → after: `L21864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21864) · [Before (L21864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21864)

```diff
-         newCode: [`${jb}${nb}`],
+         newCode: [`${sd}${ad}`],
```

#### 1941. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21887` → after: `L21887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21887) · [Before (L21887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21887)

```diff
-     if (hH.test(bb) && (wb = !wb), !wb && /^##\s/.test(bb) && (ab = lb, Hb = /track|measure/i.test(bb)), null !== Lb && lb === Lb.start) Sb.set(ab, (null !== (pb = Sb.get(ab)) && void 0 !== pb ? pb : 0) + 1);
+     if (Po.test(dd) && (ld = !ld), !ld && /^##\s/.test(dd) && (Kd = Id, od = /track|measure/i.test(dd)), null !== Zd && Id === Zd.start) Cd.set(Kd, (null !== (Od = Cd.get(Kd)) && void 0 !== Od ? Od : 0) + 1);
```

#### 1942. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21893` → after: `L21893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21893) · [Before (L21893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21893)

```diff
-     if (Sb.set(ab, (null !== (Zb = Sb.get(ab)) && void 0 !== Zb ? Zb : 0) + 1), null !== Lb && lb > Lb.start && lb < Lb.end && /^\s*\d+[.)]/.test(bb)) {
+     if (Cd.set(Kd, (null !== (Qd = Cd.get(Kd)) && void 0 !== Qd ? Qd : 0) + 1), null !== Zd && Id > Zd.start && Id < Zd.end && /^\s*\d+[.)]/.test(dd)) {
```

#### 1943. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21900-L21901` → after: `L21900-L21901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21900-L21901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21900-L21901) · [Before (L21900-L21901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21900-L21901)

```diff
-       Kb = null !== (Xb = null !== Gb && void 0 !== Gb ? Gb : ob) && void 0 !== Xb ? Xb : null === Ab ? null : "drop",
-       Wb = null !== Gb ? "drop" === Gb ? "welcomeDropped" : "welcomeIdea" : null !== ob ? "drop" === ob ? "shopDropped" : "shopItem" : null !== Ab && void 0 !== Ab ? Ab : "givenDropped";
+       Gd = null !== (Ld = null !== Wd && void 0 !== Wd ? Wd : ed) && void 0 !== Ld ? Ld : null === Rd ? null : "drop",
+       vd = null !== Wd ? "drop" === Wd ? "welcomeDropped" : "welcomeIdea" : null !== ed ? "drop" === ed ? "shopDropped" : "shopItem" : null !== Rd && void 0 !== Rd ? Rd : "givenDropped";
```

#### 1944. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21913` → after: `L21913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21913) · [Before (L21913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21913)

```diff
-     if ("drop" === lb.to) ob.set(lb.section, (null !== (Ab = ob.get(lb.section)) && void 0 !== Ab ? Ab : 0) + 1)
+     if ("drop" === Id.to) ed.set(Id.section, (null !== (Rd = ed.get(Id.section)) && void 0 !== Rd ? Rd : 0) + 1)
```

#### 1945. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21965-L21966` → after: `L21965-L21966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21965-L21966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21965-L21966) · [Before (L21965-L21966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21965-L21966)

```diff
-   const hb = (0, HU.i)(ub);
-   return new RegExp(`(?:^|[^\\p{L}\\p{N}])${hb}(?![\\p{L}\\p{N}])`, "iu").test(bb)
+   const kd = (0, LP.h)(Jd);
+   return new RegExp(`(?:^|[^\\p{L}\\p{N}])${kd}(?![\\p{L}\\p{N}])`, "iu").test(dd)
```

#### 1946. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21979-L21980` → after: `L21979-L21980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21979-L21980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21979-L21980) · [Before (L21979-L21980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21979-L21980)

```diff
-       for (const [Ub] of(0, wU.f)(bb, /\/[a-z][\w-]*/gi, (0, wU.j)("\\w/"))) Bb.push(Ub);
-     const Ob = (null !== (hb = ub.calls) && void 0 !== hb ? hb : []).flatMap((bb => /^createShopItem/.test(bb.name) && void 0 !== bb.strings[0] ? [bb.strings[0]] : [])),
+       for (const [Pd] of(0, OP.f)(dd, /\/[a-z][\w-]*/gi, (0, OP.k)("\\w/"))) pd.push(Pd);
+     const Nd = (null !== (kd = Jd.calls) && void 0 !== kd ? kd : []).flatMap((dd => /^createShopItem/.test(dd.name) && void 0 !== dd.strings[0] ? [dd.strings[0]] : [])),
```

#### 1947. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21994` → after: `L21994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21994) · [Before (L21994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21994)

```diff
-   return bb.length > MN ? `${bb.slice(0,MN-1).trimEnd()}\u2026` : bb
+   return dd.length > Uf ? `${dd.slice(0,Uf-1).trimEnd()}\u2026` : dd
```

#### 1948. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L21998` → after: `L21998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR21998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L21998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L21998) · [Before (L21998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L21998)

```diff
-   return /[.!?]$/.test(bb.trim()) ? bb.trim() : `${bb.trim()}.`
+   return /[.!?]$/.test(dd.trim()) ? dd.trim() : `${dd.trim()}.`
```

#### 1949. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22011-L22013` → after: `L22011-L22013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22011-L22013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22011-L22013) · [Before (L22011-L22013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22011-L22013)

```diff
-         Ub = Gb[1][0] === Gb[1][0].toUpperCase() ? `${Bb[0].toUpperCase()}${Bb.slice(1)}` : Bb,
-         Lb = `${null!==(hb=Gb[2])&&void 0!==hb?hb:""}${Gb[3]}`;
-       return `${bb.slice(0,Gb.index)}${Ub} "${ub}" to your ${Lb}${bb.slice(Gb.index+Gb[0].length)}`
+         Pd = Wd[1][0] === Wd[1][0].toUpperCase() ? `${pd[0].toUpperCase()}${pd.slice(1)}` : pd,
+         Zd = `${null!==(kd=Wd[2])&&void 0!==kd?kd:""}${Wd[3]}`;
+       return `${dd.slice(0,Wd.index)}${Pd} "${Jd}" to your ${Zd}${dd.slice(Wd.index+Wd[0].length)}`
```

#### 1950. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22040` → after: `L22040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22040) · [Before (L22040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22040)

```diff
-     const Lb = (null !== (Bb = ub.messages) && void 0 !== Bb ? Bb : []).filter((bb => void 0 !== bb.line && null !== FN(bb.line, bb.text) && !bb.text.includes("\u2026"))),
+     const Zd = (null !== (pd = Jd.messages) && void 0 !== pd ? pd : []).filter((dd => void 0 !== dd.line && null !== tf(dd.line, dd.text) && !dd.text.includes("\u2026"))),
```

#### 1951. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22045` → after: `L22045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22045) · [Before (L22045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22045)

```diff
-       return null !== (Sb = Lb.find((ub => ub.line.trim().replace(/;\s*$/, "").replace(/\s+/g, "") === bb))) && void 0 !== Sb ? Sb : null
+       return null !== (Cd = Zd.find((Jd => Jd.line.trim().replace(/;\s*$/, "").replace(/\s+/g, "") === dd))) && void 0 !== Cd ? Cd : null
```

#### 1952. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22049` → after: `L22049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22049) · [Before (L22049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22049)

```diff
-     const Hb = Lb.filter((bb => QY(bb.where) === ab && new RegExp(`\\bapi\\.${hb}\\s*\\(`).test(bb.line))),
+     const od = Zd.filter((dd => JC(dd.where) === Kd && new RegExp(`\\bapi\\.${kd}\\s*\\(`).test(dd.line))),
```

#### 1953. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22057` → after: `L22057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22057) · [Before (L22057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22057)

```diff
-   if (0 === Kb.length || !IN.test(`${Ab}\n${lb}`)) return null;
+   if (0 === Gd.length || !Df.test(`${Rd}\n${Id}`)) return null;
```

#### 1954. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22062` → after: `L22062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22062) · [Before (L22062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22062)

```diff
-       if (null === hb) return `${cN(bb)} ${cN(ub)}`;
+       if (null === kd) return `${wf(dd)} ${wf(Jd)}`;
```

#### 1955. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22064` → after: `L22064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22064) · [Before (L22064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22064)

```diff
-       return "" === Bb ? `${hb[1]} ${cN(ub)}` : `${hb[1]} ${cN(ub)} ${Bb}`
+       return "" === pd ? `${kd[1]} ${wf(Jd)}` : `${kd[1]} ${wf(Jd)} ${pd}`
```

#### 1956. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22068-L22069` → after: `L22068-L22069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22068-L22069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22068-L22069) · [Before (L22068-L22069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22068-L22069)

```diff
-     jb = `${ob.line.slice(0,db.start)}${(0,HU.V)(Cb,db.quote)}${ob.line.slice(db.end)}`,
-     nb = `Change your ${/\bwelcome\b/i.test(ob.text)?`welcome message ("${TN(ob.text)}")`:`"${TN(ob.text)}" message in ${QY(ob.where)}`} so it also says "${Wb}".`,
+     sd = `${ed.line.slice(0,qd.start)}${(0,LP.R)(xd,qd.quote)}${ed.line.slice(qd.end)}`,
+     ad = `Change your ${/\bwelcome\b/i.test(ed.text)?`welcome message ("${Hf(ed.text)}")`:`"${Hf(ed.text)}" message in ${JC(ed.where)}`} so it also says "${vd}".`,
```

#### 1957. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22078` → after: `L22078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22078) · [Before (L22078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22078)

```diff
-     newCode: [`${rb}${jb}`],
+     newCode: [`${Bd}${sd}`],
```

#### 1958. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22086` → after: `L22086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22086) · [Before (L22086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22086)

```diff
-     null !== ub && null !== Bb && (bb[zb] = `${ub[0]}${Bb[1]}${nb}`)
+     null !== Jd && null !== pd && (dd[Yd] = `${Jd[0]}${pd[1]}${ad}`)
```

#### 1959. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22104` → after: `L22104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22104) · [Before (L22104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22104)

```diff
-   const [, Ob, Gb, Ub, Lb, Yb] = Bb, Sb = (null !== (hb = ub.messages) && void 0 !== hb ? hb : []).find((bb => VN(bb.text) === VN(Lb)));
+   const [, Nd, Wd, Pd, Zd, gd] = pd, Cd = (null !== (kd = Jd.messages) && void 0 !== kd ? kd : []).find((dd => uf(dd.text) === uf(Zd)));
```

#### 1960. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22109` → after: `L22109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22109) · [Before (L22109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22109)

```diff
-     to: `${Ob}${Gb}hange your "${Lb}" message in ${QY(Sb.where)} so it also says "${Ub}"${Yb}`,
+     to: `${Nd}${Wd}hange your "${Zd}" message in ${JC(Cd.where)} so it also says "${Pd}"${gd}`,
```

#### 1961. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22115` → after: `L22115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22115) · [Before (L22115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22115)

```diff
-   Os = new RegExp(`\\b(?:the|your)\\s+(${[...hs,...Bs].join("|")})\\s+(?:(?:\`[^\`\\n]+\`|[A-Za-z-]+)\\s+){0,2}?(?:message|line)\\b`, "gi"),
+   Wn = new RegExp(`\\b(?:the|your)\\s+(${[...pn,...Nn].join("|")})\\s+(?:(?:\`[^\`\\n]+\`|[A-Za-z-]+)\\s+){0,2}?(?:message|line)\\b`, "gi"),
```

#### 1962. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22136` → after: `L22136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22136) · [Before (L22136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22136)

```diff
- function as(bb) {
+ function Qn(dd) {
```

#### 1963. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22144` → after: `L22144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22144) · [Before (L22144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22144)

```diff
-   const Bb = null !== (hb = null === ub || void 0 === ub ? void 0 : ub.messageOrders) && void 0 !== hb ? hb : [];
+   const pd = null !== (kd = null === Jd || void 0 === Jd ? void 0 : Jd.messageOrders) && void 0 !== kd ? kd : [];
```

#### 1964. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22184` → after: `L22184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22184) · [Before (L22184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22184)

```diff
-         ab = as(bb),
+         Kd = Qn(dd),
```

#### 1965. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22221` → after: `L22221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22221) · [Before (L22221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22221)

```diff
-   Zs = `(\\d+|${Object.keys(ws).join("|")})`;
+   en = `(\\d+|${Object.keys(On).join("|")})`;
```

#### 1966. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22225` → after: `L22225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22225) · [Before (L22225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22225)

```diff
-   return null !== (ub = ws[bb.toLowerCase()]) && void 0 !== ub ? ub : Number(bb)
+   return null !== (Jd = On[dd.toLowerCase()]) && void 0 !== Jd ? Jd : Number(dd)
```

#### 1967. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22265` → after: `L22265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22265) · [Before (L22265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22265)

```diff
-     const ab = /^(\d+) min$/.exec(null !== (Ob = Sb[1]) && void 0 !== Ob ? Ob : "");
+     const Kd = /^(\d+) min$/.exec(null !== (Nd = Cd[1]) && void 0 !== Nd ? Nd : "");
```

#### 1968. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22269` → after: `L22269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22269) · [Before (L22269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22269)

```diff
-         const hb = /^(\d+(?:\.\d+)?)%$/.exec(null !== (ub = Sb[bb]) && void 0 !== ub ? ub : "");
+         const kd = /^(\d+(?:\.\d+)?)%$/.exec(null !== (Jd = Cd[dd]) && void 0 !== Jd ? Jd : "");
```

#### 1969. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22277` → after: `L22277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22277) · [Before (L22277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22277)

```diff
-       left: null !== (Gb = Hb(Bb.left)) && void 0 !== Gb ? Gb : 100 - wb,
+       left: null !== (Wd = od(pd.left)) && void 0 !== Wd ? Wd : 100 - ld,
```

#### 1970. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22295` → after: `L22295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22295) · [Before (L22295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22295)

```diff
-   ns = new RegExp(`\\b(?:(${rs})\\s+)?(?:the\\s+)?(first[\\s-]+)?${Zs}[\\s-]*(?:minutes?|mins?)\\b(\\s+or\\s+(?:more|longer))?(\\s+mark\\b)?`, "gi");
+   Fn = new RegExp(`\\b(?:(${Mn})\\s+)?(?:the\\s+)?(first[\\s-]+)?${en}[\\s-]*(?:minutes?|mins?)\\b(\\s+or\\s+(?:more|longer))?(\\s+mark\\b)?`, "gi");
```

#### 1971. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22298` → after: `L22298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22298) · [Before (L22298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22298)

```diff
-   return void 0 !== bb[1] || void 0 !== bb[2] || /^the\s/i.test(bb[0]) || !(0, wU.b)(bb, "\\d.,")
+   return void 0 !== dd[1] || void 0 !== dd[2] || /^the\s/i.test(dd[0]) || !(0, OP.e)(dd, "\\d.,")
```

#### 1972. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22300-L22301` → after: `L22300-L22301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22300-L22301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22300-L22301) · [Before (L22300-L22301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22300-L22301)

```diff
- const xs = new RegExp(`\\b(?:(${rs}|during)\\s+)?(?:the\\s+|that\\s+|your\\s+)?first[\\s-]+minute\\b`, "gi"),
-   zs = new RegExp(`\\b(?:(${rs})\\s+)?minute\\s+${Zs}\\b(?!\\s?%)`, "gi");
+ const mn = new RegExp(`\\b(?:(${Mn}|during)\\s+)?(?:the\\s+|that\\s+|your\\s+)?first[\\s-]+minute\\b`, "gi"),
+   bn = new RegExp(`\\b(?:(${Mn})\\s+)?minute\\s+${en}\\b(?!\\s?%)`, "gi");
```

#### 1973. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22313` → after: `L22313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22313) · [Before (L22313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22313)

```diff
-     const bb = null !== (hb = Gb[1]) && void 0 !== hb ? hb : "";
+     const dd = null !== (kd = Wd[1]) && void 0 !== kd ? kd : "";
```

#### 1974. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22326` → after: `L22326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22326) · [Before (L22326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22326)

```diff
-     const bb = null !== (Bb = Gb[1]) && void 0 !== Bb ? Bb : "";
+     const dd = null !== (pd = Wd[1]) && void 0 !== pd ? pd : "";
```

#### 1975. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22339` → after: `L22339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22339) · [Before (L22339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22339)

```diff
-     const bb = null !== (Ob = Gb[1]) && void 0 !== Ob ? Ob : "";
+     const dd = null !== (Nd = Wd[1]) && void 0 !== Nd ? Nd : "";
```

#### 1976. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22359` → after: `L22359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22359) · [Before (L22359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22359)

```diff
-   return null !== (hb = null === Ob || void 0 === Ob ? void 0 : Ob[1]) && void 0 !== hb ? hb : null
+   return null !== (kd = null === Nd || void 0 === Nd ? void 0 : Nd[1]) && void 0 !== kd ? kd : null
```

#### 1977. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22376` → after: `L22376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22376) · [Before (L22376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22376)

```diff
-   const [Bb] = (0, HU.N)(bb, ub, hb);
+   const [pd] = (0, LP.M)(dd, Jd, kd);
```

#### 1978. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22389` → after: `L22389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22389) · [Before (L22389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22389)

```diff
-   return 0 === ub.size ? [] : (0, wU.f)(bb, Ms, (0, wU.j)("\\w.,")).flatMap((Ob => {
+   return 0 === Jd.size ? [] : (0, OP.f)(dd, Dn, (0, OP.k)("\\w.,")).flatMap((Nd => {
```

#### 1979. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22395` → after: `L22395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22395) · [Before (L22395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22395)

```diff
-       Hb = Sb ? 100 * Number(Ob[2]) / ab : Number(Ob[1]),
+       od = Cd ? 100 * Number(Nd[2]) / Kd : Number(Nd[1]),
```

#### 1980. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22433` → after: `L22433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22433) · [Before (L22433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22433)

```diff
-     const xb = null !== (Gb = null !== (Ub = es(ob, !1)) && void 0 !== Ub ? Ub : es(pb, !0)) && void 0 !== Gb ? Gb : Cb.side;
+     const Fd = null !== (Wd = null !== (Pd = nn(ed, !1)) && void 0 !== Pd ? Pd : nn(Od, !0)) && void 0 !== Wd ? Wd : xd.side;
```

#### 1981. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22435` → after: `L22435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22435) · [Before (L22435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22435)

```diff
-     const [zb, gb] = (0, HU.N)(bb, Lb, Yb);
+     const [Yd, md] = (0, LP.M)(dd, Zd, gd);
```

#### 1982. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22447` → after: `L22447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22447) · [Before (L22447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22447)

```diff
-       text: Sb ? `${Nb} ${Ob[0].replace(/^\d+\s+/,"")}` : `${eb}%`
+       text: Cd ? `${nd} ${Nd[0].replace(/^\d+\s+/,"")}` : `${fd}%`
```

#### 1983. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22453-L22456` → after: `L22453-L22456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22453-L22456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22453-L22456) · [Before (L22453-L22456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22453-L22456)

```diff
-   BM = new RegExp(`\\bthe earliest is (.+?) \\((${uM}) min\\)`),
-   OM = new RegExp(`^(?:and )?(.+?) \\((${uM}) min\\)$`),
-   GM = new RegExp(`\\btook a median (${uM}) min from (.+?) to (.+?)\\.(?:\\s|$)`, "g"),
-   UM = new RegExp(`\\bMedian time between: (${uM}) min\\b`),
+   WU = new RegExp(`\\bthe earliest is (.+?) \\((${pU}) min\\)`),
+   PU = new RegExp(`^(?:and )?(.+?) \\((${pU}) min\\)$`),
+   ZU = new RegExp(`\\btook a median (${pU}) min from (.+?) to (.+?)\\.(?:\\s|$)`, "g"),
+   gU = new RegExp(`\\bMedian time between: (${pU}) min\\b`),
```

#### 1984. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22472` → after: `L22472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22472) · [Before (L22472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22472)

```diff
-       const Ub = null !== (Ob = hb.get(aM(bb))) && void 0 !== Ob ? Ob : bb.trim();
+       const Pd = null !== (Nd = kd.get(lU(dd))) && void 0 !== Nd ? Nd : dd.trim();
```

#### 1985. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22474-L22475` → after: `L22474-L22475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22474-L22475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22474-L22475) · [Before (L22474-L22475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22474-L22475)

```diff
-       const Lb = null !== (Gb = ub.get(Ub)) && void 0 !== Gb ? Gb : [];
-       ub.set(Ub, Lb.includes(Bb) ? Lb : [...Lb, Bb])
+       const Zd = null !== (Wd = Jd.get(Pd)) && void 0 !== Wd ? Wd : [];
+       Jd.set(Pd, Zd.includes(pd) ? Zd : [...Zd, pd])
```

#### 1986. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22491-L22492` → after: `L22491-L22492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22491-L22492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22491-L22492) · [Before (L22491-L22492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22491-L22492)

```diff
-       const hb = null === Ub ? null : new RegExp(`^(${uM})$`).exec(null !== (Lb = bb[Ub.at]) && void 0 !== Lb ? Lb : ""),
-         Bb = null === Ub ? "" : null !== (Yb = bb[Ub.event]) && void 0 !== Yb ? Yb : "";
+       const kd = null === Pd ? null : new RegExp(`^(${pU})$`).exec(null !== (Zd = dd[Pd.at]) && void 0 !== Zd ? Zd : ""),
+         pd = null === Pd ? "" : null !== (gd = dd[Pd.event]) && void 0 !== gd ? gd : "";
```

#### 1987. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22495-L22496` → after: `L22495-L22496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22495-L22496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22495-L22496) · [Before (L22495-L22496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22495-L22496)

```diff
-         const ub = -1 === Ub.value ? "" : null !== (Sb = bb[Ub.value]) && void 0 !== Sb ? Sb : "";
-         Gb("" === ub || "(none)" === ub ? Bb : `${Bb}: ${ub}`, Number(hb[1]))
+         const Jd = -1 === Pd.value ? "" : null !== (Cd = dd[Pd.value]) && void 0 !== Cd ? Cd : "";
+         Wd("" === Jd || "(none)" === Jd ? pd : `${pd}: ${Jd}`, Number(kd[1]))
```

#### 1988. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22509` → after: `L22509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22509) · [Before (L22509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22509)

```diff
-     for (const Ob of Zb.matchAll(GM)) Bb.set(`${aM(Ob[2])} > ${aM(Ob[3])}`, {
+     for (const Nd of Qd.matchAll(ZU)) pd.set(`${lU(Nd[2])} > ${lU(Nd[3])}`, {
```

#### 1989. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22520` → after: `L22520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22520) · [Before (L22520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22520)

```diff
-         Ub = `${aM(bb)} > ${aM(ub)}`;
+         Pd = `${lU(dd)} > ${lU(Jd)}`;
```

#### 1990. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22524` → after: `L22524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22524) · [Before (L22524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22524)

```diff
-         minutes: null === Gb ? null !== (ab = null === (Hb = Bb.get(Ub)) || void 0 === Hb ? void 0 : Hb.minutes) && void 0 !== ab ? ab : null : Number(Gb[1])
+         minutes: null === Wd ? null !== (Kd = null === (od = pd.get(Pd)) || void 0 === od ? void 0 : od.minutes) && void 0 !== Kd ? Kd : null : Number(Wd[1])
```

#### 1991. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22532-L22533` → after: `L22532-L22533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22532-L22533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22532-L22533) · [Before (L22532-L22533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22532-L22533)

```diff
-             Bb = (null !== (ub = bb[2]) && void 0 !== ub ? ub : "").split(/,\s*/).map((bb => bb.trim())).filter((bb => "" !== bb && "\u2026" !== bb));
-           return 0 === Bb.length ? [hb] : Bb.map((bb => `${hb}: ${bb}`))
+             pd = (null !== (Jd = dd[2]) && void 0 !== Jd ? Jd : "").split(/,\s*/).map((dd => dd.trim())).filter((dd => "" !== dd && "\u2026" !== dd));
+           return 0 === pd.length ? [kd] : pd.map((dd => `${kd}: ${dd}`))
```

#### 1992. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22552` → after: `L22552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22552) · [Before (L22552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22552)

```diff
-   return /^-?\d+$/.test(Ob) ? [ub, ...(0, HU.J)(Bb, Ob)] : /[a-z]{3}/i.test(Ob) && !wM.test(Ob) ? [ub, Bb, Ob] : [ub, Bb]
+   return /^-?\d+$/.test(Nd) ? [Jd, ...(0, LP.L)(pd, Nd)] : /[a-z]{3}/i.test(Nd) && !LU.test(Nd) ? [Jd, pd, Nd] : [Jd, pd]
```

#### 1993. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22556` → after: `L22556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22556) · [Before (L22556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22556)

```diff
-   return `\`?${(0,HU.H)(bb)}\`?(?![\\w]|\\.\\d)`
+   return `\`?${(0,LP.G)(dd)}\`?(?![\\w]|\\.\\d)`
```

#### 1994. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22561` → after: `L22561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22561) · [Before (L22561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22561)

```diff
-   const Ob = 10 ** (null !== (hb = null === (Bb = bb.split(".")[1]) || void 0 === Bb ? void 0 : Bb.length) && void 0 !== hb ? hb : 0);
+   const Nd = 10 ** (null !== (kd = null === (pd = dd.split(".")[1]) || void 0 === pd ? void 0 : pd.length) && void 0 !== kd ? kd : 0);
```

#### 1995. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22574-L22575` → after: `L22574-L22575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22574-L22575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22574-L22575) · [Before (L22574-L22575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22574-L22575)

```diff
-     Lb = null !== (Ob = null === Ub || void 0 === Ub ? void 0 : Ub[2]) && void 0 !== Ob ? Ob : "",
-     Yb = "1" === Gb ? Lb.replace(/s$/i, "") : /^minute$/i.test(Lb) ? `${Lb}s` : Lb;
+     Zd = null !== (Nd = null === Pd || void 0 === Pd ? void 0 : Pd[2]) && void 0 !== Nd ? Nd : "",
+     gd = "1" === Wd ? Zd.replace(/s$/i, "") : /^minute$/i.test(Zd) ? `${Zd}s` : Zd;
```

#### 1996. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22583` → after: `L22583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22583) · [Before (L22583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22583)

```diff
-     text: `${Gb}${Ub[1]}${Yb}`
+     text: `${Wd}${Pd[1]}${gd}`
```

#### 1997. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22591` → after: `L22591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22591) · [Before (L22591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22591)

```diff
-     return hb.has(aM(ub)) ? Bb : []
+     return kd.has(lU(Jd)) ? pd : []
```

#### 1998. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22595` → after: `L22595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22595) · [Before (L22595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22595)

```diff
-   dM = `(?:${CM}+(?:event|events|timing|time|purchase|purchases|rescue|rescues|death|deaths|kill|kills|quickly|early|usually|first|often|only|typically|then|now|already|is|are|was))*`,
+   sU = `(?:${BU}+(?:event|events|timing|time|purchase|purchases|rescue|rescues|death|deaths|kill|kills|quickly|early|usually|first|often|only|typically|then|now|already|is|are|was))*`,
```

#### 1999. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22597-L22598` → after: `L22597-L22598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22597-L22598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22597-L22598) · [Before (L22597-L22598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22597-L22598)

```diff
-   jM = new RegExp(`^${dM}${CM}+(?:happens?|happened|fires?|fired|triggers?|triggered|comes?|came|occurs?|occurred|logged|starts?|started|begins?|began|arrives?|averages?|bought|reached|rescued|collected|shows up)(?:${CM}+(?:quickly|early))?(?:${CM}+(?:at|around|about))?(?:${CM}+a … [truncated]
-   nM = new RegExp(`^${dM}${CM}+(?:at|around|about)${CM}+$`, "i"),
+   aU = new RegExp(`^${sU}${BU}+(?:happens?|happened|fires?|fired|triggers?|triggered|comes?|came|occurs?|occurred|logged|starts?|started|begins?|began|arrives?|averages?|bought|reached|rescued|collected|shows up)(?:${BU}+(?:quickly|early))?(?:${BU}+(?:at|around|about))?(?:${BU}+a … [truncated]
+   MU = new RegExp(`^${sU}${BU}+(?:at|around|about)${BU}+$`, "i"),
```

#### 2000. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22600` → after: `L22600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22600) · [Before (L22600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22600)

```diff
-   xM = new RegExp(`^(?:(${uM})[\\s-]*(?:minutes?|mins?|min)\\b|minute\\s+(${uM})\\b)`, "i"),
+   YU = new RegExp(`^(?:(${pU})[\\s-]*(?:minutes?|mins?|min)\\b|minute\\s+(${pU})\\b)`, "i"),
```

#### 2001. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22602-L22603` → after: `L22602-L22603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22602-L22603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22602-L22603) · [Before (L22602-L22603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22602-L22603)

```diff
-   gM = new RegExp(`^(\\s*\\(\\s*(?:(?:avg\\.?|average)(?:\\s+time)?|about|around|at|~)?\\s*)(${uM})\\s*(?:minutes?|mins?|min)\\s*(?:in|into a game|avg|average|on average)?\\s*\\)`, "i"),
-   iM = new RegExp(`(${uM})[\\s-]*(?:minutes?|mins?|min)\\s+(?:to|until)\\s+(?:reach\\s+|get\\s+)?(?:the\\s+)?[*\`]*$`, "i"),
+   bU = new RegExp(`^(\\s*\\(\\s*(?:(?:avg\\.?|average)(?:\\s+time)?|about|around|at|~)?\\s*)(${pU})\\s*(?:minutes?|mins?|min)\\s*(?:in|into a game|avg|average|on average)?\\s*\\)`, "i"),
+   SU = new RegExp(`(${pU})[\\s-]*(?:minutes?|mins?|min)\\s+(?:to|until)\\s+(?:reach\\s+|get\\s+)?(?:the\\s+)?[*\`]*$`, "i"),
```

#### 2002. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22609` → after: `L22609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22609) · [Before (L22609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22609)

```diff
-   sM = new RegExp(`(${uM})[\\s-]*(?:minutes?|mins?|min)\\b(?:\\s+(?:gap|wait))?\\s+(?:between|from)\\s+$`, "i"),
+   yU = new RegExp(`(${pU})[\\s-]*(?:minutes?|mins?|min)\\b(?:\\s+(?:gap|wait))?\\s+(?:between|from)\\s+$`, "i"),
```

#### 2003. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22611` → after: `L22611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22611) · [Before (L22611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22611)

```diff
-   mM = new RegExp(`^\\s*\\(?\\s*(?:currently|now|is|takes?|took|was|from the current)?\\s*(?:a median of|about|around|roughly)?\\s*(${uM})[\\s-]*(?:minutes?|mins?|min)\\b`, "i");
+   TU = new RegExp(`^\\s*\\(?\\s*(?:currently|now|is|takes?|took|was|from the current)?\\s*(?:a median of|about|around|roughly)?\\s*(${pU})[\\s-]*(?:minutes?|mins?|min)\\b`, "i");
```

#### 2004. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22624` → after: `L22624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22624) · [Before (L22624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22624)

```diff
-       Hb = 1 === (null === Yb || void 0 === Yb ? void 0 : Yb.events.length) ? Yb.events[0] : null !== Sb && null !== ab ? `${ab[1]}: ${Sb[1]}` : null;
+       od = 1 === (null === gd || void 0 === gd ? void 0 : gd.events.length) ? gd.events[0] : null !== Cd && null !== Kd ? `${Kd[1]}: ${Cd[1]}` : null;
```

#### 2005. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22626` → after: `L22626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22626) · [Before (L22626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22626)

```diff
-     const wb = null !== (Bb = null === Yb || void 0 === Yb ? void 0 : Yb.end) && void 0 !== Bb ? Bb : Lb + Sb[0].length,
+     const ld = null !== (pd = null === gd || void 0 === gd ? void 0 : gd.end) && void 0 !== pd ? pd : Zd + Cd[0].length,
```

#### 2006. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22658` → after: `L22658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22658) · [Before (L22658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22658)

```diff
- const PM = new RegExp(`^[^.,;:!?()\\d]{0,40}?\\b(${uM})[\\s-]*(?:minutes?|mins?|min)\\s+later\\b`, "i");
+ const cU = new RegExp(`^[^.,;:!?()\\d]{0,40}?\\b(${pU})[\\s-]*(?:minutes?|mins?|min)\\s+later\\b`, "i");
```

#### 2007. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22693` → after: `L22693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22693) · [Before (L22693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22693)

```diff
-     Lb = null === Ub || ub.isOrdered ? Ub : Math.abs(Ub);
+     Zd = null === Pd || Jd.isOrdered ? Pd : Math.abs(Pd);
```

#### 2008. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22695` → after: `L22695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22695) · [Before (L22695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22695)

```diff
-     step: null !== (hb = null === Bb || void 0 === Bb ? void 0 : Bb.minutes) && void 0 !== hb ? hb : null,
+     step: null !== (kd = null === pd || void 0 === pd ? void 0 : pd.minutes) && void 0 !== kd ? kd : null,
```

#### 2009. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22715-L22716` → after: `L22715-L22716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22715-L22716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22715-L22716) · [Before (L22715-L22716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22715-L22716)

```diff
-     const Zb = Number(null !== (Bb = null !== (Ob = wb[1]) && void 0 !== Ob ? Ob : wb[3]) && void 0 !== Bb ? Bb : 0),
-       Xb = Number(null !== (Gb = null !== (Ub = wb[2]) && void 0 !== Ub ? Ub : wb[4]) && void 0 !== Gb ? Gb : 1),
+     const Qd = Number(null !== (pd = null !== (Nd = ld[1]) && void 0 !== Nd ? Nd : ld[3]) && void 0 !== pd ? pd : 0),
+       Ld = Number(null !== (Wd = null !== (Pd = ld[2]) && void 0 !== Pd ? Pd : ld[4]) && void 0 !== Wd ? Wd : 1),
```

#### 2010. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22739-L22740` → after: `L22739-L22740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22739-L22740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22739-L22740) · [Before (L22739-L22740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22739-L22740)

```diff
-             Ob = null !== (Bb = hb.get(bb)) && void 0 !== Bb ? Bb : [];
-           hb.set(bb, Ob.includes(Ub) ? Ob : [...Ob, Ub])
+             Nd = null !== (pd = kd.get(dd)) && void 0 !== pd ? pd : [];
+           kd.set(dd, Nd.includes(Pd) ? Nd : [...Nd, Pd])
```

#### 2011. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22746` → after: `L22746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22746) · [Before (L22746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22746)

```diff
-         for (const ub of (0, wU.f)(bb, new RegExp(pM(Ub), "gi"), (0, wU.j)("\\w`"))) {
+         for (const Jd of (0, OP.f)(dd, new RegExp(RU(Pd), "gi"), (0, OP.k)("\\w`"))) {
```

#### 2012. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22764` → after: `L22764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22764) · [Before (L22764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22764)

```diff
-     const Lb = null !== hb && void 0 !== hb ? hb : Ob;
+     const Zd = null !== kd && void 0 !== kd ? kd : Nd;
```

#### 2013. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22783` → after: `L22783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22783) · [Before (L22783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22783)

```diff
-           Lb = new RegExp(`^${dM}`, "i").exec(Ub)[0],
+           Zd = new RegExp(`^${sU}`, "i").exec(Pd)[0],
```

#### 2014. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22797` → after: `L22797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22797) · [Before (L22797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22797)

```diff
-         const Sb = (0, wU.f)(bb.slice(0, ub.start), iM, (0, wU.j)("\\w."))[0];
+         const Cd = (0, OP.f)(dd.slice(0, Jd.start), SU, (0, OP.k)("\\w."))[0];
```

#### 2015. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22813` → after: `L22813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22813) · [Before (L22813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22813)

```diff
-           Zb = Hb || wb ? new RegExp(`^${CM}*`).exec(Ub.slice(ab.length))[0] : null,
+           Qd = od || ld ? new RegExp(`^${BU}*`).exec(Pd.slice(Kd.length))[0] : null,
```

#### 2016. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22816` → after: `L22816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22816) · [Before (L22816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22816)

```diff
-         const pb = null !== (Bb = Xb[1]) && void 0 !== Bb ? Bb : Xb[2],
+         const Od = null !== (pd = Ld[1]) && void 0 !== pd ? pd : Ld[2],
```

#### 2017. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22819` → after: `L22819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22819) · [Before (L22819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22819)

```diff
-           lb = null !== (Ob = null === (Gb = zM.exec(bb.slice(ob + Xb[0].length))) || void 0 === Gb ? void 0 : Gb[0]) && void 0 !== Ob ? Ob : "";
+           Id = null !== (Nd = null === (Wd = mU.exec(dd.slice(ed + Ld[0].length))) || void 0 === Wd ? void 0 : Wd[0]) && void 0 !== Nd ? Nd : "";
```

#### 2018. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22843` → after: `L22843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22843) · [Before (L22843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22843)

```diff
-       [ab] = (0, HU.N)(bb, Yb.start, Yb.end),
+       [Kd] = (0, LP.M)(dd, gd.start, gd.end),
```

#### 2019. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22874` → after: `L22874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22874) · [Before (L22874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22874)

```diff
-     Ob = null !== (ub = null === (hb = /^[a-z_]+/i.exec(Bb)) || void 0 === hb ? void 0 : hb[0].toLowerCase()) && void 0 !== ub ? ub : "";
+     Nd = null !== (Jd = null === (kd = /^[a-z_]+/i.exec(pd)) || void 0 === kd ? void 0 : kd[0].toLowerCase()) && void 0 !== Jd ? Jd : "";
```

#### 2020. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22879` → after: `L22879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22879) · [Before (L22879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22879)

```diff
-   return (0, wU.f)(bb, cM, (0, wU.j)("\\w.,:/-")).map((bb => Number(bb[1].replace(/,/g, ""))))
+   return (0, OP.f)(dd, AU, (0, OP.k)("\\w.,:/-")).map((dd => Number(dd[1].replace(/,/g, ""))))
```

#### 2021. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22887` → after: `L22887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22887) · [Before (L22887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22887)

```diff
-   for (const Ob of (0, wU.f)(bb, Lm, wU.p)) {
+   for (const Nd of (0, OP.f)(dd, Cy, OP.q)) {
```

#### 2022. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22906` → after: `L22906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22906) · [Before (L22906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22906)

```diff
-   for (const pb of (0, wU.f)(bb, am, wU.p)) {
+   for (const Od of (0, OP.f)(dd, ly, OP.q)) {
```

#### 2023. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22908` → after: `L22908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22908) · [Before (L22908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22908)

```diff
-     const ub = Number(`${pb[1].replace(/,/g,"")}${null!==(wb=pb[2])&&void 0!==wb?wb:""}`);
+     const Jd = Number(`${Od[1].replace(/,/g,"")}${null!==(ld=Od[2])&&void 0!==ld?ld:""}`);
```

#### 2024. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22912` → after: `L22912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22912) · [Before (L22912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22912)

```diff
-         Bb = null !== (Zb = Hb.get(ub)) && void 0 !== Zb ? Zb : new Set;
+         pd = null !== (Qd = od.get(Jd)) && void 0 !== Qd ? Qd : new Set;
```

#### 2025. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22924` → after: `L22924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22924) · [Before (L22924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22924)

```diff
-         Zm(Sb.has(Ob) ? ub : Lb ? hb : Bb, wm(bb))
+         Oy(Cd.has(Nd) ? Jd : Zd ? kd : pd, Ly(dd))
```

#### 2026. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22931` → after: `L22931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22931) · [Before (L22931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22931)

```diff
-     for (const Ob of (0, wU.z)(pb, /\s+(?=[A-Z])/g, (0, wU.r)(".;"))) QM.test(Ob) ? Hb = !0 : RM.test(Ob) && (Hb = !1, Lb = !0), Hb ? (Zm(ub, wm(Ob.replace(bm, " "))), Zm(hb, [...Ob.matchAll(bm)].flatMap((bb => wm(bb[0]))))) : (Zm(ub, Om(Ob).flatMap((bb => wm(bb[1])))), Zm(Lb ? h … [truncated]
+     for (const Nd of (0, OP.u)(Od, /\s+(?=[A-Z])/g, (0, OP.r)(".;"))) dy.test(Nd) ? od = !0 : Jy.test(Nd) && (od = !1, Zd = !0), od ? (Oy(Jd, Ly(Nd.replace(ky, " "))), Oy(kd, [...Nd.matchAll(ky)].flatMap((dd => Ly(dd[0]))))) : (Oy(Jd, Py(Nd).flatMap((dd => Ly(dd[1])))), Oy(Zd ? k … [truncated]
```

#### 2027. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22977` → after: `L22977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22977) · [Before (L22977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22977)

```diff
-     ab = 1 === (null !== (Gb = bb.match(/\u2192/g)) && void 0 !== Gb ? Gb : []).length ? Dm.exec(bb) : null,
+     Kd = 1 === (null !== (Wd = dd.match(/\u2192/g)) && void 0 !== Wd ? Wd : []).length ? Fy.exec(dd) : null,
```

#### 2028. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22980` → after: `L22980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22980) · [Before (L22980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22980)

```diff
-       return null !== (bb = null !== (ub = null === (hb = nm.exec(Sb)) || void 0 === hb || null === (Bb = hb[1]) || void 0 === Bb ? void 0 : Bb.trim()) && void 0 !== ub ? ub : null === ab || void 0 === ab || null === (Ob = ab[1]) || void 0 === Ob ? void 0 : Ob.trim()) && void 0 ! … [truncated]
+       return null !== (dd = null !== (Jd = null === (kd = My.exec(Cd)) || void 0 === kd || null === (pd = kd[1]) || void 0 === pd ? void 0 : pd.trim()) && void 0 !== Jd ? Jd : null === Kd || void 0 === Kd || null === (Nd = Kd[1]) || void 0 === Nd ? void 0 : Nd.trim()) && void 0 ! … [truncated]
```

#### 2029. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L22993` → after: `L22993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR22993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L22993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L22993) · [Before (L22993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L22993)

```diff
-     const bb = null !== (Zb = null === (Xb = [...Ub.matchAll(Km)].at(-1)) || void 0 === Xb || null === (pb = Xb[1]) || void 0 === pb ? void 0 : pb.trim()) && void 0 !== Zb ? Zb : null;
+     const dd = null !== (Qd = null === (Ld = [...Pd.matchAll(xy)].at(-1)) || void 0 === Ld || null === (Od = Ld[1]) || void 0 === Od ? void 0 : Od.trim()) && void 0 !== Qd ? Qd : null;
```

#### 2030. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23008` → after: `L23008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23008) · [Before (L23008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23008)

```diff
-       from: null !== (Ab = null === ab || void 0 === ab || null === (lb = ab[1]) || void 0 === lb ? void 0 : lb.trim()) && void 0 !== Ab ? Ab : null,
+       from: null !== (Rd = null === Kd || void 0 === Kd || null === (Id = Kd[1]) || void 0 === Id ? void 0 : Id.trim()) && void 0 !== Rd ? Rd : null,
```

#### 2031. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23025` → after: `L23025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23025) · [Before (L23025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23025)

```diff
-     const bb = null !== (Cb = null !== (db = null === (rb = Wb[2]) || void 0 === rb ? void 0 : rb.trim()) && void 0 !== db ? db : null === (jb = [...Ub.matchAll(Km)].at(-1)) || void 0 === jb || null === (nb = jb[1]) || void 0 === nb ? void 0 : nb.trim()) && void 0 !== Cb ? Cb : n … [truncated]
+     const dd = null !== (xd = null !== (qd = null === (Bd = vd[2]) || void 0 === Bd ? void 0 : Bd.trim()) && void 0 !== qd ? qd : null === (sd = [...Pd.matchAll(xy)].at(-1)) || void 0 === sd || null === (ad = sd[1]) || void 0 === ad ? void 0 : ad.trim()) && void 0 !== xd ? xd : n … [truncated]
```

#### 2032. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23063` → after: `L23063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23063) · [Before (L23063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23063)

```diff
-       for (const bb of (0, wU.f)(Yb, om, wU.p)) {
+       for (const dd of (0, OP.f)(gd, Iy, OP.q)) {
```

#### 2033. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23065` → after: `L23065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23065) · [Before (L23065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23065)

```diff
-         const Gb = Yb.startsWith("|") && null !== (Ub = Ob[Yb.slice(0, bb.index).split("|").length - 1]) && void 0 !== Ub ? Ub : "",
+         const Wd = gd.startsWith("|") && null !== (Pd = Nd[gd.slice(0, dd.index).split("|").length - 1]) && void 0 !== Pd ? Pd : "",
```

#### 2034. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23068` → after: `L23068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23068) · [Before (L23068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23068)

```diff
-         if (ub.set(ab, [...null !== (Lb = ub.get(ab)) && void 0 !== Lb ? Lb : [], Sb]), "players" === Sb.noun && null !== Sb.step)
+         if (Jd.set(Kd, [...null !== (Zd = Jd.get(Kd)) && void 0 !== Zd ? Zd : [], Cd]), "players" === Cd.noun && null !== Cd.step)
```

#### 2035. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23084-L23086` → after: `L23084-L23086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23084-L23086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23084-L23086) · [Before (L23084-L23086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23084-L23086)

```diff
-   Im = new RegExp(`^(\\s+of\\s+)(${mm})(players|people)\\b(?!['\u2019])`, "i"),
-   Pm = new RegExp(`^(\\s+of\\s+)(${mm})(sessions|plays)\\b(?!['\u2019])`, "i"),
-   qm = new RegExp(`^(\\s+)(${mm})(players|people|kids)\\b(?!['\u2019])`, "i"),
+   Ty = new RegExp(`^(\\s+of\\s+)(${Dy})(players|people)\\b(?!['\u2019])`, "i"),
+   Ey = new RegExp(`^(\\s+of\\s+)(${Dy})(sessions|plays)\\b(?!['\u2019])`, "i"),
+   cy = new RegExp(`^(\\s+)(${Dy})(players|people|kids)\\b(?!['\u2019])`, "i"),
```

#### 2036. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23092-L23094` → after: `L23092-L23094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23092-L23094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23092-L23094) · [Before (L23092-L23094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23092-L23094)

```diff
-     [new RegExp(`^(\\s+)(?:who\\s+)?(?:stay|play)${Em}`, "i"), "last", "stayed"],
-     [new RegExp(`^(\\s+)(?:who\\s+)?(?:stayed|played)${Em}`, "i"), "lasted", "stayed"],
-     [new RegExp(`^(\\s+)(?:staying|playing|continuing to play)${Em}`, "i"), "lasting", "stayed"],
+     [new RegExp(`^(\\s+)(?:who\\s+)?(?:stay|play)${hy}`, "i"), "last", "stayed"],
+     [new RegExp(`^(\\s+)(?:who\\s+)?(?:stayed|played)${hy}`, "i"), "lasted", "stayed"],
+     [new RegExp(`^(\\s+)(?:staying|playing|continuing to play)${hy}`, "i"), "lasting", "stayed"],
```

#### 2037. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23109-L23123` → after: `L23109-L23123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23109-L23123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23109-L23123) · [Before (L23109-L23123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23109-L23123)

```diff
-   return `${bb.split(/[\s:]+/).filter((bb=>""!==bb)).map(HU.i).join("[`:\\s]+")}(?![\\w])`}function Rm(bb,ub,hb){return(0,wU.f)(bb,new RegExp(Qm(ub),hb),(0,wU.j)("\\w"))}function bI(bb,ub){return Rm(bb,ub,"i").length>0}function uI(bb,ub){const hb=Rm(ub,bb,"gi"),Bb=hb.find((bb=>!( … [truncated]
-   "===ub[bb.index-1]&&"
-   `"===ub[bb.index+bb[0].length])(bb)));if(void 0!==Bb)return Bb[0];if(void 0!==hb[0])return`\
-   `${hb[0][0]}\``;
-   const Ob = /^(.+?):\s*(\d+)$/.exec(bb);
-   return null === Ob ? `\`${bb}\`` : `${Ob[1]} ${Ob[2]}`
- }
- 
- function hI(bb, ub) {
-   var hb, Bb;
-   const Ob = 10 ** (null !== (hb = null === (Bb = ub.split(".")[1]) || void 0 === Bb ? void 0 : Bb.length) && void 0 !== hb ? hb : 0),
-     Gb = Math.round(Number(ub) * Ob);
-   return [...bb.shares].flatMap((bb => {
-     let [ub, hb] = bb;
-     return Math.round(ub * Ob) === Gb ? hb : []
+   return `${dd.split(/[\s:]+/).filter((dd=>""!==dd)).map(LP.h).join("[`:\\s]+")}(?![\\w])`}function dD(dd,Jd,kd){return(0,OP.f)(dd,new RegExp(Ay(Jd),kd),(0,OP.k)("\\w"))}function JD(dd,Jd){return dD(dd,Jd,"i").length>0}function kD(dd,Jd){const kd=dD(Jd,dd,"gi"),pd=kd.find((dd=>!( … [truncated]
+   "===Jd[dd.index-1]&&"
+   `"===Jd[dd.index+dd[0].length])(dd)));if(void 0!==pd)return pd[0];if(void 0!==kd[0])return`\
+   `${kd[0][0]}\``;
+   const Nd = /^(.+?):\s*(\d+)$/.exec(dd);
+   return null === Nd ? `\`${dd}\`` : `${Nd[1]} ${Nd[2]}`
+ }
+ 
+ function pD(dd, Jd) {
+   var kd, pd;
+   const Nd = 10 ** (null !== (kd = null === (pd = Jd.split(".")[1]) || void 0 === pd ? void 0 : pd.length) && void 0 !== kd ? kd : 0),
+     Wd = Math.round(Number(Jd) * Nd);
+   return [...dd.shares].flatMap((dd => {
+     let [Jd, kd] = dd;
+     return Math.round(Jd * Nd) === Wd ? kd : []
```

#### 2038. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23127-L23129` → after: `L23127-L23129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23127-L23129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23127-L23129) · [Before (L23127-L23129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23127-L23129)

```diff
- function BI(bb) {
-   const ub = new Set(bb.map((bb => bb.noun)));
-   return 1 === ub.size ? [...ub][0] : null
+ function ND(dd) {
+   const Jd = new Set(dd.map((dd => dd.noun)));
+   return 1 === Jd.size ? [...Jd][0] : null
```

#### 2039. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23132-L23133` → after: `L23132-L23133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23132-L23133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23132-L23133) · [Before (L23132-L23133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23132-L23133)

```diff
- function OI(bb) {
-   return bb.toLowerCase().replace(/[`:]/g, " ").replace(/\s+/g, " ").trim()
+ function WD(dd) {
+   return dd.toLowerCase().replace(/[`:]/g, " ").replace(/\s+/g, " ").trim()
```

#### 2040. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23136-L23143` → after: `L23136-L23143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23136-L23143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23136-L23143) · [Before (L23136-L23143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23136-L23143)

```diff
- function GI(bb) {
-   var ub;
-   const hb = bb.flatMap((bb => "players" === bb.noun && null !== bb.step ? [bb.step] : [])),
-     Bb = hb[0];
-   if (void 0 === Bb || hb.length < bb.length) return null;
-   const Ob = bb => new Set(hb.flatMap((ub => {
-       const hb = bb(ub);
-       return null === hb ? [] : [OI(hb)]
+ function PD(dd) {
+   var Jd;
+   const kd = dd.flatMap((dd => "players" === dd.noun && null !== dd.step ? [dd.step] : [])),
+     pd = kd[0];
+   if (void 0 === pd || kd.length < dd.length) return null;
+   const Nd = dd => new Set(kd.flatMap((Jd => {
+       const kd = dd(Jd);
+       return null === kd ? [] : [WD(kd)]
```

#### 2041. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23145-L23149` → after: `L23145-L23149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23145-L23149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23145-L23149) · [Before (L23145-L23149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23145-L23149)

```diff
-     Gb = null === (ub = hb.find((bb => null !== bb.from))) || void 0 === ub ? void 0 : ub.from;
-   return hb.every((bb => bb.isLost === Bb.isLost && null !== bb.to)) && 1 === Ob((bb => bb.to)).size && Ob((bb => bb.from)).size <= 1 ? {
-     from: null !== Gb && void 0 !== Gb ? Gb : null,
-     to: Bb.to,
-     isLost: Bb.isLost
+     Wd = null === (Jd = kd.find((dd => null !== dd.from))) || void 0 === Jd ? void 0 : Jd.from;
+   return kd.every((dd => dd.isLost === pd.isLost && null !== dd.to)) && 1 === Nd((dd => dd.to)).size && Nd((dd => dd.from)).size <= 1 ? {
+     from: null !== Wd && void 0 !== Wd ? Wd : null,
+     to: pd.to,
+     isLost: pd.isLost
```

#### 2042. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23153-L23157` → after: `L23153-L23157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23153-L23157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23153-L23157) · [Before (L23153-L23157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23153-L23157)

```diff
- function UI(bb, ub) {
-   const hb = bb.filter((bb => "players" === bb.noun && null !== bb.step && [bb.step.from, bb.step.to].some((bb => null !== bb && bI(ub, bb)))));
-   if (hb.length > 0) return bb.filter((bb => "players" === bb.noun && null !== bb.step && hb.some((ub => {
-     var hb, Bb;
-     return "players" === ub.noun && OI(null !== (hb = ub.step.to) && void 0 !== hb ? hb : "") === OI(null !== (Bb = bb.step.to) && void 0 !== Bb ? Bb : "")
+ function ZD(dd, Jd) {
+   const kd = dd.filter((dd => "players" === dd.noun && null !== dd.step && [dd.step.from, dd.step.to].some((dd => null !== dd && JD(Jd, dd)))));
+   if (kd.length > 0) return dd.filter((dd => "players" === dd.noun && null !== dd.step && kd.some((Jd => {
+     var kd, pd;
+     return "players" === Jd.noun && WD(null !== (kd = Jd.step.to) && void 0 !== kd ? kd : "") === WD(null !== (pd = dd.step.to) && void 0 !== pd ? pd : "")
```

#### 2043. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23159-L23161` → after: `L23159-L23161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23159-L23161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23159-L23161) · [Before (L23159-L23161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23159-L23161)

```diff
-   if (/\b(?:minutes?|min|seconds?)\b/i.test(ub)) {
-     const ub = bb.filter((bb => "sessions" === bb.noun));
-     return ub.length > 0 ? ub : bb
+   if (/\b(?:minutes?|min|seconds?)\b/i.test(Jd)) {
+     const Jd = dd.filter((dd => "sessions" === dd.noun));
+     return Jd.length > 0 ? Jd : dd
```

#### 2044. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23163` → after: `L23163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23163) · [Before (L23163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23163)

```diff
-   return bb
+   return dd
```

#### 2045. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23166-L23167` → after: `L23166-L23167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23166-L23167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23166-L23167) · [Before (L23166-L23167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23166-L23167)

```diff
- function LI(bb) {
-   return [...bb.matchAll(/`[^`\n]+`|\[\[[^\]\n]*\]\]/g)].map((bb => [bb.index, bb.index + bb[0].length]))
+ function gD(dd) {
+   return [...dd.matchAll(/`[^`\n]+`|\[\[[^\]\n]*\]\]/g)].map((dd => [dd.index, dd.index + dd[0].length]))
```

#### 2046. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23170-L23173` → after: `L23170-L23173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23170-L23173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23170-L23173) · [Before (L23170-L23173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23170-L23173)

```diff
- function YI(bb, ub, hb) {
-   return hb.every((hb => {
-     let [Bb, Ob] = hb;
-     return Ob <= bb || Bb >= ub || bb <= Bb && Ob <= ub
+ function CD(dd, Jd, kd) {
+   return kd.every((kd => {
+     let [pd, Nd] = kd;
+     return Nd <= dd || pd >= Jd || dd <= pd && Nd <= Jd
```

#### 2047. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23177-L23178` → after: `L23177-L23178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23177-L23178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23177-L23178) · [Before (L23177-L23178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23177-L23178)

```diff
- function SI(bb, ub) {
-   return /^[A-Z]/.test(ub) ? bb.charAt(0).toUpperCase() + bb.slice(1) : bb
+ function KD(dd, Jd) {
+   return /^[A-Z]/.test(Jd) ? dd.charAt(0).toUpperCase() + dd.slice(1) : dd
```

#### 2048. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23181-L23188` → after: `L23181-L23188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23181-L23188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23181-L23188) · [Before (L23181-L23188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23181-L23188)

```diff
- function aI(bb, ub) {
-   let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-   const Bb = LI(bb);
-   return (0, wU.f)(bb, hb ? Mm : sm, wU.p).flatMap((Ob => {
-     const Gb = Ob.index + Ob[0].length;
-     if (!Bb.every((bb => {
-         let [ub, hb] = bb;
-         return hb <= Ob.index || ub >= Gb
+ function oD(dd, Jd) {
+   let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+   const pd = gD(dd);
+   return (0, OP.f)(dd, kd ? yy : Uy, OP.q).flatMap((Nd => {
+     const Wd = Nd.index + Nd[0].length;
+     if (!pd.every((dd => {
+         let [Jd, kd] = dd;
+         return kd <= Nd.index || Jd >= Wd
```

#### 2049. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23190-L23193` → after: `L23190-L23193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23190-L23193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23190-L23193) · [Before (L23190-L23193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23190-L23193)

```diff
-     const [Ub, Lb] = (0, HU.N)(bb, Ob.index), Yb = bb.slice(Ub, Lb), Sb = /[,;:](?=\s)|[.!?](?!\d)/.exec(bb.slice(Gb, Lb)), ab = bb.slice(Math.max(Ub, Ob.index - 60), null === Sb ? Lb : Gb + Sb.index), Hb = hb ? function(bb, ub, hb) {
-       return "100" === hb ? hI(bb, ub) : [...bb.shares].flatMap((bb => {
-         let [hb, Bb] = bb;
-         return Math.round(hb / 10) === Number(ub) ? Bb : []
+     const [Pd, Zd] = (0, LP.M)(dd, Nd.index), gd = dd.slice(Pd, Zd), Cd = /[,;:](?=\s)|[.!?](?!\d)/.exec(dd.slice(Wd, Zd)), Kd = dd.slice(Math.max(Pd, Nd.index - 60), null === Cd ? Zd : Wd + Cd.index), od = kd ? function(dd, Jd, kd) {
+       return "100" === kd ? pD(dd, Jd) : [...dd.shares].flatMap((dd => {
+         let [kd, pd] = dd;
+         return Math.round(kd / 10) === Number(Jd) ? pd : []
```

#### 2050. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23195` → after: `L23195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23195) · [Before (L23195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23195)

```diff
-     }(ub.facts, Ob[1], Ob[2]) : hI(ub.facts, Ob[1]);
+     }(Jd.facts, Nd[1], Nd[2]) : pD(Jd.facts, Nd[1]);
```

#### 2051. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23197-L23202` → after: `L23197-L23202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23197-L23202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23197-L23202) · [Before (L23197-L23202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23197-L23202)

```diff
-       start: Ob.index,
-       end: Gb,
-       facts: UI(Hb, Yb),
-       sentence: Yb,
-       before: bb.slice(Ub, Ob.index),
-       clause: ab
+       start: Nd.index,
+       end: Wd,
+       facts: ZD(od, gd),
+       sentence: gd,
+       before: dd.slice(Pd, Nd.index),
+       clause: Kd
```

#### 2052. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23207-L23208` → after: `L23207-L23208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23207-L23208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23207-L23208) · [Before (L23207-L23208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23207-L23208)

```diff
- function HI(bb, ub, hb, Bb) {
-   var Ob, Gb, Ub;
+ function lD(dd, Jd, kd, pd) {
+   var Nd, Wd, Pd;
```

#### 2053. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23210-L23227` → after: `L23210-L23227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23210-L23227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23210-L23227) · [Before (L23210-L23227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23210-L23227)

```diff
-     start: Lb,
-     end: Yb,
-     facts: Sb,
-     before: ab,
-     clause: Hb
-   } = ub;
-   const wb = BI(Sb),
-     Zb = bb.slice(Yb),
-     Xb = "sessions" === wb ? (Bb ? qm : Im).exec(Zb) : "players" !== wb || Bb ? null : Pm.exec(Zb),
-     pb = null === Xb && "sessions" === wb && /^(?:players|people|kids)$/i.test(null !== (Ob = null === (Gb = Vm.exec(ab)) || void 0 === Gb ? void 0 : Gb[1]) && void 0 !== Ob ? Ob : "");
-   if (null === Xb && !pb || null === wb) return [];
-   const ob = null !== Xb && void 0 !== Xb ? Xb : ["", Bb ? " " : " of ", ""],
-     Ab = /\ball\b/i.test(ob[2]) ? "all " : "",
-     lb = `${ob[1]}${Ab}${"sessions"===wb?hb.sessionsWord:wb}`;
-   if ("players" === wb) return [{
-     start: Yb,
- ... (2 more removed lines; see GitHub link above)
+     start: Zd,
+     end: gd,
+     facts: Cd,
+     before: Kd,
+     clause: od
+   } = Jd;
+   const ld = ND(Cd),
+     Qd = dd.slice(gd),
+     Ld = "sessions" === ld ? (pd ? cy : Ty).exec(Qd) : "players" !== ld || pd ? null : Ey.exec(Qd),
+     Od = null === Ld && "sessions" === ld && /^(?:players|people|kids)$/i.test(null !== (Nd = null === (Wd = uy.exec(Kd)) || void 0 === Wd ? void 0 : Wd[1]) && void 0 !== Nd ? Nd : "");
+   if (null === Ld && !Od || null === ld) return [];
+   const ed = null !== Ld && void 0 !== Ld ? Ld : ["", pd ? " " : " of ", ""],
+     Rd = /\ball\b/i.test(ed[2]) ? "all " : "",
+     Id = `${ed[1]}${Rd}${"sessions"===ld?kd.sessionsWord:ld}`;
+   if ("players" === ld) return [{
+     start: gd,
+ ... (2 more added lines; see GitHub link above)
```

#### 2054. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23230-L23234` → after: `L23230-L23234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23230-L23234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23230-L23234) · [Before (L23230-L23234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23230-L23234)

```diff
-   const Kb = cm.test(Hb) || hb.facts.stepNames.some((bb => bI(Hb, bb))) || /^\s*\([^)]*\bplayers\b/i.test(Zb.slice(ob[0].length)),
-     Wb = Zb.slice(ob[0].length),
-     Cb = ym.find((bb => {
-       let [ub] = bb;
-       return ub.test(Wb)
+   const Gd = wy.test(od) || kd.facts.stepNames.some((dd => JD(od, dd))) || /^\s*\([^)]*\bplayers\b/i.test(Qd.slice(ed[0].length)),
+     vd = Qd.slice(ed[0].length),
+     xd = ry.find((dd => {
+       let [Jd] = dd;
+       return Jd.test(vd)
```

#### 2055. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23236-L23245` → after: `L23236-L23245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23236-L23245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23236-L23245) · [Before (L23236-L23245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23236-L23245)

```diff
-   if (Kb || void 0 === Cb && (pb || /^\s+who\b/i.test(Wb))) return [];
-   const db = bb.slice(0, Lb),
-     rb = null !== (Ub = null === Cb || void 0 === Cb ? void 0 : Cb[2]) && void 0 !== Ub ? Ub : Fm.test(db) ? "stayed" : fm.test(db) ? "left" : null;
-   if (Bb && null === rb) return [];
-   const jb = Sb.map((bb => "sessions" === bb.noun ? bb.side : null));
-   if (!(null === rb || jb.includes(rb) && jb.every((bb => null === bb || bb === rb)))) return [];
-   if (void 0 === Cb) return [{
-     start: Yb,
-     end: Yb + ob[0].length,
-     text: lb,
+   if (Gd || void 0 === xd && (Od || /^\s+who\b/i.test(vd))) return [];
+   const qd = dd.slice(0, Zd),
+     Bd = null !== (Pd = null === xd || void 0 === xd ? void 0 : xd[2]) && void 0 !== Pd ? Pd : ty.test(qd) ? "stayed" : Vy.test(qd) ? "left" : null;
+   if (pd && null === Bd) return [];
+   const sd = Cd.map((dd => "sessions" === dd.noun ? dd.side : null));
+   if (!(null === Bd || sd.includes(Bd) && sd.every((dd => null === dd || dd === Bd)))) return [];
+   if (void 0 === xd) return [{
+     start: gd,
+     end: gd + ed[0].length,
+     text: Id,
```

#### 2056. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23248` → after: `L23248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23248) · [Before (L23248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23248)

```diff
-   const [nb, Db] = Cb, xb = nb.exec(Wb);
+   const [ad, Md] = xd, Fd = ad.exec(vd);
```

#### 2057. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23250-L23252` → after: `L23250-L23252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23250-L23252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23250-L23252) · [Before (L23250-L23252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23250-L23252)

```diff
-     start: Yb,
-     end: Yb + ob[0].length + xb[0].length,
-     text: `${lb}${xb[1]}${/\bwho\b/i.test(xb[0])?"that ":""}${Db}`,
+     start: gd,
+     end: gd + ed[0].length + Fd[0].length,
+     text: `${Id}${Fd[1]}${/\bwho\b/i.test(Fd[0])?"that ":""}${Md}`,
```

#### 2058. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23257-L23260` → after: `L23257-L23260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23257-L23260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23257-L23260) · [Before (L23257-L23260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23257-L23260)

```diff
- function wI(bb) {
-   var ub;
-   const hb = /^(\d[\d,]*)(\.\d+)?([kK])?$/.exec(bb);
-   return null === hb || void 0 !== hb[2] && void 0 === hb[3] ? null : Math.round(Number(`${hb[1].replace(/,/g,"")}${null!==(ub=hb[2])&&void 0!==ub?ub:""}`) * (void 0 === hb[3] ? 1 : 1e3))
+ function QD(dd) {
+   var Jd;
+   const kd = /^(\d[\d,]*)(\.\d+)?([kK])?$/.exec(dd);
+   return null === kd || void 0 !== kd[2] && void 0 === kd[3] ? null : Math.round(Number(`${kd[1].replace(/,/g,"")}${null!==(Jd=kd[2])&&void 0!==Jd?Jd:""}`) * (void 0 === kd[3] ? 1 : 1e3))
```

#### 2059. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23262-L23267` → after: `L23262-L23267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23262-L23267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23262-L23267) · [Before (L23262-L23267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23262-L23267)

```diff
- const ZI = /\b(?:all[- ]time|ever|total|in total|since logging|altogether|so far)\b/i,
-   XI = /\b(?:(?:this|a|per|past|last|that|each|every)\s+(?:week|7 days)|weekly)\b/i,
-   pI = /\b(?:(?:this|per|past|last|each|every)\s+(?:day|month|\d+\s+days?)|today|yesterday|daily|monthly)\b/i,
-   oI = /^\s*(?:seconds?|secs?|s\b|minutes?|mins?|hours?|days?|blocks?|coins?|gold|hp|damage|times|x\b|y\b|z\b)/i,
-   AI = /\b[xyz]\s*[:=]?\s*-?$/i,
-   lI = /^\s+(?:of\s+(?:your|the|all|these|those|my)\s+)?(?:[A-Za-z_]+\s+)?(?:players?|people|kids|deaths?|kills?)\b/i;
+ const LD = /\b(?:all[- ]time|ever|total|in total|since logging|altogether|so far)\b/i,
+   OD = /\b(?:(?:this|a|per|past|last|that|each|every)\s+(?:week|7 days)|weekly)\b/i,
+   eD = /\b(?:(?:this|per|past|last|each|every)\s+(?:day|month|\d+\s+days?)|today|yesterday|daily|monthly)\b/i,
+   RD = /^\s*(?:seconds?|secs?|s\b|minutes?|mins?|hours?|days?|blocks?|coins?|gold|hp|damage|times|x\b|y\b|z\b)/i,
+   ID = /\b[xyz]\s*[:=]?\s*-?$/i,
+   GD = /^\s+(?:of\s+(?:your|the|all|these|those|my)\s+)?(?:[A-Za-z_]+\s+)?(?:players?|people|kids|deaths?|kills?)\b/i;
```

#### 2060. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23269-L23272` → after: `L23269-L23272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23269-L23272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23269-L23272) · [Before (L23269-L23272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23269-L23272)

```diff
- function KI(bb, ub, hb) {
-   var Bb;
-   const Ob = lI.exec(bb.slice(ub)),
-     Gb = ub + (null !== (Bb = null === Ob || void 0 === Ob ? void 0 : Ob[0].length) && void 0 !== Bb ? Bb : 0);
+ function vD(dd, Jd, kd) {
+   var pd;
+   const Nd = GD.exec(dd.slice(Jd)),
+     Wd = Jd + (null !== (pd = null === Nd || void 0 === Nd ? void 0 : Nd[0].length) && void 0 !== pd ? pd : 0);
```

#### 2061. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23274-L23276` → after: `L23274-L23276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23274-L23276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23274-L23276) · [Before (L23274-L23276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23274-L23276)

```diff
-     start: Gb,
-     end: Gb,
-     text: ")" === bb[Gb] ? `, ${hb}` : ` (${hb})`,
+     start: Wd,
+     end: Wd,
+     text: ")" === dd[Wd] ? `, ${kd}` : ` (${kd})`,
```

#### 2062. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23280-L23281` → after: `L23280-L23281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23280-L23281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23280-L23281) · [Before (L23280-L23281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23280-L23281)

```diff
- const WI = /(?:->|\u2192|=>|\bto|\bfrom|\bby|\babout|\baround|\broughly|\bnearly|\balmost|\bover|\bunder|~)[\s*_]*$/i,
-   CI = /^[\s*_]*(?:->|\u2192|=>|more\b|extra\b|fewer\b|additional\b|less\b)/i;
+ const xD = /(?:->|\u2192|=>|\bto|\bfrom|\bby|\babout|\baround|\broughly|\bnearly|\balmost|\bover|\bunder|~)[\s*_]*$/i,
+   qD = /^[\s*_]*(?:->|\u2192|=>|more\b|extra\b|fewer\b|additional\b|less\b)/i;
```

#### 2063. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23283-L23284` → after: `L23283-L23284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23283-L23284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23283-L23284) · [Before (L23283-L23284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23283-L23284)

```diff
- function dI(bb, ub) {
-   return ub ? String(bb) : bb.toLocaleString("en-US")
+ function BD(dd, Jd) {
+   return Jd ? String(dd) : dd.toLocaleString("en-US")
```

#### 2064. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23286` → after: `L23286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23286) · [Before (L23286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23286)

```diff
- const rI = {
+ const sD = {
```

#### 2065. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23296-L23300` → after: `L23296-L23300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23296-L23300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23296-L23300) · [Before (L23296-L23300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23296-L23300)

```diff
-   jI = /\b(return|returns|returned|returning|come back|comes back|came back|coming back)(?:\s+to\s+play)?\s+((?:about|around|nearly)\s+)?$/i,
-   nI = /^(\s+)(?:returns|return visits|comebacks)(?=\s+(?:per|a|each|for each)\s+(?:player|person)\b)/i,
-   DI = /^(\s+more\s+)(?:players|people)\s+(?:come back|return)\b/i;
- const xI = [function(bb, ub) {
-   return Kv(bb, ub.goodStages).flatMap((hb => {
+   iD = /\b(return|returns|returned|returning|come back|comes back|came back|coming back)(?:\s+to\s+play)?\s+((?:about|around|nearly)\s+)?$/i,
+   aD = /^(\s+)(?:returns|return visits|comebacks)(?=\s+(?:per|a|each|for each)\s+(?:player|person)\b)/i,
+   MD = /^(\s+more\s+)(?:players|people)\s+(?:come back|return)\b/i;
+ const FD = [function(dd, Jd) {
+   return Gb(dd, Jd.goodStages).flatMap((kd => {
```

#### 2066. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23302-L23310` → after: `L23302-L23310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23302-L23310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23302-L23310) · [Before (L23302-L23310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23302-L23310)

```diff
-       start: Bb,
-       end: Ob
-     } = hb;
-     const Gb = bb.slice(Bb, Ob),
-       Ub = /^(?:many|a\s+lot\s+of|lots\s+of)\b/i.exec(Gb);
-     if (null !== Ub) return [{
-       start: Bb,
-       end: Bb + Ub[0].length,
-       text: SI("some", Gb),
+       start: pd,
+       end: Nd
+     } = kd;
+     const Wd = dd.slice(pd, Nd),
+       Pd = /^(?:many|a\s+lot\s+of|lots\s+of)\b/i.exec(Wd);
+     if (null !== Pd) return [{
+       start: pd,
+       end: pd + Pd[0].length,
+       text: KD("some", Wd),
```

#### 2067. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23313-L23321` → after: `L23313-L23321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23313-L23321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23313-L23321) · [Before (L23313-L23321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23313-L23321)

```diff
-     const Lb = /^(?:the\s+)?(?:most|majority)(\s+of)?(.*)$/is.exec(Gb);
-     if (null === Lb) return [];
-     const Yb = Lb[2],
-       Sb = /^\s*\(\s*(\d+(?:\.\d+)?)%\s*\)/.exec(bb.slice(Ob));
-     if (null !== Sb && "sessions" === BI(hI(ub.facts, Sb[1])) && function(bb, ub, hb, Bb, Ob) {
-         const Gb = bb.slice(hb),
-           Ub = ym.find((bb => {
-             let [ub] = bb;
-             return ub.test(Gb)
+     const Zd = /^(?:the\s+)?(?:most|majority)(\s+of)?(.*)$/is.exec(Wd);
+     if (null === Zd) return [];
+     const gd = Zd[2],
+       Cd = /^\s*\(\s*(\d+(?:\.\d+)?)%\s*\)/.exec(dd.slice(Nd));
+     if (null !== Cd && "sessions" === ND(pD(Jd.facts, Cd[1])) && function(dd, Jd, kd, pd, Nd) {
+         const Wd = dd.slice(kd),
+           Pd = ry.find((dd => {
+             let [Jd] = dd;
+             return Jd.test(Wd)
```

#### 2068. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23323-L23334` → after: `L23323-L23334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23323-L23334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23323-L23334) · [Before (L23323-L23334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23323-L23334)

```diff
-           Lb = /[,;:](?=\s)|[.!?](?!\d)/.exec(Gb),
-           Yb = Gb.slice(0, null === Lb ? Gb.length : Lb.index),
-           Sb = cm.test(Yb) || Ob.facts.stepNames.some((bb => bI(Yb, bb))),
-           ab = hI(Ob.facts, Bb).map((bb => "sessions" === bb.noun ? bb.side : null));
-         if (void 0 === Ub || Sb || !ab.every((bb => null === bb || bb === Ub[2]))) return !1;
-         const Hb = `${bb.slice(0,ub)}${Bb}% of players${bb.slice(hb)}`,
-           wb = aI(Hb, Ob).find((bb => bb.start === ub));
-         return void 0 !== wb && HI(Hb, wb, Ob, !1).length > 0
-       }(bb, Bb, Ob + Sb[0].length, Sb[1], ub)) return [{
-       start: Bb,
-       end: Ob + Sb[0].length,
-       text: `${Sb[1]}% of players`,
+           Zd = /[,;:](?=\s)|[.!?](?!\d)/.exec(Wd),
+           gd = Wd.slice(0, null === Zd ? Wd.length : Zd.index),
+           Cd = wy.test(gd) || Nd.facts.stepNames.some((dd => JD(gd, dd))),
+           Kd = pD(Nd.facts, pd).map((dd => "sessions" === dd.noun ? dd.side : null));
+         if (void 0 === Pd || Cd || !Kd.every((dd => null === dd || dd === Pd[2]))) return !1;
+         const od = `${dd.slice(0,Jd)}${pd}% of players${dd.slice(kd)}`,
+           ld = oD(od, Nd).find((dd => dd.start === Jd));
+         return void 0 !== ld && lD(od, ld, Nd, !1).length > 0
+       }(dd, pd, Nd + Cd[0].length, Cd[1], Jd)) return [{
+       start: pd,
+       end: Nd + Cd[0].length,
+       text: `${Cd[1]}% of players`,
```

#### 2069. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23337-L23341` → after: `L23337-L23341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23337-L23341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23337-L23341) · [Before (L23337-L23341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23337-L23341)

```diff
-     const ab = (0, wU.f)(function(bb, ub) {
-         return bb.slice(...(0, HU.N)(bb, ub))
-       }(bb, Bb), sm, wU.p).map((bb => Number(bb[1]))),
-       Hb = null === Sb ? Math.max(...ab) : Number(Sb[1]),
-       wb = /^\s+(?:your|the|all|these|those|my|them)\b/i.test(Yb);
+     const Kd = (0, OP.f)(function(dd, Jd) {
+         return dd.slice(...(0, LP.M)(dd, Jd))
+       }(dd, pd), Uy, OP.q).map((dd => Number(dd[1]))),
+       od = null === Cd ? Math.max(...Kd) : Number(Cd[1]),
+       ld = /^\s+(?:your|the|all|these|those|my|them)\b/i.test(gd);
```

#### 2070. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23343-L23345` → after: `L23343-L23345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23343-L23345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23343-L23345) · [Before (L23343-L23345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23343-L23345)

```diff
-       start: Bb,
-       end: Ob,
-       text: SI((Hb >= 45 ? "nearly half of" : Hb >= 30 ? wb ? "many of" : "many" : wb ? "some of" : "some") + Yb, Gb),
+       start: pd,
+       end: Nd,
+       text: KD((od >= 45 ? "nearly half of" : od >= 30 ? ld ? "many of" : "many" : ld ? "some of" : "some") + gd, Wd),
```

#### 2071. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23349-L23356` → after: `L23349-L23356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23349-L23356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23349-L23356) · [Before (L23349-L23356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23349-L23356)

```diff
- }, function(bb, ub) {
-   const hb = [...ub.facts.shares].flatMap((bb => {
-     let [ub, hb] = bb;
-     return hb.flatMap((bb => {
-       if ("players" !== bb.noun || null === bb.step) return [];
-       const hb = [bb.step.from, bb.step.to].flatMap((bb => {
-         const ub = null === bb || void 0 === bb ? void 0 : bb.split(": ")[1];
-         return null === bb ? [] : void 0 !== ub && /^[a-z_]{4,}$/i.test(ub) ? [bb, ub] : [bb]
+ }, function(dd, Jd) {
+   const kd = [...Jd.facts.shares].flatMap((dd => {
+     let [Jd, kd] = dd;
+     return kd.flatMap((dd => {
+       if ("players" !== dd.noun || null === dd.step) return [];
+       const kd = [dd.step.from, dd.step.to].flatMap((dd => {
+         const Jd = null === dd || void 0 === dd ? void 0 : dd.split(": ")[1];
+         return null === dd ? [] : void 0 !== Jd && /^[a-z_]{4,}$/i.test(Jd) ? [dd, Jd] : [dd]
```

#### 2072. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23359-L23360` → after: `L23359-L23360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23359-L23360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23359-L23360) · [Before (L23359-L23360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23359-L23360)

```diff
-         value: ub,
-         names: hb
+         value: Jd,
+         names: kd
```

#### 2073. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23362-L23363` → after: `L23362-L23363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23362-L23363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23362-L23363) · [Before (L23362-L23363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23362-L23363)

```diff
-         value: 100 - ub,
-         names: hb
+         value: 100 - Jd,
+         names: kd
```

#### 2074. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23367-L23368` → after: `L23367-L23368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23367-L23368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23367-L23368) · [Before (L23367-L23368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23367-L23368)

```diff
-   return bM(bb, ub.facts.timeMarks, hb, bI).map((bb => ({
-     ...bb,
+   return kU(dd, Jd.facts.timeMarks, kd, JD).map((dd => ({
+     ...dd,
```

#### 2075. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23371-L23375` → after: `L23371-L23375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23371-L23375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23371-L23375) · [Before (L23371-L23375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23371-L23375)

```diff
- }, function(bb, ub) {
-   return [...aI(bb, ub).flatMap((hb => HI(bb, hb, ub, !1))), ...aI(bb, ub, !0).flatMap((hb => HI(bb, hb, ub, !0)))]
- }, function(bb, ub) {
-   return aI(bb, ub).flatMap((hb => {
-     var Bb;
+ }, function(dd, Jd) {
+   return [...oD(dd, Jd).flatMap((kd => lD(dd, kd, Jd, !1))), ...oD(dd, Jd, !0).flatMap((kd => lD(dd, kd, Jd, !0)))]
+ }, function(dd, Jd) {
+   return oD(dd, Jd).flatMap((kd => {
+     var pd;
```

#### 2076. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23377-L23390` → after: `L23377-L23390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23377-L23390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23377-L23390) · [Before (L23377-L23390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23377-L23390)

```diff
-       start: Ob,
-       end: Gb,
-       facts: Ub
-     } = hb;
-     const Lb = GI(Ub);
-     if (null === Lb || !Lb.isLost || null === Lb.to) return [];
-     const Yb = `\`?(?:${[Lb.from,Lb.to].flatMap((bb=>null===bb?[]:[Qm(bb)])).join("|")})\`?`,
-       Sb = null === (Bb = /(\d+)$/.exec(Lb.to)) || void 0 === Bb ? void 0 : Bb[1],
-       ab = new RegExp(`^((?:\\s+of\\s+${mm}(?:players|people)(?:\\s+(?:who|that)\\s+reach(?:ed)?\\s+${Yb})?)?)\\s+(?:(?:then|just|still)\\s+)?(?:quit|quits|leave|leaves|left|stop playing|stops playing|stopped playing|stop|stops|stopped|drop off|drops off|dropped off|drop out|drop … [truncated]
-     if (null === ab || !km.test(bb.slice(Gb + ab[0].length))) return [];
-     return "" === ab[1] && /^\s+(?:drop|drops)\b/i.test(ab[0]) && /\b(?:a|the|this|that|its|your)\s+$/i.test(bb.slice(0, Ob)) ? [] : [{
-       start: Gb,
-       end: Gb + ab[0].length,
-       text: `${ab[1]} didn't reach ${uI(Lb.to,ub.markdown)}`,
+       start: Nd,
+       end: Wd,
+       facts: Pd
+     } = kd;
+     const Zd = PD(Pd);
+     if (null === Zd || !Zd.isLost || null === Zd.to) return [];
+     const gd = `\`?(?:${[Zd.from,Zd.to].flatMap((dd=>null===dd?[]:[Ay(dd)])).join("|")})\`?`,
+       Cd = null === (pd = /(\d+)$/.exec(Zd.to)) || void 0 === pd ? void 0 : pd[1],
+       Kd = new RegExp(`^((?:\\s+of\\s+${Dy}(?:players|people)(?:\\s+(?:who|that)\\s+reach(?:ed)?\\s+${gd})?)?)\\s+(?:(?:then|just|still)\\s+)?(?:quit|quits|leave|leaves|left|stop playing|stops playing|stopped playing|stop|stops|stopped|drop off|drops off|dropped off|drop out|drop … [truncated]
+     if (null === Kd || !zy.test(dd.slice(Wd + Kd[0].length))) return [];
+     return "" === Kd[1] && /^\s+(?:drop|drops)\b/i.test(Kd[0]) && /\b(?:a|the|this|that|its|your)\s+$/i.test(dd.slice(0, Nd)) ? [] : [{
+       start: Wd,
+       end: Wd + Kd[0].length,
+       text: `${Kd[1]} didn't reach ${kD(Zd.to,Jd.markdown)}`,
```

#### 2077. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23394-L23396` → after: `L23394-L23396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23394-L23396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23394-L23396) · [Before (L23394-L23396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23394-L23396)

```diff
- }, function(bb, ub) {
-   return aI(bb, ub).flatMap((hb => {
-     var Bb, Ob;
+ }, function(dd, Jd) {
+   return oD(dd, Jd).flatMap((kd => {
+     var pd, Nd;
```

#### 2078. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23398-L23412` → after: `L23398-L23412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23398-L23412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23398-L23412) · [Before (L23398-L23412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23398-L23412)

```diff
-       end: Gb,
-       facts: Ub,
-       sentence: Lb
-     } = hb;
-     const Yb = GI(Ub),
-       Sb = new RegExp(`^(\\s+of\\s+)${mm}(players|people)\\b(?!['\u2019])(?!\\s+(?:who|that|at|from|on|in|of|reaching)\\b)`, "i").exec(bb.slice(Gb));
-     if (null === Yb || null === Yb.from || null === Yb.to || null === Sb) return [];
-     const ab = OI(Yb.to),
-       Hb = ub.facts.stepNames.some((bb => OI(bb) !== ab && bI(Lb, bb))),
-       wb = null === (Bb = /(\d+)$/.exec(Yb.from)) || void 0 === Bb ? void 0 : Bb[1],
-       Zb = void 0 !== wb && new RegExp(`\\b(?:after|from|between|past|beyond|once)\\b(?:[^.!?]{0,24}[^.!?\\d])?${wb}(?![\\d%])`, "i").test(Lb);
-     if (!bI(Lb, Yb.to) || Hb || Zb || Tm.test(Lb)) return [];
-     const Xb = Rm(Lb, Yb.to, "i")[0][0],
-       pb = /^[^:`]*$/.test(Yb.from) ? Yb.from : null === (Ob = /^(.+?):\s*(\d+)$/.exec(Yb.from)) || void 0 === Ob ? void 0 : Ob.slice(1).join(" "),
-       ob = void 0 === pb || /[:`]/.test(Xb) ? uI(Yb.from, ub.markdown) : pb;
+       end: Wd,
+       facts: Pd,
+       sentence: Zd
+     } = kd;
+     const gd = PD(Pd),
+       Cd = new RegExp(`^(\\s+of\\s+)${Dy}(players|people)\\b(?!['\u2019])(?!\\s+(?:who|that|at|from|on|in|of|reaching)\\b)`, "i").exec(dd.slice(Wd));
+     if (null === gd || null === gd.from || null === gd.to || null === Cd) return [];
+     const Kd = WD(gd.to),
+       od = Jd.facts.stepNames.some((dd => WD(dd) !== Kd && JD(Zd, dd))),
+       ld = null === (pd = /(\d+)$/.exec(gd.from)) || void 0 === pd ? void 0 : pd[1],
+       Qd = void 0 !== ld && new RegExp(`\\b(?:after|from|between|past|beyond|once)\\b(?:[^.!?]{0,24}[^.!?\\d])?${ld}(?![\\d%])`, "i").test(Zd);
+     if (!JD(Zd, gd.to) || od || Qd || Hy.test(Zd)) return [];
+     const Ld = dD(Zd, gd.to, "i")[0][0],
+       Od = /^[^:`]*$/.test(gd.from) ? gd.from : null === (Nd = /^(.+?):\s*(\d+)$/.exec(gd.from)) || void 0 === Nd ? void 0 : Nd.slice(1).join(" "),
+       ed = void 0 === Od || /[:`]/.test(Ld) ? kD(gd.from, Jd.markdown) : Od;
```

#### 2079. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23414-L23416` → after: `L23414-L23416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23414-L23416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23414-L23416) · [Before (L23414-L23416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23414-L23416)

```diff
-       start: Gb,
-       end: Gb + Sb[0].length,
-       text: `${Sb[1]}players who reached ${ob}`,
+       start: Wd,
+       end: Wd + Cd[0].length,
+       text: `${Cd[1]}players who reached ${ed}`,
```

#### 2080. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23420` → after: `L23420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23420) · [Before (L23420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23420)

```diff
- }, function(bb, ub) {
+ }, function(dd, Jd) {
```

#### 2081. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23422-L23426` → after: `L23422-L23426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23422-L23426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23422-L23426) · [Before (L23422-L23426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23422-L23426)

```diff
-     periods: hb,
-     wholeCounts: Bb
-   } = ub.facts, Ob = LI(bb);
-   return [...nW(bb, hb.allTimeCounts, Bb, Ob).map((bb => ({
-     ...bb,
+     periods: kd,
+     wholeCounts: pd
+   } = Jd.facts, Nd = gD(dd);
+   return [...av(dd, kd.allTimeCounts, pd, Nd).map((dd => ({
+     ...dd,
```

#### 2082. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23428-L23429` → after: `L23428-L23429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23428-L23429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23428-L23429) · [Before (L23428-L23429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23428-L23429)

```diff
-   }))), ...zW(bb, Bb, Ob).map((bb => ({
-     ...bb,
+   }))), ...Yv(dd, pd, Nd).map((dd => ({
+     ...dd,
```

#### 2083. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23432-L23434` → after: `L23432-L23434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23432-L23434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23432-L23434) · [Before (L23432-L23434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23432-L23434)

```diff
- }, function(bb, ub) {
-   return TM(bb, ub.facts.eventTimes, LI(bb)).map((bb => ({
-     ...bb,
+ }, function(dd, Jd) {
+   return wU(dd, Jd.facts.eventTimes, gD(dd)).map((dd => ({
+     ...dd,
```

#### 2084. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23437` → after: `L23437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23437) · [Before (L23437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23437)

```diff
- }, function(bb, ub) {
+ }, function(dd, Jd) {
```

#### 2085. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23439-L23460` → after: `L23439-L23460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23439-L23460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23439-L23460) · [Before (L23439-L23460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23439-L23460)

```diff
-     checked: hb,
-     facts: Bb
-   } = ub;
-   if (null === hb) return [];
-   const Ob = LI(bb);
-   return Hl(bb, hb).flatMap((ub => {
-     var hb;
-     const Gb = ub.index + ub.raw.length;
-     if (ub.isChecked || !YI(ub.index, Gb, Ob)) return [];
-     if (WI.test(bb.slice(Math.max(0, ub.index - 20), ub.index)) || CI.test(bb.slice(Gb)) || ys(bb, ub.index, Gb)) return [];
-     const Ub = ub.raw.endsWith("%"),
-       Lb = Ub ? Number(ub.raw.slice(0, -1)) : wI(ub.raw);
-     if (null === Lb || !Ub && (Lb < 1e3 || /k$/i.test(ub.raw))) return [];
-     const Yb = (Ub ? [...Bb.shares.keys()] : [...Bb.periods.counts]).filter((bb => Ub ? Math.abs(bb - Lb) <= 2 : Math.abs(bb - Lb) <= .03 * bb)),
-       Sb = Ub && [...Bb.shares.keys()].some((bb => Math.abs(100 - bb - Lb) < .5));
-     if (1 !== Yb.length || Sb) return [];
- ... (6 more removed lines; see GitHub link above)
+     checked: kd,
+     facts: pd
+   } = Jd;
+   if (null === kd) return [];
+   const Nd = gD(dd);
+   return lI(dd, kd).flatMap((Jd => {
+     var kd;
+     const Wd = Jd.index + Jd.raw.length;
+     if (Jd.isChecked || !CD(Jd.index, Wd, Nd)) return [];
+     if (xD.test(dd.slice(Math.max(0, Jd.index - 20), Jd.index)) || qD.test(dd.slice(Wd)) || un(dd, Jd.index, Wd)) return [];
+     const Pd = Jd.raw.endsWith("%"),
+       Zd = Pd ? Number(Jd.raw.slice(0, -1)) : QD(Jd.raw);
+     if (null === Zd || !Pd && (Zd < 1e3 || /k$/i.test(Jd.raw))) return [];
+     const gd = (Pd ? [...pd.shares.keys()] : [...pd.periods.counts]).filter((dd => Pd ? Math.abs(dd - Zd) <= 2 : Math.abs(dd - Zd) <= .03 * dd)),
+       Cd = Pd && [...pd.shares.keys()].some((dd => Math.abs(100 - dd - Zd) < .5));
+     if (1 !== gd.length || Cd) return [];
+ ... (6 more added lines; see GitHub link above)
```

#### 2086. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23464` → after: `L23464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23464) · [Before (L23464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23464)

```diff
- }, function(bb, ub) {
+ }, function(dd, Jd) {
```

#### 2087. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23466-L23477` → after: `L23466-L23477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23466-L23477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23466-L23477) · [Before (L23466-L23477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23466-L23477)

```diff
-     allTimeCounts: hb,
-     weeklyCounts: Bb
-   } = ub.facts.periods;
-   if (0 === hb.size) return [];
-   const Ob = LI(bb),
-     Gb = Hl(bb, new Set).flatMap((bb => {
-       const ub = wI(bb.raw),
-         hb = bb.index + bb.raw.length;
-       return null !== ub && YI(bb.index, hb, Ob) ? [{
-         ...bb,
-         value: ub,
-         end: hb
+     allTimeCounts: kd,
+     weeklyCounts: pd
+   } = Jd.facts.periods;
+   if (0 === kd.size) return [];
+   const Nd = gD(dd),
+     Wd = lI(dd, new Set).flatMap((dd => {
+       const Jd = QD(dd.raw),
+         kd = dd.index + dd.raw.length;
+       return null !== Jd && CD(dd.index, kd, Nd) ? [{
+         ...dd,
+         value: Jd,
+         end: kd
```

#### 2088. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23480-L23488` → after: `L23480-L23488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23480-L23488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23480-L23488) · [Before (L23480-L23488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23480-L23488)

```diff
-     Ub = [],
-     Lb = new Set;
-   for (const Yb of Gb) {
-     const [ub, Ob] = (0, HU.N)(bb, Yb.index), Sb = bb.slice(ub, Ob), ab = ub + Math.max(0, ...[...bb.slice(ub, Yb.index).matchAll(/[,;:]\s/g)].map((bb => bb.index + 2))), Hb = /[,;:]\s/.exec(bb.slice(Yb.end, Ob)), wb = bb.slice(ab, null === Hb ? Ob : Yb.end + Hb.index), Zb = ZI.t … [truncated]
-     if (hb.has(Yb.value) && !Zb && !Xb && !/^\s*\(?\s*all[- ]time/i.test(bb.slice(Yb.end)) && (Ub.push(KI(bb, Yb.end, "all time")), !Lb.has(ub) && !XI.test(Sb))) {
-       Lb.add(ub);
-       for (const hb of Gb) {
-         const Gb = hb.value >= 100 && !oI.test(bb.slice(hb.end));
-         hb.index >= ub && hb.end <= Ob && Bb.has(hb.value) && Gb && Ub.push(KI(bb, hb.end, "this week"))
+     Pd = [],
+     Zd = new Set;
+   for (const gd of Wd) {
+     const [Jd, Nd] = (0, LP.M)(dd, gd.index), Cd = dd.slice(Jd, Nd), Kd = Jd + Math.max(0, ...[...dd.slice(Jd, gd.index).matchAll(/[,;:]\s/g)].map((dd => dd.index + 2))), od = /[,;:]\s/.exec(dd.slice(gd.end, Nd)), ld = dd.slice(Kd, null === od ? Nd : gd.end + od.index), Qd = LD.t … [truncated]
+     if (kd.has(gd.value) && !Qd && !Ld && !/^\s*\(?\s*all[- ]time/i.test(dd.slice(gd.end)) && (Pd.push(vD(dd, gd.end, "all time")), !Zd.has(Jd) && !OD.test(Cd))) {
+       Zd.add(Jd);
+       for (const kd of Wd) {
+         const Wd = kd.value >= 100 && !RD.test(dd.slice(kd.end));
+         kd.index >= Jd && kd.end <= Nd && pd.has(kd.value) && Wd && Pd.push(vD(dd, kd.end, "this week"))
```

#### 2089. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23492-L23493` → after: `L23492-L23493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23492-L23493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23492-L23493) · [Before (L23492-L23493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23492-L23493)

```diff
-   return Ub
- }, function(bb, ub) {
+   return Pd
+ }, function(dd, Jd) {
```

#### 2090. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23495-L23511` → after: `L23495-L23511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23495-L23511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23495-L23511) · [Before (L23495-L23511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23495-L23511)

```diff
-     playsPerPlayer: hb,
-     playsPerPlayerShares: Bb
-   } = ub.facts.periods;
-   if (0 === hb.size) return [];
-   const Ob = LI(bb);
-   return (0, wU.f)(bb, /(\d+(?:\.\d+)?)(%?)/g, wU.p).flatMap((ub => {
-     var Gb, Ub, Lb;
-     const Yb = Number(ub[1]),
-       Sb = ub.index + ub[0].length;
-     if (!YI(ub.index, Sb, Ob)) return [];
-     const ab = bb.slice(Sb);
-     if ("%" === ub[2]) {
-       const bb = Bb.has(Yb) ? DI.exec(ab) : null;
-       return null === bb ? [] : [{
-         start: Sb,
-         end: Sb + bb[0].length,
- ... (1 more removed lines; see GitHub link above)
+     playsPerPlayer: kd,
+     playsPerPlayerShares: pd
+   } = Jd.facts.periods;
+   if (0 === kd.size) return [];
+   const Nd = gD(dd);
+   return (0, OP.f)(dd, /(\d+(?:\.\d+)?)(%?)/g, OP.q).flatMap((Jd => {
+     var Wd, Pd, Zd;
+     const gd = Number(Jd[1]),
+       Cd = Jd.index + Jd[0].length;
+     if (!CD(Jd.index, Cd, Nd)) return [];
+     const Kd = dd.slice(Cd);
+     if ("%" === Jd[2]) {
+       const dd = pd.has(gd) ? MD.exec(Kd) : null;
+       return null === dd ? [] : [{
+         start: Cd,
+         end: Cd + dd[0].length,
+ ... (1 more added lines; see GitHub link above)
```

#### 2091. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23515-L23521` → after: `L23515-L23521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23515-L23521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23515-L23521) · [Before (L23515-L23521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23515-L23521)

```diff
-     const Hb = 10 ** (null !== (Gb = null === (Ub = ub[1].split(".")[1]) || void 0 === Ub ? void 0 : Ub.length) && void 0 !== Gb ? Gb : 0);
-     if (![...hb].some((bb => Math.round(bb * Hb) === Math.round(Yb * Hb)))) return [];
-     const wb = nI.exec(ab);
-     if (null !== wb) return [{
-       start: Sb,
-       end: Sb + wb[0].length,
-       text: `${wb[1]}plays`,
+     const od = 10 ** (null !== (Wd = null === (Pd = Jd[1].split(".")[1]) || void 0 === Pd ? void 0 : Pd.length) && void 0 !== Wd ? Wd : 0);
+     if (![...kd].some((dd => Math.round(dd * od) === Math.round(gd * od)))) return [];
+     const ld = aD.exec(Kd);
+     if (null !== ld) return [{
+       start: Cd,
+       end: Cd + ld[0].length,
+       text: `${ld[1]}plays`,
```

#### 2092. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23524-L23526` → after: `L23524-L23526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23524-L23526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23524-L23526) · [Before (L23524-L23526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23524-L23526)

```diff
-     const Zb = /^\s+times\b(?!\s+(?:the|as|more|less|a)\b)/i.test(ab) ? jI.exec(bb.slice(0, ub.index)) : null;
-     if (null === Zb) return [];
-     const Xb = rI[Zb[1].toLowerCase().replace(/\s+/g, " ")];
+     const Qd = /^\s+times\b(?!\s+(?:the|as|more|less|a)\b)/i.test(Kd) ? iD.exec(dd.slice(0, Jd.index)) : null;
+     if (null === Qd) return [];
+     const Ld = sD[Qd[1].toLowerCase().replace(/\s+/g, " ")];
```

#### 2093. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23528-L23530` → after: `L23528-L23530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23528-L23530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23528-L23530) · [Before (L23528-L23530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23528-L23530)

```diff
-       start: ub.index - Zb[0].length,
-       end: ub.index,
-       text: `${SI(Xb,Zb[1])} ${null!==(Lb=Zb[2])&&void 0!==Lb?Lb:""}`,
+       start: Jd.index - Qd[0].length,
+       end: Jd.index,
+       text: `${KD(Ld,Qd[1])} ${null!==(Zd=Qd[2])&&void 0!==Zd?Zd:""}`,
```

#### 2094. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23536-L23539` → after: `L23536-L23539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23536-L23539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23536-L23539) · [Before (L23536-L23539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23536-L23539)

```diff
- function zI(bb, ub) {
-   const hb = bb.split("\n");
-   let Bb = !1;
-   return hb.map(((bb, Ob) => hH.test(bb) ? (Bb = !Bb && BH(hb, Ob, hb.length), bb) : Bb ? bb : ub(bb))).join("\n")
+ function YD(dd, Jd) {
+   const kd = dd.split("\n");
+   let pd = !1;
+   return kd.map(((dd, Nd) => Po.test(dd) ? (pd = !pd && Zo(kd, Nd, kd.length), dd) : pd ? dd : Jd(dd))).join("\n")
```

#### 2095. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23542-L23547` → after: `L23542-L23547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23542-L23547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23542-L23547) · [Before (L23542-L23547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23542-L23547)

```diff
- function gI(bb, ub, hb) {
-   const Bb = [],
-     Ob = {
-       facts: ub,
-       goodStages: hb,
-       markdown: bb,
+ function mD(dd, Jd, kd) {
+   const pd = [],
+     Nd = {
+       facts: Jd,
+       goodStages: kd,
+       markdown: dd,
```

#### 2096. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23551-L23562` → after: `L23551-L23562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23551-L23562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23551-L23562) · [Before (L23551-L23562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23551-L23562)

```diff
-     Gb = zI(bb, (bb => xI.reduce(((bb, ub) => function(bb, ub, hb) {
-       const Bb = LI(bb);
-       let Ob = "",
-         Gb = 0;
-       for (const Ub of [...ub].sort(((bb, ub) => bb.start - ub.start))) {
-         if (Ub.start < Gb || !YI(Ub.start, Ub.end, Bb)) continue;
-         const ub = bb.slice(Ub.start, Ub.end);
-         ub !== Ub.text && (hb.push({
-           kind: Ub.kind,
-           from: ub.trim(),
-           to: Ub.text.trim()
-         }), Ob += bb.slice(Gb, Ub.start) + Ub.text, Gb = Ub.end)
+     Wd = YD(dd, (dd => FD.reduce(((dd, Jd) => function(dd, Jd, kd) {
+       const pd = gD(dd);
+       let Nd = "",
+         Wd = 0;
+       for (const Pd of [...Jd].sort(((dd, Jd) => dd.start - Jd.start))) {
+         if (Pd.start < Wd || !CD(Pd.start, Pd.end, pd)) continue;
+         const Jd = dd.slice(Pd.start, Pd.end);
+         Jd !== Pd.text && (kd.push({
+           kind: Pd.kind,
+           from: Jd.trim(),
+           to: Pd.text.trim()
+         }), Nd += dd.slice(Wd, Pd.start) + Pd.text, Wd = Pd.end)
```

#### 2097. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23564-L23565` → after: `L23564-L23565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23564-L23565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23564-L23565) · [Before (L23564-L23565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23564-L23565)

```diff
-       return Ob + bb.slice(Gb)
-     }(bb, ub(bb, Ob), Bb)), bb)));
+       return Nd + dd.slice(Wd)
+     }(dd, Jd(dd, Nd), pd)), dd)));
```

#### 2098. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23567-L23568` → after: `L23567-L23568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23567-L23568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23567-L23568) · [Before (L23567-L23568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23567-L23568)

```diff
-     markdown: Gb,
-     repairs: Bb
+     markdown: Wd,
+     repairs: pd
```

#### 2099. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23571-L23583` → after: `L23571-L23583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23571-L23583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23571-L23583) · [Before (L23571-L23583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23571-L23583)

```diff
- const iI = /^\s*(?:(?:of|the|your|all|new|more|fewer|unique|daily|returning|other|active|real|extra)\s+){0,3}(?:players?|sessions?|plays|people|visits|visitors|users|joins|kids)\b/i,
-   vI = /^\s*(?:(?:more|less|extra|bonus)\s+)?(?:damage|dmg|health|hp|speed|chance|boost|bonus|discount|off|faster|slower|cheaper|stronger|weaker|knockback|cooldown|armou?r|defen[cs]e|resistance|heal(?:ing)?|xp|coins?|gold|price|cost|reward)\b/i;
- 
- function tI(bb, ub) {
-   const hb = [];
-   return zI(bb, (bb => {
-     const Bb = bb.replace(/`[^`\n]+`|\[\[[^\]\n]*\]\]/g, " ");
-     for (const Ob of Hl(Bb, ub)) {
-       const bb = Bb.slice(Ob.index + Ob.raw.length, Ob.index + Ob.raw.length + 40),
-         ub = Ob.raw.endsWith("%") && !vI.test(bb);
-       hb.push({
-         isChecked: Ob.isChecked,
-         isAboutPlayers: ub || iI.test(bb)
+ const bD = /^\s*(?:(?:of|the|your|all|new|more|fewer|unique|daily|returning|other|active|real|extra)\s+){0,3}(?:players?|sessions?|plays|people|visits|visitors|users|joins|kids)\b/i,
+   SD = /^\s*(?:(?:more|less|extra|bonus)\s+)?(?:damage|dmg|health|hp|speed|chance|boost|bonus|discount|off|faster|slower|cheaper|stronger|weaker|knockback|cooldown|armou?r|defen[cs]e|resistance|heal(?:ing)?|xp|coins?|gold|price|cost|reward)\b/i;
+ 
+ function jD(dd, Jd) {
+   const kd = [];
+   return YD(dd, (dd => {
+     const pd = dd.replace(/`[^`\n]+`|\[\[[^\]\n]*\]\]/g, " ");
+     for (const Nd of lI(pd, Jd)) {
+       const dd = pd.slice(Nd.index + Nd.raw.length, Nd.index + Nd.raw.length + 40),
+         Jd = Nd.raw.endsWith("%") && !SD.test(dd);
+       kd.push({
+         isChecked: Nd.isChecked,
+         isAboutPlayers: Jd || bD.test(dd)
```

#### 2100. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23586-L23587` → after: `L23586-L23587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23586-L23587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23586-L23587) · [Before (L23586-L23587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23586-L23587)

```diff
-     return bb
-   })), hb
+     return dd
+   })), kd
```

#### 2101. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23590-L23597` → after: `L23590-L23597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23590-L23597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23590-L23597) · [Before (L23590-L23597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23590-L23597)

```diff
- function JI(bb, ub) {
-   const hb = bb.split("\n"),
-     Bb = [],
-     Ob = [];
-   let Gb = !1;
-   for (let Ub = 0; Ub < hb.length;) {
-     if (hH.test(hb[Ub]) && (Gb = !Gb), Gb || !Vl.test(hb[Ub])) {
-       Bb.push(hb[Ub]), Ub++;
+ function XD(dd, Jd) {
+   const kd = dd.split("\n"),
+     pd = [],
+     Nd = [];
+   let Wd = !1;
+   for (let Pd = 0; Pd < kd.length;) {
+     if (Po.test(kd[Pd]) && (Wd = !Wd), Wd || !uI.test(kd[Pd])) {
+       pd.push(kd[Pd]), Pd++;
```

#### 2102. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23601-L23605` → after: `L23601-L23605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23601-L23605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23601-L23605) · [Before (L23601-L23605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23601-L23605)

```diff
-       end: bb,
-       textEnd: Lb
-     } = uK(hb, Ub), Yb = hb.slice(Ub, Lb).join("\n"), Sb = tI(Yb, ub);
-     if (!(Sb.some((bb => bb.isAboutPlayers)) && Sb.every((bb => !bb.isChecked)))) {
-       Bb.push(...hb.slice(Ub, Lb)), Ub = Lb;
+       end: dd,
+       textEnd: Zd
+     } = kG(kd, Pd), gd = kd.slice(Pd, Zd).join("\n"), Cd = jD(gd, Jd);
+     if (!(Cd.some((dd => dd.isAboutPlayers)) && Cd.every((dd => !dd.isChecked)))) {
+       pd.push(...kd.slice(Pd, Zd)), Pd = Zd;
```

#### 2103. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23608-L23610` → after: `L23608-L23610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23608-L23610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23608-L23610) · [Before (L23608-L23610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23608-L23610)

```diff
-     Ob.push(Yb);
-     const ab = /^ */.exec(hb[Ub])[0].length;
-     for (Ub = bb; Ub < hb.length && Vl.test(hb[Ub]) && /^ */.exec(hb[Ub])[0].length > ab;) Ub = uK(hb, Ub).end
+     Nd.push(gd);
+     const Kd = /^ */.exec(kd[Pd])[0].length;
+     for (Pd = dd; Pd < kd.length && uI.test(kd[Pd]) && /^ */.exec(kd[Pd])[0].length > Kd;) Pd = kG(kd, Pd).end
```

#### 2104. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23613-L23614` → after: `L23613-L23614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23613-L23614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23613-L23614) · [Before (L23613-L23614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23613-L23614)

```diff
-     markdown: Bb.join("\n"),
-     dropped: Ob
+     markdown: pd.join("\n"),
+     dropped: Nd
```

#### 2105. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23617-L23620` → after: `L23617-L23620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23617-L23620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23617-L23620) · [Before (L23617-L23620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23617-L23620)

```diff
- const eI = "(?:(?:final|big|last|giant|huge|scary|tough|main)\\s+)?",
-   NI = "(?:for|against|about|before|beat|beating|defeat|defeating|fight|fighting|face|facing|reach|reaching|survive|surviving|kill|killing|warn|until|by|to|vs|versus|past)",
-   sI = /^(?:\s*(?:[.,;:!?)]|\u2014|\u2013|\s-\s|$)|\s+(?:and|or|but|so|to|with|before|by|is|are|was|has|comes|arrives|appears|spawns|gets|can|will|would|who|that|which|when|because|if|without|alone|first|faster)\b)/i,
-   MI = 3;
+ const fD = "(?:(?:final|big|last|giant|huge|scary|tough|main)\\s+)?",
+   nD = "(?:for|against|about|before|beat|beating|defeat|defeating|fight|fighting|face|facing|reach|reaching|survive|surviving|kill|killing|warn|until|by|to|vs|versus|past)",
+   UD = /^(?:\s*(?:[.,;:!?)]|\u2014|\u2013|\s-\s|$)|\s+(?:and|or|but|so|to|with|before|by|is|are|was|has|comes|arrives|appears|spawns|gets|can|will|would|who|that|which|when|because|if|without|alone|first|faster)\b)/i,
+   yD = 3;
```

#### 2106. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23622-L23623` → after: `L23622-L23623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23622-L23623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23622-L23623) · [Before (L23622-L23623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23622-L23623)

```diff
- function mI(bb) {
-   return `(?:\\b${bb}s?(?:_start)?[\\s:#]*\\d+\\b|\\b\\d+\\s+${bb}s?\\b)`
+ function DD(dd) {
+   return `(?:\\b${dd}s?(?:_start)?[\\s:#]*\\d+\\b|\\b\\d+\\s+${dd}s?\\b)`
```

#### 2107. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23626-L23628` → after: `L23626-L23628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23626-L23628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23626-L23628) · [Before (L23626-L23628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23626-L23628)

```diff
- function II(bb) {
-   const ub = [];
-   for (const hb of bb.matchAll(/`[^`]*`|\[\[[^\]]*\]\]|\[[^\]]*\]\([^)]*\)|"[^"\n]*"|\u201c[^\u201d\n]*\u201d/g)) ub.push([hb.index, hb.index + hb[0].length]);
+ function TD(dd) {
+   const Jd = [];
+   for (const kd of dd.matchAll(/`[^`]*`|\[\[[^\]]*\]\]|\[[^\]]*\]\([^)]*\)|"[^"\n]*"|\u201c[^\u201d\n]*\u201d/g)) Jd.push([kd.index, kd.index + kd[0].length]);
```

#### 2108. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23661` → after: `L23661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23661) · [Before (L23661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23661)

```diff
-   return "final" === bb ? "final\\s+wave" : (0, HU.i)(bb)
+   return "final" === dd ? "final\\s+wave" : (0, LP.h)(dd)
```

#### 2109. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23668-L23671` → after: `L23668-L23671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23668-L23671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23668-L23671) · [Before (L23668-L23671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23668-L23671)

```diff
-     Ub = `[\\w'\u2019-]+${Gb}`,
-     Lb = `(?:['\u2019]s)?${Gb}(?:${Ub}){0,${MI}}?`,
-     Yb = new RegExp(`(?:^|[^\\w-])${Bb}(?![\\w-])${Lb}${Ob}|${Ob}${Lb}(?:${Ub})?${Bb}(?![\\w-])`, "i");
-   return (0, HU.o)(bb).some((bb => Yb.test(bb)))
+     Pd = `[\\w'\u2019-]+${Wd}`,
+     Zd = `(?:['\u2019]s)?${Wd}(?:${Pd}){0,${yD}}?`,
+     gd = new RegExp(`(?:^|[^\\w-])${pd}(?![\\w-])${Zd}${Nd}|${Nd}${Zd}(?:${Pd})?${pd}(?![\\w-])`, "i");
+   return (0, LP.q)(dd).some((dd => gd.test(dd)))
```

#### 2110. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23675-L23676` → after: `L23675-L23676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23675-L23676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23675-L23676) · [Before (L23675-L23676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23675-L23676)

```diff
-   const hb = new RegExp(`\\b(${ub})\\s+\\d+`, "i").exec(bb);
-   return null === hb ? ub : hb[1]
+   const kd = new RegExp(`\\b(${Jd})\\s+\\d+`, "i").exec(dd);
+   return null === kd ? Jd : kd[1]
```

#### 2111. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23681` → after: `L23681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23681) · [Before (L23681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23681)

```diff
-   return (null !== (ub = null === bb || void 0 === bb ? void 0 : bb.ordinals) && void 0 !== ub ? ub : []).filter((bb => /^[a-z]{3,20}$/.test(bb.thing)))
+   return (null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.ordinals) && void 0 !== Jd ? Jd : []).filter((dd => /^[a-z]{3,20}$/.test(dd.thing)))
```

#### 2112. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23699` → after: `L23699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23699) · [Before (L23699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23699)

```diff
-     const ub = `${Yb.unit}\n${Yb.n}`;
+     const Jd = `${gd.unit}\n${gd.n}`;
```

#### 2113. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23702-L23704` → after: `L23702-L23704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23702-L23704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23702-L23704) · [Before (L23702-L23704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23702-L23704)

```diff
-       Sb = new RegExp(`(?:^|[^\\w-])${NI}\\s+(?:the|your)\\s+${eI}$`, "i"),
-       ab = new RegExp(`${Bb}(?![\\w-])`, "gi"),
-       Hb = "final" === Yb.thing ? ` (${VI(bb,Yb.unit)} ${Yb.n})` : ` ${"round"===Yb.unit?"in":"on"} ${VI(bb,Yb.unit)} ${Yb.n}`,
+       Cd = new RegExp(`(?:^|[^\\w-])${nD}\\s+(?:the|your)\\s+${fD}$`, "i"),
+       Kd = new RegExp(`${pd}(?![\\w-])`, "gi"),
+       od = "final" === gd.thing ? ` (${uD(dd,gd.unit)} ${gd.n})` : ` ${"round"===gd.unit?"in":"on"} ${uD(dd,gd.unit)} ${gd.n}`,
```

#### 2114. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23706-L23707` → after: `L23706-L23707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23706-L23707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23706-L23707) · [Before (L23706-L23707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23706-L23707)

```diff
-       Zb = new RegExp(`(?:^|[^\\d.,])${Yb.n}(?!\\d|[.,]\\d)`),
-       Xb = qI(Ob, Gb, ab, (0, wU.j)("\\w-"));
+       Qd = new RegExp(`(?:^|[^\\d.,])${gd.n}(?!\\d|[.,]\\d)`),
+       Ld = cD(Nd, Wd, Kd, (0, OP.k)("\\w-"));
```

#### 2115. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23714` → after: `L23714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23714) · [Before (L23714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23714)

```diff
-     hb.has(pb) || !Sb.test(lb.slice(0, ob)) || /^(?:['\u2019]s\b|-)/.test(lb.slice(Kb)) || Zb.test(lb.slice(Wb, Cb)) || wb.test(lb.slice(Kb, Cb)) || !sI.test(lb.slice(Kb)) || (Ob[pb] = `${lb.slice(0,Kb)}${Hb}${lb.slice(Kb)}`, Ub.push({
+     kd.has(Od) || !Cd.test(Id.slice(0, ed)) || /^(?:['\u2019]s\b|-)/.test(Id.slice(Gd)) || Qd.test(Id.slice(vd, xd)) || ld.test(Id.slice(Gd, xd)) || !UD.test(Id.slice(Gd)) || (Nd[Od] = `${Id.slice(0,Gd)}${od}${Id.slice(Gd)}`, Pd.push({
```

#### 2116. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23716` → after: `L23716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23716) · [Before (L23716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23716)

```diff
-       text: `${lb.slice(ob,Kb)}${Hb}`
+       text: `${Id.slice(ed,Gd)}${od}`
```

#### 2117. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23720` → after: `L23720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23720) · [Before (L23720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23720)

```diff
-     markdown: 0 === Ub.length ? bb : Ob.join("\n"),
+     markdown: 0 === Pd.length ? dd : Nd.join("\n"),
```

#### 2118. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23759` → after: `L23759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23759) · [Before (L23759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23759)

```diff
-     sections: bb.sections.map(((bb, ub) => ab[ub + 1] === bb.markdown ? bb : {
+     sections: dd.sections.map(((dd, Jd) => Kd[Jd + 1] === dd.markdown ? dd : {
```

#### 2119. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23769` → after: `L23769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23769) · [Before (L23769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23769)

```diff
-     Ob = null !== (hb = null === bb || void 0 === bb ? void 0 : bb.ordinals) && void 0 !== hb ? hb : [],
+     Nd = null !== (kd = null === dd || void 0 === dd ? void 0 : dd.ordinals) && void 0 !== kd ? kd : [],
```

#### 2120. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23775` → after: `L23775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23775) · [Before (L23775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23775)

```diff
-       return `${ub}\n${hb}`
+       return `${Jd}\n${kd}`
```

#### 2121. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23789` → after: `L23789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23789) · [Before (L23789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23789)

```diff
-     })).filter((bb => "final" !== bb)), ab = Sb.includes("boss") ? "boss" : null !== (Ub = Sb[0]) && void 0 !== Ub ? Ub : null;
+     })).filter((dd => "final" !== dd)), Kd = Cd.includes("boss") ? "boss" : null !== (Pd = Cd[0]) && void 0 !== Pd ? Pd : null;
```

#### 2122. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23798` → after: `L23798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23798) · [Before (L23798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23798)

```diff
-       const hb = Yb ? `${ub("your last")} ${bb}, ${ub("with the")} ${ab}` : `${ub("your")} ${ab} ${bb}`;
+       const kd = gd ? `${Jd("your last")} ${dd}, ${Jd("with the")} ${Kd}` : `${Jd("your")} ${Kd} ${dd}`;
```

#### 2123. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23804-L23805` → after: `L23804-L23805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23804-L23805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23804-L23805) · [Before (L23804-L23805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23804-L23805)

```diff
-       paren: `${ub("your last")} ${bb}`,
-       inline: `${ub("your last")} ${bb}`
+       paren: `${Jd("your last")} ${dd}`,
+       inline: `${Jd("your last")} ${dd}`
```

#### 2124. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23813-L23814` → after: `L23813-L23814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23813-L23814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23813-L23814) · [Before (L23813-L23814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23813-L23814)

```diff
-   return 0 === ub.size ? [...bb] : bb.map((bb => "string" !== typeof bb ? bb : bb.replace(/\b(wave|level|round|stage)\s+(\d+)\b(?![\d.,]\d)(\s*\(|\s*\u2192)?/gi, ((bb, Bb, Ob, Gb) => {
-     const Ub = `${Bb.toLowerCase()}\n${Ob}`,
+   return 0 === Jd.size ? [...dd] : dd.map((dd => "string" !== typeof dd ? dd : dd.replace(/\b(wave|level|round|stage)\s+(\d+)\b(?![\d.,]\d)(\s*\(|\s*\u2192)?/gi, ((dd, pd, Nd, Wd) => {
+     const Pd = `${pd.toLowerCase()}\n${Nd}`,
```

#### 2125. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23816` → after: `L23816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23816) · [Before (L23816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23816)

```diff
-     return void 0 === Lb || hb.has(Ub) || null !== Gb && void 0 !== Gb && Gb.includes("\u2192") ? bb : (hb.add(Ub), void 0 === Gb ? `${Bb} ${Ob} (${Lb.paren})` : `${Bb} ${Ob}, ${Lb.inline}${Gb}`)
+     return void 0 === Zd || kd.has(Pd) || null !== Wd && void 0 !== Wd && Wd.includes("\u2192") ? dd : (kd.add(Pd), void 0 === Wd ? `${pd} ${Nd} (${Zd.paren})` : `${pd} ${Nd}, ${Zd.inline}${Wd}`)
```

#### 2126. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23911-L23912` → after: `L23911-L23912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23911-L23912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23911-L23912) · [Before (L23911-L23912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23911-L23912)

```diff
-   const hb = (0, HU.i)(ub);
-   return new RegExp(`\\b(?:from|is|currently|now)\\s+${hb}(?![\\d.,]*\\d)|(?:^|[^\\d.,])${hb}(?:\\s*(?:seconds?|secs?|ms|milliseconds?|coins|gold))?\\s*(?:to|->|\u2192)\\s*\\d`, "i").test(bb.replace(/(\d),(?=\d{3}\b)/g, "$1"))
+   const kd = (0, LP.h)(Jd);
+   return new RegExp(`\\b(?:from|is|currently|now)\\s+${kd}(?![\\d.,]*\\d)|(?:^|[^\\d.,])${kd}(?:\\s*(?:seconds?|secs?|ms|milliseconds?|coins|gold))?\\s*(?:to|->|\u2192)\\s*\\d`, "i").test(dd.replace(/(\d),(?=\d{3}\b)/g, "$1"))
```

#### 2127. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23917` → after: `L23917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23917) · [Before (L23917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23917)

```diff
-   return new RegExp(`(?:^|\\W)${(0,HU.i)(ub)}(?![\\w])`).test(bb)
+   return new RegExp(`(?:^|\\W)${(0,LP.h)(Jd)}(?![\\w])`).test(dd)
```

#### 2128. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23953` → after: `L23953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23953) · [Before (L23953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23953)

```diff
-     } = Sb[0], wb = ab.split(".").pop(), Zb = /(?:ms|millis?)$/i.test(wb) || /\*\s*1000$/.test(Hb) ? me(/ms$/i.test(wb) ? wb : `${wb}_MS`, Hb.trim()) : null, Xb = null === Zb ? null : /^[\d.]+/.exec(Zb)[0];
+     } = Cd[0], ld = Kd.split(".").pop(), Qd = /(?:ms|millis?)$/i.test(ld) || /\*\s*1000$/.test(od) ? UX(/ms$/i.test(ld) ? ld : `${ld}_MS`, od.trim()) : null, Ld = null === Qd ? null : /^[\d.]+/.exec(Qd)[0];
```

#### 2129. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23964` → after: `L23964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23964) · [Before (L23964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23964)

```diff
-         return `${bb} (\`${ab}${Gb?"":` = ${Hb.trim()}${null===Zb?"":` // ${Zb}`}`}\`)`
+         return `${dd} (\`${Kd}${Wd?"":` = ${od.trim()}${null===Qd?"":` // ${Qd}`}`}\`)`
```

#### 2130. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L23975` → after: `L23975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR23975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L23975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L23975) · [Before (L23975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L23975)

```diff
-     const Bb = null !== (hb = bb.calls) && void 0 !== hb ? hb : null;
+     const pd = null !== (kd = dd.calls) && void 0 !== kd ? kd : null;
```

#### 2131. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24047` → after: `L24047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24047) · [Before (L24047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24047)

```diff
-       phrase: new RegExp(`\\b(?:the|your|their|a|an)\\s+(?:(?:free|starter|starting)\\s+)?${bb}\\b(?!\\s*-)`, "i"),
+       phrase: new RegExp(`\\b(?:the|your|their|a|an)\\s+(?:(?:free|starter|starting)\\s+)?${dd}\\b(?!\\s*-)`, "i"),
```

#### 2132. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24057` → after: `L24057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24057) · [Before (L24057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24057)

```diff
-         return [/^[A-Z]/.test(Bb) ? `${Sb[0].toUpperCase()}${Sb.slice(1)}` : Sb, ...Ob, Gb].join(" ")
+         return [/^[A-Z]/.test(pd) ? `${Cd[0].toUpperCase()}${Cd.slice(1)}` : Cd, ...Nd, Wd].join(" ")
```

#### 2133. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24079` → after: `L24079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24079) · [Before (L24079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24079)

```diff
-       return [`\`${ub}\``, `${ub}:`, `"${ub}"`, `${ub} event`]
+       return [`\`${Jd}\``, `${Jd}:`, `"${Jd}"`, `${Jd} event`]
```

#### 2134. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24087` → after: `L24087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24087) · [Before (L24087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24087)

```diff
-     rewrite: bb => `${bb} (logged as \`${Ub}\`)`
+     rewrite: dd => `${dd} (logged as \`${Pd}\`)`
```

#### 2135. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24095` → after: `L24095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24095) · [Before (L24095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24095)

```diff
-     rewrite: bb => `${bb} (logged as \`${Lb}\`)`
+     rewrite: dd => `${dd} (logged as \`${Zd}\`)`
```

#### 2136. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24115` → after: `L24115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24115) · [Before (L24115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24115)

```diff
-         return ub.includes(Bb) ? `${hb} (logged as \`${bb}: ${Bb}\`)` : null
+         return Jd.includes(pd) ? `${kd} (logged as \`${dd}: ${pd}\`)` : null
```

#### 2137. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24133` → after: `L24133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24133) · [Before (L24133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24133)

```diff
-     if (null !== Lb && Lb !== Bb[0]) return `${bb.slice(0,Ob)}${Lb}${bb.slice(Gb)}`
+     if (null !== Zd && Zd !== pd[0]) return `${dd.slice(0,Nd)}${Zd}${dd.slice(Wd)}`
```

#### 2138. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24184-L24188` → after: `L24184-L24188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24184-L24188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24184-L24188) · [Before (L24184-L24188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24184-L24188)

```diff
-   oP = new RegExp(String.raw`(${pP})\s*,\s*(${pP})\s*,\s*(${pP})(?![\w.])`, "g"),
-   AP = (0, wU.j)("\\w."),
-   lP = new RegExp(String.raw`(\bapi\s*\.\s*setPosition\s*\(\s*[A-Za-z_$][\w$.[\]]*\s*,\s*)(\[\s*)?(${pP}|x)(\s*,\s*)(${pP}|y)(\s*,\s*)(${pP}|z)(\s*\]?\s*\))`, "g"),
-   KP = new RegExp(String.raw`(\bapi\s*\.\s*setBlock\s*\(\s*)(\[\s*)?(${pP}|x)(\s*,\s*)(${pP}|y)(\s*,\s*)(${pP}|z)(\s*\]?\s*,)`, "g"),
-   WP = new RegExp(String.raw`^(.*?)\breturn\s*\[\s*(${pP})\s*,\s*(${pP})\s*,\s*(${pP})\s*\]`),
+   RT = new RegExp(String.raw`(${eT})\s*,\s*(${eT})\s*,\s*(${eT})(?![\w.])`, "g"),
+   IT = (0, OP.k)("\\w."),
+   GT = new RegExp(String.raw`(\bapi\s*\.\s*setPosition\s*\(\s*[A-Za-z_$][\w$.[\]]*\s*,\s*)(\[\s*)?(${eT}|x)(\s*,\s*)(${eT}|y)(\s*,\s*)(${eT}|z)(\s*\]?\s*\))`, "g"),
+   vT = new RegExp(String.raw`(\bapi\s*\.\s*setBlock\s*\(\s*)(\[\s*)?(${eT}|x)(\s*,\s*)(${eT}|y)(\s*,\s*)(${eT}|z)(\s*\]?\s*,)`, "g"),
+   xT = new RegExp(String.raw`^(.*?)\breturn\s*\[\s*(${eT})\s*,\s*(${eT})\s*,\s*(${eT})\s*\]`),
```

#### 2139. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24220` → after: `L24220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24220) · [Before (L24220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24220)

```diff
-         const Gb = null !== (Ob = hb.get(bb)) && void 0 !== Ob ? Ob : new Map;
+         const Wd = null !== (Nd = kd.get(dd)) && void 0 !== Nd ? Nd : new Map;
```

#### 2140. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24235` → after: `L24235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24235) · [Before (L24235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24235)

```diff
-       for (const Gb of [...bb.callbacks, ...null !== (hb = bb.functions) && void 0 !== hb ? hb : []]) {
+       for (const Wd of [...dd.callbacks, ...null !== (kd = dd.functions) && void 0 !== kd ? kd : []]) {
```

#### 2141. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24258` → after: `L24258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24258) · [Before (L24258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24258)

```diff
-         of [...null !== (Bb = bb.messages) && void 0 !== Bb ? Bb : [], ...null !== (Ob = bb.calls) && void 0 !== Ob ? Ob : []]) {
+         of [...null !== (pd = dd.messages) && void 0 !== pd ? pd : [], ...null !== (Nd = dd.calls) && void 0 !== Nd ? Nd : []]) {
```

#### 2142. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24267` → after: `L24267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24267) · [Before (L24267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24267)

```diff
-         text: `${Gb.name} = ${Gb.value}`,
+         text: `${Wd.name} = ${Wd.value}`,
```

#### 2143. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24283` → after: `L24283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24283) · [Before (L24283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24283)

```diff
-         test: `${null!==Ub&&void 0!==Ub?Ub:""} ${Ob.slice(0,bb.index)}`,
+         test: `${null!==Pd&&void 0!==Pd?Pd:""} ${Nd.slice(0,dd.index)}`,
```

#### 2144. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24287` → after: `L24287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24287) · [Before (L24287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24287)

```diff
-         test: `${null!==Ub&&void 0!==Ub?Ub:""} ${hb[1]}`,
+         test: `${null!==Pd&&void 0!==Pd?Pd:""} ${kd[1]}`,
```

#### 2145. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24293` → after: `L24293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24293) · [Before (L24293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24293)

```diff
-     Bb(Sb ? iP(Yb.test, !1) : null !== ab && void 0 !== ab ? ab : iP(Gb, !1), Yb.position, Gb)
+     pd(Cd ? bT(gd.test, !1) : null !== Kd && void 0 !== Kd ? Kd : bT(Wd, !1), gd.position, Wd)
```

#### 2146. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24311-L24313` → after: `L24311-L24313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24311-L24313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24311-L24313) · [Before (L24311-L24313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24311-L24313)

```diff
-         if (null === bb || "" === bb[1] || !new RegExp(`^${pP}$`).test(Ub)) continue;
-         const Lb = null !== (Bb = ub.get(bb[1])) && void 0 !== Bb ? Bb : {};
-         Lb[bb[2].toLowerCase()] = Ub, ub.set(bb[1], Lb), hb.set(bb[1], [...null !== (Ob = hb.get(bb[1])) && void 0 !== Ob ? Ob : [], Gb])
+         if (null === dd || "" === dd[1] || !new RegExp(`^${eT}$`).test(Pd)) continue;
+         const Zd = null !== (pd = Jd.get(dd[1])) && void 0 !== pd ? pd : {};
+         Zd[dd[2].toLowerCase()] = Pd, Jd.set(dd[1], Zd), kd.set(dd[1], [...null !== (Nd = kd.get(dd[1])) && void 0 !== Nd ? Nd : [], Wd])
```

#### 2147. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24346-L24348` → after: `L24346-L24348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24346-L24348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24346-L24348) · [Before (L24346-L24348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24346-L24348)

```diff
-   if (new RegExp(String.raw`\b(?:const|let|var)\s+(?:\[[^\]]*\b${bb}\b|\{[^}]*\b${bb}\b|${bb}\b)|\(([^()]*\b)?${bb}\b[^()]*\)\s*=>`).test(ub)) return !0;
-   const Yb = new Set(null !== (Ob = hb.match(/[A-Za-z_$][\w$]*/g)) && void 0 !== Ob ? Ob : []),
-     Sb = [...null !== (Gb = Bb.messages) && void 0 !== Gb ? Gb : [], ...null !== (Ub = Bb.calls) && void 0 !== Ub ? Ub : []].flatMap((bb => {
+   if (new RegExp(String.raw`\b(?:const|let|var)\s+(?:\[[^\]]*\b${dd}\b|\{[^}]*\b${dd}\b|${dd}\b)|\(([^()]*\b)?${dd}\b[^()]*\)\s*=>`).test(Jd)) return !0;
+   const gd = new Set(null !== (Nd = kd.match(/[A-Za-z_$][\w$]*/g)) && void 0 !== Nd ? Nd : []),
+     Cd = [...null !== (Wd = pd.messages) && void 0 !== Wd ? Wd : [], ...null !== (Pd = pd.calls) && void 0 !== Pd ? Pd : []].flatMap((dd => {
```

#### 2148. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24355` → after: `L24355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24355) · [Before (L24355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24355)

```diff
-   return [...Bb.callbacks, ...null !== (Lb = Bb.functions) && void 0 !== Lb ? Lb : []].some((ub => {
+   return [...pd.callbacks, ...null !== (Zd = pd.functions) && void 0 !== Zd ? Zd : []].some((Jd => {
```

#### 2149. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24357` → after: `L24357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24357) · [Before (L24357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24357)

```diff
-     return (Yb.has(ub.name) || Sb.includes(ub.name)) && ((null !== (hb = ub.params) && void 0 !== hb ? hb : []).includes(bb) || (null !== (Bb = null === (Ob = ub.body) || void 0 === Ob ? void 0 : Ob.locals) && void 0 !== Bb ? Bb : []).includes(bb))
+     return (gd.has(Jd.name) || Cd.includes(Jd.name)) && ((null !== (kd = Jd.params) && void 0 !== kd ? kd : []).includes(dd) || (null !== (pd = null === (Nd = Jd.body) || void 0 === Nd ? void 0 : Nd.locals) && void 0 !== pd ? pd : []).includes(dd))
```

#### 2150. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24385` → after: `L24385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24385) · [Before (L24385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24385)

```diff
-     const hb = [...bb.matchAll(new RegExp(String.raw`\b${jJ}\s+(?:the\s+|your\s+|their\s+)([a-z]+)\b(?!\s+(?:of|to)\b)`, "gi"))].flatMap((bb => {
+     const kd = [...dd.matchAll(new RegExp(String.raw`\b${Bj}\s+(?:the\s+|your\s+|their\s+)([a-z]+)\b(?!\s+(?:of|to)\b)`, "gi"))].flatMap((dd => {
```

#### 2151. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24413` → after: `L24413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24413) · [Before (L24413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24413)

```diff
-   for (const Ab of null !== (Xb = null === Ob || void 0 === Ob ? void 0 : Ob.codeLines) && void 0 !== Xb ? Xb : []) {
+   for (const Rd of null !== (Ld = null === Nd || void 0 === Nd ? void 0 : Nd.codeLines) && void 0 !== Ld ? Ld : []) {
```

#### 2152. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24434-L24437` → after: `L24434-L24437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24434-L24437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24434-L24437) · [Before (L24434-L24437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24434-L24437)

```diff
-   const Ob = new RegExp(String.raw`\bthe\s+(?:${Bb.join("|")})\b`, "gi");
-   return bb.replace(ub ? gP : zP, (bb => bb.replace(Ob, (bb => {
-     const ub = `the ${hb}`;
-     return bb === bb.toUpperCase() ? ub.toUpperCase() : /^The/.test(bb) ? `T${ub.slice(1)}` : ub
+   const Nd = new RegExp(String.raw`\bthe\s+(?:${pd.join("|")})\b`, "gi");
+   return dd.replace(Jd ? mT : YT, (dd => dd.replace(Nd, (dd => {
+     const Jd = `the ${kd}`;
+     return dd === dd.toUpperCase() ? Jd.toUpperCase() : /^The/.test(dd) ? `T${Jd.slice(1)}` : Jd
```

#### 2153. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24471` → after: `L24471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24471) · [Before (L24471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24471)

```diff
-     pb = sP(wb.code, null !== (Ob = wb.where) && void 0 !== Ob ? Ob : "", Zb, ub, hb, Bb, Gb);
+     Od = UT(ld.code, null !== (Nd = ld.where) && void 0 !== Nd ? Nd : "", Qd, Jd, kd, pd, Wd);
```

#### 2154. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24477` → after: `L24477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24477) · [Before (L24477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24477)

```diff
-       return `${arguments.length<=1?void 0:arguments[1]}${null!==(ub=arguments.length<=2?void 0:arguments[2])&&void 0!==ub?ub:""}${hb}${arguments.length<=4?void 0:arguments[4]}${Bb}${arguments.length<=6?void 0:arguments[6]}${Ob}${arguments.length<=8?void 0:arguments[8]}`
+       return `${arguments.length<=1?void 0:arguments[1]}${null!==(Jd=arguments.length<=2?void 0:arguments[2])&&void 0!==Jd?Jd:""}${kd}${arguments.length<=4?void 0:arguments[4]}${pd}${arguments.length<=6?void 0:arguments[6]}${Nd}${arguments.length<=8?void 0:arguments[8]}`
```

#### 2155. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24498` → after: `L24498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24498) · [Before (L24498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24498)

```diff
-     const bb = [...ub.playerText, ...(null !== (Ab = ub.messages) && void 0 !== Ab ? Ab : []).map((bb => {
+     const dd = [...Jd.playerText, ...(null !== (Rd = Jd.messages) && void 0 !== Rd ? Rd : []).map((dd => {
```

#### 2156. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24503-L24504` → after: `L24503-L24504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24503-L24504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24503-L24504) · [Before (L24503-L24504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24503-L24504)

```diff
-       })), null !== (lb = null === hb || void 0 === hb ? void 0 : hb.gameText) && void 0 !== lb ? lb : ""].join("\n"),
-       Bb = ["exit", "finish line", "finish"].filter((ub => !new RegExp(`\\b${ub.split(" ")[0]}`, "i").test(bb)));
+       })), null !== (Id = null === kd || void 0 === kd ? void 0 : kd.gameText) && void 0 !== Id ? Id : ""].join("\n"),
+       pd = ["exit", "finish line", "finish"].filter((Jd => !new RegExp(`\\b${Jd.split(" ")[0]}`, "i").test(dd)));
```

#### 2157. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24514` → after: `L24514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24514) · [Before (L24514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24514)

```diff
-   return 0 === Xb.length ? Ub : {
+   return 0 === Ld.length ? Pd : {
```

#### 2158. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24519` → after: `L24519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24519) · [Before (L24519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24519)

```diff
- const IP = (0, wU.j)("\\w");
+ const TT = (0, OP.k)("\\w");
```

#### 2159. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24535-L24539` → after: `L24535-L24539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24535-L24539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24535-L24539) · [Before (L24535-L24539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24535-L24539)

```diff
-     Lb = null !== Ub && Ub.length >= 3 && !/^-?\d+$/.test(Ub) ? Ub : null,
-     Yb = [...new Set([bb, Ob, ...null === Lb ? [] : [Lb, Lb.replace(/_/g, " ")]])].sort(((bb, ub) => ub.length - bb.length)).map(HU.i),
-     Sb = null !== (ub = null === (hb = /(?:^|\s|:)(-?\d+)$/.exec(bb)) || void 0 === hb ? void 0 : hb[1]) && void 0 !== ub ? ub : null,
-     ab = null === Sb ? "" : `|([A-Za-z][\\w-]*)\\s+${(0,HU.i)(Sb)}(?![\\w]|\\.\\d)`,
-     Hb = `(${Yb.join("|")})(?![\\w])${ab}`,
+     Zd = null !== Pd && Pd.length >= 3 && !/^-?\d+$/.test(Pd) ? Pd : null,
+     gd = [...new Set([dd, Nd, ...null === Zd ? [] : [Zd, Zd.replace(/_/g, " ")]])].sort(((dd, Jd) => Jd.length - dd.length)).map(LP.h),
+     Cd = null !== (Jd = null === (kd = /(?:^|\s|:)(-?\d+)$/.exec(dd)) || void 0 === kd ? void 0 : kd[1]) && void 0 !== Jd ? Jd : null,
+     Kd = null === Cd ? "" : `|([A-Za-z][\\w-]*)\\s+${(0,LP.h)(Cd)}(?![\\w]|\\.\\d)`,
+     od = `(${gd.join("|")})(?![\\w])${Kd}`,
```

#### 2160. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24545-L24546` → after: `L24545-L24546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24545-L24546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24545-L24546) · [Before (L24545-L24546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24545-L24546)

```diff
-       atStart: new RegExp(`^(?:${Hb})`, "i"),
-       anywhere: new RegExp(`(?:${Hb})`, "gi")
+       atStart: new RegExp(`^(?:${od})`, "i"),
+       anywhere: new RegExp(`(?:${od})`, "gi")
```

#### 2161. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24609` → after: `L24609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24609) · [Before (L24609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24609)

```diff
-   for (const hb of (0, wU.f)(bb, RP, (0, wU.j)("\\w.,"))) {
+   for (const kd of (0, OP.f)(dd, dE, (0, OP.k)("\\w.,"))) {
```

#### 2162. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24646` → after: `L24646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24646) · [Before (L24646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24646)

```diff
-   }(ub, bb)))))) && void 0 !== Ob ? Ob : null : 1 === hb.length && Uq.test(ub) ? hb[0] : null
+   }(Jd, dd)))))) && void 0 !== Nd ? Nd : null : 1 === kd.length && ZE.test(Jd) ? kd[0] : null
```

#### 2163. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24679` → after: `L24679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24679) · [Before (L24679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24679)

```diff
-   return null !== ub.word && null !== bb.number && FP(ub.word, bb) ? `${ub.word} ${bb.number}` : ub.isValue && null !== bb.value ? bb.value : bb.plain
+   return null !== Jd.word && null !== dd.number && tT(Jd.word, dd) ? `${Jd.word} ${dd.number}` : Jd.isValue && null !== dd.value ? dd.value : dd.plain
```

#### 2164. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24692` → after: `L24692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24692) · [Before (L24692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24692)

```diff
-   const Ub = null === ub.to.number ? null : new RegExp(`^${(0,HU.i)(ub.to.number)}(?![\\w]|\\.\\d)`).exec(Ob);
+   const Pd = null === Jd.to.number ? null : new RegExp(`^${(0,LP.h)(Jd.to.number)}(?![\\w]|\\.\\d)`).exec(Nd);
```

#### 2165. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24746` → after: `L24746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24746) · [Before (L24746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24746)

```diff
-       vb = null !== (Yb = null !== (Sb = Lq(ib, Wb, gb)) && void 0 !== Sb ? Sb : Lq(ib, Wb, Cq(gb, Db))) && void 0 !== Yb ? Yb : xb && 1 === gb.length && 0 === Bq(ib).length ? gb[0] : null;
+       Sd = null !== (gd = null !== (Cd = gE(bd, vd, md)) && void 0 !== Cd ? Cd : gE(bd, vd, qE(md, Md))) && void 0 !== gd ? gd : Fd && 1 === md.length && 0 === NE(bd).length ? md[0] : null;
```

#### 2166. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24756-L24757` → after: `L24756-L24757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24756-L24757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24756-L24757) · [Before (L24756-L24757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24756-L24757)

```diff
-     })), eb = Aq(oq(null === Xb || void 0 === Xb ? void 0 : Xb.toLowerCase(), pb, ob), Bb), Nb = lb + Zb.indexOf(ob) - (null !== (ab = null === db || void 0 === db || null === (Hb = db[1]) || void 0 === Hb ? void 0 : Hb.length) && void 0 !== ab ? ab : 0);
-     let sb = `${eb} `,
+     })), fd = IE(RE(null === Ld || void 0 === Ld ? void 0 : Ld.toLowerCase(), Od, ed), pd), nd = Id + Qd.indexOf(ed) - (null !== (Kd = null === qd || void 0 === qd || null === (od = qd[1]) || void 0 === od ? void 0 : od.length) && void 0 !== Kd ? Kd : 0);
+     let Ud = `${fd} `,
```

#### 2167. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24760` → after: `L24760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24760) · [Before (L24760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24760)

```diff
-     if (null !== Jb) sb = `${eb} ${Jb.text} after ${nb.slice(0,tb.length)}`, Mb = Kb + jb.length + tb.length + Jb.length, mb = Mb;
+     if (null !== Xd) Ud = `${fd} ${Xd.text} after ${ad.slice(0,jd.length)}`, yd = Gd + sd.length + jd.length + Xd.length, Dd = yd;
```

#### 2168. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24767` → after: `L24767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24767) · [Before (L24767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24767)

```diff
-         sb = `${eb} ${ub.slice(hb[0].length,hb[0].length+Bb.length)} after ${bb}`, Mb = Kb + bb.length + hb[0].length + Bb.length, mb = Mb
+         Ud = `${fd} ${Jd.slice(kd[0].length,kd[0].length+pd.length)} after ${dd}`, yd = Gd + dd.length + kd[0].length + pd.length, Dd = yd
```

#### 2169. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24770` → after: `L24770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24770) · [Before (L24770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24770)

```diff
-         sb = `${eb} ${/^[a-z][a-z_]*$/.test(bb)&&new RegExp(`\\bthe\\s+${(0,HU.i)(bb)}\\b`,"i").test(ib)?"the ":""}${bb} after `, Mb = Kb
+         Ud = `${fd} ${/^[a-z][a-z_]*$/.test(dd)&&new RegExp(`\\bthe\\s+${(0,LP.h)(dd)}\\b`,"i").test(bd)?"the ":""}${dd} after `, yd = Gd
```

#### 2170. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24796` → after: `L24796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24796) · [Before (L24796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24796)

```diff
-         db = null === Kb ? Lq(ob, lb, Wb) : null !== (Yb = ub.find((bb => Cb.some((ub => Gq(ub, bb)))))) && void 0 !== Yb ? Yb : null;
+         qd = null === Gd ? gE(ed, Id, vd) : null !== (gd = Jd.find((dd => xd.some((Jd => PE(Jd, dd)))))) && void 0 !== gd ? gd : null;
```

#### 2171. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24799-L24801` → after: `L24799-L24801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24799-L24801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24799-L24801) · [Before (L24799-L24801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24799-L24801)

```diff
-         jb = /[_:]/.test(db.to.plain) ? `\`${db.step.to}\`` : db.to.plain,
-         nb = `${Aq(oq(void 0,void 0,Zb),Bb)} ${null===rb?jb:lq(db.to,rb)}`,
-         Db = Xb - (null !== (Sb = null === Kb || void 0 === Kb || null === (ab = Kb[1]) || void 0 === ab ? void 0 : ab.length) && void 0 !== Sb ? Sb : 0);
+         sd = /[_:]/.test(qd.to.plain) ? `\`${qd.step.to}\`` : qd.to.plain,
+         ad = `${IE(RE(void 0,void 0,Qd),pd)} ${null===Bd?sd:GE(qd.to,Bd)}`,
+         Md = Ld - (null !== (Cd = null === Gd || void 0 === Gd || null === (Kd = Gd[1]) || void 0 === Kd ? void 0 : Kd.length) && void 0 !== Cd ? Cd : 0);
```

#### 2172. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24838` → after: `L24838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24838) · [Before (L24838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24838)

```diff
-         Hb = nq.test((0, wU.v)((0, wU.v)(Yb, Ob.to.anywhere, IP, PP), Ob.from.anywhere, IP, PP));
+         od = aE.test((0, OP.s)((0, OP.s)(gd, Nd.to.anywhere, TT, ET), Nd.from.anywhere, TT, ET));
```

#### 2173. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24862` → after: `L24862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24862) · [Before (L24862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24862)

```diff
-   return `${ub[1]}${hb.charAt(0).toUpperCase()}${hb.slice(1)}`
+   return `${Jd[1]}${kd.charAt(0).toUpperCase()}${kd.slice(1)}`
```

#### 2174. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24891` → after: `L24891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24891) · [Before (L24891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24891)

```diff
-           hb.push(`- ${bb.join(" ")}`), ub++
+           kd.push(`- ${dd.join(" ")}`), Jd++
```

#### 2175. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24900` → after: `L24900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24900) · [Before (L24900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24900)

```diff
-     layout: 0 === ub ? bb : {
+     layout: 0 === Jd ? dd : {
```

#### 2176. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24913` → after: `L24913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24913) · [Before (L24913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24913)

```diff
-       markdown: `${hb.join("\n")}${ub}${bb.markdown}`.trim()
+       markdown: `${kd.join("\n")}${Jd}${dd.markdown}`.trim()
```

#### 2177. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24940` → after: `L24940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24940) · [Before (L24940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24940)

```diff
-   const ub = (0, HU.m)(bb, Jq - 1),
+   const Jd = (0, LP.o)(dd, XE - 1),
```

#### 2178. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24942` → after: `L24942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24942) · [Before (L24942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24942)

```diff
-   return `${(hb>Jq/2?ub.slice(0,hb):ub).replace(/[\s,.;:!?-]+$/,"")}\u2026`
+   return `${(kd>XE/2?Jd.slice(0,kd):Jd).replace(/[\s,.;:!?-]+$/,"")}\u2026`
```

#### 2179. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24966` → after: `L24966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24966) · [Before (L24966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24966)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:(?:at|on|for|in|during)\s+(?:the\s+(?:start|beginning)\s+of\s+)?|(?:when|as)\s+)wave(?:_start)?\s*:?\s*(\d{1,3})${sq}(?:\s+(?:starts|begins|start|begin))?|(?:when|as)\s+(?:a|each|every|the)\s+(?:new\s+)?wave\s+(?:starts|begin … [truncated]
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:(?:at|on|for|in|during)\s+(?:the\s+(?:start|beginning)\s+of\s+)?|(?:when|as)\s+)wave(?:_start)?\s*:?\s*(\d{1,3})${UE}(?:\s+(?:starts|begins|start|begin))?|(?:when|as)\s+(?:a|each|every|the)\s+(?:new\s+)?wave\s+(?:starts|begin … [truncated]
```

#### 2180. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24978` → after: `L24978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24978) · [Before (L24978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24978)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:at|on|after|upon)\s+(?:reaching\s+|saving\s+)?|when\s+${Nq}?(?:reach(?:es)?|saves?|gets?\s+to)\s+)(?:the\s+)?checkpoint\s*:?\s*(\d{1,3})${sq}(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:at|on|after|upon)\s+(?:reaching\s+|saving\s+)?|when\s+${nE}?(?:reach(?:es)?|saves?|gets?\s+to)\s+)(?:the\s+)?checkpoint\s*:?\s*(\d{1,3})${UE}(?!\w)\s*`, "i"),
```

#### 2181. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L24990` → after: `L24990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR24990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L24990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L24990) · [Before (L24990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L24990)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Nq}(?:dies|die)|(?:on|after|upon)\s+(?:each\s+|every\s+|a\s+|their\s+)?death|after\s+(?:they\s+)?(?:die|dying)|each\s+time\s+${Nq}dies?)(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${nE}(?:dies|die)|(?:on|after|upon)\s+(?:each\s+|every\s+|a\s+|their\s+)?death|after\s+(?:they\s+)?(?:die|dying)|each\s+time\s+${nE}dies?)(?!\w)\s*`, "i"),
```

#### 2182. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25003` → after: `L25003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25003) · [Before (L25003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25003)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:on|after|for)\s+(?:each|every|a)\s+kill|when\s+${Nq}(?:gets?\s+a\s+kill|kills?\s+(?:someone|another\s+player|a\s+player)))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:(?:on|after|for)\s+(?:each|every|a)\s+kill|when\s+${nE}(?:gets?\s+a\s+kill|kills?\s+(?:someone|another\s+player|a\s+player)))(?!\w)\s*`, "i"),
```

#### 2183. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25015` → after: `L25015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25015) · [Before (L25015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25015)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Nq}(?:wins?|finish(?:es)?|escapes?)|(?:on|after|at)\s+(?:the\s+)?(?:win|finish(?:\s+line)?|victory))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${nE}(?:wins?|finish(?:es)?|escapes?)|(?:on|after|at)\s+(?:the\s+)?(?:win|finish(?:\s+line)?|victory))(?!\w)\s*`, "i"),
```

#### 2184. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25027` → after: `L25027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25027) · [Before (L25027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25027)

```diff
-   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${Nq}(?:buys?|purchases?)\s+(?:something|anything|an\s+item)|(?:on|after)\s+(?:each\s+|every\s+|a\s+)?(?:purchase|buying))(?!\w)\s*`, "i"),
+   ideaPlace: new RegExp(String.raw`^(?:right\s+)?(?:when\s+${nE}(?:buys?|purchases?)\s+(?:something|anything|an\s+item)|(?:on|after)\s+(?:each\s+|every\s+|a\s+)?(?:purchase|buying))(?!\w)\s*`, "i"),
```

#### 2185. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25037` → after: `L25037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25037) · [Before (L25037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25037)

```diff
-   return /[|&?=<>!,]/.test(ub) ? `(${ub})` : ub
+   return /[|&?=<>!,]/.test(Jd) ? `(${Jd})` : Jd
```

#### 2186. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25043` → after: `L25043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25043) · [Before (L25043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25043)

```diff
-   return null !== (ub = null !== (hb = null === (Bb = /^(.+)\.toString\(\)$/.exec(Gb)) || void 0 === Bb ? void 0 : Bb[1]) && void 0 !== hb ? hb : null === (Ob = /^String\((.+)\)$/.exec(Gb)) || void 0 === Ob ? void 0 : Ob[1]) && void 0 !== ub ? ub : bb
+   return null !== (Jd = null !== (kd = null === (pd = /^(.+)\.toString\(\)$/.exec(Wd)) || void 0 === pd ? void 0 : pd[1]) && void 0 !== kd ? kd : null === (Nd = /^String\((.+)\)$/.exec(Wd)) || void 0 === Nd ? void 0 : Nd[1]) && void 0 !== Jd ? Jd : dd
```

#### 2187. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25053` → after: `L25053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25053) · [Before (L25053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25053)

```diff
-     return "literal" in hb && new RegExp(String.raw`\b${ub}\s*[:#]?\s*$`, "i").test(hb.literal) && void 0 !== Ob && "code" in Ob
+     return "literal" in kd && new RegExp(String.raw`\b${Jd}\s*[:#]?\s*$`, "i").test(kd.literal) && void 0 !== Nd && "code" in Nd
```

#### 2188. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25078` → after: `L25078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25078) · [Before (L25078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25078)

```diff
-   if (Ce(Ob) && /\p{L}{2}/u.test(Ob)) return `"${Mq(Ob)}"`;
+   if (vX(Nd) && /\p{L}{2}/u.test(Nd)) return `"${yE(Nd)}"`;
```

#### 2189. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25082` → after: `L25082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25082) · [Before (L25082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25082)

```diff
-   }(Gb) ? `\`${Gb}\`` : null
+   }(Wd) ? `\`${Wd}\`` : null
```

#### 2190. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25087` → after: `L25087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25087) · [Before (L25087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25087)

```diff
-   const Ob = (null !== (Bb = bb.messages) && void 0 !== Bb ? Bb : []).filter((bb => ub.isMessage(bb) && (null === hb || mq(bb.where).includes(hb)))),
+   const Nd = (null !== (pd = dd.messages) && void 0 !== pd ? pd : []).filter((dd => Jd.isMessage(dd) && (null === kd || DE(dd.where).includes(kd)))),
```

#### 2191. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25109` → after: `L25109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25109) · [Before (L25109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25109)

```diff
-                   '"' === Ub || "'" === Ub ? Bb = Ub : "([{".includes(Ub) ? hb++ : ")]}".includes(Ub) ? hb-- : "+" === Ub && 0 === hb && (ub.push(bb.slice(Ob, Gb).trim()), Ob = Gb + 1)
+                   '"' === Pd || "'" === Pd ? pd = Pd : "([{".includes(Pd) ? kd++ : ")]}".includes(Pd) ? kd-- : "+" === Pd && 0 === kd && (Jd.push(dd.slice(Nd, Wd).trim()), Nd = Wd + 1)
```

#### 2192. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25112` → after: `L25112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25112) · [Before (L25112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25112)

```diff
-               return ub.push(bb.slice(Ob).trim()), ub.every((bb => "" !== bb)) ? ub : null
+               return Jd.push(dd.slice(Nd).trim()), Jd.every((dd => "" !== dd)) ? Jd : null
```

#### 2193. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25120-L25121` → after: `L25120-L25121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25120-L25121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25120-L25121) · [Before (L25120-L25121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25120-L25121)

```diff
-             }))) && void 0 !== ub ? ub : null
-           }(null !== (hb = null === Bb || void 0 === Bb ? void 0 : Bb[1]) && void 0 !== hb ? hb : ub);
+             }))) && void 0 !== Jd ? Jd : null
+           }(null !== (kd = null === pd || void 0 === pd ? void 0 : pd[1]) && void 0 !== kd ? kd : Jd);
```

#### 2194. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25133` → after: `L25133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25133) · [Before (L25133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25133)

```diff
-       } = Ub[0], ab = Bb.indexOf(Lb, Ob[0].length), Hb = null !== (ub = null === (hb = /["']/.exec(Lb)) || void 0 === hb ? void 0 : hb[0]) && void 0 !== ub ? ub : '"';
+       } = Pd[0], Kd = pd.indexOf(Zd, Nd[0].length), od = null !== (Jd = null === (kd = /["']/.exec(Zd)) || void 0 === kd ? void 0 : kd[0]) && void 0 !== Jd ? Jd : '"';
```

#### 2195. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25152` → after: `L25152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25152) · [Before (L25152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25152)

```diff
-   return new Set([...bb.callbacks, ...null !== (ub = bb.functions) && void 0 !== ub ? ub : []].map((bb => {
+   return new Set([...dd.callbacks, ...null !== (Jd = dd.functions) && void 0 !== Jd ? Jd : []].map((dd => {
```

#### 2196. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25167` → after: `L25167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25167) · [Before (L25167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25167)

```diff
-   if (null === Bb || null === Ob || HN.test(null !== (hb = Ob[1]) && void 0 !== hb ? hb : "") || Rq.test(Bb.text)) return null;
+   if (null === pd || null === Nd || Kf.test(null !== (kd = Nd[1]) && void 0 !== kd ? kd : "") || dc.test(pd.text)) return null;
```

#### 2197. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25182` → after: `L25182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25182) · [Before (L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25182)

```diff
-       const Ob = null !== (ub = null === (hb = bb.ideaPlace) || void 0 === hb ? void 0 : hb.exec(Ub)) && void 0 !== ub ? ub : null;
+       const Nd = null !== (Jd = null === (kd = dd.ideaPlace) || void 0 === kd ? void 0 : kd.exec(Pd)) && void 0 !== Jd ? Jd : null;
```

#### 2198. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25185` → after: `L25185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25185) · [Before (L25185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25185)

```diff
-         number: null !== (Bb = Ob[1]) && void 0 !== Bb ? Bb : null,
+         number: null !== (pd = Nd[1]) && void 0 !== pd ? pd : null,
```

#### 2199. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25203-L25205` → after: `L25203-L25205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25203-L25205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25203-L25205) · [Before (L25203-L25205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25203-L25205)

```diff
-   const pb = null === wb ? "" : `at ${Hb.numberWord} ${wb} `,
-     ob = `hange your ${Hb.noun} message (${Xb}) so ${pb}it also ${Sb.verb} ${Sb.after}`;
-   return `${Bb.head}${/^[A-Z]/.test(Bb.text)?"C":"c"}${ob}`
+   const Od = null === ld ? "" : `at ${od.numberWord} ${ld} `,
+     ed = `hange your ${od.noun} message (${Ld}) so ${Od}it also ${Cd.verb} ${Cd.after}`;
+   return `${pd.head}${/^[A-Z]/.test(pd.text)?"C":"c"}${ed}`
```

#### 2200. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25265` → after: `L25265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25265) · [Before (L25265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25265)

```diff
-         player: "broadcastMessage" === Gb[3] ? null : null !== (ub = Ub[0]) && void 0 !== ub ? ub : null,
+         player: "broadcastMessage" === Wd[3] ? null : null !== (Jd = Pd[0]) && void 0 !== Jd ? Jd : null,
```

#### 2201. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25267` → after: `L25267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25267) · [Before (L25267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25267)

```diff
-         condition: null !== (hb = Gb[2]) && void 0 !== hb ? hb : null,
+         condition: null !== (kd = Wd[2]) && void 0 !== kd ? kd : null,
```

#### 2202. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25276-L25277` → after: `L25276-L25277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25276-L25277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25276-L25277) · [Before (L25276-L25277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25276-L25277)

```diff
-       const Bb = null === bb.mention ? "join" === bb.kind && "onPlayerJoin" === pb : bb.mention.test(ob),
-         Ob = (null !== (hb = ub.messages) && void 0 !== hb ? hb : []).filter((ub => bb.isMessage(ub) && mq(ub.where).includes(pb)));
+       const pd = null === dd.mention ? "join" === dd.kind && "onPlayerJoin" === Od : dd.mention.test(ed),
+         Nd = (null !== (kd = Jd.messages) && void 0 !== kd ? kd : []).filter((Jd => dd.isMessage(Jd) && DE(Jd.where).includes(Od)));
```

#### 2203. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25301-L25302` → after: `L25301-L25302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25301-L25302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25301-L25302) · [Before (L25301-L25302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25301-L25302)

```diff
-     nb = null !== Kb.numberWord && new RegExp(String.raw`\b(?:each|every|all)\s+(?:new\s+)?${Kb.numberWord}s?\b`, "i").test(ob),
-     Db = null === Kb.numberWord || nb ? new Set : new Set((0, HU.o)(ob).filter((bb => !/\d\s*%/.test(bb))).flatMap((bb => [...bb.matchAll(new RegExp(String.raw`\b${Kb.numberWord}\s*:?\s*(\d{1,3})\b${sq}`, "gi"))].map((bb => bb[1])))));
+     ad = null !== Gd.numberWord && new RegExp(String.raw`\b(?:each|every|all)\s+(?:new\s+)?${Gd.numberWord}s?\b`, "i").test(ed),
+     Md = null === Gd.numberWord || ad ? new Set : new Set((0, LP.q)(ed).filter((dd => !/\d\s*%/.test(dd))).flatMap((dd => [...dd.matchAll(new RegExp(String.raw`\b${Gd.numberWord}\s*:?\s*(\d{1,3})\b${UE}`, "gi"))].map((dd => dd[1])))));
```

#### 2204. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25304` → after: `L25304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25304) · [Before (L25304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25304)

```diff
-   const xb = null !== (hb = null === jb || void 0 === jb ? void 0 : jb[2]) && void 0 !== hb ? hb : 1 === Db.size ? [...Db][0] : null;
+   const Fd = null !== (kd = null === sd || void 0 === sd ? void 0 : sd[2]) && void 0 !== kd ? kd : 1 === Md.size ? [...Md][0] : null;
```

#### 2205. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25313` → after: `L25313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25313) · [Before (L25313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25313)

```diff
-   })) && OE.test(bb), tb = null !== (Bb = Kb.mention) && void 0 !== Bb ? Bb : /\bjoin(?:s|ed|ing)?\b|\bonPlayerJoin\b/i;
+   })) && Wc.test(dd), jd = null !== (pd = Gd.mention) && void 0 !== pd ? pd : /\bjoin(?:s|ed|ing)?\b|\bonPlayerJoin\b/i;
```

#### 2206. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25317-L25319` → after: `L25317-L25319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25317-L25319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25317-L25319) · [Before (L25317-L25319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25317-L25319)

```diff
-         hb = null === ub ? bb : bb.slice(ub[0].length),
-         Bb = (null === ub ? (0, wU.z)(hb, /\s+(?=[A-Z`"])/g, (0, wU.r)(".!?")) : [hb]).some((bb => {
-           const ub = /^(?:at|in|inside)\s+(?:that|this|the\s+same)\b/i.test(bb) ? `${Jb} ${bb}` : bb;
+         kd = null === Jd ? dd : dd.slice(Jd[0].length),
+         pd = (null === Jd ? (0, OP.u)(kd, /\s+(?=[A-Z`"])/g, (0, OP.r)(".!?")) : [kd]).some((dd => {
+           const Jd = /^(?:at|in|inside)\s+(?:that|this|the\s+same)\b/i.test(dd) ? `${Xd} ${dd}` : dd;
```

#### 2207. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25333` → after: `L25333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25333) · [Before (L25333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25333)

```diff
-           literal: `${Bb}${/[.!?]$/.test(Bb)||""===Bb?" ":". "}${ub}`
+           literal: `${pd}${/[.!?]$/.test(pd)||""===pd?" ":". "}${Jd}`
```

#### 2208. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25337` → after: `L25337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25337) · [Before (L25337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25337)

```diff
-         literal: `. ${ub}`
+         literal: `. ${Jd}`
```

#### 2209. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25348` → after: `L25348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25348) · [Before (L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25348)

```diff
-       return hb.map((bb => "literal" in bb ? (0, HU.V)(bb.literal, ub) : bb.code)).join(" + ")
+       return kd.map((dd => "literal" in dd ? (0, LP.R)(dd.literal, Jd) : dd.code)).join(" + ")
```

#### 2210. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25350-L25351` → after: `L25350-L25351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25350-L25351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25350-L25351) · [Before (L25350-L25351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25350-L25351)

```diff
-     mb = `${gb.line.slice(0,gb.start)}${gb.isList?`[${Mb}]`:Mb}${gb.line.slice(gb.end)}`,
-     Ib = null === xb ? Zb.map((bb => bb === Xb.line ? `${Xb.indent}${mb}` : bb)) : [`${Xb.indent}if (${null!==(Ob=null===(Gb=Xb.condition)||void 0===Gb?void 0:Gb.trim())&&void 0!==Ob?Ob:`${qq(Eq(rb))} === ${xb}`}) ${mb}`, `${Xb.indent}else ${gb.line}`],
+     Dd = `${md.line.slice(0,md.start)}${md.isList?`[${yd}]`:yd}${md.line.slice(md.end)}`,
+     Td = null === Fd ? Qd.map((dd => dd === Ld.line ? `${Ld.indent}${Dd}` : dd)) : [`${Ld.indent}if (${null!==(Nd=null===(Wd=Ld.condition)||void 0===Wd?void 0:Wd.trim())&&void 0!==Nd?Nd:`${cE(hE(Bd))} === ${Fd}`}) ${Dd}`, `${Ld.indent}else ${md.line}`],
```

#### 2211. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25353` → after: `L25353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25353) · [Before (L25353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25353)

```diff
-     qb = eb ? `Change your ${Kb.noun} message (${zb}) to "${Xb.words}"${Pb}` : `Change your ${Kb.noun} message (${zb}) so ${null===xb?"":`at ${Kb.numberWord} ${xb} `}it also says "${Xb.words}"${Pb}`,
+     cd = fd ? `Change your ${Gd.noun} message (${Yd}) to "${Ld.words}"${Ed}` : `Change your ${Gd.noun} message (${Yd}) so ${null===Fd?"":`at ${Gd.numberWord} ${Fd} `}it also says "${Ld.words}"${Ed}`,
```

#### 2212. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25372` → after: `L25372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25372) · [Before (L25372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25372)

```diff
-   const Bb = null !== (hb = null === ub || void 0 === ub ? void 0 : ub.messages) && void 0 !== hb ? hb : [];
+   const pd = null !== (kd = null === Jd || void 0 === Jd ? void 0 : Jd.messages) && void 0 !== kd ? kd : [];
```

#### 2213. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25397` → after: `L25397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25397) · [Before (L25397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25397)

```diff
-     return aE(null !== Ob && void 0 !== Ob ? Ob : Gb, void 0 === Ub ? Yb ? "players coming back" : "keeping players" : Yb ? "how many players come back" : "how many players stay")
+     return oc(null !== Nd && void 0 !== Nd ? Nd : Wd, void 0 === Pd ? gd ? "players coming back" : "keeping players" : gd ? "how many players come back" : "how many players stay")
```

#### 2214. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25411-L25412` → after: `L25411-L25412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25411-L25412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25411-L25412) · [Before (L25411-L25412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25411-L25412)

```diff
-       const Ob = null !== (hb = bb.match(XE)) && void 0 !== hb ? hb : [],
-         Gb = null !== (Bb = ub.match(XE)) && void 0 !== Bb ? Bb : [],
+       const Nd = null !== (kd = dd.match(Oc)) && void 0 !== kd ? kd : [],
+         Wd = null !== (pd = Jd.match(Oc)) && void 0 !== pd ? pd : [],
```

#### 2215. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25425` → after: `L25425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25425) · [Before (L25425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25425)

```diff
-       return "" === Yb ? Lb : [...Lb, Yb]
+       return "" === gd ? Zd : [...Zd, gd]
```

#### 2216. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25450` → after: `L25450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25450) · [Before (L25450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25450)

```diff
-       Ob.set(ab.name, (null !== (Gb = Ob.get(ab.name)) && void 0 !== Gb ? Gb : 0) + 1)
+       Nd.set(Kd.name, (null !== (Wd = Nd.get(Kd.name)) && void 0 !== Wd ? Wd : 0) + 1)
```

#### 2217. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25457-L25459` → after: `L25457-L25459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25457-L25459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25457-L25459) · [Before (L25457-L25459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25457-L25459)

```diff
-         Hb = (0, HU.z)(ab.name),
-         wb = null !== (Ub = ab.usedIn) && void 0 !== Ub ? Ub : "",
-         Zb = void 0 === Gb ? null : null !== (Lb = Pw(Gb)) && void 0 !== Lb ? Lb : null;
+         od = (0, LP.x)(Kd.name),
+         ld = null !== (Pd = Kd.usedIn) && void 0 !== Pd ? Pd : "",
+         Qd = void 0 === Wd ? null : null !== (Zd = ul(Wd)) && void 0 !== Zd ? Zd : null;
```

#### 2218. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25466` → after: `L25466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25466) · [Before (L25466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25466)

```diff
-         value: null !== (Yb = null === Gb || void 0 === Gb ? void 0 : Gb.value) && void 0 !== Yb ? Yb : bb,
+         value: null !== (gd = null === Wd || void 0 === Wd ? void 0 : Wd.value) && void 0 !== gd ? gd : dd,
```

#### 2219. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25468` → after: `L25468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25468) · [Before (L25468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25468)

```diff
-         codeKind: null === pb ? Zb : null,
+         codeKind: null === Od ? Qd : null,
```

#### 2220. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25470` → after: `L25470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25470) · [Before (L25470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25470)

```diff
-         hazard: null !== (Sb = null === pb || void 0 === pb ? void 0 : pb.hazard) && void 0 !== Sb ? Sb : null,
+         hazard: null !== (Cd = null === Od || void 0 === Od ? void 0 : Od.hazard) && void 0 !== Cd ? Cd : null,
```

#### 2221. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25478` → after: `L25478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25478) · [Before (L25478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25478)

```diff
-   }(Gb), pb), lb = KZ(mx(Gb), pb), Kb = null !== (hb = null === Ub || void 0 === Ub ? void 0 : Ub.places) && void 0 !== hb ? hb : ZE, Wb = null !== (Bb = null === Yb || void 0 === Yb ? void 0 : Yb.grounds) && void 0 !== Bb ? Bb : null, Cb = (() => {
+   }(Wd), Od), Id = BQ(DM(Wd), Od), Gd = null !== (kd = null === Pd || void 0 === Pd ? void 0 : Pd.places) && void 0 !== kd ? kd : Lc, vd = null !== (pd = null === gd || void 0 === gd ? void 0 : gd.grounds) && void 0 !== pd ? pd : null, xd = (() => {
```

#### 2222. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25499` → after: `L25499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25499) · [Before (L25499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25499)

```diff
-             const ub = (null !== (Ob = Bb.get(bb.name)) && void 0 !== Ob ? Ob : []).filter((bb => JSON.stringify(bb.selection) !== JSON.stringify(ob.selection)));
+             const Jd = (null !== (Nd = pd.get(dd.name)) && void 0 !== Nd ? Nd : []).filter((dd => JSON.stringify(dd.selection) !== JSON.stringify(ed.selection)));
```

#### 2223. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25511` → after: `L25511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25511) · [Before (L25511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25511)

```diff
-         const [Ub, [Lb]] = Gb[0], Yb = new RegExp(`${(0,HU.i)(Ub)}(?![\\w$])`);
+         const [Pd, [Zd]] = Wd[0], gd = new RegExp(`${(0,LP.h)(Pd)}(?![\\w$])`);
```

#### 2224. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25530` → after: `L25530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25530) · [Before (L25530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25530)

```diff
-           const ub = null !== (wb = null === (Zb = Fl.exec(Ab)) || void 0 === Zb ? void 0 : Zb[0].length) && void 0 !== wb ? wb : 0,
+           const Jd = null !== (ld = null === (Qd = tI.exec(Rd)) || void 0 === Qd ? void 0 : Qd[0].length) && void 0 !== ld ? ld : 0,
```

#### 2225. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25538` → after: `L25538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25538) · [Before (L25538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25538)

```diff
-             Gb = Ob + (null !== (Xb = null === (pb = hx.exec(Ab.slice(Ob))) || void 0 === pb ? void 0 : pb[0].length) && void 0 !== Xb ? Xb : 0),
+             Wd = Nd + (null !== (Ld = null === (Od = pM.exec(Rd.slice(Nd))) || void 0 === Od ? void 0 : Od[0].length) && void 0 !== Ld ? Ld : 0),
```

#### 2226. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25540-L25541` → after: `L25540-L25541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25540-L25541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25540-L25541) · [Before (L25540-L25541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25540-L25541)

```diff
-             lb = `${Bx(Lb)} [[Heatmap]].`;
-           return Hb[ob] = `${Ab.slice(0,Gb)}${Ub} ${lb}${Ab.slice(Gb)}`, {
+             Id = `${NM(Zd)} [[Heatmap]].`;
+           return od[ed] = `${Rd.slice(0,Wd)}${Pd} ${Id}${Rd.slice(Wd)}`, {
```

#### 2227. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25557` → after: `L25557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25557) · [Before (L25557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25557)

```diff
-       }(Yb.markdown, [...null !== wb && void 0 !== wb ? wb : [], ...null !== Zb && void 0 !== Zb ? Zb : []], Gb);
+       }(gd.markdown, [...null !== ld && void 0 !== ld ? ld : [], ...null !== Qd && void 0 !== Qd ? Qd : []], Wd);
```

#### 2228. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25565-L25567` → after: `L25565-L25567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25565-L25567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25565-L25567) · [Before (L25565-L25567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25565-L25567)

```diff
-     const bb = [...(null !== Hb && void 0 !== Hb ? Hb : []).flatMap((bb => [bb.reason, bb.typical])), ...Cb.repairs.map((bb => bb.to))];
-     return Ul(Sb, null === ab ? bb : [ab.change, ...bb])
-   })(), rb = new Set((null !== Hb && void 0 !== Hb ? Hb : []).flatMap((bb => "good" === bb.verdict ? [bb.key] : []))), jb = ko(Lb), nb = aD(Wb, Gb), Db = Cb.markdown, xb = null === Yb ? Db : gI(Db, Yb, rb, "young" === Lb, db).markdown, zb = jb ? Mn(xb, (gb = Ub, null === gb ? []  … [truncated]
+     const dd = [...(null !== od && void 0 !== od ? od : []).flatMap((dd => [dd.reason, dd.typical])), ...xd.repairs.map((dd => dd.to))];
+     return ZI(Cd, null === Kd ? dd : [Kd.change, ...dd])
+   })(), Bd = new Set((null !== od && void 0 !== od ? od : []).flatMap((dd => "good" === dd.verdict ? [dd.key] : []))), sd = ze(Zd), ad = oa(vd, Wd), Md = xd.markdown, Fd = null === gd ? Md : mD(Md, gd, Bd, "young" === Zd, qd).markdown, Yd = sd ? Ui(Fd, (md = Pd, null === md ? []  … [truncated]
```

#### 2229. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25586` → after: `L25586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25586) · [Before (L25586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25586)

```diff
-         markdown: 0 === Ob.length ? bb : Gb,
+         markdown: 0 === Nd.length ? dd : Wd,
```

#### 2230. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25615` → after: `L25615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25615) · [Before (L25615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25615)

```diff
-         return `${bb.slice(0,Ob.end)}${Ub}${bb.slice(Gb)}`
+         return `${dd.slice(0,Nd.end)}${Pd}${dd.slice(Wd)}`
```

#### 2231. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25653` → after: `L25653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25653) · [Before (L25653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25653)

```diff
-         markdown: 0 === ub.length ? bb : hb,
+         markdown: 0 === Jd.length ? dd : kd,
```

#### 2232. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25670` → after: `L25670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25670) · [Before (L25670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25670)

```diff
-           const ub = `the ${bb}`;
+           const Jd = `the ${dd}`;
```

#### 2233. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25681` → after: `L25681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25681) · [Before (L25681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25681)

```diff
-         of hb) Ob = (0, wU.v)(Ob, new RegExp(`(${(0,HU.i)(Gb)})(?![\\w-])`, "gi"), (0, wU.j)("\\w-"), (bb => {
+         of kd) Nd = (0, OP.s)(Nd, new RegExp(`(${(0,LP.h)(Wd)})(?![\\w-])`, "gi"), (0, OP.k)("\\w-"), (dd => {
```

#### 2234. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25683` → after: `L25683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25683) · [Before (L25683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25683)

```diff
-         return /^T/.test(ub) ? `T${Ub.slice(1)}` : Ub
+         return /^T/.test(Jd) ? `T${Pd.slice(1)}` : Pd
```

#### 2235. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25690` → after: `L25690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25690) · [Before (L25690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25690)

```diff
-     Nb = [...null !== wb && void 0 !== wb ? wb : [], ...null !== Zb && void 0 !== Zb ? Zb : []].flatMap((bb => "deaths" === bb.kind ? [bb.square] : [])),
+     nd = [...null !== ld && void 0 !== ld ? ld : [], ...null !== Qd && void 0 !== Qd ? Qd : []].flatMap((dd => "deaths" === dd.kind ? [dd.square] : [])),
```

#### 2236. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25695` → after: `L25695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25695) · [Before (L25695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25695)

```diff
-         HZ: []
+         qQ: []
```

#### 2237. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25721` → after: `L25721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25721) · [Before (L25721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25721)

```diff
-         HZ: []
+         qQ: []
```

#### 2238. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25724` → after: `L25724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25724) · [Before (L25724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25724)

```diff
-         HZ: Bb
+         qQ: pd
```

#### 2239. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25748` → after: `L25748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25748) · [Before (L25748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25748)

```diff
-         Lb = `${null!==hb&&void 0!==hb?hb:""}\n${Ub}\n${Ub.replace(/([a-z])([A-Z])/g,"$1 $2")}`,
+         Zd = `${null!==kd&&void 0!==kd?kd:""}\n${Pd}\n${Pd.replace(/([a-z])([A-Z])/g,"$1 $2")}`,
```

#### 2240. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25757` → after: `L25757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25757) · [Before (L25757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25757)

```diff
-     }(Mb, Gb, null !== (Ob = null === nb || void 0 === nb ? void 0 : nb.text) && void 0 !== Ob ? Ob : null, mb).markdown,
+     }(yd, Wd, null !== (Nd = null === ad || void 0 === ad ? void 0 : ad.text) && void 0 !== Nd ? Nd : null, Dd).markdown,
```

#### 2241. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25761` → after: `L25761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25761) · [Before (L25761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25761)

```diff
-           if (null === ub || void 0 === ub || bb.length > HU.r || 0 === (null !== (hb = ub.messages) && void 0 !== hb ? hb : []).length) return {
+           if (null === Jd || void 0 === Jd || dd.length > LP.r || 0 === (null !== (kd = Jd.messages) && void 0 !== kd ? kd : []).length) return {
```

#### 2242. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25799` → after: `L25799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25799) · [Before (L25799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25799)

```diff
-         Ob = null === Bb || null === Gb ? Bb : {
+         Nd = null === pd || null === Wd ? pd : {
```

#### 2243. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25824` → after: `L25824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25824) · [Before (L25824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25824)

```diff
-           return null === bb || 0 === hb.length ? bb : {
+           return null === dd || 0 === kd.length ? dd : {
```

#### 2244. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L25828` → after: `L25828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR25828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L25828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/103.js#L25828) · [Before (L25828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/103.js#L25828)

```diff
-         }(null !== (bb = null === Yb || void 0 === Yb ? void 0 : Yb.grounds) && void 0 !== bb ? bb : null, Cb.repairs),
+         }(null !== (dd = null === gd || void 0 === gd ? void 0 : gd.grounds) && void 0 !== dd ? dd : null, xd.repairs),
```
