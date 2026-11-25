# Changed — Bundle Modifications Report (Part 045 / 141)

- **Updated at**: `2026-11-25T09:40 JST`
- **Part**: `45 / 141` (**422** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 044](part-044.md) · [Part 046 →](part-046.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/247.js` (c6gaap.4d6587ec → igzsf.a0b73a5f · continued)

- **File**: `bundles/bloxd.io/chunks/js/247.js` (70 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f)

#### 20. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L278-L281` → after: `L278-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L278-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L278-L281) · [Before (L278-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L278-L281)

```diff
-       const [vB, kB] = (0, OB.n)(oB, GB), cB = pB(BB, IB + vB, ZB, TB + kB);
-       return null !== cB && cB.rot === oB && cB.half === OB.q[GB]
-     }
-     var HB = ZB(38466);
+       const [dt, jt] = (0, vt.l)(Dt, mt), Ht = ct(tt, et + dt, Vt, Ot + jt);
+       return null !== Ht && Ht.rot === Dt && Ht.half === vt.r[mt]
+     }
+     var It = Vt(38639);
```

#### 21. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L288` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L288) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L288)

```diff
-         return "Stairs" === (null === (IB = TB.f[BB]) || void 0 === IB ? void 0 : IB.model)
+         return "Stairs" === (null === (et = Ot.h[tt]) || void 0 === et ? void 0 : et.model)
```

#### 22. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L296-L297` → after: `L296-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L296-L297) · [Before (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L296-L297)

```diff
-           cB = GB.half === kB.e.top ? "top" : "bot";
-         return (0, TB.g)(`${TB.f[oB].meta.rootName}|meta|rot${GB.rot}|${cB}${null===vB?"":`|${vB}`}`)
+           Ht = mt.half === jt.b.top ? "top" : "bot";
+         return (0, Ot.k)(`${Ot.h[Dt].meta.rootName}|meta|rot${mt.rot}|${Ht}${null===dt?"":`|${dt}`}`)
```

#### 23. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L303` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L303) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L303)

```diff
-         } = TB.f[BB].meta;
+         } = Ot.h[tt].meta;
```

#### 24. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L338` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L338) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L338)

```diff
-         this.reshapeOffsets = oB, this.rootIds = new Set(JB.i.map((BB => (0, TB.g)(BB))))
+         this.reshapeOffsets = Dt, this.rootIds = new Set(qt.f.map((tt => (0, Ot.k)(tt))))
```

#### 25. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L342)

```diff
-         const ZB = null === (IB = TB.f[BB]) || void 0 === IB ? void 0 : IB.meta;
+         const Vt = null === (et = Ot.h[tt]) || void 0 === et ? void 0 : et.meta;
```

#### 26. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L349` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L349) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L349)

```diff
-         return TB.f[BB].meta.rootName === JB.n ? null : JB.n
+         return Ot.h[tt].meta.rootName === qt.m ? null : qt.m
```

#### 27. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L356)

```diff
-         } = TB.f[GB].meta;
+         } = Ot.h[mt].meta;
```

#### 28. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L358)

```diff
-         return JB.r[cB].forEach(((JB, GB) => {
+         return qt.u[Ht].forEach(((qt, mt) => {
```

#### 29. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L361` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L361) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L361)

```diff
-           const NB = null === (kB = TB.f[BB(IB + hB, ZB + zB, oB + FB)]) || void 0 === kB ? void 0 : kB.meta;
+           const ft = null === (jt = Ot.h[tt(et + Qt, Vt + lt, Dt + Et)]) || void 0 === jt ? void 0 : jt.meta;
```

#### 30. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L363-L365` → after: `L363-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L363-L365) · [Before (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L363-L365)

```diff
-         })), (0, TB.g)((0, JB.g)(kB, cB, nB))
-       }
-     }, ...GB.b.map((BB => new vB.d(BB))), new class {
+         })), (0, Ot.k)((0, qt.e)(jt, Ht, Xt))
+       }
+     }, ...mt.e.map((tt => new dt.b(tt))), new class {
```

#### 31. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L371)

```diff
-         return UB.has(IB) || IB === NB.g
+         return Mt.has(et) || et === ft.f
```

#### 32. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L375)

```diff
-         return WB.has(IB) || dB.has(IB) || IB === qB || IB === NB.g || void 0 !== NB.e[IB]
+         return bt.has(et) || Jt.has(et) || et === yt || et === ft.f || void 0 !== ft.c[et]
```

#### 33. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L381-L384` → after: `L381-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L381-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L381-L384) · [Before (L381-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L381-L384)

```diff
-         } = TB.f[oB].meta;
-         return vB === NB.g ? GB ? oB : function(BB, IB, ZB, JB, oB) {
-           const [GB, vB] = NB.f[oB - 1];
-           for (let kB = 1; kB <= NB.F; kB++) {
+         } = Ot.h[Dt].meta;
+         return dt === ft.f ? mt ? Dt : function(tt, et, Vt, qt, Dt) {
+           const [mt, dt] = ft.e[Dt - 1];
+           for (let jt = 1; jt <= ft.y; jt++) {
```

#### 34. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L386` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L386) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L386)

```diff
-             if (QB(hB) === NB.g && TB.f[hB].meta.rot === oB && gB(IB, ZB, JB, cB, nB)) return (0, TB.g)((0, NB.ab)(oB, !sB(hB)))
+             if (ut(Qt) === ft.f && Ot.h[Qt].meta.rot === Dt && wt(et, Vt, qt, Ht, Xt)) return (0, Ot.k)((0, ft.S)(Dt, !Kt(Qt)))
```

#### 35. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L388-L390` → after: `L388-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L388-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L388-L390) · [Before (L388-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L388-L390)

```diff
-           return (0, TB.g)((0, NB.ab)(oB, !1))
-         }(BB, IB, ZB, JB, kB) : (0, TB.g)((0, NB.N)(vB, kB, function(BB, IB, ZB, JB, oB) {
-           const [GB, vB] = NB.f[oB - 1], kB = (oB, GB) => function(BB, IB, ZB) {
+           return (0, Ot.k)((0, ft.S)(Dt, !1))
+         }(tt, et, Vt, qt, jt) : (0, Ot.k)((0, ft.D)(dt, jt, function(tt, et, Vt, qt, Dt) {
+           const [mt, dt] = ft.e[Dt - 1], jt = (Dt, mt) => function(tt, et, Vt) {
```

#### 36. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L392` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L392) · [Before (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L392)

```diff
-             const oB = null === (JB = TB.f[BB]) || void 0 === JB ? void 0 : JB.meta;
+             const Dt = null === (qt = Ot.h[tt]) || void 0 === qt ? void 0 : qt.meta;
```

#### 37. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L397` → after: `L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L397) · [Before (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L397)

```diff
-             const [kB, cB] = NB.f[oB.rot - 1];
+             const [jt, Ht] = ft.e[Dt.rot - 1];
```

#### 38. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L400-L401` → after: `L400-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L400-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L400-L401) · [Before (L400-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L400-L401)

```diff
-             const nB = TB.f[BB].name;
-             return (GB === qB ? (0, NB._)(nB, kB, cB) : GB === yB ? [(0, NB.R)(nB, kB, cB)] : []).some((BB => {
+             const Xt = Ot.h[tt].name;
+             return (mt === yt ? (0, ft.O)(Xt, jt, Ht) : mt === Nt ? [(0, ft.F)(Xt, jt, Ht)] : []).some((tt => {
```

#### 39. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L405` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L405) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L405)

```diff
-           }(BB(IB + oB, ZB, JB + GB), oB, GB), cB = BB(IB - GB, ZB, JB - vB), nB = QB(cB) === qB && TB.f[cB].meta.rot === oB, hB = 1 === NB.e[QB(BB(IB, ZB - 1, JB))] || -1 === NB.e[QB(BB(IB, ZB + 1, JB))];
+           }(tt(et + Dt, Vt, qt + mt), Dt, mt), Ht = tt(et - mt, Vt, qt - dt), Xt = ut(Ht) === yt && Ot.h[Ht].meta.rot === Dt, Qt = 1 === ft.c[ut(tt(et, Vt - 1, qt))] || -1 === ft.c[ut(tt(et, Vt + 1, qt))];
```

#### 40. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L415)

```diff
-         this.reshapeOffsets = YB, this.rootId = (0, TB.g)(OB.o)
+         this.reshapeOffsets = Wt, this.rootId = (0, Ot.k)(vt.n)
```

#### 41. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L419)

```diff
-         return (null === (IB = TB.f[BB]) || void 0 === IB ? void 0 : IB.meta.rootId) === this.rootId
+         return (null === (et = Ot.h[tt]) || void 0 === et ? void 0 : et.meta.rootId) === this.rootId
```

#### 42. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L426` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L426) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L426)

```diff
-         return (0, TB.g)((kB = vB.rot, null !== (cB = GB ? this.reshapedHalf(BB, IB, ZB, JB, vB) : this.placedHalf(BB, IB, ZB, JB, vB.rot)) ? (0, OB.b)(OB.o, kB, cB) : 1 === kB ? OB.o : `${OB.o}|meta|rot${kB}`));
+         return (0, Ot.k)((jt = dt.rot, null !== (Ht = mt ? this.reshapedHalf(tt, et, Vt, qt, dt) : this.placedHalf(tt, et, Vt, qt, dt.rot)) ? (0, vt.e)(vt.n, jt, Ht) : 1 === jt ? vt.n : `${vt.n}|meta|rot${jt}`));
```

#### 43. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L430` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L430) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L430)

```diff
-         const [oB, GB] = wB.c[JB];
+         const [Dt, mt] = ht.e[qt];
```

#### 44. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L445-L446` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L445-L446) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L445-L446)

```diff
-           const [GB, vB] = (0, OB.n)(JB.rot, oB), kB = pB(BB, IB + GB, ZB, TB + vB);
-           if (null !== kB && kB.rot === JB.rot && kB.half === OB.q[oB]) return oB
+           const [mt, dt] = (0, vt.l)(qt.rot, Dt), jt = ct(tt, et + mt, Vt, Ot + dt);
+           if (null !== jt && jt.rot === qt.rot && jt.half === vt.r[Dt]) return Dt
```

#### 45. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L450` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L450) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L450)

```diff
-     }, new HB.c];
+     }, new It.e];
```

#### 46. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L462` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L462) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L462)

```diff
-         if (TB.handles(BB)) return null !== (IB = null === (ZB = TB.placedBy) || void 0 === ZB ? void 0 : ZB.call(TB, BB)) && void 0 !== IB ? IB : null
+         if (Ot.handles(tt)) return null !== (et = null === (Vt = Ot.placedBy) || void 0 === Vt ? void 0 : Vt.call(Ot, tt)) && void 0 !== et ? et : null
```

#### 47. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L467)

```diff
-   38466: (BB, IB, ZB) => {
+   38639: (tt, et, Vt) => {
```

#### 48. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L471` → after: `L470-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L470-L471) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L471)

```diff
-       f: () => WB
+       h: () => Jt,
+       i: () => bt
```

#### 49. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L473-L480` → after: `L473-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L473-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L473-L480) · [Before (L473-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L473-L480)

```diff
-     var TB = ZB(9296),
-       JB = ZB(9316),
-       oB = ZB(9380),
-       GB = ZB(38468),
-       vB = ZB(9375);
-     const kB = (0, GB.R)("pipe"),
-       cB = (0, GB.R)("tank"),
-       nB = (0, GB.R)("port"),
+     var Ot = Vt(9425),
+       qt = Vt(9443),
+       Dt = Vt(9497),
+       mt = Vt(38641),
+       dt = Vt(9492);
+     const jt = (0, mt.N)("pipe"),
+       Ht = (0, mt.N)("tank"),
+       Xt = (0, mt.N)("port"),
```

#### 50. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L484)

```diff
-       const TB = new Set([oB.f, oB.d, hB, ...IB, ...ZB, ...BB ? [GB.j] : []]);
+       const Ot = new Set([Dt.i, Dt.e, Qt, ...et, ...Vt, ...tt ? [mt.k] : []]);
```

#### 51. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L491-L492` → after: `L491-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L491-L492) · [Before (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L491-L492)

```diff
-         water: zB(!0, ["Condenser"], ["Centrifuge", "Synthesizer", GB.e]),
-         cryo: zB(!1, [GB.e], [])
+         water: lt(!0, ["Condenser"], ["Centrifuge", "Synthesizer", mt.b]),
+         cryo: lt(!1, [mt.b], [])
```

#### 52. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L503` → after: `L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L503) · [Before (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L503)

```diff
-       qB = JB.f.map((BB => gB[BB])),
+       yt = qt.d.map((tt => wt[tt])),
```

#### 53. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L506)

```diff
-         return GB.B.findIndex((BB => {
+         return mt.u.findIndex((tt => {
```

#### 54. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L514` → after: `L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L514) · [Before (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L514)

```diff
-       const ZB = TB.f[BB],
+       const Vt = Ot.h[tt],
```

#### 55. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L518-L522` → after: `L518-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L518-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L518-L522) · [Before (L518-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L518-L522)

```diff
-       if ((0, oB.j)(JB)) return (0, GB.N)(ZB.name) === IB ? kB : null;
-       if (JB === GB.j) return cB;
-       if (JB === hB) return ZB.name.endsWith("|Water") ? nB : null;
-       const [NB, gB] = vB.f[(ZB.meta.rot || 1) - 1];
-       return (0, GB.R)(zB.makers.has(JB) ? "maker" : "user", [-NB, 0, -gB])
+       if ((0, Dt.n)(qt)) return (0, mt.K)(Vt.name) === et ? jt : null;
+       if (qt === mt.k) return Ht;
+       if (qt === Qt) return Vt.name.endsWith("|Water") ? Xt : null;
+       const [ft, wt] = dt.e[(Vt.meta.rot || 1) - 1];
+       return (0, mt.N)(lt.makers.has(qt) ? "maker" : "user", [-ft, 0, -wt])
```

#### 56. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L535)

```diff
-         return null !== WB && vB.has(null !== (hB = null === (zB = TB.f[qB]) || void 0 === zB ? void 0 : zB.meta.rootName) && void 0 !== hB ? hB : "") && !(0, GB.U)(kB, WB, yB[nB])
+         return null !== bt && dt.has(null !== (Qt = null === (lt = Ot.h[yt]) || void 0 === lt ? void 0 : lt.meta.rootName) && void 0 !== Qt ? Qt : "") && !(0, mt.O)(jt, bt, Nt[Xt])
```

#### 57. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L540-L541` → after: `L540-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L540-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L540-L541) · [Before (L540-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L540-L541)

```diff
-       const IB = TB.f[BB];
-       return IB ? (0, GB.N)(IB.name) : null
+       const et = Ot.h[tt];
+       return et ? (0, mt.K)(et.name) : null
```

#### 58. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L550-L551` → after: `L550-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L550-L551) · [Before (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L550-L551)

```diff
-             for (const ZB of [!1, !0]) CB.set((0, oB.n)(BB, IB, ZB), {
-               gF: BB,
+             for (const Vt of [!1, !0]) Ct.set((0, Dt.o)(tt, et, Vt), {
+               OE: tt,
```

#### 59. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L559-L560` → after: `L559-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L559-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L559-L560) · [Before (L559-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L559-L560)

```diff
-       length: oB.i + 1
-     }, ((BB, IB) => [(0, oB.o)(IB), IB])));
+       length: Dt.l + 1
+     }, ((tt, et) => [(0, Dt.p)(et), et])));
```

#### 60. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L567` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L567) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L567)

```diff
-         const gB = null !== (cB = null === (nB = TB.f[BB(IB + zB, ZB + FB, JB + NB)]) || void 0 === nB ? void 0 : nB.name) && void 0 !== cB ? cB : "",
+         const wt = null !== (Ht = null === (Xt = Ot.h[tt(et + lt, Vt + Et, qt + ft)]) || void 0 === Xt ? void 0 : Xt.name) && void 0 !== Ht ? Ht : "",
```

#### 61. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L569` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L569) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L569)

```diff
-         return qB ? qB.gF === oB && qB.full : (null !== (hB = function(BB) {
+         return yt ? yt.OE === Dt && yt.full : (null !== (Qt = function(tt) {
```

#### 62. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L571-L572` → after: `L571-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L571-L572) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L571-L572)

```diff
-           return null !== (IB = sB.get(BB)) && void 0 !== IB ? IB : null
-         }(gB)) && void 0 !== hB ? hB : 0) > 0
+           return null !== (et = Kt.get(tt)) && void 0 !== et ? et : null
+         }(wt)) && void 0 !== Qt ? Qt : 0) > 0
```

#### 63. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L584` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L584) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L584)

```diff
-         return NB.has(null !== (IB = null === (ZB = TB.f[BB]) || void 0 === ZB ? void 0 : ZB.meta.rootName) && void 0 !== IB ? IB : "")
+         return ft.has(null !== (et = null === (Vt = Ot.h[tt]) || void 0 === Vt ? void 0 : Vt.meta.rootName) && void 0 !== et ? et : "")
```

#### 64. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L588` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L588) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L588)

```diff
-         return (null === (IB = TB.f[BB]) || void 0 === IB ? void 0 : IB.meta.rootName) === oB.d ? oB.f : null
+         return (null === (et = Ot.h[tt]) || void 0 === et ? void 0 : et.meta.rootName) === Dt.e ? Dt.i : null
```

#### 65. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L592-L593` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L592-L593) · [Before (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L592-L593)

```diff
-         const FB = null !== (nB = null === (hB = TB.f[vB]) || void 0 === hB ? void 0 : hB.name) && void 0 !== nB ? nB : "",
-           NB = cB || FB !== oB.f ? null !== (zB = (0, GB.N)(FB)) && void 0 !== zB ? zB : "water" : function(BB, IB, ZB, TB) {
+         const Et = null !== (Xt = null === (Qt = Ot.h[dt]) || void 0 === Qt ? void 0 : Qt.name) && void 0 !== Xt ? Xt : "",
+           ft = Ht || Et !== Dt.i ? null !== (lt = (0, mt.K)(Et)) && void 0 !== lt ? lt : "water" : function(tt, et, Vt, Ot) {
```

#### 66. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L597` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L597) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L597)

```diff
-               return null !== hB && "port" !== hB.kind && (0, GB.U)(kB, hB, yB[oB])
+               return null !== Qt && "port" !== Qt.kind && (0, mt.O)(jt, Qt, Nt[Dt])
```

#### 67. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L606` → after: `L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L606) · [Before (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L606)

```diff
-               FB && (0, GB.U)(kB, FB, yB[cB]) && (oB |= 1 << cB)
+               Et && (0, mt.O)(jt, Et, Nt[Ht]) && (Dt |= 1 << Ht)
```

#### 68. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L613)

```diff
-         return (0, TB.g)((0, oB.n)(NB, gB, WB))
+         return (0, Ot.k)((0, Dt.o)(ft, wt, bt))
```

#### 69. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L617)

```diff
-   38249: (BB, IB, ZB) => {
+   38428: (tt, et, Vt) => {
```

#### 70. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L619-L620` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/247.js#L619-L620) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/247.js#L619-L620)

```diff
-       d: () => TB,
-       g: () => oB
+       b: () => Ot,
+       f: () => Dt
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/248.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/248.js` (692 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6)

#### 1. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L4)

```diff
-   39175: (BB, IB, ZB) => {
+   39316: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L12)

```diff
-   39082: (BB, IB, ZB) => {
+   39221: (tt, et, Vt) => {
```

#### 3. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L14)

```diff
-       d: () => oB
+       c: () => Dt
```

#### 4. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L16-L17` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L16-L17) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L16-L17)

```diff
-     var TB = ZB(24),
-       JB = ZB(2029);
+     var Ot = Vt(31),
+       qt = Vt(2043);
```

#### 5. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L24-L25)

```diff
-       const TB = JB.c.get("_tasks");
-       null !== TB && void 0 !== TB && TB[IB] && JB.c.apply({
+       const Ot = qt.b.get("_tasks");
+       null !== Ot && void 0 !== Ot && Ot[et] && qt.b.apply({
```

#### 6. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L35)

```diff
-     TB.l.subscribe("clientTaskProgress", (BB => {
+     Ot.j.subscribe("clientTaskProgress", (tt => {
```

#### 7. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L39)

```diff
-   39021: (BB, IB, ZB) => {
+   39152: (tt, et, Vt) => {
```

#### 8. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L41-L43` → after: `L41-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L41-L43) · [Before (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L41-L43)

```diff
-       c: () => BZ,
-       e: () => VI,
-       h: () => SI
+       d: () => eV,
+       f: () => ne,
+       g: () => tV
```

#### 9. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L45-L53` → after: `L45-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L45-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L45-L53) · [Before (L45-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L45-L53)

```diff
-     var TB = ZB(3854),
-       JB = ZB(168),
-       oB = ZB(201),
-       GB = ZB(671),
-       vB = ZB(36),
-       kB = ZB(2912),
-       cB = ZB(3911),
-       nB = ZB(3896),
-       hB = ZB(1281);
+     var Ot = Vt(3751),
+       qt = Vt(184),
+       Dt = Vt(229),
+       mt = Vt(712),
+       dt = Vt(39),
+       jt = Vt(2848),
+       Ht = Vt(3820),
+       Xt = Vt(3800),
+       Qt = Vt(1308);
```

#### 10. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L58)

```diff
-           AcB: !0
+           mXt: !0
```

#### 11. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L60-L61` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L60-L61) · [Before (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L60-L61)

```diff
-         this.callbacks = IB, this.options = ZB, this.xZB = void 0, this.sessionId = void 0, this.aY = [], this.tcB = !1, this.WN = !1, this.bcB = void 0, this.pY = 0, this.AJB = 0, this.xcB = (BB, IB) => {
-           if (this.WN) return;
+         this.callbacks = et, this.options = Vt, this.tOt = void 0, this.sessionId = void 0, this.DW = [], this.dXt = !1, this.df = !1, this.jXt = void 0, this.OW = 0, this.sqt = 0, this.HXt = (tt, et) => {
+           if (this.df) return;
```

#### 12. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L63)

```diff
-           this.tcB ? this.EcB(ZB, IB) : this.aY.push({
+           this.dXt ? this.XXt(Vt, et) : this.DW.push({
```

#### 13. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L68-L69` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L68-L69) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L68-L69)

```diff
-           this.WN || (this.WN = !0, zB.delete(this), this.aY.length = 0, this.bcB())
-         }, this.xZB = BB, this.sessionId = BB.sessionId, zB.set(this, []), this.bcB = this.DcB()
+           this.df || (this.df = !0, lt.delete(this), this.DW.length = 0, this.jXt())
+         }, this.tOt = tt, this.sessionId = tt.sessionId, lt.set(this, []), this.jXt = this.QXt()
```

#### 14. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L71-L72` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L71-L72) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L71-L72)

```diff
-       KcB(BB) {
-         this.bcB(), this.xZB = BB, this.sessionId = BB.sessionId, this.pY = 0, this.AJB = 0, this.bcB = this.DcB()
+       lXt(tt) {
+         this.jXt(), this.tOt = tt, this.sessionId = tt.sessionId, this.OW = 0, this.sqt = 0, this.jXt = this.QXt()
```

#### 15. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L75)

```diff
-         return this.AJB
+         return this.sqt
```

#### 16. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L77-L79` → after: `L77-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L77-L79) · [Before (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L77-L79)

```diff
-       DcB() {
-         const BB = this.xZB.rU("*", this.xcB);
-         return this.options.AcB && this.xZB.KU(this.dispose), BB
+       QXt() {
+         const tt = this.tOt.gM("*", this.HXt);
+         return this.options.mXt && this.tOt.eJ(this.dispose), tt
```

#### 17. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L81)

```diff
-       EcB(BB, IB) {
+       XXt(tt, et) {
```

#### 18. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L83)

```diff
-           (0, cB.sc)(BB) && (IB = (0, cB.c)(BB, nB.UN.from(IB)));
+           (0, Ht.lc)(tt) && (et = (0, Ht.e)(tt, Xt.mf.from(et)));
```

#### 19. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L86-L87` → after: `L86-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L86-L87) · [Before (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L86-L87)

```diff
-             if (this.callbacks.VcB) return void this.callbacks.VcB(BB, IB);
-             throw new Error(`No onMessage handler registered for message id ${BB}`)
+             if (this.callbacks.EXt) return void this.callbacks.EXt(tt, et);
+             throw new Error(`No onMessage handler registered for message id ${tt}`)
```

#### 20. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L91)

```diff
-           this.callbacks.ScB(`Error in onMessage ${BB} with payload ${JSON.stringify(IB)}`, ZB)
+           this.callbacks.fXt(`Error in onMessage ${tt} with payload ${JSON.stringify(et)}`, Vt)
```

#### 21. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L93)

```diff
-           this.pY++
+           this.OW++
```

#### 22. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L96` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L96) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L96)

```diff
-       BnB() {
+       wXt() {
```

#### 23. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L101-L103` → after: `L101-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L101-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L101-L103) · [Before (L101-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L101-L103)

```diff
-           of this.aY) {
-           if (this.WN) break;
-           this.EcB(BB, IB)
+           of this.DW) {
+           if (this.df) break;
+           this.XXt(tt, et)
```

#### 24. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L105)

```diff
-         this.aY.length = 0
+         this.DW.length = 0
```

#### 25. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L108)

```diff
-         return this.WN
+         return this.df
```

#### 26. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L110-L111` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L110-L111) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L110-L111)

```diff
-       InB() {
-         if (this.tcB || this.WN) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
+       yXt() {
+         if (this.dXt || this.df) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
```

#### 27. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L113-L115` → after: `L113-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L113-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L113-L115) · [Before (L113-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L113-L115)

```diff
-           rU: (BB, IB) => {
-             if (this.tcB || this.WN) throw new Error("Trying to call onMessage after registration finished");
-             this.rU(BB, IB)
+           gM: (tt, et) => {
+             if (this.dXt || this.df) throw new Error("Trying to call onMessage after registration finished");
+             this.gM(tt, et)
```

#### 28. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L118-L119` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L118-L119) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L118-L119)

```diff
-             if (this.WN) throw new Error("Cannot finish message registration after disposal");
-             this.tcB = !0, this.BnB()
+             if (this.df) throw new Error("Cannot finish message registration after disposal");
+             this.dXt = !0, this.wXt()
```

#### 29. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L125)

```diff
-         null === (ZB = (TB = this.callbacks).ZnB) || void 0 === ZB || ZB.call(TB);
+         null === (Vt = (Ot = this.callbacks).NXt) || void 0 === Vt || Vt.call(Ot);
```

#### 30. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L131` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L131) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L131)

```diff
-         this.TnB(), (0, hB.z)(IB) ? this.xZB.lY(BB, IB) : this.xZB.send(BB, IB)
+         this.aXt(), (0, Qt.J)(et) ? this.tOt.vW(tt, et) : this.tOt.send(tt, et)
```

#### 31. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L133)

```diff
-       TnB() {
+       aXt() {
```

#### 32. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L135)

```diff
-         (this.AJB++, 5 === NB++) && (null === (BB = (IB = this.callbacks).ZnB) || void 0 === BB || BB.call(IB), NB = 0)
+         (this.sqt++, 5 === ft++) && (null === (tt = (et = this.callbacks).NXt) || void 0 === tt || tt.call(et), ft = 0)
```

#### 33. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L138)

```diff
-         this.dispose(), this.xZB.jy()
+         this.dispose(), this.tOt.vN()
```

#### 34. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L141)

```diff
-         this.dispose(), this.xZB.leave()
+         this.dispose(), this.tOt.leave()
```

#### 35. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L145)

```diff
-     var gB = ZB(3869);
+     var wt = Vt(3765);
```

#### 36. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L149-L150` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L149-L150) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L149-L150)

```diff
-           ZnB: () => {
-             (0, vB.o)(!0) && (0, TB.hY)()
+           NXt: () => {
+             (0, dt.i)(!0) && (0, Ot.Qv)()
```

#### 37. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L152)

```diff
-           ScB: (BB, IB) => {
+           fXt: (tt, et) => {
```

#### 38. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L154)

```diff
-             null === (ZB = (0, kB.h)()) || void 0 === ZB || ZB.wg(BB, IB)
+             null === (Vt = (0, jt.e)()) || void 0 === Vt || Vt.yw(tt, et)
```

#### 39. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L157-L158` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L157-L158) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L157-L158)

```diff
-           AcB: !1
-         }), (0, gB.e)(BB)
+           mXt: !1
+         }), (0, wt.d)(tt)
```

#### 40. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L161` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L161) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L161)

```diff
-         return !!(0, gB.l)((0, gB.c)(), this.xZB, BB, IB) && (this.TnB(), !0)
+         return !!(0, wt.i)((0, wt.c)(), this.tOt, tt, et) && (this.aXt(), !0)
```

#### 41. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L163-L164` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L163-L164) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L163-L164)

```diff
-       KcB(BB) {
-         this.JnB(), super.KcB(BB), (0, gB.e)(BB)
+       lXt(tt) {
+         this.MXt(), super.lXt(tt), (0, wt.d)(tt)
```

#### 42. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L167)

```diff
-         super.jy(), this.JnB()
+         super.vN(), this.MXt()
```

#### 43. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L169-L170` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L169-L170) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L169-L170)

```diff
-       JnB() {
-         this.xZB.Py.kN.mH = void 0
+       MXt() {
+         this.tOt.ZN.xE.kR = void 0
```

#### 44. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L173-L181` → after: `L173-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L173-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L173-L181) · [Before (L173-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L173-L181)

```diff
-     var yB = ZB(24),
-       UB = ZB(2029),
-       WB = ZB(1805),
-       dB = ZB(36485),
-       CB = ZB(39023),
-       QB = ZB(38099),
-       sB = ZB(37855),
-       wB = ZB(665),
-       OB = ZB(38455);
+     var Nt = Vt(31),
+       Mt = Vt(2043),
+       bt = Vt(1826),
+       Jt = Vt(36701),
+       Ct = Vt(39158),
+       ut = Vt(38285),
+       Kt = Vt(38056),
+       ht = Vt(710),
+       vt = Vt(38632);
```

#### 45. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L185)

```diff
-           const IB = new Int32Array(BB.length * OB.c);
+           const et = new Int32Array(tt.length * vt.g);
```

#### 46. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L187)

```diff
-             const TB = ZB * OB.c;
+             const Ot = Vt * vt.g;
```

#### 47. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L200-L201` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L200-L201) · [Before (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L200-L201)

```diff
-       BB.client.gameRecorder.isCapturing() ? (0, OB.nb)(TB, (0, OB.jb)(TB), JB) : BB.Nz.vz.EQ(TB, {
-         qE: JB,
+       tt.client.gameRecorder.isCapturing() ? (0, vt.nb)(Ot, (0, vt.mb)(Ot), qt) : tt.ql.sQ.YC(Ot, {
+         Vr: qt,
```

#### 48. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L209-L213` → after: `L209-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L209-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L209-L213) · [Before (L209-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L209-L213)

```diff
-           for (let GB = 0; GB < ZB.length; GB += OB.c)
-             for (let IB = (0, wB.T)(ZB[GB]); IB <= (0, wB.T)(ZB[GB + 3]); IB++)
-               for (let TB = (0, wB.T)(ZB[GB + 1]); TB <= (0, wB.T)(ZB[GB + 4]); TB++)
-                 for (let vB = (0, wB.T)(ZB[GB + 2]); vB <= (0, wB.T)(ZB[GB + 5]); vB++) {
-                   const ZB = `${IB}|${TB}|${vB}`;
+           for (let mt = 0; mt < Vt.length; mt += vt.g)
+             for (let et = (0, ht.H)(Vt[mt]); et <= (0, ht.H)(Vt[mt + 3]); et++)
+               for (let Ot = (0, ht.H)(Vt[mt + 1]); Ot <= (0, ht.H)(Vt[mt + 4]); Ot++)
+                 for (let dt = (0, ht.H)(Vt[mt + 2]); dt <= (0, ht.H)(Vt[mt + 5]); dt++) {
+                   const Vt = `${et}|${Ot}|${dt}`;
```

#### 49. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L218)

```diff
-       }), BB.Nz.tBB()
+       }), tt.ql.Ztt()
```

#### 50. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L222)

```diff
-       BB.rZB = new Set, BB.LZB = new Set, BB.mZB = new Set, BB.eZB = new Set, BB.XZB = [], BB.uZB = [], BB.Bx = new Set, BB.HJ = [], BB.Ix = []
+       tt.UVt = new Set, tt.YVt = new Set, tt.AVt = new Set, tt.BVt = new Set, tt.iVt = [], tt.pVt = [], tt.WG = new Set, tt.Uq = [], tt.rG = []
```

#### 51. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L226` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L226) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L226)

```diff
-         this.Nz = BB
+         this.ql = tt
```

#### 52. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L229-L249` → after: `L229-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L229-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L229-L249) · [Before (L229-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L229-L249)

```diff
-         const IB = this.Nz,
-           ZB = (0, kB.d)();
-         BB.rU(cB.ab, (BB => {
-           IB.vz.rZB.add(BB), IB.vz.LZB.delete(BB)
-         })), BB.rU(cB.ib, (BB => {
-           IB.vz.LZB.add(BB), IB.vz.rZB.delete(BB)
-         })), BB.rU(cB.je, (BB => {
-           IB.vz.LZB.delete(BB), IB.vz.rZB.delete(BB)
-         })), BB.rU(cB.hb, (BB => {
-           IB.vz.mZB.add(BB), IB.vz.eZB.delete(BB)
-         })), BB.rU(cB.lb, (BB => {
-           IB.vz.eZB.add(BB), IB.vz.mZB.delete(BB)
-         })), BB.rU(cB.oe, (BB => {
-           IB.vz.eZB.delete(BB), IB.vz.mZB.delete(BB)
-         })), BB.rU(cB.db, (BB => {
-           (0, hB.$)(BB, IB.vz.uZB), (0, hB.$)(BB, IB.vz.XZB), IB.vz.XZB.push(BB)
- ... (5 more removed lines; see GitHub link above)
+         const et = this.ql,
+           Vt = (0, jt.c)();
+         tt.gM(Ht.$, (tt => {
+           et.sQ.UVt.add(tt), et.sQ.YVt.delete(tt)
+         })), tt.gM(Ht.eb, (tt => {
+           et.sQ.YVt.add(tt), et.sQ.UVt.delete(tt)
+         })), tt.gM(Ht.ge, (tt => {
+           et.sQ.YVt.delete(tt), et.sQ.UVt.delete(tt)
+         })), tt.gM(Ht.cb, (tt => {
+           et.sQ.AVt.add(tt), et.sQ.BVt.delete(tt)
+         })), tt.gM(Ht.jb, (tt => {
+           et.sQ.BVt.add(tt), et.sQ.AVt.delete(tt)
+         })), tt.gM(Ht.ke, (tt => {
+           et.sQ.BVt.delete(tt), et.sQ.AVt.delete(tt)
+         })), tt.gM(Ht.bb, (tt => {
+           (0, Qt.ib)(tt, et.sQ.pVt), (0, Qt.ib)(tt, et.sQ.iVt), et.sQ.iVt.push(tt)
+ ... (5 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L251-L252` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L251-L252) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L251-L252)

```diff
-             IJ: ZB,
-             ZJ: TB
+             lq: Vt,
+             Eq: Ot
```

#### 54. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L254-L255` → after: `L254-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L254-L255) · [Before (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L254-L255)

```diff
-           TB ? IB.vz.Bx.delete(ZB) : IB.vz.Bx.add(ZB)
-         })), BB.rU(cB.Cf, (BB => {
+           Ot ? et.sQ.WG.delete(Vt) : et.sQ.WG.add(Vt)
+         })), tt.gM(Ht.Af, (tt => {
```

#### 55. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L257-L258` → after: `L257-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L257-L258) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L257-L258)

```diff
-             HJ: TB,
-             MJ: JB
+             Uq: Ot,
+             Aq: qt
```

#### 56. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L260` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L260) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L260)

```diff
-           ZB.updateWalkThroughRect(IB.Jm, TB, JB)
+           Vt.updateWalkThroughRect(et.lL, Ot, qt)
```

#### 57. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L262-L265` → after: `L262-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L262-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L262-L265) · [Before (L262-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L262-L265)

```diff
-           iB(IB.vz)
-         })), BB.rU(cB.oc, (BB => {
-           QB.c.applyServerUpdate(BB)
-         })), BB.rU(cB.sb, (BB => {
+           St(et.sQ)
+         })), tt.gM(Ht.gc, (tt => {
+           ut.e.applyServerUpdate(tt)
+         })), tt.gM(Ht.pb, (tt => {
```

#### 58. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L269-L270` → after: `L269-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L269-L270) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L269-L270)

```diff
-                   UB: ZB,
-                   WB: TB
+                   bt: Vt,
+                   Jt: Ot
```

#### 59. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L281)

```diff
-                   BB.UH(ZB[0] - TB, ZB[1] - JB, ZB[2] - oB, GB)
+                   tt.fR(Vt[0] - Ot, Vt[1] - qt, Vt[2] - Dt, mt)
```

#### 60. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L285-L287` → after: `L285-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L285-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L285-L287) · [Before (L285-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L285-L287)

```diff
-                   UB: ZB,
-                   WB: TB,
-                   dB: JB
+                   bt: Vt,
+                   Jt: Ot,
+                   Ct: qt
```

#### 61. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L291)

```diff
-           })), yB.l.Gq("changeBlockFail", BB), ZB.client.triggerGameCallback("onChangeBlockFail", BB), yB.l.Gq("EditBoard", {
+           })), Nt.j.sw("changeBlockFail", tt), Vt.client.triggerGameCallback("onChangeBlockFail", tt), Nt.j.sw("EditBoard", {
```

#### 62. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L293` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L293) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L293)

```diff
-           }), yB.l.Gq("EditCodeBlock", {
+           }), Nt.j.sw("EditCodeBlock", {
```

#### 63. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L297` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L297) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L297)

```diff
-         })), BB.rU(cB.Ob, (BB => {
+         })), tt.gM(Ht.Jb, (tt => {
```

#### 64. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L299)

```diff
-             YB(ZB, QB.c, BB)
+             Wt(Vt, ut.e, tt)
```

#### 65. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L301)

```diff
-         })), BB.rU(cB.uf, (BB => {
+         })), tt.gM(Ht.tf, (tt => {
```

#### 66. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L303-L304` → after: `L303-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L303-L304) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L303-L304)

```diff
-             CB: IB,
-             QB: TB
+             ut: et,
+             Kt: Ot
```

#### 67. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L306-L308` → after: `L306-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L306-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L306-L308) · [Before (L306-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L306-L308)

```diff
-           if (ZB.pD(IB[0], IB[1], IB[2])) {
-             const BB = (0, kB.d)().WU(IB[0], IB[1], IB[2]);
-             (0, kB.d)().updateMailboxContents(IB[0], IB[1], IB[2], BB, TB)
+           if (Vt.hA(et[0], et[1], et[2])) {
+             const tt = (0, jt.c)().XM(et[0], et[1], et[2]);
+             (0, jt.c)().updateMailboxContents(et[0], et[1], et[2], tt, Ot)
```

#### 68. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L310)

```diff
-         })), BB.rU(cB.He, (BB => {
+         })), tt.gM(Ht.Ae, (tt => {
```

#### 69. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L315)

```diff
-           ZB.blockDataOwner.setBlockData(IB[0], IB[1], IB[2], TB), ZB.blockAdded(IB[0], IB[1], IB[2], ZB.WU(IB[0], IB[1], IB[2]))
+           Vt.blockDataOwner.setBlockData(et[0], et[1], et[2], Ot), Vt.blockAdded(et[0], et[1], et[2], Vt.XM(et[0], et[1], et[2]))
```

#### 70. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L319-L323` → after: `L319-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L319-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L319-L323) · [Before (L319-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L319-L323)

```diff
-     var aB = ZB(37192),
-       HB = ZB(36794),
-       MB = ZB(38136),
-       jB = ZB(37975),
-       PB = ZB(38146);
+     var Rt = Vt(37401),
+       It = Vt(37002),
+       Pt = Vt(38316),
+       Zt = Vt(38172),
+       Lt = Vt(38335);
```

#### 71. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L326)

```diff
-         this.Nz = BB, this.setUpQueuedEntity = IB
+         this.ql = tt, this.setUpQueuedEntity = et
```

#### 72. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L329-L331` → after: `L329-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L329-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L329-L331) · [Before (L329-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L329-L331)

```diff
-         const IB = this.Nz,
-           ZB = (0, kB.d)();
-         BB.rU(cB.Z, (BB => {
+         const et = this.ql,
+           Vt = (0, jt.c)();
+         tt.gM(Ht.Y, (tt => {
```

#### 73. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L333-L334` → after: `L333-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L333-L334) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L333-L334)

```diff
-             CZ: IB,
-             QZ: ZB
+             IV: et,
+             PV: Vt
```

#### 74. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L336` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L336) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L336)

```diff
-           this.setUpQueuedEntity(IB), IB = (0, HB.e)(IB), (0, kB.d)().client.gameRecorder.recordBulletShot(IB, ZB), yB.l.Gq(`bulletShot|${IB}`, {
+           this.setUpQueuedEntity(et), et = (0, It.c)(et), (0, jt.c)().client.gameRecorder.recordBulletShot(et, Vt), Nt.j.sw(`bulletShot|${et}`, {
```

#### 75. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L339)

```diff
-         })), BB.rU(cB.rc, (BB => {
+         })), tt.gM(Ht.kc, (tt => {
```

#### 76. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L341-L342` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L341-L342) · [Before (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L341-L342)

```diff
-             yZ: IB,
-             UZ: ZB
+             WV: et,
+             SV: Vt
```

#### 77. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L344-L345` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L344-L345) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L344-L345)

```diff
-           yB.l.Gq("damagedByOtherPlayer", {
-             yZ: IB,
+           Nt.j.sw("damagedByOtherPlayer", {
+             WV: et,
```

#### 78. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L348-L352` → after: `L348-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L348-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L348-L352) · [Before (L348-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L348-L352)

```diff
-         })), BB.rU(cB.Ed, (BB => {
-           yB.l.Gq("playerKilled", BB, !0), (0, kB.d)().client.gameRecorder.recordPlayerKilled(BB.deadEId, BB.killerEId, BB.withItem, BB.killstreak)
-         })), BB.rU(cB.Wb, (BB => {
-           yB.l.Gq("customKillfeed", BB, !0), (0, kB.d)().client.gameRecorder.recordCustomKillfeed(BB.killer, BB.victim, BB.withItem)
-         })), BB.rU(cB.Sd, (BB => {
+         })), tt.gM(Ht.Bd, (tt => {
+           Nt.j.sw("playerKilled", tt, !0), (0, jt.c)().client.gameRecorder.recordPlayerKilled(tt.deadEId, tt.killerEId, tt.withItem, tt.killstreak)
+         })), tt.gM(Ht.Ub, (tt => {
+           Nt.j.sw("customKillfeed", tt, !0), (0, jt.c)().client.gameRecorder.recordCustomKillfeed(tt.killer, tt.victim, tt.withItem)
+         })), tt.gM(Ht.Md, (tt => {
```

#### 79. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L354-L355` → after: `L354-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L354-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L354-L355) · [Before (L354-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L354-L355)

```diff
-             lB: ZB,
-             AB: TB
+             xt: Vt,
+             Tt: Ot
```

#### 80. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L358)

```diff
-           const JB = IB.zW.FZB(ZB);
+           const qt = et.mJ.bVt(Vt);
```

#### 81. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L360)

```diff
-         })), BB.rU(cB.De, (BB => {
+         })), tt.gM(Ht.ue, (tt => {
```

#### 82. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L362-L363` → after: `L362-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L362-L363) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L362-L363)

```diff
-             uI: ZB,
-             YB: TB
+             ne: Vt,
+             St: Ot
```

#### 83. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L365-L367` → after: `L365-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L365-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L365-L367) · [Before (L365-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L365-L367)

```diff
-           const JB = TB ? (0, PB.f)(IB, TB) : void 0;
-           yB.l.Gq("sendHitmarker", {
-             uI: ZB,
+           const qt = Ot ? (0, Lt.h)(et, Ot) : void 0;
+           Nt.j.sw("sendHitmarker", {
+             ne: Vt,
```

#### 84. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L370)

```diff
-         })), BB.rU(cB.Vc, (BB => {
+         })), tt.gM(Ht.Kc, (tt => {
```

#### 85. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L372-L378` → after: `L372-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L372-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L372-L378) · [Before (L372-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L372-L378)

```diff
-             sB: TB,
-             wB: JB,
-             iB: oB,
-             pB: GB,
-             aB: vB,
-             HB: kB,
-             jB: cB
+             ht: Ot,
+             vt: qt,
+             ct: Dt,
+             Rt: mt,
+             Pt: dt,
+             Zt: jt,
+             Lt: Ht
```

#### 86. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L380-L382` → after: `L380-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L380-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L380-L382) · [Before (L380-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L380-L382)

```diff
-           this.setUpQueuedEntity(TB), TB = (0, HB.e)(TB);
-           const nB = IB.zW.oZB(TB);
-           if (nB && (nB.lastHurtTime = performance.now()), (0, MB.playRigHurt)(IB, TB, kB), yB.l.Gq("lifeformHurt", {
+           this.setUpQueuedEntity(Ot), Ot = (0, It.c)(Ot);
+           const Xt = et.mJ.EVt(Ot);
+           if (Xt && (Xt.lastHurtTime = performance.now()), (0, Pt.playRigHurt)(et, Ot, jt), Nt.j.sw("lifeformHurt", {
```

#### 87. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L384)

```diff
-               jB: cB
+               Lt: Ht
```

#### 88. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L386-L388` → after: `L386-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L386-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L386-L388) · [Before (L386-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L386-L388)

```diff
-             const BB = (0, PB.f)(IB, JB.YB);
-             yB.l.Gq("yourAttackHit", {
-               uI: GB,
+             const tt = (0, Lt.h)(et, qt.St);
+             Nt.j.sw("yourAttackHit", {
+               ne: mt,
```

#### 89. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L390` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L390) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L390)

```diff
-               hitSelf: TB === IB.Jm
+               hitSelf: Ot === et.lL
```

#### 90. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L393-L394` → after: `L393-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L393-L394) · [Before (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L393-L394)

```diff
-           TB === IB.Jm && (ZB.shakePlayerCamera(TB, vB / 40, 200), yB.l.Gq("closeShopOnDamaged", null), yB.l.Gq("damagedByOtherPlayer", {
-             yZ: null,
+           Ot === et.lL && (Vt.shakePlayerCamera(Ot, dt / 40, 200), Nt.j.sw("closeShopOnDamaged", null), Nt.j.sw("damagedByOtherPlayer", {
+             WV: null,
```

#### 91. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L396` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L396) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L396)

```diff
-             aB: vB
+             Pt: dt
```

#### 92. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L398` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L398) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L398)

```diff
-           const hB = IB.zW.aU(TB);
+           const Qt = et.mJ.YM(Ot);
```

#### 93. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L401` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L401) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L401)

```diff
-             oB && (0, jB.j)(IB, jB.A, BB, 15), GB && (0, jB.j)(IB, jB.n, BB, 10)
+             Dt && (0, Zt.l)(et, Zt.z, tt, 15), mt && (0, Zt.l)(et, Zt.o, tt, 10)
```

#### 94. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L403` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L403) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L403)

```diff
-         })), BB.rU(cB.Rc, (BB => {
+         })), tt.gM(Ht.Hc, (tt => {
```

#### 95. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L405-L407` → after: `L405-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L405-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L405-L407) · [Before (L405-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L405-L407)

```diff
-             wI: ZB,
-             OI: TB,
-             YI: JB
+             Le: Vt,
+             Fe: Ot,
+             ke: qt
```

#### 96. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L409-L412` → after: `L409-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L409-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L409-L412) · [Before (L409-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L409-L412)

```diff
-           (0, aB.c)(IB).setHealthFrac((0, HB.e)(ZB), JB), yB.l.Gq("lifeformHealthChanged", {
-             eId: (0, HB.e)(ZB),
-             OI: TB,
-             YI: JB
+           (0, Rt.e)(et).setHealthFrac((0, It.c)(Vt), qt), Nt.j.sw("lifeformHealthChanged", {
+             eId: (0, It.c)(Vt),
+             Fe: Ot,
+             ke: qt
```

#### 97. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L414)

```diff
-         })), BB.rU(cB.W, (BB => {
+         })), tt.gM(Ht.R, (tt => {
```

#### 98. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L416-L417` → after: `L416-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L416-L417) · [Before (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L416-L417)

```diff
-             ko: ZB,
-             ho: TB
+             bD: Vt,
+             JD: Ot
```

#### 99. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L419-L421` → after: `L419-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L419-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L419-L421) · [Before (L419-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L419-L421)

```diff
-           (0, kB.d)().playerAttacked(IB.Jm, ZB, TB)
-         })), BB.rU(cB.ub, (() => {
-           const BB = IB.zW.FZB(IB.Jm);
+           (0, jt.c)().playerAttacked(et.lL, Vt, Ot)
+         })), tt.gM(Ht.sb, (() => {
+           const tt = et.mJ.bVt(et.lL);
```

#### 100. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L423` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L423) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L423)

```diff
-         })), BB.rU(cB.$b, (BB => {
+         })), tt.gM(Ht._b, (tt => {
```

#### 101. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L425-L430` → after: `L425-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L425-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L425-L430) · [Before (L425-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L425-L430)

```diff
-             PB: IB,
-             RB: ZB,
-             rB: TB,
-             fI: JB,
-             lI: oB,
-             AI: GB
+             Ft: et,
+             kt: Vt,
+             Gt: Ot,
+             tV: qt,
+             eV: Dt,
+             VV: mt
```

#### 102. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L432)

```diff
-           IB = (0, HB.e)(IB), (0, kB.d)().client.updateEffect(IB, ZB, {
+           et = (0, It.c)(et), (0, jt.c)().client.updateEffect(et, Vt, {
```

#### 103. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L438)

```diff
-         })), BB.rU(cB.Td, (BB => {
+         })), tt.gM(Ht.Qd, (tt => {
```

#### 104. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L440-L441` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L440-L441) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L440-L441)

```diff
-             PB: IB,
-             RB: ZB
+             Ft: et,
+             kt: Vt
```

#### 105. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L443-L445` → after: `L443-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L443-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L443-L445) · [Before (L443-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L443-L445)

```diff
-           IB = (0, HB.e)(IB), (0, kB.d)().client.removeEffect(IB, ZB)
-         })), BB.rU(cB.pf, (BB => {
-           yB.l.Gq("ttbEffectMultiplier", BB)
+           et = (0, It.c)(et), (0, jt.c)().client.removeEffect(et, Vt)
+         })), tt.gM(Ht.of, (tt => {
+           Nt.j.sw("ttbEffectMultiplier", tt)
```

#### 106. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L449-L458` → after: `L449-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L449-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L449-L458) · [Before (L449-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L449-L458)

```diff
-     var rB = ZB(39043),
-       mB = ZB(37188),
-       XB = ZB(4403),
-       LB = ZB(38159),
-       eB = ZB(36780),
-       uB = ZB(36783),
-       fB = ZB(37101),
-       lB = ZB(37270),
-       AB = ZB(38166),
-       tB = ZB(39052);
+     var kt = Vt(39179),
+       Gt = Vt(37398),
+       zt = Vt(4322),
+       ot = Vt(38347),
+       rt = Vt(36992),
+       Ut = Vt(36996),
+       At = Vt(37314),
+       it = Vt(37480),
+       Yt = Vt(38356),
+       Bt = Vt(39187);
```

#### 107. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L461)

```diff
-         this.Nz = BB, this.setUpQueuedEntity = IB
+         this.ql = tt, this.setUpQueuedEntity = et
```

#### 108. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L464-L466` → after: `L464-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L464-L466) · [Before (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L464-L466)

```diff
-         const IB = this.Nz,
-           ZB = (0, kB.d)();
-         BB.rU(cB.hd, (BB => {
+         const et = this.ql,
+           Vt = (0, jt.c)();
+         tt.gM(Ht.Zc, (tt => {
```

#### 109. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L471-L475` → after: `L471-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L471-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L471-L475) · [Before (L471-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L471-L475)

```diff
-           (0, lB.c)(ZB);
-           for (const IB in TB)(0, lB.b)(ZB, IB, TB[IB]);
-           if ("canSee" in TB && IB.zW.TIB(ZB, "hidingMeshManager")) {
-             const BB = IB.zW.getState(ZB, "hidingMeshManager");
-             BB.canSee = (0, AB.c)("canSee", TB.canSee), BB._forceUpdate = !0
+           (0, it.e)(Vt);
+           for (const et in Ot)(0, it.c)(Vt, et, Ot[et]);
+           if ("canSee" in Ot && et.mJ.ptt(Vt, "hidingMeshManager")) {
+             const tt = et.mJ.getState(Vt, "hidingMeshManager");
+             tt.canSee = (0, Yt.b)("canSee", Ot.canSee), tt._forceUpdate = !0
```

#### 110. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L477` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L477) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L477)

```diff
-         })), BB.rU(cB.N, (BB => {
+         })), tt.gM(Ht.J, (tt => {
```

#### 111. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L479-L480` → after: `L479-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L479-L480) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L479-L480)

```diff
-             rT: ZB,
-             mT: TB,
+             pO: Vt,
+             xO: Ot,
```

#### 112. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L482-L485` → after: `L482-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L482-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L482-L485) · [Before (L482-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L482-L485)

```diff
-             XT: oB,
-             LT: GB,
-             eT: vB,
-             uT: cB
+             TO: Dt,
+             gO: mt,
+             sO: dt,
+             nO: Ht
```

#### 113. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L487-L501` → after: `L487-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L487-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L487-L501) · [Before (L487-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L487-L501)

```diff
-           ZB = (0, HB.e)(ZB);
-           const nB = null === JB && null !== vB ? (0, rB.e)(vB, cB) : JB;
-           (0, kB.d)().client.gameRecorder.recordAnimateEntity(ZB, TB, nB, oB, GB), (0, aB.c)(IB).animations.animateEntity(ZB, TB, JB, oB, GB, vB, cB), null !== JB || ZB === IB.Jm && TB === mB.h.Emote && (0, kB.d)().client.cameraController.endTemporaryThirdPerson()
-         })), BB.rU(cB.Be, (BB => {
-           (0, tB.b)(BB)
-         })), BB.rU(cB.Ad, (BB => {
-           for (const IB of BB)(0, LB.v)(IB);
-           yB.l.Gq("playerCosmeticsUpdated", BB, !0)
-         })), BB.rU(cB.U, (BB => {
-           for (const ZB of BB)(0, fB.h)(IB, ZB)
-         })), BB.rU(cB.jd, (BB => {
-           (0, jB.l)(IB, (0, hB.m)(BB))
-         })), BB.rU(cB.md, (BB => {
-           XB.f[BB.Wo] ? (0, jB.l)(IB, {
-             ...XB.f[BB.Wo],
+           Vt = (0, It.c)(Vt);
+           const Xt = null === qt && null !== dt ? (0, kt.d)(dt, Ht) : qt;
+           (0, jt.c)().client.gameRecorder.recordAnimateEntity(Vt, Ot, Xt, Dt, mt), (0, Rt.e)(et).animations.animateEntity(Vt, Ot, qt, Dt, mt, dt, Ht), null !== qt || Vt === et.lL && Ot === Gt.g.Emote && (0, jt.c)().client.cameraController.endTemporaryThirdPerson()
+         })), tt.gM(Ht.te, (tt => {
+           (0, Bt.d)(tt)
+         })), tt.gM(Ht.yd, (tt => {
+           for (const et of tt)(0, ot.x)(et);
+           Nt.j.sw("playerCosmeticsUpdated", tt, !0)
+         })), tt.gM(Ht.N, (tt => {
+           for (const Vt of tt)(0, At.g)(et, Vt)
+         })), tt.gM(Ht._c, (tt => {
+           (0, Zt.m)(et, (0, Qt.r)(tt))
+         })), tt.gM(Ht.bd, (tt => {
+           zt.g[tt.WD] ? (0, Zt.m)(et, {
+             ...zt.g[tt.WD],
```

#### 114. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L504-L505` → after: `L504-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L504-L505) · [Before (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L504-L505)

```diff
-           }) : console.error(`Unknown preset id: ${BB.Wo}`)
-         })), BB.rU(cB.yd, (BB => {
+           }) : console.error(`Unknown preset id: ${tt.WD}`)
+         })), tt.gM(Ht.vd, (tt => {
```

#### 115. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L508-L511` → after: `L508-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L508-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L508-L511) · [Before (L508-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L508-L511)

```diff
-             BB: TB,
-             IB: JB,
-             ZB: oB,
-             TB: GB
+             tt: Ot,
+             et: qt,
+             Vt: Dt,
+             Ot: mt
```

#### 116. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L513-L515` → after: `L513-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L513-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L513-L515) · [Before (L513-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L513-L515)

```diff
-             oB: vB,
-             GB: cB
-           } = null !== GB && void 0 !== GB ? GB : {};
+             Dt: dt,
+             dt: Ht
+           } = null !== mt && void 0 !== mt ? mt : {};
```

#### 117. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L517-L520` → after: `L517-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L517-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L517-L520) · [Before (L517-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L517-L520)

```diff
-             JB: nB
-           } = null !== GB && void 0 !== GB ? GB : {};
-           vB = null !== (IB = vB) && void 0 !== IB ? IB : void 0, cB = null !== (ZB = cB) && void 0 !== ZB ? ZB : void 0, "string" === typeof nB && this.setUpQueuedEntity(nB), (0, kB.d)().client.gameRecorder.recordPlaySound(TB, JB, oB, GB), eB.d.play((0, uB.f)(TB), JB, nB, vB, cB … [truncated]
-         })), BB.rU(cB.vf, (BB => {
+             qt: Xt
+           } = null !== mt && void 0 !== mt ? mt : {};
+           dt = null !== (et = dt) && void 0 !== et ? et : void 0, Ht = null !== (Vt = Ht) && void 0 !== Vt ? Vt : void 0, "string" === typeof Xt && this.setUpQueuedEntity(Xt), (0, jt.c)().client.gameRecorder.recordPlaySound(Ot, qt, Dt, mt), rt.e.play((0, Ut.g)(Ot), qt, Xt, dt, Ht … [truncated]
+         })), tt.gM(Ht.uf, (tt => {
```

#### 118. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L528-L529` → after: `L528-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L528-L529) · [Before (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L528-L529)

```diff
-     var xB = ZB(37840),
-       EB = ZB(37814);
+     var xt = Vt(38040),
+       Tt = Vt(38005);
```

#### 119. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L532` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L532) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L532)

```diff
-         this.Nz = BB
+         this.ql = tt
```

#### 120. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L535-L536` → after: `L535-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L535-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L535-L536) · [Before (L535-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L535-L536)

```diff
-         const IB = this.Nz,
-           ZB = (0, kB.d)();
+         const et = this.ql,
+           Vt = (0, jt.c)();
```

#### 121. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L539` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L539) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L539)

```diff
-           return IB.zW.lIB(IB.Jm)
+           return et.mJ.tVt(et.lL)
```

#### 122. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L541` → after: `L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L541) · [Before (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L541)

```diff
-         BB.rU(cB.Ec, (BB => {
+         tt.gM(Ht.tc, (tt => {
```

#### 123. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L543-L551` → after: `L543-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L543-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L543-L551) · [Before (L543-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L543-L551)

```diff
-             yJ: ZB,
-             UJ: TB,
-             WJ: JB,
-             dJ: oB,
-             CJ: GB,
-             QJ: vB,
-             sJ: kB,
-             wJ: cB,
-             OJ: nB
+             Sq: Vt,
+             cq: Ot,
+             Rq: qt,
+             Iq: Dt,
+             Pq: mt,
+             Zq: dt,
+             Lq: jt,
+             Fq: Ht,
+             kq: Xt
```

#### 124. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L553)

```diff
-           if (!IB.zW.TIB(ZB, "itemState")) return void(0, xB.l)(IB, ZB, [GB, vB, kB], TB, {
+           if (!et.mJ.ptt(Vt, "itemState")) return void(0, xt.k)(et, Vt, [mt, dt, jt], Ot, {
```

#### 125. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L556` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L556) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L556)

```diff
-             wJ: cB,
+             Fq: Ht,
```

#### 126. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L559-L565` → after: `L559-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L559-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L559-L565) · [Before (L559-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L559-L565)

```diff
-           const hB = IB.zW.getState(ZB, "itemState");
-           hB.amount = JB, hB.wJ = cB, hB.creationTime = Date.now(), (0, EB.setServerPosition)(IB.zW.getState(ZB, "smoothToServerPos"), GB, vB, kB)
-         })), BB.rU(cB.ob, (BB => {
-           (0, aB.c)(IB).setCantPickUp(BB, !0), IB.zW.TIB(BB, "itemState") && (IB.zW.getState(BB, "itemState").wJ = !0)
-         })), BB.rU(cB.he, (BB => {
-           (0, aB.c)(IB).setCantPickUp(BB, !1), IB.zW.TIB(BB, "itemState") && (IB.zW.getState(BB, "itemState").wJ = !1)
-         })), BB.rU(cB.vd, (BB => {
+           const Qt = et.mJ.getState(Vt, "itemState");
+           Qt.amount = qt, Qt.Fq = Ht, Qt.creationTime = Date.now(), (0, Tt.setServerPosition)(et.mJ.getState(Vt, "smoothToServerPos"), mt, dt, jt)
+         })), tt.gM(Ht.mb, (tt => {
+           (0, Rt.e)(et).setCantPickUp(tt, !0), et.mJ.ptt(tt, "itemState") && (et.mJ.getState(tt, "itemState").Fq = !0)
+         })), tt.gM(Ht.ce, (tt => {
+           (0, Rt.e)(et).setCantPickUp(tt, !1), et.mJ.ptt(tt, "itemState") && (et.mJ.getState(tt, "itemState").Fq = !1)
+         })), tt.gM(Ht.qd, (tt => {
```

#### 127. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L581-L582` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L581-L582) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L581-L582)

```diff
-           (0, kB.d)().client.inventoryPrediction.serverChangeApplied(ZB)
-         })), BB.rU(cB.Ve, (BB => {
+           (0, jt.c)().client.inventoryPrediction.serverChangeApplied(Vt)
+         })), tt.gM(Ht.Ue, (tt => {
```

#### 128. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L590-L594` → after: `L590-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L590-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L590-L594) · [Before (L590-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L590-L594)

```diff
-           const vB = IB.zW.tIB(IB.Jm);
-           (ZB < vB.playerInventory.numSlots || vB.Qo || vB.inCreative) && vB.setItemSlot(ZB, TB, JB, oB), (0, kB.d)().client.inventoryPrediction.serverChangeApplied(GB)
-         })), BB.rU(cB.Ac, (BB => {
-           (0, kB.d)().client.inventoryPrediction.acknowledge(BB)
-         })), BB.rU(cB.L, (BB => {
+           const dt = et.mJ.eVt(et.lL);
+           (Vt < dt.playerInventory.numSlots || dt.cD || dt.inCreative) && dt.setItemSlot(Vt, Ot, qt, Dt), (0, jt.c)().client.inventoryPrediction.serverChangeApplied(mt)
+         })), tt.gM(Ht.sc, (tt => {
+           (0, jt.c)().client.inventoryPrediction.acknowledge(tt)
+         })), tt.gM(Ht.I, (tt => {
```

#### 129. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L596-L599` → after: `L596-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L596-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L596-L599) · [Before (L596-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L596-L599)

```diff
-             mZ: IB,
-             XZ: ZB,
-             LZ: TB,
-             eZ: JB
+             pV: et,
+             xV: Vt,
+             TV: Ot,
+             gV: qt
```

#### 130. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L601-L606` → after: `L601-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L601-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L601-L606) · [Before (L601-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L601-L606)

```diff
-           (0, kB.d)().client.itemDropPrediction.onActionItemDrops(IB, ZB, TB, JB)
-         })), BB.rU(cB.Ib, (BB => {
-           TB().clearInventory(), (0, kB.d)().client.inventoryPrediction.serverChangeApplied(BB)
-         })), BB.rU(cB.Ye, (BB => {
-           yB.l.Gq("setSelectedInventorySlotI", BB, !0)
-         })), BB.rU(cB.Ab, (BB => {
+           (0, jt.c)().client.itemDropPrediction.onActionItemDrops(et, Vt, Ot, qt)
+         })), tt.gM(Ht.Eb, (tt => {
+           Ot().clearInventory(), (0, jt.c)().client.inventoryPrediction.serverChangeApplied(tt)
+         })), tt.gM(Ht.Ve, (tt => {
+           Nt.j.sw("setSelectedInventorySlotI", tt, !0)
+         })), tt.gM(Ht.wb, (tt => {
```

#### 131. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L608-L615` → after: `L608-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L608-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L608-L615) · [Before (L608-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L608-L615)

```diff
-             RJ: ZB,
-             rJ: TB,
-             mJ: JB,
-             XJ: oB,
-             LJ: GB,
-             eJ: vB,
-             uJ: cB,
-             fJ: nB
+             Bq: Vt,
+             pq: Ot,
+             xq: qt,
+             Tq: Dt,
+             nq: mt,
+             tD: dt,
+             eD: Ht,
+             VD: Xt
```

#### 132. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L617)

```diff
-           const hB = IB.zW.tIB(IB.Jm);
+           const Qt = et.mJ.eVt(et.lL);
```

#### 133. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L620-L621` → after: `L620-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L620-L621) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L620-L621)

```diff
-               AJ: BB,
-               tJ: IB
+               qD: tt,
+               DD: et
```

#### 134. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L623` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L623) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L623)

```diff
-             return (0, kB.d)().client.inventoryPrediction.kBB(IB, (() => {
+             return (0, jt.c)().client.inventoryPrediction.K9(et, (() => {
```

#### 135. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L625-L627` → after: `L625-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L625-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L625-L627) · [Before (L625-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L625-L627)

```diff
-             })) && yB.l.Gq("chestToggleFromServer", !1, !0), void yB.l.Gq("chestRefreshedFromServer")
-           }(ZB || hB.Qo) && (ZB ? (hB.chestOpened(TB, JB, oB, GB, cB), null !== GB && (0, kB.d)().client.ironChestPasskeyCache.onChestOpened(oB, GB)) : hB.chestClosed(), yB.l.Gq("chestToggleFromServer", ZB, !0))
-         })), BB.rU(cB.Xb, (BB => {
+             })) && Nt.j.sw("chestToggleFromServer", !1, !0), void Nt.j.sw("chestRefreshedFromServer")
+           }(Vt || Qt.cD) && (Vt ? (Qt.chestOpened(Ot, qt, Dt, mt, Ht), null !== mt && (0, jt.c)().client.ironChestPasskeyCache.onChestOpened(Dt, mt)) : Qt.chestClosed(), Nt.j.sw("chestToggleFromServer", Vt, !0))
+         })), tt.gM(Ht.Wb, (tt => {
```

#### 136. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L632` → after: `L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L632) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L632)

```diff
-           TB ? ZB.craftingManager.editRecipesForPlayer(IB.Jm, TB, JB) : ZB.craftingManager.resetAllPlayerRecipes(IB.Jm), yB.l.Gq("craftingRecipesEdited", {
+           Ot ? Vt.craftingManager.editRecipesForPlayer(et.lL, Ot, qt) : Vt.craftingManager.resetAllPlayerRecipes(et.lL), Nt.j.sw("craftingRecipesEdited", {
```

#### 137. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L636` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L636) · [Before (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L636)

```diff
-         })), BB.rU(cB.Wd, (BB => {
+         })), tt.gM(Ht.Xd, (tt => {
```

#### 138. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L638-L640` → after: `L638-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L638-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L638-L640) · [Before (L638-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L638-L640)

```diff
-             PZ: IB,
-             RZ: ZB,
-             rZ: JB
+             iV: et,
+             YV: Vt,
+             BV: qt
```

#### 139. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L642-L643` → after: `L642-L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L642-L643) · [Before (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L642-L643)

```diff
-           TB().removeItemName(IB, ZB), (0, kB.d)().client.inventoryPrediction.serverChangeApplied(JB)
-         })), BB.rU(cB.Vd, (BB => {
+           Ot().removeItemName(et, Vt), (0, jt.c)().client.inventoryPrediction.serverChangeApplied(qt)
+         })), tt.gM(Ht.Ud, (tt => {
```

#### 140. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L645)

```diff
-             YJ: TB
+             Gq: Ot
```

#### 141. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L647)

```diff
-           ZB.craftingManager.removeRecipes(IB.Jm, TB), yB.l.Gq("craftingRecipesEdited", {
+           Vt.craftingManager.removeRecipes(et.lL, Ot), Nt.j.sw("craftingRecipesEdited", {
```

#### 142. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L654-L656` → after: `L654-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L654-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L654-L656) · [Before (L654-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L654-L656)

```diff
-     var KB = ZB(6635),
-       VB = ZB(37454),
-       SB = ZB(364),
+     var st = Vt(6667),
+       nt = Vt(37654),
+       te = Vt(404),
```

#### 143. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L658-L661` → after: `L658-L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L658-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L658-L661) · [Before (L658-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L658-L661)

```diff
-       II = ZB(4704),
-       ZI = ZB(37749),
-       TI = ZB(38318),
-       JI = ZB(37448);
+       Ve = Vt(4655),
+       Oe = Vt(37951),
+       qe = Vt(38495),
+       De = Vt(37647);
```

#### 144. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L664` → after: `L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L664) · [Before (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L664)

```diff
-         this.Nz = BB, this.setUpQueuedEntity = IB
+         this.ql = tt, this.setUpQueuedEntity = et
```

#### 145. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L667-L669` → after: `L667-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L667-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L667-L669) · [Before (L667-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L667-L669)

```diff
-         const IB = this.Nz,
-           ZB = (0, kB.d)();
-         BB.rU(cB.nf, (BB => {
+         const et = this.ql,
+           Vt = (0, jt.c)();
+         tt.gM(Ht.jf, (tt => {
```

#### 146. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L671-L674` → after: `L671-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L671-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L671-L674) · [Before (L671-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L671-L674)

```diff
-             iI: ZB,
-             pI: JB,
-             aI: oB,
-             HI: GB
+             Ge: Vt,
+             ze: qt,
+             oe: Dt,
+             Ue: mt
```

#### 147. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L677-L680` → after: `L677-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L677-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L677-L680) · [Before (L677-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L677-L680)

```diff
-           IB.zW.setPosition(IB.Jm, vB), (0, TB.sendColyMessage)(cB.Sg, {
-             Sv: ZB,
-             Bk: II.f
-           }), yB.l.Gq("localPlayerTeleported", {
+           et.mJ.setPosition(et.lL, dt), (0, Ot.sendColyMessage)(Ht.Ng, {
+             Qj: Vt,
+             lj: Ve.h
+           }), Nt.j.sw("localPlayerTeleported", {
```

#### 148. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L684` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L684) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L684)

```diff
-         })), BB.rU(cB.qd, (BB => {
+         })), tt.gM(Ht.jd, (tt => {
```

#### 149. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L686-L689` → after: `L686-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L686-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L686-L689) · [Before (L686-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L686-L689)

```diff
-             ro: IB,
-             Xo: ZB,
-             Lo: TB,
-             eo: JB
+             UD: et,
+             AD: Vt,
+             iD: Ot,
+             YD: qt
```

#### 150. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L693` → after: `L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L693) · [Before (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L693)

```diff
-           yB.l.Gq(`otherPlayerTeleported|${IB}`, {
+           Nt.j.sw(`otherPlayerTeleported|${et}`, {
```

#### 151. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L696` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L696) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L696)

```diff
-         })), BB.rU(cB.Id, (BB => {
+         })), tt.gM(Ht.Ed, (tt => {
```

#### 152. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L698-L707` → after: `L698-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L698-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L698-L707) · [Before (L698-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L698-L707)

```diff
-             TJ: ZB,
-             JJ: JB,
-             oJ: oB,
-             GJ: GB,
-             vJ: vB,
-             kJ: kB,
-             cJ: nB,
-             hJ: hB,
-             nJ: zB,
-             NJ: FB
+             fq: Vt,
+             wq: qt,
+             yq: Dt,
+             Nq: mt,
+             aq: dt,
+             Mq: jt,
+             bq: Xt,
+             Cq: Qt,
+             Jq: lt,
+             hq: Et
```

#### 153. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L710-L716` → after: `L710-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L710-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L710-L716) · [Before (L710-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L710-L716)

```diff
-           IB.zW.setPosition(IB.Jm, NB);
-           const gB = IB.zW.dIB(IB.Jm),
-             qB = IB.zW.vx(IB.Jm);
-           BI().set(qB.Rl, 0, 0, 0), BI().set(qB.Al, 0, 0, 0), BI().set(qB.zq, vB, kB, nB), qB.Kl(), gB._flying = null !== FB, FB ? (gB.flyAccel.gJ = FB.gJ, gB.flyAccel.qJ = FB.qJ) : gB.flyAccel.reset(), hB && gB.movementType === KB.l.GLIDING && (gB.zJ = hB.zJ, BI().copy(gB.FJ, hB … [truncated]
-             Sv: ZB,
-             Bk: II.f
-           }), yB.l.Gq("localPlayerTeleported", {
+           et.mJ.setPosition(et.lL, ft);
+           const wt = et.mJ.fet(et.lL),
+             yt = et.mJ.YG(et.lL);
+           ee().set(yt.QG, 0, 0, 0), ee().set(yt.lG, 0, 0, 0), ee().set(yt.Dy, dt, jt, Xt), yt.wG(), wt._flying = null !== Et, Et ? (wt.flyAccel.vq = Et.vq, wt.flyAccel.Wq = Et.Wq) : wt.flyAccel.reset(), Qt && wt.movementType === st.m.GLIDING && (wt.uq = Qt.uq, ee().copy(wt.Kq, Qt … [truncated]
+             Qj: Vt,
+             lj: Ve.h
+           }), Nt.j.sw("localPlayerTeleported", {
```

#### 154. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L720` → after: `L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L720) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L720)

```diff
-         })), BB.rU(cB.$e, (BB => {
+         })), tt.gM(Ht.Xe, (tt => {
```

#### 155. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L725-L726` → after: `L725-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L725-L726) · [Before (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L725-L726)

```diff
-           (0, kB.d)().applyRiddenVehicleSettingOverrides(IB, ZB)
-         })), BB.rU(cB.zf, (BB => {
+           (0, jt.c)().applyRiddenVehicleSettingOverrides(et, Vt)
+         })), tt.gM(Ht.wf, (tt => {
```

#### 156. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L728-L730` → after: `L728-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L728-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L728-L730) · [Before (L728-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L728-L730)

```diff
-             iZ: ZB,
-             pZ: TB,
-             aZ: JB
+             GV: Vt,
+             zV: Ot,
+             oV: qt
```

#### 157. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L732-L733` → after: `L732-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L732-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L732-L733) · [Before (L732-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L732-L733)

```diff
-           const oB = IB.zW.dIB(IB.Jm).physicsState.type === KB.o.SLEEPING && ZB === KB.o.DEFAULT;
-           (0, kB.d)().updatePositionAndPhysics(IB.Jm, {
+           const Dt = et.mJ.fet(et.lL).physicsState.type === st.n.SLEEPING && Vt === st.n.DEFAULT;
+           (0, jt.c)().updatePositionAndPhysics(et.lL, {
```

#### 158. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L736-L737` → after: `L736-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L736-L737) · [Before (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L736-L737)

```diff
-           }, !0, JB), oB && (0, kB.d)().updateHeldVehicleStatus()
-         })), BB.rU(cB.tb, (BB => {
+           }, !0, qt), Dt && (0, jt.c)().updateHeldVehicleStatus()
+         })), tt.gM(Ht.qb, (tt => {
```

#### 159. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L739-L740` → after: `L739-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L739-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L739-L740) · [Before (L739-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L739-L740)

```diff
-             QI: ZB,
-             sI: TB
+             Pe: Vt,
+             Ze: Ot
```

#### 160. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L742-L743` → after: `L742-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L742-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L742-L743) · [Before (L742-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L742-L743)

```diff
-           IB.zW.uIB(IB.Jm).setPose(ZB, TB)
-         })), BB.rU(cB.Le, (BB => {
+           et.mJ.xet(et.lL).setPose(Vt, Ot)
+         })), tt.gM(Ht.De, (tt => {
```

#### 161. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L745-L749` → after: `L745-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L745-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L745-L749) · [Before (L745-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L745-L749)

```diff
-             rc: ZB,
-             sZB: TB
-           } = (0, VB.c)([BB[0], BB[1], BB[2]]);
-           JI.c.setLookDirection(IB, ZB, TB), (0, ZI.w)(ZB, TB);
-           const JB = IB.zW.uIB(IB.Jm);
+             nX: Vt,
+             RVt: Ot
+           } = (0, nt.d)([tt[0], tt[1], tt[2]]);
+           De.c.setLookDirection(et, Vt, Ot), (0, Oe.r)(Vt, Ot);
+           const qt = et.mJ.xet(et.lL);
```

#### 162. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L751` → after: `L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L751) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L751)

```diff
-         })), BB.rU(cB.Pe, (BB => {
+         })), tt.gM(Ht.He, (tt => {
```

#### 163. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L753` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L753) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L753)

```diff
-         })), BB.rU(cB.ef, (BB => {
+         })), tt.gM(Ht.af, (tt => {
```

#### 164. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L755-L756` → after: `L755-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L755-L756) · [Before (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L755-L756)

```diff
-             WZ: TB,
-             dZ: JB
+             cV: Ot,
+             RV: qt
```

#### 165. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L758-L760` → after: `L758-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L758-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L758-L760) · [Before (L758-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L758-L760)

```diff
-           ZB.shakePlayerCamera(IB.Jm, TB, JB)
-         })), BB.rU(cB.Kc, (BB => {
-           IB.zW.uIB(IB.Jm).jumpMultiplier.setMultiplierType("jumpEffectAmount", BB)
+           Vt.shakePlayerCamera(et.lL, Ot, qt)
+         })), tt.gM(Ht.zc, (tt => {
+           et.mJ.xet(et.lL).jumpMultiplier.setMultiplierType("jumpEffectAmount", tt)
```

#### 166. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L762-L767` → after: `L762-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L762-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L762-L767) · [Before (L762-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L762-L767)

```diff
-           IB.zW.uIB(IB.Jm).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
-         })), BB.rU(cB.Q, (BB => {
-           IB.zW.vx(IB.Jm).applyImpulse(BB)
-         })), BB.rU(cB.cf, (BB => {
-           const ZB = IB.zW.vx(IB.Jm);
-           BI().set(ZB.Rl, 0, 0, 0), BI().set(ZB.Al, 0, 0, 0), BI().copy(ZB.zq, BB), ZB.Kl()
+           et.mJ.xet(et.lL).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
+         })), tt.gM(Ht.L, (tt => {
+           et.mJ.YG(et.lL).applyImpulse(tt)
+         })), tt.gM(Ht.$e, (tt => {
+           const Vt = et.mJ.YG(et.lL);
+           ee().set(Vt.QG, 0, 0, 0), ee().set(Vt.lG, 0, 0, 0), ee().copy(Vt.Dy, tt), Vt.wG()
```

#### 167. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L769-L770` → after: `L769-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L769-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L769-L770) · [Before (L769-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L769-L770)

```diff
-           (0, TI.setFloatingYValue)(IB.zW.getState(IB.Jm, "physics"), IB.zW.zK(IB.Jm), null)
-         })), BB.rU(cB.cc, (BB => {
+           (0, qe.setFloatingYValue)(et.mJ.getState(et.lL, "physics"), et.mJ.RY(et.lL), null)
+         })), tt.gM(Ht.$b, (tt => {
```

#### 168. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L772-L774` → after: `L772-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L772-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L772-L774) · [Before (L772-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L772-L774)

```diff
-             HZ: ZB,
-             MZ: TB,
-             jZ: JB
+             rV: Vt,
+             UV: Ot,
+             AV: qt
```

#### 169. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L776-L782` → after: `L776-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L776-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L776-L782) · [Before (L776-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L776-L782)

```diff
-           const oB = (0, HB.e)(ZB);
-           if (oB === IB.Jm) {
-             const BB = IB.zW.zK(IB.Jm).position;
-             JB ??= Math.floor(BB[1]) - 1, (0, TI.setFloatingYValue)(IB.zW.getState(IB.Jm, "physics"), IB.zW.zK(IB.Jm), TB ? JB : null)
-           }(0, aB.c)(IB).setFloating(oB, TB, JB);
-           const GB = IB.zW.getState(oB, "floating");
-           GB && (GB.isFloating = TB, GB.jZ = TB ? JB : null)
+           const Dt = (0, It.c)(Vt);
+           if (Dt === et.lL) {
+             const tt = et.mJ.RY(et.lL).position;
+             qt ??= Math.floor(tt[1]) - 1, (0, qe.setFloatingYValue)(et.mJ.getState(et.lL, "physics"), et.mJ.RY(et.lL), Ot ? qt : null)
+           }(0, Rt.e)(et).setFloating(Dt, Ot, qt);
+           const mt = et.mJ.getState(Dt, "floating");
+           mt && (mt.isFloating = Ot, mt.AV = Ot ? qt : null)
```

#### 170. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L789-L790` → after: `L789-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L789-L790) · [Before (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L789-L790)

```diff
-       if (!BB.zW.fIB(BB.Jm)) return console.log("Got resync inven but don't have inven component"), void IB.acknowledge(TB);
-       oB && console.error("Had to sync inven"), IB.kBB(TB, JB) && ZB.Gq("chestToggleFromServer", !1, !0), ZB.Gq("syncedInvenFromServer")
+       if (!tt.mJ.Tet(tt.lL)) return console.log("Got resync inven but don't have inven component"), void et.acknowledge(Ot);
+       Dt && console.error("Had to sync inven"), et.K9(Ot, qt) && Vt.sw("chestToggleFromServer", !1, !0), Vt.sw("syncedInvenFromServer")
```

#### 171. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L792-L795` → after: `L792-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L792-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L792-L795) · [Before (L792-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L792-L795)

```diff
-     var vI = ZB(39067),
-       kI = ZB(39076),
-       cI = ZB(2038);
-     var nI = ZB(4691);
+     var je = Vt(39202),
+       He = Vt(39208),
+       Xe = Vt(2047);
+     var Qe = Vt(4641);
```

#### 172. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L798` → after: `L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L798) · [Before (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L798)

```diff
-       const IB = BB.vz;
+       const et = tt.sQ;
```

#### 173. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L808` → after: `L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L808) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L808)

```diff
-         const [hB, zB, FB] = BB.zW.aU(BB.Jm), NB = ! function(BB) {
+         const [Qt, lt, Et] = tt.mJ.YM(tt.lL), ft = ! function(tt) {
```

#### 174. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L810` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L810) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L810)

```diff
-           let ZB = null === (IB = BB.zW.YZB(BB.Jm)) || void 0 === IB ? void 0 : IB.zN;
+           let Vt = null === (et = tt.mJ.ZVt(tt.lL)) || void 0 === et ? void 0 : et.nE;
```

#### 175. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L816` → after: `L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L816) · [Before (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L816)

```diff
-             const IB = BB.zW.getState(ZB, "smoothToServerPos"),
+             const et = tt.mJ.getState(Vt, "smoothToServerPos"),
```

#### 176. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L819` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L819) · [Before (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L819)

```diff
-               const IB = BB.zW.aU(ZB);
+               const et = tt.mJ.YM(Vt);
```

#### 177. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L822` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L822) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L822)

```diff
-             ZB = null === (JB = BB.zW.YZB(ZB)) || void 0 === JB ? void 0 : JB.zN
+             Vt = null === (qt = tt.mJ.ZVt(Vt)) || void 0 === qt ? void 0 : qt.nE
```

#### 178. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L826` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L826) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L826)

```diff
-           const JB = oB.f.YN;
+           const qt = Dt.e.ff;
```

#### 179. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L829` → after: `L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L829) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L829)

```diff
-             if (!(0, nI.g)(IB, ZB, TB, GB[0] * JB, GB[1] * JB, GB[2] * JB)) return !1
+             if (!(0, Qe.i)(et, Vt, Ot, mt[0] * qt, mt[1] * qt, mt[2] * qt)) return !1
```

#### 180. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L832-L834` → after: `L832-L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L832-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L832-L834) · [Before (L832-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L832-L834)

```diff
-         }(IB.Bq.dN, hB, zB, FB), gB = null === vB || Math.abs(hB - vB[0]) > 8 || Math.abs(zB - vB[1]) > 8 || Math.abs(FB - vB[2]) > 8, qB = !kB || gB || performance.now() - GB >= 1e4;
-         kB = NB, NB && qB && (JB = nB, GB = performance.now(), vB = [hB, zB, FB], (0, TB.sendColyMessage)(cB.xg, {
-           cv: nB
+         }(et.Bw.jf, Qt, lt, Et), wt = null === dt || Math.abs(Qt - dt[0]) > 8 || Math.abs(lt - dt[1]) > 8 || Math.abs(Et - dt[2]) > 8, yt = !jt || wt || performance.now() - mt >= 1e4;
+         jt = ft, ft && yt && (qt = Xt, mt = performance.now(), dt = [Qt, lt, Et], (0, Ot.sendColyMessage)(Ht.vg, {
+           Nd: Xt
```

#### 181. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L837-L838` → after: `L837-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L837-L838) · [Before (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L837-L838)

```diff
-       return BB.on("Iz", nB), () => {
-         BB.off("Iz", nB)
+       return tt.on("BQ", Xt), () => {
+         tt.off("BQ", Xt)
```

#### 182. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L841-L846` → after: `L841-L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L841-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L841-L846) · [Before (L841-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L841-L846)

```diff
-     var zI = ZB(39078),
-       FI = ZB(1579),
-       NI = ZB(2908),
-       gI = ZB(1868),
-       qI = ZB(3088),
-       yI = ZB(4952);
+     var Ee = Vt(39216),
+       fe = Vt(1613),
+       we = Vt(2839),
+       ye = Vt(1894),
+       Ne = Vt(2990),
+       ae = Vt(4948);
```

#### 183. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L849` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L849) · [Before (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L849)

```diff
-         this.Nz = BB, this.gameNameWithVariation = IB, this.connectionResume = ZB, this.stopChunkReports = () => {}, this.replayResume = null
+         this.ql = tt, this.gameNameWithVariation = et, this.connectionResume = Vt, this.stopChunkReports = () => {}, this.replayResume = null
```

#### 184. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L852` → after: `L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L852) · [Before (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L852)

```diff
-         yI.d.reset(), (0, vI.b)()
+         ae.d.reset(), (0, je.e)()
```

#### 185. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L861-L865` → after: `L861-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L861-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L861-L865) · [Before (L861-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L861-L865)

```diff
-                 const oB = Math.ceil(BB.Ip[0]),
-                   GB = Math.ceil(BB.Ip[1]);
-                 IB && IB[0] === oB && IB[1] === GB || (IB = [oB, GB], ZB = performance.now(), (0, TB.sendColyMessage)(cB.vg, {
-                   AG: oB,
-                   tG: GB
+                 const Dt = Math.ceil(tt.rW[0]),
+                   mt = Math.ceil(tt.rW[1]);
+                 et && et[0] === Dt && et[1] === mt || (et = [Dt, mt], Vt = performance.now(), (0, Ot.sendColyMessage)(Ht.tg, {
+                   gm: Dt,
+                   sm: mt
```

#### 186. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L874-L875` → after: `L874-L875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L874-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L874-L875) · [Before (L874-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L874-L875)

```diff
-           }(this.Nz.vz),
-           IB = hI(this.Nz);
+           }(this.ql.sQ),
+           et = le(this.ql);
```

#### 187. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L881)

```diff
-         (0, ZI.k)(this.Nz, (0, kB.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - zI.b)), this.startChunkReports()
+         (0, Oe.k)(this.ql, (0, jt.c)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - Ee.e)), this.startChunkReports()
```

#### 188. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L884-L888` → after: `L884-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L884-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L884-L888) · [Before (L884-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L884-L888)

```diff
-         const IB = this.Nz,
-           ZB = (0, kB.d)();
-         BB.rU(cB.ed, (BB => {
-           UB.c.applyNewClientOptions(BB)
-         })), BB.rU(cB.xd, (BB => {
+         const et = this.ql,
+           Vt = (0, jt.c)();
+         tt.gM(Ht.Wc, (tt => {
+           Mt.b.applyNewClientOptions(tt)
+         })), tt.gM(Ht.td, (tt => {
```

#### 189. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L890` → after: `L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L890) · [Before (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L890)

```diff
-         })), BB.rU(cB.Se, (BB => {
+         })), tt.gM(Ht.Je, (tt => {
```

#### 190. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L896-L897` → after: `L896-L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L896-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L896-L897) · [Before (L896-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L896-L897)

```diff
-         })), BB.rU(cB.Ue, (BB => {
-           yB.l.Gq("setDiscordReportKey", BB)
+         })), tt.gM(Ht.Qe, (tt => {
+           Nt.j.sw("setDiscordReportKey", tt)
```

#### 191. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L900)

```diff
-         })), BB.rU(cB.vc, (JB => {
+         })), tt.gM(Ht.nc, (qt => {
```

#### 192. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L902-L903` → after: `L902-L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L902-L903) · [Before (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L902-L903)

```diff
-             cB: oB,
-             nB: GB
+             Xt: Dt,
+             Qt: mt
```

#### 193. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L905` → after: `L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L905) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L905)

```diff
-           if ((0, TB.setAdjustment)(GB), this.connectionResume.onInitialInfo(JB.hB, JB.zB), TB.offlineInputReplay.qY(JB.FB), this.connectionResume.isResuming()) {
+           if ((0, Ot.setAdjustment)(mt), this.connectionResume.onInitialInfo(qt.lt, qt.Et), Ot.offlineInputReplay.Av(qt.ft), this.connectionResume.isResuming()) {
```

#### 194. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L908` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L908) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L908)

```diff
-               null === JB.NB && (0, kB.d)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), iB(IB.vz), UB.c.apply({
+               null === qt.wt && (0, jt.c)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), St(et.sQ), Mt.b.apply({
```

#### 195. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L910)

```diff
-                 _shopVersion: cI.d
+                 _shopVersion: Xe.e
```

#### 196. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L912-L913` → after: `L912-L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L912-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L912-L913) · [Before (L912-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L912-L913)

```diff
-               const ZB = IB.zW.tIB(IB.Jm);
-               ZB.Qo && (ZB.chestClosed(), yB.l.Gq("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), yB.l.Gq("initInfoReceived", BB)
+               const Vt = et.mJ.eVt(et.lL);
+               Vt.cD && (Vt.chestClosed(), Nt.j.sw("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), Nt.j.sw("initInfoReceived", tt)
```

#### 197. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L915)

```diff
-               const BB = null === JB.NB ? null : {
+               const tt = null === qt.wt ? null : {
```

#### 198. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L919-L920` → after: `L919-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L919-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L919-L920) · [Before (L919-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L919-L920)

```diff
-               this.replayResume = BB, this.connectionResume.onResumeInitialInfo(JB.NB, (() => {
-                 BB.endSeq = (0, kB.d)().client.inventoryPrediction.lastActionSeq
+               this.replayResume = tt, this.connectionResume.onResumeInitialInfo(qt.wt, (() => {
+                 tt.endSeq = (0, jt.c)().client.inventoryPrediction.lastActionSeq
```

#### 199. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L923-L924` → after: `L923-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L923-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L923-L924) · [Before (L923-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L923-L924)

```diff
-           } else console.log("Local client is eId", oB), gI.d.markAdmitted(), (0, ZI.n)(IB), yB.l.Gq("loadingScreenState", "loadingPage:loadingWorld"), IB.oIB = oB, IB.zW.TIB(IB.Jm, IB.zW.names.entityName) && IB.zW.Qr(IB.Jm, IB.zW.names.entityName), (0, kB.d)().setEntityName(IB.o … [truncated]
-         })), BB.rU(cB.ye, (() => {
+           } else console.log("Local client is eId", Dt), ye.c.markAdmitted(), (0, Oe.m)(et), Nt.j.sw("loadingScreenState", "loadingPage:loadingWorld"), et.Ttt = Dt, et.mJ.ptt(et.lL, et.mJ.names.entityName) && et.mJ.ZZ(et.lL, et.mJ.names.entityName), (0, jt.c)().setEntityName(et.T … [truncated]
+         })), tt.gM(Ht.se, (() => {
```

#### 200. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L931)

```diff
-             } = (0, kB.d)().client, {
+             } = (0, jt.c)().client, {
```

#### 201. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L936-L937` → after: `L936-L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L936-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L936-L937) · [Before (L936-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L936-L937)

```diff
-               const TB = null !== (GB = BB.endSeq) && void 0 !== GB ? GB : ZB.lastActionSeq;
-               ZB.forget((BB => BB > JB.tJ && BB <= TB || oB.has(BB))), GI(IB, ZB, yB.l, JB.tJ, JB.load)
+               const Ot = null !== (mt = tt.endSeq) && void 0 !== mt ? mt : Vt.lastActionSeq;
+               Vt.forget((tt => tt > qt.DD && tt <= Ot || Dt.has(tt))), de(et, Vt, Nt.j, qt.DD, qt.load)
```

#### 202. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L940` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L940) · [Before (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L940)

```diff
-         })), BB.rU(cB.if, (BB => {
+         })), tt.gM(Ht.gf, (tt => {
```

#### 203. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L942-L944` → after: `L942-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L942-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L942-L944) · [Before (L942-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L942-L944)

```diff
-             Co: ZB,
-             po: TB,
-             tJ: JB
+             SD: Vt,
+             LD: Ot,
+             DD: qt
```

#### 204. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L948-L949` → after: `L948-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L948-L949) · [Before (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L948-L949)

```diff
-           } = (0, kB.d)().client, GB = () => {
-             IB.zW.tIB(IB.Jm).loadFromString(ZB)
+           } = (0, jt.c)().client, mt = () => {
+             et.mJ.eVt(et.lL).loadFromString(Vt)
```

#### 205. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L952` → after: `L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L952) · [Before (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L952)

```diff
-             tJ: JB,
+             DD: qt,
```

#### 206. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L954-L955` → after: `L954-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L954-L955) · [Before (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L954-L955)

```diff
-           }), GI(IB, oB, yB.l, JB, GB, TB)
-         })), BB.rU(cB.Pd, (BB => {
+           }), de(et, Dt, Nt.j, qt, mt, Ot)
+         })), tt.gM(Ht.Jd, (tt => {
```

#### 207. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L970` → after: `L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L970) · [Before (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L970)

```diff
-         })), BB.rU(cB.we, (BB => {
+         })), tt.gM(Ht.qe, (tt => {
```

#### 208. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L985` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L985) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L985)

```diff
-         })), BB.rU(cB.Qc, (BB => {
+         })), tt.gM(Ht.Ec, (tt => {
```

#### 209. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L998` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L998) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L998)

```diff
-         })), BB.rU(cB.Sb, (BB => {
+         })), tt.gM(Ht.Rb, (tt => {
```

#### 210. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1011-L1012` → after: `L1011-L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1011-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1011-L1012) · [Before (L1011-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1011-L1012)

```diff
-         })), BB.rU(cB.Mc, (BB => {
-           (0, kB.d)().client.leaveGameUnwanted({
+         })), tt.gM(Ht.Bc, (tt => {
+           (0, jt.c)().client.leaveGameUnwanted({
```

#### 211. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1018-L1021` → after: `L1018-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1018-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1018-L1021) · [Before (L1018-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1018-L1021)

```diff
-         })), BB.rU(cB.Ge, (BB => {
-           yB.l.Gq("serverUpdating", Date.now() + BB, !0)
-         })), BB.rU(cB.dd, kI.e), BB.rU(cB.Xc, (BB => {
-           console.error(`[logErrorToConsole]: ${BB}`)
+         })), tt.gM(Ht.ye, (tt => {
+           Nt.j.sw("serverUpdating", Date.now() + tt, !0)
+         })), tt.gM(Ht.Uc, He.e), tt.gM(Ht.Oc, (tt => {
+           console.error(`[logErrorToConsole]: ${tt}`)
```

#### 212. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1025-L1030` → after: `L1025-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1025-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1025-L1030) · [Before (L1025-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1025-L1030)

```diff
-     var WI = ZB(39082),
-       dI = ZB(39094),
-       CI = ZB(1058),
-       QI = ZB(39090),
-       sI = ZB(2510),
-       wI = ZB(3820);
+     var be = Vt(39221),
+       Je = Vt(39226),
+       Ce = Vt(1103),
+       ue = Vt(39224),
+       Ke = Vt(2486),
+       he = Vt(3722);
```

#### 213. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1033` → after: `L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1033) · [Before (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1033)

```diff
-         this.Nz = BB, this.clientApi = IB
+         this.ql = tt, this.clientApi = et
```

#### 214. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1036-L1038` → after: `L1036-L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1036-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1036-L1038) · [Before (L1036-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1036-L1038)

```diff
-         const IB = this.Nz,
-           ZB = (0, kB.d)();
-         BB.rU(cB.wb, (BB => {
+         const et = this.ql,
+           Vt = (0, jt.c)();
+         tt.gM(Ht.vb, (tt => {
```

#### 215. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1044` → after: `L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1044) · [Before (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1044)

```diff
-           yB.l.Gq("chat", {
+           Nt.j.sw("chat", {
```

#### 216. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1049-L1053` → after: `L1049-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1049-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1049-L1053) · [Before (L1049-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1049-L1053)

```diff
-         })), BB.rU(cB.of, (BB => {
-           yB.l.Gq("TopRightHelper", BB, !0)
-         })), BB.rU(cB.lf, (BB => {
-           (0, WI.d)(BB)
-         })), BB.rU(cB.Oc, (BB => {
+         })), tt.gM(Ht.mf, (tt => {
+           Nt.j.sw("TopRightHelper", tt, !0)
+         })), tt.gM(Ht.if, (tt => {
+           (0, be.c)(tt)
+         })), tt.gM(Ht.Cc, (tt => {
```

#### 217. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1059` → after: `L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1059) · [Before (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1059)

```diff
-           yB.l.Gq("leaderboardResponse", {
+           Nt.j.sw("leaderboardResponse", {
```

#### 218. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1064-L1072` → after: `L1064-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1064-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1064-L1072) · [Before (L1064-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1064-L1072)

```diff
-         })), BB.rU(cB.ff, (() => {
-           yB.l.Gq("showShopTutorial", null, !0)
-         })), BB.rU(cB.Ld, (BB => {
-           yB.l.Gq("progressBarUpdate", BB, !0)
-         })), BB.rU(cB.xc, (BB => {
-           yB.l.Gq("middleScreenBarInitiate", {
-             duration: BB.iJ,
-             pJ: BB.pJ,
-             horizBarRemOffset: BB.aJ
+         })), tt.gM(Ht.ef, (() => {
+           Nt.j.sw("showShopTutorial", null, !0)
+         })), tt.gM(Ht.Gd, (tt => {
+           Nt.j.sw("progressBarUpdate", tt, !0)
+         })), tt.gM(Ht.rc, (tt => {
+           Nt.j.sw("middleScreenBarInitiate", {
+             duration: tt.zq,
+             oq: tt.oq,
+             horizBarRemOffset: tt.rq
```

#### 219. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1074-L1076` → after: `L1074-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1074-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1074-L1076) · [Before (L1074-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1074-L1076)

```diff
-         })), BB.rU(cB._d, (() => {
-           yB.l.Gq("middleScreenBarRemove", !0)
-         })), BB.rU(cB.Te, (BB => {
+         })), tt.gM(Ht._d, (() => {
+           Nt.j.sw("middleScreenBarRemove", !0)
+         })), tt.gM(Ht.Ne, (tt => {
```

#### 220. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1081-L1082` → after: `L1081-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1081-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1081-L1082) · [Before (L1081-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1081-L1082)

```diff
-             MI: JB,
-             RI: oB
+             Ae: qt,
+             Ye: Dt
```

#### 221. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1084)

```diff
-           yB.l.Gq("setDirectionArrow", {
+           Nt.j.sw("setDirectionArrow", {
```

#### 222. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1088-L1089` → after: `L1088-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1088-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1088-L1089) · [Before (L1088-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1088-L1089)

```diff
-             text: (0, cB.z)(JB),
-             RI: oB
+             text: (0, Ht.v)(qt),
+             Ye: Dt
```

#### 223. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1091` → after: `L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1091) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1091)

```diff
-         })), BB.rU(cB.Gb, (BB => {
+         })), tt.gM(Ht.Bb, (tt => {
```

#### 224. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1095` → after: `L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1095) · [Before (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1095)

```diff
-           yB.l.Gq("clearDirectionArrow", {
+           Nt.j.sw("clearDirectionArrow", {
```

#### 225. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1098` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1098) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1098)

```diff
-         })), BB.rU(cB.Pb, (BB => {
+         })), tt.gM(Ht.Nb, (tt => {
```

#### 226. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1100` → after: `L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1100) · [Before (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1100)

```diff
-         })), BB.rU(cB.nd, (BB => {
+         })), tt.gM(Ht.ed, (tt => {
```

#### 227. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1103` → after: `L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1103) · [Before (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1103)

```diff
-             tB: ZB
+             gt: Vt
```

#### 228. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1108` → after: `L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1108) · [Before (L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1108)

```diff
-           } = (0, dI.i)(ZB), GB = {
+           } = (0, Je.f)(Vt), mt = {
```

#### 229. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1111` → after: `L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1111) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1111)

```diff
-           for (const TB of dI.e) TB in GB && GB[TB] && (GB[TB] = (0, cB.z)(GB[TB]));
+           for (const Ot of Je.e) Ot in mt && mt[Ot] && (mt[Ot] = (0, Ht.v)(mt[Ot]));
```

#### 230. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1113` → after: `L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1113) · [Before (L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1113)

```diff
-             "boolean" === typeof BB && (0, TB.sendColyMessage)(cB.ti, {
+             "boolean" === typeof tt && (0, Ot.sendColyMessage)(Ht.qi, {
```

#### 231. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1118` → after: `L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1118) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1118)

```diff
-         })), BB.rU(cB.ae, (BB => {
+         })), tt.gM(Ht.$d, (tt => {
```

#### 232. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1122` → after: `L1122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1122) · [Before (L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1122)

```diff
-         })), BB.rU(cB.od, (BB => {
+         })), tt.gM(Ht.gd, (tt => {
```

#### 233. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1127-L1130` → after: `L1127-L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1127-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1127-L1130) · [Before (L1127-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1127-L1130)

```diff
-           (0, vI.f)(IB, ZB)
-         })), BB.rU(cB.de, (BB => {
-           (0, vI.j)(BB)
-         })), BB.rU(cB.tf, (BB => {
+           (0, je.i)(et, Vt)
+         })), tt.gM(Ht.ae, (tt => {
+           (0, je.l)(tt)
+         })), tt.gM(Ht.pf, (tt => {
```

#### 234. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1136-L1140` → after: `L1136-L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1136-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1136-L1140) · [Before (L1136-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1136-L1140)

```diff
-           (0, vI.k)(ZB, IB, JB, (BB => {
-             (0, TB.sendColyMessage)(cB.Mj, {
-               vk: ZB,
-               kk: BB,
-               nk: 5
+           (0, je.n)(Vt, et, qt, (tt => {
+             (0, Ot.sendColyMessage)(Ht.Oj, {
+               aj: Vt,
+               Mj: tt,
+               bj: 5
```

#### 235. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1143` → after: `L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1143) · [Before (L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1143)

```diff
-         })), BB.rU(cB.rd, (BB => {
+         })), tt.gM(Ht.nd, (tt => {
```

#### 236. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1147-L1148` → after: `L1147-L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1147-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1147-L1148) · [Before (L1147-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1147-L1148)

```diff
-           yB.l.Gq("overShopInfo", IB, !0)
-         })), BB.rU(cB.kc, (BB => {
+           Nt.j.sw("overShopInfo", et, !0)
+         })), tt.gM(Ht.cc, (tt => {
```

#### 237. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1150-L1151` → after: `L1150-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1150-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1150-L1151) · [Before (L1150-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1150-L1151)

```diff
-             vB: ZB,
-             kB: TB
+             jt: Vt,
+             Ht: Ot
```

#### 238. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1153-L1154` → after: `L1153-L1154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1153-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1153-L1154) · [Before (L1153-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1153-L1154)

```diff
-           this.clientApi.openShop(IB.Jm, ZB, TB)
-         })), BB.rU(cB.gc, (BB => {
+           this.clientApi.openShop(et.lL, Vt, Ot)
+         })), tt.gM(Ht.ac, (tt => {
```

#### 239. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1156-L1158` → after: `L1156-L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1156-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1156-L1158) · [Before (L1156-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1156-L1158)

```diff
-             jo: IB,
-             Po: ZB,
-             Ro: TB
+             zD: et,
+             oD: Vt,
+             rD: Ot
```

#### 240. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1160-L1163` → after: `L1160-L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1160-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1160-L1163) · [Before (L1160-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1160-L1163)

```diff
-           yB.l.Gq("flyingMiddleMessage", {
-             content: (0, cB.z)(IB),
-             Po: ZB,
-             Ro: TB
+           Nt.j.sw("flyingMiddleMessage", {
+             content: (0, Ht.v)(et),
+             oD: Vt,
+             rD: Ot
```

#### 241. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1165-L1167` → after: `L1165-L1167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1165-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1165-L1167) · [Before (L1165-L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1165-L1167)

```diff
-         })), BB.rU(cB.Kf, (BB => {
-           const IB = BB === CI.f ? null : {
-             message: `Currently loaded as variation: ${BB}`,
+         })), tt.gM(Ht.Ff, (tt => {
+           const et = tt === Ce.h ? null : {
+             message: `Currently loaded as variation: ${tt}`,
```

#### 242. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1170-L1171` → after: `L1170-L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1170-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1170-L1171) · [Before (L1170-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1170-L1171)

```diff
-           yB.l.Gq("showPermanentBottomMessage", IB, !0)
-         })), BB.rU(cB.lc, (BB => {
+           Nt.j.sw("showPermanentBottomMessage", et, !0)
+         })), tt.gM(Ht.ec, (tt => {
```

#### 243. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1176-L1177` → after: `L1176-L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1176-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1176-L1177) · [Before (L1176-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1176-L1177)

```diff
-           (0, QI.f)(IB) ? (0, QI.c)(IB, TB) : ("freeCamPerms" === IB && ZB.client.freeCameraController.setPerms(TB.key, TB.value), ZB.client.triggerGameCallback("onReceivedMessageFromServer", IB, TB))
-         })), BB.rU(cB.Mb, sI.o)
+           (0, ue.f)(et) ? (0, ue.b)(et, Ot) : ("freeCamPerms" === et && Vt.client.freeCameraController.setPerms(Ot.key, Ot.value), Vt.client.triggerGameCallback("onReceivedMessageFromServer", et, Ot))
+         })), tt.gM(Ht.Ib, Ke.h)
```

#### 244. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1182` → after: `L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1182) · [Before (L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1182)

```diff
-         this.gameNameWithVariation = BB, this.Nz = ZB, this.connectionResume = TB, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new CB.b(IB, this.Nz)
+         this.gameNameWithVariation = tt, this.ql = Vt, this.connectionResume = Ot, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new Ct.e(et, this.ql)
```

#### 245. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1189-L1190` → after: `L1189-L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1189-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1189-L1190) · [Before (L1189-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1189-L1190)

```diff
-       KcB(BB) {
-         this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new CB.b(BB, this.Nz), this.stateReplicationHandler.setup()
+       lXt(tt) {
+         this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new Ct.e(tt, this.ql), this.stateReplicationHandler.setup()
```

#### 246. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1193` → after: `L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1193) · [Before (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1193)

```diff
-         const ZB = this.Nz,
+         const Vt = this.ql,
```

#### 247. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1201-L1204` → after: `L1201-L1204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1201-L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1201-L1204) · [Before (L1201-L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1201-L1204)

```diff
-     var iI = ZB(39098),
-       pI = ZB(39104),
-       aI = ZB(696),
-       HI = ZB(3101);
+     var Se = Vt(39232),
+       ce = Vt(39241),
+       Re = Vt(738),
+       Ie = Vt(3012);
```

#### 248. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1207` → after: `L1207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1207) · [Before (L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1207)

```diff
-         this.msgHandler = ZB, this.listener = TB, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new iI.e({
+         this.msgHandler = Vt, this.listener = Ot, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Se.c({
```

#### 249. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1238` → after: `L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1238) · [Before (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1238)

```diff
-             (0, kB.d)().client.itemDropPrediction.reset()
+             (0, jt.c)().client.itemDropPrediction.reset()
```

#### 250. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1243` → after: `L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1243) · [Before (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1243)

```diff
-         }(0, kB.d)().client.itemDropPrediction.onResumeReplayOffered(), TB.offlineInputReplay.replayFrom(BB.qB, IB)
+         }(0, jt.c)().client.itemDropPrediction.onResumeReplayOffered(), Ot.offlineInputReplay.replayFrom(tt.Nt, et)
```

#### 251. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1256-L1258` → after: `L1256-L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1256-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1256-L1258) · [Before (L1256-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1256-L1258)

```diff
-         const IB = (0, aI.k)((() => BB.connection.isOpen));
-         BB.KU(IB);
-         const ZB = new pI.e((() => {
+         const et = (0, Re.i)((() => tt.connection.isOpen));
+         tt.eJ(et);
+         const Vt = new ce.d((() => {
```

#### 252. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1267-L1268` → after: `L1267-L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1267-L1268) · [Before (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1267-L1268)

```diff
-         window.addEventListener("pagehide", TB), BB.KU(((IB, ZB) => {
-           if (BB === this.attachedRoom && this.listener.isLive()) return (0, oB.g)(IB) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${IB}, reconnecting`), this.listener.onDropped(IB, ZB), void this.onConnectionDropped(BB, String(I … [truncated]
+         window.addEventListener("pagehide", Ot), tt.eJ(((et, Vt) => {
+           if (tt === this.attachedRoom && this.listener.isLive()) return (0, Dt.h)(et) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${et}, reconnecting`), this.listener.onDropped(et, Vt), void this.onConnectionDropped(tt, String(e … [truncated]
```

#### 253. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1277` → after: `L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1277) · [Before (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1277)

```diff
-         BB !== this.suspended && (this.suspended = BB, (0, TB.setConnectionSuspended)(BB), (0, kB.d)().client.itemDropPrediction.setSuspended(BB))
+         tt !== this.suspended && (this.suspended = tt, (0, Ot.setConnectionSuspended)(tt), (0, jt.c)().client.itemDropPrediction.setSuspended(tt))
```

#### 254. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1288` → after: `L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1288) · [Before (L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1288)

```diff
-         console.log("Reconnected to the game server, waiting for the game to resume"), (0, tB.r)(), TB.offlineInputReplay.onConnectionReplaced(), this.msgHandler.KcB(BB), this.listener.onReconnected(BB), this.attachRoom(BB)
+         console.log("Reconnected to the game server, waiting for the game to resume"), (0, Bt.r)(), Ot.offlineInputReplay.onConnectionReplaced(), this.msgHandler.lXt(tt), this.listener.onReconnected(tt), this.attachRoom(tt)
```

#### 255. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1291-L1306` → after: `L1291-L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1291-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1291-L1306) · [Before (L1291-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1291-L1306)

```diff
-     var jI = ZB(3141),
-       PI = ZB(3150),
-       RI = ZB(1382),
-       rI = ZB(1362),
-       mI = ZB(4856),
-       XI = ZB(3316),
-       LI = ZB(1125),
-       eI = ZB(37781),
-       uI = ZB(39110),
-       fI = ZB(9011),
-       lI = ZB(39119),
-       AI = ZB(1261),
-       tI = ZB(36516),
-       bI = ZB(39126),
-       xI = ZB(1787),
-       EI = ZB(2921);
+     var Ze = Vt(3055),
+       Le = Vt(3059),
+       Fe = Vt(1423),
+       ke = Vt(1397),
+       Ge = Vt(4830),
+       ze = Vt(3217),
+       oe = Vt(1167),
+       re = Vt(37967),
+       Ue = Vt(39249),
+       Ae = Vt(9133),
+       ie = Vt(39257),
+       Ye = Vt(1298),
+       Be = Vt(36738),
+       pe = Vt(39263),
+       xe = Vt(1820),
+       Te = Vt(2854);
```

#### 256. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1315` → after: `L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1315) · [Before (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1315)

```diff
-         errType: null !== (IB = null === (ZB = BB.constructor) || void 0 === ZB ? void 0 : ZB.name) && void 0 !== IB ? IB : "",
+         errType: null !== (et = null === (Vt = tt.constructor) || void 0 === Vt ? void 0 : Vt.name) && void 0 !== et ? et : "",
```

#### 257. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1327` → after: `L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1327) · [Before (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1327)

```diff
-     }(0, gB.o)((BB => {
+     }(0, wt.k)((tt => {
```

#### 258. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1337` → after: `L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1337) · [Before (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1337)

```diff
-         this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.Nz = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = vo … [truncated]
+         this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.ql = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = vo … [truncated]
```

#### 259. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1340-L1342` → after: `L1340-L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1340-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1340-L1342) · [Before (L1340-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1340-L1342)

```diff
-         UB.c.reset(), BB.Tm = {
-           [BB.Jm]: {}
-         }, BB.oIB = void 0, (0, tB.r)(), (0, kB.d)().removeAllEntityNames(), (0, kB.d)().setEntityName(BB.Jm, this.userContext.getPlayerName()), (0, RI.l)({
+         Mt.b.reset(), tt.dL = {
+           [tt.lL]: {}
+         }, tt.Ttt = void 0, (0, Bt.r)(), (0, jt.c)().removeAllEntityNames(), (0, jt.c)().setEntityName(tt.lL, this.userContext.getPlayerName()), (0, Fe.o)({
```

#### 260. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1344)

```diff
-         }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, xI.g)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
+         }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, xe.h)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
```

#### 261. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1346-L1347` → after: `L1346-L1347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1346-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1346-L1347) · [Before (L1346-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1346-L1347)

```diff
-         ZB.aborted || (0, rI.n)("wasm_core_ready", GB);
-         const vB = (0, lI.g)(this.userContext, (() => {
+         Vt.aborted || (0, ke.q)("wasm_core_ready", mt);
+         const dt = (0, ie.c)(this.userContext, (() => {
```

#### 262. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1351-L1352` → after: `L1351-L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1351-L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1351-L1352) · [Before (L1351-L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1351-L1352)

```diff
-           } = (0, dB.d)(this.userContext, this.gameNameWithVariation, this.lobbyName, IB, (BB => XI.e.isUsingCustomGameTexturePack(BB)));
-           return JB.joinAdHold = this.joinAdHold, JB.renderBackend = (0, EI.e)(BB.Ig), (0, uI.h)((() => this.colyClient.joinOrCreateUntil(ZB, TB, JB)), ZB)
+           } = (0, Jt.e)(this.userContext, this.gameNameWithVariation, this.lobbyName, et, (tt => ze.e.isUsingCustomGameTexturePack(tt)));
+           return qt.joinAdHold = this.joinAdHold, qt.renderBackend = (0, Te.e)(tt.Bf), (0, Ue.g)((() => this.colyClient.joinOrCreateUntil(Vt, Ot, qt)), Vt)
```

#### 263. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1354-L1357` → after: `L1354-L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1354-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1354-L1357) · [Before (L1354-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1354-L1357)

```diff
-         return yB.l.Gq("loadingScreenState", "loadingPage:joiningLobby"), await vB.then((IB => {
-           if (this.joinedAt = performance.now(), (0, rI.n)("wasm_joined", this.joinedAt), this.Nz = BB, this.joinAdHold) {
-             const BB = (0, xI.o)((() => {
-               IB.send(JB.f), (0, rI.i)(), gI.d.markJoinAdEnded()
+         return Nt.j.sw("loadingScreenState", "loadingPage:joiningLobby"), await dt.then((et => {
+           if (this.joinedAt = performance.now(), (0, ke.q)("wasm_joined", this.joinedAt), this.ql = tt, this.joinAdHold) {
+             const tt = (0, xe.v)((() => {
+               et.send(qt.h), (0, ke.i)(), ye.c.markJoinAdEnded()
```

#### 264. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1359` → after: `L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1359) · [Before (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1359)

```diff
-             IB.KU(BB), (0, TB.onGameResetOnce)(BB)
+             et.eJ(tt), (0, Ot.onGameResetOnce)(tt)
```

#### 265. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1363` → after: `L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1363) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1363)

```diff
-             BB.VY(IB)
+             tt.oW(et)
```

#### 266. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1365` → after: `L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1365) · [Before (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1365)

```diff
-             isLive: () => (0, kB.d)().client.getMsgHandler() === ZB,
+             isLive: () => (0, jt.c)().client.getMsgHandler() === Vt,
```

#### 267. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1367` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1367) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1367)

```diff
-               (0, PI.i)(BB) || this.logUnrecognisedConnectionLoss(BB, void 0, {
+               (0, Le.h)(tt) || this.logUnrecognisedConnectionLoss(tt, void 0, {
```

#### 268. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1369` → after: `L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1369) · [Before (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1369)

```diff
-                 closeReason: null !== IB && void 0 !== IB ? IB : "",
+                 closeReason: null !== et && void 0 !== et ? et : "",
```

#### 269. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1377` → after: `L1377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1377) · [Before (L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1377)

```diff
-               this.incomingMsgInitialisor.KcB(BB), this.checkSendPath = (0, eI.f)(ZB, BB, gB.s)
+               this.incomingMsgInitialisor.lXt(tt), this.checkSendPath = (0, re.i)(Vt, tt, wt.l)
```

#### 270. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1386-L1390` → after: `L1386-L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1386-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1386-L1390) · [Before (L1386-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1386-L1390)

```diff
-             GB = ZB.rU,
-             vB = ZB.xZB.send,
-             cB = ZB.xZB.rU,
-             nB = ZB.EcB;
-           this.checkSendPath = (0, eI.f)(ZB, IB, gB.s);
+             mt = Vt.gM,
+             dt = Vt.tOt.send,
+             Ht = Vt.tOt.gM,
+             Xt = Vt.XXt;
+           this.checkSendPath = (0, re.i)(Vt, et, wt.l);
```

#### 271. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1392` → after: `L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1392) · [Before (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1392)

```diff
-             oB === ZB.send && GB === ZB.rU && vB === ZB.xZB.send && cB === ZB.xZB.rU && nB === ZB.EcB || SI(), this.checkSendPath()
+             Dt === Vt.send && mt === Vt.gM && dt === Vt.tOt.send && Ht === Vt.tOt.gM && Xt === Vt.XXt || tV(), this.checkSendPath()
```

#### 272. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1401` → after: `L1401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1401) · [Before (L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1401)

```diff
-           if (ZB.aborted && IB === (0, AI.e)(ZB)) return {
+           if (Vt.aborted && et === (0, Ye.f)(Vt)) return {
```

#### 273. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1409` → after: `L1409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1409) · [Before (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1409)

```diff
-           if (IB instanceof tI.f) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
+           if (et instanceof Be.c) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
```

#### 274. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1419` → after: `L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1419) · [Before (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1419)

```diff
-           BB.wg(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${IB.code}\n`, IB);
+           tt.yw(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${et.code}\n`, et);
```

#### 275. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1421` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1421) · [Before (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1421)

```diff
-           return TB === oB.c.serverUpdating.code ? (this.goToUpdateWaiting(), {
+           return Ot === Dt.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
```

#### 276. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1424` → after: `L1424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1424) · [Before (L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1424)

```diff
-               reason: oB.c.serverUpdating.text,
+               reason: Dt.b.serverUpdating.text,
```

#### 277. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1434` → after: `L1434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1434) · [Before (L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1434)

```diff
-                 sinceJoinStart: (0, PI.e)(performance.now() - GB),
+                 sinceJoinStart: (0, Le.d)(performance.now() - mt),
```

#### 278. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1437` → after: `L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1437) · [Before (L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1437)

```diff
-               rematch: (0, uI.e)(IB),
+               rematch: (0, Ue.c)(et),
```

#### 279. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1445-L1447` → after: `L1445-L1447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1445-L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1445-L1447) · [Before (L1445-L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1445-L1447)

```diff
-         yB.l.Gq("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new YI(this.gameNameWithVariation, IB.xZB, BB, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
-         const JB = IB.InB();
-         this.incomingMsgInitialisor.setupOnMessageListeners(JB, ZB), (0, TB.onConnectionToServerReady)(JB, IB), this.joinAdHold && gI.d.markAdmissionAwaited(), JB.finishRegistration()
+         Nt.j.sw("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new We(this.gameNameWithVariation, et.tOt, tt, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
+         const qt = et.yXt();
+         this.incomingMsgInitialisor.setupOnMessageListeners(qt, Vt), (0, Ot.onConnectionToServerReady)(qt, et), this.joinAdHold && ye.c.markAdmissionAwaited(), qt.finishRegistration()
```

#### 280. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1453-L1454` → after: `L1453-L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1453-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1453-L1454) · [Before (L1453-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1453-L1454)

```diff
-         (0, LI.Og)(new Error("Reconnect failed"), {
-           ...(0, jI.j)(IB),
+         (0, oe.Nw)(new Error("Reconnect failed"), {
+           ...(0, Ze.i)(et),
```

#### 281. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1456` → after: `L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1456) · [Before (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1456)

```diff
-         }), (0, HI.reportClientError)("disconnect", "Reconnect failed", IB.reason), (0, kB.d)().client.leaveGameUnwanted({
+         }), (0, Ie.reportClientError)("disconnect", "Reconnect failed", et.reason), (0, jt.c)().client.leaveGameUnwanted({
```

#### 282. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1467` → after: `L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1467) · [Before (L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1467)

```diff
-         return null === this.joinedAt ? "" : (0, PI.e)(performance.now() - this.joinedAt)
+         return null === this.joinedAt ? "" : (0, Le.d)(performance.now() - this.joinedAt)
```

#### 283. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1471-L1475` → after: `L1471-L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1471-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1471-L1475) · [Before (L1471-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1471-L1475)

```diff
-         if (BB === oB.c.gameOrPluginKick.code) return;
-         if (console.log(`Left room with code ${BB}`), BB === oB.c.serverUpdating.code) return (0, HI.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, kB.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
-         this.Nz.wg(`Kicked from server with code ${BB}`, new Error);
-         const TB = Object.keys(oB.c).find((IB => oB.c[IB].code === BB));
-         (0, HI.reportClientError)("disconnect", "Left room", null !== TB && void 0 !== TB ? TB : String(BB));
+         if (tt === Dt.b.gameOrPluginKick.code) return;
+         if (console.log(`Left room with code ${tt}`), tt === Dt.b.serverUpdating.code) return (0, Ie.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, jt.c)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
+         this.ql.yw(`Kicked from server with code ${tt}`, new Error);
+         const Ot = Object.keys(Dt.b).find((et => Dt.b[et].code === tt));
+         (0, Ie.reportClientError)("disconnect", "Left room", null !== Ot && void 0 !== Ot ? Ot : String(tt));
```

#### 284. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1478` → after: `L1478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1478) · [Before (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1478)

```diff
-           closeReason: null !== IB && void 0 !== IB ? IB : "",
+           closeReason: null !== et && void 0 !== et ? et : "",
```

#### 285. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1481-L1482` → after: `L1481-L1482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1481-L1482) · [Before (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1481-L1482)

```diff
-         (0, kB.d)().client.leaveGameUnwanted({
-           reason: `You have disconnected from the server.\n${JB.reason}`,
+         (0, jt.c)().client.leaveGameUnwanted({
+           reason: `You have disconnected from the server.\n${qt.reason}`,
```

#### 286. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1489` → after: `L1489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1489) · [Before (L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1489)

```diff
-         return (0, mI.A)(this.gameNameWithVariation, this.lobbyName)
+         return (0, Ge.B)(this.gameNameWithVariation, this.lobbyName)
```

#### 287. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1497` → after: `L1497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1497) · [Before (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1497)

```diff
-         if (null !== (TB = IB) && void 0 !== TB && TB.endsWith(oB.k) && (this.userContext.invalidateTrafficCode(), IB = IB.replace(oB.k, "")), BB === oB.c.outdatedVersion.code) return console.error("Outdated client with version ", GB.b, ", refreshing page"), (0, WB.reloadBloxd)() … [truncated]
+         if (null !== (Ot = et) && void 0 !== Ot && Ot.endsWith(Dt.l) && (this.userContext.invalidateTrafficCode(), et = et.replace(Dt.l, "")), tt === Dt.b.outdatedVersion.code) return console.error("Outdated client with version ", mt.d, ", refreshing page"), (0, bt.reloadBloxd)() … [truncated]
```

#### 288. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1502` → after: `L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1502) · [Before (L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1502)

```diff
-         if (BB === oB.c.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, WB.reloadBloxd)(), {
+         if (tt === Dt.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, bt.reloadBloxd)(), {
```

#### 289. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1507` → after: `L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1507) · [Before (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1507)

```diff
-         for (const GB in oB.c) {
+         for (const mt in Dt.b) {
```

#### 290. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1512` → after: `L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1512) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1512)

```diff
-           } = oB.c[GB];
+           } = Dt.b[mt];
```

#### 291. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1516` → after: `L1516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1516) · [Before (L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1516)

```diff
-               reason: "" !== TB ? TB : IB || `Code: ${BB}`,
+               reason: "" !== Ot ? Ot : et || `Code: ${tt}`,
```

#### 292. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1519` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1519) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1519)

```diff
-               automaticallyReconnect: ZB === oB.c.customGameUpdated.code || ZB === oB.c.duplicateLobbyNameError.code
+               automaticallyReconnect: Vt === Dt.b.customGameUpdated.code || Vt === Dt.b.duplicateLobbyNameError.code
```

#### 293. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1523-L1524` → after: `L1523-L1524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1523-L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1523-L1524) · [Before (L1523-L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1523-L1524)

```diff
-         return console.log("Didn't match known error, leaving game"), (0, PI.g)(BB) || JB ? console.warn("Connection lost", BB, IB) : this.logUnrecognisedConnectionLoss(BB, IB, ZB), {
-           reason: `Either your internet isn't working or this is a bug.\nCode: ${BB}`,
+         return console.log("Didn't match known error, leaving game"), (0, Le.e)(tt) || qt ? console.warn("Connection lost", tt, et) : this.logUnrecognisedConnectionLoss(tt, et, Vt), {
+           reason: `Either your internet isn't working or this is a bug.\nCode: ${tt}`,
```

#### 294. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1531` → after: `L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1531) · [Before (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1531)

```diff
-         (0, LI.Og)(new Error("Unrecognised connection loss"), {
+         (0, oe.Nw)(new Error("Unrecognised connection loss"), {
```

#### 295. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1533` → after: `L1533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1533) · [Before (L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1533)

```diff
-           cause: null !== IB && void 0 !== IB ? IB : "",
+           cause: null !== et && void 0 !== et ? et : "",
```

#### 296. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1536` → after: `L1536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1536) · [Before (L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1536)

```diff
-           ...(0, PI.l)()
+           ...(0, Le.k)()
```

#### 297. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1541` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1541) · [Before (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1541)

```diff
-   39023: (BB, IB, ZB) => {
+   39158: (tt, et, Vt) => {
```

#### 298. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1543-L1544` → after: `L1543-L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1543-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1543-L1544) · [Before (L1543-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1543-L1544)

```diff
-       b: () => bZ,
-       f: () => SZ
+       e: () => pV,
+       g: () => tO
```

#### 299. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1546-L1553` → after: `L1546-L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1546-L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1546-L1553) · [Before (L1546-L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1546-L1553)

```diff
-     var TB, JB, oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB, yB, UB, WB, dB, CB, QB, sB, wB, OB, YB, iB, pB, aB, HB, MB, jB, PB, RB, rB, mB, XB, LB, eB, uB, fB, lB, AB, tB, bB, xB, EB, DB, KB, VB, SB, BI, II, ZI, TI, JI, oI, GI, vI, kI, cI, nI, hI, zI, FI, NI, gI, qI, yI, UI,  … [truncated]
-       SI = ZB(37192),
-       BZ = ZB(39032),
-       IZ = ZB(39039),
-       ZZ = ZB(9201),
-       TZ = ZB(663),
-       JZ = ZB(655),
-       oZ = ZB(36827);
+     var Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt, Nt, Mt, bt, Jt, Ct, ut, Kt, ht, vt, Wt, St, ct, Rt, It, Pt, Zt, Lt, Ft, kt, Gt, zt, ot, rt, Ut, At, it, Yt, Bt, pt, xt, Tt, gt, st, nt, te, ee, Ve, Oe, qe, De, me, de, je, He, Xe, Qe, le, Ee, fe, we, ye, Ne, ae, Me,  … [truncated]
+       tV = Vt(37401),
+       eV = Vt(39169),
+       VV = Vt(39177),
+       OV = Vt(9348),
+       qV = Vt(707),
+       DV = Vt(705),
+       mV = Vt(37028);
```

#### 300. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1556` → after: `L1556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1556) · [Before (L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1556)

```diff
-           super(...arguments), (0, BZ.d)(this, "id", hB, this), (0, BZ.d)(this, "amount", zB, this), (0, BZ.d)(this, "x", FB, this), (0, BZ.d)(this, "y", NB, this), (0, BZ.d)(this, "z", gB, this), (0, BZ.d)(this, "size", qB, this), (0, BZ.d)(this, "attributes", yB, this)
+           super(...arguments), (0, eV.b)(this, "id", Qt, this), (0, eV.b)(this, "amount", lt, this), (0, eV.b)(this, "x", Et, this), (0, eV.b)(this, "y", ft, this), (0, eV.b)(this, "z", wt, this), (0, eV.b)(this, "size", yt, this), (0, eV.b)(this, "attributes", Nt, this)
```

#### 301. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1558)

```diff
-       }, hB = (0, IZ.b)(nB.prototype, "id", [TB], {
+       }, Qt = (0, VV.e)(Xt.prototype, "id", [Ot], {
```

#### 302. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1565` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1565) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1565)

```diff
-       }), zB = (0, IZ.b)(nB.prototype, "amount", [JB], {
+       }), lt = (0, VV.e)(Xt.prototype, "amount", [qt], {
```

#### 303. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1572` → after: `L1572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1572) · [Before (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1572)

```diff
-       }), FB = (0, IZ.b)(nB.prototype, "x", [oB], {
+       }), Et = (0, VV.e)(Xt.prototype, "x", [Dt], {
```

#### 304. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1579` → after: `L1579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1579) · [Before (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1579)

```diff
-       }), NB = (0, IZ.b)(nB.prototype, "y", [GB], {
+       }), ft = (0, VV.e)(Xt.prototype, "y", [mt], {
```

#### 305. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1586)

```diff
-       }), gB = (0, IZ.b)(nB.prototype, "z", [vB], {
+       }), wt = (0, VV.e)(Xt.prototype, "z", [dt], {
```

#### 306. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1593` → after: `L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1593) · [Before (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1593)

```diff
-       }), qB = (0, IZ.b)(nB.prototype, "size", [kB], {
+       }), yt = (0, VV.e)(Xt.prototype, "size", [jt], {
```

#### 307. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1600` → after: `L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1600) · [Before (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1600)

```diff
-       }), yB = (0, IZ.b)(nB.prototype, "attributes", [cB], {
+       }), Nt = (0, VV.e)(Xt.prototype, "attributes", [Ht], {
```

#### 308. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1610` → after: `L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1610) · [Before (L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1610)

```diff
-           super(...arguments), (0, BZ.d)(this, "itemName", CB, this), (0, BZ.d)(this, "enchantmentTier", QB, this)
+           super(...arguments), (0, eV.b)(this, "itemName", Ct, this), (0, eV.b)(this, "enchantmentTier", ut, this)
```

#### 309. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1612` → after: `L1612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1612) · [Before (L1612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1612)

```diff
-       }, CB = (0, IZ.b)(dB.prototype, "itemName", [UB], {
+       }, Ct = (0, VV.e)(Jt.prototype, "itemName", [Mt], {
```

#### 310. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1617)

```diff
-       }), QB = (0, IZ.b)(dB.prototype, "enchantmentTier", [WB], {
+       }), ut = (0, VV.e)(Jt.prototype, "enchantmentTier", [bt], {
```

#### 311. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1625` → after: `L1625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1625) · [Before (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1625)

```diff
-           super(...arguments), (0, BZ.d)(this, "type", rB, this), (0, BZ.d)(this, "name", mB, this), (0, BZ.d)(this, "x", XB, this), (0, BZ.d)(this, "y", LB, this), (0, BZ.d)(this, "z", eB, this), (0, BZ.d)(this, "xRotation", uB, this), (0, BZ.d)(this, "yRotation", fB, this), (0, … [truncated]
+           super(...arguments), (0, eV.b)(this, "type", kt, this), (0, eV.b)(this, "name", Gt, this), (0, eV.b)(this, "x", zt, this), (0, eV.b)(this, "y", ot, this), (0, eV.b)(this, "z", rt, this), (0, eV.b)(this, "xRotation", Ut, this), (0, eV.b)(this, "yRotation", At, this), (0, … [truncated]
```

#### 312. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1627` → after: `L1627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1627) · [Before (L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1627)

```diff
-       }, rB = (0, IZ.b)(RB.prototype, "type", [sB], {
+       }, kt = (0, VV.e)(Ft.prototype, "type", [Kt], {
```

#### 313. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1632` → after: `L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1632) · [Before (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1632)

```diff
-       }), mB = (0, IZ.b)(RB.prototype, "name", [wB], {
+       }), Gt = (0, VV.e)(Ft.prototype, "name", [ht], {
```

#### 314. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1639` → after: `L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1639) · [Before (L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1639)

```diff
-       }), XB = (0, IZ.b)(RB.prototype, "x", [OB], {
+       }), zt = (0, VV.e)(Ft.prototype, "x", [vt], {
```

#### 315. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1646` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1646) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1646)

```diff
-       }), LB = (0, IZ.b)(RB.prototype, "y", [YB], {
+       }), ot = (0, VV.e)(Ft.prototype, "y", [Wt], {
```

#### 316. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1653` → after: `L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1653) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1653)

```diff
-       }), eB = (0, IZ.b)(RB.prototype, "z", [iB], {
+       }), rt = (0, VV.e)(Ft.prototype, "z", [St], {
```

#### 317. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1660` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1660) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1660)

```diff
-       }), uB = (0, IZ.b)(RB.prototype, "xRotation", [pB], {
+       }), Ut = (0, VV.e)(Ft.prototype, "xRotation", [ct], {
```

#### 318. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1667)

```diff
-       }), fB = (0, IZ.b)(RB.prototype, "yRotation", [aB], {
+       }), At = (0, VV.e)(Ft.prototype, "yRotation", [Rt], {
```

#### 319. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1674` → after: `L1674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1674) · [Before (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1674)

```diff
-       }), lB = (0, IZ.b)(RB.prototype, "zRotation", [HB], {
+       }), it = (0, VV.e)(Ft.prototype, "zRotation", [It], {
```

#### 320. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1681` → after: `L1681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1681) · [Before (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1681)

```diff
-       }), AB = (0, IZ.b)(RB.prototype, "followingEId", [MB], {
+       }), Yt = (0, VV.e)(Ft.prototype, "followingEId", [Pt], {
```

#### 321. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1686` → after: `L1686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1686) · [Before (L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1686)

```diff
-       }), tB = (0, IZ.b)(RB.prototype, "followingOffset", [jB], {
+       }), Bt = (0, VV.e)(Ft.prototype, "followingOffset", [Zt], {
```

#### 322. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1693` → after: `L1693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1693) · [Before (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1693)

```diff
-       }), bB = (0, IZ.b)(RB.prototype, "shouldMatchFollowingEntityRotation", [PB], {
+       }), pt = (0, VV.e)(Ft.prototype, "shouldMatchFollowingEntityRotation", [Lt], {
```

#### 323. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1705` → after: `L1705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1705) · [Before (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1705)

```diff
-           super(...arguments), (0, BZ.d)(this, "scale", kI, this), (0, BZ.d)(this, "speed", cI, this), (0, BZ.d)(this, "jumping", nI, this), (0, BZ.d)(this, "crouching", hI, this), (0, BZ.d)(this, "cameraPitch", zI, this), (0, BZ.d)(this, "armSwinging", FI, this), (0, BZ.d)(this, … [truncated]
+           super(...arguments), (0, eV.b)(this, "scale", He, this), (0, eV.b)(this, "speed", Xe, this), (0, eV.b)(this, "jumping", Qe, this), (0, eV.b)(this, "crouching", le, this), (0, eV.b)(this, "cameraPitch", Ee, this), (0, eV.b)(this, "armSwinging", fe, this), (0, eV.b)(this, … [truncated]
```

#### 324. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1707` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1707) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1707)

```diff
-       }, kI = (0, IZ.b)(vI.prototype, "scale", [xB], {
+       }, He = (0, VV.e)(je.prototype, "scale", [xt], {
```

#### 325. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1714` → after: `L1714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1714) · [Before (L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1714)

```diff
-       }), cI = (0, IZ.b)(vI.prototype, "speed", [EB], {
+       }), Xe = (0, VV.e)(je.prototype, "speed", [Tt], {
```

#### 326. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1721` → after: `L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1721) · [Before (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1721)

```diff
-       }), nI = (0, IZ.b)(vI.prototype, "jumping", [DB], {
+       }), Qe = (0, VV.e)(je.prototype, "jumping", [gt], {
```

#### 327. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1728` → after: `L1728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1728) · [Before (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1728)

```diff
-       }), hI = (0, IZ.b)(vI.prototype, "crouching", [KB], {
+       }), le = (0, VV.e)(je.prototype, "crouching", [st], {
```

#### 328. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1735` → after: `L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1735) · [Before (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1735)

```diff
-       }), zI = (0, IZ.b)(vI.prototype, "cameraPitch", [VB], {
+       }), Ee = (0, VV.e)(je.prototype, "cameraPitch", [nt], {
```

#### 329. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1742` → after: `L1742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1742) · [Before (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1742)

```diff
-       }), FI = (0, IZ.b)(vI.prototype, "armSwinging", [SB], {
+       }), fe = (0, VV.e)(je.prototype, "armSwinging", [te], {
```

#### 330. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1749` → after: `L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1749) · [Before (L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1749)

```diff
-       }), NI = (0, IZ.b)(vI.prototype, "heldItemName", [BI], {
+       }), we = (0, VV.e)(je.prototype, "heldItemName", [ee], {
```

#### 331. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1754` → after: `L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1754) · [Before (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1754)

```diff
-       }), gI = (0, IZ.b)(vI.prototype, "heldItemEnchantmentTier", [II], {
+       }), ye = (0, VV.e)(je.prototype, "heldItemEnchantmentTier", [Ve], {
```

#### 332. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1759` → after: `L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1759) · [Before (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1759)

```diff
-       }), qI = (0, IZ.b)(vI.prototype, "pose", [ZI], {
+       }), Ne = (0, VV.e)(je.prototype, "pose", [Oe], {
```

#### 333. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1766` → after: `L1766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1766) · [Before (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1766)

```diff
-       }), yI = (0, IZ.b)(vI.prototype, "ridingVehicleEId", [TI], {
+       }), ae = (0, VV.e)(je.prototype, "ridingVehicleEId", [qe], {
```

#### 334. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1773` → after: `L1773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1773) · [Before (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1773)

```diff
-       }), UI = (0, IZ.b)(vI.prototype, "meshOffset", [JI], {
+       }), Me = (0, VV.e)(je.prototype, "meshOffset", [De], {
```

#### 335. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1780` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1780) · [Before (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1780)

```diff
-       }), WI = (0, IZ.b)(vI.prototype, "baseRenderHeading", [oI], {
+       }), be = (0, VV.e)(je.prototype, "baseRenderHeading", [me], {
```

#### 336. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1787` → after: `L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1787) · [Before (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1787)

```diff
-       }), dI = (0, IZ.b)(vI.prototype, "armour", [GI], {
+       }), Je = (0, VV.e)(je.prototype, "armour", [de], {
```

#### 337. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1797` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1797) · [Before (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1797)

```diff
-           super(...arguments), (0, BZ.d)(this, "variation", YI, this), (0, BZ.d)(this, "ownerDbId", iI, this), (0, BZ.d)(this, "metaInfo", pI, this), (0, BZ.d)(this, "aiState", aI, this)
+           super(...arguments), (0, eV.b)(this, "variation", We, this), (0, eV.b)(this, "ownerDbId", Se, this), (0, eV.b)(this, "metaInfo", ce, this), (0, eV.b)(this, "aiState", Re, this)
```

#### 338. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1799` → after: `L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1799) · [Before (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1799)

```diff
-       }, YI = (0, IZ.b)(OI.prototype, "variation", [CI], {
+       }, We = (0, VV.e)(ve.prototype, "variation", [Ce], {
```

#### 339. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1806` → after: `L1806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1806) · [Before (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1806)

```diff
-       }), iI = (0, IZ.b)(OI.prototype, "ownerDbId", [QI], {
+       }), Se = (0, VV.e)(ve.prototype, "ownerDbId", [ue], {
```

#### 340. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1813` → after: `L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1813) · [Before (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1813)

```diff
-       }), pI = (0, IZ.b)(OI.prototype, "metaInfo", [sI], {
+       }), ce = (0, VV.e)(ve.prototype, "metaInfo", [Ke], {
```

#### 341. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1820` → after: `L1820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1820) · [Before (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1820)

```diff
-       }), aI = (0, IZ.b)(OI.prototype, "aiState", [wI], {
+       }), Re = (0, VV.e)(ve.prototype, "aiState", [he], {
```

#### 342. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1830` → after: `L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1830) · [Before (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1830)

```diff
-         super(...arguments), (0, BZ.d)(this, "meshKind", rI, this), (0, BZ.d)(this, "meshOpts", mI, this), (0, BZ.d)(this, "pose", XI, this), (0, BZ.d)(this, "leaderboardTop", LI, this)
+         super(...arguments), (0, eV.b)(this, "meshKind", ke, this), (0, eV.b)(this, "meshOpts", Ge, this), (0, eV.b)(this, "pose", ze, this), (0, eV.b)(this, "leaderboardTop", oe, this)
```

#### 343. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1832` → after: `L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1832) · [Before (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1832)

```diff
-     }, rI = (0, IZ.b)(RI.prototype, "meshKind", [HI], {
+     }, ke = (0, VV.e)(Fe.prototype, "meshKind", [Ie], {
```

#### 344. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1837` → after: `L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1837) · [Before (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1837)

```diff
-     }), mI = (0, IZ.b)(RI.prototype, "meshOpts", [MI], {
+     }), Ge = (0, VV.e)(Fe.prototype, "meshOpts", [Pe], {
```

#### 345. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1842` → after: `L1842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1842) · [Before (L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1842)

```diff
-     }), XI = (0, IZ.b)(RI.prototype, "pose", [jI], {
+     }), ze = (0, VV.e)(Fe.prototype, "pose", [Ze], {
```

#### 346. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1847` → after: `L1847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1847) · [Before (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1847)

```diff
-     }), LI = (0, IZ.b)(RI.prototype, "leaderboardTop", [PI], {
+     }), oe = (0, VV.e)(Fe.prototype, "leaderboardTop", [Le], {
```

#### 347. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1859` → after: `L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1859) · [Before (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1859)

```diff
-       if (!zZ.includes(BT)) throw new Error(`Mob Schema is missing a networked property: "${BT}"`);
+       if (!EV.includes(eO)) throw new Error(`Mob Schema is missing a networked property: "${eO}"`);
```

#### 348. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1862` → after: `L1862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1862) · [Before (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1862)

```diff
-         super(...arguments), (0, BZ.d)(this, "soundName", bI, this), (0, BZ.d)(this, "volume", xI, this), (0, BZ.d)(this, "refDistance", EI, this), (0, BZ.d)(this, "maxHearDist", DI, this), (0, BZ.d)(this, "rate", KI, this)
+         super(...arguments), (0, eV.b)(this, "soundName", pe, this), (0, eV.b)(this, "volume", xe, this), (0, eV.b)(this, "refDistance", Te, this), (0, eV.b)(this, "maxHearDist", ge, this), (0, eV.b)(this, "rate", se, this)
```

#### 349. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1864` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1864) · [Before (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1864)

```diff
-     }, bI = (0, IZ.b)(tI.prototype, "soundName", [eI], {
+     }, pe = (0, VV.e)(Be.prototype, "soundName", [re], {
```

#### 350. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1871` → after: `L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1871) · [Before (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1871)

```diff
-     }), xI = (0, IZ.b)(tI.prototype, "volume", [uI], {
+     }), xe = (0, VV.e)(Be.prototype, "volume", [Ue], {
```

#### 351. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1878` → after: `L1878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1878) · [Before (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1878)

```diff
-     }), EI = (0, IZ.b)(tI.prototype, "refDistance", [fI], {
+     }), Te = (0, VV.e)(Be.prototype, "refDistance", [Ae], {
```

#### 352. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1883` → after: `L1883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1883) · [Before (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1883)

```diff
-         return oZ.h
+         return mV.f
```

#### 353. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1885` → after: `L1885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1885) · [Before (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1885)

```diff
-     }), DI = (0, IZ.b)(tI.prototype, "maxHearDist", [lI], {
+     }), ge = (0, VV.e)(Be.prototype, "maxHearDist", [ie], {
```

#### 354. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1890` → after: `L1890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1890) · [Before (L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1890)

```diff
-         return oZ.e
+         return mV.b
```

#### 355. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1892` → after: `L1892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1892) · [Before (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1892)

```diff
-     }), KI = (0, IZ.b)(tI.prototype, "rate", [AI], {
+     }), se = (0, VV.e)(Be.prototype, "rate", [Ye], {
```

#### 356. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1900-L1914` → after: `L1900-L1914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1900-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1900-L1914) · [Before (L1900-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1900-L1914)

```diff
-     for (const BT of JZ.h)
-       if (!FZ.includes(BT)) throw new Error(`AudioEntity Schema is missing a replicated property: "${BT}"`);
-     var NZ = ZB(38483),
-       gZ = ZB(1300),
-       qZ = ZB(665),
-       yZ = ZB(38270),
-       UZ = ZB(4416),
-       WZ = ZB(360),
-       dZ = ZB(37304),
-       CZ = ZB(38159),
-       QZ = ZB(2326),
-       sZ = ZB(37270),
-       wZ = ZB(38501),
-       OZ = ZB(37436),
-       YZ = ZB(364),
+     for (const eO of DV.d)
+       if (!fV.includes(eO)) throw new Error(`AudioEntity Schema is missing a replicated property: "${eO}"`);
+     var wV = Vt(38657),
+       yV = Vt(1325),
+       NV = Vt(710),
+       aV = Vt(38457),
+       MV = Vt(4339),
+       bV = Vt(391),
+       JV = Vt(37510),
+       CV = Vt(38347),
+       uV = Vt(2290),
+       KV = Vt(37480),
+       hV = Vt(38686),
+       vV = Vt(37634),
+       WV = Vt(404),
```

#### 357. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1916-L1919` → after: `L1916-L1919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1916-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1916-L1919) · [Before (L1916-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1916-L1919)

```diff
-       pZ = ZB(37998),
-       aZ = ZB(37105),
-       HZ = ZB(38140),
-       MZ = ZB(38181);
+       cV = Vt(38192),
+       RV = Vt(37317),
+       IV = Vt(38321),
+       PV = Vt(38363);
```

#### 358. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1922` → after: `L1922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1922) · [Before (L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1922)

```diff
-         this.bloxd = BB, this.eId = IB, this.Nz = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub  … [truncated]
+         this.bloxd = tt, this.eId = et, this.ql = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub  … [truncated]
```

#### 359. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1926` → after: `L1926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1926) · [Before (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1926)

```diff
-         this.colyseusEntity = BB, this.meshKind = BB.meshKind, this.meshOpts = BB.meshOpts, this.leaderboardTop = BB.leaderboardTop, this.Nz.zW.add([BB.x, BB.y, BB.z], 1, 1, null, null, !1, !1, this.eId), this.Nz.zW.xR(this.eId, "smoothToServerPos");
+         this.colyseusEntity = tt, this.meshKind = tt.meshKind, this.meshOpts = tt.meshOpts, this.leaderboardTop = tt.leaderboardTop, this.ql.mJ.add([tt.x, tt.y, tt.z], 1, 1, null, null, !1, !1, this.eId), this.ql.mJ.RZ(this.eId, "smoothToServerPos");
```

#### 360. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1928` → after: `L1928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1928) · [Before (L1928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1928)

```diff
-         this.Nz.zW.xR(this.eId, "meshRotation", {
+         this.ql.mJ.RZ(this.eId, "meshRotation", {
```

#### 361. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1935` → after: `L1935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1935) · [Before (L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1935)

```diff
-             softTolerance: wZ.j,
+             softTolerance: hV.l,
```

#### 362. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1938` → after: `L1938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1938) · [Before (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1938)

```diff
-         }), this.updateHidingMeshMgr(), this.canSeeSub = VI.l.subscribe(`otherEntitySettings|${this.eId}|canSee`, (BB => {
+         }), this.updateHidingMeshMgr(), this.canSeeSub = ne.j.subscribe(`otherEntitySettings|${this.eId}|canSee`, (tt => {
```

#### 363. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1942` → after: `L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1942) · [Before (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1942)

```diff
-           const BB = this.Nz.zW.RIB(this.eId);
+           const tt = this.ql.mJ.oet(this.eId);
```

#### 364. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1944-L1945` → after: `L1944-L1945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1944-L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1944-L1945) · [Before (L1944-L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1944-L1945)

```diff
-           const IB = (0, OZ.f)(this.eId);
-           if ("number" === typeof BB.gR) {
+           const et = (0, vV.k)(this.eId);
+           if ("number" === typeof tt.RP) {
```

#### 365. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1947-L1948` → after: `L1947-L1948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1947-L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1947-L1948) · [Before (L1947-L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1947-L1948)

```diff
-             const GB = null === (ZB = (0, QZ.h)("head", null === (JB = this.getSpec()) || void 0 === JB || null === (oB = JB.opts.textures) || void 0 === oB ? void 0 : oB.head)) || void 0 === ZB || null === (TB = ZB.personModel) || void 0 === TB ? void 0 : TB.fullBody;
-             return this.Nz.Ig.kR.setPickable(BB.gR, IB && !GB), void(0, aZ.updatePersonAttachmentPickability)(this.Nz, this.eId, IB)
+             const mt = null === (Vt = (0, uV.n)("head", null === (qt = this.getSpec()) || void 0 === qt || null === (Dt = qt.opts.textures) || void 0 === Dt ? void 0 : Dt.head)) || void 0 === Vt || null === (Ot = Vt.personModel) || void 0 === Ot ? void 0 : Ot.fullBody;
+             return this.ql.Bf.xI.setPickable(tt.RP, et && !mt), void(0, RV.updatePersonAttachmentPickability)(this.ql, this.eId, et)
```

#### 366. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1952` → after: `L1952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1952) · [Before (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1952)

```diff
-             for (const vB of [GB, ...GB.getChildMeshes(!1)]) "tg" in vB && !vB.name.startsWith("Cape|") && (vB.tg = IB)
+             for (const dt of [mt, ...mt.getChildMeshes(!1)]) "Gw" in dt && !dt.name.startsWith("Cape|") && (dt.Gw = et)
```

#### 367. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1954` → after: `L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1954) · [Before (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1954)

```diff
-         this.canAttackSub = VI.l.subscribe(`otherEntitySettings|${this.eId}|canAttack`, oB), this.interactableSub = VI.l.subscribe(`otherEntitySettings|${this.eId}|interactable`, oB), this.overlayColourSub = VI.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayCol … [truncated]
+         this.canAttackSub = ne.j.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Dt), this.interactableSub = ne.j.subscribe(`otherEntitySettings|${this.eId}|interactable`, Dt), this.overlayColourSub = ne.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayCol … [truncated]
```

#### 368. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1956` → after: `L1956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1956) · [Before (L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1956)

```diff
-         })), this.opacitySub = VI.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (BB => {
+         })), this.opacitySub = ne.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (tt => {
```

#### 369. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1958` → after: `L1958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1958) · [Before (L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1958)

```diff
-         })), this.zIndexSub = VI.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (BB => {
+         })), this.zIndexSub = ne.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (tt => {
```

#### 370. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1961-L1962` → after: `L1961-L1962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1961-L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1961-L1962) · [Before (L1961-L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1961-L1962)

```diff
-         const GB = this.Nz.Tm[this.Nz.Jm][this.eId];
-         this.updateOverlayColour(null !== (IB = null === GB || void 0 === GB ? void 0 : GB.overlayColour) && void 0 !== IB ? IB : null), this.updateOpacity(null !== (ZB = null === GB || void 0 === GB ? void 0 : GB.opacity) && void 0 !== ZB ? ZB : 1), this.updateZIndex(null !== (T … [truncated]
+         const mt = this.ql.dL[this.ql.lL][this.eId];
+         this.updateOverlayColour(null !== (et = null === mt || void 0 === mt ? void 0 : mt.overlayColour) && void 0 !== et ? et : null), this.updateOpacity(null !== (Vt = null === mt || void 0 === mt ? void 0 : mt.opacity) && void 0 !== Vt ? Vt : 1), this.updateZIndex(null !== (O … [truncated]
```

#### 371. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1965` → after: `L1965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/248.js#L1965) · [Before (L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/248.js#L1965)

```diff
-         if ("xRotation" === BB || "yRotation" === BB || "zRotation" === BB)(0, sZ.r)(this.Nz, this.eId, BB, IB);
+         if ("xRotation" === tt || "yRotation" === tt || "zRotation" === tt)(0, KV.t)(this.ql, this.eId, tt, et);
```
