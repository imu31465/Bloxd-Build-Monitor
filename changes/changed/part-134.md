# Changed — Bundle Modifications Report (Part 134 / 140)

- **Updated at**: `2026-11-24T12:43 JST`
- **Part**: `134 / 140` (**414** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 133](part-133.md) · [Part 135 →](part-135.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmPlay.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmPlay.js` (999 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f)

#### 816. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7141` → after: `L7401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7401) · [Before (L7141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7141)

```diff
-       console.warn(`${OX} the event buffer refused records in ${HS} frames (categories ${SS})`), bq || (null !== kN ? Oq(kN, SS, HS) : null !== xN && function(SS, HS, gS) {
+       console.warn(`${vi} the event buffer refused records in ${Fk} frames (categories ${kk})`), la || (null !== wl ? Oa(wl, kk, Fk) : null !== ql && function(kk, Fk, Ik) {
```

#### 817. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7144-L7145` → after: `L7404-L7405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7404-L7405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7404-L7405) · [Before (L7144-L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7144-L7145)

```diff
-           return null === SS ? "drop" : SS.activated ? "keep" : 0 !== (HS & sH.v.NetSession) ? "fail" : "drop"
-         }((null === (tS = PN) || void 0 === tS ? void 0 : tS.join) === SS ? PN : null, HS);
+           return null === kk ? "drop" : kk.activated ? "keep" : 0 !== (Fk & BF.x.NetSession) ? "fail" : "drop"
+         }((null === (Xk = sl) || void 0 === Xk ? void 0 : Xk.join) === kk ? sl : null, Fk);
```

#### 818. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7149` → after: `L7409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7409) · [Before (L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7149)

```diff
-         } : "fail" === bS && (0, DH.f)(SS, new Error("the join's net session was lost to an event overflow"))
+         } : "fail" === Tk && (0, sF.h)(kk, new Error("the join's net session was lost to an event overflow"))
```

#### 819. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7162` → after: `L7422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7422) · [Before (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7162)

```diff
-         if (0 === (SS & sH.v.NetSession)) return "none";
+         if (0 === (kk & BF.x.NetSession)) return "none";
```

#### 820. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7168` → after: `L7428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7428) · [Before (L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7168)

```diff
-         const HS = "rejoin" === bS && performance.now() - QN >= YS.d;
+         const Fk = "rejoin" === Tk && performance.now() - Vl >= uk.e;
```

#### 821. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7194` → after: `L7454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7454) · [Before (L7194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7194)

```diff
-       }, FS.b.get("gameState"))
+       }, Ak.d.get("gameState"))
```

#### 822. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7208` → after: `L7468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7468) · [Before (L7208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7208)

```diff
-         tS = null !== (HS = SS.joinOptions.lobbyName) && void 0 !== HS ? HS : null;
+         Xk = null !== (Fk = kk.joinOptions.lobbyName) && void 0 !== Fk ? Fk : null;
```

#### 823. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7215` → after: `L7475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7475) · [Before (L7215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7215)

```diff
-       return gS.e(272).then((() => gS(51007))).then((SS => {
+       return Ik.e(272).then((() => Ik(50967))).then((kk => {
```

#### 824. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7221` → after: `L7481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7481) · [Before (L7221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7221)

```diff
-         console.warn(`${OX} the cached traffic code could not be dropped`, SS)
+         console.warn(`${vi} the cached traffic code could not be dropped`, kk)
```

#### 825. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7239-L7240` → after: `L7499-L7500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7499-L7500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7499-L7500) · [Before (L7239-L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7239-L7240)

```diff
-       const IS = (0, YS.k)(HS, (0, Et.g)(SS));
-       if (console.info(`${OX} the game's connection closed with code ${HS} (${null!==(XS=IS.name)&&void 0!==XS?XS:"unrecognised"})`), HS === tS.c.gameOrPluginKick.code || xS || (0, wg.reportDisconnect)(IS, Nx, {
+       const Lk = (0, uk.l)(Fk, (0, nX.g)(kk));
+       if (console.info(`${vi} the game's connection closed with code ${Fk} (${null!==(ik=Lk.name)&&void 0!==ik?ik:"unrecognised"})`), Fk === Xk.d.gameOrPluginKick.code || yk || (0, VI.reportDisconnect)(Lk, Ly, {
```

#### 826. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7246` → after: `L7506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7506) · [Before (L7246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7246)

```diff
-           gS = new Error(`the game's connection closed with code ${HS}`),
+           Ik = new Error(`the game's connection closed with code ${Fk}`),
```

#### 827. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7258-L7259` → after: `L7518-L7519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7518-L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7518-L7519) · [Before (L7258-L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7258-L7259)

```diff
-       const fS = IS.canReconnect ? NS : null,
-         kS = null !== fS && IS.automaticallyReconnect && performance.now() - QN >= YS.d;
+       const tk = Lk.canReconnect ? lk : null,
+         Zk = null !== tk && Lk.automaticallyReconnect && performance.now() - Vl >= uk.e;
```

#### 828. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7278` → after: `L7538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7538) · [Before (L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7278)

```diff
-         const SS = setTimeout(xS, YS.c);
+         const kk = setTimeout(yk, uk.b);
```

#### 829. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7297` → after: `L7557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7557) · [Before (L7297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7297)

```diff
-           console.error(`${OX} an unwanted-leave listener threw`, qS)
+           console.error(`${vi} an unwanted-leave listener threw`, ak)
```

#### 830. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7299` → after: `L7559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7559) · [Before (L7299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7299)

```diff
-           HS && (null !== xS ? xS() : SS.requiresRefresh && (0, MS.k)())
+           Fk && (null !== yk ? yk() : kk.requiresRefresh && (0, Yk.i)())
```

#### 831. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7333` → after: `L7593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7593) · [Before (L7333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7333)

```diff
-           aux: pH.pc.AdEnd,
+           aux: fF.Zb.AdEnd,
```

#### 832. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7362` → after: `L7622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7622) · [Before (L7362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7362)

```diff
-       if (SS.readyState === WebSocket.CLOSING || SS.readyState === WebSocket.CLOSED) return console.warn(`${OX} a closing or closed socket can't be attached`), null;
+       if (kk.readyState === WebSocket.CLOSING || kk.readyState === WebSocket.CLOSED) return console.warn(`${vi} a closing or closed socket can't be attached`), null;
```

#### 833. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7364-L7366` → after: `L7624-L7626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7624-L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7624-L7626) · [Before (L7364-L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7364-L7366)

```diff
-       if (!bS || bS.isStopped) return console.warn(`${OX} no core is running to attach a socket to`), SS.close(), null;
-       if (null === (0, hS.h)()) return console.warn(`${OX} the game has not started to attach a socket to`), SS.close(), null;
-       if (Ux > pH.y) return console.warn(`${OX} this core has attached all the sockets it can; reload to play on`), SS.close(), null;
+       if (!Tk || Tk.isStopped) return console.warn(`${vi} no core is running to attach a socket to`), kk.close(), null;
+       if (null === (0, Vk.k)()) return console.warn(`${vi} the game has not started to attach a socket to`), kk.close(), null;
+       if (By > fF.w) return console.warn(`${vi} this core has attached all the sockets it can; reload to play on`), kk.close(), null;
```

#### 834. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7370-L7371` → after: `L7630-L7631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7630-L7631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7630-L7631) · [Before (L7370-L7371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7370-L7371)

```diff
-       if (!tu(bS, "open", XS, tS ? pH.nc.Resume : 0)) return SS.close(), null;
-       tS || GH.d.reset(), PN = null === xN ? null : {
+       if (!yq(Tk, "open", ik, Xk ? fF.Xb.Resume : 0)) return kk.close(), null;
+       Xk || JF.e.reset(), sl = null === ql ? null : {
```

#### 835. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7376` → after: `L7636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7636) · [Before (L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7376)

```diff
-       const xS = new jg.d((() => {
+       const yk = new HI.b((() => {
```

#### 836. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7398` → after: `L7658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7658) · [Before (L7398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7398)

```diff
-             xS.heard(), NS.token = null !== (HS = (0, Gg.e)(gS)) && void 0 !== HS ? HS : NS.token,
+             yk.heard(), lk.token = null !== (Fk = (0, JI.d)(Ik)) && void 0 !== Fk ? Fk : lk.token,
```

#### 837. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7401` → after: `L7661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7661) · [Before (L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7401)

```diff
-                   SS.rings.net.writeFrame(HS, gS) || SS.crash(tg.p, `a socket frame of ${gS.byteLength} bytes did not fit the net-in ring`)
+                   kk.rings.net.writeFrame(Fk, Ik) || kk.crash(TI.n, `a socket frame of ${Ik.byteLength} bytes did not fit the net-in ring`)
```

#### 838. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7410` → after: `L7670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7670) · [Before (L7410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7410)

```diff
-           tS || (0, KS.n)("wasm_socket_open", performance.now());
+           Xk || (0, ek.r)("wasm_socket_open", performance.now());
```

#### 839. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7420` → after: `L7680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7680) · [Before (L7420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7420)

```diff
-       return SS.addEventListener("message", qS), SS.addEventListener("open", uS), SS.addEventListener("close", IS), Kx = NS, null === (HS = (0, hS.h)()) || void 0 === HS || HS.socketAttached(XS), (0, kS.r)({
+       return kk.addEventListener("message", ak), kk.addEventListener("open", qk), kk.addEventListener("close", Lk), Jy = lk, null === (Fk = (0, Vk.k)()) || void 0 === Fk || Fk.socketAttached(ik), (0, Zk.s)({
```

#### 840. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7444-L7445` → after: `L7704-L7705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7704-L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7704-L7705) · [Before (L7444-L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7444-L7445)

```diff
-         token: `${tS.roomId}:${HS.token}`
-       }), tu(SS, "close", HS.conn), null === (gS = (0, hS.h)()) || void 0 === gS || gS.socketDetached(HS.conn), !0
+         token: `${Xk.roomId}:${Fk.token}`
+       }), yq(kk, "close", Fk.conn), null === (Ik = (0, Vk.k)()) || void 0 === Ik || Ik.socketDetached(Fk.conn), !0
```

#### 841. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7454` → after: `L7714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7714) · [Before (L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7454)

```diff
-         Ku: xS,
+         eq: yk,
```

#### 842. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7459-L7460` → after: `L7719-L7720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7719-L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7719-L7720) · [Before (L7459-L7460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7459-L7460)

```diff
-       if (!tu(SS, "close", HS.conn, pH.A.Held)) return !0;
-       console.warn(`${OX} the game's connection ${bS?"went silent":`dropped with code ${gS}`}, holding it`);
+       if (!yq(kk, "close", Fk.conn, fF.E.Held)) return !0;
+       console.warn(`${vi} the game's connection ${Tk?"went silent":`dropped with code ${Ik}`}, holding it`);
```

#### 843. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7466` → after: `L7726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7726) · [Before (L7466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7466)

```diff
-       return (0, wg.reportDisconnect)((0, YS.k)(gS), Nx, IS, bS ? "silent" : void 0), xS.heldConn = HS.conn, xS.dropCode = gS, xS.pendingHold = {
+       return (0, VI.reportDisconnect)((0, uk.l)(Ik), Ly, Lk, Tk ? "silent" : void 0), yk.heldConn = Fk.conn, yk.dropCode = Ik, yk.pendingHold = {
```

#### 844. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7468` → after: `L7728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7728) · [Before (L7468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7468)

```diff
-         token: `${xS.roomId}:${NS}`
+         token: `${yk.roomId}:${lk}`
```

#### 845. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7476-L7477` → after: `L7736-L7737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7736-L7737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7736-L7737) · [Before (L7476-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7476-L7477)

```diff
-       return null === gS || null === bS || bq || SS.left || bS.conn !== SS.conn || null === XS || "" === XS ? null : (0, tS.f)(HS) && gS.resume.canHoldSeat() ? {
-         Ku: gS,
+       return null === Ik || null === Tk || la || kk.left || Tk.conn !== kk.conn || null === ik || "" === ik ? null : (0, Xk.i)(Fk) && Ik.resume.canHoldSeat() ? {
+         eq: Ik,
```

#### 846. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7486` → after: `L7746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7746) · [Before (L7486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7486)

```diff
-       null === (gS = (0, hS.h)()) || void 0 === gS || gS.closeGame(SS), (0, Gb.e)().close(SS), HS || (0, kS.r)({
+       null === (Ik = (0, Vk.k)()) || void 0 === Ik || Ik.closeGame(kk), (0, HT.b)().close(kk), Fk || (0, Zk.s)({
```

#### 847. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7494-L7495` → after: `L7754-L7755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7754-L7755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7754-L7755) · [Before (L7494-L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7494-L7495)

```diff
-       const HS = (0, hS.h)();
-       bq || null === HS || HS.uE(SS) ? GN = null : performance.now() - ex.pause >= BX && (ex.pause = performance.now(), console.warn(`${OX} the cmd ring had no room for SetPaused(${SS}): written before the next frame`))
+       const Fk = (0, Vk.k)();
+       la || null === Fk || Fk.sE(kk) ? Pl = null : performance.now() - Fl.pause >= Yi && (Fl.pause = performance.now(), console.warn(`${vi} the cmd ring had no room for SetPaused(${kk}): written before the next frame`))
```

#### 848. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7508` → after: `L7768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7768) · [Before (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7508)

```diff
-       SS.heldConn = 0, SS.pendingHold = null, aN === SS && (aN = null), "left" === HS ? SS.resume.leave() : SS.resume.dispose(), 0 === jN || (null === (gS = Kx) || void 0 === gS ? void 0 : gS.conn) !== jN || "left" === HS && (null === (tS = bN) || void 0 === tS ? void 0 : tS.conn … [truncated]
+       kk.heldConn = 0, kk.pendingHold = null, Hl === kk && (Hl = null), "left" === Fk ? kk.resume.leave() : kk.resume.dispose(), 0 === xl || (null === (Ik = Jy) || void 0 === Ik ? void 0 : Ik.conn) !== xl || "left" === Fk && (null === (Xk = ll) || void 0 === Xk ? void 0 : Xk.conn … [truncated]
```

#### 849. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7535` → after: `L7795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7795) · [Before (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7535)

```diff
-       (null === gS || void 0 === gS ? void 0 : gS.conn) === SS && (gS.left = !0, null === (HS = (0, hS.h)()) || void 0 === HS || HS.socketLeft(), (0, kS.r)({
+       (null === Ik || void 0 === Ik ? void 0 : Ik.conn) === kk && (Ik.left = !0, null === (Fk = (0, Vk.k)()) || void 0 === Fk || Fk.socketLeft(), (0, Zk.s)({
```

#### 850. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7539` → after: `L7799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7799) · [Before (L7539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7539)

```diff
-       }), AS.g) : Bq())
+       }), bk.f) : Aa())
```

#### 851. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7549` → after: `L7809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7809) · [Before (L7549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7549)

```diff
-         bS = "open" === HS ? XS.writeOpen(gS, tS) : XS.writeClose(gS, tS), bS || SS.crash(tg.p, `a socket ${HS} did not fit the net-in ring`)
+         Tk = "open" === Fk ? ik.writeOpen(Ik, Xk) : ik.writeClose(Ik, Xk), Tk || kk.crash(TI.n, `a socket ${Fk} did not fit the net-in ring`)
```

#### 852. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7556-L7557` → after: `L7816-L7817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7816-L7817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7816-L7817) · [Before (L7556-L7557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7556-L7557)

```diff
-         const tS = "browser" === SS && (0, Kb.W)() ? "blockedAfterLoss" : "unsupported";
-         return (0, wg.reportUnsupportedFallback)(SS, tS, HS, gS), void xu(`the wasm client can't run here (${HS}; ${tS})`, tS)
+         const Xk = "browser" === kk && (0, eT.V)() ? "blockedAfterLoss" : "unsupported";
+         return (0, VI.reportUnsupportedFallback)(kk, Xk, Fk, Ik), void qq(`the wasm client can't run here (${Fk}; ${Xk})`, Xk)
```

#### 853. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7562` → after: `L7822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7822) · [Before (L7562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7562)

```diff
-       return rN && "wasm" !== (0, aH.g)(window.location.search)
+       return Ia && "wasm" !== (0, eF.f)(window.location.search)
```

#### 854. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7566` → after: `L7826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7826) · [Before (L7566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7566)

```diff
-       console.warn(`${OX} ${SS}: reloading on the JS client`), null !== HS && (0, aH.x)(HS), (0, aH.u)(null === HS ? "reloadOntoJs" : "decline");
+       console.warn(`${vi} ${kk}: reloading on the JS client`), null !== Fk && (0, eF.w)(Fk), (0, eF.u)(null === Fk ? "reloadOntoJs" : "decline");
```

#### 855. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7568` → after: `L7828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7828) · [Before (L7568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7568)

```diff
-         (0, MS.h)(aH.E)
+         (0, Yk.e)(eF.y)
```

#### 856. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7570` → after: `L7830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7830) · [Before (L7570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7570)

```diff
-       (0, wg.flushCrashReports)(MS.d).then(gS, gS)
+       (0, VI.flushCrashReports)(Yk.c).then(Ik, Ik)
```

#### 857. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7583` → after: `L7843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7843) · [Before (L7583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7583)

```diff
-       return null !== (SS = null === (HS = bx) || void 0 === HS || null === (gS = HS.textures) || void 0 === gS ? void 0 : gS.files()) && void 0 !== SS ? SS : null
+       return null !== (kk = null === (Fk = ly) || void 0 === Fk || null === (Ik = Fk.textures) || void 0 === Ik ? void 0 : Ik.files()) && void 0 !== kk ? kk : null
```

#### 858. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7588` → after: `L7848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7848) · [Before (L7588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7588)

```diff
-         null !== HS && Promise.all([Promise.all([gS.e(201), gS.e(45)]).then((() => gS(51043))), (0, Kb.P)()]).then((SS => {
+         null !== Fk && Promise.all([Promise.all([Ik.e(201), Ik.e(45)]).then((() => Ik(50999))), (0, eT.Q)()]).then((kk => {
```

#### 859. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7592-L7594` → after: `L7852-L7854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7852-L7854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7852-L7854) · [Before (L7592-L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7592-L7594)

```diff
-           const bS = null === tS || (0, gg.m)(tS) ? "webgl" : tS.backend;
-           gS(HS, bb.d, bS, (SS => {
-             bb.d.setPageFiles(SS)
+           const Tk = null === Xk || (0, XI.h)(Xk) ? "webgl" : Xk.backend;
+           Ik(Fk, TT.f, Tk, (kk => {
+             TT.f.setPageFiles(kk)
```

#### 860. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7597` → after: `L7857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7857) · [Before (L7597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7597)

```diff
-           console.warn(`${OX} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, HS), SS()
+           console.warn(`${vi} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, Fk), kk()
```

#### 861. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7603` → after: `L7863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7863) · [Before (L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7603)

```diff
-       console.warn(`${OX} ${SS}`, HS)
+       console.warn(`${vi} ${kk}`, Fk)
```

#### 862. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7608` → after: `L7868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7868) · [Before (L7608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7608)

```diff
-         load: SS => Promise.all([gS.e(201), gS.e(54)]).then((() => gS(51052))).then((HS => {
+         load: kk => Promise.all([Ik.e(201), Ik.e(54)]).then((() => Ik(51002))).then((Fk => {
```

#### 863. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7614-L7615` → after: `L7874-L7875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7874-L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7874-L7875) · [Before (L7614-L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7614-L7615)

```diff
-         store: Lg.e,
-         tK: SS => {
+         store: pI.g,
+         Mj: kk => {
```

#### 864. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7654` → after: `L7914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7914) · [Before (L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7654)

```diff
-       }((SS => (0, tH.m)(SS) ? ku().request() : ku().forJoin()), Eb.d, fu),
+       }((kk => (0, TF.j)(kk) ? wq().request() : wq().forJoin()), nT.c, eq),
```

#### 865. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7690` → after: `L7950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7950) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7690)

```diff
-             return null !== (SS = null === (HS = yx) || void 0 === HS ? void 0 : HS.reachInJoinedGame()) && void 0 !== SS ? SS : null
+             return null !== (kk = null === (Fk = Cy) || void 0 === Fk ? void 0 : Fk.reachInJoinedGame()) && void 0 !== kk ? kk : null
```

#### 866. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7692` → after: `L7952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7952) · [Before (L7692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7692)

```diff
-           Wj: () => Ex,
+           Nw: () => uy,
```

#### 867. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7697` → after: `L7957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7957) · [Before (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7697)

```diff
-             return null !== (SS = null === (HS = nx) || void 0 === HS ? void 0 : HS.takeFailedMeshJobs()) && void 0 !== SS ? SS : 0
+             return null !== (kk = null === (Fk = Qy) || void 0 === Fk ? void 0 : Fk.takeFailedMeshJobs()) && void 0 !== kk ? kk : 0
```

#### 868. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7708` → after: `L7968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7968) · [Before (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7708)

```diff
-         console.error(`${OX} the frame telemetry didn't start`, XS)
+         console.error(`${vi} the frame telemetry didn't start`, ik)
```

#### 869. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7715` → after: `L7975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7975) · [Before (L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7715)

```diff
-         const XS = dN && null !== (gS = null === (tS = gx) || void 0 === tS || null === (bS = tS.lastHeader) || void 0 === bS ? void 0 : bS.renderPending) && void 0 !== gS ? gS : 0;
+         const ik = nl && null !== (Ik = null === (Xk = iy) || void 0 === Xk || null === (Tk = Xk.lastHeader) || void 0 === Tk ? void 0 : Tk.renderPending) && void 0 !== Ik ? Ik : 0;
```

#### 870. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7718` → after: `L7978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7978) · [Before (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7718)

```diff
-         (0, gt.r)(), console.error(`${OX} the quality steps stopped`, XS)
+         (0, XX.s)(), console.error(`${vi} the quality steps stopped`, ik)
```

#### 871. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7732` → after: `L7992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7992) · [Before (L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7732)

```diff
-       console.error(`${OX} the frame telemetry threw: it stops`, SS)
+       console.error(`${vi} the frame telemetry threw: it stops`, kk)
```

#### 872. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7737-L7738` → after: `L7997-L7998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7997-L7998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L7997-L7998) · [Before (L7737-L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7737-L7738)

```diff
-       if ((0, Gb.e)().fire(SS), "message" === SS.type) {
-         if (ox++, SS.Ju === pH.Xc.ERROR && null !== xN) {
+       if ((0, HT.b)().fire(kk), "message" === kk.type) {
+         if (Dy++, kk.oq === fF.Mc.ERROR && null !== ql) {
```

#### 873. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7743` → after: `L8003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8003) · [Before (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7743)

```diff
-           } = (0, YS.m)((new TextDecoder).decode(SS.payload));
+           } = (0, uk.p)((new TextDecoder).decode(kk.payload));
```

#### 874. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7745` → after: `L8005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8005) · [Before (L7745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7745)

```diff
-         } else if (SS.Ju === sH.kc.ResumeComplete) {
+         } else if (kk.oq === BF.sc.ResumeComplete) {
```

#### 875. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7751` → after: `L8011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8011) · [Before (L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7751)

```diff
-       SS.phase === pH.E.Left ? lx = SS.conn : SS.phase === pH.E.Activated && (null === (HS = PN) || void 0 === HS ? void 0 : HS.conn) === SS.conn ? PN.activated = !0 : SS.phase === pH.E.Resumed ? function(SS) {
+       kk.phase === fF.I.Left ? My = kk.conn : kk.phase === fF.I.Activated && (null === (Fk = sl) || void 0 === Fk ? void 0 : Fk.conn) === kk.conn ? sl.activated = !0 : kk.phase === fF.I.Resumed ? function(kk) {
```

#### 876. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7756` → after: `L8016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8016) · [Before (L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7756)

```diff
-         console.info(`${OX} the game resumed on conn ${SS}, waiting for its InitialInfo`);
+         console.info(`${vi} the game resumed on conn ${kk}, waiting for its InitialInfo`);
```

#### 877. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7761` → after: `L8021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8021) · [Before (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7761)

```diff
-         }), GH.d.apply({
+         }), JF.e.apply({
```

#### 878. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7763` → after: `L8023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8023) · [Before (L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7763)

```diff
-           _shopVersion: bH.b
+           _shopVersion: iF.e
```

#### 879. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7765` → after: `L8025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8025) · [Before (L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7765)

```diff
-       }(SS.conn) : SS.phase === pH.E.Held ? function(SS) {
+       }(kk.conn) : kk.phase === fF.I.Held ? function(kk) {
```

#### 880. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7768-L7769` → after: `L8028-L8029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8028-L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8028-L8029) · [Before (L7768-L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7768-L7769)

```diff
-           tS = null !== (HS = null === gS || void 0 === gS ? void 0 : gS.pendingHold) && void 0 !== HS ? HS : null;
-         if (null !== gS && null !== tS && tS.conn === SS) return gS.pendingHold = null, gS.heldConn = SS, jN = 0, console.warn(`${OX} the core holds the game, reconnecting`), void gS.resume.onDropped(tS.token);
+           Xk = null !== (Fk = null === Ik || void 0 === Ik ? void 0 : Ik.pendingHold) && void 0 !== Fk ? Fk : null;
+         if (null !== Ik && null !== Xk && Xk.conn === kk) return Ik.pendingHold = null, Ik.heldConn = kk, xl = 0, console.warn(`${vi} the core holds the game, reconnecting`), void Ik.resume.onDropped(Xk.token);
```

#### 881. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7773` → after: `L8033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8033) · [Before (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7773)

```diff
-           null === HS || HS.isStopped || (console.info(`${OX} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), tu(HS, "close", SS))
+           null === Fk || Fk.isStopped || (console.info(`${vi} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), yq(Fk, "close", kk))
```

#### 882. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7775` → after: `L8035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8035) · [Before (L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7775)

```diff
-       }(SS.conn) : SS.phase === pH.E.Closed && (null === (gS = aN) || void 0 === gS || null === (tS = gS.pendingHold) || void 0 === tS ? void 0 : tS.conn) === SS.conn && (aN.heldConn === SS.conn ? function(SS) {
+       }(kk.conn) : kk.phase === fF.I.Closed && (null === (Ik = Hl) || void 0 === Ik || null === (Xk = Ik.pendingHold) || void 0 === Xk ? void 0 : Xk.conn) === kk.conn && (Hl.heldConn === kk.conn ? function(kk) {
```

#### 883. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7778` → after: `L8038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8038) · [Before (L7778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7778)

```diff
-         eq(SS, "refused"), console.info(`${OX} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
+         Fq(kk, "refused"), console.info(`${vi} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
```

#### 884. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7782-L7784` → after: `L8042-L8044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8042-L8044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8042-L8044) · [Before (L7782-L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7782-L7784)

```diff
-       const NS = Object.keys(pH.E).find((HS => pH.E[HS] === SS.phase)),
-         qS = 0 === SS.code ? "" : ` (code ${SS.code})`;
-       console.info(`${OX} conn ${SS.conn}: ${null!==NS&&void 0!==NS?NS:SS.phase}${qS}, ${ox} raw messages so far`), (null === (bS = bN) || void 0 === bS ? void 0 : bS.conn) !== SS.conn || SS.phase !== pH.E.Left && SS.phase !== pH.E.Closed || Dq(null), uN !== SS.conn || SS.phase ! … [truncated]
+       const lk = Object.keys(fF.I).find((Fk => fF.I[Fk] === kk.phase)),
+         ak = 0 === kk.code ? "" : ` (code ${kk.code})`;
+       console.info(`${vi} conn ${kk.conn}: ${null!==lk&&void 0!==lk?lk:kk.phase}${ak}, ${Dy} raw messages so far`), (null === (Tk = ll) || void 0 === Tk ? void 0 : Tk.conn) !== kk.conn || kk.phase !== fF.I.Left && kk.phase !== fF.I.Closed || za(null), Zl !== kk.conn || kk.phase ! … [truncated]
```

#### 885. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7788` → after: `L8048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8048) · [Before (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7788)

```diff
-         (0, BH.j)(uS, `${OX} a connection listener threw`)
+         (0, dF.i)(qk, `${vi} a connection listener threw`)
```

#### 886. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7793` → after: `L8053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8053) · [Before (L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7793)

```diff
-       (0, Kb.t)(), queueMicrotask((() => {
+       (0, eT.r)(), queueMicrotask((() => {
```

#### 887. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7797-L7798` → after: `L8057-L8058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8057-L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8057-L8058) · [Before (L7797-L7798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7797-L7798)

```diff
-           console.warn(`${OX} stopping before the reload threw`, SS)
-         }(0, wg.flushCrashReports)(MS.d).then(MS.k, MS.k)
+           console.warn(`${vi} stopping before the reload threw`, kk)
+         }(0, VI.flushCrashReports)(Yk.c).then(Yk.i, Yk.i)
```

#### 888. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7819` → after: `L8079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8079) · [Before (L7819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7819)

```diff
-         XS && "all" !== tS && !document.hidden && pu("backlog", `a shown tab's net-in is ${SS.rings.net.cursor} bytes behind: one frame reads it all`);
+         ik && "all" !== Xk && !document.hidden && dq("backlog", `a shown tab's net-in is ${kk.rings.net.cursor} bytes behind: one frame reads it all`);
```

#### 889. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7825` → after: `L8085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8085) · [Before (L7825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7825)

```diff
-           lq(), px = performance.now(), lx = null, mx = !1, (0, wS.M)(), null === (XS = Zx) || void 0 === XS || XS.beforeFrame(), Ct(px, SS), (0, wS.D)(px, vu), Rx = !0;
+           Ma(), dy = performance.now(), My = null, kl = !1, (0, sk.L)(), null === (ik = vy) || void 0 === ik || ik.beforeFrame(), JX(dy, kk), (0, sk.D)(dy, pq), hy = !0;
```

#### 890. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7834` → after: `L8094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8094) · [Before (L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7834)

```diff
-           VN.observe(null !== (xS = null === (NS = SS.lastHeader) || void 0 === NS ? void 0 : NS.chunksCancelled) && void 0 !== xS ? xS : 0);
+           Nl.observe(null !== (yk = null === (lk = kk.lastHeader) || void 0 === lk ? void 0 : lk.chunksCancelled) && void 0 !== yk ? yk : 0);
```

#### 891. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7836` → after: `L8096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8096) · [Before (L7836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7836)

```diff
-             kS = (0, cH.c)(fS);
+             Zk = (0, OF.d)(tk);
```

#### 892. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7851` → after: `L8111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8111) · [Before (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7851)

```diff
-           null !== lx && (null === aS || void 0 === aS ? void 0 : aS.conn) === lx && Wu(aS, AS.j);
+           null !== My && (null === jk || void 0 === jk ? void 0 : jk.conn) === My && Wq(jk, bk.i);
```

#### 893. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7854-L7855` → after: `L8114-L8115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8114-L8115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8114-L8115) · [Before (L7854-L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7854-L7855)

```diff
-               const HS = 0 !== (SS.headerWord(sH.H.LoadSteps) & sH.T.JoinPreload);
-               HS !== qN && (qN = HS, (0, wg.setCrashAdPreload)(HS), (0, cg.T)())
+               const Fk = 0 !== (kk.headerWord(BF.F.LoadSteps) & BF.S.JoinPreload);
+               Fk !== tl && (tl = Fk, (0, VI.setCrashAdPreload)(Fk), (0, OI.H)())
```

#### 894. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7859-L7861` → after: `L8119-L8121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8119-L8121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8119-L8121) · [Before (L7859-L7861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7859-L7861)

```diff
-               const XS = SS.headerWord(sH.H.LoadSteps);
-               null === oN || lN === bN && !oN.frame(px, 0 !== (XS & sH.V.TerrainDrawn)) || (oN = null);
-               if (0 === (XS & sH.T.PlayerBound)) return;
+               const ik = kk.headerWord(BF.F.LoadSteps);
+               null === Dl || Ml === ll && !Dl.frame(dy, 0 !== (ik & BF.W.TerrainDrawn)) || (Dl = null);
+               if (0 === (ik & BF.S.PlayerBound)) return;
```

#### 895. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7866-L7868` → after: `L8126-L8128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8126-L8128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8126-L8128) · [Before (L7866-L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7866-L7868)

```diff
-               const qS = null !== (HS = null === xS || void 0 === xS ? void 0 : xS.firstView) && void 0 !== HS ? HS : pH.gb.NotYet;
-               if (dN && qS === pH.gb.NotYet) return;
-               if (BN && (!0 !== (null === (tS = (0, hS.h)()) || void 0 === tS ? void 0 : tS.isSessionLive) || !NS)) return;
+               const ak = null !== (Fk = null === yk || void 0 === yk ? void 0 : yk.firstView) && void 0 !== Fk ? Fk : fF.Y.NotYet;
+               if (nl && ak === fF.Y.NotYet) return;
+               if (Al && (!0 !== (null === (Xk = (0, Vk.k)()) || void 0 === Xk ? void 0 : Xk.isSessionLive) || !lk)) return;
```

#### 896. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7872` → after: `L8132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8132) · [Before (L7872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7872)

```diff
-                   bN === uS && (0, KS.l)()
+                   ll === qk && (0, ek.m)()
```

#### 897. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7883` → after: `L8143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8143) · [Before (L7883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7883)

```diff
-               BN = !0, performance.mark(AX), (0, Ub.q)("render") && Promise.all([gS.e(77), gS.e(48)]).then((() => gS(4803))).then((SS => {
+               Al = !0, performance.mark(Ri), (0, cT.o)("render") && Promise.all([Ik.e(77), Ik.e(48)]).then((() => Ik(4676))).then((kk => {
```

#### 898. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7893-L7895` → after: `L8153-L8155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8153-L8155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8153-L8155) · [Before (L7893-L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7893-L7895)

```diff
-               null !== fS && (0, KS.n)("wasm_view_links", IS, (0, xH.bb)(fS));
-               if (dN && qS !== pH.gb.Drawn) {
-                 const HS = qS === pH.gb.HeldBackstop ? "held_draws" : "long",
+               null !== tk && (0, ek.r)("wasm_view_links", Lk, (0, lF.ib)(tk));
+               if (nl && ak !== fF.Y.Drawn) {
+                 const Fk = ak === fF.Y.HeldBackstop ? "held_draws" : "long",
```

#### 899. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7899` → after: `L8159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8159) · [Before (L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7899)

```diff
-                 if (console.warn(`${OX} playable at ${IS} ms on the first view's ${HS} backstop, ${gS}: it wasn't drawn whole in time`), (0, KS.n)("wasm_view_backstop", IS, `${HS}:${gS}`), "long" === HS) {
+                 if (console.warn(`${vi} playable at ${Lk} ms on the first view's ${Fk} backstop, ${Ik}: it wasn't drawn whole in time`), (0, ek.r)("wasm_view_backstop", Lk, `${Fk}:${Ik}`), "long" === Fk) {
```

#### 900. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7901` → after: `L8161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8161) · [Before (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7901)

```diff
-                   const HS = null !== (kS = null === (aS = kN) || void 0 === aS ? void 0 : aS.game) && void 0 !== kS ? kS : "";
+                   const Fk = null !== (Zk = null === (jk = wl) || void 0 === jk ? void 0 : jk.game) && void 0 !== Zk ? Zk : "";
```

#### 901. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7907` → after: `L8167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8167) · [Before (L7907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7907)

```diff
-                     (0, wg.reportFirstViewNoTerrain)(HS, gS, tS, Nx), (0, kH.u)("noTerrain")
+                     (0, VI.reportFirstViewNoTerrain)(Fk, Ik, Xk, Ly), (0, jF.v)("noTerrain")
```

#### 902. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7910-L7913` → after: `L8170-L8173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8170-L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8170-L8173) · [Before (L7910-L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7910-L7913)

```diff
-               } else console.info(`${OX} playable at ${IS} ms${dN?"":" (no renderer)"}`);
-               setTimeout(YN, 0), (0, nH.c)().catch((SS => {
-                 console.error(`${OX} item sprites didn't load, so item particles show the missing texture`, SS)
-               })), lt.d.warm()
+               } else console.info(`${vi} playable at ${Lk} ms${nl?"":" (no renderer)"}`);
+               setTimeout(Rl, 0), (0, PF.e)().catch((kk => {
+                 console.error(`${vi} item sprites didn't load, so item particles show the missing texture`, kk)
+               })), hX.b.warm()
```

#### 903. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7915` → after: `L8175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8175) · [Before (L7915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7915)

```diff
-           (0, tg.N)(SS, {
+           (0, TI.F)(kk, {
```

#### 904. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7922` → after: `L8182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8182) · [Before (L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7922)

```diff
-               (0, ft.d)(HS)
+               (0, ZX.c)(Fk)
```

#### 905. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7924-L7925` → after: `L8184-L8185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8184-L8185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8184-L8185) · [Before (L7924-L7925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7924-L7925)

```diff
-               if ((0, BH.d)(jS)) {
-                 SS.crashOn(tg.j, jS);
+               if ((0, dF.f)(wk)) {
+                 kk.crashOn(TI.k, wk);
```

#### 906. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7928` → after: `L8188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8188) · [Before (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7928)

```diff
-               console.error(`${Kt} an input action listener threw`, jS)
+               console.error(`${eX} an input action listener threw`, wk)
```

#### 907. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7931` → after: `L8191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8191) · [Before (L7931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7931)

```diff
-           }(SS), bS && (0, dH.c)();
+           }(kk), Tk && (0, EF.d)();
```

#### 908. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7940` → after: `L8200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8200) · [Before (L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7940)

```diff
-       console.error(`${OX} a frame-start listener threw`, SS)
+       console.error(`${vi} a frame-start listener threw`, kk)
```

#### 909. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7949` → after: `L8209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8209) · [Before (L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7949)

```diff
-       console.error(`${OX} a before-frame listener threw`, SS)
+       console.error(`${vi} a before-frame listener threw`, kk)
```

#### 910. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7953-L7954` → after: `L8213-L8214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8213-L8214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8213-L8214) · [Before (L7953-L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7953-L7954)

```diff
-       const HS = (0, hS.h)(),
-         gS = (0, hS.q)(),
+       const Fk = (0, Vk.k)(),
+         Ik = (0, Vk.y)(),
```

#### 911. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7957` → after: `L8217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8217) · [Before (L7957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7957)

```diff
-         cause: (0, Yg.k)(SS.headerWord(sH.H.LoadSteps), tS),
+         cause: (0, uI.j)(kk.headerWord(BF.F.LoadSteps), Xk),
```

#### 912. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7973` → after: `L8233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8233) · [Before (L7973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7973)

```diff
-       null === RN || TN || (TN = !0, (0, KS.n)("wasm_startup_loaded", RN));
+       null === hl || rl || (rl = !0, (0, ek.r)("wasm_startup_loaded", hl));
```

#### 913. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7975-L7976` → after: `L8235-L8236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8235-L8236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8235-L8236) · [Before (L7975-L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7975-L7976)

```diff
-       null !== bN ? gS = -1 : !0 === (null === (HS = PN) || void 0 === HS ? void 0 : HS.activated) && (gS = ~sH.V.TerrainDrawn);
-       const tS = SS.headerWord(sH.H.LoadSteps) & gS & ~FN;
+       null !== ll ? Ik = -1 : !0 === (null === (Fk = sl) || void 0 === Fk ? void 0 : Fk.activated) && (Ik = ~BF.W.TerrainDrawn);
+       const Xk = kk.headerWord(BF.F.LoadSteps) & Ik & ~ml;
```

#### 914. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7980` → after: `L8240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8240) · [Before (L7980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L7980)

```diff
-       for (const [XS, xS] of Object.entries(Lu)) 0 !== (tS & sH.V[XS]) && (0, KS.n)(xS, bS)
+       for (const [ik, yk] of Object.entries(bq)) 0 !== (Xk & BF.W[ik]) && (0, ek.r)(yk, Tk)
```

#### 915. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8009` → after: `L8269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8269) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8009)

```diff
-       bq = !0, eN.stop(), (0, sb.b)(), Tb = null, mq(), (0, wS.J)().unlockPointer(), (0, wS.H)(null), null === (SS = Jx) || void 0 === SS || SS(), Jx = null, null === (HS = (0, hS.q)()) || void 0 === HS || HS.followCursorAim(null), (0, dH.B)(), (0, hS.f)(), xx.stop(), null === (g … [truncated]
+       la = !0, Fa.stop(), (0, fT.e)(), gT = null, kq(), (0, sk.I)().unlockPointer(), (0, sk.F)(null), null === (kk = Ey) || void 0 === kk || kk(), Ey = null, null === (Fk = (0, Vk.y)()) || void 0 === Fk || Fk.followCursorAim(null), (0, EF.G)(), (0, Vk.i)(), qy.stop(), null === (I … [truncated]
```

#### 916. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8017-L8018` → after: `L8277-L8278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8277-L8278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8277-L8278) · [Before (L8017-L8018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8017-L8018)

```diff
-         console.warn(`${OX} the sky's images didn't release`, PS)
-       }(0, mt.h)(null), null === (GS = Sx) || void 0 === GS || GS.pagePreviews().endSession(null === (0, NH.t)())
+         console.warn(`${vi} the sky's images didn't release`, Pk)
+       }(0, rX.f)(null), null === (Hk = Xy) || void 0 === Hk || Hk.pagePreviews().endSession(null === (0, aF.n)())
```

#### 917. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8023-L8026` → after: `L8283-L8286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8283-L8286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8283-L8286) · [Before (L8023-L8026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8023-L8026)

```diff
-       const bS = null !== (gS = null === (tS = Px) || void 0 === tS ? void 0 : tS.details()) && void 0 !== gS ? gS : {},
-         XS = SS.site === cX || SS.site === vX || SS.site === wg.RENDER_RELOAD_SITE || SS.site === EX ? SS.error instanceof WebAssembly.RuntimeError || SS.error instanceof eH.c : !(0, gg.p)(SS.error) && (0, tg.J)(SS);
-       XS && SS.error instanceof Error && (0, NH.W)(SS.error);
-       const xS = XS || SS.site === tg.s ? (0, wg.readTrap)(SS.error) : null,
+       const Tk = null !== (Ik = null === (Xk = sy) || void 0 === Xk ? void 0 : Xk.details()) && void 0 !== Ik ? Ik : {},
+         ik = kk.site === Oi || kk.site === ni || kk.site === VI.RENDER_RELOAD_SITE || kk.site === Gi ? kk.error instanceof WebAssembly.RuntimeError || kk.error instanceof MF.c : !(0, XI.j)(kk.error) && (0, TI.B)(kk);
+       ik && kk.error instanceof Error && (0, aF.M)(kk.error);
+       const yk = ik || kk.site === TI.q ? (0, VI.readTrap)(kk.error) : null,
```

#### 918. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8028-L8029` → after: `L8288-L8289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8288-L8289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8288-L8289) · [Before (L8028-L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8028-L8029)

```diff
-         qS = (0, ng.o)(),
-         uS = null === Qx ? (0, Rt.q)(function() {
+         ak = (0, PI.m)(),
+         qk = null === Vy ? (0, AX.l)(function() {
```

#### 919. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8031` → after: `L8291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8291) · [Before (L8031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8031)

```diff
-             return (0, NH.B)().buffer.byteLength
+             return (0, aF.r)().buffer.byteLength
```

#### 920. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8038` → after: `L8298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8298) · [Before (L8038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8038)

```diff
-       if (IS && ((0, aH.x)("oom"), (0, aH.u)("decline"), tq = !0), zu(), (0, Kb.c)()) return console.warn(`${OX} the session stopped at ${SS.site} as the page reloads`, SS.error), void((0, gg.p)(SS.error) || (null === (fS = SS.header) || void 0 === fS ? void 0 : fS.lastError) === … [truncated]
+       if (Lk && ((0, eF.w)("oom"), (0, eF.u)("decline"), ya = !0), fq(), (0, eT.e)()) return console.warn(`${vi} the session stopped at ${kk.site} as the page reloads`, kk.error), void((0, XI.j)(kk.error) || (null === (tk = kk.header) || void 0 === tk ? void 0 : tk.lastError) === … [truncated]
```

#### 921. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8050` → after: `L8310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8310) · [Before (L8050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8050)

```diff
-       return !(gS - ex[SS] < BX) && (ex[SS] = gS, console.warn(`${OX} ${HS}`), !0)
+       return !(Ik - Fl[kk] < Yi) && (Fl[kk] = Ik, console.warn(`${vi} ${Fk}`), !0)
```

#### 922. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8059` → after: `L8319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8319) · [Before (L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8059)

```diff
-       XS !== rx && pu("dropped", `${XS} records dropped so far (input ${HS.dropped}, options ${bS}, net ${gS.dropped}, worker ${tS.dropped}, net-out ${SN})`) && (rx = XS)
+       ik !== Il && dq("dropped", `${ik} records dropped so far (input ${Fk.dropped}, options ${Tk}, net ${Ik.dropped}, worker ${Xk.dropped}, net-out ${Xl})`) && (Il = ik)
```

#### 923. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8066` → after: `L8326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8326) · [Before (L8066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8066)

```diff
-       const tS = (0, Eg.q)(gS);
+       const Xk = (0, GI.t)(Ik);
```

#### 924. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8069` → after: `L8329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8329) · [Before (L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8069)

```diff
-         horizontal: Math.min(tS.horizontal, null !== (SS = null === (HS = Px) || void 0 === HS ? void 0 : HS.shedDistanceInUse()) && void 0 !== SS ? SS : 1 / 0)
+         horizontal: Math.min(Xk.horizontal, null !== (kk = null === (Fk = sy) || void 0 === Fk ? void 0 : Fk.shedDistanceInUse()) && void 0 !== kk ? kk : 1 / 0)
```

#### 925. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8076` → after: `L8336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8336) · [Before (L8076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8076)

```diff
-         samples: dN ? iN : null,
+         samples: nl ? cl : null,
```

#### 926. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8078` → after: `L8338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8338) · [Before (L8078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8078)

```diff
-         renderDistance: null !== (HS = null === (gS = Bu()) || void 0 === gS ? void 0 : gS.horizontal) && void 0 !== HS ? HS : null
+         renderDistance: null !== (Fk = null === (Ik = Aq()) || void 0 === Ik ? void 0 : Ik.horizontal) && void 0 !== Fk ? Fk : null
```

#### 927. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8083` → after: `L8343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8343) · [Before (L8083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8083)

```diff
-       NN = SS, (0, cg.T)()
+       Ll = kk, (0, OI.H)()
```

#### 928. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8091-L8092` → after: `L8351-L8352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8351-L8352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8351-L8352) · [Before (L8091-L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8091-L8092)

```diff
-         renderDistance: null !== (HS = null === tS || void 0 === tS ? void 0 : tS.horizontal) && void 0 !== HS ? HS : null,
-         renderDistanceVertical: null !== (gS = null === tS || void 0 === tS ? void 0 : tS.vertical) && void 0 !== gS ? gS : null,
+         renderDistance: null !== (Fk = null === Xk || void 0 === Xk ? void 0 : Xk.horizontal) && void 0 !== Fk ? Fk : null,
+         renderDistanceVertical: null !== (Ik = null === Xk || void 0 === Xk ? void 0 : Xk.vertical) && void 0 !== Ik ? Ik : null,
```

#### 929. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8095` → after: `L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8355) · [Before (L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8095)

```diff
-         renderBackend: (0, Kb.F)(),
+         renderBackend: (0, eT.J)(),
```

#### 930. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8097` → after: `L8357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8357) · [Before (L8097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8097)

```diff
-         ...(0, vg.c)(NN)
+         ...(0, nI.e)(Ll)
```

#### 931. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8102` → after: `L8362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8362) · [Before (L8102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8102)

```diff
-       console.info(`${OX} wasm memory at the session's end`, SS.details())
+       console.info(`${vi} wasm memory at the session's end`, kk.details())
```

#### 932. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8109` → after: `L8369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8369) · [Before (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8109)

```diff
-         SS.crash(tg.v, gS)
+         kk.crash(TI.r, Ik)
```

#### 933. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8114` → after: `L8374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8374) · [Before (L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8114)

```diff
-       return Cx ??= gS.e(71).then((() => gS(51055))).catch((SS => {
+       return Ky ??= Ik.e(71).then((() => Ik(51008))).catch((kk => {
```

#### 934. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8162` → after: `L8422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8422) · [Before (L8162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8162)

```diff
-             tS(), await Promise.all([(0, wg.flushCrashReports)(MS.d), null === XS || void 0 === XS ? void 0 : XS()])
+             Xk(), await Promise.all([(0, VI.flushCrashReports)(Yk.c), null === ik || void 0 === ik ? void 0 : ik()])
```

#### 935. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8164` → after: `L8424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8424) · [Before (L8164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8164)

```diff
-           reload: MS.k
+           reload: Yk.i
```

#### 936. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8178` → after: `L8438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8438) · [Before (L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8178)

```diff
-         } = await gS.e(271).then((() => gS(41075)));
+         } = await Ik.e(271).then((() => Ik(41067)));
```

#### 937. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8206` → after: `L8466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8466) · [Before (L8206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8206)

```diff
-       xI || (xI = !0, Iq("play", sS), (0, kS.n)(new wI), NS.gameBridge.attach(LS), GI().catch((() => {})), (0, hS.t)((SS => {
+       qL || (qL = !0, ja("play", Bk), (0, Zk.q)(new SL), lk.gameBridge.attach(pk), PL().catch((() => {})), (0, Vk.A)((kk => {
```

#### 938. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8216-L8218` → after: `L8476-L8478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8476-L8478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8476-L8478) · [Before (L8216-L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8216-L8218)

```diff
-       booted: XS.g.INITIALISE_NOA,
-       texturesIn: XS.g.REGISTRATION,
-       modelsIn: XS.g.SETUP_LIFEFORMS
+       booted: ik.j.INITIALISE_NOA,
+       texturesIn: ik.j.REGISTRATION,
+       modelsIn: ik.j.SETUP_LIFEFORMS
```

#### 939. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8222` → after: `L8482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8482) · [Before (L8222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8222)

```diff
-       qS.k.cj("matchmakeAndPlayStepCompleted", {
+       ak.g.GL("matchmakeAndPlayStepCompleted", {
```

#### 940. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8233-L8235` → after: `L8493-L8495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8493-L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8493-L8495) · [Before (L8233-L8235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8233-L8235)

```diff
-       } = (0, kS.e)();
-       if (SS.code === tS.c.serverUpdating.code) return (new wI).leaveLive(), void jI(HS, gS);
-       qS.k.cj("unwantedLeftGame", {
+       } = (0, Zk.d)();
+       if (kk.code === Xk.d.serverUpdating.code) return (new SL).leaveLive(), void xL(Fk, Ik);
+       ak.g.GL("unwantedLeftGame", {
```

#### 941. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8249` → after: `L8509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8509) · [Before (L8249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8249)

```diff
-       } : "gameOrPluginKick" === SS.name ? SS.reason : `You have disconnected from the server.\n${SS.reason}`
+       } : "gameOrPluginKick" === kk.name ? kk.reason : `You have disconnected from the server.\n${kk.reason}`
```

#### 942. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8254` → after: `L8514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8514) · [Before (L8254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8254)

```diff
-       tS = (0, uS.E)(SS, HS), Promise.resolve().then((() => gS(1608))).then((SS => {
+       Xk = (0, qk.A)(kk, Fk), Promise.resolve().then((() => Ik(1475))).then((kk => {
```

#### 943. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8260` → after: `L8520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8520) · [Before (L8260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8260)

```diff
-         console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", SS), (0, MS.e)(tS)
+         console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", kk), (0, Yk.d)(Xk)
```

#### 944. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8265` → after: `L8525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8525) · [Before (L8265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8265)

```diff
-       return NI ??= Promise.all([gS.e(72), gS.e(75), gS.e(74), gS.e(73), gS.e(89), gS.e(86), gS.e(269), gS.e(189), gS.e(223), gS.e(247), gS.e(218), gS.e(46)]).then((() => gS(41033))).then((SS => {
+       return LL ??= Promise.all([Ik.e(72), Ik.e(75), Ik.e(74), Ik.e(73), Ik.e(89), Ik.e(86), Ik.e(269), Ik.e(189), Ik.e(223), Ik.e(247), Ik.e(218), Ik.e(46)]).then((() => Ik(41011))).then((kk => {
```

#### 945. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8272` → after: `L8532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8532) · [Before (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8272)

```diff
-                 null === HS || HS.isStopped || bq ? console.warn(`${OX} the play sources threw as they attached, after the client stopped`, SS) : Uu({
+                 null === Fk || Fk.isStopped || la ? console.warn(`${vi} the play sources threw as they attached, after the client stopped`, kk) : Bq({
```

#### 946. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8281` → after: `L8541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8541) · [Before (L8281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8281)

```diff
-         throw NI = null, new hS.c(SS)
+         throw LL = null, new Vk.e(kk)
```

#### 947. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8291` → after: `L8551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8551) · [Before (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8291)

```diff
-       const NS = (0, fS.g)();
+       const lk = (0, tk.c)();
```

#### 948. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8306` → after: `L8566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8566) · [Before (L8306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8306)

```diff
-             target: await (0, VS.h)(SS.userContext, HS.place, Ku(), NS),
+             target: await (0, Uk.f)(kk.userContext, Fk.place, Jq(), lk),
```

#### 949. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8308` → after: `L8568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8568) · [Before (L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8308)

```diff
-             freshMs: VS.d
+             freshMs: Uk.c
```

#### 950. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8330-L8331` → after: `L8590-L8591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8590-L8591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8590-L8591) · [Before (L8330-L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8330-L8331)

```diff
-             (0, fS.r)((() => {
-               SS.endJoinAd() && (0, KS.m)()
+             (0, tk.k)((() => {
+               kk.endJoinAd() && (0, ek.n)()
```

#### 951. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8334` → after: `L8594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8594) · [Before (L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8334)

```diff
-           return uI || (uI = !0, (0, GS.c)()), qI ? (kI(XS.g.CONNECT_TO_GAME_SERVER), kI(XS.g.SHADER_PACK), function() {
+           return ZL || (ZL = !0, (0, Hk.e)()), tL ? (wL(ik.j.CONNECT_TO_GAME_SERVER), wL(ik.j.SHADER_PACK), function() {
```

#### 952. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8337` → after: `L8597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8597) · [Before (L8337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8337)

```diff
-           }() && (0, jS.e)(SS.userContext, xS).catch((SS => {
+           }() && (0, wk.h)(kk.userContext, yk).catch((kk => {
```

#### 953. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8342` → after: `L8602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8602) · [Before (L8342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8342)

```diff
-               return null !== (SS = null === (HS = yx) || void 0 === HS ? void 0 : HS.couldntRunInJoinedGame()) && void 0 !== SS ? SS : null
+               return null !== (kk = null === (Fk = Cy) || void 0 === Fk ? void 0 : Fk.couldntRunInJoinedGame()) && void 0 !== kk ? kk : null
```

#### 954. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8345` → after: `L8605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8605) · [Before (L8345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8345)

```diff
-           }(), bS.d.value(void 0)) : DI("The server ended the game as it joined");
+           }(), Tk.b.value(void 0)) : zL("The server ended the game as it joined");
```

#### 955. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8349` → after: `L8609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8609) · [Before (L8349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8349)

```diff
-             if ((uS.error instanceof AS.k || uS.error instanceof AS.d) && uS.error.code === tS.c.serverUpdating.code) {
+             if ((qk.error instanceof bk.j || qk.error instanceof bk.b) && qk.error.code === Xk.d.serverUpdating.code) {
```

#### 956. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8354` → after: `L8614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8614) · [Before (L8354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8354)

```diff
-               } = (0, kS.e)();
+               } = (0, Zk.d)();
```

#### 957. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8357` → after: `L8617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8617) · [Before (L8357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8357)

```diff
-             return uS.error instanceof BS.b ? bS.d.errorWithCode(uS.error.messageKey, XS.g.SHADER_PACK, {
+             return qk.error instanceof dk.d ? Tk.b.errorWithCode(qk.error.messageKey, ik.j.SHADER_PACK, {
```

#### 958. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8359-L8363` → after: `L8619-L8623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8619-L8623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8619-L8623) · [Before (L8359-L8363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8359-L8363)

```diff
-             }) : bS.d.errorWithCode(function(SS) {
-               if (SS instanceof AS.p || SS instanceof QS.e) return SS.message;
-               if (nI(SS)) return (0, YS.l)(SS.code, SS.serverText);
-               return YS.g
-             }(uS.error), XS.g.CONNECT_TO_GAME_SERVER, {
+             }) : Tk.b.errorWithCode(function(kk) {
+               if (kk instanceof bk.t || kk instanceof Kk.f) return kk.message;
+               if (QL(kk)) return (0, uk.n)(kk.code, kk.serverText);
+               return uk.i
+             }(qk.error), ik.j.CONNECT_TO_GAME_SERVER, {
```

#### 959. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8366-L8368` → after: `L8626-L8628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8626-L8628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8626-L8628) · [Before (L8366-L8368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8366-L8368)

```diff
-               gameServerUnreachable: (0, yS.d)(uS.error),
-               joinFailure: (0, yS.i)(uS.error),
-               rematch: (0, nS.c)(uS.error),
+               gameServerUnreachable: (0, Rk.c)(qk.error),
+               joinFailure: (0, Rk.h)(qk.error),
+               rematch: (0, xk.e)(qk.error),
```

#### 960. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8375` → after: `L8635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8635) · [Before (L8375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8375)

```diff
-         case "Hg":
+         case "iI":
```

#### 961. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8381` → after: `L8641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8641) · [Before (L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8381)

```diff
-       return SS instanceof AS.k || SS instanceof AS.d && "attach" !== SS.stage
+       return kk instanceof bk.j || kk instanceof bk.b && "attach" !== kk.stage
```

#### 962. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8385` → after: `L8645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8645) · [Before (L8385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8385)

```diff
-       return !(SS instanceof AS.p) && !nI(SS) && void 0 === (0, yS.d)(SS)
+       return !(kk instanceof bk.t) && !QL(kk) && void 0 === (0, Rk.c)(kk)
```

#### 963. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8389` → after: `L8649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8649) · [Before (L8389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8389)

```diff
-       return nI(SS) ? SS instanceof AS.d && (0, YS.k)(SS.code).requiresRefresh ? "medium" : "low" : PI(SS) || SS instanceof AS.p ? "medium" : "low"
+       return QL(kk) ? kk instanceof bk.b && (0, uk.l)(kk.code).requiresRefresh ? "medium" : "low" : sL(kk) || kk instanceof bk.t ? "medium" : "low"
```

#### 964. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8393` → after: `L8653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8653) · [Before (L8393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8393)

```diff
-       return bS.d.errorWithCode(SS, XS.g.CONNECT_TO_GAME_SERVER, {
+       return Tk.b.errorWithCode(kk, ik.j.CONNECT_TO_GAME_SERVER, {
```

#### 965. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8395` → after: `L8655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8655) · [Before (L8395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8395)

```diff
-         Hg: !0
+         iI: !0
```

#### 966. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8400` → after: `L8660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8660) · [Before (L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8400)

```diff
-         if ((0, DS.e)()) {
+         if ((0, Qk.c)()) {
```

#### 967. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8402-L8403` → after: `L8662-L8663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8662-L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8662-L8663) · [Before (L8402-L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8402-L8403)

```diff
-           if ((0, xS.e)()) return;
-           (0, aS.c)(!0 === (null === (HS = (0, DS.l)()) || void 0 === HS || null === (gS = HS.currentViewer) || void 0 === gS ? void 0 : gS.unsavedChanges), SS)
+           if ((0, yk.b)()) return;
+           (0, jk.b)(!0 === (null === (Fk = (0, Qk.j)()) || void 0 === Fk || null === (Ik = Fk.currentViewer) || void 0 === Ik ? void 0 : Ik.unsavedChanges), kk)
```

#### 968. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8410` → after: `L8670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8670) · [Before (L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8410)

```diff
-         qI = !1, (0, CS.f)();
+         tL = !1, (0, Jk.g)();
```

#### 969. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8413` → after: `L8673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8673) · [Before (L8413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8413)

```diff
-           null === (HS = (0, hS.q)()) || void 0 === HS || HS.clearWasmCameraScreen()
+           null === (Fk = (0, Vk.y)()) || void 0 === Fk || Fk.clearWasmCameraScreen()
```

#### 970. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8419` → after: `L8679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8679) · [Before (L8419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8419)

```diff
-         } = (0, kS.e)();
+         } = (0, Zk.d)();
```

#### 971. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8423` → after: `L8683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8683) · [Before (L8423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8423)

```diff
-           (0, kS.r)({
+           (0, Zk.s)({
```

#### 972. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8425` → after: `L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8685) · [Before (L8425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8425)

```diff
-           }), qS.k.cj("leaveGame", {
+           }), ak.g.GL("leaveGame", {
```

#### 973. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8427` → after: `L8687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8687) · [Before (L8427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8427)

```diff
-           }), (0, IS.Q)()
+           }), (0, Lk.O)()
```

#### 974. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8431` → after: `L8691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8691) · [Before (L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8431)

```diff
-         return (0, DS.e)()
+         return (0, Qk.c)()
```

#### 975. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8435` → after: `L8695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8695) · [Before (L8435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8435)

```diff
-   40947: (SS, HS, gS) => {
+   40937: (kk, Fk, Ik) => {
```

#### 976. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8437-L8440` → after: `L8697-L8700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8697-L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8697-L8700) · [Before (L8437-L8440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8437-L8440)

```diff
-       b: () => bS,
-       f: () => tS,
-       h: () => NS,
-       k: () => xS
+       c: () => Tk,
+       e: () => Xk,
+       g: () => lk,
+       i: () => yk
```

#### 977. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8452` → after: `L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8712) · [Before (L8452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8452)

```diff
-       return `it sent no start within ${Math.round(SS)} ms`
+       return `it sent no start within ${Math.round(kk)} ms`
```

#### 978. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8495` → after: `L8755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8755) · [Before (L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8495)

```diff
-   39699: (SS, HS, gS) => {
+   39631: (kk, Fk, Ik) => {
```

#### 979. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8497` → after: `L8757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8757) · [Before (L8497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8497)

```diff
-       e: () => NS
+       c: () => lk
```

#### 980. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8499-L8500` → after: `L8759-L8760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8759-L8760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8759-L8760) · [Before (L8499-L8500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8499-L8500)

```diff
-     var tS = gS(387),
-       bS = gS(1087);
+     var Xk = Ik(337),
+       Tk = Ik(1018);
```

#### 981. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8505-L8506` → after: `L8765-L8766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8765-L8766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8765-L8766) · [Before (L8505-L8506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8505-L8506)

```diff
-       const HS = (0, tS.Kb)(SS);
-       return "classic" !== HS ? XS.has(HS) : !(0, bS.m)(SS) && !xS.has((0, tS.Fb)(SS))
+       const Fk = (0, Xk.dc)(kk);
+       return "classic" !== Fk ? ik.has(Fk) : !(0, Tk.j)(kk) && !yk.has((0, Xk.Xb)(kk))
```

#### 982. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8509` → after: `L8769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8769) · [Before (L8509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8509)

```diff
-   40869: (SS, HS, gS) => {
+   40843: (kk, Fk, Ik) => {
```

#### 983. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8537` → after: `L8797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8797) · [Before (L8537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8537)

```diff
-   38739: (SS, HS, gS) => {
+   38726: (kk, Fk, Ik) => {
```

#### 984. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8541` → after: `L8801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8801) · [Before (L8541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8541)

```diff
-     var tS = gS(3021);
+     var Xk = Ik(2801);
```

#### 985. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8545` → after: `L8805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8805) · [Before (L8545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8545)

```diff
-       const SS = () => (0, tS.G)();
+       const kk = () => (0, Xk.y)();
```

#### 986. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8547-L8549` → after: `L8807-L8809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8807-L8809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8807-L8809) · [Before (L8547-L8549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8547-L8549)

```diff
-         memoryBytes: () => (0, tS.B)().buffer.byteLength,
-         reserveUpFront: HS => SS().qf(HS),
-         reserveAhead: HS => SS().Nf(HS),
+         memoryBytes: () => (0, Xk.r)().buffer.byteLength,
+         reserveUpFront: Fk => kk().tt(Fk),
+         reserveAhead: Fk => kk().Lt(Fk),
```

#### 987. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8551` → after: `L8811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8811) · [Before (L8551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8551)

```diff
-           SS().uf(HS)
+           kk().Zt(Fk)
```

#### 988. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8553` → after: `L8813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8813) · [Before (L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8553)

```diff
-         lowWater: () => bS[SS().xf()] ?? "none",
+         lowWater: () => Tk[kk().qt()] ?? "none",
```

#### 989. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8555` → after: `L8815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8815) · [Before (L8555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8555)

```diff
-           const HS = new Uint32Array((0, tS.B)().buffer, SS, 17),
+           const Fk = new Uint32Array((0, Xk.r)().buffer, kk, 17),
```

#### 990. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8576-L8578` → after: `L8836-L8838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8836-L8838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8836-L8838) · [Before (L8576-L8578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8576-L8578)

```diff
-         }(SS().ff()),
-         takeBallast: () => SS().kf(),
-         takePressure: () => SS().af()
+         }(kk().jt()),
+         takeBallast: () => kk().et(),
+         takePressure: () => kk().wt()
```

#### 991. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8582` → after: `L8842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8842) · [Before (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8582)

```diff
-   5221: (SS, HS, gS) => {
+   5053: (kk, Fk, Ik) => {
```

#### 992. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8585-L8587` → after: `L8845-L8848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8845-L8848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8845-L8848) · [Before (L8585-L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8585-L8587)

```diff
-       e: () => xS,
-       h: () => tS,
-       j: () => jS,
+       c: () => yk,
+       d: () => Xk,
+       g: () => wk,
+       k: () => tk,
```

#### 993. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8589-L8593` → after: `L8850-L8853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8850-L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8850-L8853) · [Before (L8589-L8593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8589-L8593)

```diff
-       n: () => bS,
-       r: () => XS,
-       u: () => uS,
-       v: () => IS,
-       y: () => kS
+       p: () => ik,
+       t: () => qk,
+       w: () => Lk,
+       x: () => Zk
```

#### 994. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8612` → after: `L8872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8872) · [Before (L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8612)

```diff
-         if ("string" !== typeof tS) return `${gS} isn't text.`;
+         if ("string" !== typeof Xk) return `${Ik} isn't text.`;
```

#### 995. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8621` → after: `L8881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8881) · [Before (L8621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8621)

```diff
-           if (SS.length > NS) return `The pack has more than ${NS} .wgsl files.`;
+           if (kk.length > lk) return `The pack has more than ${lk} .wgsl files.`;
```

#### 996. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8629` → after: `L8889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8889) · [Before (L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8629)

```diff
-             if (HS.has(gS)) return `The pack has two files at ${gS}.`;
+             if (Fk.has(Ik)) return `The pack has two files at ${Ik}.`;
```

#### 997. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8632` → after: `L8892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8892) · [Before (L8632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8632)

```diff
-           return kS(SS) > xS ? `The pack's .wgsl files are over ${xS/1024} KB in total.` : null
+           return Zk(kk) > yk ? `The pack's .wgsl files are over ${yk/1024} KB in total.` : null
```

#### 998. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8657-L8660` → after: `L8917-L8920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8917-L8920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8917-L8920) · [Before (L8657-L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8657-L8660)

```diff
-       if (!SS.toLowerCase().endsWith(".wgsl")) return `${SS} isn't a .wgsl file.`;
-       if (SS.length > qS) return `A file path is over ${qS} characters.`;
-       if (SS.includes("\\") || /[\u0000-\u001f]/.test(SS)) return `${SS} isn't a valid file path.`;
-       return SS.split("/").some((SS => "" === SS || "." === SS || ".." === SS)) ? `${SS} isn't a valid file path.` : null
+       if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
+       if (kk.length > ak) return `A file path is over ${ak} characters.`;
+       if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
+       return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
```

#### 999. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8693` → after: `L8953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmPlay.js#L8953) · [Before (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmPlay.js#L8693)

```diff
-           return (HS[gS]?.numAnimStates ?? 0) > 1 && !NS.has(tS) ? tS : SS
+           return (Fk[Ik]?.numAnimStates ?? 0) > 1 && !lk.has(Xk) ? Xk : kk
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmRecorder.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/wasmRecorder.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864)

#### 1. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L4-L5)

```diff
-   61535: (SS, HS, gS) => {
-     SS.exports = gS.p + "static/media/bloxd_wasm_recorder_bg.4315c68e1a3c83441b7f.wasm"
+   61462: (kk, Fk, Ik) => {
+     kk.exports = Ik.p + "static/media/bloxd_wasm_recorder_bg.118ede992f99db643cd2.wasm"
```

#### 2. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L7)

```diff
-   61532: (SS, HS, gS) => {
+   61456: (kk, Fk, Ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L19-L21` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L19-L21) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L19-L21)

```diff
-       VbS: () => bS,
-       JxS: () => vS,
-       bf: () => XS,
+       BTk: () => Tk,
+       Uyk: () => nk,
+       yt: () => ik,
```

#### 4. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L24-L26` → after: `L24-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L24-L26) · [Before (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L24-L26)

```diff
-       Xf: () => xS,
-       AbS: () => NS,
-       ObS: () => qS
+       lt: () => yk,
+       WTk: () => lk,
+       uTk: () => ak
```

#### 5. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L35)

```diff
-         ZS.WLS8(SS, 0)
+         zk.fgsy(kk, 0)
```

#### 6. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L38)

```diff
-         return 0 !== ZS.Ph5s(this.__wbg_ptr)
+         return 0 !== zk.qQ4m(this.__wbg_ptr)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L41-L59` → after: `L41-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L41-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L41-L59) · [Before (L41-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L41-L59)

```diff
-         return 0 !== ZS.L8dN(this.__wbg_ptr, SS, HS)
-       }
-       dbS(SS) {
-         return ZS.jK8p(this.__wbg_ptr, SS) >>> 0
-       }
-       JbS() {
-         ZS.fcX5(this.__wbg_ptr)
-       }
-       ZbS() {
-         return ZS.UeO3(this.__wbg_ptr) >>> 0
-       }
-       hbS() {
-         return ZS.wusG(this.__wbg_ptr)
-       }
-       EbS() {
-         return ZS.LSai(this.__wbg_ptr) >>> 0
- ... (3 more removed lines; see GitHub link above)
+         return 0 !== zk.U0fg(this.__wbg_ptr, kk, Fk)
+       }
+       bTk(kk) {
+         return zk.NI5y(this.__wbg_ptr, kk) >>> 0
+       }
+       pTk() {
+         zk.deJz(this.__wbg_ptr)
+       }
+       GTk() {
+         return zk.hS4Q(this.__wbg_ptr) >>> 0
+       }
+       nTk() {
+         return zk.KEUx(this.__wbg_ptr)
+       }
+       CTk() {
+         return zk.ZqSH(this.__wbg_ptr) >>> 0
+ ... (3 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L62)

```diff
-         return ZS.G07e(this.__wbg_ptr, SS) >>> 0
+         return zk.qUAt(this.__wbg_ptr, kk) >>> 0
```

#### 9. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L65)

```diff
-         const SS = ZS.ZYpE();
+         const kk = zk.YJ0r();
```

#### 10. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L68-L75` → after: `L68-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L68-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L68-L75) · [Before (L68-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L68-L75)

```diff
-       vbS() {
-         return ZS.NXyw(this.__wbg_ptr) >>> 0
-       }
-       OxS() {
-         return ZS.pA9F(this.__wbg_ptr) >>> 0
-       }
-       wbS(SS, HS, gS) {
-         return 0 !== ZS.Ub3Q(this.__wbg_ptr, SS, HS, gS)
+       UTk() {
+         return zk.Qk1Y(this.__wbg_ptr) >>> 0
+       }
+       Cyk() {
+         return zk.VdKM(this.__wbg_ptr) >>> 0
+       }
+       OTk(kk, Fk, Ik) {
+         return 0 !== zk.h8cV(this.__wbg_ptr, kk, Fk, Ik)
```

#### 11. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L78)

```diff
-         return ZS.AjQb(this.__wbg_ptr, SS) >>> 0
+         return zk.vB1F(this.__wbg_ptr, kk) >>> 0
```

#### 12. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L81)

```diff
-         return ZS.rWBP(this.__wbg_ptr) >>> 0
+         return zk.YVQB(this.__wbg_ptr) >>> 0
```

#### 13. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L107)

```diff
-         }(SS, ZS.W93h, ZS.GpfK),
+         }(kk, zk.EOOZ, zk.jFoY),
```

#### 14. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L109)

```diff
-         bS = ZS.dukg(gS, tS, HS);
+         Tk = zk.kHfM(Ik, Xk, Fk);
```

#### 15. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L114-L122` → after: `L114-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L114-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L114-L122) · [Before (L114-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L114-L122)

```diff
-       ZS.hZ8b()
-     }
- 
-     function NS() {
-       return ZS.pCQD() >>> 0
-     }
- 
-     function qS() {
-       return CS(ZS.orjq())
+       zk.BY5A()
+     }
+ 
+     function lk() {
+       return zk.PzaC() >>> 0
+     }
+ 
+     function ak() {
+       return Jk(zk.KsAP())
```

#### 16. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L128)

```diff
-         LVXy: {
+         g1Rq: {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L130)

```diff
-           Qv9K: function(SS, HS) {
+           YWRk: function(kk, Fk) {
```

#### 18. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L133)

```diff
-           rxNN: function() {
+           oQc0: function() {
```

#### 19. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L136)

```diff
-           bif2: function(SS, HS) {
+           CC7N: function(kk, Fk) {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L139)

```diff
-           FmXG: function(SS, HS) {
+           OeOt: function(kk, Fk) {
```

#### 21. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L142)

```diff
-           San1: function() {
+           wkYC: function() {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L204)

```diff
-       return hS = SS, ZS = SS.exports, wS = HS, aS = null, ZS.cEHb(), ZS
+       return Vk = kk, zk = kk.exports, sk = Fk, jk = null, zk.jWvk(), zk
```

#### 23. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L228)

```diff
-           if (!SS.ok) throw new Error(`failed to fetch Wasm: ${SS.status} ${SS.statusText} fetching '${SS.url}'`);
+           if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
```

#### 24. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L259-L260)

```diff
-     var ES = gS(3030),
-       LS = gS(6819);
+     var Gk = Ik(2803),
+       pk = Ik(6599);
```

#### 25. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L265)

```diff
-         super((0, ES.E)(SS, HS), {
+         super((0, Gk.C)(kk, Fk), {
```

#### 26. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L279` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L279) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L279)

```diff
-           return gS = HS ??= (0, ES.F)(SS.url(), (0, LS.c)(SS.name)), await gS
+           return Ik = Fk ??= (0, Gk.G)(kk.url(), (0, pk.c)(kk.name)), await Ik
```

#### 27. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L281)

```diff
-           throw HS === gS && (HS = null), SS.error((0, ES.L)(tS), tS)
+           throw Fk === Ik && (Fk = null), kk.error((0, Gk.M)(Xk), Xk)
```

#### 28. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L315)

```diff
-       url: () => new gS.U(gS(61535)),
+       url: () => new Ik.U(Ik(61462)),
```

#### 29. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L348)

```diff
-   6819: (SS, HS, gS) => {
+   6599: (kk, Fk, Ik) => {
```

#### 30. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L352)

```diff
-     var tS = gS(3030);
+     var Xk = Ik(2803);
```

#### 31. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L354-L365` → after: `L354-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L354-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L354-L365) · [Before (L354-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L354-L365)

```diff
-       bloxd_wasm: () => "ca276a159dbc87fa5fb24bce01c600e017686becb2aec4d2d8c3ce9d9be10286",
-       bloxd_wasm_client: () => "78d650a75a894f26dfff12d13178b3b18625b3ca51d6ff43ca76c7c6a545160e",
-       bloxd_wasm_workers: () => "141545174c96a6a56bdd55b96874db592d9aa0421d29d01fc5f13e010772908e",
-       bloxd_wasm_models: () => "f9978bc5a15af3d00b08cdd71f12902b1d7af465ab38552c337a8dbca894f2ad",
-       bloxd_wasm_webgpu: () => "b036ba0a8b10236966685420835363e85775cab4add8bde3fee2aab6dab3eedc",
-       bloxd_wasm_webgl: () => "f94a6bd176e034f73eb9d8633ef96f3a4c2ba3c58f8f946158bfc25489809a0e",
-       bloxd_wasm_webgl1: () => "e1bef365f7d6b4c1345c3d7a59fb7d8e9059890b44c25962f6eefa2875a0d8ba",
-       bloxd_wasm_replay: () => "1cd9ae019549ed07be1080a40e72119ca1530d917a5e7c4bff7919777b0d7cc7",
-       bloxd_wasm_recorder: () => "9bf6273ff6c7cd97e192adea241330701cc74623c7e79a51cf18981bf754ac45",
-       bloxd_wasm_anim: () => "e9f60e55d6a938bae2c0cab139b5bc6a9a4c4b1abe3489fe2eaff4a7709eea4a",
-       bloxd_wasm_textures: () => "b1d909a0a1a9dae74a5159a0e981ac598963b92321ef4cc808ac39c91a481383",
-       bloxd_wasm_shader_pack: () => "2cc8a962c1c16c3304b235a366c2decc6556fba05a1b6ce886e0064dd54faac6"
+       bloxd_wasm: () => "e2f9e22926b42992a62e6da973b3cd1227290abc3e4b086f16ef7a6e7451e01c",
+       bloxd_wasm_client: () => "197b3a58630dd256c73f6be56077b03aba52688d49b256cfcb5b4297a602be6f",
+       bloxd_wasm_workers: () => "c531aa2c5eb2277940017568a817b82729d5bd8e37ed09fdb9542eeedecfabb2",
+       bloxd_wasm_models: () => "82813a7dd849808b1d07d41cb80b2035277c675f83cdbe5540a809aa86e18dae",
+       bloxd_wasm_webgpu: () => "2066e38e37e17624dae8b4b9c559f5daf047cb3ceb4eb8056d5135d5b3d9eb24",
+       bloxd_wasm_webgl: () => "3d1d580992195f6369c2533ce100ae6e8452da7398faf88e49b339f937ec6192",
+       bloxd_wasm_webgl1: () => "8032d9766cccf3c8343274c4d612b6bb3252bd4e5129a88b0ce812c44371db80",
+       bloxd_wasm_replay: () => "8d3f5aa602437d8a622249e4b26ef375d3132f03479495456878d8869447f290",
+       bloxd_wasm_recorder: () => "4e4293beaac6f6862394c42133a435a6ade3bf181e4ae4bc1a5a3c0c8e0c9dd2",
+       bloxd_wasm_anim: () => "125adb66f5cee367958854d2a9364d34f8d55bf2c7b62e20f2a9dcc7b9af5035",
+       bloxd_wasm_textures: () => "b45159af64c2cb22c8ac7c32ed16b3591e0026feb57c6ebfb95e710677904764",
+       bloxd_wasm_shader_pack: () => "b4044fc49c30628f5ddaad152e8054fb78f46958556f35beebe36f24a022d42c"
```

#### 32. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L367)

```diff
-     var XS = gS(4812);
+     var ik = Ik(4692);
```

#### 33. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L373)

```diff
-         onMismatch: XS.D
+         onMismatch: ik.C
```

#### 34. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmRecorder.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmRecorder.js#L375)

```diff
-       throw new tS.h(`${SS} has no release digest, so this build refuses it`)
+       throw new Xk.g(`${kk} has no release digest, so this build refuses it`)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmReplay.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/wasmReplay.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581)

#### 1. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L4-L5)

```diff
-   61553: (SS, HS, gS) => {
-     SS.exports = gS.p + "static/media/bloxd_wasm_replay_bg.c1813b2bd7b433a4dae4.wasm"
+   61472: (kk, Fk, Ik) => {
+     kk.exports = Ik.p + "static/media/bloxd_wasm_replay_bg.7255a4c142c3e369df97.wasm"
```

#### 2. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L7)

```diff
-   6819: (SS, HS, gS) => {
+   6599: (kk, Fk, Ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L11)

```diff
-     var tS = gS(3030);
+     var Xk = Ik(2803);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L13-L24` → after: `L13-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L13-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L13-L24) · [Before (L13-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L13-L24)

```diff
-       bloxd_wasm: () => "ca276a159dbc87fa5fb24bce01c600e017686becb2aec4d2d8c3ce9d9be10286",
-       bloxd_wasm_client: () => "78d650a75a894f26dfff12d13178b3b18625b3ca51d6ff43ca76c7c6a545160e",
-       bloxd_wasm_workers: () => "141545174c96a6a56bdd55b96874db592d9aa0421d29d01fc5f13e010772908e",
-       bloxd_wasm_models: () => "f9978bc5a15af3d00b08cdd71f12902b1d7af465ab38552c337a8dbca894f2ad",
-       bloxd_wasm_webgpu: () => "b036ba0a8b10236966685420835363e85775cab4add8bde3fee2aab6dab3eedc",
-       bloxd_wasm_webgl: () => "f94a6bd176e034f73eb9d8633ef96f3a4c2ba3c58f8f946158bfc25489809a0e",
-       bloxd_wasm_webgl1: () => "e1bef365f7d6b4c1345c3d7a59fb7d8e9059890b44c25962f6eefa2875a0d8ba",
-       bloxd_wasm_replay: () => "1cd9ae019549ed07be1080a40e72119ca1530d917a5e7c4bff7919777b0d7cc7",
-       bloxd_wasm_recorder: () => "9bf6273ff6c7cd97e192adea241330701cc74623c7e79a51cf18981bf754ac45",
-       bloxd_wasm_anim: () => "e9f60e55d6a938bae2c0cab139b5bc6a9a4c4b1abe3489fe2eaff4a7709eea4a",
-       bloxd_wasm_textures: () => "b1d909a0a1a9dae74a5159a0e981ac598963b92321ef4cc808ac39c91a481383",
-       bloxd_wasm_shader_pack: () => "2cc8a962c1c16c3304b235a366c2decc6556fba05a1b6ce886e0064dd54faac6"
+       bloxd_wasm: () => "e2f9e22926b42992a62e6da973b3cd1227290abc3e4b086f16ef7a6e7451e01c",
+       bloxd_wasm_client: () => "197b3a58630dd256c73f6be56077b03aba52688d49b256cfcb5b4297a602be6f",
+       bloxd_wasm_workers: () => "c531aa2c5eb2277940017568a817b82729d5bd8e37ed09fdb9542eeedecfabb2",
+       bloxd_wasm_models: () => "82813a7dd849808b1d07d41cb80b2035277c675f83cdbe5540a809aa86e18dae",
+       bloxd_wasm_webgpu: () => "2066e38e37e17624dae8b4b9c559f5daf047cb3ceb4eb8056d5135d5b3d9eb24",
+       bloxd_wasm_webgl: () => "3d1d580992195f6369c2533ce100ae6e8452da7398faf88e49b339f937ec6192",
+       bloxd_wasm_webgl1: () => "8032d9766cccf3c8343274c4d612b6bb3252bd4e5129a88b0ce812c44371db80",
+       bloxd_wasm_replay: () => "8d3f5aa602437d8a622249e4b26ef375d3132f03479495456878d8869447f290",
+       bloxd_wasm_recorder: () => "4e4293beaac6f6862394c42133a435a6ade3bf181e4ae4bc1a5a3c0c8e0c9dd2",
+       bloxd_wasm_anim: () => "125adb66f5cee367958854d2a9364d34f8d55bf2c7b62e20f2a9dcc7b9af5035",
+       bloxd_wasm_textures: () => "b45159af64c2cb22c8ac7c32ed16b3591e0026feb57c6ebfb95e710677904764",
+       bloxd_wasm_shader_pack: () => "b4044fc49c30628f5ddaad152e8054fb78f46958556f35beebe36f24a022d42c"
```

#### 5. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L26)

```diff
-     var XS = gS(4812);
+     var ik = Ik(4692);
```

#### 6. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L32)

```diff
-         onMismatch: XS.D
+         onMismatch: ik.C
```

#### 7. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L34)

```diff
-       throw new tS.h(`${SS} has no release digest, so this build refuses it`)
+       throw new Xk.g(`${kk} has no release digest, so this build refuses it`)
```

#### 8. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L37)

```diff
-   61544: (SS, HS, gS) => {
+   61470: (kk, Fk, Ik) => {
```

#### 9. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L47-L49` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L47-L49) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L47-L49)

```diff
-       WbS: () => bS,
-       JxS: () => ES,
-       bf: () => XS,
+       YTk: () => Tk,
+       Uyk: () => Gk,
+       yt: () => ik,
```

#### 10. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L52-L54` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L52-L54) · [Before (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L52-L54)

```diff
-       Xf: () => xS,
-       AbS: () => NS,
-       zbS: () => qS
+       lt: () => yk,
+       WTk: () => lk,
+       ATk: () => ak
```

#### 11. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L63-L66` → after: `L63-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L63-L66) · [Before (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L63-L66)

```diff
-         JS.HuNd(SS, 0)
-       }
-       BbS(SS, HS, gS, tS, bS, XS) {
-         JS.szDG(this.__wbg_ptr, SS, HS, gS, tS, bS, XS)
+         Sk.THIR(kk, 0)
+       }
+       rTk(kk, Fk, Ik, Xk, Tk, ik) {
+         Sk.M4zK(this.__wbg_ptr, kk, Fk, Ik, Xk, Tk, ik)
```

#### 12. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L69)

```diff
-         JS.kVtB(this.__wbg_ptr)
+         Sk.HyE3(this.__wbg_ptr)
```

#### 13. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L72-L90` → after: `L72-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L72-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L72-L90) · [Before (L72-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L72-L90)

```diff
-         JS.mMvx(this.__wbg_ptr, SS, HS)
-       }
-       RbS(SS, HS) {
-         JS.jV8X(this.__wbg_ptr, SS, HS)
-       }
-       obS() {
-         return JS.pw9E(this.__wbg_ptr) >>> 0
-       }
-       TbS() {
-         return JS.rjmr(this.__wbg_ptr) >>> 0
-       }
-       lbS() {
-         return JS.cW5f(this.__wbg_ptr) >>> 0
-       }
-       mbS() {
-         return JS.yAcH(this.__wbg_ptr) >>> 0
- ... (3 more removed lines; see GitHub link above)
+         Sk.jl3F(this.__wbg_ptr, kk, Fk)
+       }
+       kik(kk, Fk) {
+         Sk.OvR7(this.__wbg_ptr, kk, Fk)
+       }
+       Iik() {
+         return Sk.Tvqz(this.__wbg_ptr) >>> 0
+       }
+       Fik() {
+         return Sk.xXah(this.__wbg_ptr) >>> 0
+       }
+       Xik() {
+         return Sk.bi1S(this.__wbg_ptr) >>> 0
+       }
+       Tik() {
+         return Sk.CMuh(this.__wbg_ptr) >>> 0
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L93)

```diff
-         const SS = JS.P44B();
+         const kk = Sk.juNI();
```

#### 15. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L97-L100` → after: `L97-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L97-L100) · [Before (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L97-L100)

```diff
-         JS.Gfbx(this.__wbg_ptr)
-       }
-       vbS() {
-         return JS.HvPe(this.__wbg_ptr) >>> 0
+         Sk.Iupi(this.__wbg_ptr)
+       }
+       UTk() {
+         return Sk.rvTy(this.__wbg_ptr) >>> 0
```

#### 16. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L103)

```diff
-         JS.bpGO(this.__wbg_ptr)
+         Sk.QVRX(this.__wbg_ptr)
```

#### 17. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L106)

```diff
-         JS.QRJ6(this.__wbg_ptr)
+         Sk.PMcF(this.__wbg_ptr)
```

#### 18. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L109-L112` → after: `L109-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L109-L112) · [Before (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L109-L112)

```diff
-         return JS.ShhX(this.__wbg_ptr) >>> 0
-       }
-       ebS() {
-         JS.cqsI(this.__wbg_ptr)
+         return Sk.XeNk(this.__wbg_ptr) >>> 0
+       }
+       iik() {
+         Sk.sjOk(this.__wbg_ptr)
```

#### 19. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L115-L120` → after: `L115-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L115-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L115-L120) · [Before (L115-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L115-L120)

```diff
-         JS.RxCE(this.__wbg_ptr, SS, HS)
-       }
-       SXS(SS) {
-         JS.HVz8(this.__wbg_ptr, SS)
-       }
-       MbS(SS, HS) {
+         Sk.IpU7(this.__wbg_ptr, kk, Fk)
+       }
+       lik(kk) {
+         Sk.KfVQ(this.__wbg_ptr, kk)
+       }
+       DTk(kk, Fk) {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L127)

```diff
-           }(HS, JS.QDoe),
+           }(Fk, Sk.MuxV),
```

#### 21. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L129-L135` → after: `L129-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L129-L135) · [Before (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L129-L135)

```diff
-         JS.y2Pr(this.__wbg_ptr, SS, gS, tS)
-       }
-       sbS(SS, HS) {
-         JS.WmVR(this.__wbg_ptr, SS, HS)
-       }
-       rbS(SS) {
-         JS.Zo42(this.__wbg_ptr, SS)
+         Sk.vZwq(this.__wbg_ptr, kk, Ik, Xk)
+       }
+       hTk(kk, Fk) {
+         Sk.Z4UZ(this.__wbg_ptr, kk, Fk)
+       }
+       yik(kk) {
+         Sk.K0wz(this.__wbg_ptr, kk)
```

#### 22. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L138)

```diff
-         return JS.iC4k(this.__wbg_ptr, SS) >>> 0
+         return Sk.rBW8(this.__wbg_ptr, kk) >>> 0
```

#### 23. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L141)

```diff
-         return JS.pbUE(this.__wbg_ptr, SS, HS) >>> 0
+         return Sk.a1A5(this.__wbg_ptr, kk, Fk) >>> 0
```

#### 24. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L167)

```diff
-         }(SS, JS.QDoe, JS.PJfL),
+         }(kk, Sk.MuxV, Sk.i4te),
```

#### 25. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L169)

```diff
-         bS = JS.eCGh(gS, tS, HS);
+         Tk = Sk.lDrG(Ik, Xk, Fk);
```

#### 26. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L174-L182` → after: `L174-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L174-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L174-L182) · [Before (L174-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L174-L182)

```diff
-       JS.EDO9()
-     }
- 
-     function NS() {
-       return JS.KgRb() >>> 0
-     }
- 
-     function qS() {
-       return nS(JS.I0RY())
+       Sk.gUsI()
+     }
+ 
+     function lk() {
+       return Sk.XRbf() >>> 0
+     }
+ 
+     function ak() {
+       return xk(Sk.Qbhy())
```

#### 27. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L188)

```diff
-         as1A: {
+         bBny: {
```

#### 28. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L190)

```diff
-           HLCA: function(SS, HS) {
+           nLog: function(kk, Fk) {
```

#### 29. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L193)

```diff
-           tTgF: function() {
+           Rujh: function() {
```

#### 30. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L196)

```diff
-           TcAw: function(SS, HS) {
+           Itzd: function(kk, Fk) {
```

#### 31. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L199)

```diff
-           qOJ7: function(SS, HS) {
+           uqtI: function(kk, Fk) {
```

#### 32. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L202` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L202) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L202)

```diff
-           C0rA: function() {
+           YLbG: function() {
```

#### 33. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L265)

```diff
-       return ZS = SS, JS = SS.exports, hS = HS, kS = null, KS = null, JS.pzcE(), JS
+       return zk = kk, Sk = kk.exports, Vk = Fk, Zk = null, ek = null, Sk.YTrt(), Sk
```

#### 34. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L289)

```diff
-           if (!SS.ok) throw new Error(`failed to fetch Wasm: ${SS.status} ${SS.statusText} fetching '${SS.url}'`);
+           if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
```

#### 35. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L320-L321` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L320-L321) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L320-L321)

```diff
-     var LS = gS(3030),
-       YS = gS(6819);
+     var pk = Ik(2803),
+       uk = Ik(6599);
```

#### 36. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L325)

```diff
-         super((0, LS.E)(SS, HS), {
+         super((0, pk.C)(kk, Fk), {
```

#### 37. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L344)

```diff
-           await HS, yS ??= (0, LS.F)(new gS.U(gS(61553)), (0, YS.c)("bloxd_wasm_replay"));
+           await Fk, Rk ??= (0, pk.G)(new Ik.U(Ik(61472)), (0, uk.c)("bloxd_wasm_replay"));
```

#### 38. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplay.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplay.js#L348)

```diff
-             throw yS = null, new AS((0, LS.L)(XS), XS)
+             throw Rk = null, new bk((0, pk.M)(ik), ik)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (100 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d)

#### 1. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L4)

```diff
-   37014: (SS, HS, gS) => {
+   37026: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L6-L7)

```diff
-       b: () => fS,
-       d: () => kS
+       c: () => tk,
+       e: () => Zk
```

#### 3. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L9-L11)

```diff
-     var tS = gS(680),
-       bS = gS(45),
-       XS = gS(36973);
+     var Xk = Ik(628),
+       Tk = Ik(41),
+       ik = Ik(36985);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L24)

```diff
-         uS = await Promise.race([(async () => await bS.e.setItem(NS, gS) && bS.e.setItem(xS, XS))(), (0, tS.Q)(IS).then((() => !1))]);
+         qk = await Promise.race([(async () => await Tk.g.setItem(lk, Ik) && Tk.g.setItem(yk, ik))(), (0, Xk.U)(Lk).then((() => !1))]);
```

#### 5. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L28)

```diff
-         ia: uS
+         Gj: qk
```

#### 6. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L30)

```diff
-       bS.h.setItem(qS, fS)
+       Tk.m.setItem(ak, tk)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L34-L35` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L34-L35) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L34-L35)

```diff
-       const HS = bS.h.getItem(qS);
-       null !== HS && bS.h.removeItem(qS);
+       const Fk = Tk.m.getItem(ak);
+       null !== Fk && Tk.m.removeItem(ak);
```

#### 8. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L37)

```diff
-         tS = await bS.e.getItem(NS),
+         Xk = await Tk.g.getItem(lk),
```

#### 9. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L41)

```diff
-       if (null !== tS && (fS || ("number" !== typeof tS || gS - tS > uS)) && (kS = IS && fS && HS.ia ? await bS.e.getItem(xS) : null, await Promise.all([bS.e.removeItem(NS), bS.e.removeItem(xS)])), !IS) return null;
+       if (null !== Xk && (tk || ("number" !== typeof Xk || Ik - Xk > qk)) && (Zk = Lk && tk && Fk.Gj ? await Tk.g.getItem(yk) : null, await Promise.all([Tk.g.removeItem(lk), Tk.g.removeItem(yk)])), !Lk) return null;
```

#### 10. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L49)

```diff
-   37005: (SS, HS, gS) => {
+   37021: (kk, Fk, Ik) => {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L51-L53` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L51-L53) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L51-L53)

```diff
-       d: () => tS,
-       e: () => XS,
-       f: () => bS
+       b: () => Xk,
+       f: () => ik,
+       g: () => Tk
```

#### 12. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L65)

```diff
-   36973: (SS, HS, gS) => {
+   36985: (kk, Fk, Ik) => {
```

#### 13. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L68-L69` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L68-L69) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L68-L69)

```diff
-       c: () => uS,
-       f: () => qS
+       e: () => qk,
+       i: () => ak
```

#### 14. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L71)

```diff
-     var tS = gS(31);
+     var Xk = Ik(34);
```

#### 15. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L173-L174` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L173-L174) · [Before (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L173-L174)

```diff
-       const gS = null !== (HS = SS.timeoutMs) && void 0 !== HS ? HS : "Error" === SS.type ? bS : XS;
-       tS.k.cj("showBottomMessage", {
+       const Ik = null !== (Fk = kk.timeoutMs) && void 0 !== Fk ? Fk : "Error" === kk.type ? Tk : ik;
+       Xk.g.GL("showBottomMessage", {
```

#### 16. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L181)

```diff
-   37023: (SS, HS, gS) => {
+   37034: (kk, Fk, Ik) => {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L183-L184` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L183-L184) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L183-L184)

```diff
-       b: () => tS,
-       f: () => bS
+       e: () => Xk,
+       i: () => Tk
```

#### 18. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L237)

```diff
-   37029: (SS, HS, gS) => {
+   37042: (kk, Fk, Ik) => {
```

#### 19. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L239-L240` → after: `L239-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L239-L240) · [Before (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L239-L240)

```diff
-       d: () => uS,
-       g: () => fS,
+       b: () => qk,
+       f: () => tk,
```

#### 20. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L243-L245` → after: `L243-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L243-L245) · [Before (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L243-L245)

```diff
-     var tS = gS(24),
-       bS = gS(31),
-       XS = gS(37023);
+     var Xk = Ik(25),
+       Tk = Ik(34),
+       ik = Ik(37034);
```

#### 21. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L252)

```diff
-         of XS.f) SS[HS] = !0;
+         of ik.i) kk[Fk] = !0;
```

#### 22. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L258)

```diff
-       bS.k.cj("replayViewer|uiVisibilityChanged")
+       Tk.g.GL("replayViewer|uiVisibilityChanged")
```

#### 23. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L269)

```diff
-       }, "nametag" === SS && tS.b.set({
+       }, "nametag" === kk && Xk.d.set({
```

#### 24. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L275)

```diff
-       NS = xS(), tS.b.set({
+       lk = yk(), Xk.d.set({
```

#### 25. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L280)

```diff
-   39263: (SS, HS, gS) => {
+   39257: (kk, Fk, Ik) => {
```

#### 26. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L282)

```diff
-       b: () => vS
+       e: () => nk
```

#### 27. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L284-L287` → after: `L284-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L284-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L284-L287) · [Before (L284-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L284-L287)

```diff
-     var tS = gS(1860),
-       bS = gS(1435),
-       XS = gS(64),
-       xS = gS(1121),
+     var Xk = Ik(1682),
+       Tk = Ik(1324),
+       ik = Ik(58),
+       yk = Ik(1055),
```

#### 28. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L289-L290` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L289-L290) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L289-L290)

```diff
-       qS = gS(1528),
-       uS = gS(104);
+       ak = Ik(1406),
+       qk = Ik(95);
```

#### 29. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L295` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L295) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L295)

```diff
-       return "webm" === SS ? IS : fS
+       return "webm" === kk ? Lk : tk
```

#### 30. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L307` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L307) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L307)

```diff
-     var jS = gS(1181);
+     var wk = Ik(1096);
```

#### 31. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L376)

```diff
-             children: `Your device does not support exporting. Try recording with an external software like ${SS}.`
+             children: `Your device does not support exporting. Try recording with an external software like ${kk}.`
```

#### 32. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L379)

```diff
-             children: (0, jS.jsx)(qS.L, {
+             children: (0, wk.jsx)(ak.G, {
```

#### 33. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L451)

```diff
-           children: [(0, jS.jsx)(qS.p, {
+           children: [(0, wk.jsx)(ak.m, {
```

#### 34. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L461)

```diff
-           }), (0, jS.jsx)(qS.L, {
+           }), (0, wk.jsx)(ak.G, {
```

#### 35. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L471-L473` → after: `L471-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L471-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L471-L473) · [Before (L471-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L471-L473)

```diff
-     var QS = gS(5005),
-       DS = gS(37023),
-       wS = gS(37029);
+     var Kk = Ik(4857),
+       Qk = Ik(37034),
+       sk = Ik(37042);
```

#### 36. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L478)

```diff
-         const SS = (0, wS.d)();
+         const kk = (0, sk.b)();
```

#### 37. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L483` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L483) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L483)

```diff
-           of DS.f)
+           of Qk.i)
```

#### 38. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L512)

```diff
-     var OS = gS(39106);
+     var vk = Ik(39087);
```

#### 39. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L516)

```diff
-       SS.holdInput(!1), (0, OS.g)(!1)
+       kk.holdInput(!1), (0, vk.f)(!1)
```

#### 40. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L520)

```diff
-       if ((0, OS.e)() || dS) return;
+       if ((0, vk.b)() || Ek) return;
```

#### 41. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L562` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L562) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L562)

```diff
-       const IS = null !== (HS = null === (gS = XS.startFailure) || void 0 === gS ? void 0 : gS.call(XS)) && void 0 !== HS ? HS : null;
+       const Lk = null !== (Fk = null === (Ik = ik.startFailure) || void 0 === Ik ? void 0 : Ik.call(ik)) && void 0 !== Fk ? Fk : null;
```

#### 42. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L568)

```diff
-           return !(0, OS.e)() && ((0, OS.g)(!0), SS.holdInput(!0), !0)
+           return !(0, vk.b)() && ((0, vk.f)(!0), kk.holdInput(!0), !0)
```

#### 43. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L572` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L572) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L572)

```diff
-         fS = await JS(xS.includeUi, (() => XS.canvas()), XS.YL)
+         tk = await Sk(yk.includeUi, (() => ik.canvas()), ik.WG)
```

#### 44. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L585` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L585) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L585)

```diff
-         KS = XS.playbackSpeed(), XS.closeViewer(), XS.setPlaybackSpeed(1), XS.pause(), XS.seekToTick(null !== NS && void 0 !== NS ? NS : 0);
+         ek = ik.playbackSpeed(), ik.closeViewer(), ik.setPlaybackSpeed(1), ik.pause(), ik.seekToTick(null !== lk && void 0 !== lk ? lk : 0);
```

#### 45. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L593)

```diff
-           return null !== gS && void 0 !== gS ? gS : null
+           return null !== Ik && void 0 !== Ik ? Ik : null
```

#### 46. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L600)

```diff
-           if (!HS) throw new Error(`No MediaRecorder mime type available for ${SS}`);
+           if (!Fk) throw new Error(`No MediaRecorder mime type available for ${kk}`);
```

#### 47. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L643` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L643) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L643)

```diff
-         const IS = null !== (wS = null === (vS = XS.playbackFailure) || void 0 === vS ? void 0 : vS.call(XS)) && void 0 !== wS ? wS : null;
+         const Lk = null !== (sk = null === (nk = ik.playbackFailure) || void 0 === nk ? void 0 : nk.call(ik)) && void 0 !== sk ? sk : null;
```

#### 48. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L646` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L646) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L646)

```diff
-           subtitle: `${IS} Nothing was saved.`
+           subtitle: `${Lk} Nothing was saved.`
```

#### 49. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L655-L656` → after: `L655-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L655-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L655-L656) · [Before (L655-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L655-L656)

```diff
-           if (SS) return `${SS.replace(/\.bloxdreplay$/i,"")}.${gS}`;
-           return `bloxd-replay-${Date.now()}.${gS}`
+           if (kk) return `${kk.replace(/\.bloxdreplay$/i,"")}.${Ik}`;
+           return `bloxd-replay-${Date.now()}.${Ik}`
```

#### 50. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L689)

```diff
-   5005: (SS, HS, gS) => {
+   4857: (kk, Fk, Ik) => {
```

#### 51. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L696-L698` → after: `L696-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L696-L698) · [Before (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L696-L698)

```diff
-     var tS, bS = gS(5011),
-       XS = gS(3577),
-       xS = gS(4775);
+     var Xk, Tk = Ik(4863),
+       ik = Ik(3378),
+       yk = Ik(4636);
```

#### 52. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L703` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L703) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L703)

```diff
-       if (NS.ctx || !NS.usingWebAudio || "undefined" === typeof AudioContext || !(0, xS.k)()) return;
+       if (lk.ctx || !lk.usingWebAudio || "undefined" === typeof AudioContext || !(0, yk.h)()) return;
```

#### 53. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L715` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L715) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L715)

```diff
-       bS.gain.setValueAtTime(NS._muted ? 0 : null !== (SS = NS._volume) && void 0 !== SS ? SS : 1, tS.currentTime), bS.connect(tS.destination), NS.ctx = tS, NS.masterGain = bS, null === (HS = NS._setup) || void 0 === HS || HS.call(NS)
+       Tk.gain.setValueAtTime(lk._muted ? 0 : null !== (kk = lk._volume) && void 0 !== kk ? kk : 1, Xk.currentTime), Tk.connect(Xk.destination), lk.ctx = Xk, lk.masterGain = Tk, null === (Fk = lk._setup) || void 0 === Fk || Fk.call(lk)
```

#### 54. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L742)

```diff
-     }, (0, xS.k)() && (NS._unlockAudio = () => {
+     }, (0, yk.h)() && (lk._unlockAudio = () => {
```

#### 55. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L767)

```diff
-           } else "afterPaint" === tS && (tS = "queued", (0, XS.d)(HS.timeStamp, (() => {
+           } else "afterPaint" === Xk && (Xk = "queued", (0, ik.b)(Fk.timeStamp, (() => {
```

#### 56. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L775` → after: `L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L775) · [Before (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L775)

```diff
-       for (const XS of xS.e) document.addEventListener(XS, uS, {
+       for (const ik of yk.b) document.addEventListener(ik, qk, {
```

#### 57. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L809)

```diff
-   42596: (SS, HS, gS) => {
+   42586: (kk, Fk, Ik) => {
```

#### 58. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L811-L812` → after: `L811-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L811-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L811-L812) · [Before (L811-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L811-L812)

```diff
-       c: () => tS,
-       f: () => bS
+       d: () => Xk,
+       h: () => Tk
```

#### 59. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L821` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L821) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L821)

```diff
-   60676: (SS, HS, gS) => {
+   60609: (kk, Fk, Ik) => {
```

#### 60. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L826-L831` → after: `L826-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L826-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L826-L831) · [Before (L826-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L826-L831)

```diff
-     var tS = gS(36973),
-       bS = gS(37014),
-       XS = gS(37005),
-       xS = gS(37029),
-       NS = gS(4926),
-       qS = gS(42596);
+     var Xk = Ik(36985),
+       Tk = Ik(37026),
+       ik = Ik(37021),
+       yk = Ik(37042),
+       lk = Ik(4797),
+       ak = Ik(42586);
```

#### 61. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L833)

```diff
-       IS = new Set(["bK"]);
+       Lk = new Set(["ke"]);
```

#### 62. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L837)

```diff
-         this.deps = SS, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
+         this.deps = kk, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
```

#### 63. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L846)

```diff
-         return null !== this.lastView && this.lastView.state !== NS.qd.None
+         return null !== this.lastView && this.lastView.state !== lk.kd.None
```

#### 64. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L876)

```diff
-           fS = await uS.open(SS, (() => (0, bS.b)(SS, HS)))
+           tk = await qk.open(kk, (() => (0, Tk.c)(kk, Fk)))
```

#### 65. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L888` → after: `L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L888) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L888)

```diff
-               case NS.ld.ModuleTrap:
+               case lk.ad.ModuleTrap:
```

#### 66. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L890` → after: `L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L890) · [Before (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L890)

```diff
-               case NS.ld.ModuleLoad:
+               case lk.ad.ModuleLoad:
```

#### 67. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L892)

```diff
-               case NS.ld.TooLarge:
+               case lk.ad.TooLarge:
```

#### 68. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L899` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L899) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L899)

```diff
-         return this.rejectSave(new Error(tS.b.saveClosed.text)), this.fileName = null !== (gS = null !== (XS = HS.fileName) && void 0 !== XS ? XS : null === (xS = HS.fileHandle) || void 0 === xS ? void 0 : xS.name) && void 0 !== gS ? gS : null, this.fileHandle = null !== (qS = HS … [truncated]
+         return this.rejectSave(new Error(Xk.b.saveClosed.text)), this.fileName = null !== (Ik = null !== (ik = Fk.fileName) && void 0 !== ik ? ik : null === (yk = Fk.fileHandle) || void 0 === yk ? void 0 : yk.name) && void 0 !== Ik ? Ik : null, this.fileHandle = null !== (ak = Fk … [truncated]
```

#### 69. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L907)

```diff
-         this.holds.has("bK") || this.deps.client.play()
+         this.holds.has("ke") || this.deps.client.play()
```

#### 70. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L913` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L913) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L913)

```diff
-         this.isOpen && this.pause(), this.hold("bK")
+         this.isOpen && this.pause(), this.hold("ke")
```

#### 71. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L918` → after: `L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L918) · [Before (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L918)

```diff
-         null !== gS && (HS || SS < gS.mf) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(SS, HS)
+         null !== Ik && (Fk || kk < Ik.Dt) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(kk, Fk)
```

#### 72. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L928)

```diff
-         null !== SS && SS.state !== NS.qd.None && this.setCameraMode(qS.c[(qS.c.indexOf(SS.cameraMode) + 1) % qS.c.length])
+         null !== kk && kk.state !== lk.kd.None && this.setCameraMode(ak.d[(ak.d.indexOf(kk.cameraMode) + 1) % ak.d.length])
```

#### 73. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L954)

```diff
-           this.pendingSave = gS, this.editsAtSave = this.edits, this.deps.client.save((0, qS.f)()).then((SS => {
+           this.pendingSave = Ik, this.editsAtSave = this.edits, this.deps.client.save((0, ak.h)()).then((kk => {
```

#### 74. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L957` → after: `L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L957) · [Before (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L957)

```diff
-             this.pendingSave === gS && this.rejectSave(SS instanceof Error ? SS : new Error(String(SS)))
+             this.pendingSave === Ik && this.rejectSave(kk instanceof Error ? kk : new Error(String(kk)))
```

#### 75. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L975` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L975) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L975)

```diff
-         this.fileHandle = SS, this.fileName = null !== (gS = null !== (tS = null === SS || void 0 === SS ? void 0 : SS.name) && void 0 !== tS ? tS : HS) && void 0 !== gS ? gS : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
+         this.fileHandle = kk, this.fileName = null !== (Ik = null !== (Xk = null === kk || void 0 === kk ? void 0 : kk.name) && void 0 !== Xk ? Xk : Fk) && void 0 !== Ik ? Ik : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
```

#### 76. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L984-L985` → after: `L984-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L984-L985) · [Before (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L984-L985)

```diff
-         this.lastView = tS, this.opening && null !== tS && tS.state !== NS.qd.None && tS.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, xS.g)()), this.cropAsked ? (this.cropAsked = !1, null !== tS && tS.state === NS.qd.Cropping ? this.crop … [truncated]
-         const XS = 0 === this.settleFrames && 0 === (null !== (SS = null === (HS = (gS = this.deps).meshPending) || void 0 === HS ? void 0 : HS.call(gS)) && void 0 !== SS ? SS : 0);
+         this.lastView = Xk, this.opening && null !== Xk && Xk.state !== lk.kd.None && Xk.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, yk.f)()), this.cropAsked ? (this.cropAsked = !1, null !== Xk && Xk.state === lk.kd.Cropping ? this.crop … [truncated]
+         const ik = 0 === this.settleFrames && 0 === (null !== (kk = null === (Fk = (Ik = this.deps).meshPending) || void 0 === Fk ? void 0 : Fk.call(Ik)) && void 0 !== kk ? kk : 0);
```

#### 77. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L992` → after: `L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L992) · [Before (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L992)

```diff
-         (0, xS.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
+         (0, yk.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
```

#### 78. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L996` → after: `L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L996) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L996)

```diff
-           case NS.ld.TooLarge:
+           case lk.ad.TooLarge:
```

#### 79. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L998-L999` → after: `L998-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L998-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L998-L999) · [Before (L998-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L998-L999)

```diff
-           case NS.ld.Open:
-           case NS.ld.NothingStaged: {
+           case lk.ad.Open:
+           case lk.ad.NothingStaged: {
```

#### 80. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1001` → after: `L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1001) · [Before (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1001)

```diff
-             const HS = (0, XS.e)(SS.version) ? tS.b.replayTooOld : tS.b.cantOpen;
+             const Fk = (0, ik.f)(kk.version) ? Xk.b.replayTooOld : Xk.b.cantOpen;
```

#### 81. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1005-L1006` → after: `L1005-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1005-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1005-L1006) · [Before (L1005-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1005-L1006)

```diff
-           case NS.ld.Crop:
-             if (SS.code === NS.jd.Busy) {
+           case lk.ad.Crop:
+             if (kk.code === lk._c.Busy) {
```

#### 82. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1016-L1019` → after: `L1016-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1016-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1016-L1019) · [Before (L1016-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1016-L1019)

```diff
-           case NS.ld.ModuleTrap:
-           case NS.ld.ModuleLoad:
-           case NS.ld.Port:
-             this.moduleEnded(SS.reason === NS.ld.ModuleTrap ? tS.b.coreStopped : tS.b.cantOpen);
+           case lk.ad.ModuleTrap:
+           case lk.ad.ModuleLoad:
+           case lk.ad.Port:
+             this.moduleEnded(kk.reason === lk.ad.ModuleTrap ? Xk.b.coreStopped : Xk.b.cantOpen);
```

#### 83. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1021)

```diff
-           case NS.ld.NotLive:
+           case lk.ad.NotLive:
```

#### 84. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1025` → after: `L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1025) · [Before (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1025)

```diff
-             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${SS.reason})`), this.seekAsked = !1, this.release("seek")
+             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${kk.reason})`), this.seekAsked = !1, this.release("seek")
```

#### 85. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1068` → after: `L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1068) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1068)

```diff
-   60670: (SS, HS, gS) => {
+   60606: (kk, Fk, Ik) => {
```

#### 86. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1074-L1077` → after: `L1074-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1074-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1074-L1077) · [Before (L1074-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1074-L1077)

```diff
-     var tS = gS(39263),
-       bS = gS(60676),
-       XS = gS(4926),
-       xS = gS(2526);
+     var Xk = Ik(39257),
+       Tk = Ik(60609),
+       ik = Ik(4797),
+       yk = Ik(2341);
```

#### 87. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1084)

```diff
-       return (null === (HS = SS.view) || void 0 === HS ? void 0 : HS.state) === XS.qd.Cropping || SS.Ku.includes("crop")
+       return (null === (Fk = kk.view) || void 0 === Fk ? void 0 : Fk.state) === ik.kd.Cropping || kk.eq.includes("crop")
```

#### 88. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1088` → after: `L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1088) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1088)

```diff
-       return (0, tS.b)((() => function(SS) {
+       return (0, Xk.e)((() => function(kk) {
```

#### 89. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1091` → after: `L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1091) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1091)

```diff
-           KS = null !== (HS = null === aS || void 0 === aS ? void 0 : aS.view) && void 0 !== HS ? HS : null,
+           ek = null !== (Fk = null === jk || void 0 === jk ? void 0 : jk.view) && void 0 !== Fk ? Fk : null,
```

#### 90. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1093-L1094` → after: `L1093-L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1093-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1093-L1094) · [Before (L1093-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1093-L1094)

```diff
-         if (!aS || !KS || KS.state === XS.qd.None || 0 === KS.totalTicks || !jS || IS(aS)) return null;
-         const GS = null !== (gS = SS.now) && void 0 !== gS ? gS : () => performance.now(),
+         if (!jk || !ek || ek.state === ik.kd.None || 0 === ek.totalTicks || !wk || Lk(jk)) return null;
+         const Hk = null !== (Ik = kk.now) && void 0 !== Ik ? Ik : () => performance.now(),
```

#### 91. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1098` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1098) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1098)

```diff
-             return HS === aS && HS.id === CS && HS.isOpen ? HS : null
+             return Fk === jk && Fk.id === Jk && Fk.isOpen ? Fk : null
```

#### 92. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1100` → after: `L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1100) · [Before (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1100)

```diff
-           PS = Math.min(null !== (tS = null === (bS = KS.mark) || void 0 === bS ? void 0 : bS.outTick) && void 0 !== tS ? tS : 1 / 0, KS.totalTicks - 1);
+           Pk = Math.min(null !== (Xk = null === (Tk = ek.mark) || void 0 === Tk ? void 0 : Tk.outTick) && void 0 !== Xk ? Xk : 1 / 0, ek.totalTicks - 1);
```

#### 93. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1105` → after: `L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1105) · [Before (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1105)

```diff
-           return (null === (SS = nS()) || void 0 === SS || null === (HS = SS.view) || void 0 === HS ? void 0 : HS.state) === XS.qd.Playing
+           return (null === (kk = xk()) || void 0 === kk || null === (Fk = kk.view) || void 0 === Fk ? void 0 : Fk.state) === ik.kd.Playing
```

#### 94. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1108-L1109` → after: `L1108-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1108-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1108-L1109) · [Before (L1108-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1108-L1109)

```diff
-           YL: XS.Bd,
-           playbackMarkInTick: null !== (fS = null === (kS = KS.mark) || void 0 === kS ? void 0 : kS.inTick) && void 0 !== fS ? fS : null,
+           WG: ik.zd,
+           playbackMarkInTick: null !== (tk = null === (Zk = ek.mark) || void 0 === Zk ? void 0 : Zk.inTick) && void 0 !== tk ? tk : null,
```

#### 95. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1116` → after: `L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1116) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1116)

```diff
-             return null !== (SS = null === (HS = nS()) || void 0 === HS ? void 0 : HS.fileName) && void 0 !== SS ? SS : null
+             return null !== (kk = null === (Fk = xk()) || void 0 === Fk ? void 0 : Fk.fileName) && void 0 !== kk ? kk : null
```

#### 96. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1120` → after: `L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1120) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1120)

```diff
-             return null !== (SS = null === (HS = nS()) || void 0 === HS || null === (gS = HS.view) || void 0 === gS ? void 0 : gS.speed) && void 0 !== SS ? SS : 1
+             return null !== (kk = null === (Fk = xk()) || void 0 === Fk || null === (Ik = Fk.view) || void 0 === Ik ? void 0 : Ik.speed) && void 0 !== kk ? kk : 1
```

#### 97. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1141` → after: `L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1141) · [Before (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1141)

```diff
-               null === gS ? (clearInterval(HS), SS()) : gS.Ku.includes("seek") || (clearInterval(HS), setTimeout(SS, uS))
+               null === Ik ? (clearInterval(Fk), kk()) : Ik.eq.includes("seek") || (clearInterval(Fk), setTimeout(kk, qk))
```

#### 98. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1146` → after: `L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1146) · [Before (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1146)

```diff
-             return null !== QS && null !== nS() && (!!wS() || !DS && (null !== (SS = null === (HS = nS()) || void 0 === HS || null === (gS = HS.view) || void 0 === gS ? void 0 : gS.mf) && void 0 !== SS ? SS : 0) < PS && GS() - QS < NS)
+             return null !== Kk && null !== xk() && (!!sk() || !Qk && (null !== (kk = null === (Fk = xk()) || void 0 === Fk || null === (Ik = Fk.view) || void 0 === Ik ? void 0 : Ik.Dt) && void 0 !== kk ? kk : 0) < Pk && Hk() - Kk < lk)
```

#### 99. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1160` → after: `L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1160) · [Before (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1160)

```diff
-             return null === gS ? "The replay closed before the video finished." : (null !== (SS = null === (HS = gS.view) || void 0 === HS ? void 0 : HS.mf) && void 0 !== SS ? SS : 0) >= PS ? null : DS ? "The replay stopped before the video finished." : "The replay didn't start p … [truncated]
+             return null === Ik ? "The replay closed before the video finished." : (null !== (kk = null === (Fk = Ik.view) || void 0 === Fk ? void 0 : Fk.Dt) && void 0 !== kk ? kk : 0) >= Pk ? null : Qk ? "The replay stopped before the video finished." : "The replay didn't start p … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1169` → after: `L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1169) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1169)

```diff
-           holdInput: xS.f
+           holdInput: yk.e
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445)

#### 1. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L77)

```diff
-         const KS = qS ? 1 << qS : bS,
+         const ek = ak ? 1 << ak : Tk,
```

#### 2. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L85)

```diff
-         const CS = new gS((1 == HS ? jS || GS : HS ? 0 : GS) + 12);
+         const Jk = new Ik((1 == Fk ? wk || Hk : Fk ? 0 : Hk) + 12);
```

#### 3. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L91)

```diff
-           w: HS && 1 != HS ? HS : CS.subarray(12),
+           w: Fk && 1 != Fk ? Fk : Jk.subarray(12),
```

#### 4. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L291)

```diff
-             (OS ? hS : wS)(SS.subarray(XS, XS += JS), dS.subarray(cS), bS)
+             (vk ? Vk : sk)(kk.subarray(ik, ik += Sk), Ek.subarray(Ok), Tk)
```

#### 5. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L356)

```diff
-             bS ? HS.y += OS : dS = xS(dS, 0, OS)
+             Tk ? Fk.y += vk : Ek = yk(Ek, 0, vk)
```

#### 6. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L380` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L380) · [Before (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L380)

```diff
-       if (this.parts.push(SS), this.Ku += SS.length, this.Ku < this.needed) return;
+       if (this.parts.push(kk), this.eq += kk.length, this.eq < this.needed) return;
```

#### 7. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L389` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L389) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L389)

```diff
-       })(this.parts, this.Ku);
+       })(this.parts, this.eq);
```

#### 8. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L418` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L418) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L418)

```diff
-       this.parts = bS.length ? [bS] : [], this.Ku = bS.length, tS.b = 0
+       this.parts = Tk.length ? [Tk] : [], this.eq = Tk.length, Xk.b = 0
```

#### 9. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L434)

```diff
-         this.stop(gS instanceof RangeError ? `out of memory decoding ${this.href}: ${SS(gS)}` : `${this.href} did not decode: ${SS(gS)}`)
+         this.stop(Ik instanceof RangeError ? `out of memory decoding ${this.href}: ${kk(Ik)}` : `${this.href} did not decode: ${kk(Ik)}`)
```

#### 10. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L438)

```diff
-       if (null === this.NK) {
+       if (null === this.Xe) {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L440` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L440) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L440)

```diff
-         return this.href = HS, void(this.NK = new JS(gS))
+         return this.href = Fk, void(this.Xe = new Sk(Ik))
```

#### 12. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L443)

```diff
-       const HS = this.NK;
+       const Fk = this.Xe;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89)

#### 1. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L4)

```diff
-   36432: (SS, HS, gS) => {
+   36415: (kk, Fk, Ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L13-L17` → after: `L13-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L13-L18) · [Before (L13-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L13-L17)

```diff
-     var tS = gS(369),
-       bS = gS(24),
-       XS = gS(2922),
-       xS = gS(3591),
-       NS = gS(699),
+     var Xk = Ik(318),
+       Tk = Ik(25),
+       ik = Ik(2717),
+       yk = Ik(3396),
+       lk = Ik(646),
+       ak = Ik(95),
```

#### 3. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L20-L26` → after: `L23-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L23-L26) · [Before (L20-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L20-L26)

```diff
-       IS = gS(2924),
-       fS = gS(45),
-       kS = gS(122),
-       aS = gS(362),
-       KS = gS(2953),
-       jS = gS(387),
-       GS = gS(34156);
+       jk = Ik(309),
+       ek = Ik(2744),
+       wk = Ik(337),
+       Hk = Ik(34083);
```

#### 4. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L31)

```diff
-       return `"${(SS.length>HS?`${SS.slice(0,HS)}...`:SS).replace(/[^ -~]|["\\]/g,"?")}"`
+       return `"${(kk.length>Fk?`${kk.slice(0,Fk)}...`:kk).replace(/[^ -~]|["\\]/g,"?")}"`
```

#### 5. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L41)

```diff
-       return [`loss holds ${QS(SS.lossHolds)}`, `stops packs ${QS(SS.lossStopsPack)}`, `any loss ${QS(SS.anyLoss)}`, `old intel ${QS(SS.oldIntelDriver)}`, `default off for packs ${QS(SS.defaultOffForPacks)}`, `default off reason ${null!==(HS=SS.defaultOffReason)&&void 0!==HS?HS:" … [truncated]
+       return [`loss holds ${Kk(kk.lossHolds)}`, `stops packs ${Kk(kk.lossStopsPack)}`, `any loss ${Kk(kk.anyLoss)}`, `old intel ${Kk(kk.oldIntelDriver)}`, `default off for packs ${Kk(kk.defaultOffForPacks)}`, `default off reason ${null!==(Fk=kk.defaultOffReason)&&void 0!==Fk?Fk:" … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L52)

```diff
-       return `renderer requested ${HS}, runs ${gS}, from ${tS}${null===bS?"":`, fell back: ${PS(bS,80)}`}`
+       return `renderer requested ${Fk}, runs ${Ik}, from ${Xk}${null===Tk?"":`, fell back: ${Pk(Tk,80)}`}`
```

#### 7. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L56)

```diff
-       return SS ? `stopping packs: iOS, ${null!==HS&&void 0!==HS?HS:1} losses in a row within a day` : "stopping packs"
+       return kk ? `stopping packs: iOS, ${null!==Fk&&void 0!==Fk?Fk:1} losses in a row within a day` : "stopping packs"
```

#### 8. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L61-L65` → after: `L61-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L61-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L61-L65) · [Before (L61-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L61-L65)

```diff
-       return `pick (wasm): backend ${null!==(HS=SS.backend)&&void 0!==HS?HS:"none"}, webgpu fallback ${null!==(gS=SS.reason)&&void 0!==gS?gS:"none"}, from ${null!==(tS=SS.source)&&void 0!==tS?tS:"none"}, storage pull breaks ${QS(SS.storagePullBreaks)}; packs run ${QS("webgpu"===S … [truncated]
-     }
- 
-     function JS(SS, HS, gS) {
-       return `pack ${null===SS?"(name not read)":PS(SS,CS)} ${HS}${null===gS?"":`, ${gS} variants`}`
+       return `pick (wasm): backend ${null!==(Fk=kk.backend)&&void 0!==Fk?Fk:"none"}, webgpu fallback ${null!==(Ik=kk.reason)&&void 0!==Ik?Ik:"none"}, from ${null!==(Xk=kk.source)&&void 0!==Xk?Xk:"none"}, storage pull breaks ${Kk(kk.storagePullBreaks)}; packs run ${Kk("webgpu"===k … [truncated]
+     }
+ 
+     function Sk(kk, Fk, Ik) {
+       return `pack ${null===kk?"(name not read)":Pk(kk,Jk)} ${Fk}${null===Ik?"":`, ${Ik} variants`}`
```

#### 9. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L88)

```diff
-       (0, KS.i)("webgpuloss", SS)
+       (0, ek.g)("webgpuloss", kk)
```

#### 10. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L94-L102` → after: `L94-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L94-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L94-L102) · [Before (L94-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L94-L102)

```diff
-         lossStopsPack: (0, aS.J)(),
-         anyLoss: (0, aS.m)(),
-         oldIntelDriver: !0 === fS.g.getItem(kS.I),
-         defaultOffForPacks: bS.b.isWebGpuDefaultOff(),
-         defaultOffReason: bS.b.webGpuDefaultOffReason(),
-         settingStored: fS.g.getItem(tS.mc),
-         setting: bS.b.get("clientEscMenuOptions").useWebGpu,
-         urlRenderer: uS.currentUrl.getSearchParam(IS.e),
-         storedRenderer: fS.g.getItem(IS.f)
+         lossStopsPack: (0, jk.H)(),
+         anyLoss: (0, jk.l)(),
+         oldIntelDriver: !0 === tk.j.getItem(Zk.M),
+         defaultOffForPacks: Tk.d.isWebGpuDefaultOff(),
+         defaultOffReason: Tk.d.webGpuDefaultOffReason(),
+         settingStored: tk.j.getItem(Xk.tc),
+         setting: Tk.d.get("clientEscMenuOptions").useWebGpu,
+         urlRenderer: qk.currentUrl.getSearchParam(Lk.c),
+         storedRenderer: tk.j.getItem(Lk.e)
```

#### 11. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L109)

```diff
-         if ("object" !== typeof SS) return `unreadable (${typeof SS})`;
+         if ("object" !== typeof kk) return `unreadable (${typeof kk})`;
```

#### 12. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L112)

```diff
-         return ["browser " + (HS ? "this one" : "another"), null === bS ? "no time" : `set ${((gS-bS)/jS.i).toFixed(1)} h ago`, `losses ${"number"===typeof tS.losses?tS.losses:"unset (1)"}${null!==bS&&gS-bS<jS.h?", the last within a day":""}`, `first page ${"hidden"===tS.firstPag … [truncated]
+         return ["browser " + (Fk ? "this one" : "another"), null === Tk ? "no time" : `set ${((Ik-Tk)/wk.j).toFixed(1)} h ago`, `losses ${"number"===typeof Xk.losses?Xk.losses:"unset (1)"}${null!==Tk&&Ik-Tk<wk.i?", the last within a day":""}`, `first page ${"hidden"===Xk.firstPag … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L115)

```diff
-           return "object" === typeof SS && null !== SS && SS.browser === (0, aS.l)()
+           return "object" === typeof kk && null !== kk && kk.browser === (0, jk.h)()
```

#### 14. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L123)

```diff
-       const SS = (0, aS.v)().now;
+       const kk = (0, jk.s)().now;
```

#### 15. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L132-L133` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L132-L133) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L132-L133)

```diff
-       } = (0, aS.v)(), tS = JSON.stringify(SS) === JSON.stringify(HS) ? "ia" : `now ${AS(HS)}`;
-       LS(`load (${NS.A?"wasm":"js"}, os ${(0,qS.getOperatingSystem)()}): stored loss ${AS(SS)}; ${tS}; unreported ${function(SS,HS){if(null===SS||void 0===SS||"object"!==typeof SS)return"none";const gS=SS;return HS.map((SS=>`${SS} ${"number"===typeof gS[SS]?gS[SS]:0}`)).join(", " … [truncated]
+       } = (0, jk.s)(), Xk = JSON.stringify(kk) === JSON.stringify(Fk) ? "Gj" : `now ${bk(Fk)}`;
+       pk(`load (${lk.x?"wasm":"js"}, os ${(0,ak.getOperatingSystem)()}): stored loss ${bk(kk)}; ${Xk}; unreported ${function(kk,Fk){if(null===kk||void 0===kk||"object"!==typeof kk)return"none";const Ik=kk;return Fk.map((kk=>`${kk} ${"number"===typeof Ik[kk]?Ik[kk]:0}`)).join(", " … [truncated]
```

#### 16. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L138-L140` → after: `L138-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L138-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L138-L140) · [Before (L138-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L138-L140)

```diff
-         const tS = SS.setting ? "the setting is on" : (0, GS.d)(SS.packActive, SS.defaultOffForPacks) ? "the pack forces it" : SS.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
-         return `engine (js): useWebGpu ${QS(SS.useWebGpu)} (${tS}); ${wS(HS)}; webgpu fallback ${null!==gS&&void 0!==gS?gS:"unset"}`
-       }(SS, (0, XS.i)(), (0, qS.getWebGpuFallbackReason)()))
+         const Xk = kk.setting ? "the setting is on" : (0, Hk.c)(kk.packActive, kk.defaultOffForPacks) ? "the pack forces it" : kk.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
+         return `engine (js): useWebGpu ${Kk(kk.useWebGpu)} (${Xk}); ${sk(Fk)}; webgpu fallback ${null!==Ik&&void 0!==Ik?Ik:"unset"}`
+       }(kk, (0, ik.e)(), (0, ak.getWebGpuFallbackReason)()))
```

#### 17. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L157)

```diff
-           }] = await Promise.all([gS.e(115).then((() => gS(39226))), gS.e(91).then((() => gS(41274))), gS.e(138).then((() => gS(41278)))]), qS = await bS.load();
+           }] = await Promise.all([Ik.e(115).then((() => Ik(39224))), Ik.e(91).then((() => Ik(41266))), Ik.e(138).then((() => Ik(41273)))]), ak = await Tk.load();
```

#### 18. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L159)

```diff
-           const uS = null !== (HS = XS()) && void 0 !== HS ? HS : xS(SS),
+           const qk = null !== (Fk = ik()) && void 0 !== Fk ? Fk : yk(kk),
```

#### 19. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L163)

```diff
-             text: `${"active"===qS.status?JS(qS.pack.name,"active",IS.length):JS(null,`blocked (${qS.messageKey})`,null!==(tS=null===IS||void 0===IS?void 0:IS.length)&&void 0!==tS?tS:null)}; game policy ${uS}, runs in it ${fS?"yes":"no"}`,
+             text: `${"active"===ak.status?Sk(ak.pack.name,"active",Lk.length):Sk(null,`blocked (${ak.messageKey})`,null!==(Xk=null===Lk||void 0===Lk?void 0:Lk.length)&&void 0!==Xk?Xk:null)}; game policy ${qk}, runs in it ${tk?"yes":"no"}`,
```

#### 20. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L167)

```diff
-       if (null === xS) return void(dS.noPack() && LS(`join ${XS}: no shader pack on this page (further joins without one not logged)`));
+       if (null === yk) return void(Ek.noPack() && pk(`join ${ik}: no shader pack on this page (further joins without one not logged)`));
```

#### 21. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L170)

```diff
-       if ("cap" === NS) return void LS(`join ${XS}: further joins not logged`);
+       if ("cap" === lk) return void pk(`join ${ik}: further joins not logged`);
```

#### 22. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L174-L176` → after: `L174-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L174-L176) · [Before (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L174-L176)

```diff
-               return void 0 === SS.couldntRun ? "joined" : `joined without the pack: ${SS.couldntRun}`;
-             case "Hg":
-               return "Hg";
+               return void 0 === kk.couldntRun ? "joined" : `joined without the pack: ${kk.couldntRun}`;
+             case "iI":
+               return "iI";
```

#### 23. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L178` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L178) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L178)

```diff
-               return `failed: ${SS.messageKey}`
+               return `failed: ${kk.messageKey}`
```

#### 24. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L181-L182` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L181-L182) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L181-L182)

```diff
-         uS = ("ok" === HS.status ? HS.couldntRun : "failed" === HS.status ? HS.messageKey : void 0) === OS ? `; cause: ${bS()}` : "";
-       "outcome" !== NS ? (LS(`join ${XS}: ${xS.text}`), xS.runs && (LS(`join ${XS}: needs WebGPU; ${tS()}`), LS(`join ${XS}: ${DS(YS())}`)), LS(`join ${XS}: ${qS}${uS}`)) : LS(`join ${XS}: ${qS}${uS}`)
+         qk = ("ok" === Fk.status ? Fk.couldntRun : "failed" === Fk.status ? Fk.messageKey : void 0) === vk ? `; cause: ${Tk()}` : "";
+       "outcome" !== lk ? (pk(`join ${ik}: ${yk.text}`), yk.runs && (pk(`join ${ik}: needs WebGPU; ${Xk()}`), pk(`join ${ik}: ${Qk(uk())}`)), pk(`join ${ik}: ${ak}${qk}`)) : pk(`join ${ik}: ${ak}${qk}`)
```

#### 25. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L188-L189` → after: `L188-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L188-L189) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L188-L189)

```diff
-       return zS(SS, gS, (() => `Lite runtime ${null===HS?"no":"yes, running "+(bS?"yes":"no")}; ${wS((0,XS.i)())}`), (() => {
-         return SS = cS, HS = YS(), gS = "ios" === (0, qS.getOperatingSystem)(), tS = yS(), null === SS ? "engine choice not seen" : SS.packActive ? (0, GS.d)(SS.packActive, SS.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : HS.lossSt … [truncated]
+       return ck(kk, Ik, (() => `Lite runtime ${null===Fk?"no":"yes, running "+(Tk?"yes":"no")}; ${sk((0,ik.e)())}`), (() => {
+         return kk = Ok, Fk = uk(), Ik = "ios" === (0, ak.getOperatingSystem)(), Xk = Rk(), null === kk ? "engine choice not seen" : kk.packActive ? (0, Hk.c)(kk.packActive, kk.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : Fk.lossSt … [truncated]
```

#### 26. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L200)

```diff
-         couldntRun: null !== gS && void 0 !== gS ? gS : void 0
+         couldntRun: null !== Ik && void 0 !== Ik ? Ik : void 0
```

#### 27. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L203)

```diff
-         return null === SS ? "pick not seen" : "off_after_loss" === SS.reason ? `off after a loss, ${"pack"===SS.source?hS(gS,tS):`from ${null!==(NS=SS.source)&&void 0!==NS?NS:"none"}`}` : "not_requested" === SS.reason ? `not requested, from ${null!==(xS=SS.source)&&void 0!==xS?x … [truncated]
+         return null === kk ? "pick not seen" : "off_after_loss" === kk.reason ? `off after a loss, ${"pack"===kk.source?Vk(Ik,Xk):`from ${null!==(lk=kk.source)&&void 0!==lk?lk:"none"}`}` : "not_requested" === kk.reason ? `not requested, from ${null!==(yk=kk.source)&&void 0!==yk?y … [truncated]
```

#### 28. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L213-L214` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L213-L214) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L213-L214)

```diff
-         return `loss (${SS}): ${HS}${null===gS?"":` ${PS(gS,nS)}`}; ${tS}`
-       }(SS, HS, gS, `stored ${AS((0,aS.v)().now)}; holds ${bS.lossHolds?"yes":"no"}, stops packs ${bS.lossStopsPack?"yes":"no"}`))
+         return `loss (${kk}): ${Fk}${null===Ik?"":` ${Pk(Ik,xk)}`}; ${Xk}`
+       }(kk, Fk, Ik, `stored ${bk((0,jk.s)().now)}; holds ${Tk.lossHolds?"yes":"no"}, stops packs ${Tk.lossStopsPack?"yes":"no"}`))
```

#### 29. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L217)

```diff
-   34156: (SS, HS, gS) => {
+   34083: (kk, Fk, Ik) => {
```

#### 30. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L222)

```diff
-       d: () => tS
+       c: () => Xk
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1179 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 1. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1)

```diff
- /*! For license information please see fqwnlq.worldgenWorker.d9ffe73a.chunk.js.LICENSE.txt */
+ /*! For license information please see 31kiid.worldgenWorker.375f2f92.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4)

```diff
-       1743: SS => {
+       1594: kk => {
```

#### 3. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/worldgenWorker.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/worldgenWorker.js#L82)

```diff
-             return HS === 1 / 0 ? HS : void 0 !== HS ? Math.max(0, Math.ceil(HS - gS())) : 0
+             return Fk === 1 / 0 ? Fk : void 0 !== Fk ? Math.max(0, Math.ceil(Fk - Ik())) : 0
```

#### 4. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/worldgenWorker.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/worldgenWorker.js#L151)

```diff
-       2993: SS => {
+       2781: kk => {
```

#### 5. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/worldgenWorker.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/worldgenWorker.js#L157)

```diff
-       2997: SS => {
+       2783: kk => {
```

#### 6. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/worldgenWorker.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/worldgenWorker.js#L167)

```diff
-       39801: SS => {
+       39745: kk => {
```

#### 7. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L171` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/worldgenWorker.js#L171) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/worldgenWorker.js#L171)

```diff
-             for (var xS = bS[XS] = new Array(HS), NS = XS < tS / 2 ? XS : XS + 1, qS = 1; qS <= HS; qS++) {
+             for (var yk = Tk[ik] = new Array(Fk), lk = ik < Xk / 2 ? ik : ik + 1, ak = 1; ak <= Fk; ak++) {
```

#### 8. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L178-L180` → after: `L178-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/worldgenWorker.js#L178-L180) · [Before (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/worldgenWorker.js#L178-L180)

```diff
-       2990: (SS, HS, gS) => {
-         var tS = gS(2993),
-           bS = gS(2997),
+       2775: (kk, Fk, Ik) => {
+         var Xk = Ik(2781),
+           Tk = Ik(2783),
```

#### 9. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L325-L328` → after: `L325-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L325-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/worldgenWorker.js#L325-L328) · [Before (L325-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/worldgenWorker.js#L325-L328)

```diff
-       39778: (SS, HS, gS) => {
-         var tS = gS(39783).integer,
-           bS = gS(39792),
-           XS = gS(39798);
+       39715: (kk, Fk, Ik) => {
+         var Xk = Ik(39723).integer,
+           Tk = Ik(39730),
+           ik = Ik(39736);
```

#### 10. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L392-L395` → after: `L392-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L392-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/worldgenWorker.js#L392-L395) · [Before (L392-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/worldgenWorker.js#L392-L395)

```diff
-       39803: (SS, HS, gS) => {
-         var tS = gS(39783).array,
-           bS = gS(39792),
-           XS = gS(39798);
+       39750: (kk, Fk, Ik) => {
+         var Xk = Ik(39723).array,
+           Tk = Ik(39730),
+           ik = Ik(39736);
```

#### 11. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L478-L479` → after: `L478-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/worldgenWorker.js#L478-L479) · [Before (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/worldgenWorker.js#L478-L479)

```diff
-       39798: (SS, HS, gS) => {
-         var tS = gS(39801);
+       39736: (kk, Fk, Ik) => {
+         var Xk = Ik(39745);
```

#### 12. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L498-L500` → after: `L498-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/worldgenWorker.js#L498-L500) · [Before (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/worldgenWorker.js#L498-L500)

```diff
-       39774: (SS, HS, gS) => {
-         var tS = gS(39778),
-           bS = gS(39803);
+       39712: (kk, Fk, Ik) => {
+         var Xk = Ik(39715),
+           Tk = Ik(39750);
```

#### 13. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/worldgenWorker.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/worldgenWorker.js#L521)

```diff
-       39792: SS => {
+       39730: kk => {
```

#### 14. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/worldgenWorker.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/worldgenWorker.js#L535)

```diff
-       39783: SS => {
+       39723: kk => {
```

#### 15. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L561-L562` → after: `L561-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/worldgenWorker.js#L561-L562) · [Before (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/worldgenWorker.js#L561-L562)

```diff
-       37750: (SS, HS, gS) => {
-         var tS = gS(37752);
+       37749: (kk, Fk, Ik) => {
+         var Xk = Ik(37758);
```

#### 16. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L594` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/worldgenWorker.js#L594) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/worldgenWorker.js#L594)

```diff
-       37752: (SS, HS) => {
+       37758: (kk, Fk) => {
```
