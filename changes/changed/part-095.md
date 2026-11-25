# Changed — Bundle Modifications Report (Part 095 / 138)

- **Updated at**: `2026-11-25T13:06 JST`
- **Part**: `95 / 138` (**417** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 094](part-094.md) · [Part 096 →](part-096.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (igzsf.a0b73a5f → dz8ef.98c5e741 · continued)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (982 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 346. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6922-L6933` → after: `L6922-L6933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6922-L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6922-L6933) · [Before (L6922-L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6922-L6933)

```diff
-             qt = [...Ot.filter((tt => et(tt))), ...Ot.filter((tt => !et(tt)))],
-             Dt = [];
-           for (let mt = 0; mt < qt.length; mt += 2) Dt.push(qt.slice(mt, mt + 2));
-           return Dt
-         }(qt, (tt => lD.freeAt(tt.name) <= Ot)) : qt.map((tt => [tt])),
-         mt = [];
-       for (const jt of Dt) {
-         const et = await BD(jt, tt, Vt.signal, Vt.onProgress, Vt.tools);
-         if (null !== et.reply) {
-           const qt = jt.find((tt => {
-             var Vt;
-             return tt.name === (null === (Vt = et.reply) || void 0 === Vt ? void 0 : Vt.model)
+             Uu = [...su.filter((uu => Eu(uu))), ...su.filter((uu => !Eu(uu)))],
+             Zu = [];
+           for (let Xu = 0; Xu < Uu.length; Xu += 2) Zu.push(Uu.slice(Xu, Xu + 2));
+           return Zu
+         }(Uu, (uu => NZ.freeAt(uu.name) <= su)) : Uu.map((uu => [uu])),
+         Xu = [];
+       for (const qu of Zu) {
+         const Eu = await HZ(qu, uu, ju.signal, ju.onProgress, ju.tools);
+         if (null !== Eu.reply) {
+           const Uu = qu.find((uu => {
+             var ju;
+             return uu.name === (null === (ju = Eu.reply) || void 0 === ju ? void 0 : ju.model)
```

#### 347. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6936-L6937` → after: `L6936-L6937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6936-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6936-L6937) · [Before (L6936-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6936-L6937)

```diff
-             ...qt && !1 !== Vt.canNudge ? await sD(qt, SD(tt, qt), et.reply, Vt.signal, Vt.onProgress, Vt.tools) : et.reply,
-             ms: Date.now() - Ot
+             ...Uu && !1 !== ju.canNudge ? await RZ(Uu, kZ(uu, Uu), Eu.reply, ju.signal, ju.onProgress, ju.tools) : Eu.reply,
+             ms: Date.now() - su
```

#### 348. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6940` → after: `L6940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6940) · [Before (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6940)

```diff
-         mt.push(...et.failures)
+         Xu.push(...Eu.failures)
```

#### 349. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6942-L6943` → after: `L6942-L6943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6942-L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6942-L6943) · [Before (L6942-L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6942-L6943)

```diff
-       const dt = PD.find((tt => mt.includes(tt)));
-       throw new ZD(null !== dt && void 0 !== dt ? dt : "failed")
+       const lu = VZ.find((uu => Xu.includes(uu)));
+       throw new rZ(null !== lu && void 0 !== lu ? lu : "failed")
```

#### 350. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6945` → after: `L6945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6945) · [Before (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6945)

```diff
-     const TD = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
+     const yZ = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
```

#### 351. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6947-L6949` → after: `L6947-L6949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6947-L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6947-L6949) · [Before (L6947-L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6947-L6949)

```diff
-     function gD(tt) {
-       const et = tt.trim();
-       return et.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(et) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(et) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
+     function zZ(uu) {
+       const Eu = uu.trim();
+       return Eu.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(Eu) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(Eu) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
```

#### 352. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6956` → after: `L6956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6956) · [Before (L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6956)

```diff
-         }(Vt, null !== (mt = tt.callFormat) && void 0 !== mt ? mt : "simple")) return Vt;
+         }(ju, null !== (Xu = uu.callFormat) && void 0 !== Xu ? Xu : "simple")) return ju;
```

#### 353. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6967` → after: `L6967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6967) · [Before (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6967)

```diff
-         return rD(et) && "" !== et.answer.trim() ? et : Vt
+         return BZ(Eu) && "" !== Eu.answer.trim() ? Eu : ju
```

#### 354. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6970` → after: `L6970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L6970) · [Before (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L6970)

```diff
-         return MD.iE(tt.name, Ht.signal.aborted ? "timeout" : "network"), Vt
+         return eZ.HN(uu.name, fu.signal.aborted ? "timeout" : "network"), ju
```

#### 355. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7023-L7024` → after: `L7023-L7024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7023-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7023-L7024) · [Before (L7023-L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7023-L7024)

```diff
-         if (yD(tt, Vt), 429 === Vt.status) return MD.iE(tt, Vt), "busy";
-         if (!Vt.ok) return MD.iE(tt, Vt), null;
+         if (DZ(uu, ju), 429 === ju.status) return eZ.HN(uu, ju), "busy";
+         if (!ju.ok) return eZ.HN(uu, ju), null;
```

#### 356. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7026` → after: `L7026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7026) · [Before (L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7026)

```diff
-           Ht = String(null !== (qt = null === (Dt = jt.choices) || void 0 === Dt || null === (mt = Dt[0]) || void 0 === mt || null === (dt = mt.message) || void 0 === dt ? void 0 : dt.content) && void 0 !== qt ? qt : "");
+           fu = String(null !== (Uu = null === (Zu = qu.choices) || void 0 === Zu || null === (Xu = Zu[0]) || void 0 === Xu || null === (lu = Xu.message) || void 0 === lu ? void 0 : lu.content) && void 0 !== Uu ? Uu : "");
```

#### 357. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7030` → after: `L7030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7030) · [Before (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7030)

```diff
-           }(Ht) ? Ht : null
+           }(fu) ? fu : null
```

#### 358. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7033` → after: `L7033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7033) · [Before (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7033)

```diff
-         return MD.iE(tt, Ot.signal.aborted ? "timeout" : "network"), null
+         return eZ.HN(uu, su.signal.aborted ? "timeout" : "network"), null
```

#### 359. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7038` → after: `L7038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7038) · [Before (L7038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7038)

```diff
-     var qm = Vt(39);
+     var ZX = ju(31);
```

#### 360. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7042-L7043` → after: `L7042-L7043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7042-L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7042-L7043) · [Before (L7042-L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7042-L7043)

```diff
-       const tt = qm.e.getItem(Dm);
-       return null !== tt && "object" === typeof tt ? tt : {}
+       const uu = ZX.k.getItem(XX);
+       return null !== uu && "object" === typeof uu ? uu : {}
```

#### 361. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7053` → after: `L7053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7053) · [Before (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7053)

```diff
-         return null === this.player ? null : null !== (tt = null !== (et = this.unsaved.get(this.player)) && void 0 !== et ? et : mm()[this.player]) && void 0 !== tt ? tt : null
+         return null === this.player ? null : null !== (uu = null !== (Eu = this.unsaved.get(this.player)) && void 0 !== Eu ? Eu : lX()[this.player]) && void 0 !== uu ? uu : null
```

#### 362. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7064-L7065` → after: `L7064-L7065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7064-L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7064-L7065) · [Before (L7064-L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7064-L7065)

```diff
-           } = await Promise.resolve().then((() => Vt(1223)));
-           return null !== (tt = null === (et = Ot.peekCurrentUserContext()) || void 0 === et ? void 0 : et.whamm) && void 0 !== tt ? tt : null
+           } = await Promise.resolve().then((() => ju(1183)));
+           return null !== (uu = null === (Eu = su.peekCurrentUserContext()) || void 0 === Eu ? void 0 : Eu.whamm) && void 0 !== uu ? uu : null
```

#### 363. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7070` → after: `L7070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7070) · [Before (L7070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7070)

```diff
-         null !== this.player && (qm.e.setItem(Dm, {
+         null !== this.player && (ZX.k.setItem(XX, {
```

#### 364. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7093` → after: `L7093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7093) · [Before (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7093)

```diff
-       const Vt = `\n[... ${tt.length-et} more characters cut]`;
+       const ju = `\n[... ${uu.length-Eu} more characters cut]`;
```

#### 365. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7098-L7099` → after: `L7098-L7099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7098-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7098-L7099) · [Before (L7098-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7098-L7099)

```diff
-     var wm = Vt(712),
-       ym = Vt(4498);
+     var hX = ju(656),
+       DX = ju(4549);
```

#### 366. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7121` → after: `L7121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7121) · [Before (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7121)

```diff
-         clientVersion: String(wm.d),
+         clientVersion: String(hX.b),
```

#### 367. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7136` → after: `L7136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7136) · [Before (L7136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7136)

```diff
-         this.iE = tt, this.chatId = (0, ym.d)(12), this.open = new Map
+         this.HN = uu, this.chatId = (0, DX.b)(12), this.open = new Map
```

#### 368. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7140` → after: `L7140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7140) · [Before (L7140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7140)

```diff
-         Vt && (clearTimeout(Vt.timer), et || (this.open.delete(tt), this.send(Vt.iE)))
+         ju && (clearTimeout(ju.timer), Eu || (this.open.delete(uu), this.send(ju.HN)))
```

#### 369. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7145` → after: `L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7145) · [Before (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7145)

```diff
-         if (Ot) return void(Ot.iE.responses.length < lm && Ot.iE.responses.push(Mm(Vt)));
+         if (su) return void(su.HN.responses.length < NX && su.HN.responses.push(eX(ju)));
```

#### 370. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7148` → after: `L7148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7148) · [Before (L7148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7148)

```diff
-           iE: qt
+           HN: Uu
```

#### 371. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7158` → after: `L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7158) · [Before (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7158)

```diff
-           this.open.delete(tt), this.send(et.iE)
+           this.open.delete(uu), this.send(Eu.HN)
```

#### 372. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7164` → after: `L7164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7164) · [Before (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7164)

```diff
-         })(tt) && this.iE(tt)
+         })(uu) && this.HN(uu)
```

#### 373. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7179` → after: `L7179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7179) · [Before (L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7179)

```diff
-             iE: et
+             HN: Eu
```

#### 374. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7190` → after: `L7190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7190) · [Before (L7190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7190)

```diff
-       "yes" === tt && Vt.length > 0 && Wm(Vt.map((tt => tt.iE)))
+       "yes" === uu && ju.length > 0 && PX(ju.map((uu => uu.HN)))
```

#### 375. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7193` → after: `L7193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7193) · [Before (L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7193)

```diff
-       const et = Promise.resolve().then((() => Vt(41719)));
+       const Eu = Promise.resolve().then((() => ju(41745)));
```

#### 376. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7203-L7204` → after: `L7203-L7204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7203-L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7203-L7204) · [Before (L7203-L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7203-L7204)

```diff
-     var Sm = Vt(391),
-       cm = Vt(184);
+     var oX = ju(349),
+       kX = ju(166);
```

#### 377. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7261` → after: `L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7261) · [Before (L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7261)

```diff
-       return "https:" !== et.protocol && ("http:" !== et.protocol || !Vt) || et.username || et.password || et.search ? null : `${et.origin}${et.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
+       return "https:" !== Eu.protocol && ("http:" !== Eu.protocol || !ju) || Eu.username || Eu.password || Eu.search ? null : `${Eu.origin}${Eu.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
```

#### 378. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7270` → after: `L7270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7270) · [Before (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7270)

```diff
-         super(`AI key request: ${tt}`), this.problem = tt, this.retryAfterMs = et, this.status = Vt, this.detail = Ot
+         super(`AI key request: ${uu}`), this.problem = uu, this.retryAfterMs = Eu, this.status = ju, this.detail = su
```

#### 379. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7275` → after: `L7275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7275) · [Before (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7275)

```diff
-       return ("" === et ? tt : tt.split(et).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
+       return ("" === Eu ? uu : uu.split(Eu).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
```

#### 380. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7282` → after: `L7282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7282) · [Before (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7282)

```diff
-           return `${Vt} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
+           return `${ju} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
```

#### 381. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7286` → after: `L7286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7286) · [Before (L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7286)

```diff
-           return `${Vt} can't find that model. Check its name.`;
+           return `${ju} can't find that model. Check its name.`;
```

#### 382. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7288` → after: `L7288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7288) · [Before (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7288)

```diff
-           return "anthropic" === et ? "Claude didn't accept your key: check it, or make a new one." : "custom" === et ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
+           return "anthropic" === Eu ? "Claude didn't accept your key: check it, or make a new one." : "custom" === Eu ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollam … [truncated]
```

#### 383. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7290` → after: `L7290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7290) · [Before (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7290)

```diff
-           return "custom" === et ? "That server stopped your key for now: it has used all it can." : `${Vt} stopped your key for now: it has used all it can. Check it on ${Vt}'s website.`;
+           return "custom" === Eu ? "That server stopped your key for now: it has used all it can." : `${ju} stopped your key for now: it has used all it can. Check it on ${ju}'s website.`;
```

#### 384. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7292` → after: `L7292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7292) · [Before (L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7292)

```diff
-           return `${Vt} doesn't work from where you are.`;
+           return `${ju} doesn't work from where you are.`;
```

#### 385. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7296` → after: `L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7296) · [Before (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7296)

```diff
-           return `${Vt} had a problem with that. Try again in a minute.`
+           return `${ju} had a problem with that. Try again in a minute.`
```

#### 386. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7322` → after: `L7322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7322) · [Before (L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7322)

```diff
-         }(et)) throw new Error(`AI key request to an unknown host for ${tt}`);
+         }(Eu)) throw new Error(`AI key request to an unknown host for ${uu}`);
```

#### 387. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7331` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7331) · [Before (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7331)

```diff
-         throw console.warn(`AI key request: ${tt} answered ${qt.status}`), new Gm(function(tt, et, Vt) {
+         throw console.warn(`AI key request: ${uu} answered ${Uu.status}`), new WX(function(uu, Eu, ju) {
```

#### 388. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7338` → after: `L7338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7338) · [Before (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7338)

```diff
-           return Number.isFinite(Vt) ? 1e3 * Vt : Math.max(0, Date.parse(et) - Date.now()) || void 0
+           return Number.isFinite(ju) ? 1e3 * ju : Math.max(0, Date.parse(Eu) - Date.now()) || void 0
```

#### 389. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7345` → after: `L7345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7345) · [Before (L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7345)

```diff
-             Vt = "string" === typeof qt ? qt : tt
+             ju = "string" === typeof Uu ? Uu : uu
```

#### 390. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7394` → after: `L7394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7394) · [Before (L7394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7394)

```diff
-         AOt: mt,
+         esu: Xu,
```

#### 391. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7402` → after: `L7402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7402) · [Before (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7402)

```diff
-         const mt = null !== (Vt = null === (Ot = tt.match(/```/g)) || void 0 === Ot ? void 0 : Ot.length) && void 0 !== Vt ? Vt : 0,
+         const Xu = null !== (ju = null === (su = uu.match(/```/g)) || void 0 === su ? void 0 : su.length) && void 0 !== ju ? ju : 0,
```

#### 392. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7415` → after: `L7415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7415) · [Before (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7415)

```diff
-         written: dt ? Qt : void 0,
+         written: lu ? bu : void 0,
```

#### 393. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7427` → after: `L7427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7427) · [Before (L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7427)

```diff
-       const Ot = null !== (Vt = et.tools) && void 0 !== Vt ? Vt : [];
+       const su = null !== (ju = Eu.tools) && void 0 !== ju ? ju : [];
```

#### 394. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7478` → after: `L7478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7478) · [Before (L7478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7478)

```diff
-             models: (null !== (et = (await Vt.json()).data) && void 0 !== et ? et : []).map((tt => ({
+             models: (null !== (Eu = (await ju.json()).data) && void 0 !== Eu ? Eu : []).map((uu => ({
```

#### 395. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7505` → after: `L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7505) · [Before (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7505)

```diff
-           return await zD(null !== (qt = Dt.body) && void 0 !== qt ? qt : new ReadableStream, (et => {
+           return await IZ(null !== (Uu = Zu.body) && void 0 !== Uu ? Uu : new ReadableStream, (Eu => {
```

#### 396. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7510-L7511` → after: `L7510-L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7510-L7511) · [Before (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7510-L7511)

```diff
-             dt += null !== (qt = null !== (Dt = null === Nt || void 0 === Nt || null === (Qt = Nt.delta) || void 0 === Qt ? void 0 : Qt.reasoning) && void 0 !== Dt ? Dt : null === Nt || void 0 === Nt || null === (lt = Nt.delta) || void 0 === lt ? void 0 : lt.reasoning_content) && … [truncated]
-             for (const tt of null !== (Mt = null === Nt || void 0 === Nt || null === (bt = Nt.delta) || void 0 === bt ? void 0 : bt.tool_calls) && void 0 !== Mt ? Mt : []) {
+             lu += null !== (Uu = null !== (Zu = null === Du || void 0 === Du || null === (bu = Du.delta) || void 0 === bu ? void 0 : bu.reasoning) && void 0 !== Zu ? Zu : null === Du || void 0 === Du || null === (cu = Du.delta) || void 0 === cu ? void 0 : cu.reasoning_content) && … [truncated]
+             for (const uu of null !== (gu = null === Du || void 0 === Du || null === (Mu = Du.delta) || void 0 === Mu ? void 0 : Mu.tool_calls) && void 0 !== gu ? gu : []) {
```

#### 397. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7524` → after: `L7524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7524) · [Before (L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7524)

```diff
-             AOt: jt,
+             esu: qu,
```

#### 398. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7544` → after: `L7544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7544) · [Before (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7544)

```diff
-         return await Bm(Um, tt, (async tt => Ym("openrouter", `${Rm.openrouter.baseUrl}/key`, {
+         return await TX(BX, uu, (async uu => xX("openrouter", `${mX.openrouter.baseUrl}/key`, {
```

#### 399. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7565` → after: `L7565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7565) · [Before (L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7565)

```diff
-             models: (null !== (et = (await Vt.json()).data) && void 0 !== et ? et : []).map((tt => ({
+             models: (null !== (Eu = (await ju.json()).data) && void 0 !== Eu ? Eu : []).map((uu => ({
```

#### 400. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7598` → after: `L7598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7598) · [Before (L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7598)

```diff
-           await zD(null !== (Dt = mt.body) && void 0 !== Dt ? Dt : new ReadableStream, (et => {
+           await IZ(null !== (Zu = Xu.body) && void 0 !== Zu ? Zu : new ReadableStream, (Eu => {
```

#### 401. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7603-L7604` → after: `L7603-L7604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7603-L7604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7603-L7604) · [Before (L7603-L7604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7603-L7604)

```diff
-             if ("content_block_start" === Dt.type && "tool_use" === (null === (Ot = Dt.content_block) || void 0 === Ot ? void 0 : Ot.type)) Qt.set(null !== (Et = Dt.index) && void 0 !== Et ? Et : Qt.size, {
-               name: null !== (ft = Dt.content_block.name) && void 0 !== ft ? ft : "",
+             if ("content_block_start" === Zu.type && "tool_use" === (null === (su = Zu.content_block) || void 0 === su ? void 0 : su.type)) bu.set(null !== (Nu = Zu.index) && void 0 !== Nu ? Nu : bu.size, {
+               name: null !== (Ou = Zu.content_block.name) && void 0 !== Ou ? Ou : "",
```

#### 402. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7609-L7610` → after: `L7609-L7610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7609-L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7609-L7610) · [Before (L7609-L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7609-L7610)

```diff
-               dt += null !== (wt = null === (yt = Dt.delta) || void 0 === yt ? void 0 : yt.text) && void 0 !== wt ? wt : "", jt += null !== (Nt = null === (Mt = Dt.delta) || void 0 === Mt ? void 0 : Mt.thinking) && void 0 !== Nt ? Nt : "";
-               const tt = Qt.get(null !== (bt = Dt.index) && void 0 !== bt ? bt : -1);
+               lu += null !== (Yu = null === (hu = Zu.delta) || void 0 === hu ? void 0 : hu.text) && void 0 !== Yu ? Yu : "", qu += null !== (Du = null === (gu = Zu.delta) || void 0 === gu ? void 0 : gu.thinking) && void 0 !== Du ? Du : "";
+               const uu = bu.get(null !== (Mu = Zu.index) && void 0 !== Mu ? Mu : -1);
```

#### 403. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7612` → after: `L7612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7612) · [Before (L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7612)

```diff
-               if (tt && "input_json_delta" === (null === (Jt = Dt.delta) || void 0 === Jt ? void 0 : Jt.type)) tt.args += null !== (Ct = Dt.delta.partial_json) && void 0 !== Ct ? Ct : ""
+               if (uu && "input_json_delta" === (null === (eu = Zu.delta) || void 0 === eu ? void 0 : eu.type)) uu.args += null !== (Gu = Zu.delta.partial_json) && void 0 !== Gu ? Gu : ""
```

#### 404. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7628` → after: `L7628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7628) · [Before (L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7628)

```diff
-             AOt: Ht,
+             esu: fu,
```

#### 405. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7654` → after: `L7654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7654) · [Before (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7654)

```diff
-             models: (null !== (et = (await Vt.json()).models) && void 0 !== et ? et : []).filter((tt => {
+             models: (null !== (Eu = (await ju.json()).models) && void 0 !== Eu ? Eu : []).filter((uu => {
```

#### 406. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7677` → after: `L7677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7677) · [Before (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7677)

```diff
-           const mt = await Ym("gemini", `${this.baseUrl}/models/${encodeURIComponent(tt)}:streamGenerateContent?alt=sse`, {
+           const Xu = await xX("gemini", `${this.baseUrl}/models/${encodeURIComponent(uu)}:streamGenerateContent?alt=sse`, {
```

#### 407. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7696` → after: `L7696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7696) · [Before (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7696)

```diff
-           return await zD(null !== (Dt = mt.body) && void 0 !== Dt ? Dt : new ReadableStream, (et => {
+           return await IZ(null !== (Zu = Xu.body) && void 0 !== Zu ? Zu : new ReadableStream, (Eu => {
```

#### 408. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7700` → after: `L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7700) · [Before (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7700)

```diff
-             for (const tt of null !== (Et = null === lt || void 0 === lt || null === (ft = lt.content) || void 0 === ft ? void 0 : ft.parts) && void 0 !== Et ? Et : []) {
+             for (const uu of null !== (Nu = null === cu || void 0 === cu || null === (Ou = cu.content) || void 0 === Ou ? void 0 : Ou.parts) && void 0 !== Nu ? Nu : []) {
```

#### 409. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7703-L7704` → after: `L7703-L7704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7703-L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7703-L7704) · [Before (L7703-L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7703-L7704)

```diff
-                 name: null !== (wt = tt.functionCall.name) && void 0 !== wt ? wt : "",
-                 args: JSON.stringify(null !== (yt = tt.functionCall.args) && void 0 !== yt ? yt : {})
+                 name: null !== (Yu = uu.functionCall.name) && void 0 !== Yu ? Yu : "",
+                 args: JSON.stringify(null !== (hu = uu.functionCall.args) && void 0 !== hu ? hu : {})
```

#### 410. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7708` → after: `L7708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7708) · [Before (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7708)

```diff
-                 jt += null !== (Nt = tt.text) && void 0 !== Nt ? Nt : ""
+                 qu += null !== (Du = uu.text) && void 0 !== Du ? Du : ""
```

#### 411. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7711` → after: `L7711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7711) · [Before (L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7711)

```diff
-                 dt += null !== (Mt = tt.text) && void 0 !== Mt ? Mt : ""
+                 lu += null !== (gu = uu.text) && void 0 !== gu ? gu : ""
```

#### 412. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7723` → after: `L7723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7723) · [Before (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7723)

```diff
-             AOt: Ht,
+             esu: fu,
```

#### 413. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7748` → after: `L7748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7748) · [Before (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7748)

```diff
-           return new sm("custom", null !== Vt && void 0 !== Vt ? Vt : "", et)
+           return new zX("custom", null !== ju && void 0 !== ju ? ju : "", Eu)
```

#### 414. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7876` → after: `L7876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7876) · [Before (L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7876)

```diff
-         name: null !== (Ot = null === qt || void 0 === qt ? void 0 : qt.name) && void 0 !== Ot ? Ot : et,
+         name: null !== (su = null === Uu || void 0 === Uu ? void 0 : Uu.name) && void 0 !== su ? su : Eu,
```

#### 415. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7900` → after: `L7900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7900) · [Before (L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7900)

```diff
-       return null !== (et = tt.find((tt => "smart" === tt.tier))) && void 0 !== et ? et : tt[0]
+       return null !== (Eu = uu.find((uu => "smart" === uu.tier))) && void 0 !== Eu ? Eu : uu[0]
```

#### 416. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7906` → after: `L7906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7906) · [Before (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7906)

```diff
-       return null !== (et = tt.name) && void 0 !== et ? et : km(tt.provider, tt.baseUrl, Vt)
+       return null !== (Eu = uu.name) && void 0 !== Eu ? Eu : iX(uu.provider, uu.baseUrl, ju)
```

#### 417. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7923` → after: `L7923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7923) · [Before (L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7923)

```diff
-         return new URL(null !== (et = tt.baseUrl) && void 0 !== et ? et : "").protocol.startsWith("http")
+         return new URL(null !== (Eu = uu.baseUrl) && void 0 !== Eu ? Eu : "").protocol.startsWith("http")
```

#### 418. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7933` → after: `L7933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7933) · [Before (L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7933)

```diff
-         return console.warn(`AI Helper: no ${tt}`, et), null
+         return console.warn(`AI Helper: no ${uu}`, Eu), null
```

#### 419. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7945` → after: `L7945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7945) · [Before (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7945)

```diff
-         this.state = null !== Ot && void 0 !== Ot && Ot.remember ? null !== qt && void 0 !== qt && qt.remember ? qt : {
+         this.state = null !== su && void 0 !== su && su.remember ? null !== Uu && void 0 !== Uu && Uu.remember ? Uu : {
```

#### 420. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7948` → after: `L7948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7948) · [Before (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7948)

```diff
-         } : null !== (Vt = null !== Ot && void 0 !== Ot ? Ot : qt) && void 0 !== Vt ? Vt : ld, this.ownsRemembered = this.state.remember && null !== qt
+         } : null !== (ju = null !== su && void 0 !== su ? su : Uu) && void 0 !== ju ? ju : cl, this.ownsRemembered = this.state.remember && null !== Uu
```

#### 421. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7965-L7966` → after: `L7965-L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7965-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7965-L7966) · [Before (L7965-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7965-L7966)

```diff
-           dt = "custom" !== tt.provider ? tt.provider : null !== (Ot = null === mt || void 0 === mt ? void 0 : mt.id) && void 0 !== Ot ? Ot : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
-           jt = void 0 === et ? Hd(tt.models) : null !== (qt = tt.models.find((tt => tt.id === et))) && void 0 !== qt ? qt : tt.models[0],
+           lu = "custom" !== uu.provider ? uu.provider : null !== (su = null === Xu || void 0 === Xu ? void 0 : Xu.id) && void 0 !== su ? su : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
+           qu = void 0 === Eu ? fl(uu.models) : null !== (Uu = uu.models.find((uu => uu.id === Eu))) && void 0 !== Uu ? Uu : uu.models[0],
```

#### 422. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7981` → after: `L7981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L7981) · [Before (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L7981)

```diff
-           Et = lt ? this.state.keys.filter((tt => tt.id !== dt)).map((tt => tt.id === Vt ? Xt : tt)) : Qt ? [...this.state.keys, Xt] : this.state.keys.map((tt => tt.id === dt ? Xt : tt)),
+           Nu = cu ? this.state.keys.filter((uu => uu.id !== lu)).map((uu => uu.id === ju ? Cu : uu)) : bu ? [...this.state.keys, Cu] : this.state.keys.map((uu => uu.id === lu ? Cu : uu)),
```

#### 423. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8000` → after: `L8000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8000) · [Before (L8000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8000)

```diff
-             return "" === Vt ? qt : {
+             return "" === ju ? Uu : {
```

#### 424. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8095` → after: `L8095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8095) · [Before (L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8095)

```diff
-           Ot = (null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.keys) && void 0 !== et ? et : []).filter((tt => this.state.keys.every((et => !Ed(et, tt)))));
+           su = (null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.keys) && void 0 !== Eu ? Eu : []).filter((uu => this.state.keys.every((Eu => !Nl(Eu, uu)))));
```

#### 425. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8139` → after: `L8139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8139) · [Before (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8139)

```diff
-           return Array.isArray(et.keys) && et.keys.every(fd) ? et : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
+           return Array.isArray(Eu.keys) && Eu.keys.every(Ol) ? Eu : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
```

#### 426. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8181` → after: `L8181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8181) · [Before (L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8181)

```diff
-       const dt = null !== (Vt = null === mt || void 0 === mt ? void 0 : mt.trim()) && void 0 !== Vt ? Vt : "";
+       const lu = null !== (ju = null === Xu || void 0 === Xu ? void 0 : Xu.trim()) && void 0 !== ju ? ju : "";
```

#### 427. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8211` → after: `L8211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8211) · [Before (L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8211)

```diff
-               return 0 !== (null !== (Vt = null === (Ot = et.tools) || void 0 === Ot ? void 0 : Ot.length) && void 0 !== Vt ? Vt : 0) && tt instanceof Gm && "failed" === tt.problem && (400 === tt.status || 404 === tt.status && /\btool/i.test(null !== (qt = tt.detail) && void 0 != … [truncated]
+               return 0 !== (null !== (ju = null === (su = Eu.tools) || void 0 === su ? void 0 : su.length) && void 0 !== ju ? ju : 0) && uu instanceof WX && "failed" === uu.problem && (400 === uu.status || 404 === uu.status && /\btool/i.test(null !== (Uu = uu.detail) && void 0 != … [truncated]
```

#### 428. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8226` → after: `L8226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8226) · [Before (L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8226)

```diff
-         return await (jt = Math.min(null !== (mt = null !== (dt = Qt.retryAfterMs) && void 0 !== dt ? dt : Vt.retryWaitMs) && void 0 !== mt ? mt : 3e3, 2e4), Ht = Vt.signal, new Promise(((tt, et) => {
+         return await (qu = Math.min(null !== (Xu = null !== (lu = bu.retryAfterMs) && void 0 !== lu ? lu : ju.retryWaitMs) && void 0 !== Xu ? Xu : 3e3, 2e4), fu = ju.signal, new Promise(((uu, Eu) => {
```

#### 429. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8238` → after: `L8238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8238) · [Before (L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8238)

```diff
-     var Jd = Vt(3710);
+     var el = ju(3836);
```

#### 430. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8355` → after: `L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8355) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8355)

```diff
-           return `Super Bot.xd opens once your account is a week old: ${zd((null!==(et=tt.availableFrom)&&void 0!==et?et:Vt)-Vt)} to go.`;
+           return `Super Bot.xd opens once your account is a week old: ${Wl((null!==(Eu=uu.availableFrom)&&void 0!==Eu?Eu:ju)-ju)} to go.`;
```

#### 431. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8357` → after: `L8357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8357) · [Before (L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8357)

```diff
-           return tt.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(tt,et){const Vt=Math.ceil((tt-et)/36e5);if(Vt<=24)return Vt<=1?"within the hour":`in ${Vt} hours`;return`in ${zd(tt-et)}`}(tt.resetsAt,Vt)}.` : "0 usage remaining - upgrade to Supe … [truncated]
+           return uu.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(uu,Eu){const ju=Math.ceil((uu-Eu)/36e5);if(ju<=24)return ju<=1?"within the hour":`in ${ju} hours`;return`in ${Wl(uu-Eu)}`}(uu.resetsAt,ju)}.` : "0 usage remaining - upgrade to Supe … [truncated]
```

#### 432. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8388` → after: `L8388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8388) · [Before (L8388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8388)

```diff
-       return `Usage left: ${tt.left}`
+       return `Usage left: ${uu.left}`
```

#### 433. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8392-L8393` → after: `L8392-L8393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8392-L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8392-L8393) · [Before (L8392-L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8392-L8393)

```diff
-       const et = Math.max(1, Math.ceil(tt / Sm.l));
-       return 1 === et ? "1 day" : `${et} days`
+       const Eu = Math.max(1, Math.ceil(uu / oX.h));
+       return 1 === Eu ? "1 day" : `${Eu} days`
```

#### 434. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8398` → after: `L8398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8398) · [Before (L8398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8398)

```diff
-       if (Vt) return `${Vt} Bot.xd is answering instead.`;
+       if (ju) return `${ju} Bot.xd is answering instead.`;
```

#### 435. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8417` → after: `L8417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8417) · [Before (L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8417)

```diff
-           return tt.messages.length > 12 || tt.messages.some((tt => tt.content.length > eD)) || (null !== (et = null === (Vt = tt.toolsJson) || void 0 === Vt ? void 0 : Vt.length) && void 0 !== et ? et : 0) > 1e5 || (null !== (Ot = null === (qt = tt.request) || void 0 === qt ? vo … [truncated]
+           return uu.messages.length > 12 || uu.messages.some((uu => uu.content.length > jZ)) || (null !== (Eu = null === (ju = uu.toolsJson) || void 0 === ju ? void 0 : ju.length) && void 0 !== Eu ? Eu : 0) > 1e5 || (null !== (su = null === (Uu = uu.request) || void 0 === Uu ? vo … [truncated]
```

#### 436. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8424` → after: `L8424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8424) · [Before (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8424)

```diff
-         if (et instanceof cm.e && 413 === et.httpCode) return {
+         if (Eu instanceof kX.b && 413 === Eu.httpCode) return {
```

#### 437. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8442-L8444` → after: `L8442-L8444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8442-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8442-L8444) · [Before (L8442-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8442-L8444)

```diff
-     var Ad = Vt(31),
-       Yd = Vt(26),
-       Bd = Vt(2313);
+     var Bl = ju(24),
+       Ll = ju(22),
+       tl = ju(2374);
```

#### 438. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8448` → after: `L8448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8448) · [Before (L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8448)

```diff
-       pd ??= Promise.resolve().then((() => Vt(2317))), pd.then((tt => {
+       xl ??= Promise.resolve().then((() => ju(2380))), xl.then((uu => {
```

#### 439. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8470` → after: `L8470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8470) · [Before (L8470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8470)

```diff
-         }] = await Promise.all([Promise.resolve().then((() => Vt(1450))), Vt.e(359).then((() => Vt(61546)))]);
+         }] = await Promise.all([Promise.resolve().then((() => ju(1405))), ju.e(359).then((() => ju(61525)))]);
```

#### 440. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8477` → after: `L8477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8477) · [Before (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8477)

```diff
-                   Ad.j.sw("OpenStoreFromCodeEditor"), (0, Bd.l)({
+                   Bl.h.TY("OpenStoreFromCodeEditor"), (0, tl.m)({
```

#### 441. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8482-L8483` → after: `L8482-L8483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8482-L8483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8482-L8483) · [Before (L8482-L8483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8482-L8483)

```diff
-                   const tt = Ad.j.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
-                     null === Yd.b.get("openEverythingMenuName") && (Ad.j.unsubscribe(tt), Sd.refresh())
+                   const uu = Bl.h.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
+                     null === Ll.d.get("openEverythingMenuName") && (Bl.h.unsubscribe(uu), Pl.refresh())
```

#### 442. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8666` → after: `L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8666) · [Before (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8666)

```diff
-       return tt.length > 4 && tt.endsWith("ies") ? `${tt.slice(0,-3)}y` : tt.length > 3 && tt.endsWith("s") && !tt.endsWith("ss") ? tt.slice(0, -1) : tt
+       return uu.length > 4 && uu.endsWith("ies") ? `${uu.slice(0,-3)}y` : uu.length > 3 && uu.endsWith("s") && !uu.endsWith("ss") ? uu.slice(0, -1) : uu
```

#### 443. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8682` → after: `L8682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8682) · [Before (L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8682)

```diff
-         qt = jj(et ? tt : (0, ye.s)(tt, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, ye.l, (() => "projectRequire"))),
+         Uu = Xq(Eu ? uu : (0, YE.u)(uu, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, YE.j, (() => "projectRequire"))),
```

#### 444. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8685` → after: `L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8685) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8685)

```diff
-         for (const qt of (0, ye.f)(tt, /(global|window|document|process|require)\b\s*[.([]/g, ye.l)) Ot.has(qt[1]) || Dt.has(qt[1]) || (Ot.add(qt[1]), Vt.push(`Line ${et+1} uses "${qt[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
+         for (const Uu of (0, YE.e)(uu, /(global|window|document|process|require)\b\s*[.([]/g, YE.j)) su.has(Uu[1]) || Zu.has(Uu[1]) || (su.add(Uu[1]), ju.push(`Line ${Eu+1} uses "${Uu[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPl … [truncated]
```

#### 445. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8700` → after: `L8700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8700) · [Before (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8700)

```diff
-         const Et = [null !== (Dt = et[Ot - 2]) && void 0 !== Dt ? Dt : "", null !== (mt = et[Ot - 1]) && void 0 !== mt ? mt : "", tt.slice(0, Ht)].join(" ");
+         const Nu = [null !== (Zu = Eu[su - 2]) && void 0 !== Zu ? Zu : "", null !== (Xu = Eu[su - 1]) && void 0 !== Xu ? Xu : "", uu.slice(0, fu)].join(" ");
```

#### 446. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8702-L8703` → after: `L8702-L8703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8702-L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8702-L8703) · [Before (L8702-L8703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8702-L8703)

```diff
-         const ft = null !== (dt = null === (jt = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(Qt)) || void 0 === jt ? void 0 : jt[1]) && void 0 !== dt ? dt : "coins";
-         Vt.push(`Line ${Ot+1} sets the saved "${ft}" back to ${lt} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${ft}") is null.`)
+         const Ou = null !== (lu = null === (qu = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(bu)) || void 0 === qu ? void 0 : qu[1]) && void 0 !== lu ? lu : "coins";
+         ju.push(`Line ${su+1} sets the saved "${Ou}" back to ${cu} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${Ou}") is null.`)
```

#### 447. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8709` → after: `L8709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8709) · [Before (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8709)

```diff
-       const Ot = null !== (et = null === (Vt = tt.split("### Parameters:")[1]) || void 0 === Vt ? void 0 : Vt.split("###")[0]) && void 0 !== et ? et : "",
+       const su = null !== (Eu = null === (ju = uu.split("### Parameters:")[1]) || void 0 === ju ? void 0 : ju.split("###")[0]) && void 0 !== Eu ? Eu : "",
```

#### 448. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8757-L8759` → after: `L8757-L8759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8757-L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8757-L8759) · [Before (L8757-L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8757-L8759)

```diff
-         qt = `\\((?:[^()]*[\\s,])?${Ot}(?![\\w$])[^()]*\\)`,
-         Dt = new RegExp(`(?:const|let|var)\\s+${Ot}(?![\\w$])|${Ot}\\s*(?:\\+?=(?![=>])|=>)|${qt}\\s*=>|function\\s*[\\w$]*\\s*${qt}`, "g");
-       return 1 === (0, ye.f)(tt, Dt, ye.l).length ? null === (Vt = new RegExp(`\\b(?:const|let|var)\\s+${Ot}\\s*=\\s*${Ej}\\s*(?:;|//|$)`, "m").exec(tt)) || void 0 === Vt ? void 0 : Vt[1] : void 0
+         Uu = `\\((?:[^()]*[\\s,])?${su}(?![\\w$])[^()]*\\)`,
+         Zu = new RegExp(`(?:const|let|var)\\s+${su}(?![\\w$])|${su}\\s*(?:\\+?=(?![=>])|=>)|${Uu}\\s*=>|function\\s*[\\w$]*\\s*${Uu}`, "g");
+       return 1 === (0, YE.e)(uu, Zu, YE.j).length ? null === (ju = new RegExp(`\\b(?:const|let|var)\\s+${su}\\s*=\\s*${bq}\\s*(?:;|//|$)`, "m").exec(uu)) || void 0 === ju ? void 0 : ju[1] : void 0
```

#### 449. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8768-L8769` → after: `L8768-L8769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8768-L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8768-L8769) · [Before (L8768-L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8768-L8769)

```diff
-           Ot = -1 === Vt ? et : et.slice(0, Vt + 1);
-         return Ot.length > 110 ? `${Ot.slice(0,107)}...` : Ot
+           su = -1 === ju ? Eu : Eu.slice(0, ju + 1);
+         return su.length > 110 ? `${su.slice(0,107)}...` : su
```

#### 450. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8771` → after: `L8771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8771) · [Before (L8771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8771)

```diff
-       return Ot = "api" === tt ? `api.${et}(${lj(Vt).join(", ")})${qt?` \u2014 ${qt}`:""}` : "callback" === tt ? `${et}(${lj(Vt).join(", ")})${qt?` \u2014 ${qt}`:""}` : "clientOption" === tt ? `${et}: ${function(tt){var et,Vt;return null!==(et=null===(Vt=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
+       return su = "api" === uu ? `api.${Eu}(${Cq(ju).join(", ")})${Uu?` \u2014 ${Uu}`:""}` : "callback" === uu ? `${Eu}(${Cq(ju).join(", ")})${Uu?` \u2014 ${Uu}`:""}` : "clientOption" === uu ? `${Eu}: ${function(uu){var Eu,ju;return null!==(Eu=null===(ju=/\*\*Type:\*\*\s*`([^`]+) … [truncated]
```

#### 451. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8773` → after: `L8773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8773) · [Before (L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8773)

```diff
-         et.map((tt => `"${tt}"`)).join(" or ")
+         Eu.map((uu => `"${uu}"`)).join(" or ")
```

#### 452. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8775` → after: `L8775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8775) · [Before (L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8775)

```diff
-       The closest name is "${et[0]}", which may be something
+       The closest name is "${Eu[0]}", which may be something
```

#### 453. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8777` → after: `L8777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8777) · [Before (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8777)

```diff
-       `}function bj(tt){return tt.split("\n").slice(1).map((tt=>tt.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((tt=>""!==tt&&!tt.startsWith("#")))}class Jj{constructor(tt){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
+       `}function gq(uu){return uu.split("\n").slice(1).map((uu=>uu.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((uu=>""!==uu&&!uu.startsWith("#")))}class Mq{constructor(uu){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0, … [truncated]
```

#### 454. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8781` → after: `L8781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8781) · [Before (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8781)

```diff
-       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();et.push({name:Vt,text:qt})}return et}(Vt))et.push(yj(tt,Ot,qt))};Vt("api",tt.apiReference),Vt("callback",tt.callbacks),Vt("clientOption",tt.clientOptions),Vt("snippet",tt.snippets),Vt("howTo",tt.howTo);const Ot=function(){const tt … [truncated]
+       `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();Eu.push({name:ju,text:Uu})}return Eu}(ju))Eu.push(Oq(uu,su,Uu))};ju("api",uu.apiReference),ju("callback",uu.callbacks),ju("clientOption",uu.clientOptions),ju("snippet",uu.snippets),ju("howTo",uu.howTo);const su=function(){const uu … [truncated]
```

#### 455. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8792-L8793` → after: `L8792-L8793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8792-L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8792-L8793) · [Before (L8792-L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8792-L8793)

```diff
-       n\ nUsage: \`${tt.signature}\`\n\n\`\`\`js\n${tt.example}\n\`\`\``)),
-   et = MO.map((tt => `## ${tt.name}\nPrefab (${tt.kind}, ${tt.category}): put in with use_prefab. ${LO(tt,!1)}`));
+       n\ nUsage: \`${uu.signature}\`\n\n\`\`\`js\n${uu.example}\n\`\`\``)),
+   Eu = Ms.map((uu => `## ${uu.name}\nPrefab (${uu.kind}, ${uu.category}): put in with use_prefab. ${Qs(uu,!1)}`));
```

#### 456. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8795-L8796` → after: `L8795-L8796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8795-L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8795-L8796) · [Before (L8795-L8796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8795-L8796)

```diff
-     helpers: `# Ready-made functions\n\n${tt.join("\n\n")}\n`,
-     prefabs: `# Prefabs\n\n${et.join("\n\n")}\n`
+     helpers: `# Ready-made functions\n\n${uu.join("\n\n")}\n`,
+     prefabs: `# Prefabs\n\n${Eu.join("\n\n")}\n`
```

#### 457. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8804` → after: `L8804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8804) · [Before (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8804)

```diff
-     this.wordCounts.set(tt, (null !== (qt = this.wordCounts.get(tt)) && void 0 !== qt ? qt : 0) + 1)
+     this.wordCounts.set(uu, (null !== (Uu = this.wordCounts.get(uu)) && void 0 !== Uu ? Uu : 0) + 1)
```

#### 458. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8809` → after: `L8809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8809) · [Before (L8809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8809)

```diff
-   const Ot = null !== (et = null === (Vt = tt.split("## Mob Variations")[1]) || void 0 === Vt ? void 0 : Vt.split("```")[1]) && void 0 !== et ? et : "",
+   const su = null !== (Eu = null === (ju = uu.split("## Mob Variations")[1]) || void 0 === ju ? void 0 : ju.split("```")[1]) && void 0 !== Eu ? Eu : "",
```

#### 459. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8832` → after: `L8832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8832) · [Before (L8832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8832)

```diff
-       return null !== (et = tt[1]) && void 0 !== et ? et : tt[2]
+       return null !== (Eu = uu[1]) && void 0 !== Eu ? Eu : uu[2]
```

#### 460. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8839` → after: `L8839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8839) · [Before (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8839)

```diff
-     for (const qt of (0, ye.f)(tt, /([\w$]+)\s*\(/g, ye.l)) {
+     for (const Uu of (0, YE.e)(uu, /([\w$]+)\s*\(/g, YE.j)) {
```

#### 461. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8843` → after: `L8843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8843) · [Before (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8843)

```diff
-       Dt.has(mt) || Ot.has(mt) || dt || "api" !== (null === (Vt = this.byName.get(mt)) || void 0 === Vt ? void 0 : Vt.kind) || Dt.set(mt, `Line ${et+1} calls ${mt} without "api.", so it throws there. Did you mean api.${mt}?`)
+       Zu.has(Xu) || su.has(Xu) || lu || "api" !== (null === (ju = this.byName.get(Xu)) || void 0 === ju ? void 0 : ju.kind) || Zu.set(Xu, `Line ${Eu+1} calls ${Xu} without "api.", so it throws there. Did you mean api.${Xu}?`)
```

#### 462. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8852-L8853` → after: `L8852-L8853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8852-L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8852-L8853) · [Before (L8852-L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8852-L8853)

```diff
-     const et = this.find(tt.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((tt => "api" === tt.kind)).slice(0, 2).map((tt => `api.${tt.name}`));
-     return `api.${tt} doesn't exist.${et.length?` Did you mean ${et.join(" or ")}?`:""}`
+     const Eu = this.find(uu.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((uu => "api" === uu.kind)).slice(0, 2).map((uu => `api.${uu.name}`));
+     return `api.${uu} doesn't exist.${Eu.length?` Did you mean ${Eu.join(" or ")}?`:""}`
```

#### 463. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8873` → after: `L8873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8873) · [Before (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8873)

```diff
-         lt = Qt ? null === (jt = new RegExp(`(?:^|[{,])\\s*${Qt.replaceAll("$","\\$")}\\s*:\\s*${Ej}`, "m").exec(tt)) || void 0 === jt ? void 0 : jt[1] : void 0,
+         cu = bu ? null === (qu = new RegExp(`(?:^|[{,])\\s*${bu.replaceAll("$","\\$")}\\s*:\\s*${bq}`, "m").exec(uu)) || void 0 === qu ? void 0 : qu[1] : void 0,
```

#### 464. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8875-L8876` → after: `L8875-L8876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8875-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8875-L8876) · [Before (L8875-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8875-L8876)

```diff
-         ft = null !== (Ht = null === (Xt = new RegExp(`\\?\\s*${Ej}\\s*:\\s*${Ej}$`).exec(Ot)) || void 0 === Xt ? void 0 : Xt.slice(1)) && void 0 !== Ht ? Ht : [];
-       for (const tt of [null !== (wt = null !== lt && void 0 !== lt ? lt : Et) && void 0 !== wt ? wt : Ot, ...ft]) {
+         Ou = null !== (fu = null === (Cu = new RegExp(`\\?\\s*${bq}\\s*:\\s*${bq}$`).exec(su)) || void 0 === Cu ? void 0 : Cu.slice(1)) && void 0 !== fu ? fu : [];
+       for (const uu of [null !== (Yu = null !== cu && void 0 !== cu ? cu : Nu) && void 0 !== Yu ? Yu : su, ...Ou]) {
```

#### 465. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8884` → after: `L8884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8884) · [Before (L8884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8884)

```diff
-   return [...Vt].map((tt => `"${tt}" isn't an item or block name.${Mj(this.suggestNames(tt))}`))
+   return [...ju].map((uu => `"${uu}" isn't an item or block name.${Dq(this.suggestNames(uu))}`))
```

#### 466. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8897` → after: `L8897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8897) · [Before (L8897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8897)

```diff
-     return `"${et}" isn't an item or block name, so giving or selling it fails. Did you mean "${Vt}"?`
+     return `"${Eu}" isn't an item or block name, so giving or selling it fails. Did you mean "${ju}"?`
```

#### 467. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8913` → after: `L8913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8913) · [Before (L8913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8913)

```diff
-       return `"${et}" isn't a block or item name, so comparing with it is never true. Did you mean "${Vt}"?`
+       return `"${Eu}" isn't a block or item name, so comparing with it is never true. Did you mean "${ju}"?`
```

#### 468. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8918-L8919` → after: `L8918-L8919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8918-L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8918-L8919) · [Before (L8918-L8919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8918-L8919)

```diff
-       Vt = this.blockNames.has(et) || !this.itemAndBlockNames.includes(et) ? void 0 : [`Block of ${et}`, `${et} Block`].find((tt => this.blockNames.has(tt)));
-     !Vt || tt.includes(`"${Vt}"`) || tt.includes(`'${Vt}'`) || mt.set(et, Vt)
+       ju = this.blockNames.has(Eu) || !this.itemAndBlockNames.includes(Eu) ? void 0 : [`Block of ${Eu}`, `${Eu} Block`].find((uu => this.blockNames.has(uu)));
+     !ju || uu.includes(`"${ju}"`) || uu.includes(`'${ju}'`) || Xu.set(Eu, ju)
```

#### 469. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8923` → after: `L8923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8923) · [Before (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8923)

```diff
-     return `"${et}" is an item, not a block, so no block is ever called that. Did you mean "${Vt}"?`
+     return `"${Eu}" is an item, not a block, so no block is ever called that. Did you mean "${ju}"?`
```

#### 470. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8940-L8941` → after: `L8940-L8941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8940-L8941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8940-L8941) · [Before (L8940-L8941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8940-L8941)

```diff
-       } : Ot.names.length > 0 || Ot.isDecided ? Ot : {
-         names: Vt.length <= 2 ? Vt : [],
+       } : su.names.length > 0 || su.isDecided ? su : {
+         names: ju.length <= 2 ? ju : [],
```

#### 471. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8945` → after: `L8945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8945) · [Before (L8945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8945)

```diff
-     return `"${tt}" isn't a block or item name, so comparing a block with it is never true.${Mj(qt)}`
+     return `"${uu}" isn't a block or item name, so comparing a block with it is never true.${Dq(Uu)}`
```

#### 472. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8960-L8961` → after: `L8960-L8961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8960-L8961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8960-L8961) · [Before (L8960-L8961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8960-L8961)

```diff
-           name: null !== (qt = Vt[1]) && void 0 !== qt ? qt : Vt[2],
-           body: tt.slice(Vt.index, null !== (Dt = null === (mt = et[Ot + 1]) || void 0 === mt ? void 0 : mt.index) && void 0 !== Dt ? Dt : tt.length)
+           name: null !== (Uu = ju[1]) && void 0 !== Uu ? Uu : ju[2],
+           body: uu.slice(ju.index, null !== (Zu = null === (Xu = Eu[su + 1]) || void 0 === Xu ? void 0 : Xu.index) && void 0 !== Zu ? Zu : uu.length)
```

#### 473. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8969` → after: `L8969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8969) · [Before (L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8969)

```diff
-         if (tt.text.includes(`"${Ot}"`)) continue;
+         if (uu.text.includes(`"${su}"`)) continue;
```

#### 474. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8971-L8972` → after: `L8971-L8972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8971-L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8971-L8972) · [Before (L8971-L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8971-L8972)

```diff
-           mt = Dt.length > 0 ? `Did you mean ${Dt.map((tt=>`"${tt}"`)).join(" or ")}?` : /Return false/i.test(tt.text) ? `To stop it, return false instead of "${Ot}".` : "Check Show Docs for what it can return.";
-         et.add(`${Vt} can't use "${Ot}" to stop anything. ${mt}`)
+           Xu = Zu.length > 0 ? `Did you mean ${Zu.map((uu=>`"${uu}"`)).join(" or ")}?` : /Return false/i.test(uu.text) ? `To stop it, return false instead of "${su}".` : "Check Show Docs for what it can return.";
+         Eu.add(`${ju} can't use "${su}" to stop anything. ${Xu}`)
```

#### 475. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8982` → after: `L8982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8982) · [Before (L8982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8982)

```diff
-     return !Vt.some((tt => tt.startsWith(`${et} `)))
+     return !ju.some((uu => uu.startsWith(`${Eu} `)))
```

#### 476. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8998` → after: `L8998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L8998) · [Before (L8998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L8998)

```diff
-     Dt = null !== (et = this.namesByLowerCase.get(Vt)) && void 0 !== et ? et : this.namesByLowerCase.get(qt);
+     Zu = null !== (Eu = this.namesByLowerCase.get(ju)) && void 0 !== Eu ? Eu : this.namesByLowerCase.get(Uu);
```

#### 477. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9030` → after: `L9030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9030) · [Before (L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9030)

```diff
-       tt && Ot.set(tt, (null !== (Vt = Ot.get(tt)) && void 0 !== Vt ? Vt : 0) + et)
+       uu && su.set(uu, (null !== (ju = su.get(uu)) && void 0 !== ju ? ju : 0) + Eu)
```

#### 478. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9036` → after: `L9036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9036) · [Before (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9036)

```diff
-   for (const Qt of `${tt}\n${et}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
+   for (const bu of `${uu}\n${Eu}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
```

#### 479. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9038` → after: `L9038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9038) · [Before (L9038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9038)

```diff
-     qt(this.byName.get(null !== (dt = null !== (jt = Qt[1]) && void 0 !== jt ? jt : Qt[2]) && void 0 !== dt ? dt : Qt[3]), Qt[1] || Qt[2] ? 4 : 2)
+     Uu(this.byName.get(null !== (lu = null !== (qu = bu[1]) && void 0 !== qu ? qu : bu[2]) && void 0 !== lu ? lu : bu[3]), bu[1] || bu[2] ? 4 : 2)
```

#### 480. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9040` → after: `L9040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9040) · [Before (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9040)

```diff
-   for (const Qt of (0, ye.f)(et, /([A-Za-z_$][\w$]*)\s*\(/g, ye.l)) {
+   for (const bu of (0, YE.e)(Eu, /([A-Za-z_$][\w$]*)\s*\(/g, YE.j)) {
```

#### 481. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9049-L9050` → after: `L9049-L9050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9049-L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9049-L9050) · [Before (L9049-L9050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9049-L9050)

```diff
-       const Vt = 1 / Math.log2(2 + (null !== (Xt = this.wordCounts.get(et)) && void 0 !== Xt ? Xt : 0));
-       Qt.nameWords.has(et) ? tt += 3 * Vt : Qt.textWords.has(et) && (tt += Vt)
+       const ju = 1 / Math.log2(2 + (null !== (Cu = this.wordCounts.get(Eu)) && void 0 !== Cu ? Cu : 0));
+       bu.nameWords.has(Eu) ? uu += 3 * ju : bu.textWords.has(Eu) && (uu += ju)
```

#### 482. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9066` → after: `L9066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9066) · [Before (L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9066)

```diff
-   return null !== (et = null !== (Vt = this.byName.get(Ot)) && void 0 !== Vt ? Vt : this.sections.find((tt => tt.name.toLowerCase() === qt))) && void 0 !== et ? et : null
+   return null !== (Eu = null !== (ju = this.byName.get(su)) && void 0 !== ju ? ju : this.sections.find((uu => uu.name.toLowerCase() === Uu))) && void 0 !== Eu ? Eu : null
```

#### 483. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9103` → after: `L9103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9103) · [Before (L9103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9103)

```diff
-         Ot = new RegExp(`(^|[^\\w$.])${Vt}\\s*\\(`),
+         su = new RegExp(`(^|[^\\w$.])${ju}\\s*\\(`),
```

#### 484. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9129` → after: `L9129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9129) · [Before (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9129)

```diff
-         when: `in ${Vt[1]}`,
+         when: `in ${ju[1]}`,
```

#### 485. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9136` → after: `L9136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9136) · [Before (L9136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9136)

```diff
-     dt = Dt && et ? ` ${Dt}` : "",
+     lu = Zu && Eu ? ` ${Zu}` : "",
```

#### 486. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9140-L9141` → after: `L9140-L9141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9140-L9141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9140-L9141) · [Before (L9140-L9141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9140-L9141)

```diff
-     const tt = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (Ht = null === (Xt = qt[0]) || void 0 === Xt ? void 0 : Xt.trim()) && void 0 !== Ht ? Ht : ""),
-       et = null === (Qt = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (lt = null === (Et = qt[1]) || void 0 === Et ? void 0 : Et.trim()) && void 0 !== lt ? lt : "")) || void 0 === Qt ? void 0 : Qt[1],
+     const uu = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (fu = null === (Cu = Uu[0]) || void 0 === Cu ? void 0 : Cu.trim()) && void 0 !== fu ? fu : ""),
+       Eu = null === (bu = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (cu = null === (Nu = Uu[1]) || void 0 === Nu ? void 0 : Nu.trim()) && void 0 !== cu ? cu : "")) || void 0 === bu ? void 0 : bu[1],
```

#### 487. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9144` → after: `L9144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9144) · [Before (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9144)

```diff
-         return /^(a|an|the)\s/i.test(et) || !/^[a-z]/i.test(et) ? et : `${/^[aeiou]/i.test(et)?"an":"a"} ${et}`
+         return /^(a|an|the)\s/i.test(Eu) || !/^[a-z]/i.test(Eu) ? Eu : `${/^[aeiou]/i.test(Eu)?"an":"a"} ${Eu}`
```

#### 488. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9146` → after: `L9146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9146) · [Before (L9146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9146)

```diff
-     return Vt && null !== tt && void 0 !== tt && tt[3] ? `api.${jt[1]} needs ${Vt}, but it got ${tt[3]}${dt}.` : tt ? `api.${jt[1]} couldn't use its ${ft=Number(tt[1]),1===ft?"first":2===ft?"second":3===ft?"third":4===ft?"fourth":`#${ft}`} argument${dt}.${Vt?` It needs ${Vt}.`:"" … [truncated]
+     return ju && null !== uu && void 0 !== uu && uu[3] ? `api.${qu[1]} needs ${ju}, but it got ${uu[3]}${lu}.` : uu ? `api.${qu[1]} couldn't use its ${Ou=Number(uu[1]),1===Ou?"first":2===Ou?"second":3===Ou?"third":4===Ou?"fourth":`#${Ou}`} argument${lu}.${ju?` It needs ${ju}.`:"" … [truncated]
```

#### 489. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9150` → after: `L9150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9150) · [Before (L9150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9150)

```diff
-   if (wt) return wt[1] ? `${wt[1]} isn't a function${dt}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${dt}. Check each name it calls is spelt exactly right.`;
+   if (Yu) return Yu[1] ? `${Yu[1]} isn't a function${lu}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${lu}. Check each name it calls is spelt exactly right.`;
```

#### 490. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9152` → after: `L9152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9152) · [Before (L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9152)

```diff
-   if (yt) return `${yt[1]} isn't defined${dt}. Check the spelling, or create it before using it.`;
+   if (hu) return `${hu[1]} isn't defined${lu}. Check the spelling, or create it before using it.`;
```

#### 491. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9156-L9157` → after: `L9156-L9157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9156-L9157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9156-L9157) · [Before (L9156-L9157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9156-L9157)

```diff
-     const tt = null !== (Mt = Nt[1]) && void 0 !== Mt ? Mt : Nt[3];
-     return `Your code tried to read${tt?` .${tt}`:" something"} from ${Nt[2]}${dt}: a value it expected wasn't there.`
+     const uu = null !== (gu = Du[1]) && void 0 !== gu ? gu : Du[3];
+     return `Your code tried to read${uu?` .${uu}`:" something"} from ${Du[2]}${lu}: a value it expected wasn't there.`
```

#### 492. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9159` → after: `L9159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9159) · [Before (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9159)

```diff
-   return `Your code hit an error${dt}: ${mt.replace(/^\w*Error:\s*/,"")}`
+   return `Your code hit an error${lu}: ${Xu.replace(/^\w*Error:\s*/,"")}`
```

#### 493. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9245` → after: `L9245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9245) · [Before (L9245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9245)

```diff
-   return tt.replaceAll(`"${et}"`, `"${Vt}"`).replaceAll(`'${et}'`, `'${Vt}'`)
+   return uu.replaceAll(`"${Eu}"`, `"${ju}"`).replaceAll(`'${Eu}'`, `'${ju}'`)
```

#### 494. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9249` → after: `L9249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9249) · [Before (L9249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9249)

```diff
-   const Vt = tt => vt().isIdentifier(tt) ? tt.text === et : tt.elements.some((tt => !vt().isOmittedExpression(tt) && Vt(tt.name))),
+   const ju = uu => du().isIdentifier(uu) ? uu.text === Eu : uu.elements.some((uu => !du().isOmittedExpression(uu) && ju(uu.name))),
```

#### 495. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9262` → after: `L9262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9262) · [Before (L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9262)

```diff
-       return (null === tt || void 0 === tt || null === (Vt = tt.name) || void 0 === Vt ? void 0 : Vt.text) === et || void 0 !== Ot && (vt().isNamespaceImport(Ot) ? Ot.name.text === et : Ot.elements.some((tt => tt.name.text === et)))
+       return (null === uu || void 0 === uu || null === (ju = uu.name) || void 0 === ju ? void 0 : ju.text) === Eu || void 0 !== su && (du().isNamespaceImport(su) ? su.name.text === Eu : su.elements.some((uu => uu.name.text === Eu)))
```

#### 496. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9276` → after: `L9276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9276) · [Before (L9276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9276)

```diff
-             text: `${Vt}${et}${Vt}`
+             text: `${ju}${Eu}${ju}`
```

#### 497. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9288` → after: `L9288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9288) · [Before (L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9288)

```diff
-                 edit: Dt(qt, vt().isShorthandPropertyAssignment(tt) ? `${Ot}: ${Vt}` : Ot),
+                 edit: Zu(Uu, du().isShorthandPropertyAssignment(uu) ? `${su}: ${ju}` : su),
```

#### 498. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9290` → after: `L9290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9290) · [Before (L9290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9290)

```diff
-                 hE: dt
+                 oN: lu
```

#### 499. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9303` → after: `L9303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9303) · [Before (L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9303)

```diff
-         return PV(tt, mt.flatMap((tt => tt.depth !== et || tt.hE ? [] : [tt.edit])))
+         return vj(uu, Xu.flatMap((uu => uu.depth !== Eu || uu.oN ? [] : [uu.edit])))
```

#### 500. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9328` → after: `L9328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9328) · [Before (L9328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9328)

```diff
-           et && vt().isIdentifier(et) ? (vt().isVariableDeclaration(tt) && eO(tt.initializer, Ot) ? qt : Dt).add(et.text) : vt().isIdentifier(tt) && VO(tt) && Dt.add(tt.text), vt().forEachChild(tt, mt)
+           Eu && du().isIdentifier(Eu) ? (du().isVariableDeclaration(uu) && us(uu.initializer, su) ? Uu : Zu).add(Eu.text) : du().isIdentifier(uu) && Es(uu) && Zu.add(uu.text), du().forEachChild(uu, Xu)
```

#### 501. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9337` → after: `L9337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9337) · [Before (L9337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9337)

```diff
-           text: `{ customAttributes: ${et.getText(Ot)} }`
+           text: `{ customAttributes: ${Eu.getText(su)} }`
```

#### 502. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9360` → after: `L9360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9360) · [Before (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9360)

```diff
-               text: vt().isShorthandPropertyAssignment(Ht) ? `${et}: ${Vt}` : Vt
+               text: du().isShorthandPropertyAssignment(fu) ? `${Eu}: ${ju}` : ju
```

#### 503. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9370-L9371` → after: `L9370-L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9370-L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9370-L9371) · [Before (L9370-L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9370-L9371)

```diff
-       const et = `(["'])${function(tt){return tt.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(Vt)}\\1`;
-       return ("comparedBlock" === qt ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${et}`, `${et}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${et}`, `${et}\\s*[!=]==?`, `\\bcase\\s+${et}\\s*:`, `\\.includes\\(\\s*${et}\\s*\\)`]).reduce(((tt, et) => tt.replace(new RegExp(et, "g"), … [truncated]
+       const Eu = `(["'])${function(uu){return uu.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(ju)}\\1`;
+       return ("comparedBlock" === Uu ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${Eu}`, `${Eu}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${Eu}`, `${Eu}\\s*[!=]==?`, `\\bcase\\s+${Eu}\\s*:`, `\\.includes\\(\\s*${Eu}\\s*\\)`]).reduce(((uu, Eu) => uu.replace(new RegExp(Eu, "g"), … [truncated]
```

#### 504. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9381` → after: `L9381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9381) · [Before (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9381)

```diff
-   return "export" === tt.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "customAttributes" === tt.kind ? `The enchantment given to ${tt.method} is now in { customAttributes: ... }.` : "null" === tt.kind ? `The null given to ${tt.method} i … [truncated]
+   return "export" === uu.kind ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : "customAttributes" === uu.kind ? `The enchantment given to ${uu.method} is now in { customAttributes: ... }.` : "null" === uu.kind ? `The null given to ${uu.method} i … [truncated]
```

#### 505. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9383` → after: `L9383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9383) · [Before (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9383)

```diff
- var Aj = Vt(41709);
+ var Fq = ju(41728);
```

#### 506. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9443` → after: `L9443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9443) · [Before (L9443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9443)

```diff
-       return qt ? `${Ot} didn't accept your key: it may be wrong or deleted.` : `${Ot} didn't accept your key: it may be wrong or deleted. Check it on ${Ot}'s website.`;
+       return Uu ? `${su} didn't accept your key: it may be wrong or deleted.` : `${su} didn't accept your key: it may be wrong or deleted. Check it on ${su}'s website.`;
```

#### 507. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9445` → after: `L9445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9445) · [Before (L9445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9445)

```diff
-       return qt ? `${Ot} stopped your key for now: it has used all it can.` : `${Ot} stopped your key for now: it has used all it can. Check it on ${Ot}'s website.`;
+       return Uu ? `${su} stopped your key for now: it has used all it can.` : `${su} stopped your key for now: it has used all it can. Check it on ${su}'s website.`;
```

#### 508. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9447` → after: `L9447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9447) · [Before (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9447)

```diff
-       return `Too many requests to ${Vt} right now. Wait a minute and try again.`;
+       return `Too many requests to ${ju} right now. Wait a minute and try again.`;
```

#### 509. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9449` → after: `L9449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9449) · [Before (L9449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9449)

```diff
-       return `${Ot} can't find ${Vt}. Pick another model, or press Check for new models in AI settings.`;
+       return `${su} can't find ${ju}. Pick another model, or press Check for new models in AI settings.`;
```

#### 510. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9451` → after: `L9451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9451) · [Before (L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9451)

```diff
-       return `${Vt} took too long to answer.`;
+       return `${ju} took too long to answer.`;
```

#### 511. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9453` → after: `L9453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9453) · [Before (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9453)

```diff
-       return qt ? `Couldn't reach ${Ot}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${Ot}. Check your internet and your key.`;
+       return Uu ? `Couldn't reach ${su}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${su}. Check your internet and your key.`;
```

#### 512. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9455` → after: `L9455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9455) · [Before (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9455)

```diff
-       return `${Ot} doesn't work from where you are.`;
+       return `${su} doesn't work from where you are.`;
```

#### 513. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9459` → after: `L9459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9459) · [Before (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9459)

```diff
-       return `${Vt} can't be used right now. Try again in a minute.`
+       return `${ju} can't be used right now. Try again in a minute.`
```

#### 514. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9477` → after: `L9477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9477) · [Before (L9477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9477)

```diff
-       ...Aj.h,
+       ...Fq.g,
```

#### 515. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9553` → after: `L9553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9553) · [Before (L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9553)

```diff
-       }, et] = await Promise.all([Promise.resolve().then((() => Vt(1450))), this.popup.notice()]), Ot = tt.showPromptPopup({
+       }, Eu] = await Promise.all([Promise.resolve().then((() => ju(1405))), this.popup.notice()]), su = uu.showPromptPopup({
```

#### 516. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9641` → after: `L9641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9641) · [Before (L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9641)

```diff
-       return "" === tt ? "no key needed" : tt.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === et ? `key \u2026${tt.slice(-4)}` : `${(null!==(Vt=null===(Ot=/^[a-zA-Z]+-/.exec(tt))||void 0===Ot?void 0:Ot[0])&&void 0!==Vt?Vt:tt.slice(0,4)).slice(0,6)}\u2026${tt.slice(-4)}`
+       return "" === uu ? "no key needed" : uu.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === Eu ? `key \u2026${uu.slice(-4)}` : `${(null!==(ju=null===(su=/^[a-zA-Z]+-/.exec(uu))||void 0===su?void 0:su[0])&&void 0!==ju?ju:uu.slice(0,4)).slice(0,6)}\u2026${uu.slice(-4)}`
```

#### 517. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9663` → after: `L9663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9663) · [Before (L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9663)

```diff
-         "aria-label": `Edit ${Dt} key`,
+         "aria-label": `Edit ${Zu} key`,
```

#### 518. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9668` → after: `L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9668) · [Before (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9668)

```diff
-         "aria-label": `Rename ${Dt} key`,
+         "aria-label": `Rename ${Zu} key`,
```

#### 519. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9689` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9689) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9689)

```diff
-     Nt = `${lt}-${null!==(et=null===Xt||void 0===Xt?void 0:Xt.keyId)&&void 0!==et?et:"botxd"}-${null!==(Vt=null===Xt||void 0===Xt?void 0:Xt.modelId)&&void 0!==Vt?Vt:"botxd"}`.replace(/[^\w-]/g, "_"),
+     Du = `${cu}-${null!==(Eu=null===Cu||void 0===Cu?void 0:Cu.keyId)&&void 0!==Eu?Eu:"botxd"}-${null!==(ju=null===Cu||void 0===Cu?void 0:Cu.modelId)&&void 0!==ju?ju:"botxd"}`.replace(/[^\w-]/g, "_"),
```

#### 520. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9693-L9695` → after: `L9693-L9695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9693-L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9693-L9695) · [Before (L9693-L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9693-L9695)

```diff
-     "data-key-id": null !== (qt = null === Xt || void 0 === Xt ? void 0 : Xt.keyId) && void 0 !== qt ? qt : "botxd",
-     "data-model-id": null !== (dt = null === Xt || void 0 === Xt ? void 0 : Xt.modelId) && void 0 !== dt ? dt : "botxd",
-     title: null !== wt && void 0 !== wt ? wt : void 0,
+     "data-key-id": null !== (Uu = null === Cu || void 0 === Cu ? void 0 : Cu.keyId) && void 0 !== Uu ? Uu : "botxd",
+     "data-model-id": null !== (lu = null === Cu || void 0 === Cu ? void 0 : Cu.modelId) && void 0 !== lu ? lu : "botxd",
+     title: null !== Yu && void 0 !== Yu ? Yu : void 0,
```

#### 521. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9703` → after: `L9703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9703) · [Before (L9703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9703)

```diff
-       "aria-describedby": Ht ? Nt : void 0,
+       "aria-describedby": fu ? Du : void 0,
```

#### 522. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9730` → after: `L9730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9730) · [Before (L9730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9730)

```diff
-     nS: dt,
+     jK: lu,
```

#### 523. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9753` → after: `L9753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9753) · [Before (L9753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9753)

```diff
-           at: null !== (Vt = tt.usedAt) && void 0 !== Vt ? Vt : 0,
+           at: null !== (ju = uu.usedAt) && void 0 !== ju ? ju : 0,
```

#### 524. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9776` → after: `L9776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9776) · [Before (L9776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9776)

```diff
-     ct = `${et}-model`,
+     ou = `${Eu}-model`,
```

#### 525. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9789` → after: `L9789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9789) · [Before (L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9789)

```diff
-       }, null !== (qt = null === Ot || void 0 === Ot ? void 0 : Ot.modelId) && void 0 !== qt ? qt : "botxd")
+       }, null !== (Uu = null === su || void 0 === su ? void 0 : su.modelId) && void 0 !== Uu ? Uu : "botxd")
```

#### 526. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9797` → after: `L9797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9797) · [Before (L9797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9797)

```diff
-       hint: null !== yt && void 0 !== yt ? yt : `Bloxd's better AI. ${wt.status?Gd(wt.status):""}`.trim(),
+       hint: null !== hu && void 0 !== hu ? hu : `Bloxd's better AI. ${Yu.status?il(Yu.status):""}`.trim(),
```

#### 527. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9803` → after: `L9803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9803) · [Before (L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9803)

```diff
-         vd(null !== (tt = null === (et = wt.status) || void 0 === et ? void 0 : et.provider) && void 0 !== tt ? tt : "ovh") && Sd.il()
+         dl(null !== (uu = null === (Eu = Yu.status) || void 0 === Eu ? void 0 : Eu.provider) && void 0 !== uu ? uu : "ovh") && Pl.Hc()
```

#### 528. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9808` → after: `L9808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9808) · [Before (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9808)

```diff
-           if (vd(null !== (et = null === tt || void 0 === tt ? void 0 : tt.provider) && void 0 !== et ? et : "ovh") || await HH.ask()) return Sd.il(), !0;
+           if (dl(null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.provider) && void 0 !== Eu ? Eu : "ovh") || await lf.ask()) return Pl.Hc(), !0;
```

#### 529. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9819-L9820` → after: `L9819-L9820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9819-L9820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9819-L9820) · [Before (L9819-L9820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9819-L9820)

```diff
-         It = ct ? null !== (et = tt.models.find((et => et.id === tt.usedModelId))) && void 0 !== et ? et : Hd(tt.models) : void 0,
-         Pt = null !== (Vt = null === (Ot = Ct[tt.id]) || void 0 === Ot ? void 0 : Ot.trim().toLowerCase()) && void 0 !== Vt ? Vt : "",
+         mu = ou ? null !== (Eu = uu.models.find((Eu => Eu.id === uu.usedModelId))) && void 0 !== Eu ? Eu : fl(uu.models) : void 0,
+         vu = null !== (ju = null === (su = Gu[uu.id]) || void 0 === su ? void 0 : su.trim().toLowerCase()) && void 0 !== ju ? ju : "",
```

#### 530. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9833` → after: `L9833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9833) · [Before (L9833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9833)

```diff
-             keyName: null !== (Et = tt.name) && void 0 !== Et ? Et : "",
+             keyName: null !== (Nu = uu.name) && void 0 !== Nu ? Nu : "",
```

#### 531. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9849` → after: `L9849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9849) · [Before (L9849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9849)

```diff
-             "aria-label": `Check ${yt} for new models`,
+             "aria-label": `Check ${hu} for new models`,
```

#### 532. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9857` → after: `L9857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9857) · [Before (L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9857)

```diff
-             "aria-label": `Remove ${yt} key`,
+             "aria-label": `Remove ${hu} key`,
```

#### 533. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9865` → after: `L9865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9865) · [Before (L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9865)

```diff
-             "aria-label": `Remove ${yt} key?`,
+             "aria-label": `Remove ${hu} key?`,
```

#### 534. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9871` → after: `L9871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9871) · [Before (L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9871)

```diff
-               "aria-label": `Yes, remove ${yt} key`,
+               "aria-label": `Yes, remove ${hu} key`,
```

#### 535. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9878` → after: `L9878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9878) · [Before (L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9878)

```diff
-               "aria-label": `No, keep ${yt} key`,
+               "aria-label": `No, keep ${hu} key`,
```

#### 536. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9892-L9894` → after: `L9892-L9894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9892-L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9892-L9894) · [Before (L9892-L9894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9892-L9894)

```diff
-           "aria-label": `Find a model from ${yt}`,
-           placeholder: `Find a model (${tt.models.length})`,
-           value: null !== (wt = Ct[tt.id]) && void 0 !== wt ? wt : "",
+           "aria-label": `Find a model from ${hu}`,
+           placeholder: `Find a model (${uu.models.length})`,
+           value: null !== (Yu = Gu[uu.id]) && void 0 !== Yu ? Yu : "",
```

#### 537. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9910` → after: `L9910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9910) · [Before (L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9910)

```diff
-           "aria-label": `Show all ${yt} models`,
+           "aria-label": `Show all ${hu} models`,
```

#### 538. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9934` → after: `L9934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9934) · [Before (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9934)

```diff
-     } = await Vt.e(125).then((() => Vt(6716)));
+     } = await ju.e(125).then((() => ju(6732)));
```

#### 539. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9958` → after: `L9958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L9958) · [Before (L9958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L9958)

```diff
-         children: et ? qt : Dt
+         children: Eu ? Uu : Zu
```

#### 540. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10078` → after: `L10078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10078) · [Before (L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10078)

```diff
-           children: [1 === dt.length ? "Forget your key" : `Forget all ${dt.length} keys`, " in this browser?", (0, mt.jsx)("button", {
+           children: [1 === lu.length ? "Forget your key" : `Forget all ${lu.length} keys`, " in this browser?", (0, Xu.jsx)("button", {
```

#### 541. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10142` → after: `L10142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10142) · [Before (L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10142)

```diff
-                 text: `${et} listed no models, so your models stay as they were.`
+                 text: `${Eu} listed no models, so your models stay as they were.`
```

#### 542. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10148` → after: `L10148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10148) · [Before (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10148)

```diff
-                 text: `${et}'s models are up to date.`
+                 text: `${Eu}'s models are up to date.`
```

#### 543. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10162` → after: `L10162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10162) · [Before (L10162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10162)

```diff
-         nS: tt => {
+         jK: uu => {
```

#### 544. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10217` → after: `L10217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10217) · [Before (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10217)

```diff
-         null === (Vt = null !== Ot && void 0 !== Ot ? Ot : dt.current) || void 0 === Vt || Vt.scrollIntoView({
+         null === (ju = null !== su && void 0 !== su ? su : lu.current) || void 0 === ju || ju.scrollIntoView({
```

#### 545. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10237` → after: `L10237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10237) · [Before (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10237)

```diff
-         children: jt ? `An API key works like a password for ${jt.shortName}'s AI (it isn't your ${jt.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
+         children: qu ? `An API key works like a password for ${qu.shortName}'s AI (it isn't your ${qu.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
```

#### 546. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10239` → after: `L10239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10239) · [Before (L10239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10239)

```diff
-         children: ["You make it on ", jt ? `${jt.shortName}'s website` : (0, mt.jsx)(yH, {}), ", and see how much you've used or delete it there."]
+         children: ["You make it on ", qu ? `${qu.shortName}'s website` : (0, Xu.jsx)(Yf, {}), ", and see how much you've used or delete it there."]
```

#### 547. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10241` → after: `L10241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10241) · [Before (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10241)

```diff
-         children: ["Your key stays in this browser and only goes to ", null !== (et = null === jt || void 0 === jt ? void 0 : jt.shortName) && void 0 !== et ? et : "that company", ", never to Bloxd."]
+         children: ["Your key stays in this browser and only goes to ", null !== (Eu = null === qu || void 0 === qu ? void 0 : qu.shortName) && void 0 !== Eu ? Eu : "that company", ", never to Bloxd."]
```

#### 548. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10300` → after: `L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10300) · [Before (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10300)

```diff
-   } = Nd(), [lt, Et] = (0, Ot.useState)(null !== (et = null === jt || void 0 === jt ? void 0 : jt.provider) && void 0 !== et ? et : null), [ft, wt] = (0, Ot.useState)(!!jt), [yt, Nt] = (0, Ot.useState)(""), Mt = null !== (Vt = null === jt || void 0 === jt ? void 0 : jt.key) && vo … [truncated]
+   } = Dl(), [cu, Nu] = (0, su.useState)(null !== (Eu = null === qu || void 0 === qu ? void 0 : qu.provider) && void 0 !== Eu ? Eu : null), [Ou, Yu] = (0, su.useState)(!!qu), [hu, Du] = (0, su.useState)(""), gu = null !== (ju = null === qu || void 0 === qu ? void 0 : qu.key) && vo … [truncated]
```

#### 549. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10302` → after: `L10302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10302) · [Before (L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10302)

```diff
-     return tt === (null === jt || void 0 === jt ? void 0 : jt.provider) && ("custom" !== tt || (null !== (et = Fm(Ct)) && void 0 !== et ? et : "") === (null !== (Vt = jt.baseUrl) && void 0 !== Vt ? Vt : ""))
+     return uu === (null === qu || void 0 === qu ? void 0 : qu.provider) && ("custom" !== uu || (null !== (Eu = QX(Gu)) && void 0 !== Eu ? Eu : "") === (null !== (ju = qu.baseUrl) && void 0 !== ju ? ju : ""))
```

#### 550. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10305-L10306` → after: `L10305-L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10305-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10305-L10306) · [Before (L10305-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10305-L10306)

```diff
-     return "" === et && "" !== Mt && Kt(tt) ? Mt : et
-   }, [Wt, St] = (0, Ot.useState)(""), [ct, Rt] = (0, Ot.useState)(null !== (Dt = null === jt || void 0 === jt ? void 0 : jt.name) && void 0 !== Dt ? Dt : ""), [It, Pt] = (0, Ot.useState)(!1), [Zt, Lt] = (0, Ot.useState)(null), [Ft, kt] = (0, Ot.useState)(""), [Gt, zt] = (0, Ot.us … [truncated]
+     return "" === Eu && "" !== gu && wu(uu) ? gu : Eu
+   }, [au, Pu] = (0, su.useState)(""), [ou, ku] = (0, su.useState)(null !== (Zu = null === qu || void 0 === qu ? void 0 : qu.name) && void 0 !== Zu ? Zu : ""), [mu, vu] = (0, su.useState)(!1), [Ku, Vu] = (0, su.useState)(null), [ru, Qu] = (0, su.useState)(""), [iu, Wu] = (0, su.us … [truncated]
```

#### 551. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10337` → after: `L10337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10337) · [Before (L10337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10337)

```diff
-           baseUrl: "custom" === lt && null !== (tt = Fm(Ct)) && void 0 !== tt ? tt : void 0,
+           baseUrl: "custom" === cu && null !== (uu = QX(Gu)) && void 0 !== uu ? uu : void 0,
```

#### 552. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10344` → after: `L10344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10344) · [Before (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10344)

```diff
-         const Vt = null !== lt && void 0 !== lt ? lt : Lm(et),
+         const ju = null !== cu && void 0 !== cu ? cu : rX(Eu),
```

#### 553. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10359-L10360` → after: `L10359-L10360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10359-L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10359-L10360) · [Before (L10359-L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10359-L10360)

```diff
-             baseUrl: null !== qt && void 0 !== qt ? qt : void 0,
-             modelName: It ? Wt : void 0
+             baseUrl: null !== Uu && void 0 !== Uu ? Uu : void 0,
+             modelName: mu ? au : void 0
```

#### 554. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10366` → after: `L10366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10366) · [Before (L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10366)

```diff
-           kt(null !== (mt = null === (dt = null !== Ht && void 0 !== Ht ? Ht : Hd(tt)) || void 0 === dt ? void 0 : dt.id) && void 0 !== mt ? mt : "")
+           Qu(null !== (Xu = null === (lu = null !== fu && void 0 !== fu ? fu : fl(uu)) || void 0 === lu ? void 0 : lu.id) && void 0 !== Xu ? Xu : "")
```

#### 555. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10372-L10373` → after: `L10372-L10373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10372-L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10372-L10373) · [Before (L10372-L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10372-L10373)

```diff
-           const mt = "badKey" !== qt || ft ? "" : ` If it isn't from ${Rm[Vt].shortName}, pick the company it's from.`;
-           rt(`${om(qt,Vt)}${mt}`)
+           const Xu = "badKey" !== Uu || Ou ? "" : ` If it isn't from ${mX[ju].shortName}, pick the company it's from.`;
+           Iu(`${IX(Uu,ju)}${Xu}`)
```

#### 556. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10383` → after: `L10383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10383) · [Before (L10383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10383)

```diff
-         value: null !== lt && void 0 !== lt ? lt : "",
+         value: null !== cu && void 0 !== cu ? cu : "",
```

#### 557. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10411` → after: `L10411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10411) · [Before (L10411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10411)

```diff
-       }), (!jt || Ct !== (null !== (dt = jt.baseUrl) && void 0 !== dt ? dt : "")) && (0, mt.jsx)(aH, {})]
+       }), (!qu || Gu !== (null !== (lu = qu.baseUrl) && void 0 !== lu ? lu : "")) && (0, Xu.jsx)(Df, {})]
```

#### 558. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10483` → after: `L10483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10483) · [Before (L10483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10483)

```diff
-           keyId: null !== lt && void 0 !== lt ? lt : "",
+           keyId: null !== cu && void 0 !== cu ? cu : "",
```

#### 559. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10507` → after: `L10507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10507) · [Before (L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10507)

```diff
-         placeholder: lt && "custom" !== lt ? `Like My ${Rm[lt].shortName}` : "Like Home server",
+         placeholder: cu && "custom" !== cu ? `Like My ${mX[cu].shortName}` : "Like Home server",
```

#### 560. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10533` → after: `L10533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10533) · [Before (L10533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10533)

```diff
-         children: Gt ? it ? "Testing the connection\u2026" : "Testing your key\u2026" : Tt ? `Save and use ${Tt.name}` : it ? "Test connection" : "Test key"
+         children: iu ? Lu ? "Testing the connection\u2026" : "Testing your key\u2026" : Au ? `Save and use ${Au.name}` : Lu ? "Test connection" : "Test key"
```

#### 561. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10538-L10540` → after: `L10538-L10540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10538-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10538-L10540) · [Before (L10538-L10540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10538-L10540)

```diff
- var JH = Vt(1286),
-   CH = Vt(37112),
-   uH = Vt(37110);
+ var ef = ju(1244),
+   Gf = ju(37284),
+   pf = ju(37282);
```

#### 562. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10551-L10552` → after: `L10551-L10552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10551-L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10551-L10552) · [Before (L10551-L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10551-L10552)

```diff
-   } = (0, JH.H)();
-   return (0, mt.jsx)(uH.i, {
+   } = (0, ef.A)();
+   return (0, Xu.jsx)(pf.h, {
```

#### 563. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10555` → after: `L10555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10555) · [Before (L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10555)

```diff
-     text: Dt(`codeEditorAiTutorial:${et}`),
+     text: Zu(`codeEditorAiTutorial:${Eu}`),
```

#### 564. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10603` → after: `L10603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10603) · [Before (L10603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10603)

```diff
-   return tt.model.name.toLowerCase().startsWith(et.toLowerCase()) ? tt.model.name : `${et} \xb7 ${tt.model.name}`
+   return uu.model.name.toLowerCase().startsWith(Eu.toLowerCase()) ? uu.model.name : `${Eu} \xb7 ${uu.model.name}`
```

#### 565. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10653` → after: `L10653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10653) · [Before (L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10653)

```diff
-     bt = Mt ? "Bot.xd (free) \xb7 once" : Ht ? WH(Ht) : Qt ? Cd : "Bot.xd (free)";
+     Mu = gu ? "Bot.xd (free) \xb7 once" : fu ? af(fu) : bu ? Gl : "Bot.xd (free)";
```

#### 566. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10665` → after: `L10665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10665) · [Before (L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10665)

```diff
-       "aria-label": `AI model: ${bt}`,
+       "aria-label": `AI model: ${Mu}`,
```

#### 567. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10683` → after: `L10683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10683) · [Before (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10683)

```diff
-         title: `Allow AI to make edits to my code is ${Vt?"on":"off"}, in AI settings`,
+         title: `Allow AI to make edits to my code is ${ju?"on":"off"}, in AI settings`,
```

#### 568. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10743` → after: `L10743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10743) · [Before (L10743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10743)

```diff
- const cH = "kv";
+ const of = "kv";
```

#### 569. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10751` → after: `L10751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10751) · [Before (L10751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10751)

```diff
-       Vt(null !== (et = tt.error) && void 0 !== et ? et : new Error("IndexedDB transaction failed"))
+       ju(null !== (Eu = uu.error) && void 0 !== Eu ? Eu : new Error("IndexedDB transaction failed"))
```

#### 570. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10754` → after: `L10754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10754) · [Before (L10754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10754)

```diff
-       Vt(null !== (et = tt.error) && void 0 !== et ? et : new Error("IndexedDB transaction aborted"))
+       ju(null !== (Eu = uu.error) && void 0 !== Eu ? Eu : new Error("IndexedDB transaction aborted"))
```

#### 571. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10758` → after: `L10758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10758) · [Before (L10758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10758)

```diff
- var IH = Vt(37140);
+ var mf = ju(37308);
```

#### 572. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10789` → after: `L10789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10789) · [Before (L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10789)

```diff
-           if (et) return tt.includes(`"${et}"`) ? `"${et}"` : tt.includes(et) ? et : void 0
+           if (Eu) return uu.includes(`"${Eu}"`) ? `"${Eu}"` : uu.includes(Eu) ? Eu : void 0
```

#### 573. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10793` → after: `L10793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10793) · [Before (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10793)

```diff
-         className: Dt()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${tt.kind}`, Ot && "WorldCodeAiDiff-marked"),
+         className: Zu()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${uu.kind}`, su && "WorldCodeAiDiff-marked"),
```

#### 574. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10856` → after: `L10856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10856) · [Before (L10856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10856)

```diff
-   return qt(tt) === qt(et) ? Ot : qt(tt) === qt(et - 864e5) ? `yesterday ${Ot}` : function(tt, et) {
+   return Uu(uu) === Uu(Eu) ? su : Uu(uu) === Uu(Eu - 864e5) ? `yesterday ${su}` : function(uu, Eu) {
```

#### 575. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10859` → after: `L10859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10859) · [Before (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10859)

```diff
-     if (Vt < 60) return `${Vt} min ago`;
+     if (ju < 60) return `${ju} min ago`;
```

#### 576. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10861` → after: `L10861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10861) · [Before (L10861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10861)

```diff
-     if (Ot < 24) return `${Ot} h ago`;
+     if (su < 24) return `${su} h ago`;
```

#### 577. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10863` → after: `L10863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10863) · [Before (L10863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10863)

```diff
-     return 1 === qt ? "1 day ago" : `${qt} days ago`
+     return 1 === Uu ? "1 day ago" : `${Uu} days ago`
```

#### 578. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10870-L10871` → after: `L10870-L10871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10870-L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10870-L10871) · [Before (L10870-L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10870-L10871)

```diff
-     const Dt = null !== (Ot = tt.files[Vt]) && void 0 !== Ot ? Ot : "";
-     return (null !== (qt = et[Vt]) && void 0 !== qt ? qt : "") === Dt ? [] : [{
+     const Zu = null !== (su = uu.files[ju]) && void 0 !== su ? su : "";
+     return (null !== (Uu = Eu[ju]) && void 0 !== Uu ? Uu : "") === Zu ? [] : [{
```

#### 579. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10883` → after: `L10883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10883) · [Before (L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10883)

```diff
-   return `${(Ot>et/2?Vt.slice(0,Ot):Vt).replace(/[\s,;:.]+$/,"")}\u2026`
+   return `${(su>Eu/2?ju.slice(0,su):ju).replace(/[\s,;:.]+$/,"")}\u2026`
```

#### 580. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10894` → after: `L10894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10894) · [Before (L10894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10894)

```diff
-   const [Ht, Xt] = (0, Ot.useState)(!1), [Qt, lt] = (0, Ot.useState)(!1), Et = et.did ? `Before: ${et.did}` : et.label, ft = zH(Et), wt = et.did && et.label.startsWith('Before "') ? et.label.slice(7) : null, yt = null === wt ? null : zH(wt, 50), Nt = null !== yt && null !== wt && … [truncated]
+   const [fu, Cu] = (0, su.useState)(!1), [bu, cu] = (0, su.useState)(!1), Nu = Eu.did ? `Before: ${Eu.did}` : Eu.label, Ou = Sf(Nu), Yu = Eu.did && Eu.label.startsWith('Before "') ? Eu.label.slice(7) : null, hu = null === Yu ? null : Sf(Yu, 50), Du = null !== hu && null !== Yu && … [truncated]
```

#### 581. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10919-L10920` → after: `L10919-L10920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10919-L10920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10919-L10920) · [Before (L10919-L10920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10919-L10920)

```diff
-     const Dt = null !== (Ot = et.files[tt]) && void 0 !== Ot ? Ot : "",
-       mt = null !== (qt = Vt[tt]) && void 0 !== qt ? qt : "";
+     const Zu = null !== (su = Eu.files[uu]) && void 0 !== su ? su : "",
+       Xu = null !== (Uu = ju[uu]) && void 0 !== Uu ? Uu : "";
```

#### 582. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10934` → after: `L10934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10934) · [Before (L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10934)

```diff
-         children: [Qt || !ft ? Et : ft, (ft || Nt) && (0, mt.jsx)("button", {
+         children: [bu || !Ou ? Nu : Ou, (Ou || Du) && (0, Xu.jsx)("button", {
```

#### 583. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10946` → after: `L10946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L10946) · [Before (L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L10946)

```diff
-           children: ["You asked: ", Qt || !Nt ? wt : Nt]
+           children: ["You asked: ", bu || !Du ? Yu : Du]
```

#### 584. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11027` → after: `L11027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11027) · [Before (L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11027)

```diff
-     qJ: qt,
+     lG: Uu,
```

#### 585. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11051` → after: `L11051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11051) · [Before (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11051)

```diff
-           "aria-label": `Delete note: ${tt}`,
+           "aria-label": `Delete note: ${uu}`,
```

#### 586. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11190` → after: `L11190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11190) · [Before (L11190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11190)

```diff
-       }, `${et}:${tt}`)))
+       }, `${Eu}:${uu}`)))
```

#### 587. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11193` → after: `L11193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11193) · [Before (L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11193)

```diff
-       children: ["Apply ", Vt - Ot > 1 ? `steps ${Ot+1} to ${Vt}` : `step ${Vt}`, " to your code and try it, then build step ", Vt + 1, "."]
+       children: ["Apply ", ju - su > 1 ? `steps ${su+1} to ${ju}` : `step ${ju}`, " to your code and try it, then build step ", ju + 1, "."]
```

#### 588. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11195` → after: `L11195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11195) · [Before (L11195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11195)

```diff
-       ...Aj.h,
+       ...Fq.g,
```

#### 589. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11200` → after: `L11200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11200) · [Before (L11200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11200)

```diff
-       children: Ot < Vt ? `Build step ${Vt+1} anyway` : `Build step ${Vt+1}`
+       children: su < ju ? `Build step ${ju+1} anyway` : `Build step ${ju+1}`
```

#### 590. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11212` → after: `L11212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11212) · [Before (L11212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11212)

```diff
-   return `${tt}\n\nYou asked me: "${et}" ${null===Vt?"I don't mind: choose what works best.":`My answer: ${Vt.replace(/\.$/,"")}.`} Build it now, without asking again.`
+   return `${uu}\n\nYou asked me: "${Eu}" ${null===ju?"I don't mind: choose what works best.":`My answer: ${ju.replace(/\.$/,"")}.`} Build it now, without asking again.`
```

#### 591. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11231-L11232` → after: `L11231-L11232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11231-L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11231-L11232) · [Before (L11231-L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11231-L11232)

```diff
-           ...Aj.h,
-           key: `${et}:${tt}`,
+           ...Fq.g,
+           key: `${Eu}:${uu}`,
```

#### 592. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11265` → after: `L11265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11265) · [Before (L11265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11265)

```diff
-         ...Aj.h,
+         ...Fq.g,
```

#### 593. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11438` → after: `L11438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11438) · [Before (L11438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11438)

```diff
-       Ct = null !== bt && void 0 !== bt ? bt : qt;
+       Gu = null !== Mu && void 0 !== Mu ? Mu : Uu;
```

#### 594. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11442-L11444` → after: `L11442-L11444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11442-L11444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11442-L11444) · [Before (L11442-L11444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11442-L11444)

```diff
-       raw: null !== (jt = null === Jt || void 0 === Jt ? void 0 : Jt.text) && void 0 !== jt ? jt : "",
-       start: null !== (Ht = null === Jt || void 0 === Jt ? void 0 : Jt.start) && void 0 !== Ht ? Ht : 0,
-       end: null !== (Xt = null === Jt || void 0 === Jt ? void 0 : Jt.end) && void 0 !== Xt ? Xt : 0,
+       raw: null !== (qu = null === eu || void 0 === eu ? void 0 : eu.text) && void 0 !== qu ? qu : "",
+       start: null !== (fu = null === eu || void 0 === eu ? void 0 : eu.start) && void 0 !== fu ? fu : 0,
+       end: null !== (Cu = null === eu || void 0 === eu ? void 0 : eu.end) && void 0 !== Cu ? Cu : 0,
```

#### 595. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11487` → after: `L11487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11487) · [Before (L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11487)

```diff
-     Dt = Vt, qt = `${mt=Vt.includes(tt)&&!Vt.includes(Ot)?Ot:tt}${Dt.slice(0,200).replace(/\\/g,"\\\\").replace('"'===mt?/"/g:/'/g,`\\${mt}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
+     Zu = ju, Uu = `${Xu=ju.includes(uu)&&!ju.includes(su)?su:uu}${Zu.slice(0,200).replace(/\\/g,"\\\\").replace('"'===Xu?/"/g:/'/g,`\\${Xu}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000- … [truncated]
```

#### 596. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11496` → after: `L11496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11496) · [Before (L11496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11496)

```diff
-     const Vt = Math.min(3, (null !== (et = String(tt).split(".")[1]) && void 0 !== et ? et : "").length);
+     const ju = Math.min(3, (null !== (Eu = String(uu).split(".")[1]) && void 0 !== Eu ? Eu : "").length);
```

#### 597. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11511` → after: `L11511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11511) · [Before (L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11511)

```diff
-   return "boolean" === typeof tt ? tt ? "on" : "off" : "number" === typeof tt ? String(tt) : tt.length > 20 ? `\u201c${tt.slice(0,19)}\u2026\u201d` : `\u201c${tt}\u201d`
+   return "boolean" === typeof uu ? uu ? "on" : "off" : "number" === typeof uu ? String(uu) : uu.length > 20 ? `\u201c${uu.slice(0,19)}\u2026\u201d` : `\u201c${uu}\u201d`
```

#### 598. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11516` → after: `L11516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11516) · [Before (L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11516)

```diff
-   if (0 === tt.length) return `Before ${et} settings`;
+   if (0 === uu.length) return `Before ${Eu} settings`;
```

#### 599. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11518-L11520` → after: `L11518-L11520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11518-L11520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11518-L11520) · [Before (L11518-L11520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11518-L11520)

```diff
-     Ot = tt.slice(0, Vt).map((tt => `${tt.name} ${tt.from} \u2192 ${tt.to}`)),
-     qt = tt.length > Vt ? ` and ${tt.length-Vt} more` : "";
-   return `Before ${et} settings: ${Ot.join(", ")}${qt}`
+     su = uu.slice(0, ju).map((uu => `${uu.name} ${uu.from} \u2192 ${uu.to}`)),
+     Uu = uu.length > ju ? ` and ${uu.length-ju} more` : "";
+   return `Before ${Eu} settings: ${su.join(", ")}${Uu}`
```

#### 600. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11528` → after: `L11528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11528) · [Before (L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11528)

```diff
-     et.add(null !== (Vt = null !== (Ot = qt[1]) && void 0 !== Ot ? Ot : qt[2]) && void 0 !== Vt ? Vt : qt[3])
+     Eu.add(null !== (ju = null !== (su = Uu[1]) && void 0 !== su ? su : Uu[2]) && void 0 !== ju ? ju : Uu[3])
```

#### 601. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11571` → after: `L11571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11571) · [Before (L11571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11571)

```diff
-     const Dt = null !== (qt = mX.get(et)) && void 0 !== qt ? qt : [];
+     const Zu = null !== (Uu = XC.get(Eu)) && void 0 !== Uu ? Uu : [];
```

#### 602. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11623` → after: `L11623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11623) · [Before (L11623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11623)

```diff
-   return null !== (et = QX.get(tt)) && void 0 !== et ? et : "CONFIG" === tt ? "Settings" : void 0
+   return null !== (Eu = bC.get(uu)) && void 0 !== Eu ? Eu : "CONFIG" === uu ? "Settings" : void 0
```

#### 603. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11649` → after: `L11649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11649) · [Before (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11649)

```diff
-         name: void 0 === Dt ? null : null !== (qt = MX(Dt)) && void 0 !== qt ? qt : null,
+         name: void 0 === Zu ? null : null !== (Uu = MC(Zu)) && void 0 !== Uu ? Uu : null,
```

#### 604. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11701` → after: `L11701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11701) · [Before (L11701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11701)

```diff
-   return dt.every((tt => wX(tt.removed) && wX(tt.added))) ? dt : [tt]
+   return lu.every((uu => YC(uu.removed) && YC(uu.added))) ? lu : [uu]
```

#### 605. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11753` → after: `L11753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11753) · [Before (L11753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11753)

```diff
-   return Ot ? null !== (et = null !== (Vt = Ot[1]) && void 0 !== Vt ? Vt : Ot[2]) && void 0 !== et ? et : Ot[3] : void 0
+   return su ? null !== (Eu = null !== (ju = su[1]) && void 0 !== ju ? ju : su[2]) && void 0 !== Eu ? Eu : su[3] : void 0
```

#### 606. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11781` → after: `L11781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11781) · [Before (L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11781)

```diff
-   return tt.length <= 1 ? null !== (et = tt[0]) && void 0 !== et ? et : "" : `${tt.slice(0,-1).join(", ")} and ${tt[tt.length-1]}`
+   return uu.length <= 1 ? null !== (Eu = uu[0]) && void 0 !== Eu ? Eu : "" : `${uu.slice(0,-1).join(", ")} and ${uu[uu.length-1]}`
```

#### 607. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11796` → after: `L11796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11796) · [Before (L11796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11796)

```diff
-     return (0, ye.f)(et, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, ye.l).map((tt => tt[0])).filter((tt => !vX.has(tt)))
+     return (0, YE.e)(Eu, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, YE.j).map((uu => uu[0])).filter((uu => !aC.has(uu)))
```

#### 608. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11802` → after: `L11802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11802) · [Before (L11802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11802)

```diff
-   const Ot = (null !== (Vt = tt.parts) && void 0 !== Vt ? Vt : []).map((tt => {
+   const su = (null !== (ju = uu.parts) && void 0 !== ju ? ju : []).map((uu => {
```

#### 609. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11850` → after: `L11850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11850) · [Before (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11850)

```diff
-               return Vt ? [null !== (et = Vt[1]) && void 0 !== et ? et : Vt[2]] : []
+               return ju ? [null !== (Eu = ju[1]) && void 0 !== Eu ? Eu : ju[2]] : []
```

#### 610. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11854` → after: `L11854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11854) · [Before (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11854)

```diff
-               return Qt.has(tt) ? `"${et}"` : et
+               return bu.has(uu) ? `"${Eu}"` : Eu
```

#### 611. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11862` → after: `L11862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11862) · [Before (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11862)

```diff
-                   return null !== (et = jt.get(tt)) && void 0 !== et ? et : tt
+                   return null !== (Eu = qu.get(uu)) && void 0 !== Eu ? Eu : uu
```

#### 612. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11865` → after: `L11865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11865) · [Before (L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11865)

```diff
-               et = [Dt.length > 0 ? `${tt(Dt)} \u2014 changed` : "", mt.length > 0 ? `${tt(mt)} \u2014 added` : "", dt.length > 0 ? `${tt(dt)} \u2014 taken out` : ""].filter(Boolean),
+               Eu = [Zu.length > 0 ? `${uu(Zu)} \u2014 changed` : "", Xu.length > 0 ? `${uu(Xu)} \u2014 added` : "", lu.length > 0 ? `${uu(lu)} \u2014 taken out` : ""].filter(Boolean),
```

#### 613. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11876` → after: `L11876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11876) · [Before (L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11876)

```diff
-           const ft = [Dt.length > 0 ? `changes ${uX(Dt.map(lt))}` : "", mt.length > 0 ? `adds ${uX(mt.map(lt))}` : "", dt.length > 0 ? `takes out ${uX(dt.map(lt))}` : ""].filter(Boolean);
+           const Ou = [Zu.length > 0 ? `changes ${wC(Zu.map(cu))}` : "", Xu.length > 0 ? `adds ${wC(Xu.map(cu))}` : "", lu.length > 0 ? `takes out ${wC(lu.map(cu))}` : ""].filter(Boolean);
```

#### 614. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11892` → after: `L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11892) · [Before (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11892)

```diff
-                 named: `${Vt} \u2014 changed`,
+                 named: `${ju} \u2014 changed`,
```

#### 615. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11898` → after: `L11898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11898) · [Before (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11898)

```diff
-                 named: `Changes ${/\bfunction\b|=>/.test(tt)?`"${KX(et)}"`:KX(et)}`,
+                 named: `Changes ${/\bfunction\b|=>/.test(uu)?`"${JC(Eu)}"`:JC(Eu)}`,
```

#### 616. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11907` → after: `L11907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11907) · [Before (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11907)

```diff
-             named: 0 === tt.added.length ? `Takes out lines from line ${Vt}` : `Changes line ${Vt}`,
+             named: 0 === uu.added.length ? `Takes out lines from line ${ju}` : `Changes line ${ju}`,
```

#### 617. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11932` → after: `L11932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11932) · [Before (L11932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11932)

```diff
-           return Ot[et] && null !== (Vt = tt.uses) && void 0 !== Vt ? Vt : []
+           return su[Eu] && null !== (ju = uu.uses) && void 0 !== ju ? ju : []
```

#### 618. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11936` → after: `L11936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11936) · [Before (L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11936)

```diff
-           return Ot[et] || (null !== (Vt = tt.uses) && void 0 !== Vt ? Vt : []).some((tt => qt.has(tt)))
+           return su[Eu] || (null !== (ju = uu.uses) && void 0 !== ju ? ju : []).some((uu => Uu.has(uu)))
```

#### 619. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11943` → after: `L11943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11943) · [Before (L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11943)

```diff
-           const Ot = (null !== (dt = tt.takesOut) && void 0 !== dt ? dt : []).filter((tt => ("CONFIG" === tt || mX.has(tt)) && !mt.has(tt)));
+           const su = (null !== (lu = uu.takesOut) && void 0 !== lu ? lu : []).filter((uu => ("CONFIG" === uu || XC.has(uu)) && !Xu.has(uu)));
```

#### 620. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11947` → after: `L11947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11947) · [Before (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11947)

```diff
-           }, et, Vt) || void 0 !== tt.why && HX(Vt, jX(tt.why)) || (null !== (jt = tt.removedUses) && void 0 !== jt ? jt : []).some((tt => qt.has(tt))) ? void 0 : "takesOut"
+           }, Eu, ju) || void 0 !== uu.why && fC(ju, qC(uu.why)) || (null !== (qu = uu.removedUses) && void 0 !== qu ? qu : []).some((uu => Uu.has(uu))) ? void 0 : "takesOut"
```

#### 621. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11966` → after: `L11966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11966) · [Before (L11966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11966)

```diff
-         Xt = !qt && Ht ? Ht : Vt,
+         Cu = !Uu && fu ? fu : ju,
```

#### 622. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11983` → after: `L11983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11983) · [Before (L11983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11983)

```diff
-       return `${null!==(et=tt.also)&&void 0!==et?et:""}|${tt.label}|${null!==(Vt=tt.detail)&&void 0!==Vt?Vt:""}`
+       return `${null!==(Eu=uu.also)&&void 0!==Eu?Eu:""}|${uu.label}|${null!==(ju=uu.detail)&&void 0!==ju?ju:""}`
```

#### 623. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L11992` → after: `L11992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR11992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L11992) · [Before (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L11992)

```diff
-       label: `${Vt.label} (line ${et})`
+       label: `${ju.label} (line ${Eu})`
```

#### 624. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12014` → after: `L12014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12014) · [Before (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12014)

```diff
-   return !/^['\u2018]/.test(tt[0]) || !(0, ye.b)(tt, "\\w\u2019'")
+   return !/^['\u2018]/.test(uu[0]) || !(0, YE.d)(uu, "\\w\u2019'")
```

#### 625. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12020` → after: `L12020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12020) · [Before (L12020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12020)

```diff
-       return (0, ye.f)(tt, ZX, LX).map((tt => [tt.index, tt.index + tt[0].length]))
+       return (0, YE.e)(uu, VC, rC).map((uu => [uu.index, uu.index + uu[0].length]))
```

#### 626. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12027` → after: `L12027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12027) · [Before (L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12027)

```diff
-   for (const Dt of tt.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${RX})\\b`, "g"))) {
+   for (const Zu of uu.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${mC})\\b`, "g"))) {
```

#### 627. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12037` → after: `L12037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12037) · [Before (L12037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12037)

```diff
-         words: `${Dt[2]?"It also":"This"} ${cX[Dt[3]]}`
+         words: `${Zu[2]?"It also":"This"} ${kC[Zu[3]]}`
```

#### 628. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12039` → after: `L12039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12039) · [Before (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12039)

```diff
-       for (const tt of jt.matchAll(new RegExp(`\\b(and|then|also) (${RX})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) Vt(qt + tt.index) || Ot.push({
+       for (const uu of qu.matchAll(new RegExp(`\\b(and|then|also) (${mC})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) ju(Uu + uu.index) || su.push({
```

#### 629. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12042` → after: `L12042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12042) · [Before (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12042)

```diff
-         words: `${tt[1]} ${cX[tt[2]]}`
+         words: `${uu[1]} ${kC[uu[2]]}`
```

#### 630. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12055` → after: `L12055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12055) · [Before (L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12055)

```diff
-       words: `will ${qt=Dt[1],"has"===qt?"have":qt.endsWith("ies")?`${qt.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(qt)?qt.slice(0,-2):qt.slice(0,-1)}`
+       words: `will ${Uu=Zu[1],"has"===Uu?"have":Uu.endsWith("ies")?`${Uu.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(Uu)?Uu.slice(0,-2):Uu.slice(0,-1)}`
```

#### 631. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12093` → after: `L12093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12093) · [Before (L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12093)

```diff
-   }, Nt = `WorldCodeAiSetting-${et}-${Vt.key}`;
+   }, Du = `WorldCodeAiSetting-${Eu}-${ju.key}`;
```

#### 632. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12121` → after: `L12121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12121) · [Before (L12121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12121)

```diff
-         "aria-label": `Less ${Qt}`,
+         "aria-label": `Less ${bu}`,
```

#### 633. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12133` → after: `L12133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12133) · [Before (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12133)

```diff
-         value: null !== dt && void 0 !== dt ? dt : String(Vt.value),
+         value: null !== lu && void 0 !== lu ? lu : String(ju.value),
```

#### 634. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12144` → after: `L12144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12144) · [Before (L12144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12144)

```diff
-         "aria-label": `More ${Qt}`,
+         "aria-label": `More ${bu}`,
```

#### 635. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12232` → after: `L12232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12232) · [Before (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12232)

```diff
-   if (tt > 9e4) return `It starts in about ${Math.ceil(tt/6e4)} minutes.`;
+   if (uu > 9e4) return `It starts in about ${Math.ceil(uu/6e4)} minutes.`;
```

#### 636. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12235` → after: `L12235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12235) · [Before (L12235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12235)

```diff
-   return et >= 60 ? "It starts in about a minute." : `It starts in about ${et} seconds.`
+   return Eu >= 60 ? "It starts in about a minute." : `It starts in about ${Eu} seconds.`
```

#### 637. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12237` → after: `L12237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12237) · [Before (L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12237)

```diff
- var iX = Vt(1298);
+ var tC = ju(1259);
```

#### 638. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12243` → after: `L12243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12243) · [Before (L12243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12243)

```diff
-     Vt.set(qt, (null !== (Ot = Vt.get(qt)) && void 0 !== Ot ? Ot : 0) + 1)
+     ju.set(Uu, (null !== (su = ju.get(Uu)) && void 0 !== su ? su : 0) + 1)
```

#### 639. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12247` → after: `L12247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12247) · [Before (L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12247)

```diff
-     const Ot = null !== (et = Vt.get(tt)) && void 0 !== et ? et : 0;
+     const su = null !== (Eu = ju.get(uu)) && void 0 !== Eu ? Eu : 0;
```

#### 640. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12274` → after: `L12274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12274) · [Before (L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12274)

```diff
-     const Ht = null !== (mt = dt.find((tt => lD.freeAt(tt) <= Date.now()))) && void 0 !== mt ? mt : dt[0],
+     const fu = null !== (Xu = lu.find((uu => NZ.freeAt(uu) <= Date.now()))) && void 0 !== Xu ? Xu : lu[0],
```

#### 641. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12291` → after: `L12291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12291) · [Before (L12291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12291)

```diff
-       return [...null !== (et = tt.why) && void 0 !== et ? et : [], ...(null !== (Vt = tt.parts) && void 0 !== Vt ? Vt : []).map((tt => tt.why)), ...YX(tt.before, tt.after)]
+       return [...null !== (Eu = uu.why) && void 0 !== Eu ? Eu : [], ...(null !== (ju = uu.parts) && void 0 !== ju ? ju : []).map((uu => uu.why)), ...xC(uu.before, uu.after)]
```

#### 642. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12302` → after: `L12302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12302) · [Before (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12302)

```diff
-           Ot = tt > 6e3 ? tt : iq;
+           su = uu > 6e3 ? uu : xU;
```

#### 643. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12316-L12318` → after: `L12316-L12318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12316-L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12316-L12318) · [Before (L12316-L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12316-L12318)

```diff
-   const Ot = et && null !== (Vt = tt[et]) && void 0 !== Vt ? Vt : [],
-     qt = Ot.length >= 2 ? Ot : Object.values(tt).flat();
-   return qt.length < 2 ? "Usually under a minute." : `Usually ${function(tt){const et=Math.max(5,5*Math.round(tt/5e3));if(et<60)return`about ${et} seconds`;const Vt=10*Math.round(tt/1e4),Ot=Math.floor(Vt/60),qt=Vt%60,Dt=`${Ot} ${1===Ot?"minute":"minutes"}`;return 0===qt?`about ${ … [truncated]
+   const su = Eu && null !== (ju = uu[Eu]) && void 0 !== ju ? ju : [],
+     Uu = su.length >= 2 ? su : Object.values(uu).flat();
+   return Uu.length < 2 ? "Usually under a minute." : `Usually ${function(uu){const Eu=Math.max(5,5*Math.round(uu/5e3));if(Eu<60)return`about ${Eu} seconds`;const ju=10*Math.round(uu/1e4),su=Math.floor(ju/60),Uu=ju%60,Zu=`${su} ${1===su?"minute":"minutes"}`;return 0===Uu?`about ${ … [truncated]
```

#### 644. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12320` → after: `L12320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12320) · [Before (L12320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12320)

```diff
- var sX = Vt(1583),
+ var zC = ju(1533),
```

#### 645. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12322` → after: `L12322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12322) · [Before (L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12322)

```diff
- var tQ = Vt(6723);
+ var ub = ju(6737);
```

#### 646. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12325` → after: `L12325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12325) · [Before (L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12325)

```diff
-     qm.e.setItem(eQ, !0)
+     ZX.k.setItem(Eb, !0)
```

#### 647. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12332` → after: `L12332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12332) · [Before (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12332)

```diff
-       } = await Vt.e(125).then((() => Vt(6716)));
+       } = await ju.e(125).then((() => ju(6732)));
```

#### 648. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12372` → after: `L12372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12372) · [Before (L12372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12372)

```diff
-             return !(0, wt.h)(et)
+             return !(0, Yu.c)(Eu)
```

#### 649. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12401-L12405` → after: `L12401-L12405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12401-L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12401-L12405) · [Before (L12401-L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12401-L12405)

```diff
-           Xt = Vt ? `It is a code block: a block in the world holding JavaScript that runs on the game server when a player clicks it. ${yq}` : "It is World Code: JavaScript that runs on the game server for one world.",
-           Qt = [...new Set(it(null !== (et = Ot[mt]) && void 0 !== et ? et : "").map((tt => tt.name)))],
-           lt = dt ? `, except to add a new callback or function to ${mt} by its name with replace_function${Qt.length>0?` (not ${Qt.join(", ")}, which it has already)`:""}` : "",
-           Et = Dt ? `\nYou can see only the open file's code: change only that file${lt}, and never write the other files listed.\n` : "";
-         return `Help me with the code of my game in Bloxd, a voxel game. ${Xt}\n\n${nX.m} Before you answer, read it and, wherever you can, the pages it links to that your answer needs, and use only the api methods, callbacks and client options they give, with their exact names.\ … [truncated]
+           Cu = ju ? `It is a code block: a block in the world holding JavaScript that runs on the game server when a player clicks it. ${DU}` : "It is World Code: JavaScript that runs on the game server for one world.",
+           bu = [...new Set(Lu(null !== (Eu = su[Xu]) && void 0 !== Eu ? Eu : "").map((uu => uu.name)))],
+           cu = lu ? `, except to add a new callback or function to ${Xu} by its name with replace_function${bu.length>0?` (not ${bu.join(", ")}, which it has already)`:""}` : "",
+           Nu = Zu ? `\nYou can see only the open file's code: change only that file${cu}, and never write the other files listed.\n` : "";
+         return `Help me with the code of my game in Bloxd, a voxel game. ${Cu}\n\n${RC.j} Before you answer, read it and, wherever you can, the pages it links to that your answer needs, and use only the api methods, callbacks and client options they give, with their exact names.\ … [truncated]
```

#### 650. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12410` → after: `L12410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12410) · [Before (L12410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12410)

```diff
-       } = (0, nX.j)(et),
+       } = (0, RC.h)(Eu),
```

#### 651. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12436` → after: `L12436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12436) · [Before (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12436)

```diff
-         !0 !== qm.e.getItem(eQ) ? VQ.ask().then((tt => {
+         !0 !== ZX.k.getItem(Eb) ? jb.ask().then((uu => {
```

#### 652. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12444` → after: `L12444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12444) · [Before (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12444)

```diff
-         children: [OQ[dt.how].hint, " ", (0, mt.jsx)(tQ.b, {
+         children: [sb[lu.how].hint, " ", (0, Xu.jsx)(ub.c, {
```

#### 653. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12466` → after: `L12466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12466) · [Before (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12466)

```diff
-         }), (0, mt.jsx)(Xt.m, {
+         }), (0, Xu.jsx)(Cu.p, {
```

#### 654. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12476` → after: `L12476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12476) · [Before (L12476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12476)

```diff
-           children: (0, mt.jsx)(lt.b, {
+           children: (0, Xu.jsx)(cu.e, {
```

#### 655. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12484-L12485` → after: `L12484-L12485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12484-L12485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12484-L12485) · [Before (L12484-L12485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12484-L12485)

```diff
- var DQ = Vt(106),
-   mQ = Vt(37146);
+ var Zb = ju(91),
+   Xb = ju(37317);
```

#### 656. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12502` → after: `L12502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12502) · [Before (L12502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12502)

```diff
-   return `Moving to ${tt} code\u2026`
+   return `Moving to ${uu} code\u2026`
```

#### 657. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12506` → after: `L12506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12506) · [Before (L12506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12506)

```diff
-   return tt.fromLine === tt.toLine ? `line ${tt.fromLine}` : `lines ${tt.fromLine}-${tt.toLine}`
+   return uu.fromLine === uu.toLine ? `line ${uu.fromLine}` : `lines ${uu.fromLine}-${uu.toLine}`
```

#### 658. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12510-L12511` → after: `L12510-L12511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12510-L12511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12510-L12511) · [Before (L12510-L12511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12510-L12511)

```diff
-   const et = tt.text.length > 4e3 ? `${tt.text.slice(0,4e3)}\n...` : tt.text;
-   return `The part I picked (${tt.path}, ${XQ(tt)}):\n\`\`\`\n${et}\n\`\`\``
+   const Eu = uu.text.length > 4e3 ? `${uu.text.slice(0,4e3)}\n...` : uu.text;
+   return `The part I picked (${uu.path}, ${Cb(uu)}):\n\`\`\`\n${Eu}\n\`\`\``
```

#### 659. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12518` → after: `L12518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12518) · [Before (L12518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12518)

```diff
-       return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${QQ(tt)}`;
+       return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${bb(uu)}`;
```

#### 660. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12520` → after: `L12520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12520) · [Before (L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12520)

```diff
-       return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${QQ(tt)}`;
+       return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${bb(uu)}`;
```

#### 661. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12522` → after: `L12522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12522) · [Before (L12522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12522)

```diff
-       return `${et.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${QQ(tt)}`
+       return `${Eu.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${bb(uu)}`
```

#### 662. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12531` → after: `L12531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12531) · [Before (L12531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12531)

```diff
-       return `Explain ${Vt}`;
+       return `Explain ${ju}`;
```

#### 663. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12533` → after: `L12533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12533) · [Before (L12533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12533)

```diff
-       return `Fix ${Vt}`;
+       return `Fix ${ju}`;
```

#### 664. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12535` → after: `L12535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12535) · [Before (L12535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12535)

```diff
-       return `${et.trim()} (${Vt})`
+       return `${Eu.trim()} (${ju})`
```

#### 665. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12538-L12542` → after: `L12538-L12542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12538-L12542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12538-L12542) · [Before (L12538-L12542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12538-L12542)

```diff
- var fQ = Vt(41620),
-   wQ = Vt(4935),
-   yQ = Vt(41600),
-   NQ = Vt(41611),
-   aQ = Vt(41604);
+ var Ob = ju(41627),
+   Yb = ju(4942),
+   hb = ju(41609),
+   Db = ju(41619),
+   gb = ju(41617);
```

#### 666. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12561` → after: `L12561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12561) · [Before (L12561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12561)

```diff
-         ["/lib.d.ts", NQ.b]
+         ["/lib.d.ts", Db.c]
```

#### 667. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12566` → after: `L12566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12566) · [Before (L12566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12566)

```diff
-         ["/lib.d.ts", NQ.b]
+         ["/lib.d.ts", Db.c]
```

#### 668. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12568` → after: `L12568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12568) · [Before (L12568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12568)

```diff
-     Vt = fQ.e(fQ.c(qt), [...qt.keys()], vt(), {
+     ju = Ob.g(Ob.c(Uu), [...Uu.keys()], du(), {
```

#### 669. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12590` → after: `L12590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12590) · [Before (L12590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12590)

```diff
-   return qt(tt), Ot && pV(Ot, tt) ? Ot : void 0
+   return Uu(uu), su && Tj(su, uu) ? su : void 0
```

#### 670. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12609` → after: `L12609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12609) · [Before (L12609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12609)

```diff
-   if (Ot) return `"${Ot}"`;
+   if (su) return `"${su}"`;
```

#### 671. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12614` → after: `L12614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12614) · [Before (L12614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12614)

```diff
-   if (qt.length > 0) return qt.slice(0, 2).map((tt => `"${tt}"`)).join(" or ");
+   if (Uu.length > 0) return Uu.slice(0, 2).map((uu => `"${uu}"`)).join(" or ");
```

#### 672. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12624` → after: `L12624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12624) · [Before (L12624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12624)

```diff
-   return mt ? `"${mt.option}"` : void 0
+   return Xu ? `"${Xu.option}"` : void 0
```

#### 673. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12650-L12651` → after: `L12650-L12651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12650-L12651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12650-L12651) · [Before (L12650-L12651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12650-L12651)

```diff
-       Vt = null !== (Xt = null === (Qt = tt.split("\n")[et]) || void 0 === Qt ? void 0 : Qt.trim()) && void 0 !== Xt ? Xt : "",
-       Ot = Vt.length > 40 ? `${Vt.slice(0,37)}...` : Vt,
+       ju = null !== (Cu = null === (bu = uu.split("\n")[Eu]) || void 0 === bu ? void 0 : bu.trim()) && void 0 !== Cu ? Cu : "",
+       su = ju.length > 40 ? `${ju.slice(0,37)}...` : ju,
```

#### 674. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12653` → after: `L12653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12653) · [Before (L12653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12653)

```diff
-     jt.add(`Line ${et+1} stops all of this code from running: "${Ot}" (${qt}).`)
+     qu.add(`Line ${Eu+1} stops all of this code from running: "${su}" (${Uu}).`)
```

#### 675. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12661-L12663` → after: `L12661-L12663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12661-L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12661-L12663) · [Before (L12661-L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12661-L12663)

```diff
-         Vt = null !== (ut = null === (ht = tt.split("\n")[et]) || void 0 === ht ? void 0 : ht.trim()) && void 0 !== ut ? ut : "",
-         Ot = Vt.length > 40 ? `${Vt.slice(0,37)}...` : Vt;
-       jt.add(`Line ${et+1} never runs: "${Ot}" comes after a return, which ends the function first.`);
+         ju = null !== (pu = null === (Ju = uu.split("\n")[Eu]) || void 0 === Ju ? void 0 : Ju.trim()) && void 0 !== pu ? pu : "",
+         su = ju.length > 40 ? `${ju.slice(0,37)}...` : ju;
+       qu.add(`Line ${Eu+1} never runs: "${su}" comes after a return, which ends the function first.`);
```

#### 676. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12668` → after: `L12668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12668) · [Before (L12668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12668)

```diff
-       const et = zt.start + (null !== (Wt = zt.length) && void 0 !== Wt ? Wt : 0),
+       const Eu = Wu.start + (null !== (au = Wu.length) && void 0 !== au ? au : 0),
```

#### 677. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12671` → after: `L12671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12671) · [Before (L12671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12671)

```diff
-         qt = new RegExp(`^${Vt.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(tt),
+         Uu = new RegExp(`^${ju.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(uu),
```

#### 678. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12674-L12675` → after: `L12674-L12675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12674-L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12674-L12675) · [Before (L12674-L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12674-L12675)

```diff
-         Xt = new RegExp(`//\\s*(?:const|let|var)\\s+${Vt.replaceAll("$","\\$")}\\b`).test(tt),
-         Qt = new RegExp(`typeof\\s+${Vt.replaceAll("$","\\$")}\\b`).test(tt);
+         Cu = new RegExp(`//\\s*(?:const|let|var)\\s+${ju.replaceAll("$","\\$")}\\b`).test(uu),
+         bu = new RegExp(`typeof\\s+${ju.replaceAll("$","\\$")}\\b`).test(uu);
```

#### 679. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12680` → after: `L12680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12680) · [Before (L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12680)

```diff
-       jt.add(ft ? `Line ${Et+1} uses "${Vt}", which is never set, so it throws there. Did you mean "${ft}"?` : `Line ${Et+1} uses "${Vt}", which isn't set there, so it throws when that line runs.`);
+       qu.add(Ou ? `Line ${Nu+1} uses "${ju}", which is never set, so it throws there. Did you mean "${Ou}"?` : `Line ${Nu+1} uses "${ju}", which isn't set there, so it throws when that line runs.`);
```

#### 680. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12686` → after: `L12686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12686) · [Before (L12686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12686)

```diff
-     const Vt = zt.start + (null !== (Et = zt.length) && void 0 !== Et ? Et : 0),
+     const ju = Wu.start + (null !== (Nu = Wu.length) && void 0 !== Nu ? Nu : 0),
```

#### 681. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12693` → after: `L12693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12693) · [Before (L12693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12693)

```diff
-       ot = Qt.length > 40 ? `${Qt.slice(0,37)}...` : Qt;
+       Su = bu.length > 40 ? `${bu.slice(0,37)}...` : bu;
```

#### 682. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12697-L12699` → after: `L12697-L12699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12697-L12699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12697-L12699) · [Before (L12697-L12699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12697-L12699)

```diff
-         Vt = null !== (ct = null === tt || void 0 === tt || null === (Rt = tt[1]) || void 0 === Rt ? void 0 : Rt.replace("-", " to ")) && void 0 !== ct ? ct : "a different number of",
-         qt = Number(null !== (It = null === tt || void 0 === tt ? void 0 : tt[2]) && void 0 !== It ? It : Ot.arguments.length);
-       jt.add(`${Dt} needs ${Vt} ${"1"===Vt?"value":"values"}, but this line gives it ${qt}.`);
+         ju = null !== (ou = null === uu || void 0 === uu || null === (ku = uu[1]) || void 0 === ku ? void 0 : ku.replace("-", " to ")) && void 0 !== ou ? ou : "a different number of",
+         Uu = Number(null !== (mu = null === uu || void 0 === uu ? void 0 : uu[2]) && void 0 !== mu ? mu : su.arguments.length);
+       qu.add(`${Zu} needs ${ju} ${"1"===ju?"value":"values"}, but this line gives it ${Uu}.`);
```

#### 683. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12708` → after: `L12708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12708) · [Before (L12708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12708)

```diff
-         Ht = (null !== (Pt = null === tt || void 0 === tt ? void 0 : tt.properties) && void 0 !== Pt ? Pt : []).flatMap((tt => tt.name && (vt().isIdentifier(tt.name) || vt().isStringLiteral(tt.name)) ? [{
+         fu = (null !== (vu = null === uu || void 0 === uu ? void 0 : uu.properties) && void 0 !== vu ? vu : []).flatMap((uu => uu.name && (du().isIdentifier(uu.name) || du().isStringLiteral(uu.name)) ? [{
```

#### 684. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12712` → after: `L12712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12712) · [Before (L12712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12712)

```diff
-         Xt = null !== (Zt = null === (Lt = et.match(/'([^']*)' does not exist/)) || void 0 === Lt ? void 0 : Lt[1]) && void 0 !== Zt ? Zt : ot,
+         Cu = null !== (Ku = null === (Vu = Eu.match(/'([^']*)' does not exist/)) || void 0 === Vu ? void 0 : Vu[1]) && void 0 !== Ku ? Ku : Su,
```

#### 685. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12714` → after: `L12714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12714) · [Before (L12714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12714)

```diff
-         lt = Qt.length > 0 ? Qt : [{
+         cu = bu.length > 0 ? bu : [{
```

#### 686. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12718` → after: `L12718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12718) · [Before (L12718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12718)

```diff
-         Et = Vt ? ` It takes ${gV(dt,Vt)}.` : " Check Show Docs for its settings.";
+         Nu = ju ? ` It takes ${nj(lu,ju)}.` : " Check Show Docs for its settings.";
```

#### 687. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12727` → after: `L12727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12727) · [Before (L12727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12727)

```diff
-         void 0 !== qt && dt.getTypeAtLocation(qt).getCallSignatures().length > 0 || mt.includes(et) || (Ot = Vt ? `"${tt}"` : SQ(et, mt)), jt.add(`${Dt} has no setting called "${et}".${Ot?` Did you mean ${Ot}?`:Et}`)
+         void 0 !== Uu && lu.getTypeAtLocation(Uu).getCallSignatures().length > 0 || Xu.includes(Eu) || (su = ju ? `"${uu}"` : ob(Eu, Xu)), qu.add(`${Zu} has no setting called "${Eu}".${su?` Did you mean ${su}?`:Nu}`)
```

#### 688. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12731` → after: `L12731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12731) · [Before (L12731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12731)

```diff
-     const rt = null !== (ft = null === Xt || void 0 === Xt ? void 0 : Xt.initializer) && void 0 !== ft ? ft : qt,
+     const Iu = null !== (Ou = null === Cu || void 0 === Cu ? void 0 : Cu.initializer) && void 0 !== Ou ? Ou : Uu,
```

#### 689. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12736` → after: `L12736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12736) · [Before (L12736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12736)

```diff
-       Yt = null !== (wt = null === rt || void 0 === rt ? void 0 : rt.getText(mt)) && void 0 !== wt ? wt : Qt,
+       tu = null !== (Yu = null === Iu || void 0 === Iu ? void 0 : Iu.getText(Xu)) && void 0 !== Yu ? Yu : bu,
```

#### 690. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12740` → after: `L12740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12740) · [Before (L12740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12740)

```diff
-       const et = null === (Ft = new RegExp(`(?:^|[{,])\\s*${Bt.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(tt)) || void 0 === Ft ? void 0 : Ft[2];
+       const Eu = null === (ru = new RegExp(`(?:^|[{,])\\s*${xu.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(uu)) || void 0 === ru ? void 0 : ru[2];
```

#### 691. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12743` → after: `L12743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12743) · [Before (L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12743)

```diff
-         jt.add(`${Dt} has no ${it} called "${et}" (${Yt}).${tt?` Did you mean ${tt}?`:""}`)
+         qu.add(`${Zu} has no ${Lu} called "${Eu}" (${tu}).${uu?` Did you mean ${uu}?`:""}`)
```

#### 692. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12749` → after: `L12749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12749) · [Before (L12749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12749)

```diff
-       const tt = rt && vt().isStringLiteral(rt) ? rt : void 0,
+       const uu = Iu && du().isStringLiteral(Iu) ? Iu : void 0,
```

#### 693. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12751-L12752` → after: `L12751-L12752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12751-L12752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12751-L12752) · [Before (L12751-L12752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12751-L12752)

```diff
-         Vt = tt && !Xt ? `${Dt} has no ${it} called ${kt=ot,kt.startsWith('"')?kt:`"${kt}"`}.` : `${Dt} can't take ${ot} there.`;
-       jt.add(`${Vt}${et?` Did you mean ${et}?`:" Check Show Docs for what it takes."}`);
+         ju = uu && !Cu ? `${Zu} has no ${Lu} called ${Qu=Su,Qu.startsWith('"')?Qu:`"${Qu}"`}.` : `${Zu} can't take ${Su} there.`;
+       qu.add(`${ju}${Eu?` Did you mean ${Eu}?`:" Check Show Docs for what it takes."}`);
```

#### 694. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12757` → after: `L12757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12757) · [Before (L12757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12757)

```diff
-       jt.add(`${Dt} needs ${pt} in ${ot}: it takes ${gV(dt,Ut)}.`);
+       qu.add(`${Zu} needs ${Tu} in ${Su}: it takes ${nj(lu,Fu)}.`);
```

#### 695. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12761` → after: `L12761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12761) · [Before (L12761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12761)

```diff
-       jt.add(`${Dt} can't take ${ot} there: it takes ${gV(dt,Ut)}.`);
+       qu.add(`${Zu} can't take ${Su} there: it takes ${nj(lu,Fu)}.`);
```

#### 696. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12767` → after: `L12767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12767) · [Before (L12767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12767)

```diff
-       jt.add(`${Dt} needs settings in { } there${tt?`, like ${tt}`:""}, not ${ot}.`);
+       qu.add(`${Zu} needs settings in { } there${uu?`, like ${uu}`:""}, not ${Su}.`);
```

#### 697. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12772` → after: `L12772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12772) · [Before (L12772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12772)

```diff
-       st = null !== (bt = null === (Jt = dt.getResolvedSignature(Ot)) || void 0 === Jt || null === (Ct = Jt.parameters[gt]) || void 0 === Ct ? void 0 : Ct.name) && void 0 !== bt ? bt : "that part",
+       yu = null !== (Mu = null === (eu = lu.getResolvedSignature(su)) || void 0 === eu || null === (Gu = eu.parameters[nu]) || void 0 === Gu ? void 0 : Gu.name) && void 0 !== Mu ? Mu : "that part",
```

#### 698. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12775` → after: `L12775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12775) · [Before (L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12775)

```diff
-     "string" === Tt ? jt.add(`${Dt} needs ${st} as text, but ${ot} is ${te} here.`) : "number" === Tt ? jt.add(`${Dt} needs ${st} as a number, but ${ot} is ${te} here.`) : jt.add(`${Dt} can't take ${ot} there${Ut?`: it takes ${gV(dt,Ut)}`:". Check Show Docs for what it takes"}.`)
+     "string" === Au ? qu.add(`${Zu} needs ${yu} as text, but ${Su} is ${Ru} here.`) : "number" === Au ? qu.add(`${Zu} needs ${yu} as a number, but ${Su} is ${Ru} here.`) : qu.add(`${Zu} can't take ${Su} there${Fu?`: it takes ${nj(lu,Fu)}`:". Check Show Docs for what it takes"}.`)
```

#### 699. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12790` → after: `L12790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12790) · [Before (L12790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12790)

```diff
-       Dt = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt[1]) && void 0 !== Vt ? Vt : null === tt || void 0 === tt ? void 0 : tt[2];
+       Zu = null !== (ju = null === uu || void 0 === uu ? void 0 : uu[1]) && void 0 !== ju ? ju : null === uu || void 0 === uu ? void 0 : uu[2];
```

#### 700. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12792` → after: `L12792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12792) · [Before (L12792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12792)

```diff
-     if (Dt) et.set(Dt, (null !== (Ot = et.get(Dt)) && void 0 !== Ot ? Ot : 0) + 1)
+     if (Zu) Eu.set(Zu, (null !== (su = Eu.get(Zu)) && void 0 !== su ? su : 0) + 1)
```

#### 701. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12796` → after: `L12796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12796) · [Before (L12796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12796)

```diff
-     return Vt > 1 ? [`${et} is in the code ${Vt} times, so only the last one runs. Put them together in one ${et}.`] : []
+     return ju > 1 ? [`${Eu} is in the code ${ju} times, so only the last one runs. Put them together in one ${Eu}.`] : []
```

#### 702. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12805` → after: `L12805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12805) · [Before (L12805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12805)

```diff
-       const Ot = null !== (et = null === (Vt = mt[tt]) || void 0 === Vt ? void 0 : Vt.trim()) && void 0 !== et ? et : "";
+       const su = null !== (Eu = null === (ju = Xu[uu]) || void 0 === ju ? void 0 : ju.trim()) && void 0 !== Eu ? Eu : "";
```

#### 703. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12808` → after: `L12808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12808) · [Before (L12808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12808)

```diff
-         text: Ot.length > 50 ? `${Ot.slice(0,47)}...` : Ot
+         text: su.length > 50 ? `${su.slice(0,47)}...` : su
```

#### 704. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12816` → after: `L12816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12816) · [Before (L12816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12816)

```diff
-       et = new RegExp(`^(?:async\\s+)?function\\s*\\*?\\s*${tt}\\s*\\(|^${tt}\\s*=`),
+       Eu = new RegExp(`^(?:async\\s+)?function\\s*\\*?\\s*${uu}\\s*\\(|^${uu}\\s*=`),
```

#### 705. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12820` → after: `L12820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12820) · [Before (L12820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12820)

```diff
-   const Xt = null !== (Vt = null === (Ot = /"([^"]+)"/.exec(tt)) || void 0 === Ot ? void 0 : Ot[1]) && void 0 !== Vt ? Vt : null === (qt = /^api\.[\w$]+/.exec(tt)) || void 0 === qt ? void 0 : qt[0];
+   const Cu = null !== (ju = null === (su = /"([^"]+)"/.exec(uu)) || void 0 === su ? void 0 : su[1]) && void 0 !== ju ? ju : null === (Uu = /^api\.[\w$]+/.exec(uu)) || void 0 === Uu ? void 0 : Uu[0];
```

#### 706. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12824` → after: `L12824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12824) · [Before (L12824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12824)

```diff
-     Et = null !== (Dt = lt.find((tt => !Qt.has(mt[tt])))) && void 0 !== Dt ? Dt : lt[0];
+     Nu = null !== (Zu = cu.find((uu => !bu.has(Xu[uu])))) && void 0 !== Zu ? Zu : cu[0];
```

#### 707. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12869` → after: `L12869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12869) · [Before (L12869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12869)

```diff
-     return [`Line ${et.getLineAndCharacterOfPosition(tt.at).line+1} uses "CONFIG.${tt.name}", but CONFIG has no ${tt.name}, so it is undefined there. Add ${tt.name} to CONFIG.`]
+     return [`Line ${Eu.getLineAndCharacterOfPosition(uu.at).line+1} uses "CONFIG.${uu.name}", but CONFIG has no ${uu.name}, so it is undefined there. Add ${uu.name} to CONFIG.`]
```

#### 708. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12875` → after: `L12875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12875) · [Before (L12875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12875)

```diff
-   const Ot = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== et.path && (0, wt.h)(et.path)),
+   const su = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== Eu.path && (0, Yu.c)(Eu.path)),
```

#### 709. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12899` → after: `L12899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12899) · [Before (L12899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12899)

```diff
-           qt.result.createObjectStore(cH)
+           Uu.result.createObjectStore(of)
```

#### 710. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12909` → after: `L12909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12909) · [Before (L12909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12909)

```diff
-           Vt(null !== (tt = qt.error) && void 0 !== tt ? tt : new Error("IndexedDB didn't open"))
+           ju(null !== (uu = Uu.error) && void 0 !== uu ? uu : new Error("IndexedDB didn't open"))
```

#### 711. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12918` → after: `L12918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12918) · [Before (L12918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12918)

```diff
-           return (await qt()).transaction(cH, tt)
+           return (await Uu()).transaction(of, uu)
```

#### 712. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12921` → after: `L12921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12921) · [Before (L12921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12921)

```diff
-           return Ot = null, (await qt()).transaction(cH, tt)
+           return su = null, (await Uu()).transaction(of, uu)
```

#### 713. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12936` → after: `L12936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12936) · [Before (L12936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12936)

```diff
-             Vt = et.objectStore(cH).get(tt);
+             ju = Eu.objectStore(of).get(uu);
```

#### 714. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12945` → after: `L12945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12945) · [Before (L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12945)

```diff
-           return tt.objectStore(cH).put(Vt, et), await RH(tt), !0
+           return uu.objectStore(of).put(ju, Eu), await kf(uu), !0
```

#### 715. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12954` → after: `L12954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12954) · [Before (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12954)

```diff
-           dt = qt.objectStore(cH);
+           lu = Uu.objectStore(of);
```

#### 716. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12958` → after: `L12958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12958) · [Before (L12958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12958)

```diff
-           jt = Vt(void 0 === Ht.result ? Ot : Ht.result), dt.put(jt, et)
+           qu = ju(void 0 === fu.result ? su : fu.result), lu.put(qu, Eu)
```

#### 717. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12962` → after: `L12962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12962) · [Before (L12962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12962)

```diff
-   }(qm.c),
+   }(ZX.h),
```

#### 718. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12965` → after: `L12965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12965) · [Before (L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12965)

```diff
-       this.store = tt, this.signal = et, this.hE = new Map
+       this.store = uu, this.signal = Eu, this.oN = new Map
```

#### 719. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12972-L12973` → after: `L12972-L12973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12972-L12973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L12972-L12973) · [Before (L12972-L12973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L12972-L12973)

```diff
-         this.hE.set(tt, Ot), Ot.then(et)
-       }))) && void 0 !== Vt ? Vt : () => {}
+         this.oN.set(uu, su), su.then(Eu)
+       }))) && void 0 !== ju ? ju : () => {}
```

#### 720. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13002` → after: `L13002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13002) · [Before (L13002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13002)

```diff
-       this.hE.set(tt, mt.then((tt => {
+       this.oN.set(uu, Xu.then((uu => {
```

#### 721. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13021` → after: `L13021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13021) · [Before (L13021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13021)

```diff
-       this.hE.set(tt, Ot.then((tt => {
+       this.oN.set(uu, su.then((uu => {
```

#### 722. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13038` → after: `L13038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13038) · [Before (L13038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13038)

```diff
-           snapshots: await this.store.update(this.storeKey(tt), (tt => et(LH(tt) ? tt : null))),
+           snapshots: await this.store.update(this.storeKey(uu), (uu => Eu(Vf(uu) ? uu : null))),
```

#### 723. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13049` → after: `L13049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13049) · [Before (L13049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13049)

```diff
-       return this.store.getItem(this.storeKey(tt)).then((tt => LH(tt) ? tt : null)).catch((() => null))
+       return this.store.getItem(this.storeKey(uu)).then((uu => Vf(uu) ? uu : null)).catch((() => null))
```

#### 724. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13052-L13053` → after: `L13052-L13053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13052-L13053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13052-L13053) · [Before (L13052-L13053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13052-L13053)

```diff
-       let et = this.hE.get(tt);
-       return et || (et = this.store.getItem(this.storeKey(tt)).then((tt => LH(tt) ? tt : [])).catch((() => [])), this.hE.set(tt, et)), et
+       let Eu = this.oN.get(uu);
+       return Eu || (Eu = this.store.getItem(this.storeKey(uu)).then((uu => Vf(uu) ? uu : [])).catch((() => [])), this.oN.set(uu, Eu)), Eu
```

#### 725. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13056` → after: `L13056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13056) · [Before (L13056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13056)

```diff
-       return `worldCodeAiHistory:${tt}`
+       return `worldCodeAiHistory:${uu}`
```

#### 726. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13061` → after: `L13061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13061) · [Before (L13061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13061)

```diff
-       this.store = tt, this.signal = et, this.hE = new Map
+       this.store = uu, this.signal = Eu, this.oN = new Map
```

#### 727. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13069` → after: `L13069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13069) · [Before (L13069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13069)

```diff
-           return null !== (Vt = await this.read(tt)) && void 0 !== Vt ? Vt : et
+           return null !== (ju = await this.read(uu)) && void 0 !== ju ? ju : Eu
```

#### 728. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13071-L13072` → after: `L13071-L13072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13071-L13072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13071-L13072) · [Before (L13071-L13072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13071-L13072)

```diff
-         this.hE.set(tt, Ot), Ot.then(et)
-       }))) && void 0 !== Vt ? Vt : () => {}
+         this.oN.set(uu, su), su.then(Eu)
+       }))) && void 0 !== ju ? ju : () => {}
```

#### 729. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13078` → after: `L13078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13078) · [Before (L13078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13078)

```diff
-       return this.update(tt, (tt => tt.includes(et) || tt.length >= 8 ? tt : [...tt, et]))
+       return this.update(uu, (uu => uu.includes(Eu) || uu.length >= 8 ? uu : [...uu, Eu]))
```

#### 730. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13090` → after: `L13090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13090) · [Before (L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13090)

```diff
-         const qt = et(null !== (Ot = await this.read(tt)) && void 0 !== Ot ? Ot : Vt);
+         const Uu = Eu(null !== (su = await this.read(uu)) && void 0 !== su ? su : ju);
```

#### 731. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13093` → after: `L13093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13093) · [Before (L13093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13093)

```diff
-       this.hE.set(tt, Ot);
+       this.oN.set(uu, su);
```

#### 732. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13101-L13102` → after: `L13101-L13102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13101-L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13101-L13102) · [Before (L13101-L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13101-L13102)

```diff
-       let et = this.hE.get(tt);
-       return et || (et = this.read(tt).then((tt => null !== tt && void 0 !== tt ? tt : [])), this.hE.set(tt, et)), et
+       let Eu = this.oN.get(uu);
+       return Eu || (Eu = this.read(uu).then((uu => null !== uu && void 0 !== uu ? uu : [])), this.oN.set(uu, Eu)), Eu
```

#### 733. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13105` → after: `L13105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13105) · [Before (L13105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13105)

```diff
-       return `worldCodeAiNotes:${tt}`
+       return `worldCodeAiNotes:${uu}`
```

#### 734. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13117` → after: `L13117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13117) · [Before (L13117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13117)

```diff
-         return null !== (et = null === (Vt = qt(tt)) || void 0 === Vt ? void 0 : Vt.content) && void 0 !== et ? et : ""
+         return null !== (Eu = null === (ju = Uu(uu)) || void 0 === ju ? void 0 : ju.content) && void 0 !== Eu ? Eu : ""
```

#### 735. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13125-L13126` → after: `L13125-L13126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13125-L13126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13125-L13126) · [Before (L13125-L13126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13125-L13126)

```diff
-       itemNames: null !== (tt = null === (et = qt("itemNames")) || void 0 === et ? void 0 : et.raw) && void 0 !== tt ? tt : "",
-       blockNames: null !== (Vt = null === (Ot = qt("blockNames")) || void 0 === Ot ? void 0 : Ot.raw) && void 0 !== Vt ? Vt : "",
+       itemNames: null !== (uu = null === (Eu = Uu("itemNames")) || void 0 === Eu ? void 0 : Eu.raw) && void 0 !== uu ? uu : "",
+       blockNames: null !== (ju = null === (su = Uu("blockNames")) || void 0 === su ? void 0 : su.raw) && void 0 !== ju ? ju : "",
```

#### 736. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13168` → after: `L13168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13168) · [Before (L13168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13168)

```diff
-       ...Aj.h,
+       ...Fq.g,
```

#### 737. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13209` → after: `L13209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13209) · [Before (L13209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13209)

```diff
-   return Object.entries(null !== (Vt = tt.leftFiles) && void 0 !== Vt ? Vt : {}).every((tt => {
+   return Object.entries(null !== (ju = uu.leftFiles) && void 0 !== ju ? ju : {}).every((uu => {
```

#### 738. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13212` → after: `L13212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13212) · [Before (L13212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13212)

```diff
-     return (null !== (Vt = et[Ot]) && void 0 !== Vt ? Vt : "") === qt
+     return (null !== (ju = Eu[su]) && void 0 !== ju ? ju : "") === Uu
```

#### 739. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13221-L13222` → after: `L13221-L13222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13221-L13222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13221-L13222) · [Before (L13221-L13222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13221-L13222)

```diff
-     return Vt.length > 0 && Vt.every((tt => void 0 !== tt && (void 0 === et || et.some((et => rj(et, [tt]) !== et))))) ? Vt : void 0
-   }(null !== (et = tt.warnings) && void 0 !== et ? et : [], tt.changes.map((tt => tt.after)))
+     return ju.length > 0 && ju.every((uu => void 0 !== uu && (void 0 === Eu || Eu.some((Eu => Sq(Eu, [uu]) !== Eu))))) ? ju : void 0
+   }(null !== (Eu = uu.warnings) && void 0 !== Eu ? Eu : [], uu.changes.map((uu => uu.after)))
```

#### 740. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13248` → after: `L13248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13248) · [Before (L13248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13248)

```diff
-     Lt = null !== (et = lt.warnings) && void 0 !== et ? et : [],
+     Vu = null !== (Eu = cu.warnings) && void 0 !== Eu ? Eu : [],
```

#### 741. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13251` → after: `L13251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13251) · [Before (L13251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13251)

```diff
-     Gt = null !== (Vt = null === (qt = lt.swappedTo) || void 0 === qt ? void 0 : qt[0]) && void 0 !== Vt ? Vt : Ft ? null !== (jt = null === (Ht = /"([^"]+)"/.exec(Lt[0])) || void 0 === Ht ? void 0 : Ht[1]) && void 0 !== jt ? jt : null === (Xt = /^api\.[\w$]+/.exec(Lt[0])) || voi … [truncated]
+     iu = null !== (ju = null === (Uu = cu.swappedTo) || void 0 === Uu ? void 0 : Uu[0]) && void 0 !== ju ? ju : ru ? null !== (qu = null === (fu = /"([^"]+)"/.exec(Vu[0])) || void 0 === fu ? void 0 : fu[1]) && void 0 !== qu ? qu : null === (Cu = /^api\.[\w$]+/.exec(Vu[0])) || voi … [truncated]
```

#### 742. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13256` → after: `L13256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13256) · [Before (L13256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13256)

```diff
-       return new Map((null !== (tt = lt.warnings) && void 0 !== tt ? tt : []).map((tt => [tt, 1 === lt.changes.length && et ? ZQ(tt, et) : void 0])))
+       return new Map((null !== (uu = cu.warnings) && void 0 !== uu ? uu : []).map((uu => [uu, 1 === cu.changes.length && Eu ? Vb(uu, Eu) : void 0])))
```

#### 743. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13260` → after: `L13260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13260) · [Before (L13260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13260)

```diff
-       return null !== (et = null === (Vt = ot.get(tt)) || void 0 === Vt ? void 0 : Vt.line) && void 0 !== et ? et : tt
+       return null !== (Eu = null === (ju = Su.get(uu)) || void 0 === ju ? void 0 : ju.line) && void 0 !== Eu ? Eu : uu
```

#### 744. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13269` → after: `L13269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13269) · [Before (L13269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13269)

```diff
-     Yt((tt => 0 === tt.size ? tt : new Set))
+     tu((uu => 0 === uu.size ? uu : new Set))
```

#### 745. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13281` → after: `L13281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13281) · [Before (L13281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13281)

```diff
-         const Vt = new Set((null !== (et = xt.get(tt.path)) && void 0 !== et ? et : []).filter((et => !it.has(`${tt.path}:${et.index}`))).map((tt => tt.index))),
+         const ju = new Set((null !== (Eu = Hu.get(uu.path)) && void 0 !== Eu ? Eu : []).filter((Eu => !Lu.has(`${uu.path}:${Eu.index}`))).map((uu => uu.index))),
```

#### 746. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13287` → after: `L13287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13287) · [Before (L13287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13287)

```diff
-             return `${Ot.join("\n")}${qt}`
+             return `${su.join("\n")}${Uu}`
```

#### 747. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13309` → after: `L13309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13309) · [Before (L13309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13309)

```diff
-       title: qe ? `Editing code: ${De}` : `Code change: ${De}`,
+       title: sE ? `Editing code: ${UE}` : `Code change: ${UE}`,
```

#### 748. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13329` → after: `L13329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13329) · [Before (L13329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13329)

```diff
-           }(Ve ? null !== (et = Ve.find((et => et.path === tt.path))) && void 0 !== et ? et : {
+           }(EE ? null !== (Eu = EE.find((Eu => Eu.path === uu.path))) && void 0 !== Eu ? Eu : {
```

#### 749. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13332` → after: `L13332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13332) · [Before (L13332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13332)

```diff
-           } : tt), Dt = null !== (Vt = xt.get(tt.path)) && void 0 !== Vt ? Vt : [], dt = "offered" !== ct && "applied" !== ct || "" === tt.before ? [] : function(tt, et) {
+           } : uu), Zu = null !== (ju = Hu.get(uu.path)) && void 0 !== ju ? ju : [], lu = "offered" !== ou && "applied" !== ou || "" === uu.before ? [] : function(uu, Eu) {
```

#### 750. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13345` → after: `L13345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13345) · [Before (L13345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13345)

```diff
-                 children: 1 === Ot ? "1 line added" : `${Ot} lines added`
+                 children: 1 === su ? "1 line added" : `${su} lines added`
```

#### 751. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13353-L13355` → after: `L13353-L13355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13353-L13355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13353-L13355) · [Before (L13353-L13355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13353-L13355)

```diff
-                 const Vt = `${tt.path}:${et.index}`,
-                   Ot = [et.added.length > 0 ? `+${et.added.length}` : "", et.removed.length > 0 ? `\u2212${et.removed.length}` : ""].filter(Boolean).join(" "),
-                   qt = [et.added.length > 0 ? `${et.added.length} ${1===et.added.length?"line":"lines"} added` : "", et.removed.length > 0 ? `${et.removed.length} taken out` : ""].filter(Boolean).join(", ");
+                 const ju = `${uu.path}:${Eu.index}`,
+                   su = [Eu.added.length > 0 ? `+${Eu.added.length}` : "", Eu.removed.length > 0 ? `\u2212${Eu.removed.length}` : ""].filter(Boolean).join(" "),
+                   Uu = [Eu.added.length > 0 ? `${Eu.added.length} ${1===Eu.added.length?"line":"lines"} added` : "", Eu.removed.length > 0 ? `${Eu.removed.length} taken out` : ""].filter(Boolean).join(", ");
```

#### 752. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13381` → after: `L13381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13381) · [Before (L13381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13381)

```diff
-                       children: `${Ot} ${et.added.length+et.removed.length===1?"line":"lines"}`
+                       children: `${su} ${Eu.added.length+Eu.removed.length===1?"line":"lines"}`
```

#### 753. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13397` → after: `L13397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13397) · [Before (L13397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13397)

```diff
-               children: st ? `Hide the ${Dt.length} parts` : `Show the ${Dt.length} parts that went in`
+               children: yu ? `Hide the ${Zu.length} parts` : `Show the ${Zu.length} parts that went in`
```

#### 754. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13410` → after: `L13410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13410) · [Before (L13410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13410)

```diff
-               }, `${tt.path}:${et.index}`)))
+               }, `${uu.path}:${Eu.index}`)))
```

#### 755. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13420` → after: `L13420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13420) · [Before (L13420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13420)

```diff
-                 const Vt = null !== (et = lX(tt)) && void 0 !== et ? et : KX(tt);
+                 const ju = null !== (Eu = cC(uu)) && void 0 !== Eu ? Eu : JC(uu);
```

#### 756. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13422` → after: `L13422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13422) · [Before (L13422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13422)

```diff
-               })).join(", "), dt.length > 6 ? ` and ${dt.length-6} more` : "", ".", " ", (0, mt.jsx)("code", {
+               })).join(", "), lu.length > 6 ? ` and ${lu.length-6} more` : "", ".", " ", (0, Xu.jsx)("code", {
```

#### 757. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13447-L13448` → after: `L13447-L13448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13447-L13448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13447-L13448) · [Before (L13447-L13448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13447-L13448)

```diff
-           children: zt ? 1 === rt ? `${Ut?`Line ${Ut.line}`:"This line"} ${kt?"will":"would"} never work:` : `${rt} lines ${kt?"will":"would"} never work:` : 1 === rt ? `${Ut?`Line ${Ut.line}`:"This line"} ${kt?"will":"would"} break:` : `${rt} lines ${kt?"will":"would"} break:`
-         }), (Pt ? Lt : Lt.slice(0, 1)).map(((tt, et, Vt) => {
+           children: Wu ? 1 === Iu ? `${Fu?`Line ${Fu.line}`:"This line"} ${Qu?"will":"would"} never work:` : `${Iu} lines ${Qu?"will":"would"} never work:` : 1 === Iu ? `${Fu?`Line ${Fu.line}`:"This line"} ${Qu?"will":"would"} break:` : `${Iu} lines ${Qu?"will":"would"} break:`
+         }), (vu ? Vu : Vu.slice(0, 1)).map(((uu, Eu, ju) => {
```

#### 758. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13455` → after: `L13455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13455) · [Before (L13455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13455)

```diff
-               children: [rt > 1 && `Line ${Dt.line}: `, (0, mt.jsx)("code", {
+               children: [Iu > 1 && `Line ${Zu.line}: `, (0, Xu.jsx)("code", {
```

#### 759. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13459` → after: `L13459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13459) · [Before (L13459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13459)

```diff
-               children: !Dt || 1 !== rt && FQ(tt) ? tt : kQ(tt)
+               children: !Zu || 1 !== Iu && Qb(uu) ? uu : ib(uu)
```

#### 760. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13470` → after: `L13470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13470) · [Before (L13470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13470)

```diff
-         ...At ? {} : Aj.h,
+         ...Bu ? {} : Fq.g,
```

#### 761. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13482` → after: `L13482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13482) · [Before (L13482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13482)

```diff
-         children: Wt ? Wt.codeBlock ? "Apply in that code block" : "Apply in World Code" : gt && ee < Tt ? `Apply ${ee} of ${Tt} changes` : Ft ? "Apply anyway" : "Apply to my code"
+         children: au ? au.codeBlock ? "Apply in that code block" : "Apply in World Code" : nu && uE < Au ? `Apply ${uE} of ${Au} changes` : ru ? "Apply anyway" : "Apply to my code"
```

#### 762. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L13496` → after: `L13496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR13496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e8a56f7d8198f7026f9540f3cc423fa3f51ca352...build/bloxd.io/dz8ef.98c5e741#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L13496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/dz8ef.98c5e741/bundles/bloxd.io/chunks/js/92.js#L13496) · [Before (L13496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e8a56f7d8198f7026f9540f3cc423fa3f51ca352/bundles/bloxd.io/chunks/js/92.js#L13496)

```diff
-           ...Aj.h,
+           ...Fq.g,
```
