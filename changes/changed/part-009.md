# Changed — Bundle Modifications Report (Part 009 / 154)

- **Updated at**: `2026-11-28T13:51 JST`
- **Part**: `9 / 154` (**416** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 008](part-008.md) · [Part 010 →](part-010.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/107.js` (fl4vv.bd3c59ce → yteou.5361c997 · continued)

- **File**: `bundles/bloxd.io/chunks/js/107.js` (955 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa)

#### 762. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L13710` → after: `L13710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L13710) · [Before (L13710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L13710)

```diff
-   return `${Math.floor(Sr/60)}:${String(Sr%60).padStart(2,"0")}`
+   return `${Math.floor(Od/60)}:${String(Od%60).padStart(2,"0")}`
```

#### 763. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L13722` → after: `L13722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L13722) · [Before (L13722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L13722)

```diff
-   const Zr = (Wr = Qr.phase, Ir = null !== (Sr = Qr.reasoningChars) && void 0 !== Sr ? Sr : 0, "screening" === Wr ? 3 : "writing" === Wr ? 2 : "thinking" === Wr && Ir >= 400 ? 1 : 0);
+   const Wd = (Fd = md.phase, Kd = null !== (Od = md.reasoningChars) && void 0 !== Od ? Od : 0, "screening" === Fd ? 3 : "writing" === Fd ? 2 : "thinking" === Fd && Kd >= 400 ? 1 : 0);
```

#### 764. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L13726` → after: `L13726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L13726) · [Before (L13726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L13726)

```diff
-     children: (fr = !Qr.skipsSafetyCheck, fr ? wp : wp.filter((rr => "Safety check" !== rr))).map(((rr, Sr) => (0, jr.jsx)("li", {
+     children: (hd = !md.skipsSafetyCheck, hd ? DQ : DQ.filter((dd => "Safety check" !== dd))).map(((dd, Od) => (0, Xd.jsx)("li", {
```

#### 765. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L13728` → after: `L13728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L13728) · [Before (L13728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L13728)

```diff
-       children: Sr < Zr ? `\u2713 ${rr}` : rr
+       children: Od < Wd ? `\u2713 ${dd}` : dd
```

#### 766. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L13773` → after: `L13773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L13773) · [Before (L13773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L13773)

```diff
-         const Sr = "function" === typeof rr ? rr : () => rr;
+         const Od = "function" === typeof dd ? dd : () => dd;
```

#### 767. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L13779` → after: `L13779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L13779) · [Before (L13779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L13779)

```diff
-     const [pS, xS] = (0, Zr.useState)(null), [mS, NS] = (0, Zr.useState)([]), [US, tS] = (0, Zr.useState)(!1), [hS, zS] = (0, Zr.useState)([]), [YS, nS] = (0, Zr.useState)(!1), [eS, KS] = (0, Zr.useState)(!1), [yS, BS] = (0, Zr.useState)(null), [TS, vS] = (0, Zr.useState)(!1), [O … [truncated]
+     const [oO, NO] = (0, Wd.useState)(null), [qO, HO] = (0, Wd.useState)([]), [yO, bO] = (0, Wd.useState)(!1), [TO, pO] = (0, Wd.useState)([]), [YO, gO] = (0, Wd.useState)(!1), [wO, aO] = (0, Wd.useState)(!1), [EO, JO] = (0, Wd.useState)(null), [UO, xO] = (0, Wd.useState)(!1), [B … [truncated]
```

#### 768. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L13782` → after: `L13782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L13782) · [Before (L13782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L13782)

```diff
-         const Sr = JSON.parse(null !== (rr = localStorage.getItem(dp)) && void 0 !== rr ? rr : "{}");
+         const Od = JSON.parse(null !== (dd = localStorage.getItem(fQ)) && void 0 !== dd ? dd : "{}");
```

#### 769. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L13799` → after: `L13799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L13799) · [Before (L13799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L13799)

```diff
-       [bS, JS] = (0, Zr.useState)(null !== (Sr = ZS.dismissedErrorCounts.get(Vr.key)) && void 0 !== Sr ? Sr : 0),
+       [ZO, kO] = (0, Wd.useState)(null !== (Od = RO.dismissedErrorCounts.get(jd.key)) && void 0 !== Od ? Od : 0),
```

#### 770. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L13807-L13808` → after: `L13807-L13808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13807-L13808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L13807-L13808) · [Before (L13807-L13808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L13807-L13808)

```diff
-       IQ = (0, qE.s)(ir),
-       fQ = null !== aQ && void 0 !== aQ ? aQ : null === IQ || void 0 === IQ ? void 0 : IQ.entryId,
+       Qm = (0, iv.m)(Dd),
+       tm = null !== Km && void 0 !== Km ? Km : null === Qm || void 0 === Qm ? void 0 : Qm.entryId,
```

#### 771. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L13860` → after: `L13860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L13860) · [Before (L13860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L13860)

```diff
-           Wr = Math.max(Wr, Math.min(jr, Sr ? Zr(Sr) - Qr : Zr(fr)))
+           Fd = Math.max(Fd, Math.min(Xd, Od ? Wd(Od) - md : Wd(hd)))
```

#### 772. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L13921` → after: `L13921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L13921) · [Before (L13921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L13921)

```diff
-     const BQ = null !== (Wr = null === (Nr = aS.findLast((rr => rr.target.key === Vr.key))) || void 0 === Nr ? void 0 : Nr.retryAt) && void 0 !== Wr ? Wr : 0,
+     const Um = null !== (Fd = null === (Nd = KO.findLast((dd => dd.target.key === jd.key))) || void 0 === Nd ? void 0 : Nd.retryAt) && void 0 !== Fd ? Fd : 0,
```

#### 773. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L13951` → after: `L13951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L13951) · [Before (L13951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L13951)

```diff
-         return null !== (Qr = Zr) && void 0 !== Qr ? Qr : Kf(rr)
+         return null !== (md = Wd) && void 0 !== md ? md : Eh(dd)
```

#### 774. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L13991` → after: `L13991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR13991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L13991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L13991) · [Before (L13991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L13991)

```diff
-           about: jr = (null !== Sr && void 0 !== Sr ? Sr : rr.trim()),
+           about: Xd = (null !== Od && void 0 !== Od ? Od : dd.trim()),
```

#### 775. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14016` → after: `L14016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14016) · [Before (L14016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14016)

```diff
-             } = await Promise.resolve().then((() => Qr(1475)));
+             } = await Promise.resolve().then((() => md(1462)));
```

#### 776. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14022` → after: `L14022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14022) · [Before (L14022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14022)

```diff
-               middleScreenPopupContainerClassName: jj.c
+               middleScreenPopupContainerClassName: vX.d
```

#### 777. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14032` → after: `L14032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14032) · [Before (L14032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14032)

```diff
-         const lr = null !== Nr && void 0 !== Nr ? Nr : TS && !xr && void 0 === hr && void 0 === zr;
+         const Sd = null !== Nd && void 0 !== Nd ? Nd : UO && !td && void 0 === yd && void 0 === bd;
```

#### 778. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14036` → after: `L14036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14036) · [Before (L14036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14036)

```diff
-         const Xr = null !== (Zr = null !== Tr && void 0 !== Tr ? Tr : null === Or || void 0 === Or ? void 0 : Or.openPath) && void 0 !== Zr ? Zr : Hr;
+         const sd = null !== (Wd = null !== Jd && void 0 !== Jd ? Jd : null === xd || void 0 === xd ? void 0 : xd.openPath) && void 0 !== Wd ? Wd : Vd;
```

#### 779. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14041` → after: `L14041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14041) · [Before (L14041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14041)

```diff
-           Mr = Cr && !Ur.f.get(),
+           Ld = nd && !qd.g.get(),
```

#### 780. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14054` → after: `L14054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14054) · [Before (L14054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14054)

```diff
-           Dr = (br < 0 ? aS : aS.slice(0, br)).filter((rr => !rr.isNotice && !rr.leftOut && XQ(rr) && (Mr || !rr.isUnchecked))).slice(-4).map((rr => ({
+           fd = (Zd < 0 ? KO : KO.slice(0, Zd)).filter((dd => !dd.isNotice && !dd.leftOut && Vm(dd) && (Ld || !dd.isUnchecked))).slice(-4).map((dd => ({
```

#### 781. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14056` → after: `L14056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14056) · [Before (L14056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14056)

```diff
-             text: rr.question ? `${rr.text}\n${rr.question.question}` : rr.text
+             text: dd.question ? `${dd.text}\n${dd.question.question}` : dd.text
```

#### 782. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14059` → after: `L14059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14059) · [Before (L14059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14059)

```diff
-           sr = void 0 === Er ? void 0 === Sr ? Lr : void 0 : null !== Er && void 0 !== Er ? Er : void 0,
+           dO = void 0 === vd ? void 0 === Od ? Bd : void 0 : null !== vd && void 0 !== vd ? vd : void 0,
```

#### 783. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14062` → after: `L14062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14062) · [Before (L14062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14062)

```diff
-           QS = ur ? rS : void 0;
+           FO = OO ? mO : void 0;
```

#### 784. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14075` → after: `L14075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14075) · [Before (L14075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14075)

```diff
-             text: rr ? Lr : null !== Sr && void 0 !== Sr ? Sr : Lr,
+             text: dd ? Bd : null !== Od && void 0 !== Od ? Od : Bd,
```

#### 785. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14148` → after: `L14148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14148) · [Before (L14148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14148)

```diff
-               if (!wr && !gr || Mr) return null !== vr && void 0 !== vr ? vr : Lr;
+               if (!ed && !Gd || Ld) return null !== Ud && void 0 !== Ud ? Ud : Bd;
```

#### 786. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14174` → after: `L14174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14174) · [Before (L14174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14174)

```diff
-           let Er = or || Gr ? null !== vr && void 0 !== vr ? vr : Lr : await ar();
+           let vd = Cd || Pd ? null !== Ud && void 0 !== Ud ? Ud : Bd : await Rd();
```

#### 787. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14176` → after: `L14176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14176) · [Before (L14176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14176)

```diff
-           const mr = null !== (tS = null === Or || void 0 === Or ? void 0 : Or.files) && void 0 !== tS ? tS : YQ.current,
+           const od = null !== (bO = null === xd || void 0 === xd ? void 0 : xd.files) && void 0 !== bO ? bO : gm.current,
```

#### 788. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14196` → after: `L14196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14196) · [Before (L14196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14196)

```diff
-                 outline: (XS = IS(Nr, new Set(ux().callbackNames())), [XS.callbacks.length > 0 ? `Callbacks: ${XS.callbacks.join(", ")}` : "", XS.commands.length > 0 ? `Commands: ${XS.commands.join(", ")}` : "", XS.functions.length > 0 ? `Functions: ${XS.functions.join(", ")}` :  … [truncated]
+                 outline: (uO = vO(Nd, new Set(Oo().callbackNames())), [uO.callbacks.length > 0 ? `Callbacks: ${uO.callbacks.join(", ")}` : "", uO.commands.length > 0 ? `Commands: ${uO.commands.join(", ")}` : "", uO.functions.length > 0 ? `Functions: ${uO.functions.join(", ")}` :  … [truncated]
```

#### 789. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14203-L14204` → after: `L14203-L14204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14203-L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14203-L14204) · [Before (L14203-L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14203-L14204)

```diff
-               const Qr = `${rr.format} ${rr.nativeTools}`,
-                 Zr = null !== (Sr = Pr.get(Qr)) && void 0 !== Sr ? Sr : HW(ux(), Ur, rr);
+               const md = `${dd.format} ${dd.nativeTools}`,
+                 Wd = null !== (Od = ud.get(md)) && void 0 !== Od ? Od : AF(Oo(), qd, dd);
```

#### 790. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14243` → after: `L14243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14243) · [Before (L14243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14243)

```diff
-               const Ir = (0, Yr.d)(3e4, ar.signal);
+               const Kd = (0, Td.e)(3e4, Rd.signal);
```

#### 791. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14269` → after: `L14269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14269) · [Before (L14269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14269)

```diff
-                 fr || (console.warn(`World Code AI: ${Ta.name} couldn't be reached`, xr), na.jx(Ta.name, Ir.signal.aborted ? "timeout" : "network"))
+                 hd || (console.warn(`World Code AI: ${xR.name} couldn't be reached`, td), wR.Wt(xR.name, Kd.signal.aborted ? "timeout" : "network"))
```

#### 792. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14317` → after: `L14317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14317) · [Before (L14317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14317)

```diff
-           }, KS = (lS = null === (zS = lI.getState().status) || void 0 === zS ? void 0 : zS.provider, BI[null !== lS && void 0 !== lS ? lS : "ovh"]), yS = rr => {
+           }, aO = (sO = null === (pO = uK.getState().status) || void 0 === pO ? void 0 : pO.provider, UK[null !== sO && void 0 !== sO ? sO : "ovh"]), EO = dd => {
```

#### 793. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14337` → after: `L14337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14337) · [Before (L14337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14337)

```diff
-             const Zr = br < 0 ? aS : aS.slice(0, br),
+             const Wd = Zd < 0 ? KO : KO.slice(0, Zd),
```

#### 794. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14349` → after: `L14349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14349) · [Before (L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14349)

```diff
-                 Xh: HW(ux(), Ur, xr, {
+                 Ly: AF(Oo(), qd, td, {
```

#### 795. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14351` → after: `L14351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14351) · [Before (L14351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14351)

```diff
-                   Xh: !0
+                   Ly: !0
```

#### 796. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14353` → after: `L14353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14353) · [Before (L14353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14353)

```diff
-                 toolResults: [...(null !== pr && void 0 !== pr ? pr : []).flatMap((rr => rr.call ? [{
+                 toolResults: [...(null !== Qd && void 0 !== Qd ? Qd : []).flatMap((dd => dd.call ? [{
```

#### 797. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14356` → after: `L14356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14356) · [Before (L14356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14356)

```diff
-                 }] : [])), ...(null !== (rr = Ur.lookups) && void 0 !== rr ? rr : []).flatMap((rr => rr.call ? [{
+                 }] : [])), ...(null !== (dd = qd.lookups) && void 0 !== dd ? dd : []).flatMap((dd => dd.call ? [{
```

#### 798. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14358` → after: `L14358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14358) · [Before (L14358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14358)

```diff
-                   text: `${rr.about}:\n${rr.text}`
+                   text: `${dd.about}:\n${dd.text}`
```

#### 799. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14366` → after: `L14366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14366) · [Before (L14366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14366)

```diff
-                   Xh: jr,
+                   Ly: Xd,
```

#### 800. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14375` → after: `L14375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14375) · [Before (L14375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14375)

```diff
-                   Ur = null !== jr && void 0 !== jr ? jr : Sr[Sr.length - 1],
+                   qd = null !== Xd && void 0 !== Xd ? Xd : Od[Od.length - 1],
```

#### 801. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14475` → after: `L14475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14475) · [Before (L14475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14475)

```diff
-               content: (LS = null === QS || void 0 === QS || null === (YS = QS.cutShort) || void 0 === YS ? void 0 : YS.cutCall, "Your answer was cut short. Continue exactly where you stopped, from the next character: don't repeat anything or start again, and add nothing before i … [truncated]
+               content: (SO = null === FO || void 0 === FO || null === (YO = FO.cutShort) || void 0 === YO ? void 0 : YO.cutCall, "Your answer was cut short. Continue exactly where you stopped, from the next character: don't repeat anything or start again, and add nothing before i … [truncated]
```

#### 802. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14501` → after: `L14501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14501) · [Before (L14501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14501)

```diff
-                 model: gr.name ? `${gr.name} \xb7 ${gr.model.name}` : gr.model.name
+                 model: Gd.name ? `${Gd.name} \xb7 ${Gd.model.name}` : Gd.model.name
```

#### 803. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14524` → after: `L14524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14524) · [Before (L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14524)

```diff
-               }, qS = null !== (nS = KS.callFormat) && void 0 !== nS ? nS : "simple", CS = {
+               }, AO = null !== (gO = aO.callFormat) && void 0 !== gO ? gO : "simple", nO = {
```

#### 804. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14550` → after: `L14550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14550) · [Before (L14550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14550)

```diff
-                   return !Number.isFinite(Qr) || Qr <= 0 ? rr : {
+                   return !Number.isFinite(md) || md <= 0 ? dd : {
```

#### 805. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14552` → after: `L14552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14552) · [Before (L14552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14552)

```diff
-                     [Sr]: [...null !== (Zr = rr[Sr]) && void 0 !== Zr ? Zr : [], Qr].slice(-10)
+                     [Od]: [...null !== (Wd = dd[Od]) && void 0 !== Wd ? Wd : [], md].slice(-10)
```

#### 806. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14569` → after: `L14569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14569) · [Before (L14569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14569)

```diff
-             kS = QW(vS.answer, qS, Nr, Xr, GS.callbackNames(), SS ? tr.d : void 0, US, new Set([BW(Nr, Xr, SS), Xr, ...yr, ...Object.keys(null !== Kr && void 0 !== Kr ? Kr : {})].filter((rr => null !== rr))), GS.realName),
+             zO = RF(xO.answer, AO, Nd, sd, PO.callbackNames(), WO ? Hd.d : void 0, yO, new Set([UF(Nd, sd, WO), sd, ...wd, ...Object.keys(null !== gd && void 0 !== gd ? gd : {})].filter((dd => null !== dd))), PO.realName),
```

#### 807. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14608` → after: `L14608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14608) · [Before (L14608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14608)

```diff
-               return rr.flatMap((rr => ix(GS, rr, Sr && !(0, tr.f)(rr.path))))
+               return dd.flatMap((dd => jt(PO, dd, Od && !(0, Hd.h)(dd.path))))
```

#### 808. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14614` → after: `L14614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14614) · [Before (L14614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14614)

```diff
-                 return null !== (Sr = Mf(rr)) && void 0 !== Sr ? Sr : []
+                 return null !== (Od = Ph(dd)) && void 0 !== Od ? Od : []
```

#### 809. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14624` → after: `L14624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14624) · [Before (L14624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14624)

```diff
-             oS = FS.changes.filter((rr => SS && (0, tr.f)(rr.path))).map((rr => ({
+             CO = lO.changes.filter((dd => WO && (0, Hd.h)(dd.path))).map((dd => ({
```

#### 810. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14628` → after: `L14628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14628) · [Before (L14628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14628)

```diff
-             bS = FS.changes.filter((rr => !SS || !(0, tr.f)(rr.path))),
+             ZO = lO.changes.filter((dd => !WO || !(0, Hd.h)(dd.path))),
```

#### 811. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14663` → after: `L14663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14663) · [Before (L14663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14663)

```diff
-                 failedEdits: [...(null !== pr && void 0 !== pr ? pr : []).map(cx), ...IQ],
+                 failedEdits: [...(null !== Qd && void 0 !== Qd ? Qd : []).map(et), ...Qm],
```

#### 812. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14680` → after: `L14680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14680) · [Before (L14680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14680)

```diff
-             OQ = () => JS.changes.length > 0 ? "Here's a change for your code." : oS.length > 0 ? "This changes your World Code." : JS.worldCode.length > 0 ? "This needs World Code." : WQ.length > 0 ? `I'll put it into ${WQ.map((rr=>rr.path)).join(" and ")}.` : yQ ? "Quick questi … [truncated]
+             Sm = () => kO.changes.length > 0 ? "Here's a change for your code." : CO.length > 0 ? "This changes your World Code." : kO.worldCode.length > 0 ? "This needs World Code." : Xm.length > 0 ? `I'll put it into ${Xm.map((dd=>dd.path)).join(" and ")}.` : Jm ? "Quick questi … [truncated]
```

#### 813. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14689-L14690` → after: `L14689-L14690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14689-L14690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14689-L14690) · [Before (L14689-L14690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14689-L14690)

```diff
-               failedEdits: jQ.length > 0 ? jQ : void 0,
-               question: null !== yQ && void 0 !== yQ ? yQ : void 0,
+               failedEdits: hm.length > 0 ? hm : void 0,
+               question: null !== Jm && void 0 !== Jm ? Jm : void 0,
```

#### 814. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14696` → after: `L14696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14696) · [Before (L14696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14696)

```diff
-               plan: eQ.length > 0 ? eQ : void 0,
+               plan: am.length > 0 ? am : void 0,
```

#### 815. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14750` → after: `L14750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14750) · [Before (L14750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14750)

```diff
-             text: (0, qE.x)(dS),
+             text: (0, iv.q)(MO),
```

#### 816. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14790` → after: `L14790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14790) · [Before (L14790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14790)

```diff
-             }, fx.d);
+             }, ht.h);
```

#### 817. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14813` → after: `L14813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14813) · [Before (L14813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14813)

```diff
-               return `They asked: "${rr}"\nYour last answer wrote this for ${Sr}, but you hadn't seen that file, so it didn't go in. ${Sr} is open now, its code above. Put your code into it, keeping everything it already has and changing only what the request needs:\n\`\`\`js\n${ … [truncated]
+               return `They asked: "${dd}"\nYour last answer wrote this for ${Od}, but you hadn't seen that file, so it didn't go in. ${Od} is open now, its code above. Put your code into it, keeping everything it already has and changing only what the request needs:\n\`\`\`js\n${ … [truncated]
```

#### 818. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14852` → after: `L14852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14852) · [Before (L14852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14852)

```diff
-                 return `In a code block, they asked: "${rr}"\nThe code block's answer needs this part in World Code, which is open now, its code above. Put it in, keeping everything World Code already has: a callback it already defines is changed, with what it does kept, never de … [truncated]
+                 return `In a code block, they asked: "${dd}"\nThe code block's answer needs this part in World Code, which is open now, its code above. Put it in, keeping everything World Code already has: a callback it already defines is changed, with what it does kept, never de … [truncated]
```

#### 819. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14854-L14855` → after: `L14854-L14855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14854-L14855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14854-L14855) · [Before (L14854-L14855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14854-L14855)

```diff
-             aZ(null !== (eS = null === Qr || void 0 === Qr ? void 0 : Qr.request) && void 0 !== eS ? eS : Sr ? function(rr) {
-               return `In a code block, they asked for this in World Code, which is open now: ${rr}`
+             hW(null !== (wO = null === md || void 0 === md ? void 0 : md.request) && void 0 !== wO ? wO : Od ? function(dd) {
+               return `In a code block, they asked for this in World Code, which is open now: ${dd}`
```

#### 820. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14864` → after: `L14864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14864) · [Before (L14864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14864)

```diff
-             }, fQ ? rr : void 0)
+             }, tm ? dd : void 0)
```

#### 821. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14869` → after: `L14869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14869) · [Before (L14869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14869)

```diff
-             QZ(null !== rr && void 0 !== rr ? rr : JS.worldCode.length > 0 ? Tm(JS.worldCode) : "", {
+             RW(null !== dd && void 0 !== dd ? dd : kO.worldCode.length > 0 ? Uo(kO.worldCode) : "", {
```

#### 822. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14878` → after: `L14878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14878) · [Before (L14878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14878)

```diff
-               text: (0, qE.G)(DS),
+               text: (0, iv.C)(fO),
```

#### 823. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14887` → after: `L14887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14887) · [Before (L14887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14887)

```diff
-               text: qE.t,
+               text: iv.p,
```

#### 824. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14912` → after: `L14912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14912) · [Before (L14912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14912)

```diff
-             ...fS.chatGpt ? fS : {}
+             ...QO.chatGpt ? QO : {}
```

#### 825. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14936` → after: `L14936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14936) · [Before (L14936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14936)

```diff
-               text: null === Qr ? Wr : `${Wr} ${Qr}`,
+               text: null === md ? Fd : `${Fd} ${md}`,
```

#### 826. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L14942` → after: `L14942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR14942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L14942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L14942) · [Before (L14942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L14942)

```diff
-               chatGpt: null !== (KS = fS.chatGpt) && void 0 !== KS ? KS : Zr ? {
+               chatGpt: null !== (aO = QO.chatGpt) && void 0 !== aO ? aO : Wd ? {
```

#### 827. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15005` → after: `L15005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15005) · [Before (L15005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15005)

```diff
-             const ar = null !== (Qr = null === (Zr = gZ.askedFor) || void 0 === Zr ? void 0 : Zr.request) && void 0 !== Qr ? Qr : "",
+             const Rd = null !== (md = null === (Wd = nW.askedFor) || void 0 === Wd ? void 0 : Wd.request) && void 0 !== md ? md : "",
```

#### 828. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15010` → after: `L15010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15010) · [Before (L15010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15010)

```diff
-               asked: `${ar} ${rr}`,
+               asked: `${Rd} ${dd}`,
```

#### 829. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15029` → after: `L15029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15029) · [Before (L15029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15029)

```diff
-           const Wr = null !== (Zr = Qr.useFree) && void 0 !== Zr ? Zr : TS && null !== AZ;
+           const Fd = null !== (Wd = md.useFree) && void 0 !== Wd ? Wd : UO && null !== jW;
```

#### 830. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15051` → after: `L15051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15051) · [Before (L15051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15051)

```diff
-           return (null !== (Sr = Pr[Qr]) && void 0 !== Sr ? Sr : "") === Zr
+           return (null !== (Od = ud[md]) && void 0 !== Od ? Od : "") === Wd
```

#### 831. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15054` → after: `L15054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15054) · [Before (L15054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15054)

```diff
-         const rr = (null !== (jr = Zr.until) && void 0 !== jr ? jr : 0) - Date.now();
+         const dd = (null !== (Xd = Wd.until) && void 0 !== Xd ? Xd : 0) - Date.now();
```

#### 832. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15086` → after: `L15086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15086) · [Before (L15086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15086)

```diff
-       const fr = null !== (Qr = Zr.followUp) && void 0 !== Qr ? Qr : {
+       const hd = null !== (md = Wd.followUp) && void 0 !== md ? md : {
```

#### 833. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15121` → after: `L15121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15121) · [Before (L15121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15121)

```diff
-             return (null !== (Sr = Zr[rr.path]) && void 0 !== Sr ? Sr : "") !== rr.before
+             return (null !== (Od = Wd[dd.path]) && void 0 !== Od ? Od : "") !== dd.before
```

#### 834. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15132` → after: `L15132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15132) · [Before (L15132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15132)

```diff
-           return `Before "${Sr.length>200?`${Sr.slice(0,200).trimEnd()}\u2026`:Sr}"`
+           return `Before "${Od.length>200?`${Od.slice(0,200).trimEnd()}\u2026`:Od}"`
```

#### 835. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15136` → after: `L15136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15136) · [Before (L15136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15136)

```diff
-             return null !== (Sr = rr.why) && void 0 !== Sr ? Sr : []
+             return null !== (Od = dd.why) && void 0 !== Od ? Od : []
```

#### 836. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15140` → after: `L15140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15140) · [Before (L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15140)

```diff
-           return Qr.length > 400 ? `${Qr.slice(0,400).trimEnd()}\u2026` : Qr
+           return md.length > 400 ? `${md.slice(0,400).trimEnd()}\u2026` : md
```

#### 837. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15155` → after: `L15155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15155) · [Before (L15155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15155)

```diff
-               planDone: Math.max(null !== (Sr = rr.planDone) && void 0 !== Sr ? Sr : 0, Zr.index + 1)
+               planDone: Math.max(null !== (Od = dd.planDone) && void 0 !== Od ? Od : 0, Wd.index + 1)
```

#### 838. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15166` → after: `L15166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15166) · [Before (L15166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15166)

```diff
-       const Zr = null !== (rr = Sr.picked) && void 0 !== rr ? rr : Qr.changes,
+       const Wd = null !== (dd = Od.picked) && void 0 !== dd ? dd : md.changes,
```

#### 839. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15169` → after: `L15169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15169) · [Before (L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15169)

```diff
-           return (null !== (Sr = YQ.current[rr.path]) && void 0 !== Sr ? Sr : "") === rr.before
+           return (null !== (Od = gm.current[dd.path]) && void 0 !== Od ? Od : "") === dd.before
```

#### 840. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15238` → after: `L15238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15238) · [Before (L15238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15238)

```diff
-             xj: "//export",
+             tX: "//export",
```

#### 841. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15283` → after: `L15283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15283) · [Before (L15283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15283)

```diff
-             targetKey: fx.d.key,
+             targetKey: ht.h.key,
```

#### 842. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15286` → after: `L15286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15286) · [Before (L15286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15286)

```diff
-           }, Jr(fx.d)
+           }, kd(ht.h)
```

#### 843. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15306` → after: `L15306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15306) · [Before (L15306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15306)

```diff
-             targetKey: fx.d.key,
+             targetKey: ht.h.key,
```

#### 844. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15312` → after: `L15312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15312) · [Before (L15312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15312)

```diff
-           }), Jr(fx.d)
+           }), kd(ht.h)
```

#### 845. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15330` → after: `L15330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15330) · [Before (L15330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15330)

```diff
-             } : rr.result), Zr = null !== (Wr = rr.worldCodeFiles) && void 0 !== Wr ? Wr : Zr
+             } : dd.result), Wd = null !== (Fd = dd.worldCodeFiles) && void 0 !== Fd ? Fd : Wd
```

#### 846. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15340-L15341` → after: `L15340-L15341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15340-L15341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15340-L15341) · [Before (L15340-L15341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15340-L15341)

```diff
-           viewChunk: null !== or && void 0 !== or ? or : fm,
-           viewGameState: null !== br && void 0 !== br ? br : Em,
+           viewChunk: null !== Cd && void 0 !== Cd ? Cd : Qo,
+           viewGameState: null !== Zd && void 0 !== Zd ? Zd : to,
```

#### 847. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15344` → after: `L15344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15344) · [Before (L15344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15344)

```diff
-             if ("" === rr.trim()) return `No url was given: give ${zr.l}, or a page it links to.`;
+             if ("" === dd.trim()) return `No url was given: give ${bd.k}, or a page it links to.`;
```

#### 848. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15346-L15349` → after: `L15346-L15349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15346-L15349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15346-L15349) · [Before (L15346-L15349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15346-L15349)

```diff
-             if (null === Zr) return rr.includes(zr.f) ? `${rr} is every page at once, too long to read: read ${zr.l}, then the page you need.` : `Only Bloxd's docs can be read: ${zr.l} and the pages it links to.`;
-             const Wr = `There is no docs page at ${rr}. ${zr.l} lists every page with its link.`,
-               ar = `${rr} couldn't be read just now. Use get_docs instead.`,
-               jr = (0, Yr.d)(2e4, Qr);
+             if (null === Wd) return dd.includes(bd.e) ? `${dd} is every page at once, too long to read: read ${bd.k}, then the page you need.` : `Only Bloxd's docs can be read: ${bd.k} and the pages it links to.`;
+             const Fd = `There is no docs page at ${dd}. ${bd.k} lists every page with its link.`,
+               Rd = `${dd} couldn't be read just now. Use get_docs instead.`,
+               Xd = (0, Td.e)(2e4, md);
```

#### 849. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15353` → after: `L15353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15353) · [Before (L15353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15353)

```diff
-               const rr = await fetch(`${Sr}${Zr}`, {
+               const dd = await fetch(`${Od}${Wd}`, {
```

#### 850. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15365-L15366` → after: `L15365-L15366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15365-L15366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15365-L15366) · [Before (L15365-L15366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15365-L15366)

```diff
-             const Er = (0, zr.x)(Zr);
-             return null !== Er && null === Er.part && Ir.length > zr.d ? `${rr} is too long to read whole: read the part you need. Its parts start at ${hr.c}${(0,zr.s)(Er.name,0)}, and ${zr.l} says what each part has.` : Ir.length <= 4e4 ? Ir : (console.warn("AI Helper: a docs fi … [truncated]
+             const vd = (0, bd.z)(Wd);
+             return null !== vd && null === vd.part && Kd.length > bd.c ? `${dd} is too long to read whole: read the part you need. Its parts start at ${yd.c}${(0,bd.t)(vd.name,0)}, and ${bd.k} says what each part has.` : Kd.length <= 4e4 ? Kd : (console.warn("AI Helper: a docs fi … [truncated]
```

#### 851. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15374-L15376` → after: `L15374-L15376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15374-L15376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15374-L15376) · [Before (L15374-L15376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15374-L15376)

```diff
-             lookups: [...(null !== (Qr = Sr.options.lookups) && void 0 !== Qr ? Qr : []).map(cx), ...fr],
-             worldCodeFiles: null !== (Zr = Ir.worldCodeFiles) && void 0 !== Zr ? Zr : Sr.options.worldCodeFiles,
-             viewedPaths: [...null !== (Wr = Sr.options.viewedPaths) && void 0 !== Wr ? Wr : [], ...Er]
+             lookups: [...(null !== (md = Od.options.lookups) && void 0 !== md ? md : []).map(et), ...hd],
+             worldCodeFiles: null !== (Wd = Kd.worldCodeFiles) && void 0 !== Wd ? Wd : Od.options.worldCodeFiles,
+             viewedPaths: [...null !== (Fd = Od.options.viewedPaths) && void 0 !== Fd ? Fd : [], ...vd]
```

#### 852. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15392` → after: `L15392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15392) · [Before (L15392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15392)

```diff
-           trialErrors: null !== Qr && void 0 !== Qr ? Qr : Zr.trialErrors
+           trialErrors: null !== md && void 0 !== md ? md : Wd.trialErrors
```

#### 853. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15405` → after: `L15405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15405) · [Before (L15405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15405)

```diff
-         mQ(), (0, qE.c)(ir)
+         Hm(), (0, iv.b)(Dd)
```

#### 854. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15408-L15409` → after: `L15408-L15409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15408-L15409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15408-L15409) · [Before (L15408-L15409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15408-L15409)

```diff
-       if (!Dr || void 0 === (null === IQ || void 0 === IQ ? void 0 : IQ.endedAt) || (null === EQ || void 0 === EQ ? void 0 : EQ.target.key) !== Vr.key) return void(void 0 === (null === IQ || void 0 === IQ ? void 0 : IQ.endedAt) || EQ || (0, qE.p)(ir));
-       const rr = (0, qE.p)(ir);
+       if (!fd || void 0 === (null === Qm || void 0 === Qm ? void 0 : Qm.endedAt) || (null === om || void 0 === om ? void 0 : om.target.key) !== jd.key) return void(void 0 === (null === Qm || void 0 === Qm ? void 0 : Qm.endedAt) || om || (0, iv.j)(Dd));
+       const dd = (0, iv.j)(Dd);
```

#### 855. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15411` → after: `L15411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15411) · [Before (L15411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15411)

```diff
-       const Sr = (0, qE.C)(rr);
+       const Od = (0, iv.y)(dd);
```

#### 856. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15422` → after: `L15422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15422) · [Before (L15422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15422)

```diff
-         text: (0, qE.z)(rr.errors),
+         text: (0, iv.u)(dd.errors),
```

#### 857. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15431` → after: `L15431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15431) · [Before (L15431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15431)

```diff
-           forgetStatus: Sr ? "forgotten" : "sp"
+           forgetStatus: Od ? "forgotten" : "kQ"
```

#### 858. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15433` → after: `L15433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15433) · [Before (L15433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15433)

```diff
-         for (const Sr of null !== (Qr = rr.forgetNotes) && void 0 !== Qr ? Qr : []) {
+         for (const Od of null !== (md = dd.forgetNotes) && void 0 !== md ? md : []) {
```

#### 859. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15453` → after: `L15453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15453) · [Before (L15453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15453)

```diff
-             const Ir = new Map(uE(null !== (Zr = rr[Wr]) && void 0 !== Zr ? Zr : "").map((rr => [rr.key, rr.value]))),
+             const Kd = new Map(dQ(null !== (Wd = dd[Fd]) && void 0 !== Wd ? Wd : "").map((dd => [dd.key, dd.value]))),
```

#### 860. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15459` → after: `L15459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15459) · [Before (L15459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15459)

```diff
-               Sr && Sr.value !== Qr && fr.get(rr) === Sr.value && (Er = null !== (pr = rp(Er, Sr, Qr)) && void 0 !== pr ? pr : Er)
+               Od && Od.value !== md && hd.get(dd) === Od.value && (vd = null !== (Qd = OQ(vd, Od, md)) && void 0 !== Qd ? Qd : vd)
```

#### 861. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15475` → after: `L15475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15475) · [Before (L15475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15475)

```diff
-           return Sr.length > 0 ? Wp(Sr, "undoing") : 0 === rr.length ? "Before undoing settings" : `Before undoing settings: ${(rr.length>3?[...rr.slice(0,3),rr.length-3+" more"]:rr).join(", ")}`
+           return Od.length > 0 ? RQ(Od, "undoing") : 0 === dd.length ? "Before undoing settings" : `Before undoing settings: ${(dd.length>3?[...dd.slice(0,3),dd.length-3+" more"]:dd).join(", ")}`
```

#### 862. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15486` → after: `L15486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15486) · [Before (L15486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15486)

```diff
-         (0, BE.G)("aiNotes", !Sr)
+         (0, Ev.B)("aiNotes", !Od)
```

#### 863. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15488` → after: `L15488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15488) · [Before (L15488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15488)

```diff
-         (0, BE.G)("aiGameSettings", Qr)
+         (0, Ev.B)("aiGameSettings", md)
```

#### 864. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15490-L15491` → after: `L15490-L15491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15490-L15491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15490-L15491) · [Before (L15490-L15491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15490-L15491)

```diff
-         (0, BE.G)("aiEdits", Wr)
-       }), [Wr]), (0, TE.i)("aiHelperOverview")
+         (0, Ev.B)("aiEdits", Fd)
+       }), [Fd]), (0, Jv.j)("aiHelperOverview")
```

#### 865. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15529-L15530` → after: `L15529-L15530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15529-L15530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15529-L15530) · [Before (L15529-L15530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15529-L15530)

```diff
-       return null !== (Sr = null !== (Qr = null === Zr || void 0 === Zr ? void 0 : Zr.about) && void 0 !== Qr ? Qr : null === Zr || void 0 === Zr ? void 0 : Zr.text) && void 0 !== Sr ? Sr : "a change"
-     }, XZ = aS.filter(XQ), PZ = null === (nr = XZ[XZ.length - 1]) || void 0 === nr ? void 0 : nr.id, HZ = null !== (Kr = null === (yr = XZ.findLast((rr => "user" === rr.role))) || void 0 === yr ? void 0 : yr.id) && void 0 !== Kr ? Kr : 0, qZ = XZ.length < aS.length, RZ = XZ[XZ.le … [truncated]
+       return null !== (Od = null !== (md = null === Wd || void 0 === Wd ? void 0 : Wd.about) && void 0 !== md ? md : null === Wd || void 0 === Wd ? void 0 : Wd.text) && void 0 !== Od ? Od : "a change"
+     }, VW = KO.filter(Vm), iW = null === (pd = VW[VW.length - 1]) || void 0 === pd ? void 0 : pd.id, AW = null !== (gd = null === (wd = VW.findLast((dd => "user" === dd.role))) || void 0 === wd ? void 0 : wd.id) && void 0 !== gd ? gd : 0, rW = VW.length < KO.length, GW = VW[VW.le … [truncated]
```

#### 866. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15532` → after: `L15532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15532) · [Before (L15532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15532)

```diff
-       CQ(null !== (Qr = rr.retry) && void 0 !== Qr ? Qr : "", rr.retryShown, {
+       Lm(null !== (md = dd.retry) && void 0 !== md ? md : "", dd.retryShown, {
```

#### 867. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15620` → after: `L15620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15620) · [Before (L15620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15620)

```diff
-           rr.nextAt = Date.now() + (null !== (Zr = Sr[rr.count]) && void 0 !== Zr ? Zr : 0), rr.count++, lI.refresh().then((() => {
+           dd.nextAt = Date.now() + (null !== (Wd = Od[dd.count]) && void 0 !== Wd ? Wd : 0), dd.count++, uK.refresh().then((() => {
```

#### 868. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15635` → after: `L15635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15635) · [Before (L15635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15635)

```diff
-     const oZ = AZ ? `${AZ.id}/${AZ.model.id}` : null;
+     const ZW = jW ? `${jW.id}/${jW.model.id}` : null;
```

#### 869. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15641` → after: `L15641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15641) · [Before (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15641)

```diff
-       DZ = "aiAnswer" === yZ || ("aiNotes" === yZ || "aiGameSettings" === yZ || "aiGear" === yZ) && JZ ? yZ : "aiPanel",
+       MW = "aiAnswer" === JW || ("aiNotes" === JW || "aiGameSettings" === JW || "aiGear" === JW) && fW ? JW : "aiPanel",
```

#### 870. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15650` → after: `L15650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15650) · [Before (L15650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15650)

```diff
-         null === (rr = (yS ? dZ : sZ).current) || void 0 === rr || rr.focus()
+         null === (dd = (EO ? dF : OF).current) || void 0 === dd || dd.focus()
```

#### 871. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15725` → after: `L15725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15725) · [Before (L15725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15725)

```diff
-           children: "settings" === yS ? "AI settings" : lS ? `Edit ${xI(lS)} key` : "Add an API key"
+           children: "settings" === EO ? "AI settings" : sO ? `Edit ${qK(sO)} key` : "Add an API key"
```

#### 872. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15730` → after: `L15730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15730) · [Before (L15730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15730)

```diff
-             children: ["Using:", " ", AZ ? TS ? "Bot.xd (free) for the next question" : lE(AZ) : wZ ? yI : "Bot.xd (free)"]
+             children: ["Using:", " ", jW ? UO ? "Bot.xd (free) for the next question" : Sv(jW) : IW ? JK : "Bot.xd (free)"]
```

#### 873. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15816` → after: `L15816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15816) · [Before (L15816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15816)

```diff
-                   return null !== (Sr = rr.note) && void 0 !== Sr ? Sr : ""
+                   return null !== (Od = dd.note) && void 0 !== Od ? Od : ""
```

#### 874. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15832` → after: `L15832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15832) · [Before (L15832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15832)

```diff
-                 forgetNotes: ar.length > 0 ? ar : void 0
+                 forgetNotes: Rd.length > 0 ? Rd : void 0
```

#### 875. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15844` → after: `L15844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15844) · [Before (L15844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15844)

```diff
-                 Er = void 0 !== fr && (null !== (Zr = Ir[rr]) && void 0 !== Zr ? Zr : "") === NZ.current[rr] ? {
+                 vd = void 0 !== hd && (null !== (Wd = Kd[dd]) && void 0 !== Wd ? Wd : "") === yW.current[dd] ? {
```

#### 876. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15848` → after: `L15848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15848) · [Before (L15848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15848)

```diff
-                 pr = rp(null !== (Wr = Er[rr]) && void 0 !== Wr ? Wr : "", Sr, Qr);
+                 Qd = OQ(null !== (Fd = vd[dd]) && void 0 !== Fd ? Fd : "", Od, md);
```

#### 877. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15856-L15857` → after: `L15856-L15857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15856-L15857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15856-L15857) · [Before (L15856-L15857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15856-L15857)

```diff
-                 mr = `${rr}:${Sr.key}`,
-                 Nr = null !== (ar = zZ.current.get(mr)) && void 0 !== ar ? ar : Sr.value;
+                 od = `${dd}:${Od.key}`,
+                 Nd = null !== (Rd = YW.current.get(od)) && void 0 !== Rd ? Rd : Od.value;
```

#### 878. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15881` → after: `L15881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15881) · [Before (L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15881)

```diff
-               return tZ.current.includes(xr) || tZ.current.push(xr), NZ.current[rr] = null !== (jr = Er[rr]) && void 0 !== jr ? jr : "", mZ.current[rr] = pr, zQ.current = Date.now(), !0
+               return TW.current.includes(td) || TW.current.push(td), yW.current[dd] = null !== (Xd = vd[dd]) && void 0 !== Xd ? Xd : "", HW.current[dd] = Qd, Ym.current = Date.now(), !0
```

#### 879. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15908` → after: `L15908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15908) · [Before (L15908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15908)

```diff
-           editing: null !== lS && void 0 !== lS ? lS : void 0,
+           editing: null !== sO && void 0 !== sO ? sO : void 0,
```

#### 880. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15915` → after: `L15915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15915) · [Before (L15915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15915)

```diff
-         }, null !== (Tr = null === lS || void 0 === lS ? void 0 : lS.id) && void 0 !== Tr ? Tr : "new"), YS && (0, jr.jsx)(wE, {
+         }, null !== (Jd = null === sO || void 0 === sO ? void 0 : sO.id) && void 0 !== Jd ? Jd : "new"), YO && (0, Xd.jsx)(Dv, {
```

#### 881. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15918` → after: `L15918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15918) · [Before (L15918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15918)

```diff
-           zB: BZ,
+           QE: UW,
```

#### 882. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15936` → after: `L15936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15936) · [Before (L15936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15936)

```diff
-                 CQ(qE.t, pm, {
+                 Lm(iv.p, oo, {
```

#### 883. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15948` → after: `L15948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15948) · [Before (L15948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15948)

```diff
-               className: ar()("WorldCodeAiEntry", `WorldCodeAiEntry-${rr.role}`, {
+               className: Rd()("WorldCodeAiEntry", `WorldCodeAiEntry-${dd.role}`, {
```

#### 884. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15959` → after: `L15959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15959) · [Before (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15959)

```diff
-                 }), rr.keyNotice.detail && (0, jr.jsx)(of, {
+                 }), dd.keyNotice.detail && (0, Xd.jsx)(lh, {
```

#### 885. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15979` → after: `L15979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15979) · [Before (L15979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15979)

```diff
-                         files: null !== (Sr = rr.undoFiles) && void 0 !== Sr ? Sr : {}
+                         files: null !== (Od = dd.undoFiles) && void 0 !== Od ? Od : {}
```

#### 886. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L15994` → after: `L15994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR15994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L15994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L15994) · [Before (L15994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L15994)

```diff
-                         return (null !== (Sr = Wr[rr.path]) && void 0 !== Sr ? Sr : "") === rr.after
+                         return (null !== (Od = Fd[dd.path]) && void 0 !== Od ? Od : "") === dd.after
```

#### 887. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16004` → after: `L16004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16004) · [Before (L16004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16004)

```diff
-               }) : "assistant" === rr.role ? (0, jr.jsx)(Er.c, {
+               }) : "assistant" === dd.role ? (0, Xd.jsx)(vd.e, {
```

#### 888. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16023` → after: `L16023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16023) · [Before (L16023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16023)

```diff
-                       children: rr.forgetNotes.map((rr => `"${rr}"`)).join(", ")
+                       children: dd.forgetNotes.map((dd => `"${dd}"`)).join(", ")
```

#### 889. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16051` → after: `L16051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16051) · [Before (L16051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16051)

```diff
-                   return (null !== (Sr = Pr[rr.path]) && void 0 !== Sr ? Sr : "") !== rr.before
+                   return (null !== (Od = ud[dd.path]) && void 0 !== Od ? Od : "") !== dd.before
```

#### 890. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16053` → after: `L16053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16053) · [Before (L16053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16053)

```diff
-                 canEdit: tr ? qr : !!Jr && (!rr.target.codeBlock || rr.target.canChangePos),
+                 canEdit: Hd ? Ad : !!kd && (!dd.target.codeBlock || dd.target.canChangePos),
```

#### 891. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16069` → after: `L16069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16069) · [Before (L16069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16069)

```diff
-                 checkPicked: tr ? xZ : void 0,
+                 checkPicked: Hd ? qW : void 0,
```

#### 892. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16082` → after: `L16082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16082) · [Before (L16082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16082)

```diff
-                         return (null !== (Qr = Sr[rr.path]) && void 0 !== Qr ? Qr : "") !== rr.after
+                         return (null !== (md = Od[dd.path]) && void 0 !== md ? md : "") !== dd.after
```

#### 893. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16099` → after: `L16099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16099) · [Before (L16099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16099)

```diff
-                   return (null !== (Sr = Pr[rr.path]) && void 0 !== Sr ? Sr : "") === rr.after
+                   return (null !== (Od = ud[dd.path]) && void 0 !== Od ? Od : "") === dd.after
```

#### 894. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16105` → after: `L16105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16105) · [Before (L16105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16105)

```diff
-                     if (!Sr) return void CQ(`Fix this in your change: ${null===(Qr=rr.warnings)||void 0===Qr?void 0:Qr.join(" ")}`);
+                     if (!Od) return void Lm(`Fix this in your change: ${null===(md=dd.warnings)||void 0===md?void 0:md.join(" ")}`);
```

#### 895. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16119` → after: `L16119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16119) · [Before (L16119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16119)

```diff
-                       text: `Fixed without asking the AI: ${Sr.map(Vf).join(" ")}`,
+                       text: `Fixed without asking the AI: ${Od.map(Dh).join(" ")}`,
```

#### 896. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16130` → after: `L16130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16130) · [Before (L16130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16130)

```diff
-                     return Sr.length > 0 ? `${hm} These names were checked against the game and are right, so keep them: ${Sr.map((rr=>`"${rr}"`)).join(", ")}.` : hm
+                     return Od.length > 0 ? `${To} These names were checked against the game and are right, so keep them: ${Od.map((dd=>`"${dd}"`)).join(", ")}.` : To
```

#### 897. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16133` → after: `L16133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16133) · [Before (L16133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16133)

```diff
-                     return null !== (Sr = rr.swappedTo) && void 0 !== Sr ? Sr : []
+                     return null !== (Od = dd.swappedTo) && void 0 !== Od ? Od : []
```

#### 898. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16136` → after: `L16136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16136) · [Before (L16136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16136)

```diff
-                 busy: tr ? !!pS : !sQ
+                 busy: Hd ? !!oO : !OW
```

#### 899. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16142-L16144` → after: `L16142-L16144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16142-L16144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16142-L16144) · [Before (L16142-L16144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16142-L16144)

```diff
-                   const pr = null !== (Zr = null === (Wr = rr.question) || void 0 === Wr ? void 0 : Wr.question) && void 0 !== Zr ? Zr : "",
-                     xr = null !== (ar = null === (jr = rr.askedFor) || void 0 === jr ? void 0 : jr.request) && void 0 !== ar ? ar : "";
-                   CQ(bE(xr, pr, Sr), null !== Sr && void 0 !== Sr ? Sr : "Let the AI pick", {
+                   const Qd = null !== (Wd = null === (Fd = dd.question) || void 0 === Fd ? void 0 : Fd.question) && void 0 !== Wd ? Wd : "",
+                     td = null !== (Rd = null === (Xd = dd.askedFor) || void 0 === Xd ? void 0 : Xd.request) && void 0 !== Rd ? Rd : "";
+                   Lm(Cv(td, Qd, Od), null !== Od && void 0 !== Od ? Od : "Let the AI pick", {
```

#### 900. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16147-L16148` → after: `L16147-L16148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16147-L16148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16147-L16148) · [Before (L16147-L16148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16147-L16148)

```diff
-                     asked: Qr && Sr ? `${xr} ${Sr}` : null,
-                     guardWords: bE(null !== (fr = null === (Er = rr.askedFor) || void 0 === Er ? void 0 : Er.guardWords) && void 0 !== fr ? fr : "", pr, Sr)
+                     asked: md && Od ? `${td} ${Od}` : null,
+                     guardWords: Cv(null !== (hd = null === (vd = dd.askedFor) || void 0 === vd ? void 0 : vd.guardWords) && void 0 !== hd ? hd : "", Qd, Od)
```

#### 901. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16161-L16162` → after: `L16161-L16162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16161-L16162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16161-L16162) · [Before (L16161-L16162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16161-L16162)

```diff
-                 built: null !== (fr = rr.planBuilt) && void 0 !== fr ? fr : 0,
-                 done: null !== (pr = rr.planDone) && void 0 !== pr ? pr : 0,
+                 built: null !== (hd = dd.planBuilt) && void 0 !== hd ? hd : 0,
+                 done: null !== (Qd = dd.planDone) && void 0 !== Qd ? Qd : 0,
```

#### 902. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16165` → after: `L16165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16165) · [Before (L16165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16165)

```diff
-                   const Zr = null !== (Qr = rr.plan) && void 0 !== Qr ? Qr : [];
+                   const Wd = null !== (md = dd.plan) && void 0 !== md ? md : [];
```

#### 903. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16170-L16172` → after: `L16170-L16172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16170-L16172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16170-L16172) · [Before (L16170-L16172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16170-L16172)

```diff
-                       const Qr = rr.map(((rr, Qr) => `${Qr+1}. ${rr}${Qr<Sr?" (built)":""}`)).join("\n");
-                       return `Build step ${Sr+1} of our plan now: ${rr[Sr]}\nThe whole plan:\n${Qr}\nBuild only step ${Sr+1}, keeping what earlier steps built, so I can try it before the next.`
-                     }(Zr, Sr), `Build step ${Sr+1}: ${Zr[Sr]}`, {
+                       const md = dd.map(((dd, md) => `${md+1}. ${dd}${md<Od?" (built)":""}`)).join("\n");
+                       return `Build step ${Od+1} of our plan now: ${dd[Od]}\nThe whole plan:\n${md}\nBuild only step ${Od+1}, keeping what earlier steps built, so I can try it before the next.`
+                     }(Wd, Od), `Build step ${Od+1}: ${Wd[Od]}`, {
```

#### 904. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16190` → after: `L16190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16190) · [Before (L16190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16190)

```diff
-               }, "asked" === rr.noteStatus ? "asked" : "sp"), !zr && nr, rr.lookups && (0, jr.jsx)(ym, {
+               }, "asked" === dd.noteStatus ? "asked" : "kQ"), !bd && pd, dd.lookups && (0, Xd.jsx)(Eo, {
```

#### 905. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16231` → after: `L16231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16231) · [Before (L16231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16231)

```diff
-                   cr(Tm(null !== (Sr = rr.worldCode) && void 0 !== Sr ? Sr : []))
+                   Id(Uo(null !== (Od = dd.worldCode) && void 0 !== Od ? Od : []))
```

#### 906. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16233` → after: `L16233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16233) · [Before (L16233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16233)

```diff
-               }), tr && "ask" === rr.trial && rr.id > HZ && gr <= (null !== (xr = rr.trialErrors) && void 0 !== xr ? xr : 0) && (0, jr.jsxs)("div", {
+               }), Hd && "ask" === dd.trial && dd.id > AW && Gd <= (null !== (td = dd.trialErrors) && void 0 !== td ? td : 0) && (0, Xd.jsxs)("div", {
```

#### 907. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16312` → after: `L16312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16312) · [Before (L16312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16312)

```diff
-                       request: null !== (Sr = rr.retry) && void 0 !== Sr ? Sr : "",
+                       request: null !== (Od = dd.retry) && void 0 !== Od ? Od : "",
```

#### 908. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16336` → after: `L16336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16336) · [Before (L16336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16336)

```diff
-                   disabled: (null !== (mr = rr.retryAt) && void 0 !== mr ? mr : 0) > sS,
+                   disabled: (null !== (od = dd.retryAt) && void 0 !== od ? od : 0) > dm,
```

#### 909. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16342` → after: `L16342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16342) · [Before (L16342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16342)

```diff
-                   children: (null !== (Nr = rr.retryAt) && void 0 !== Nr ? Nr : 0) > sS ? `Try again in ${Om((null!==(Ur=rr.retryAt)&&void 0!==Ur?Ur:0)-sS)}` : "Try again"
+                   children: (null !== (Nd = dd.retryAt) && void 0 !== Nd ? Nd : 0) > dm ? `Try again in ${xo((null!==(qd=dd.retryAt)&&void 0!==qd?qd:0)-dm)}` : "Try again"
```

#### 910. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16368` → after: `L16368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16368) · [Before (L16368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16368)

```diff
-               title: null !== (er = rr.logTitle) && void 0 !== er ? er : rr.isCalm ? "Update" : "Problem",
+               title: null !== (Yd = dd.logTitle) && void 0 !== Yd ? Yd : dd.isCalm ? "Update" : "Problem",
```

#### 911. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16399` → after: `L16399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16399) · [Before (L16399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16399)

```diff
-             }), (qr ? SS ? Sm : rm : []).map((rr => (0, Zr.createElement)("button", {
+             }), (Ad ? WO ? Wo : mo : []).map((dd => (0, Wd.createElement)("button", {
```

#### 912. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16409` → after: `L16409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16409) · [Before (L16409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16409)

```diff
-             children: [AZ ? OS ? `Bloxd's safety check first makes sure your request is about your game, then it goes with your code to ${AZ.model.name} with your key.` : `Your request goes with your code to ${AZ.model.name} with your key, without Bloxd's safety check.` : wZ ? "d … [truncated]
+             children: [jW ? BO ? `Bloxd's safety check first makes sure your request is about your game, then it goes with your code to ${jW.model.name} with your key.` : `Your request goes with your code to ${jW.model.name} with your key, without Bloxd's safety check.` : IW ? "d … [truncated]
```

#### 913. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16428` → after: `L16428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16428) · [Before (L16428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16428)

```diff
-                 title: null !== (Or = Lm(pS)) && void 0 !== Or ? Or : "Thinking\u2026",
+                 title: null !== (xd = Bo(oO)) && void 0 !== xd ? xd : "Thinking\u2026",
```

#### 914. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16432` → after: `L16432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16432) · [Before (L16432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16432)

```diff
-                   children: [cp((null !== (Lr = pS.until) && void 0 !== Lr ? Lr : sS) - sS), " Lots of people share Bot.xd."]
+                   children: [eQ((null !== (Bd = oO.until) && void 0 !== Bd ? Bd : dm) - dm), " Lots of people share Bot.xd."]
```

#### 915. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16436` → after: `L16436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16436) · [Before (L16436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16436)

```diff
-                   }), "screening" === pS.phase && (null !== (lr = pS.until) && void 0 !== lr ? lr : 0) > sS && (0, jr.jsxs)("span", {
+                   }), "screening" === oO.phase && (null !== (Sd = oO.until) && void 0 !== Sd ? Sd : 0) > dm && (0, Xd.jsxs)("span", {
```

#### 916. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16438` → after: `L16438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16438) · [Before (L16438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16438)

```diff
-                     children: [cp((null !== (Xr = pS.until) && void 0 !== Xr ? Xr : sS) - sS), " Lots of people share the safety check."]
+                     children: [eQ((null !== (sd = oO.until) && void 0 !== sd ? sd : dm) - dm), " Lots of people share the safety check."]
```

#### 917. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16441` → after: `L16441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16441) · [Before (L16441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16441)

```diff
-                     children: pS.keyModel ? `${pS.keyModel} is answering with your key.` : pS.isSuperBot ? `${yI} is answering from your usage.` : sp(PS.current, pS.model)
+                     children: oO.keyModel ? `${oO.keyModel} is answering with your key.` : oO.isSuperBot ? `${JK} is answering from your usage.` : MQ(VO.current, oO.model)
```

#### 918. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16465` → after: `L16465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16465) · [Before (L16465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16465)

```diff
-                   children: SS ? "Your code block runs once in your world, as if you clicked it. If it shows an error, the AI fixes it." : `Your change runs in your world for ${qE.F/1e3} seconds. If it shows an error, the AI fixes it.`
+                   children: WO ? "Your code block runs once in your world, as if you clicked it. If it shows an error, the AI fixes it." : `Your change runs in your world for ${iv.A/1e3} seconds. If it shows an error, the AI fixes it.`
```

#### 919. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16479` → after: `L16479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16479) · [Before (L16479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16479)

```diff
-               children: null !== (Qr = rr.shown) && void 0 !== Qr ? Qr : rr.text
+               children: null !== (md = dd.shown) && void 0 !== md ? md : dd.text
```

#### 920. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16482` → after: `L16482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16482) · [Before (L16482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16482)

```diff
-               children: [rr.id === wQ ? "Pick Bot.xd to send it" : null !== (Zr = dx[Sr]) && void 0 !== Zr ? Zr : "In line", (0, jr.jsx)("button", {
+               children: [dd.id === Im ? "Pick Bot.xd to send it" : null !== (Wd = ft[Od]) && void 0 !== Wd ? Wd : "In line", (0, Xd.jsx)("button", {
```

#### 921. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16502` → after: `L16502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16502) · [Before (L16502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16502)

```diff
-                 Ar(null !== (rr = LQ.path) && void 0 !== rr ? rr : Hr, null !== (Sr = LQ.line) && void 0 !== Sr ? Sr : 1), (0, xr.e)() && kr()
+                 cd(null !== (dd = sm.path) && void 0 !== dd ? dd : Vd, null !== (Od = sm.line) && void 0 !== Od ? Od : 1), (0, td.f)() && zd()
```

#### 922. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16504` → after: `L16504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16504) · [Before (L16504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16504)

```diff
-               children: [LQ.path && LQ.path !== Hr ? `${LQ.path} line` : "Line", " ", LQ.line]
+               children: [sm.path && sm.path !== Vd ? `${sm.path} line` : "Line", " ", sm.line]
```

#### 923. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16517` → after: `L16517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16517) · [Before (L16517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16517)

```diff
-                 JS(gr), AQ.current(`Fix this error: ${OQ}`)
+                 kO(Gd), jm.current(`Fix this error: ${Sm}`)
```

#### 924. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16526` → after: `L16526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16526) · [Before (L16526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16526)

```diff
-                 JS(gr), AQ.current(`Explain this error in simple words, and where it is in my code: ${OQ}`)
+                 kO(Gd), jm.current(`Explain this error in simple words, and where it is in my code: ${Sm}`)
```

#### 925. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16573` → after: `L16573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16573) · [Before (L16573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16573)

```diff
-               placeholder: wS ? `How should ${mx(wS)} change?` : gZ ? "Or type your own answer here" : "Ask AI",
+               placeholder: eO ? `How should ${ot(eO)} change?` : nW ? "Or type your own answer here" : "Ask AI",
```

#### 926. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16580` → after: `L16580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16580) · [Before (L16580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16580)

```diff
-             }), (0, jr.jsx)(pr.p, {
+             }), (0, Xd.jsx)(Qd.m, {
```

#### 927. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16596` → after: `L16596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16596) · [Before (L16596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16596)

```diff
-             editsOn: qr ? HS : null,
+             editsOn: Ad ? iO : null,
```

#### 928. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16601-L16603` → after: `L16601-L16603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16601-L16603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16601-L16603) · [Before (L16601-L16603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16601-L16603)

```diff
-               if (pS) return 0 === FQ.length ? "You can type your next request: it sends when this answer is done." : 1 === FQ.length ? "1 request waiting: it sends when this answer is done." : `${FQ.length} requests waiting: they send one at a time.`;
-               if (AZ && TS) return `Your next question goes to Bot.xd, then back to ${AZ.model.name}.`;
-               if (AZ) return `Your question and code go to ${Gj(AZ.provider,AZ.baseUrl,!0)}.${OS?"":" Safety check off."}`;
+               if (oO) return 0 === Cm.length ? "You can type your next request: it sends when this answer is done." : 1 === Cm.length ? "1 request waiting: it sends when this answer is done." : `${Cm.length} requests waiting: they send one at a time.`;
+               if (jW && UO) return `Your next question goes to Bot.xd, then back to ${jW.model.name}.`;
+               if (jW) return `Your question and code go to ${zX(jW.provider,jW.baseUrl,!0)}.${BO?"":" Safety check off."}`;
```

#### 929. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16606` → after: `L16606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16606) · [Before (L16606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16606)

```diff
-                   return rr <= Sr ? null : `Limit resets in ${(0,KI.e)(Math.ceil((rr-Sr)/6e4))}`
+                   return dd <= Od ? null : `Limit resets in ${(0,EK.e)(Math.ceil((dd-Od)/6e4))}`
```

#### 930. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16618` → after: `L16618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16618) · [Before (L16618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16618)

```diff
-               return TQ > sS ? `Send now and it starts by itself. ${cp(TQ-sS)}` : null
+               return xm > dm ? `Send now and it starts by itself. ${eQ(xm-dm)}` : null
```

#### 931. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16626` → after: `L16626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16626) · [Before (L16626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16626)

```diff
-       onPrevious: "aiPanel" === DZ ? kr : void 0,
+       onPrevious: "aiPanel" === MW ? zd : void 0,
```

#### 932. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16631` → after: `L16631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16631) · [Before (L16631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16631)

```diff
- }, 41324: (rr, Sr, Qr) => {
+ }, 41335: (dd, Od, md) => {
```

#### 933. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16633-L16635` → after: `L16633-L16635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16633-L16635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16633-L16635) · [Before (L16633-L16635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16633-L16635)

```diff
-     b: () => fr,
-     f: () => ar,
-     j: () => Wr
+     d: () => hd,
+     e: () => Rd,
+     h: () => Fd
```

#### 934. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16644` → after: `L16644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16644) · [Before (L16644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16644)

```diff
-     const Sr = (null !== rr && void 0 !== rr ? rr : "").match(/-?\d+(?:\.\d+)?/g);
+     const Od = (null !== dd && void 0 !== dd ? dd : "").match(/-?\d+(?:\.\d+)?/g);
```

#### 935. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16649` → after: `L16649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16649) · [Before (L16649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16649)

```diff
-     return rr === Sr ? String(rr) : `${rr}-${Sr}`
+     return dd === Od ? String(dd) : `${dd}-${Od}`
```

#### 936. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16663` → after: `L16663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16663) · [Before (L16663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16663)

```diff
-           const rr = `${fr} ${Er} ${Wr}`,
+           const dd = `${hd} ${vd} ${Fd}`,
```

#### 937. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16677` → after: `L16677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16677) · [Before (L16677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16677)

```diff
-     return Wr.push(...ar.values()), Wr.sort(((rr, Sr) => rr.z0 - Sr.z0 || rr.x0 - Sr.x0)).map((rr => `x${jr(rr.x0,rr.x1)} z${jr(rr.z0,rr.z1)} ${rr.name}`))
+     return Fd.push(...Rd.values()), Fd.sort(((dd, Od) => dd.z0 - Od.z0 || dd.x0 - Od.x0)).map((dd => `x${Xd(dd.x0,dd.x1)} z${Xd(dd.z0,dd.z1)} ${dd.name}`))
```

#### 938. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16684-L16685` → after: `L16684-L16685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16684-L16685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16684-L16685) · [Before (L16684-L16685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16684-L16685)

```diff
-       pr = [`The chunk from ${rr.join(" ")} to ${fr.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
-     null !== Wr && pr.push(`The player's feet are at ${Wr.map(Math.floor).join(" ")}, ${Er?"in this chunk":"outside this chunk"}.`);
+       Qd = [`The chunk from ${dd.join(" ")} to ${hd.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
+     null !== Fd && Qd.push(`The player's feet are at ${Fd.map(Math.floor).join(" ")}, ${vd?"in this chunk":"outside this chunk"}.`);
```

#### 939. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16690` → after: `L16690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16690) · [Before (L16690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16690)

```diff
-       (null === ar || void 0 === ar ? void 0 : ar.boxes) === Wr ? ar.to = Zr : xr.push({
+       (null === Rd || void 0 === Rd ? void 0 : Rd.boxes) === Fd ? Rd.to = Wd : td.push({
```

#### 940. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16700` → after: `L16700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16700) · [Before (L16700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16700)

```diff
-       const rr = `y${jr(Zr.from,Zr.to)}: ${Zr.boxes}`;
+       const dd = `y${Xd(Wd.from,Wd.to)}: ${Wd.boxes}`;
```

#### 941. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16702` → after: `L16702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16702) · [Before (L16702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16702)

```diff
-         pr.push(`Cut short: the layers from y${Zr.from} up aren't shown, as there are too many blocks.`);
+         Qd.push(`Cut short: the layers from y${Wd.from} up aren't shown, as there are too many blocks.`);
```

#### 942. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16709` → after: `L16709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16709) · [Before (L16709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16709)

```diff
- }, 5636: (rr, Sr, Qr) => {
+ }, 5607: (dd, Od, md) => {
```

#### 943. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16711` → after: `L16711-L16712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16711-L16712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16711-L16712) · [Before (L16711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16711)

```diff
-     c: () => Ir,
+     d: () => Kd,
+     f: () => Fd,
```

#### 944. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16714-L16715` → after: `L16715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16715) · [Before (L16714-L16715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16714-L16715)

```diff
-     l: () => jr,
-     o: () => ar
+     k: () => Rd
```

#### 945. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16717` → after: `L16717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16717) · [Before (L16717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16717)

```diff
-   var Zr = Qr(5634);
+   var Wd = md(5599);
```

#### 946. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16726` → after: `L16726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16726) · [Before (L16726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16726)

```diff
-     jr = `${Zr.l} lists every page of the Bloxd Code API docs.`;
+     Xd = `${Wd.k} lists every page of the Bloxd Code API docs.`;
```

#### 947. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16729` → after: `L16729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16729) · [Before (L16729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16729)

```diff
-     return `${rr.url}${encodeURIComponent(Sr.toWellFormed())}`
+     return `${dd.url}${encodeURIComponent(Od.toWellFormed())}`
```

#### 948. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16742` → after: `L16742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16742) · [Before (L16742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16742)

```diff
- }, 5634: (rr, Sr, Qr) => {
+ }, 5599: (dd, Od, md) => {
```

#### 949. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16744-L16747` → after: `L16744-L16747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16744-L16747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16744-L16747) · [Before (L16744-L16747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16744-L16747)

```diff
-     d: () => Wr,
-     f: () => fr,
-     j: () => ar,
-     l: () => jr,
+     c: () => Fd,
+     e: () => hd,
+     g: () => Rd,
+     k: () => Xd,
```

#### 950. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16752-L16753` → after: `L16751-L16753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16751-L16753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16751-L16753) · [Before (L16752-L16753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16752-L16753)

```diff
-     w: () => tr,
-     x: () => Nr
+     t: () => td,
+     x: () => Hd,
+     z: () => Nd
```

#### 951. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16755` → after: `L16755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16755) · [Before (L16755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16755)

```diff
-   var Zr = Qr(1722);
+   var Wd = md(1714);
```

#### 952. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16758` → after: `L16758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16758) · [Before (L16758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16758)

```diff
-     jr = `${Zr.c}${ar}`,
+     Xd = `${Wd.c}${Rd}`,
```

#### 953. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16767` → after: `L16767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16767) · [Before (L16767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16767)

```diff
-     return `/docs/${Er(rr)}.md`
+     return `/docs/${vd(dd)}.md`
```

#### 954. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16771` → after: `L16771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16771) · [Before (L16771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16771)

```diff
-     return `/docs/${Er(rr)}/${Sr+1}.md`
+     return `/docs/${vd(dd)}/${Od+1}.md`
```

#### 955. `bundles/bloxd.io/chunks/js/107.js` (Changed code · before: `L16792` → after: `L16792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0faR16792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-bf6ce013c4fc11798c8596f802f3d342116e99a29eaabb79544637b99b0bf0fa) · [After (L16792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/107.js#L16792) · [Before (L16792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/107.js#L16792)

```diff
-     return `/docsHtml/${Er(rr)}.html`
+     return `/docsHtml/${vd(dd)}.html`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/108.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/108.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141)

#### 1. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L4)

```diff
-   45277: (rr, Sr, Qr) => {
+   45310: (dd, Od, md) => {
```

#### 2. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L6-L9` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L6-L9) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L6-L9)

```diff
-       DOCS_AGENT_PART_CHARS: () => CS.d,
-       DOCS_LLMS_FULL_TXT_PATH: () => CS.f,
-       DOCS_LLMS_TXT_PATH: () => CS.j,
-       DOCS_LLMS_TXT_URL: () => CS.l,
+       DOCS_AGENT_PART_CHARS: () => nO.c,
+       DOCS_LLMS_FULL_TXT_PATH: () => nO.e,
+       DOCS_LLMS_TXT_PATH: () => nO.g,
+       DOCS_LLMS_TXT_URL: () => nO.k,
```

#### 3. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L12)

```diff
-       arcadeModeStaticConfig: () => tr.e,
+       arcadeModeStaticConfig: () => Hd.c,
```

#### 4. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L17)

```diff
-       bloxdAggregatorConfig: () => Ir.b,
+       bloxdAggregatorConfig: () => Kd.e,
```

#### 5. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L19-L20` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L19-L20) · [Before (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L19-L20)

```diff
-       bloxdStagingAggregatorConfig: () => Er.d,
-       bridgeBattleStaticConfig: () => Ar.d,
+       bloxdStagingAggregatorConfig: () => vd.c,
+       bridgeBattleStaticConfig: () => cd.c,
```

#### 6. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L22)

```diff
-       classicStaticConfig: () => qr.e,
+       classicStaticConfig: () => Ad.b,
```

#### 7. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L25-L29` → after: `L25-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L25-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L25-L29) · [Before (L25-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L25-L29)

```diff
-       containmentBreachStaticConfig: () => rS.e,
-       cookingStaticConfig: () => wr.d,
-       coolMathGamesAggregatorConfig: () => pr.b,
-       coreDefendersStaticConfig: () => ur.d,
-       crazyGamesNinetyNineNightsBundle: () => xr.d,
+       containmentBreachStaticConfig: () => mO.b,
+       cookingStaticConfig: () => ed.e,
+       coolMathGamesAggregatorConfig: () => Qd.e,
+       coreDefendersStaticConfig: () => OO.c,
+       crazyGamesNinetyNineNightsBundle: () => td.e,
```

#### 8. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L31-L33` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L31-L33) · [Before (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L31-L33)

```diff
-       customGameSettings: () => Zr.f,
-       customGamesListingHeading: () => RS.c,
-       customGamesListingPath: () => RS.e,
+       customGameSettings: () => Wd.d,
+       customGamesListingHeading: () => rO.e,
+       customGamesListingPath: () => rO.i,
```

#### 9. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L36-L37)

```diff
-       docsPageMarkdownPath: () => CS.r,
-       docsPagePartPath: () => CS.s,
+       docsPageMarkdownPath: () => nO.s,
+       docsPagePartPath: () => nO.t,
```

#### 10. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L39)

```diff
-       docsSitePageMarkdownPath: () => CS.w,
+       docsSitePageMarkdownPath: () => nO.x,
```

#### 11. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L41)

```diff
-       doodleStaticConfig: () => Lr.e,
+       doodleStaticConfig: () => Bd.c,
```

#### 12. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L45-L47` → after: `L45-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L45-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L45-L47) · [Before (L45-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L45-L47)

```diff
-       eviltowerStaticConfig: () => Yr.d,
-       exampleStaticConfig: () => hr.d,
-       extractionStaticConfig: () => cr.d,
+       eviltowerStaticConfig: () => Td.c,
+       exampleStaticConfig: () => yd.c,
+       extractionStaticConfig: () => Id.c,
```

#### 13. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L50-L68` → after: `L50-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L50-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L50-L68) · [Before (L50-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L50-L68)

```diff
-       gameImageVariantHeights: () => BS.e,
-       gameImageVariantsEncoding: () => yS.b,
-       getAllAggregatorGameNames: () => jr.d,
-       getConfiguredGameImagePaths: () => TS.b,
-       getCustomGameFromPath: () => vS.k,
-       getCustomGameListingPage: () => RS.i,
-       getCustomGamePagePath: () => vS.o,
-       getCustomGamePageRedirectPath: () => vS.r,
-       getCustomGameSchematicIdFromPath: () => vS.v,
-       getCustomGameThumbnailCandidates: () => nS.e,
-       getCustomGameThumbnailUrls: () => nS.g,
-       getCustomGameUrlIdFromPath: () => vS.x,
-       getFirstPartyStudioGameName: () => ar.g,
-       getGameCanonicalUrl: () => vS.y,
-       getGameImageBlurhash: () => eS.b,
-       getGameImagePath: () => TS.c,
- ... (3 more removed lines; see GitHub link above)
+       gameImageVariantHeights: () => JO.c,
+       gameImageVariantsEncoding: () => EO.c,
+       getAllAggregatorGameNames: () => Xd.e,
+       getConfiguredGameImagePaths: () => UO.e,
+       getCustomGameFromPath: () => xO.j,
+       getCustomGameListingPage: () => rO.l,
+       getCustomGamePagePath: () => xO.k,
+       getCustomGamePageRedirectPath: () => xO.m,
+       getCustomGameSchematicIdFromPath: () => xO.o,
+       getCustomGameThumbnailCandidates: () => gO.c,
+       getCustomGameThumbnailUrls: () => gO.f,
+       getCustomGameUrlIdFromPath: () => xO.r,
+       getFirstPartyStudioGameName: () => Rd.f,
+       getGameCanonicalUrl: () => xO.v,
+       getGameImageBlurhash: () => wO.d,
+       getGameImagePath: () => UO.g,
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L70-L79` → after: `L70-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L70-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L70-L79) · [Before (L70-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L70-L79)

```diff
-       getGamePageContentHeadings: () => OS.f,
-       getGamePagePath: () => vS.A,
-       getGamePageRedirectPath: () => vS.C,
-       getGameSeoMetadata: () => vS.I,
-       getGameTileImagePaths: () => KS.k,
-       getIndexedCustomGameListingPaths: () => RS.j,
-       getIndexedGamePages: () => vS.M,
-       getJsonLdScriptText: () => vS.N,
-       getPathGamePageContentGame: () => vS.Q,
-       getPathSeoMetadata: () => vS.S,
+       getGamePageContentHeadings: () => BO.d,
+       getGamePagePath: () => xO.z,
+       getGamePageRedirectPath: () => xO.D,
+       getGameSeoMetadata: () => xO.K,
+       getGameTileImagePaths: () => aO.h,
+       getIndexedCustomGameListingPaths: () => rO.m,
+       getIndexedGamePages: () => xO.N,
+       getJsonLdScriptText: () => xO.Q,
+       getPathGamePageContentGame: () => xO.U,
+       getPathSeoMetadata: () => xO.Y,
```

#### 15. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L81-L88` → after: `L81-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L81-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L81-L88) · [Before (L81-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L81-L88)

```diff
-       getPlayerSeoMetadata: () => vS.V,
-       getSeoMetaTagAttributes: () => vS.Z,
-       getShaderPackPolicy: () => Zr.j,
-       getShaderPackSeoMetadata: () => vS._,
-       getStaticGameConfig: () => Zr.k,
-       getStaticPageSeoMetadata: () => vS.ab,
-       getUndescribedPageSeoMetadata: () => vS.bb,
-       goalRushStaticConfig: () => dr.d,
+       getPlayerSeoMetadata: () => xO.$,
+       getSeoMetaTagAttributes: () => xO.bb,
+       getShaderPackPolicy: () => Wd.f,
+       getShaderPackSeoMetadata: () => xO.eb,
+       getStaticGameConfig: () => Wd.j,
+       getStaticPageSeoMetadata: () => xO.hb,
+       getUndescribedPageSeoMetadata: () => xO.lb,
+       goalRushStaticConfig: () => Md.e,
```

#### 16. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L90-L97` → after: `L90-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L90-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L90-L97) · [Before (L90-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L90-L97)

```diff
-       greenvilleStaticConfig: () => lr.b,
-       heroesvbrainrotsStaticConfig: () => sr.c,
-       hideseekStaticConfig: () => Hr.b,
-       infectionStaticConfig: () => Rr.b,
-       isGameIndexed: () => vS.eb,
-       knockoutStaticConfig: () => or.b,
-       lastStandStaticConfig: () => Gr.d,
-       loadGamePageContent: () => OS.i,
+       greenvilleStaticConfig: () => Sd.e,
+       heroesvbrainrotsStaticConfig: () => dO.b,
+       hideseekStaticConfig: () => Vd.e,
+       infectionStaticConfig: () => rd.c,
+       isGameIndexed: () => xO.ob,
+       knockoutStaticConfig: () => Cd.d,
+       lastStandStaticConfig: () => Pd.b,
+       loadGamePageContent: () => BO.h,
```

#### 17. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L99` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L99) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L99)

```diff
-       luckyTowersStaticConfig: () => vr.c,
+       luckyTowersStaticConfig: () => Ud.b,
```

#### 18. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L101-L106` → after: `L101-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L101-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L101-L106) · [Before (L101-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L101-L106)

```diff
-       naturalDisasterStaticConfig: () => Cr.c,
-       ninetyNineNightsStaticConfig: () => Mr.b,
-       normaliseFirstPartyGameNames: () => ar.j,
-       oneBlockStaticConfig: () => nr.d,
-       paintballStaticConfig: () => gr.e,
-       parkourStaticConfig: () => mr.b,
+       naturalDisasterStaticConfig: () => nd.e,
+       ninetyNineNightsStaticConfig: () => Ld.c,
+       normaliseFirstPartyGameNames: () => Rd.g,
+       oneBlockStaticConfig: () => pd.b,
+       paintballStaticConfig: () => Gd.d,
+       parkourStaticConfig: () => od.e,
```

#### 19. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L108-L109` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L108-L109) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L108-L109)

```diff
-       piratesStaticConfig: () => Br.c,
-       plotsStaticConfig: () => yr.b,
+       piratesStaticConfig: () => Ed.e,
+       plotsStaticConfig: () => wd.d,
```

#### 20. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L113-L114` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L113-L114) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L113-L114)

```diff
-       rankedStaticConfig: () => Vr.e,
-       readDocsPageMarkdownPath: () => CS.x,
+       rankedStaticConfig: () => jd.c,
+       readDocsPageMarkdownPath: () => nO.z,
```

#### 21. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L116-L117` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L116-L117) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L116-L117)

```diff
-       renderSeoMetaTags: () => vS.gb,
-       rocketParkourStaticConfig: () => kr.c,
+       renderSeoMetaTags: () => xO.qb,
+       rocketParkourStaticConfig: () => zd.e,
```

#### 22. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L120-L124` → after: `L120-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L120-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L120-L124) · [Before (L120-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L120-L124)

```diff
-       shootingStaticConfig: () => Nr.b,
-       simonSaysStaticConfig: () => Fr.d,
-       skyIslandsStaticConfig: () => Dr.b,
-       skyblockStaticConfig: () => er.d,
-       skywarsStaticConfig: () => Kr.c,
+       shootingStaticConfig: () => Nd.d,
+       simonSaysStaticConfig: () => ld.c,
+       skyIslandsStaticConfig: () => fd.e,
+       skyblockStaticConfig: () => Yd.b,
+       skywarsStaticConfig: () => gd.b,
```

#### 23. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L128)

```diff
-       tsunamiStaticConfig: () => ir.d,
+       tsunamiStaticConfig: () => Dd.c,
```

#### 24. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L132` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L132) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L132)

```diff
-     var Zr = Qr(868);
+     var Wd = md(870);
```

#### 25. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L136-L141` → after: `L136-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L136-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L136-L142) · [Before (L136-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L136-L141)

```diff
-       return null !== (Sr = null === (Qr = (0, Zr.k)(rr)) || void 0 === Qr ? void 0 : Qr.defaultListedVariation) && void 0 !== Sr ? Sr : rr
-     }
-     var ar = Qr(1121),
-       jr = Qr(1144),
-       Ir = Qr(863),
-       fr = Qr(848),
+       return null !== (Od = null === (md = (0, Wd.j)(dd)) || void 0 === md ? void 0 : md.defaultListedVariation) && void 0 !== Od ? Od : dd
+     }
+     var Rd = md(1113),
+       Xd = md(1145),
+       Kd = md(866),
+       hd = md(860),
+       vd = md(864),
```

#### 26. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L143-L144` → after: `L144-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L144-L146) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L143-L144)

```diff
-       pr = Qr(843),
-       xr = Qr(835),
+       td = md(847),
+       od = md(872),
+       Nd = md(896),
```

#### 27. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L146-L163` → after: `L148-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L148-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L148-L161) · [Before (L146-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L146-L163)

```diff
-       Nr = Qr(901),
-       Ur = Qr(883),
-       tr = Qr(888),
-       hr = Qr(897),
-       zr = Qr(899),
-       Yr = Qr(905),
-       nr = Qr(914),
-       er = Qr(918),
-       Kr = Qr(929),
-       yr = Qr(931),
-       Br = Qr(935),
-       Tr = Qr(938),
-       vr = Qr(942),
-       Or = Qr(949),
-       Lr = Qr(951),
-       lr = Qr(956),
- ... (2 more removed lines; see GitHub link above)
+       Hd = md(882),
+       yd = md(890),
+       bd = md(894),
+       Td = md(902),
+       pd = md(904),
+       Yd = md(909),
+       gd = md(926),
+       wd = md(933),
+       Ed = md(941),
+       Jd = md(946),
+       Ud = md(955),
+       xd = md(959),
+       Bd = md(965),
+       Sd = md(969),
```

#### 28. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L165-L181` → after: `L163-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L163-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L163-L180) · [Before (L165-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L165-L181)

```diff
-       qr = Qr(975),
-       Rr = Qr(983),
-       gr = Qr(988),
-       Cr = Qr(996),
-       Mr = Qr(1002),
-       Gr = Qr(1009),
-       kr = Qr(1014),
-       Ar = Qr(1022),
-       Vr = Qr(1031),
-       ir = Qr(1033),
-       wr = Qr(1039),
-       cr = Qr(1043),
-       Fr = Qr(1045),
-       or = Qr(1051),
-       br = Qr(1055),
-       Jr = Qr(1063),
- ... (1 more removed lines; see GitHub link above)
+       ud = md(976),
+       Vd = md(982),
+       Ad = md(991),
+       rd = md(994),
+       Gd = md(997),
+       nd = md(999),
+       Ld = md(1005),
+       Pd = md(1007),
+       zd = md(1016),
+       cd = md(1018),
+       jd = md(1026),
+       Dd = md(1032),
+       ed = md(1040),
+       Id = md(1046),
+       ld = md(1052),
+       Cd = md(1054),
+ ... (2 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L184-L188` → after: `L184-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L184-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L184-L188) · [Before (L184-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L184-L188)

```diff
-       ur = Qr(1088),
-       rS = Qr(1097),
-       SS = Qr(1100),
-       QS = Qr(1109),
-       ZS = Qr(1113);
+       OO = md(1082),
+       mO = md(1084),
+       WO = md(1093),
+       FO = md(1098),
+       RO = md(1104);
```

#### 30. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L404-L411` → after: `L404-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L404-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L404-L411) · [Before (L404-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L404-L411)

```diff
-     var nS = Qr(1705),
-       eS = Qr(1719),
-       KS = Qr(4764),
-       yS = Qr(4774),
-       BS = Qr(1710),
-       TS = Qr(4767),
-       vS = Qr(1675),
-       OS = Qr(1729);
+     var gO = md(1698),
+       wO = md(1709),
+       aO = md(4746),
+       EO = md(4763),
+       JO = md(1705),
+       UO = md(4754),
+       xO = md(1670),
+       BO = md(1719);
```

#### 31. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L414-L433` → after: `L414-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L414-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L414-L433) · [Before (L414-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L414-L433)

```diff
-       return `<${rr}><h2>${(0,vS.g)(Sr)}</h2>${Qr}</${rr}>`
-     }
- 
-     function lS(rr) {
-       return rr.map((rr => `<p>${(0,vS.g)(rr)}</p>`)).join("")
-     }
- 
-     function XS(rr) {
-       return `<ul>${rr.map((rr=>`<li>${rr}</li>`)).join("")}</ul>`
-     }
- 
-     function PS(rr) {
-       return XS(rr.map(vS.g))
-     }
- 
-     function HS(rr, Sr) {
- ... (4 more removed lines; see GitHub link above)
+       return `<${dd}><h2>${(0,xO.g)(Od)}</h2>${md}</${dd}>`
+     }
+ 
+     function sO(dd) {
+       return dd.map((dd => `<p>${(0,xO.g)(dd)}</p>`)).join("")
+     }
+ 
+     function uO(dd) {
+       return `<ul>${dd.map((dd=>`<li>${dd}</li>`)).join("")}</ul>`
+     }
+ 
+     function VO(dd) {
+       return uO(dd.map(xO.g))
+     }
+ 
+     function iO(dd, Od) {
+ ... (4 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L439-L440` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L439-L440) · [Before (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L439-L440)

```diff
-       const Zr = await (0, OS.i)(Qr),
-         Wr = (0, OS.f)(Zr),
+       const Wd = await (0, BO.h)(md),
+         Fd = (0, BO.d)(Wd),
```

#### 33. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L446)

```diff
-           return `<h3>${(0,vS.g)(Sr)}</h3><p>${(0,vS.g)(Qr)}</p>`
+           return `<h3>${(0,xO.g)(Od)}</h3><p>${(0,xO.g)(md)}</p>`
```

#### 34. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L448-L452` → after: `L448-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L448-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L448-L452) · [Before (L448-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L448-L452)

```diff
-       return `<main style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><article>${[`<header><h1>${(0,vS.g)(Zr.name)}</h1><p>${(0,vS.g)(Zr.description)}</p></header>`,LS("section",Wr.whatIs,lS(Zr.whatIs)),LS("section",Wr.howToPlay,lS(Zr.howToPlay)) … [truncated]
-     }
-     var RS = Qr(1724),
-       gS = Qr(1722),
-       CS = Qr(5634)
+       return `<main style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><article>${[`<header><h1>${(0,xO.g)(Wd.name)}</h1><p>${(0,xO.g)(Wd.description)}</p></header>`,SO("section",Fd.whatIs,sO(Wd.whatIs)),SO("section",Fd.howToPlay,sO(Wd.howToPlay)) … [truncated]
+     }
+     var rO = md(1717),
+       GO = md(1714),
+       nO = md(5599)
```

#### 35. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L454)

```diff
-   5634: (rr, Sr, Qr) => {
+   5599: (dd, Od, md) => {
```

#### 36. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L456-L459` → after: `L456-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L456-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L456-L459) · [Before (L456-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L456-L459)

```diff
-       d: () => Wr,
-       f: () => fr,
-       j: () => ar,
-       l: () => jr,
+       c: () => Fd,
+       e: () => hd,
+       g: () => Rd,
+       k: () => Xd,
```

#### 37. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L464-L465` → after: `L463-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L463-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L463-L465) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L464-L465)

```diff
-       w: () => tr,
-       x: () => Nr
+       t: () => td,
+       x: () => Hd,
+       z: () => Nd
```

#### 38. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L467)

```diff
-     var Zr = Qr(1722);
+     var Wd = md(1714);
```

#### 39. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L470` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L470) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L470)

```diff
-       jr = `${Zr.c}${ar}`,
+       Xd = `${Wd.c}${Rd}`,
```

#### 40. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L479` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L479) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L479)

```diff
-       return `/docs/${Er(rr)}.md`
+       return `/docs/${vd(dd)}.md`
```

#### 41. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L483` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L483) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L483)

```diff
-       return `/docs/${Er(rr)}/${Sr+1}.md`
+       return `/docs/${vd(dd)}/${Od+1}.md`
```

#### 42. `bundles/bloxd.io/chunks/js/108.js` (Changed code · before: `L504` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-2a8af291b2f0e0d01c5a1c67bb50fa8939c5ce3431d18fd598bc5f2d12f4b141) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/108.js#L504) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/108.js#L504)

```diff
-       return `/docsHtml/${Er(rr)}.html`
+       return `/docsHtml/${vd(dd)}.html`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/109.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/109.js` (3925 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df)

#### 1. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1)

```diff
- /*! For license information please see fl4vv.109.c679e9d6.chunk.js.LICENSE.txt */
+ /*! For license information please see yteou.109.374be15f.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L5)

```diff
-   41252: () => {
+   41268: () => {
```

#### 3. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L8)

```diff
-   41268: (rr, Sr, Qr) => {
+   41283: (dd, Od, md) => {
```

#### 4. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L21)

```diff
-       tr = Qr(5782).e,
+       Hd = md(5737).c,
```

#### 5. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L36)

```diff
-         var mr = 0 === Er ? Qr : 1 === Er ? Zr : Wr;
+         var od = 0 === vd ? md : 1 === vd ? Wd : Fd;
```

#### 6. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L46-L47` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L46-L47) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L46-L47)

```diff
-           var er = hr > 0 ? (pr[Er] - jr[Er]) / hr : (xr[Er] - ar[Er]) / hr,
-             Kr = hr > 0 ? (xr[Er] - fr - ar[Er]) / hr : (pr[Er] + fr - jr[Er]) / hr;
+           var Yd = yd > 0 ? (Qd[vd] - Xd[vd]) / yd : (td[vd] - Rd[vd]) / yd,
+             gd = yd > 0 ? (td[vd] - hd - Rd[vd]) / yd : (Qd[vd] + hd - Xd[vd]) / yd;
```

#### 7. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L74-L75` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L74-L75) · [Before (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L74-L75)

```diff
-         var er = Nr ? zr + 1 - tr : tr - zr;
-         er < 0 && (er = 0), fr[mr] = nr < 1 / 0 ? nr * er : 1 / 0
+         var Yd = Nd ? bd + 1 - Hd : Hd - bd;
+         Yd < 0 && (Yd = 0), hd[od] = pd < 1 / 0 ? pd * Yd : 1 / 0
```

#### 8. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L156-L157` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L156-L157) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L156-L157)

```diff
-           var Ar = lr ? tr : 1;
-           if (Cr > 0 ? xr[yr] = Math.round(xr[yr] * Ar) / Ar : Er[yr] = Math.round(Er[yr] * Ar) / Ar, Sr(er, yr, Cr, Mr)) return er;
+           var cd = Sd ? Hd : 1;
+           if (nd > 0 ? td[wd] = Math.round(td[wd] * cd) / cd : vd[wd] = Math.round(vd[wd] * cd) / cd, Od(Yd, wd, nd, Ld)) return Yd;
```

#### 9. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L186)

```diff
-   41324: (rr, Sr, Qr) => {
+   41335: (dd, Od, md) => {
```

#### 10. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L188-L190` → after: `L188-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L188-L190) · [Before (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L188-L190)

```diff
-       b: () => fr,
-       f: () => ar,
-       j: () => Wr
+       d: () => hd,
+       e: () => Rd,
+       h: () => Fd
```

#### 11. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L199)

```diff
-       const Sr = (null !== rr && void 0 !== rr ? rr : "").match(/-?\d+(?:\.\d+)?/g);
+       const Od = (null !== dd && void 0 !== dd ? dd : "").match(/-?\d+(?:\.\d+)?/g);
```

#### 12. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L204)

```diff
-       return rr === Sr ? String(rr) : `${rr}-${Sr}`
+       return dd === Od ? String(dd) : `${dd}-${Od}`
```

#### 13. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L218)

```diff
-             const rr = `${fr} ${Er} ${Wr}`,
+             const dd = `${hd} ${vd} ${Fd}`,
```

#### 14. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L232)

```diff
-       return Wr.push(...ar.values()), Wr.sort(((rr, Sr) => rr.z0 - Sr.z0 || rr.x0 - Sr.x0)).map((rr => `x${jr(rr.x0,rr.x1)} z${jr(rr.z0,rr.z1)} ${rr.name}`))
+       return Fd.push(...Rd.values()), Fd.sort(((dd, Od) => dd.z0 - Od.z0 || dd.x0 - Od.x0)).map((dd => `x${Xd(dd.x0,dd.x1)} z${Xd(dd.z0,dd.z1)} ${dd.name}`))
```

#### 15. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L239-L240` → after: `L239-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L239-L240) · [Before (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L239-L240)

```diff
-         pr = [`The chunk from ${rr.join(" ")} to ${fr.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
-       null !== Wr && pr.push(`The player's feet are at ${Wr.map(Math.floor).join(" ")}, ${Er?"in this chunk":"outside this chunk"}.`);
+         Qd = [`The chunk from ${dd.join(" ")} to ${hd.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
+       null !== Fd && Qd.push(`The player's feet are at ${Fd.map(Math.floor).join(" ")}, ${vd?"in this chunk":"outside this chunk"}.`);
```

#### 16. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L245)

```diff
-         (null === ar || void 0 === ar ? void 0 : ar.boxes) === Wr ? ar.to = Zr : xr.push({
+         (null === Rd || void 0 === Rd ? void 0 : Rd.boxes) === Fd ? Rd.to = Wd : td.push({
```

#### 17. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L255)

```diff
-         const rr = `y${jr(Zr.from,Zr.to)}: ${Zr.boxes}`;
+         const dd = `y${Xd(Wd.from,Wd.to)}: ${Wd.boxes}`;
```

#### 18. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L257)

```diff
-           pr.push(`Cut short: the layers from y${Zr.from} up aren't shown, as there are too many blocks.`);
+           Qd.push(`Cut short: the layers from y${Wd.from} up aren't shown, as there are too many blocks.`);
```

#### 19. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L265)

```diff
-   41333: (rr, Sr, Qr) => {
+   41340: (dd, Od, md) => {
```

#### 20. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L273)

```diff
-   40828: (rr, Sr, Qr) => {
+   40858: (dd, Od, md) => {
```

#### 21. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L277-L279` → after: `L277-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L277-L279) · [Before (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L277-L279)

```diff
-     var Zr = Qr(1904),
-       Wr = Qr(1475),
-       ar = Qr(72),
+     var Wd = md(1906),
+       Fd = md(1462),
+       Rd = md(66),
```

#### 22. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L282-L283` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L282-L283) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L282-L283)

```diff
-       fr = Qr(1576),
-       Er = Qr(109);
+       hd = md(1572),
+       vd = md(107);
```

#### 23. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L288` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L288) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L288)

```diff
-       return "webm" === rr ? pr : xr
+       return "webm" === dd ? Qd : td
```

#### 24. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L300` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L300) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L300)

```diff
-     var tr = Qr(1338);
+     var Hd = md(1341);
```

#### 25. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L369)

```diff
-             children: `Your device does not support exporting. Try recording with an external software like ${rr}.`
+             children: `Your device does not support exporting. Try recording with an external software like ${dd}.`
```

#### 26. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L372` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L372) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L372)

```diff
-             children: (0, tr.jsx)(fr.L, {
+             children: (0, Hd.jsx)(hd.G, {
```

#### 27. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L444)

```diff
-           children: [(0, tr.jsx)(fr.p, {
+           children: [(0, Hd.jsx)(hd.m, {
```

#### 28. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L454)

```diff
-           }), (0, tr.jsx)(fr.L, {
+           }), (0, Hd.jsx)(hd.G, {
```

#### 29. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L464-L466` → after: `L464-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L464-L466) · [Before (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L464-L466)

```diff
-     var er = Qr(5681),
-       Kr = Qr(38462),
-       yr = Qr(38464);
+     var Yd = md(5641),
+       gd = md(38529),
+       wd = md(38538);
```

#### 30. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L471` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L471) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L471)

```diff
-         const rr = (0, yr.c)();
+         const dd = (0, wd.e)();
```

#### 31. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L476)

```diff
-           of Kr.e)
+           of gd.d)
```

#### 32. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L505)

```diff
-     var Or = Qr(40646);
+     var xd = md(40652);
```

#### 33. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L513` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L513) · [Before (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L513)

```diff
-       if ((0, Or.e)() || Lr) return;
+       if ((0, xd.d)() || Bd) return;
```

#### 34. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L555` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L555) · [Before (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L555)

```diff
-       const pr = null !== (Sr = null === (Qr = ar.startFailure) || void 0 === Qr ? void 0 : Qr.call(ar)) && void 0 !== Sr ? Sr : null;
+       const Qd = null !== (Od = null === (md = Rd.startFailure) || void 0 === md ? void 0 : md.call(Rd)) && void 0 !== Od ? Od : null;
```

#### 35. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L561` → after: `L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L561) · [Before (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L561)

```diff
-           return !(0, Or.e)() && ((0, Or.f)(!0), rr.holdInput(!0), !0)
+           return !(0, xd.d)() && ((0, xd.f)(!0), dd.holdInput(!0), !0)
```

#### 36. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L565)

```diff
-         xr = await vr(jr.includeUi, (() => ar.canvas()), ar.pC)
+         td = await Ud(Xd.includeUi, (() => Rd.canvas()), Rd.wV)
```

#### 37. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L578` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L578) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L578)

```diff
-         Ur = ar.playbackSpeed(), ar.closeViewer(), ar.setPlaybackSpeed(1), ar.pause(), ar.seekToTick(null !== Ir && void 0 !== Ir ? Ir : 0);
+         qd = Rd.playbackSpeed(), Rd.closeViewer(), Rd.setPlaybackSpeed(1), Rd.pause(), Rd.seekToTick(null !== Kd && void 0 !== Kd ? Kd : 0);
```

#### 38. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L586` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L586) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L586)

```diff
-           return null !== Qr && void 0 !== Qr ? Qr : null
+           return null !== md && void 0 !== md ? md : null
```

#### 39. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L593)

```diff
-           if (!Sr) throw new Error(`No MediaRecorder mime type available for ${rr}`);
+           if (!Od) throw new Error(`No MediaRecorder mime type available for ${dd}`);
```

#### 40. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L636` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L636) · [Before (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L636)

```diff
-         const pr = null !== (yr = null === (Xr = ar.playbackFailure) || void 0 === Xr ? void 0 : Xr.call(ar)) && void 0 !== yr ? yr : null;
+         const Qd = null !== (wd = null === (sd = Rd.playbackFailure) || void 0 === sd ? void 0 : sd.call(Rd)) && void 0 !== wd ? wd : null;
```

#### 41. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L639` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L639) · [Before (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L639)

```diff
-           subtitle: `${pr} Nothing was saved.`
+           subtitle: `${Qd} Nothing was saved.`
```

#### 42. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L644` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L644) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L644)

```diff
-         tr.size > 0 ? (0, Zr.c)(tr, function(rr, Sr) {
+         Hd.size > 0 ? (0, Wd.e)(Hd, function(dd, Od) {
```

#### 43. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L648-L649` → after: `L648-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L648-L649) · [Before (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L648-L649)

```diff
-           if (rr) return `${rr.replace(/\.bloxdreplay$/i,"")}.${Qr}`;
-           return `bloxd-replay-${Date.now()}.${Qr}`
+           if (dd) return `${dd.replace(/\.bloxdreplay$/i,"")}.${md}`;
+           return `bloxd-replay-${Date.now()}.${md}`
```

#### 44. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L682` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L682) · [Before (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L682)

```diff
-   5675: (rr, Sr, Qr) => {
+   5632: (dd, Od, md) => {
```

#### 45. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L684-L685` → after: `L684-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L684-L685) · [Before (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L684-L685)

```diff
-       e: () => pr,
-       h: () => xr
+       b: () => Qd,
+       f: () => td
```

#### 46. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L687-L688` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L687-L688) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L687-L688)

```diff
-     var Zr = Qr(5681),
-       Wr = Qr(26);
+     var Wd = md(5641),
+       Fd = md(29);
```

#### 47. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L745` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L745) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L745)

```diff
-       if (!ar || !jr || !Wr.c.get("soundOnFromAd")) return () => {};
+       if (!Rd || !Xd || !Fd.e.get("soundOnFromAd")) return () => {};
```

#### 48. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L747` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L747) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L747)

```diff
-       return null === (Qr = Ir._autoResume) || void 0 === Qr || Qr.call(Ir), pr(ar, jr, rr, Sr, Wr.c.get("soundVolume"), (() => {
+       return null === (md = Kd._autoResume) || void 0 === md || md.call(Kd), Qd(Rd, Xd, dd, Od, Fd.e.get("soundVolume"), (() => {
```

#### 49. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L753` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L753) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L753)

```diff
-   37811: (rr, Sr, Qr) => {
+   37908: (dd, Od, md) => {
```

#### 50. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L761-L764` → after: `L761-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L761-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L761-L764) · [Before (L761-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L761-L764)

```diff
-     var Zr = Qr(5617),
-       Wr = Qr(3909),
-       ar = Qr(2049);
-     const jr = new Map(Object.entries(Zr.k).map((rr => {
+     var Wd = md(5571),
+       Fd = md(3903),
+       Rd = md(2057);
+     const Xd = new Map(Object.entries(Wd.n).map((dd => {
```

#### 51. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L774` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L774) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L774)

```diff
-       return `camera set by ${jr.get(rr[Sr+1])}: heading ${`${Ir(rr[Sr+2])} -> ${Ir(rr[Sr+4])}`} deg, pitch ${`${Ir(rr[Sr+3])} -> ${Ir(rr[Sr+5])}`} deg, at ${rr[Sr].toFixed(1)} ms`
+       return `camera set by ${Xd.get(dd[Od+1])}: heading ${`${Kd(dd[Od+2])} -> ${Kd(dd[Od+4])}`} deg, pitch ${`${Kd(dd[Od+3])} -> ${Kd(dd[Od+5])}`} deg, at ${dd[Od].toFixed(1)} ms`
```

#### 52. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L776` → after: `L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L776) · [Before (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L776)

```diff
-     var Er = Qr(37815);
+     var vd = md(37915);
```

#### 53. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L788` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L788) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L788)

```diff
-         this.frames = 0, this.looked = 0, this.idle = 0, this.tC = 0, this.pastLimit = 0, this.lockSkips = 0, this.Xh = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
+         this.frames = 0, this.looked = 0, this.idle = 0, this.sV = 0, this.pastLimit = 0, this.lockSkips = 0, this.Ly = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
```

#### 54. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L791)

```diff
-         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.tC > 0 || this.dropped > 0 || this.cameraSets > 0
+         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.sV > 0 || this.dropped > 0 || this.cameraSets > 0
```

#### 55. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L794` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L794) · [Before (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L794)

```diff
-         return this.tC > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
+         return this.sV > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
```

#### 56. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L800)

```diff
-         this.topicOn = (0, Wr.p)("look"), this.remote = (0, Wr.t)(), this.tally = new Nr, this.takes = null, this.started = !1, this.record = function(Sr) {
+         this.topicOn = (0, Fd.o)("look"), this.remote = (0, Fd.q)(), this.tally = new Nd, this.takes = null, this.started = !1, this.record = function(Od) {
```

#### 57. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L802` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L802) · [Before (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L802)

```diff
-           if (Er.k.step(Sr, Qr), !rr.topicOn) return;
+           if (vd.o.step(Od, md), !dd.topicOn) return;
```

#### 58. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L815` → after: `L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L815) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L815)

```diff
-             case Er.h.idle:
+             case vd.m.idle:
```

#### 59. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L817-L820` → after: `L817-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L817-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L817-L820) · [Before (L817-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L817-L820)

```diff
-             case Er.h.Xh:
-               return void hr.Xh++;
-             case Er.h.YC:
-               return hr.lockSkips++, void(0 === ar && 0 === jr || rr.outlier(`lock skip dropped raw (${xr(ar)}, ${xr(jr)}) at ${mr(Zr)} ms`))
+             case vd.m.Ly:
+               return void yd.Ly++;
+             case vd.m.rV:
+               return yd.lockSkips++, void(0 === Rd && 0 === Xd || dd.outlier(`lock skip dropped raw (${td(Rd)}, ${td(Xd)}) at ${od(Wd)} ms`))
```

#### 60. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L824-L825` → after: `L824-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L824-L825) · [Before (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L824-L825)

```diff
-             Yr = `raw (${xr(ar)}, ${xr(jr)}) over ${mr(Wr)} ms, limit ${xr(tr)}, filter v (${Nr.toFixed(3)}, ${Ur.toFixed(3)}) px/ms, at ${mr(Zr)} ms`;
-           pr === Er.h.tC ? (hr.tC++, rr.outlier(`spike put right: ${Yr} -> turned (${xr(Ir)}, ${xr(fr)})`)) : zr ? (hr.pastLimit++, rr.outlier(`kept past limit: ${Yr}`)) : Wr > 50 && (hr.longFrames++, rr.remote || rr.outlier(`long frame: ${Yr}, turned in full`))
+             Td = `raw (${td(Rd)}, ${td(Xd)}) over ${od(Fd)} ms, limit ${td(Hd)}, filter v (${Nd.toFixed(3)}, ${qd.toFixed(3)}) px/ms, at ${od(Wd)} ms`;
+           Qd === vd.m.sV ? (yd.sV++, dd.outlier(`spike put right: ${Td} -> turned (${td(Kd)}, ${td(hd)})`)) : bd ? (yd.pastLimit++, dd.outlier(`kept past limit: ${Td}`)) : Fd > 50 && (yd.longFrames++, dd.remote || dd.outlier(`long frame: ${Td}, turned in full`))
```

#### 61. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L828` → after: `L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L828) · [Before (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L828)

```diff
-           if (Er.k.mouseMove(rr, Sr), !this.topicOn) return;
+           if (vd.o.mouseMove(dd, Od), !this.topicOn) return;
```

#### 62. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L836` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L836) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L836)

```diff
-           Qr.eventMax = Math.max(Qr.eventMax, ar), ar >= 200 && (Qr.bigEvents++, this.eventOutlier(`big mousemove (${Zr}, ${Wr}) at ${mr(rr.timeStamp)} ms, lock ${Sr?"wI":"free"}`))
+           md.eventMax = Math.max(md.eventMax, Rd), Rd >= 200 && (md.bigEvents++, this.eventOutlier(`big mousemove (${Wd}, ${Fd}) at ${od(dd.timeStamp)} ms, lock ${Od?"jK":"free"}`))
```

#### 63. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L839` → after: `L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L839) · [Before (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L839)

```diff
-           rr ? Er.k.lockGained() : Er.k.change(Er.d.lockLost), this.topicOn && (0, Wr.l)("look", `pointer lock ${rr?`gained (${rr.tagName.toLowerCase()})`:"lost"} at ${mr(performance.now())} ms`)
+           dd ? vd.o.lockGained() : vd.o.change(vd.d.lockLost), this.topicOn && (0, Fd.k)("look", `pointer lock ${dd?`gained (${dd.tagName.toLowerCase()})`:"lost"} at ${od(performance.now())} ms`)
```

#### 64. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L841` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L841) · [Before (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L841)

```diff
-           Er.k.change(Er.d.lockError), this.topicOn && (0, Wr.l)("look", `pointer lock request failed at ${mr(performance.now())} ms`)
+           vd.o.change(vd.d.lockError), this.topicOn && (0, Fd.k)("look", `pointer lock request failed at ${od(performance.now())} ms`)
```

#### 65. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L843` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L843) · [Before (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L843)

```diff
-           Er.k.change("hidden" === document.visibilityState ? Er.d.hidden : Er.d.visible), this.topicOn && (0, Wr.l)("look", `page ${document.visibilityState} at ${mr(performance.now())} ms`)
+           vd.o.change("hidden" === document.visibilityState ? vd.d.hidden : vd.d.visible), this.topicOn && (0, Fd.k)("look", `page ${document.visibilityState} at ${od(performance.now())} ms`)
```

#### 66. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L845` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L845) · [Before (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L845)

```diff
-           Er.k.change(Er.d.focus)
+           vd.o.change(vd.d.focus)
```

#### 67. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L847` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L847) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L847)

```diff
-           Er.k.change(Er.d.blur)
+           vd.o.change(vd.d.blur)
```

#### 68. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L853-L854` → after: `L853-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L853-L854) · [Before (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L853-L854)

```diff
-             Qr = [`${rr.frames} frames (${rr.looked} looked, ${rr.idle} idle${"wasm"===Er.k.client?`, ${rr.Xh} carried`:""})`, `dt avg ${mr(Sr)} min ${mr(rr.dtMin)} max ${mr(rr.dtMax)}, ${rr.longFrames} long`, `${rr.events} mousemoves (max ${xr(rr.eventMax)} px, ${rr.bigEvents} b … [truncated]
-           rr.dropped > 0 && Qr.push(`${rr.dropped} doubled spike copies dropped`), rr.cameraSets > 0 && Qr.push(`${rr.cameraSets} camera sets`), rr.cameraSetsLost > 0 && Qr.push(`${rr.cameraSetsLost} camera set records lost`), rr.lost > 0 && Qr.push(`${rr.lost} records lost`), rr … [truncated]
+             md = [`${dd.frames} frames (${dd.looked} looked, ${dd.idle} idle${"wasm"===vd.o.client?`, ${dd.Ly} carried`:""})`, `dt avg ${od(Od)} min ${od(dd.dtMin)} max ${od(dd.dtMax)}, ${dd.longFrames} long`, `${dd.events} mousemoves (max ${td(dd.eventMax)} px, ${dd.bigEvents} b … [truncated]
+           dd.dropped > 0 && md.push(`${dd.dropped} doubled spike copies dropped`), dd.cameraSets > 0 && md.push(`${dd.cameraSets} camera sets`), dd.cameraSetsLost > 0 && md.push(`${dd.cameraSetsLost} camera set records lost`), dd.lost > 0 && md.push(`${dd.lost} records lost`), dd … [truncated]
```

#### 69. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L858)

```diff
-         if (Er.k.start(rr, null !== document.pointerLockElement), this.takes = Sr, this.topicOn) {
+         if (vd.o.start(dd, null !== document.pointerLockElement), this.takes = Od, this.topicOn) {
```

#### 70. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L862` → after: `L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L862) · [Before (L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L862)

```diff
-           (0, Wr.l)("look", `start: ${rr} client, dpr ${window.devicePixelRatio}, screen ${Sr.width}x${Sr.height}, pointer lock ${document.pointerLockElement?"wI":"free"}`)
+           (0, Fd.k)("look", `start: ${dd} client, dpr ${window.devicePixelRatio}, screen ${Od.width}x${Od.height}, pointer lock ${document.pointerLockElement?"jK":"free"}`)
```

#### 71. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L867)

```diff
-         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
+         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
```

#### 72. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L871` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L871) · [Before (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L871)

```diff
-         Sr.outliers >= 20 ? Sr.suppressed++ : (Sr.outliers++, (0, Wr.l)("look", rr))
+         Od.outliers >= 20 ? Od.suppressed++ : (Od.outliers++, (0, Fd.k)("look", dd))
```

#### 73. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L875` → after: `L875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L875) · [Before (L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L875)

```diff
-         Sr.eventLines >= 10 ? Sr.suppressed++ : (Sr.eventLines++, (0, Wr.l)("look", rr))
+         Od.eventLines >= 10 ? Od.suppressed++ : (Od.eventLines++, (0, Fd.k)("look", dd))
```

#### 74. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L882` → after: `L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L882) · [Before (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L882)

```diff
-           for (let Sr = pr; Sr + Er.e <= rr.length; Sr += Er.e) this.record(rr, Sr)
+           for (let Od = Qd; Od + vd.h <= dd.length; Od += vd.h) this.record(dd, Od)
```

#### 75. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L887` → after: `L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L887) · [Before (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L887)

```diff
-           for (let rr = Zr.e; rr + Zr.i <= Sr.length; rr += Zr.i) Er.k.cameraSet(Sr, rr), this.topicOn && (this.tally.cameraSets++, this.outlier(fr(Sr, rr)))
+           for (let dd = Wd.e; dd + Wd.h <= Od.length; dd += Wd.h) vd.o.cameraSet(Od, dd), this.topicOn && (this.tally.cameraSets++, this.outlier(hd(Od, dd)))
```

#### 76. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L895` → after: `L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L895) · [Before (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L895)

```diff
-         if (Er.k.change(rr, Sr), !this.topicOn) return;
+         if (vd.o.change(dd, Od), !this.topicOn) return;
```

#### 77. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L897` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L897) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L897)

```diff
-         rr === Er.d.droppedCopies ? Qr.dropped += Sr : rr === Er.d.stepsLost ? Qr.lost += Sr : Qr.cameraSetsLost += Sr
+         dd === vd.d.droppedCopies ? md.dropped += Od : dd === vd.d.stepsLost ? md.lost += Od : md.cameraSetsLost += Od
```

#### 78. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L925-L926` → after: `L925-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L925-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L925-L926) · [Before (L925-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L925-L926)

```diff
-       } = await Qr.e(35).then((() => Qr(35322)));
-       await Zr, Er.k.save({
+       } = await md.e(35).then((() => md(35407)));
+       await Wd, vd.o.save({
```

#### 79. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L932` → after: `L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L932) · [Before (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L932)

```diff
-   41296: (rr, Sr, Qr) => {
+   41304: (dd, Od, md) => {
```

#### 80. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L934-L935` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L934) · [Before (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L934-L935)

```diff
-       d: () => Nr,
-       f: () => tr,
+       e: () => Nd,
```

#### 81. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L937-L938` → after: `L936-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L936-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L936-L938) · [Before (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L937-L938)

```diff
-       j: () => xr,
-       m: () => mr,
+       l: () => vd,
+       o: () => td,
+       p: () => od,
```

#### 82. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L940-L942` → after: `L940-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L940-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L940-L942) · [Before (L940-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L940-L942)

```diff
-       t: () => jr,
-       u: () => pr,
-       v: () => hr
+       s: () => Xd,
+       v: () => Qd,
+       w: () => yd
```

#### 83. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L944-L947` → after: `L944-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L944-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L944-L947) · [Before (L944-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L944-L947)

```diff
-     var Zr = Qr(2114),
-       Wr = Qr(34),
-       ar = Qr(2119);
-     const jr = (0, ar.l)((function() {
+     var Wd = md(2116),
+       Fd = md(32),
+       Rd = md(2121);
+     const Xd = (0, Rd.k)((function() {
```

#### 84. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L950-L953` → after: `L950-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L950-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L950-L953) · [Before (L950-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L950-L953)

```diff
-           health: null !== (rr = Zr.d.get("_health")) && void 0 !== rr ? rr : null,
-           maxHealth: null !== (Sr = Zr.d.get("_totalMaxHealth")) && void 0 !== Sr ? Sr : null,
-           shield: null !== (Qr = Zr.d.get("_shield")) && void 0 !== Qr ? Qr : null,
-           maxShield: null !== (Wr = Zr.d.get("maxShield")) && void 0 !== Wr ? Wr : null
+           health: null !== (dd = Wd.e.get("_health")) && void 0 !== dd ? dd : null,
+           maxHealth: null !== (Od = Wd.e.get("_totalMaxHealth")) && void 0 !== Od ? Od : null,
+           shield: null !== (md = Wd.e.get("_shield")) && void 0 !== md ? md : null,
+           maxShield: null !== (Fd = Wd.e.get("maxShield")) && void 0 !== Fd ? Fd : null
```

#### 85. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L955` → after: `L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L955) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L955)

```diff
-       }), [], (0, ar.j)("_health", "_totalMaxHealth", "_shield", "maxShield")),
+       }), [], (0, Rd.h)("_health", "_totalMaxHealth", "_shield", "maxShield")),
```

#### 86. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L973` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L973) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L973)

```diff
-     const Er = (0, ar.l)((function() {
+     const vd = (0, Rd.k)((function() {
```

#### 87. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L975-L976` → after: `L975-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L975-L976) · [Before (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L975-L976)

```diff
-       return null !== (rr = Zr.d.get("_aura")) && void 0 !== rr ? rr : null
-     }), [], (0, ar.j)("_aura"));
+       return null !== (dd = Wd.e.get("_aura")) && void 0 !== dd ? dd : null
+     }), [], (0, Rd.h)("_aura"));
```

#### 88. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L980` → after: `L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L980) · [Before (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L980)

```diff
-         watch: Sr => (0, Wr.j)("shotPlayer", (Qr => {
+         watch: Od => (0, Fd.l)("shotPlayer", (md => {
```

#### 89. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1006-L1007` → after: `L1006-L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1006-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1006-L1007) · [Before (L1006-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1006-L1007)

```diff
-           serverChatMsgId: null !== Qr && void 0 !== Qr ? Qr : null,
-           worldCodeLineId: null !== Zr && void 0 !== Zr ? Zr : null,
+           serverChatMsgId: null !== md && void 0 !== md ? md : null,
+           worldCodeLineId: null !== Wd && void 0 !== Wd ? Wd : null,
```

#### 90. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1028)

```diff
-         translationKey: `touchKeys:${rr}`
+         translationKey: `touchKeys:${dd}`
```

#### 91. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1049` → after: `L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1049) · [Before (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1049)

```diff
-   40226: (rr, Sr, Qr) => {
+   40254: (dd, Od, md) => {
```

#### 92. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1051` → after: `L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1051) · [Before (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1051)

```diff
-       b: () => pt
+       c: () => tH
```

#### 93. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1057-L1061` → after: `L1057-L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1057-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1057-L1061) · [Before (L1057-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1057-L1061)

```diff
-       BloxdWasmIntegrityError: () => Nj.g,
-       BloxdWasmTimeoutError: () => Nj.i,
-       MAX_RETRY_AFTER_MS: () => Nj.p,
-       PROMISE_HOOK_CODES: () => Uj.b,
-       RETRY_DELAYS_MS: () => Nj.s,
+       BloxdWasmIntegrityError: () => yX.h,
+       BloxdWasmTimeoutError: () => yX.k,
+       MAX_RETRY_AFTER_MS: () => yX.m,
+       PROMISE_HOOK_CODES: () => bX.e,
+       RETRY_DELAYS_MS: () => yX.p,
```

#### 94. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1063-L1069` → after: `L1063-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1063-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1063-L1069) · [Before (L1063-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1063-L1069)

```diff
-       WASM_HOOKS_ENFORCED: () => Yj.e,
-       WasmBufferView: () => zj.d,
-       bloxdTextureWasmUrl: () => hj.e,
-       bloxdWasmCore: () => mj.d,
-       compileBloxdTextureWasm: () => hj.i,
-       compileBloxdWasmAhead: () => xj.e,
-       compileBloxdWasmBrowser: () => xj.i,
+       WASM_HOOKS_ENFORCED: () => gX.c,
+       WasmBufferView: () => YX.b,
+       bloxdTextureWasmUrl: () => pX.d,
+       bloxdWasmCore: () => HX.e,
+       compileBloxdTextureWasm: () => pX.g,
+       compileBloxdWasmAhead: () => qX.b,
+       compileBloxdWasmBrowser: () => qX.e,
```

#### 95. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1071-L1074` → after: `L1071-L1074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1071-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1071-L1074) · [Before (L1071-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1071-L1074)

```diff
-       fetchBytes: () => Nj.K,
-       getBloxdWasm: () => Ej.z,
-       getBloxdWasmAheadState: () => xj.j,
-       getBloxdWasmBuild: () => Ej.h,
+       fetchBytes: () => yX.J,
+       getBloxdWasm: () => oX.A,
+       getBloxdWasmAheadState: () => qX.g,
+       getBloxdWasmBuild: () => oX.i,
```

#### 96. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1076-L1080` → after: `L1076-L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1076-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1076-L1080) · [Before (L1076-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1076-L1080)

```diff
-       getBloxdWasmFailureStage: () => Ej.l,
-       getBloxdWasmFailureStatus: () => Ej.o,
-       getBloxdWasmLoadCompile: () => xj.l,
-       getBloxdWasmMemory: () => Ej.s,
-       getBloxdWasmModule: () => Ej.u,
+       getBloxdWasmFailureStage: () => oX.m,
+       getBloxdWasmFailureStatus: () => oX.p,
+       getBloxdWasmLoadCompile: () => qX.j,
+       getBloxdWasmMemory: () => oX.t,
+       getBloxdWasmModule: () => oX.w,
```

#### 97. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1082` → after: `L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1082) · [Before (L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1082)

```diff
-       getBloxdWasmTamper: () => Yj.h,
+       getBloxdWasmTamper: () => gX.e,
```

#### 98. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1084-L1107` → after: `L1084-L1107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1084-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1084-L1107) · [Before (L1084-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1084-L1107)

```diff
-       initBloxdWasmBrowser: () => mj.g,
-       initBloxdWasmFromModule: () => mj.j,
-       isBloxdWasmCompileFailureRetryable: () => Ej.M,
-       isBloxdWasmDownloadFailureRetryable: () => Ej.P,
-       isBloxdWasmLoadUnstreamed: () => Nj.O,
-       isBloxdWasmReady: () => Ej.R,
-       isEnforceableWasmReport: () => Yj.k,
-       isPromiseHookReport: () => Yj.s,
-       isPunishedWasmReport: () => Yj.w,
-       isRendererWasmReport: () => Yj.z,
-       isRetryableDownloadFailure: () => Nj.S,
-       isWeightedWasmReport: () => Yj.B,
-       loadBloxdWasmBrowser: () => xj.n,
-       markBloxdWasmFailed: () => Ej.V,
-       noteBloxdRenderDebugHook: () => Yj.E,
-       onBloxdWasmFailed: () => Ej.Y,
- ... (8 more removed lines; see GitHub link above)
+       initBloxdWasmBrowser: () => HX.i,
+       initBloxdWasmFromModule: () => HX.l,
+       isBloxdWasmCompileFailureRetryable: () => oX.K,
+       isBloxdWasmDownloadFailureRetryable: () => oX.M,
+       isBloxdWasmLoadUnstreamed: () => yX.P,
+       isBloxdWasmReady: () => oX.P,
+       isEnforceableWasmReport: () => gX.g,
+       isPromiseHookReport: () => gX.m,
+       isPunishedWasmReport: () => gX.n,
+       isRendererWasmReport: () => gX.o,
+       isRetryableDownloadFailure: () => yX.R,
+       isWeightedWasmReport: () => gX.s,
+       loadBloxdWasmBrowser: () => qX.l,
+       markBloxdWasmFailed: () => oX.T,
+       noteBloxdRenderDebugHook: () => gX.t,
+       onBloxdWasmFailed: () => oX.W,
+ ... (8 more added lines; see GitHub link above)
```

#### 99. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1109-L1113` → after: `L1109-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1109-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1109-L1113) · [Before (L1109-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1109-L1113)

```diff
-     Qr(38045);
-     var Wr = Qr(37699),
-       ar = Qr(5817),
-       jr = Qr(37701),
-       Ir = Qr(379);
+     md(38137);
+     var Fd = md(37810),
+       Rd = md(5759),
+       Xd = md(37819),
+       Kd = md(405);
```

#### 100. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1123-L1131` → after: `L1123-L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1123-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1123-L1131) · [Before (L1123-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1123-L1131)

```diff
-     var Er = Qr(40295),
-       pr = Qr(5779),
-       xr = Qr(215),
-       mr = Qr(3139),
-       Nr = Qr(39638),
-       Ur = Qr(208),
-       tr = Qr(4354),
-       hr = Qr(34),
-       zr = Qr(388),
+     var vd = md(40313),
+       Qd = md(5733),
+       td = md(231),
+       od = md(3143),
+       Nd = md(39681),
+       qd = md(218),
+       Hd = md(4365),
+       yd = md(32),
+       bd = md(415),
```

#### 101. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1133-L1137` → after: `L1133-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1133-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1133-L1151) · [Before (L1133-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1133-L1137)

```diff
-       nr = Qr(39402),
-       er = Qr(38754),
-       Kr = Qr(39030),
-       yr = Qr(38762),
-       Br = Qr(39460),
+       pd = md(39459),
+       Yd = md(38794),
+       gd = md(39074),
+       wd = md(38799),
+       Ed = md(39516),
+       Jd = md(38731),
+       Ud = md(40289),
+       xd = md(38779),
+       Bd = md(39368),
+       Sd = md(38898),
+       sd = md(38907),
+       ud = md(39645),
+       Vd = md(39470),
+       Ad = md(39409),
+       rd = md(107),
+       Gd = md(37825),
+ ... (3 more added lines; see GitHub link above)
```

#### 102. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1139-L1170` → after: `L1153-L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1153-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1153-L1170) · [Before (L1139-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1139-L1170)

```diff
-       vr = Qr(40274),
-       Or = Qr(38736),
-       Lr = Qr(39324),
-       lr = Qr(38845),
-       Xr = Qr(38849),
-       Pr = Qr(39609),
-       Hr = Qr(39417),
-       qr = Qr(39365),
-       Rr = Qr(109),
-       gr = Qr(37710),
-       Cr = Qr(688),
-       Mr = Qr(2364),
-       Gr = Qr(37866),
-       kr = Qr(38630),
-       Ar = Qr(39538),
-       Vr = Qr(40234),
- ... (16 more removed lines; see GitHub link above)
+       cd = md(39598),
+       jd = md(40258),
+       Dd = md(39484),
+       ed = md(38852),
+       Id = md(38766),
+       ld = md(40269),
+       Cd = md(40280),
+       Zd = md(2402),
+       kd = md(4373),
+       fd = md(38627);
+     var Md = md(39744),
+       dO = md(39033),
+       OO = md(39629),
+       mO = md(38698),
+       WO = md(38823),
+       FO = md(39684),
+ ... (2 more added lines; see GitHub link above)
```

#### 103. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1180` → after: `L1180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1180) · [Before (L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1180)

```diff
-               if (Sr.has(ar.name.toLowerCase())) throw new Error(`Two nodes are named ${ar.name}`);
+               if (Od.has(Rd.name.toLowerCase())) throw new Error(`Two nodes are named ${Rd.name}`);
```

#### 104. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1183` → after: `L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1183) · [Before (L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1183)

```diff
-                 if (ar.hasGeometry) throw new Error(`Mesh ${ar.name} has nodes under it: put them in a group beside it`);
+                 if (Rd.hasGeometry) throw new Error(`Mesh ${Rd.name} has nodes under it: put them in a group beside it`);
```

#### 105. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1221` → after: `L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1221) · [Before (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1221)

```diff
-       return IS(Zr) < IS(Qr) ? Zr : Qr
+       return vO(Wd) < vO(md) ? Wd : md
```

#### 106. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1227` → after: `L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1227) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1227)

```diff
-         return rr + ("string" === typeof Sr ? 1 : (void 0 === Sr.collapsesTo ? 0 : 1) + IS(null !== (Qr = Sr.children) && void 0 !== Qr ? Qr : []))
+         return dd + ("string" === typeof Od ? 1 : (void 0 === Od.collapsesTo ? 0 : 1) + vO(null !== (md = Od.children) && void 0 !== md ? md : []))
```

#### 107. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1234` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1234) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1234)

```diff
-           if ("gC" in rr && !0 === rr.gC) throw new Error(`${rr.name} is drawn as an instance of another mesh`);
+           if ("lV" in dd && !0 === dd.lV) throw new Error(`${dd.name} is drawn as an instance of another mesh`);
```

#### 108. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1239` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1239) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1239)

```diff
-           return !Zr(rr) || Qr(rr).length > 0 ? null : `${null!==(Sr=null===(Wr=rr.material)||void 0===Wr?void 0:Wr.uniqueId)&&void 0!==Sr?Sr:"none"} ${rr.getVerticesDataKinds().sort().join(",")}`
+           return !Wd(dd) || md(dd).length > 0 ? null : `${null!==(Od=null===(Fd=dd.material)||void 0===Fd?void 0:Fd.uniqueId)&&void 0!==Od?Od:"none"} ${dd.getVerticesDataKinds().sort().join(",")}`
```

#### 109. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1253` → after: `L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1253) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1253)

```diff
-             let Wr, ar = null !== (Sr = jr.get(Qr)) && void 0 !== Sr ? Sr : 1;
+             let Fd, Rd = null !== (Od = Xd.get(md)) && void 0 !== Od ? Od : 1;
```

#### 110. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1255` → after: `L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1255) · [Before (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1255)

```diff
-               ar++, Wr = `${rr}|${ar}`
+               Rd++, Fd = `${dd}|${Rd}`
```

#### 111. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1264` → after: `L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1264) · [Before (L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1264)

```diff
-                 pr = null === rr ? null : `${rr}/${jr.toLowerCase()}`;
+                 Qd = null === dd ? null : `${dd}/${Xd.toLowerCase()}`;
```

#### 112. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1286` → after: `L1286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1286) · [Before (L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1286)

```diff
-       const Zr = br.h.itemsClient[Sr],
+       const Wd = Zd.g.itemsClient[Od],
```

#### 113. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1289-L1290` → after: `L1289-L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1289-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1289-L1290) · [Before (L1289-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1289-L1290)

```diff
-           const Qr = (0, dr.u)(rr);
-           if (null !== Qr) return ur.e.enabled && ur.e.hasAnimation(Qr) ? {
+           const md = (0, Md.q)(dd);
+           if (null !== md) return OO.d.enabled && OO.d.hasAnimation(md) ? {
```

#### 114. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1292)

```diff
-             moved: ur.e.bonesMoved(Qr)
+             moved: OO.d.bonesMoved(md)
```

#### 115. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1294` → after: `L1294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1294) · [Before (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1294)

```diff
-           const Zr = null === (Sr = pr.j[rr]) || void 0 === Sr ? void 0 : Sr.meshEntityBones;
+           const Wd = null === (Od = Qd.i[dd]) || void 0 === Od ? void 0 : Od.meshEntityBones;
```

#### 116. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1301` → after: `L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1301) · [Before (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1301)

```diff
-       const ar = rr.Ox.bC;
+       const Rd = dd.gt.HA;
```

#### 117. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1306` → after: `L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1306) · [Before (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1306)

```diff
-         const Qr = `skeletalVehicle|${Sr}`,
+         const md = `skeletalVehicle|${Od}`,
```

#### 118. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1309)

```diff
-             const Wr = rr.Ox.eC(),
+             const Fd = dd.gt.zV(),
```

#### 119. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1315` → after: `L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1315) · [Before (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1315)

```diff
-               fr = await (0, SS.e)(ar, Wr, jr, Ir);
+               hd = await (0, WO.c)(Rd, Fd, Xd, Kd);
```

#### 120. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1325-L1326` → after: `L1325-L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1325-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1325-L1326) · [Before (L1325-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1325-L1326)

```diff
-               if (null !== Qr.vehicleType && !ur.e.animatesModel(Qr.vehicleType, [QS.c, ...Zr])) return console.error(`Animation for ${Qr.vehicleType}: its clips move none of the model's bones, so it draws as one mesh`), fr.dispose(), !1;
-               if (ar.length > 0) return console.error(`${Sr.name}'s model has no ${ar.join(", ")} to keep as bones, so it draws as one mesh`), fr.dispose(), !1;
+               if (null !== md.vehicleType && !OO.d.animatesModel(md.vehicleType, [FO.c, ...Wd])) return console.error(`Animation for ${md.vehicleType}: its clips move none of the model's bones, so it draws as one mesh`), hd.dispose(), !1;
+               if (Rd.length > 0) return console.error(`${Od.name}'s model has no ${Rd.join(", ")} to keep as bones, so it draws as one mesh`), hd.dispose(), !1;
```

#### 121. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1336-L1340` → after: `L1336-L1340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1336-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1336-L1340) · [Before (L1336-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1336-L1340)

```diff
-             for (const hr of mr) mS(rr.Ox, hr, Sr.name);
-             for (const hr of xr) hr.sC(), hr.material ? hr.sideOrientation = Tr.d.ClockWiseSideOrientation : ((0, lr.c)(hr) || hr.eC().rM(hr), hr.VK(!1));
-             for (const hr of xr) hr.material && rr.Ox.pM(hr);
-             const Nr = rr.Ox.bC,
-               Ur = rr.zU ? {
+             for (const yd of od) qO(dd.gt, yd, Od.name);
+             for (const yd of td) yd.sA(), yd.material ? yd.sideOrientation = Jd.c.ClockWiseSideOrientation : ((0, Sd.g)(yd) || yd.zV().WG(yd), yd.rY(!1));
+             for (const yd of td) yd.material && dd.gt.hG(yd);
+             const Nd = dd.gt.HA,
+               qd = dd.Jq ? {
```

#### 122. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1344)

```diff
-               sx: 8,
+               Mt: 8,
```

#### 123. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1352` → after: `L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1352) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1352)

```diff
-             }), Nr.setPickableForType(Zr, null !== Qr.vehicleType), Nr.setCullableForType(Zr, !0), (0, rS.p)(pr), !0
+             }), Nd.setPickableForType(Wd, null !== md.vehicleType), Nd.setCullableForType(Wd, !0), (0, mO.s)(Qd), !0
```

#### 124. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1361` → after: `L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1361) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1361)

```diff
-             console.error(`Could not load the bones of ${Sr}, so it draws as one mesh\n`, rr), ar.set(Sr, {
+             console.error(`Could not load the bones of ${Od}, so it draws as one mesh\n`, dd), Rd.set(Od, {
```

#### 125. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1377-L1379` → after: `L1377-L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1377-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1377-L1379) · [Before (L1377-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1377-L1379)

```diff
-           ar.VK(Sr, !0), ar.setPosition(Sr, 0, 0, 0), ar.setRotationEuler(Sr, 0, 0, 0), ar.set(Sr, "aOpacity", 1), ar.set(Sr, "aLightLevels", sr.e);
-           const [Wr, jr, fr] = Array.isArray(Qr) ? Qr : [Qr, Qr, Qr], Er = Zr.bakeInScaling;
-           if (ar.setScale(Sr, -Wr * Er, jr * Er, fr * Er), rr.zU) {
+           Rd.rY(Od, !0), Rd.setPosition(Od, 0, 0, 0), Rd.setRotationEuler(Od, 0, 0, 0), Rd.set(Od, "aOpacity", 1), Rd.set(Od, "aLightLevels", dO.e);
+           const [Fd, Xd, hd] = Array.isArray(md) ? md : [md, md, md], vd = Wd.bakeInScaling;
+           if (Rd.setScale(Od, -Fd * vd, Xd * vd, hd * vd), dd.Jq) {
```

#### 126. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1391` → after: `L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1391) · [Before (L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1391)

```diff
-         return "string" === typeof rr ? [rr] : [rr.nodeName, ...xS(null !== (Sr = rr.children) && void 0 !== Sr ? Sr : [])]
+         return "string" === typeof dd ? [dd] : [dd.nodeName, ...NO(null !== (Od = dd.children) && void 0 !== Od ? Od : [])]
```

#### 127. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1396-L1400` → after: `L1396-L1400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1396-L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1396-L1400) · [Before (L1396-L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1396-L1400)

```diff
-       Sr.name = `${Qr}SkeletalVehicleMat`;
-       const Zr = (0, Or.Y)(Sr);
-       (0, Or.F)(Zr), (0, WS.c)(Sr, (() => {
-         (0, ZS.d)(Zr, rr), (0, wr.e)(Zr, !0)
-       })), (0, WS.g)(Sr)
+       Od.name = `${md}SkeletalVehicleMat`;
+       const Wd = (0, xd.db)(Od);
+       (0, xd.M)(Wd), (0, XO.c)(Od, (() => {
+         (0, RO.e)(Wd, dd), (0, ed.c)(Wd, !0)
+       })), (0, XO.f)(Od)
```

#### 128. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1420` → after: `L1420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1420) · [Before (L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1420)

```diff
-         this.bloxd = void 0, this.gm = void 0
+         this.bloxd = void 0, this.zo = void 0
```

#### 129. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1429` → after: `L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1429) · [Before (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1429)

```diff
-         return tS.sourcesByScene.set(rr, Qr), (0, or.e)(rr, (() => {
+         return bO.sourcesByScene.set(dd, md), (0, Cd.d)(dd, (() => {
```

#### 130. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1434-L1437` → after: `L1434-L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1434-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1434-L1437) · [Before (L1434-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1434-L1437)

```diff
-         this.bloxd = rr, this.gm = rr.gm;
-         const Sr = (0, or.e)(this.gm.Ox.eC(), (() => {
-           for (const rr of this.bloxd.YB.YM("isBoard")) {
-             const Sr = this.bloxd.YB.getState(rr.XM, "hidingMeshManager");
+         this.bloxd = dd, this.zo = dd.zo;
+         const Od = (0, Cd.d)(this.zo.gt.zV(), (() => {
+           for (const dd of this.bloxd.qE.vG("isBoard")) {
+             const Od = this.bloxd.qE.getState(dd.QG, "hidingMeshManager");
```

#### 131. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1445` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1445) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1445)

```diff
-           for (const rr of this.bloxd.YB.YM("isBoard")) this.bloxd.YB.deleteEntity(rr.XM)
+           for (const dd of this.bloxd.qE.vG("isBoard")) this.bloxd.qE.deleteEntity(dd.QG)
```

#### 132. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1450` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1450) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1450)

```diff
-         (0, kr.b)(this.gm).mergeParticleSystemUpdate((0, Gr.e)(rr), Sr, Qr);
+         (0, zd.e)(this.zo).mergeParticleSystemUpdate((0, Pd.b)(dd), Od, md);
```

#### 133. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1452` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1452) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1452)

```diff
-         (0, Cr.L)(Wr) || (0, qr.c)(Wr, Qr)
+         (0, nd.O)(Fd) || (0, Ad.b)(Fd, md)
```

#### 134. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1455` → after: `L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1455) · [Before (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1455)

```diff
-         return (0, kr.b)(this.gm).getParticleSystemUpdate((0, Gr.e)(rr), null !== Sr && void 0 !== Sr ? Sr : "__root__")
+         return (0, zd.e)(this.zo).getParticleSystemUpdate((0, Pd.b)(dd), null !== Od && void 0 !== Od ? Od : "__root__")
```

#### 135. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1461-L1462` → after: `L1461-L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1461-L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1461-L1462) · [Before (L1461-L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1461-L1462)

```diff
-           fr = null !== (Wr = null === Ir || void 0 === Ir || null === (ar = Ir.persisted.shared.text) || void 0 === ar ? void 0 : ar.toString()) && void 0 !== Wr ? Wr : "",
-           Er = null !== (jr = null === Ir || void 0 === Ir ? void 0 : Ir.persisted.shared.textSize) && void 0 !== jr ? jr : 0;
+           hd = null !== (Fd = null === Kd || void 0 === Kd || null === (Rd = Kd.persisted.shared.text) || void 0 === Rd ? void 0 : Rd.toString()) && void 0 !== Fd ? Fd : "",
+           vd = null !== (Xd = null === Kd || void 0 === Kd ? void 0 : Kd.persisted.shared.textSize) && void 0 !== Xd ? Xd : 0;
```

#### 136. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1465-L1467` → after: `L1465-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1465-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1465-L1467) · [Before (L1465-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1465-L1467)

```diff
-             position: Dr.kU.Zero(),
-             rotation: Dr.kU.Zero(),
-             Tx: Dr.kU.One()
+             position: fd.Cq.Zero(),
+             rotation: fd.Cq.Zero(),
+             Tt: fd.Cq.One()
```

#### 137. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1470` → after: `L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1470) · [Before (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1470)

```diff
-           "" === fr.trim() ? Sr = (0, nr.g)(this.gm.Ox, "EmptyBoardMesh") : (Sr = this.createBoardTextPlane(fr, Er, 1, 7 / 8, 256), (0, Ar.l)(rr, Zr, .375), rr.rotation.y += Math.PI, Sr.rotation = rr.rotation);
+           "" === hd.trim() ? Od = (0, pd.f)(this.zo.gt, "EmptyBoardMesh") : (Od = this.createBoardTextPlane(hd, vd, 1, 7 / 8, 256), (0, cd.k)(dd, Wd, .375), dd.rotation.y += Math.PI, Od.rotation = dd.rotation);
```

#### 138. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1492-L1494` → after: `L1492-L1494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1492-L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1492-L1494) · [Before (L1492-L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1492-L1494)

```diff
-         })), [pr, , xr] = ar.A[Wr][1], [mr, Nr] = ar.r[Wr], Ur = Er + .01, tr = [.5 + pr * (Ir - 1) / 2 + mr * Ur, .5 - (fr - 1) / 2, .5 + xr * (Ir - 1) / 2 + Nr * Ur];
-         Sr = (0, jr.n)(Sr, Qr, Ir, fr);
-         const hr = (0, jr.t)(Ir, fr),
+         })), [Qd, , td] = Rd.A[Fd][1], [od, Nd] = Rd.o[Fd], qd = vd + .01, Hd = [.5 + Qd * (Kd - 1) / 2 + od * qd, .5 - (hd - 1) / 2, .5 + td * (Kd - 1) / 2 + Nd * qd];
+         Od = (0, Xd.p)(Od, md, Kd, hd);
+         const yd = (0, Xd.z)(Kd, hd),
```

#### 139. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1498` → after: `L1498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1498) · [Before (L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1498)

```diff
-           return rr.rotation = new Dr.kU(0, (Wr + 1) * Math.PI / 2, 0), {
+           return dd.rotation = new fd.Cq(0, (Fd + 1) * Math.PI / 2, 0), {
```

#### 140. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1506-L1509` → after: `L1506-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1506-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1506-L1509) · [Before (L1506-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1506-L1509)

```diff
-           Ox: Ir
-         } = this.gm, {
-           Dt: fr
-         } = Ir, Er = Math.round(ar * Qr), pr = Math.round(ar * Zr), xr = (0, Fr.f)(this.gm, "BoardDynamicTexture", Er, pr, {
+           gt: Kd
+         } = this.zo, {
+           MH: hd
+         } = Kd, vd = Math.round(Rd * md), Qd = Math.round(Rd * Wd), td = (0, ld.g)(this.zo, "BoardDynamicTexture", vd, Qd, {
```

#### 141. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1512` → after: `L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1512) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1512)

```diff
-         }), mr = (0, nr.p)(Ir, "BoardPlane", (0, Kr.h)({
+         }), od = (0, pd.p)(Kd, "BoardPlane", (0, gd.j)({
```

#### 142. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1515-L1516` → after: `L1515-L1516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1515-L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1515-L1516) · [Before (L1515-L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1515-L1516)

```diff
-         })), Nr = ar / 256, Ur = (0, yr.h)(xr);
-         Wr.d.fontSize = jr.c[Sr].ingameFontSize * Nr, Wr.d.fontWeight = "bold", Wr.d.font = "'Jetbrains Mono', monospace", Rr.featureFlags.canSeePlayerWrittenText && Wr.d.drawText(Ur, rr, 0, (-10 - 7 * Sr) * Nr, Er, pr), (0, Fr.i)(xr);
+         })), Nd = Rd / 256, qd = (0, wd.k)(td);
+         Fd.c.fontSize = Xd.c[Od].ingameFontSize * Nd, Fd.c.fontWeight = "bold", Fd.c.font = "'Jetbrains Mono', monospace", rd.featureFlags.canSeePlayerWrittenText && Fd.c.drawText(qd, dd, 0, (-10 - 7 * Od) * Nd, vd, Qd), (0, ld.o)(td);
```

#### 143. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1519` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1519) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1519)

```diff
-         } = (0, cr.b)({
+         } = (0, Id.d)({
```

#### 144. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1521` → after: `L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1521) · [Before (L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1521)

```diff
-           Dt: fr,
+           MH: hd,
```

#### 145. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1526` → after: `L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1526) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1526)

```diff
-             ...(0, Fr.h)(xr)
+             ...(0, ld.k)(td)
```

#### 146. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1529` → after: `L1529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1529) · [Before (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1529)

```diff
-             (0, Fr.b)(rr, "boards")
+             (0, ld.d)(dd, "boards")
```

#### 147. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1534` → after: `L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1534) · [Before (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1534)

```diff
-         return mr.material = tr, mr.sC(), mr
+         return od.material = Hd, od.sA(), od
```

#### 148. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1538-L1539` → after: `L1538-L1539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1538-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1538-L1539) · [Before (L1538-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1538-L1539)

```diff
-           YB: Zr
-         } = this.gm, Wr = Zr.add(rr, 1, 1);
+           qE: Wd
+         } = this.zo, Fd = Wd.add(dd, 1, 1);
```

#### 149. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1541` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1541) · [Before (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1541)

```diff
-         Zr.gM(Wr, "hidingMeshManager", {
+         Wd.yG(Fd, "hidingMeshManager", {
```

#### 150. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1543` → after: `L1543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1543) · [Before (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1543)

```diff
-             if ((0, or.c)(this.gm)) return;
+             if ((0, Cd.c)(this.zo)) return;
```

#### 151. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1548` → after: `L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1548) · [Before (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1548)

```diff
-             ar = rr, Zr.gM(Wr, Zr.names.mesh, {
+             Rd = dd, Wd.yG(Fd, Wd.names.mesh, {
```

#### 152. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1555)

```diff
-             null === (rr = ar) || void 0 === rr || rr.dispose(!1, !0), Zr.bM(Wr, Zr.names.mesh)
+             null === (dd = Rd) || void 0 === dd || dd.dispose(!1, !0), Wd.pG(Fd, Wd.names.mesh)
```

#### 153. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1559` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1559) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1559)

```diff
-           Fp: "Board",
+           eQ: "Board",
```

#### 154. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1561` → after: `L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1561) · [Before (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1561)

```diff
-         }), Zr.gM(Wr, "isBoard")
+         }), Wd.yG(Fd, "isBoard")
```

#### 155. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1565-L1566` → after: `L1565-L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1565-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1565-L1566) · [Before (L1565-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1565-L1566)

```diff
-         for (const Wr of this.bloxd.YB.YM("isBoard"))
-           if (Yr().squaredDistance(this.bloxd.YB.JY(Wr.XM), Zr) < .01) return void this.bloxd.YB.deleteEntity(Wr.XM)
+         for (const Fd of this.bloxd.qE.vG("isBoard"))
+           if (Td().squaredDistance(this.bloxd.qE.hY(Fd.QG), Wd) < .01) return void this.bloxd.qE.deleteEntity(Fd.QG)
```

#### 156. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1569-L1571` → after: `L1569-L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1569-L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1569-L1571) · [Before (L1569-L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1569-L1571)

```diff
-         for (const Zr of this.bloxd.YB.YM("isBoard")) {
-           const [Wr, ar, jr] = (0, Cr.ab)(this.bloxd.YB.JY(Zr.XM));
-           Wr === rr && ar === Sr && jr === Qr && this.bloxd.YB.deleteEntity(Zr.XM)
+         for (const Wd of this.bloxd.qE.vG("isBoard")) {
+           const [Fd, Rd, Xd] = (0, nd.Y)(this.bloxd.qE.hY(Wd.QG));
+           Fd === dd && Rd === Od && Xd === md && this.bloxd.qE.deleteEntity(Wd.QG)
```

#### 157. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1576` → after: `L1576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1576) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1576)

```diff
-             return "Fireball" === rr ? fr("Fireball Block", .95) : "RPG" === rr ? fr("Rocket", .5) : "Obby RPG" === rr ? fr("Obby Rocket", .5) : "Super RPG" === rr ? fr("Super Rocket", .7) : "Grenade Launcher" === rr ? fr("Grenade", .357) : "Iceball" === rr ? fr("Iceball Block",  … [truncated]
+             return "Fireball" === dd ? hd("Fireball Block", .95) : "RPG" === dd ? hd("Rocket", .5) : "Obby RPG" === dd ? hd("Obby Rocket", .5) : "Super RPG" === dd ? hd("Super Rocket", .7) : "Grenade Launcher" === dd ? hd("Grenade", .357) : "Iceball" === dd ? hd("Iceball Block",  … [truncated]
```

#### 158. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1583-L1585` → after: `L1583-L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1583-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1583-L1585) · [Before (L1583-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1583-L1585)

```diff
-           Qr = br.h.itemsClient[Sr.item],
-           Zr = Sr.thrownRole ? Qr.getMeshWithRole(Sr.scale, Br.e.thrown) : Qr.getMesh(Sr.scale);
-         return Sr.billboard && (Zr.billboardMode = Tr.d.BILLBOARDMODE_Y), Zr
+           md = Zd.g.itemsClient[Od.item],
+           Wd = Od.thrownRole ? md.getMeshWithRole(Od.scale, Ed.c.thrown) : md.getMesh(Od.scale);
+         return Od.billboard && (Wd.billboardMode = Jd.c.BILLBOARDMODE_Y), Wd
```

#### 159. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1588` → after: `L1588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1588) · [Before (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1588)

```diff
-         const Qr = this.gm.Ox.eC(),
+         const md = this.zo.gt.zV(),
```

#### 160. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1594-L1595` → after: `L1594-L1595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1594-L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1594-L1595) · [Before (L1594-L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1594-L1595)

```diff
-           Zr = this.gm.Ox.QG(`${Sr.texture}|minLifetime${Sr.minLifeTime}`, Qr);
-         if (Zr.texture = (0, er.p)(rr, (0, tr.e)(Sr.texture)), "timeFraction" in Sr.colorGradients[0])
+           Wd = this.zo.gt.wG(`${Od.texture}|minLifetime${Od.minLifeTime}`, md);
+         if (Wd.texture = (0, Yd.m)(dd, (0, Hd.e)(Od.texture)), "timeFraction" in Od.colorGradients[0])
```

#### 161. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1597-L1598` → after: `L1597-L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1597-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1597-L1598) · [Before (L1597-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1597-L1598)

```diff
-             const rr = Wr.maxColor ? (0, qr.i)(Wr.maxColor) : void 0;
-             Zr.addColorGradient(Wr.timeFraction, (0, qr.i)(Wr.minColor), rr)
+             const dd = Fd.maxColor ? (0, Ad.h)(Fd.maxColor) : void 0;
+             Wd.addColorGradient(Fd.timeFraction, (0, Ad.h)(Fd.minColor), dd)
```

#### 162. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1601` → after: `L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1601) · [Before (L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1601)

```diff
-             Zr.addColorGradient(1, (0, qr.m)(255, 255, 255, rr), (0, qr.m)(255, 255, 255, 1)), Zr.useRampGradients = !0, Zr.addColorRemapGradient(0, rr, 1), Zr.addColorRemapGradient(1, rr, 1), Hr.b.applyRampColoursToPSystem(Zr, Sr.colorGradients.map((rr => rr.color)))
+             Wd.addColorGradient(1, (0, Ad.k)(255, 255, 255, dd), (0, Ad.k)(255, 255, 255, 1)), Wd.useRampGradients = !0, Wd.addColorRemapGradient(0, dd, 1), Wd.addColorRemapGradient(1, dd, 1), Vd.c.applyRampColoursToPSystem(Wd, Od.colorGradients.map((dd => dd.color)))
```

#### 163. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1603` → after: `L1603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1603) · [Before (L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1603)

```diff
-         Zr.blendMode = Sr.blendMode, Zr.minLifeTime = Sr.minLifeTime, Zr.maxLifeTime = Sr.maxLifeTime, Zr.minEmitPower = Sr.minEmitPower, Zr.maxEmitPower = Sr.maxEmitPower, Zr.minSize = Sr.minSize, Zr.maxSize = Sr.maxSize, Zr.gravity = new Dr.kU(Sr.gravity[0], Sr.gravity[1], Sr.g … [truncated]
+         Wd.blendMode = Od.blendMode, Wd.minLifeTime = Od.minLifeTime, Wd.maxLifeTime = Od.maxLifeTime, Wd.minEmitPower = Od.minEmitPower, Wd.maxEmitPower = Od.maxEmitPower, Wd.minSize = Od.minSize, Wd.maxSize = Od.maxSize, Wd.gravity = new fd.Cq(Od.gravity[0], Od.gravity[1], Od.g … [truncated]
```

#### 164. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1608` → after: `L1608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1608) · [Before (L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1608)

```diff
-         const Sr = this.gm.Ox.eC(),
+         const Od = this.zo.gt.zV(),
```

#### 165. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1610-L1611` → after: `L1610-L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1610-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1610-L1611) · [Before (L1610-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1610-L1611)

```diff
-         (0, qr.v)(this.gm, Qr), Qr.createBoxEmitter(new Dr.kU(Math.min(rr.dir1[0], rr.dir2[0]), Math.min(rr.dir1[1], rr.dir2[1]), Math.min(rr.dir1[2], rr.dir2[2])), new Dr.kU(Math.max(rr.dir1[0], rr.dir2[0]), Math.max(rr.dir1[1], rr.dir2[1]), Math.max(rr.dir1[2], rr.dir2[2])), ne … [truncated]
-         new Hr.e(Qr, rr.maxLifeTime).emitAmount(rr.manualEmitCount), this.bloxd.client.gameRecorder.recordParticleEffectPlayed(rr)
+         (0, Ad.t)(this.zo, md), md.createBoxEmitter(new fd.Cq(Math.min(dd.dir1[0], dd.dir2[0]), Math.min(dd.dir1[1], dd.dir2[1]), Math.min(dd.dir1[2], dd.dir2[2])), new fd.Cq(Math.max(dd.dir1[0], dd.dir2[0]), Math.max(dd.dir1[1], dd.dir2[1]), Math.max(dd.dir1[2], dd.dir2[2])), ne … [truncated]
+         new Vd.f(md, dd.maxLifeTime).emitAmount(dd.manualEmitCount), this.bloxd.client.gameRecorder.recordParticleEffectPlayed(dd)
```

#### 166. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1614-L1615` → after: `L1614-L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1614-L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1614-L1615) · [Before (L1614-L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1614-L1615)

```diff
-         if (rr instanceof vr.c) return !1;
-         const Sr = `${rr.blendMode}|${rr.useRampGradients}`,
+         if (dd instanceof Ud.b) return !1;
+         const Od = `${dd.blendMode}|${dd.useRampGradients}`,
```

#### 167. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1617` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1617) · [Before (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1617)

```diff
-           Zr = this.gm.Ox.eC();
+           Wd = this.zo.gt.zV();
```

#### 168. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1621` → after: `L1621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1621) · [Before (L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1621)

```diff
-         const Zr = this.gm.Ox.eC();
+         const Wd = this.zo.gt.zV();
```

#### 169. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1625` → after: `L1625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1625) · [Before (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1625)

```diff
-             Zr = null !== (Wr = Sr.meshOffset) && void 0 !== Wr ? Wr : Yr().tm(0, rr / 2, 0),
+             Wd = null !== (Fd = Od.meshOffset) && void 0 !== Fd ? Fd : Td().mo(0, dd / 2, 0),
```

#### 170. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1627` → after: `L1627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1627) · [Before (L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1627)

```diff
-             fr = pS(this.gm, Sr.blockName, Sr.size);
+             hd = oO(this.zo, Od.blockName, Od.size);
```

#### 171. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1629` → after: `L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1629) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1629)

```diff
-             JC: fr,
+             JA: hd,
```

#### 172. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1636-L1637` → after: `L1636-L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1636-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1636-L1637) · [Before (L1636-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1636-L1637)

```diff
-               JC: null,
-               mesh: (0, nr.t)(this.gm.Ox, `skeletalVehicleLoading|${Sr.blockName}`),
+               JA: null,
+               mesh: (0, pd.q)(this.zo.gt, `skeletalVehicleLoading|${Od.blockName}`),
```

#### 173. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1644-L1645` → after: `L1644-L1645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1644-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1644-L1645) · [Before (L1644-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1644-L1645)

```diff
-             JC: null,
-             mesh: null !== (ar = null === (jr = br.h.itemsClient[Sr.blockName]) || void 0 === jr ? void 0 : jr.getMesh(Sr.size, Qr)) && void 0 !== ar ? ar : null,
+             JA: null,
+             mesh: null !== (Rd = null === (Xd = Zd.g.itemsClient[Od.blockName]) || void 0 === Xd ? void 0 : Xd.getMesh(Od.size, md)) && void 0 !== Rd ? Rd : null,
```

#### 174. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1658` → after: `L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1658) · [Before (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1658)

```diff
-             hr = `${rr}|${JSON.stringify(Ur)}${mr?"|mirrored":""}`,
+             yd = `${dd}|${JSON.stringify(qd)}${od?"|mirrored":""}`,
```

#### 175. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1664)

```diff
-               Wr = Sr.diffuseColor ? void 0 : (0, Er.i)(Sr.texture);
+               Fd = Od.diffuseColor ? void 0 : (0, vd.g)(Od.texture);
```

#### 176. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1676` → after: `L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1676) · [Before (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1676)

```diff
-               } = tr.d.getTexture((0, Er.i)(Sr.texture), Jr.e.BLOCK);
+               } = Hd.c.getTexture((0, vd.g)(Od.texture), kd.i.BLOCK);
```

#### 177. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1678` → after: `L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1678) · [Before (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1678)

```diff
-                   transparencyMode: Or.s.alphaTest,
+                   transparencyMode: xd.r.alphaTest,
```

#### 178. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1694)

```diff
-                 const rr = null === (zr = pr.j[Sr.texture]) || void 0 === zr ? void 0 : zr.textureInfo;
+                 const dd = null === (bd = Qd.i[Od.texture]) || void 0 === bd ? void 0 : bd.textureInfo;
```

#### 179. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1696-L1697` → after: `L1696-L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1696-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1696-L1697) · [Before (L1696-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1696-L1697)

```diff
-                 if (rr && "object" === typeof rr && "animTextures" in rr) Qr = (0, Lr.g)(rr.animTextures.length, null !== (Br = rr.animationInterval) && void 0 !== Br ? Br : 200), Wr = rr.animTextures[0];
-                 else console.warn(`Box mesh entity animateTexture=true but texture "${Sr.texture}" is not an animated block \u2014 rendering static.`)
+                 if (dd && "object" === typeof dd && "animTextures" in dd) md = (0, Bd.k)(dd.animTextures.length, null !== (Ed = dd.animationInterval) && void 0 !== Ed ? Ed : 200), Fd = dd.animTextures[0];
+                 else console.warn(`Box mesh entity animateTexture=true but texture "${Od.texture}" is not an animated block \u2014 rendering static.`)
```

#### 180. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L1702-L1704` → after: `L1702-L1704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L1702-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L1702-L1704) · [Before (L1702-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L1702-L1704)

```diff
-             } = (0, cr.b)({
-               name: `${hr}EntityMesh`,
-               Dt: Zr,
+             } = (0, Id.d)({
+               name: `${yd}EntityMesh`,
+               MH: Wd,
```
