# Changed — Bundle Modifications Report (Part 128 / 133)

- **Updated at**: `2026-11-21T12:06 JST`
- **Part**: `128 / 133` (**415** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 127](part-127.md) · [Part 129 →](part-129.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmPlay.js` (x17cru.159bd7ce → bqoxjr.2558012f · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmPlay.js` (961 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f)

#### 864. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7557-L7558` → after: `L7876-L7877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7876-L7877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7876-L7877) · [Before (L7557-L7558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7557-L7558)

```diff
-           console.warn(`${IW} stopping before the reload threw`, dd)
-         }(0, ak.flushCrashReports)(rd.d).then(rd.i, rd.i)
+           console.warn(`${to} stopping before the reload threw`, QQ)
+         }(0, Ww.flushCrashReports)(JQ.c).then(JQ.i, JQ.i)
```

#### 865. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7583` → after: `L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7902) · [Before (L7583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7583)

```diff
-           Xg(), SP = performance.now(), nP = null, UP = !1, (0, qd.T)(), null === (Wd = RP) || void 0 === Wd || Wd.beforeFrame(), Kp(SP, dd), (0, qd.L)(SP, LC), jP = !0;
+           zv(), ND = performance.now(), lD = null, jD = !1, (0, CQ.I)(), null === (oQ = eD) || void 0 === oQ || oQ.beforeFrame(), mL(ND, QQ), (0, CQ.B)(ND, tm), TD = !0;
```

#### 866. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7592` → after: `L7911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7911) · [Before (L7592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7592)

```diff
-           qZ.observe(null !== (Pd = null === (Zd = dd.lastHeader) || void 0 === Zd ? void 0 : Zd.chunksCancelled) && void 0 !== Pd ? Pd : 0);
+           Sk.observe(null !== (DQ = null === (kQ = QQ.lastHeader) || void 0 === kQ ? void 0 : kQ.chunksCancelled) && void 0 !== DQ ? DQ : 0);
```

#### 867. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7594` → after: `L7913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7913) · [Before (L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7594)

```diff
-             ld = (0, YJ.b)(od);
+             bQ = (0, sF.c)(HQ);
```

#### 868. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7598` → after: `L7917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7917) · [Before (L7598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7598)

```diff
-           ld && (0, aJ.e)(SP);
+           bQ && (0, WF.b)(ND);
```

#### 869. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7609` → after: `L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7928) · [Before (L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7609)

```diff
-           null !== nP && (null === Qd || void 0 === Qd ? void 0 : Qd.conn) === nP && xC(Qd, Xd.l);
+           null !== lD && (null === YQ || void 0 === YQ ? void 0 : YQ.conn) === lD && Sm(YQ, TQ.m);
```

#### 870. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7615` → after: `L7934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7934) · [Before (L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7615)

```diff
-             null === SZ || jZ || (jZ = !0, (0, Ld.l)("wasm_startup_loaded", SZ));
+             null === Tk || Kk || (Kk = !0, (0, xQ.m)("wasm_startup_loaded", Tk));
```

#### 871. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7617-L7618` → after: `L7936-L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7936-L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7936-L7937) · [Before (L7617-L7618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7617-L7618)

```diff
-             null !== rP ? kd = -1 : !0 === (null === (Jd = PZ) || void 0 === Jd ? void 0 : Jd.activated) && (kd = ~EJ.P.TerrainDrawn);
-             const pd = dd.headerWord(EJ.B.LoadSteps) & kd & ~bZ;
+             null !== ED ? wQ = -1 : !0 === (null === (FQ = kk) || void 0 === FQ ? void 0 : FQ.activated) && (wQ = ~fF.U.TerrainDrawn);
+             const LQ = QQ.headerWord(fF.F.LoadSteps) & wQ & ~Nk;
```

#### 872. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7622` → after: `L7941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7941) · [Before (L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7622)

```diff
-             for (const [Wd, Pd] of Object.entries(eC)) 0 !== (pd & EJ.P[Wd]) && (0, Ld.l)(Pd, Nd)
+             for (const [oQ, DQ] of Object.entries(Mm)) 0 !== (LQ & fF.U[oQ]) && (0, xQ.m)(DQ, qQ)
```

#### 873. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7626` → after: `L7945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7945) · [Before (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7626)

```diff
-             null === XZ || fZ === rP && !XZ.frame(SP, 0 !== (dd.headerWord(EJ.B.LoadSteps) & EJ.P.TerrainDrawn)) || (XZ = null);
+             null === zk || lk === ED && !zk.frame(ND, 0 !== (QQ.headerWord(fF.F.LoadSteps) & fF.U.TerrainDrawn)) || (zk = null);
```

#### 874. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7631-L7632` → after: `L7950-L7951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7950-L7951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7950-L7951) · [Before (L7631-L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7631-L7632)

```diff
-             const Zd = null !== (Jd = null === Wd || void 0 === Wd ? void 0 : Wd.firstView) && void 0 !== Jd ? Jd : TJ._.NotYet;
-             if (LZ && Zd === TJ._.NotYet) return;
+             const kQ = null !== (FQ = null === oQ || void 0 === oQ ? void 0 : oQ.firstView) && void 0 !== FQ ? FQ : XF.Q.NotYet;
+             if (Ak && kQ === XF.Q.NotYet) return;
```

#### 875. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7637` → after: `L7956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7956) · [Before (L7637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7637)

```diff
-                 rP === gd && (0, Ld.j)()
+                 ED === vQ && (0, xQ.i)()
```

#### 876. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7648` → after: `L7967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7967) · [Before (L7648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7648)

```diff
-             YZ = !0, performance.mark(iW), (0, jN.m)("render") && Promise.all([kd.e(75), kd.e(47)]).then((() => kd(4552))).then((dd => {
+             Ik = !0, performance.mark(So), (0, Uq.o)("render") && Promise.all([wQ.e(75), wQ.e(47)]).then((() => wQ(4533))).then((QQ => {
```

#### 877. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7657-L7658` → after: `L7976-L7977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7976-L7977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7976-L7977) · [Before (L7657-L7658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7657-L7658)

```diff
-             if (LZ && Zd !== TJ._.Drawn) {
-               const Jd = Zd === TJ._.HeldBackstop ? "held_draws" : "long",
+             if (Ak && kQ !== XF.Q.Drawn) {
+               const FQ = kQ === XF.Q.HeldBackstop ? "held_draws" : "long",
```

#### 878. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7662` → after: `L7981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7981) · [Before (L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7662)

```diff
-               if (console.warn(`${IW} playable at ${Cd} ms on the first view's ${Jd} backstop, ${kd}: it wasn't drawn whole in time`), (0, Ld.l)("wasm_view_backstop", Cd, `${Jd}:${kd}`), "long" === Jd) {
+               if (console.warn(`${to} playable at ${mQ} ms on the first view's ${FQ} backstop, ${wQ}: it wasn't drawn whole in time`), (0, xQ.m)("wasm_view_backstop", mQ, `${FQ}:${wQ}`), "long" === FQ) {
```

#### 879. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7664-L7665` → after: `L7983-L7984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7983-L7984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7983-L7984) · [Before (L7664-L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7664-L7665)

```diff
-                 const Jd = null !== (Kd = null === (od = AP) || void 0 === od ? void 0 : od.game) && void 0 !== Kd ? Kd : "";
-                 XZ = new Mk.e((() => {
+                 const FQ = null !== (uQ = null === (HQ = dD) || void 0 === HQ ? void 0 : HQ.game) && void 0 !== uQ ? uQ : "";
+                 zk = new Rw.d((() => {
```

#### 880. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7670` → after: `L7989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7989) · [Before (L7670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7670)

```diff
-                   (0, ak.reportFirstViewNoTerrain)(Jd, kd, pd, dP), (0, QJ.q)("noTerrain")
+                   (0, Ww.reportFirstViewNoTerrain)(FQ, wQ, LQ, QD), (0, bF.s)("noTerrain")
```

#### 881. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7673-L7675` → after: `L7992-L7994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7992-L7994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7992-L7994) · [Before (L7673-L7675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7673-L7675)

```diff
-             } else console.info(`${IW} playable at ${Cd} ms${LZ?"":" (no renderer)"}`);
-             setTimeout(GZ, 0), (0, GJ.e)().catch((dd => {
-               console.error(`${IW} item sprites didn't load, so item particles show the missing texture`, dd)
+             } else console.info(`${to} playable at ${mQ} ms${Ak?"":" (no renderer)"}`);
+             setTimeout(pk, 0), (0, MF.h)().catch((QQ => {
+               console.error(`${to} item sprites didn't load, so item particles show the missing texture`, QQ)
```

#### 882. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7678` → after: `L7997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR7997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L7997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7997) · [Before (L7678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7678)

```diff
-           (0, kk.Q)(dd, {
+           (0, Fw.N)(QQ, {
```

#### 883. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7685` → after: `L8004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8004) · [Before (L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7685)

```diff
-               (0, Wp.c)(Jd)
+               (0, qL.e)(FQ)
```

#### 884. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7687-L7688` → after: `L8006-L8007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8006-L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8006-L8007) · [Before (L7687-L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7687-L7688)

```diff
-               if ((0, cJ.j)(Od)) {
-                 dd.crashOn(kk.h, Od);
+               if ((0, VF.f)(AQ)) {
+                 QQ.crashOn(Fw.m, AQ);
```

#### 885. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7691` → after: `L8010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8010) · [Before (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7691)

```diff
-               console.error(`${Zp} an input action listener threw`, Od)
+               console.error(`${DL} an input action listener threw`, AQ)
```

#### 886. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7694` → after: `L8013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8013) · [Before (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7694)

```diff
-           }(dd), Nd && (0, FJ.e)();
+           }(QQ), qQ && (0, OF.d)();
```

#### 887. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7703` → after: `L8022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8022) · [Before (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7703)

```diff
-       console.error(`${IW} a frame-start listener threw`, dd)
+       console.error(`${to} a frame-start listener threw`, QQ)
```

#### 888. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7712` → after: `L8031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8031) · [Before (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7712)

```diff
-       console.error(`${IW} a before-frame listener threw`, dd)
+       console.error(`${to} a before-frame listener threw`, QQ)
```

#### 889. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7717` → after: `L8036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8036) · [Before (L7717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7717)

```diff
-         kd = (0, Bd.w)(),
+         wQ = (0, SQ.u)(),
```

#### 890. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7720` → after: `L8039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8039) · [Before (L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7720)

```diff
-         cause: (0, Mk.l)(dd.headerWord(EJ.B.LoadSteps), pd),
+         cause: (0, Rw.g)(QQ.headerWord(fF.F.LoadSteps), LQ),
```

#### 891. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7758` → after: `L8077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8077) · [Before (L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7758)

```diff
-       hZ = !0, UZ.stop(), (0, fN.d)(), TN = null, fg(), (0, qd.P)().unlockPointer(), (0, qd.O)(null), null === (dd = IP) || void 0 === dd || dd(), IP = null, null === (Jd = (0, Bd.w)()) || void 0 === Jd || Jd.followCursorAim(null), (0, FJ.H)(), (0, Bd.i)(), AW.stop(), null === (k … [truncated]
+       Ek = !0, ak.stop(), (0, Tq.b)(), aq = null, lv(), (0, CQ.H)().unlockPointer(), (0, CQ.F)(null), null === (QQ = MD) || void 0 === QQ || QQ(), MD = null, null === (FQ = (0, SQ.u)()) || void 0 === FQ || FQ.followCursorAim(null), (0, OF.z)(), (0, SQ.h)(), Bo.stop(), null === (w … [truncated]
```

#### 892. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7760` → after: `L8079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8079) · [Before (L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7760)

```diff
-       lP = null, Rd && (Rd.stop(), YC(Rd)), null === (od = BP) || void 0 === od || od.dispose(), BP = null, null === (ld = sP) || void 0 === ld || ld.dispose(), sP = null, GP = null, null === (Qd = xP) || void 0 === Qd || Qd(), xP = null, null === (Ld = eP) || void 0 === Ld || Ld … [truncated]
+       bD = null, eQ && (eQ.stop(), Um(eQ)), null === (HQ = SD) || void 0 === HQ || HQ.dispose(), SD = null, null === (bQ = iD) || void 0 === bQ || bQ.dispose(), iD = null, GD = null, null === (YQ = cD) || void 0 === YQ || YQ(), cD = null, null === (xQ = tD) || void 0 === xQ || xQ … [truncated]
```

#### 893. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7766-L7767` → after: `L8085-L8086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8085-L8086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8085-L8086) · [Before (L7766-L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7766-L7767)

```diff
-         console.warn(`${IW} the sky's images didn't release`, Gd)
-       }(0, hp.h)(null), null === (ed = uW) || void 0 === ed || ed.pagePreviews().endSession(null === (0, ZJ.l)())
+         console.warn(`${to} the sky's images didn't release`, GQ)
+       }(0, hL.c)(null), null === (tQ = Eo) || void 0 === tQ || tQ.pagePreviews().endSession(null === (0, DF.p)())
```

#### 894. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7772-L7777` → after: `L8091-L8096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8091-L8096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8091-L8096) · [Before (L7772-L7777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7772-L7777)

```diff
-       const Nd = null !== (kd = null === (pd = lP) || void 0 === pd ? void 0 : pd.details()) && void 0 !== kd ? kd : {},
-         Wd = dd.site === vW || dd.site === xW || dd.site === ak.RENDER_RELOAD_SITE || dd.site === qW ? dd.error instanceof WebAssembly.RuntimeError || dd.error instanceof HJ.e : !(0, Jk.n)(dd.error) && (0, kk.K)(dd);
-       Wd && dd.error instanceof Error && (0, ZJ.O)(dd.error);
-       const Pd = Wd || dd.site === kk.s ? (0, ak.readTrap)(dd.error) : null,
-         Zd = null !== Pd && (0, hJ.f)(Pd.kind, Pd.refusedBytes) ? Pd.refusedBytes : 0,
-         gd = null === QP ? (0, Dp.z)(function() {
+       const qQ = null !== (wQ = null === (LQ = bD) || void 0 === LQ ? void 0 : LQ.details()) && void 0 !== wQ ? wQ : {},
+         oQ = QQ.site === Mo || QQ.site === Go || QQ.site === Ww.RENDER_RELOAD_SITE || QQ.site === po ? QQ.error instanceof WebAssembly.RuntimeError || QQ.error instanceof ZF.b : !(0, Qw.t)(QQ.error) && (0, Fw.G)(QQ);
+       oQ && QQ.error instanceof Error && (0, DF.K)(QQ.error);
+       const DQ = oQ || QQ.site === Fw.v ? (0, Ww.readTrap)(QQ.error) : null,
+         kQ = null !== DQ && (0, hF.g)(DQ.kind, DQ.refusedBytes) ? DQ.refusedBytes : 0,
+         vQ = null === YD ? (0, aL.s)(function() {
```

#### 895. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7779` → after: `L8098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8098) · [Before (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7779)

```diff
-             return (0, ZJ.o)().buffer.byteLength
+             return (0, DF.t)().buffer.byteLength
```

#### 896. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7786` → after: `L8105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8105) · [Before (L7786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7786)

```diff
-       if (Cd && ((0, LJ.t)("oom"), (0, LJ.p)("decline"), cZ = !0), qC(), (0, CN.d)()) return console.warn(`${IW} the session stopped at ${dd.site} as the page reloads`, dd.error), void((0, Jk.n)(dd.error) || (null === (Kd = dd.header) || void 0 === Kd ? void 0 : Kd.lastError) === … [truncated]
+       if (mQ && ((0, YF.r)("oom"), (0, YF.n)("decline"), Jk = !0), im(), (0, kq.c)()) return console.warn(`${to} the session stopped at ${QQ.site} as the page reloads`, QQ.error), void((0, Qw.t)(QQ.error) || (null === (uQ = QQ.header) || void 0 === uQ ? void 0 : uQ.lastError) === … [truncated]
```

#### 897. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7804-L7805` → after: `L8123-L8124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8123-L8124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8123-L8124) · [Before (L7804-L7805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7804-L7805)

```diff
-         return !(kd - yP[dd] < fW) && (yP[dd] = kd, console.warn(`${IW} ${Jd}`), !0)
-       }("dropped", `${Wd} records dropped so far (input ${Jd.dropped}, options ${Nd}, net ${kd.dropped}, worker ${pd.dropped}, net-out ${TP})`) && (DP = Wd)
+         return !(wQ - aD[QQ] < To) && (aD[QQ] = wQ, console.warn(`${to} ${FQ}`), !0)
+       }("dropped", `${oQ} records dropped so far (input ${FQ.dropped}, options ${qQ}, net ${wQ.dropped}, worker ${LQ.dropped}, net-out ${fD})`) && (XD = oQ)
```

#### 898. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7810` → after: `L8129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8129) · [Before (L7810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7810)

```diff
-       const kd = (0, xk.c)();
+       const wQ = (0, Gw.b)();
```

#### 899. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7812` → after: `L8131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8131) · [Before (L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7812)

```diff
-       const pd = (0, sk.q)(kd);
+       const LQ = (0, Sw.l)(wQ);
```

#### 900. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7815` → after: `L8134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8134) · [Before (L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7815)

```diff
-         horizontal: Math.min(pd.horizontal, null !== (dd = null === (Jd = lP) || void 0 === Jd ? void 0 : Jd.shedDistanceInUse()) && void 0 !== dd ? dd : 1 / 0)
+         horizontal: Math.min(LQ.horizontal, null !== (QQ = null === (FQ = bD) || void 0 === FQ ? void 0 : FQ.shedDistanceInUse()) && void 0 !== QQ ? QQ : 1 / 0)
```

#### 901. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7822` → after: `L8141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8141) · [Before (L7822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7822)

```diff
-         samples: LZ ? BZ : null,
+         samples: Ak ? ik : null,
```

#### 902. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7824` → after: `L8143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8143) · [Before (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7824)

```diff
-         renderDistance: null !== (Jd = null === (kd = iC()) || void 0 === kd ? void 0 : kd.horizontal) && void 0 !== Jd ? Jd : null
+         renderDistance: null !== (FQ = null === (wQ = Om()) || void 0 === wQ ? void 0 : wQ.horizontal) && void 0 !== FQ ? FQ : null
```

#### 903. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7829` → after: `L8148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8148) · [Before (L7829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7829)

```diff
-       VP = dd, (0, qk.G)()
+       PD = QQ, (0, pw.C)()
```

#### 904. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7837-L7838` → after: `L8156-L8157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8156-L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8156-L8157) · [Before (L7837-L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7837-L7838)

```diff
-         renderDistance: null !== (Jd = null === pd || void 0 === pd ? void 0 : pd.horizontal) && void 0 !== Jd ? Jd : null,
-         renderDistanceVertical: null !== (kd = null === pd || void 0 === pd ? void 0 : pd.vertical) && void 0 !== kd ? kd : null,
+         renderDistance: null !== (FQ = null === LQ || void 0 === LQ ? void 0 : LQ.horizontal) && void 0 !== FQ ? FQ : null,
+         renderDistanceVertical: null !== (wQ = null === LQ || void 0 === LQ ? void 0 : LQ.vertical) && void 0 !== wQ ? wQ : null,
```

#### 905. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7841` → after: `L8160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8160) · [Before (L7841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7841)

```diff
-         renderBackend: (0, CN.H)(),
+         renderBackend: (0, kq.D)(),
```

#### 906. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7847` → after: `L8166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8166) · [Before (L7847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7847)

```diff
-       console.info(`${IW} wasm memory at the session's end`, dd.details())
+       console.info(`${to} wasm memory at the session's end`, QQ.details())
```

#### 907. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7854` → after: `L8173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8173) · [Before (L7854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7854)

```diff
-         dd.crash(kk.v, kd)
+         QQ.crash(Fw.x, wQ)
```

#### 908. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7859` → after: `L8178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8178) · [Before (L7859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7859)

```diff
-       return KP ??= kd.e(69).then((() => kd(43268))).catch((dd => {
+       return uD ??= wQ.e(69).then((() => wQ(42767))).catch((QQ => {
```

#### 909. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7882` → after: `L8201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8201) · [Before (L7882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7882)

```diff
-         const Wd = await (0, qp.m)(dd, {
+         const oQ = await (0, cL.n)(QQ, {
```

#### 910. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7885` → after: `L8204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8204) · [Before (L7885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7885)

```diff
-             pd(), await (0, ak.flushCrashReports)(rd.d)
+             LQ(), await (0, Ww.flushCrashReports)(JQ.c)
```

#### 911. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7901` → after: `L8220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8220) · [Before (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7901)

```diff
-         } = await kd.e(344).then((() => kd(43223)));
+         } = await wQ.e(344).then((() => wQ(42714)));
```

#### 912. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7929` → after: `L8248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8248) · [Before (L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7929)

```diff
-       yC || (yC = !0, HZ("play", cd), (0, ld.o)(new kK), Zd.gameBridge.attach(Sd), zC().catch((() => {})), (0, Bd.A)((dd => {
+       fm || (fm = !0, Bk("play", VQ), (0, bQ.o)(new qu), kQ.gameBridge.attach(UQ), Bm().catch((() => {})), (0, SQ.y)((QQ => {
```

#### 913. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7939-L7941` → after: `L8258-L8260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8258-L8260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8258-L8260) · [Before (L7939-L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7939-L7941)

```diff
-       booted: Wd.n.INITIALISE_NOA,
-       texturesIn: Wd.n.REGISTRATION,
-       modelsIn: Wd.n.SETUP_LIFEFORMS
+       booted: oQ.o.INITIALISE_NOA,
+       texturesIn: oQ.o.REGISTRATION,
+       modelsIn: oQ.o.SETUP_LIFEFORMS
```

#### 914. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7945` → after: `L8264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8264) · [Before (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7945)

```diff
-       gd.j.nO("matchmakeAndPlayStepCompleted", {
+       vQ.l.GA("matchmakeAndPlayStepCompleted", {
```

#### 915. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7956-L7958` → after: `L8275-L8277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8275-L8277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8275-L8277) · [Before (L7956-L7958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7956-L7958)

```diff
-       } = (0, ld.d)();
-       if (dd.code === pd.e.serverUpdating.code) return (new kK).leaveLive(), void VC(Jd, kd);
-       gd.j.nO("unwantedLeftGame", {
+       } = (0, bQ.c)();
+       if (QQ.code === LQ.d.serverUpdating.code) return (new qu).leaveLive(), void ym(FQ, wQ);
+       vQ.l.GA("unwantedLeftGame", {
```

#### 916. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7972` → after: `L8291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8291) · [Before (L7972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7972)

```diff
-       } : "gameOrPluginKick" === dd.name ? dd.reason : `You have disconnected from the server.\n${dd.reason}`
+       } : "gameOrPluginKick" === QQ.name ? QQ.reason : `You have disconnected from the server.\n${QQ.reason}`
```

#### 917. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7977` → after: `L8296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8296) · [Before (L7977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7977)

```diff
-       pd = (0, Cd.D)(dd, Jd), Promise.resolve().then((() => kd(1543))).then((dd => {
+       LQ = (0, mQ.G)(QQ, FQ), Promise.resolve().then((() => wQ(1503))).then((QQ => {
```

#### 918. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7983` → after: `L8302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8302) · [Before (L7983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7983)

```diff
-         console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", dd), (0, rd.e)(pd)
+         console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", QQ), (0, JQ.f)(LQ)
```

#### 919. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7988` → after: `L8307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8307) · [Before (L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7988)

```diff
-       return DC ??= Promise.all([kd.e(70), kd.e(73), kd.e(72), kd.e(71), kd.e(84), kd.e(261), kd.e(200), kd.e(218), kd.e(239), kd.e(213), kd.e(46)]).then((() => kd(40663))).then((dd => {
+       return Vm ??= Promise.all([wQ.e(70), wQ.e(73), wQ.e(72), wQ.e(71), wQ.e(84), wQ.e(261), wQ.e(200), wQ.e(218), wQ.e(239), wQ.e(213), wQ.e(46)]).then((() => wQ(40103))).then((QQ => {
```

#### 920. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L7995` → after: `L8314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8314) · [Before (L7995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L7995)

```diff
-                 null === Jd || Jd.isStopped || hZ ? console.warn(`${IW} the play sources threw as they attached, after the client stopped`, dd) : BC({
+                 null === FQ || FQ.isStopped || Ek ? console.warn(`${to} the play sources threw as they attached, after the client stopped`, QQ) : Wm({
```

#### 921. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8004` → after: `L8323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8323) · [Before (L8004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8004)

```diff
-         throw DC = null, new Bd.e(dd)
+         throw Vm = null, new SQ.d(QQ)
```

#### 922. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8014` → after: `L8333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8333) · [Before (L8014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8014)

```diff
-       const Zd = (0, od.h)();
+       const kQ = (0, HQ.e)();
```

#### 923. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8029` → after: `L8348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8348) · [Before (L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8029)

```diff
-             target: await (0, nd.c)(dd.userContext, Jd.place, Ag(), Zd),
+             target: await (0, zQ.i)(QQ.userContext, FQ.place, Qm(), kQ),
```

#### 924. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8031` → after: `L8350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8350) · [Before (L8031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8031)

```diff
-             freshMs: nd.b
+             freshMs: zQ.e
```

#### 925. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8057` → after: `L8376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8376) · [Before (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8057)

```diff
-           return EC || (EC = !0, (0, ed.b)()), TC ? (rC(Wd.n.CONNECT_TO_GAME_SERVER), rC(Wd.n.SHADER_PACK), function() {
+           return Jm || (Jm = !0, (0, tQ.c)()), hm ? (gm(oQ.o.CONNECT_TO_GAME_SERVER), gm(oQ.o.SHADER_PACK), function() {
```

#### 926. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8060` → after: `L8379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8379) · [Before (L8060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8060)

```diff
-           }() && (0, Od.f)(dd.userContext, Pd).catch((dd => {
+           }() && (0, AQ.e)(QQ.userContext, DQ).catch((QQ => {
```

#### 927. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8065` → after: `L8384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8384) · [Before (L8065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8065)

```diff
-               return null !== (dd = null === (Jd = aP) || void 0 === Jd ? void 0 : Jd.couldntRunInJoinedGame()) && void 0 !== dd ? dd : null
+               return null !== (QQ = null === (FQ = RD) || void 0 === FQ ? void 0 : FQ.couldntRunInJoinedGame()) && void 0 !== QQ ? QQ : null
```

#### 928. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8067-L8068` → after: `L8386-L8387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8386-L8387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8386-L8387) · [Before (L8067-L8068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8067-L8068)

```diff
-             null !== dd && (0, Od.c)(dd)
-           }(), Nd.b.value(void 0)) : JK("The server ended the game as it joined");
+             null !== QQ && (0, AQ.b)(QQ)
+           }(), qQ.d.value(void 0)) : Lu("The server ended the game as it joined");
```

#### 929. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8072` → after: `L8391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8391) · [Before (L8072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8072)

```diff
-             if ((Cd.error instanceof Xd.m || Cd.error instanceof Xd.d) && Cd.error.code === pd.e.serverUpdating.code) {
+             if ((mQ.error instanceof TQ.q || mQ.error instanceof TQ.e) && mQ.error.code === LQ.d.serverUpdating.code) {
```

#### 930. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8077` → after: `L8396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8396) · [Before (L8077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8077)

```diff
-               } = (0, ld.d)();
+               } = (0, bQ.c)();
```

#### 931. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8080` → after: `L8399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8399) · [Before (L8080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8080)

```diff
-             return Cd.error instanceof hd.f ? Nd.b.errorWithCode(Cd.error.messageKey, Wd.n.SHADER_PACK, {
+             return mQ.error instanceof hQ.c ? qQ.d.errorWithCode(mQ.error.messageKey, oQ.o.SHADER_PACK, {
```

#### 932. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8082-L8086` → after: `L8401-L8405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8401-L8405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8401-L8405) · [Before (L8082-L8086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8082-L8086)

```diff
-             }) : Nd.b.errorWithCode(function(dd) {
-               if (dd instanceof Xd.z || dd instanceof vd.g) return dd.message;
-               if (wC(dd)) return (0, jd.m)(dd.code, dd.serverText);
-               return jd.j
-             }(Cd.error), Wd.n.CONNECT_TO_GAME_SERVER, {
+             }) : qQ.d.errorWithCode(function(QQ) {
+               if (QQ instanceof TQ.z || QQ instanceof pQ.d) return QQ.message;
+               if (Qu(QQ)) return (0, NQ.n)(QQ.code, QQ.serverText);
+               return NQ.f
+             }(mQ.error), oQ.o.CONNECT_TO_GAME_SERVER, {
```

#### 933. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8089-L8091` → after: `L8408-L8410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8408-L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8408-L8410) · [Before (L8089-L8091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8089-L8091)

```diff
-               gameServerUnreachable: (0, fd.d)(Cd.error),
-               rematch: (0, Id.b)(Cd.error),
-               gameRefused: (0, Gd.d)(Cd.error)
+               gameServerUnreachable: (0, KQ.c)(mQ.error),
+               rematch: (0, MQ.c)(mQ.error),
+               gameRefused: (0, GQ.e)(mQ.error)
```

#### 934. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8097` → after: `L8416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8416) · [Before (L8097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8097)

```diff
-         case "CJ":
+         case "wF":
```

#### 935. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8103` → after: `L8422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8422) · [Before (L8103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8103)

```diff
-       return dd instanceof Xd.m || dd instanceof Xd.d && "attach" !== dd.stage
+       return QQ instanceof TQ.q || QQ instanceof TQ.e && "attach" !== QQ.stage
```

#### 936. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8107` → after: `L8426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8426) · [Before (L8107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8107)

```diff
-       return !(dd instanceof Xd.z) && !wC(dd) && void 0 === (0, fd.d)(dd)
+       return !(QQ instanceof TQ.z) && !Qu(QQ) && void 0 === (0, KQ.c)(QQ)
```

#### 937. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8111` → after: `L8430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8430) · [Before (L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8111)

```diff
-       return wC(dd) ? dd instanceof Xd.d && (0, jd.k)(dd.code).requiresRefresh ? "medium" : "low" : AC(dd) || dd instanceof Xd.z ? "medium" : "low"
+       return Qu(QQ) ? QQ instanceof TQ.e && (0, NQ.j)(QQ.code).requiresRefresh ? "medium" : "low" : Fu(QQ) || QQ instanceof TQ.z ? "medium" : "low"
```

#### 938. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8115` → after: `L8434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8434) · [Before (L8115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8115)

```diff
-       return Nd.b.errorWithCode(dd, Wd.n.CONNECT_TO_GAME_SERVER, {
+       return qQ.d.errorWithCode(QQ, oQ.o.CONNECT_TO_GAME_SERVER, {
```

#### 939. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8117` → after: `L8436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8436) · [Before (L8117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8117)

```diff
-         CJ: !0
+         wF: !0
```

#### 940. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8122` → after: `L8441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8441) · [Before (L8122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8122)

```diff
-         if ((0, xd.b)()) {
+         if ((0, cQ.c)()) {
```

#### 941. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8135` → after: `L8454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8454) · [Before (L8135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8135)

```diff
-           null === (Jd = (0, Bd.w)()) || void 0 === Jd || Jd.clearWasmCameraScreen()
+           null === (FQ = (0, SQ.u)()) || void 0 === FQ || FQ.clearWasmCameraScreen()
```

#### 942. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8141` → after: `L8460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8460) · [Before (L8141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8141)

```diff
-         } = (0, ld.d)();
+         } = (0, bQ.c)();
```

#### 943. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8145` → after: `L8464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8464) · [Before (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8145)

```diff
-           (0, ld.r)({
+           (0, bQ.s)({
```

#### 944. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8147` → after: `L8466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8466) · [Before (L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8147)

```diff
-           }), gd.j.nO("leaveGame", {
+           }), vQ.l.GA("leaveGame", {
```

#### 945. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8149` → after: `L8468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8468) · [Before (L8149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8149)

```diff
-           }), (0, Kd.E)()
+           }), (0, uQ.U)()
```

#### 946. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8153` → after: `L8472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8472) · [Before (L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8153)

```diff
-         return (0, xd.b)()
+         return (0, cQ.c)()
```

#### 947. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8157` → after: `L8476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8476) · [Before (L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8157)

```diff
-   40999: (dd, Jd, kd) => {
+   40424: (QQ, FQ, wQ) => {
```

#### 948. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8159` → after: `L8478-L8479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8478-L8479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8478-L8479) · [Before (L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8159)

```diff
-       b: () => Nd,
+       c: () => qQ,
+       e: () => LQ,
```

#### 949. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8161-L8162` → after: `L8481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8481) · [Before (L8161-L8162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8161-L8162)

```diff
-       g: () => Zd,
-       k: () => Pd
+       h: () => DQ
```

#### 950. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8174` → after: `L8493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8493) · [Before (L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8174)

```diff
-       return `it sent no start within ${Math.round(dd)} ms`
+       return `it sent no start within ${Math.round(QQ)} ms`
```

#### 951. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8217` → after: `L8536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8536) · [Before (L8217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8217)

```diff
-   40888: (dd, Jd, kd) => {
+   40316: (QQ, FQ, wQ) => {
```

#### 952. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8219` → after: `L8538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8538) · [Before (L8219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8219)

```diff
-       d: () => pd
+       e: () => LQ
```

#### 953. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8245` → after: `L8564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8564) · [Before (L8245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8245)

```diff
-   38870: (dd, Jd, kd) => {
+   38260: (QQ, FQ, wQ) => {
```

#### 954. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8247` → after: `L8566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8566) · [Before (L8247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8247)

```diff
-       e: () => Wd
+       b: () => oQ
```

#### 955. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8249` → after: `L8568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8568) · [Before (L8249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8249)

```diff
-     var pd = kd(2761);
+     var LQ = wQ(2809);
```

#### 956. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8253` → after: `L8572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8572) · [Before (L8253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8253)

```diff
-       const dd = () => (0, pd.x)();
+       const QQ = () => (0, LQ.B)();
```

#### 957. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8255-L8257` → after: `L8574-L8576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8574-L8576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8574-L8576) · [Before (L8255-L8257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8255-L8257)

```diff
-         memoryBytes: () => (0, pd.o)().buffer.byteLength,
-         reserveUpFront: Jd => dd().VK(Jd),
-         reserveAhead: Jd => dd().tK(Jd),
+         memoryBytes: () => (0, LQ.t)().buffer.byteLength,
+         reserveUpFront: FQ => QQ().oH(FQ),
+         reserveAhead: FQ => QQ().qH(FQ),
```

#### 958. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8259` → after: `L8578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8578) · [Before (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8259)

```diff
-           dd().zK(Jd)
+           QQ().DH(FQ)
```

#### 959. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8261` → after: `L8580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8580) · [Before (L8261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8261)

```diff
-         lowWater: () => Nd[dd().uK()] ?? "none",
+         lowWater: () => qQ[QQ().LH()] ?? "none",
```

#### 960. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8263` → after: `L8582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8582) · [Before (L8263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8263)

```diff
-           const Jd = new Uint32Array((0, pd.o)().buffer, dd, 17),
+           const FQ = new Uint32Array((0, LQ.t)().buffer, QQ, 17),
```

#### 961. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8284-L8286` → after: `L8603-L8605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8603-L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8603-L8605) · [Before (L8284-L8286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmPlay.js#L8284-L8286)

```diff
-         }(dd().HK()),
-         takeBallast: () => dd().wK(),
-         takePressure: () => dd().AK()
+         }(QQ().kH()),
+         takeBallast: () => QQ().vH(),
+         takePressure: () => QQ().mH()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmRecorder.js` (x17cru.159bd7ce → bqoxjr.2558012f)

- **File**: `bundles/bloxd.io/chunks/js/wasmRecorder.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864)

#### 1. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L4-L5)

```diff
-   61203: (dd, Jd, kd) => {
-     dd.exports = kd.p + "static/media/bloxd_wasm_recorder_bg.d119923b8651229b232f.wasm"
+   60976: (QQ, FQ, wQ) => {
+     QQ.exports = wQ.p + "static/media/bloxd_wasm_recorder_bg.2be24ef9f180b6336dbf.wasm"
```

#### 2. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L7)

```diff
-   61196: (dd, Jd, kd) => {
+   60972: (QQ, FQ, wQ) => {
```

#### 3. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L19-L21` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L19-L21) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L19-L21)

```diff
-       gWd: () => Nd,
-       HPd: () => md,
-       hK: () => Wd,
+       boQ: () => qQ,
+       qkQ: () => rQ,
+       FH: () => oQ,
```

#### 4. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L24-L26` → after: `L24-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L24-L26) · [Before (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L24-L26)

```diff
-       rK: () => Pd,
-       PWd: () => Zd,
-       ANd: () => gd
+       wH: () => DQ,
+       uoQ: () => kQ,
+       woQ: () => vQ
```

#### 5. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L35)

```diff
-         sd.sZM9(dd, 0)
+         iQ.yxjN(QQ, 0)
```

#### 6. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L38)

```diff
-         return 0 !== sd.kggy(this.__wbg_ptr)
+         return 0 !== iQ.Df07(this.__wbg_ptr)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L41-L59` → after: `L41-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L41-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L41-L59) · [Before (L41-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L41-L59)

```diff
-         return 0 !== sd.etXm(this.__wbg_ptr, dd, Jd)
-       }
-       dWd(dd) {
-         return sd.pOE6(this.__wbg_ptr, dd) >>> 0
-       }
-       wNd() {
-         sd.T8F1(this.__wbg_ptr)
-       }
-       HNd() {
-         return sd.UweB(this.__wbg_ptr) >>> 0
-       }
-       zNd() {
-         return sd.RxMw(this.__wbg_ptr)
-       }
-       pWd() {
-         return sd.aOxq(this.__wbg_ptr) >>> 0
- ... (3 more removed lines; see GitHub link above)
+         return 0 !== iQ.jW4u(this.__wbg_ptr, QQ, FQ)
+       }
+       LoQ(QQ) {
+         return iQ.FGEk(this.__wbg_ptr, QQ) >>> 0
+       }
+       FoQ() {
+         iQ.Dw0c(this.__wbg_ptr)
+       }
+       QoQ() {
+         return iQ.SQGU(this.__wbg_ptr) >>> 0
+       }
+       dqQ() {
+         return iQ.KUwW(this.__wbg_ptr)
+       }
+       koQ() {
+         return iQ.sthH(this.__wbg_ptr) >>> 0
+ ... (3 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L62)

```diff
-         return sd.B63a(this.__wbg_ptr, dd) >>> 0
+         return iQ.p5Uj(this.__wbg_ptr, QQ) >>> 0
```

#### 9. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L65)

```diff
-         const dd = sd.NJkv();
+         const QQ = iQ.QQi7();
```

#### 10. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L68-L75` → after: `L68-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L68-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L68-L75) · [Before (L68-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L68-L75)

```diff
-       kWd() {
-         return sd.lPx9(this.__wbg_ptr) >>> 0
-       }
-       wPd() {
-         return sd.hT6h(this.__wbg_ptr) >>> 0
-       }
-       VNd(dd, Jd, kd) {
-         return 0 !== sd.wbOa(this.__wbg_ptr, dd, Jd, kd)
+       ooQ() {
+         return iQ.nu1C(this.__wbg_ptr) >>> 0
+       }
+       okQ() {
+         return iQ.Rway(this.__wbg_ptr) >>> 0
+       }
+       BqQ(QQ, FQ, wQ) {
+         return 0 !== iQ.DnEN(this.__wbg_ptr, QQ, FQ, wQ)
```

#### 11. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L78)

```diff
-         return sd.DTIV(this.__wbg_ptr, dd) >>> 0
+         return iQ.Ut42(this.__wbg_ptr, QQ) >>> 0
```

#### 12. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L81)

```diff
-         return sd.TcJy(this.__wbg_ptr) >>> 0
+         return iQ.KK1C(this.__wbg_ptr) >>> 0
```

#### 13. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L107)

```diff
-         }(dd, sd.p1NM, sd.mcG5),
+         }(QQ, iQ.WN0V, iQ.JsZA),
```

#### 14. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L109)

```diff
-         Nd = sd.PcQs(kd, pd, Jd);
+         qQ = iQ.xH6k(wQ, LQ, FQ);
```

#### 15. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L114-L122` → after: `L114-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L114-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L114-L122) · [Before (L114-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L114-L122)

```diff
-       sd.niFd()
-     }
- 
-     function Zd() {
-       return sd.XUS1() >>> 0
-     }
- 
-     function gd() {
-       return Rd(sd.cwpR())
+       iQ.sWQ4()
+     }
+ 
+     function kQ() {
+       return iQ.Ya5Q() >>> 0
+     }
+ 
+     function vQ() {
+       return eQ(iQ.jgp9())
```

#### 16. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L128)

```diff
-         zUuS: {
+         Ur7U: {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L130)

```diff
-           Uzuc: function(dd, Jd) {
+           rXI9: function(QQ, FQ) {
```

#### 18. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L133)

```diff
-           ZJkE: function() {
+           gA2l: function() {
```

#### 19. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L136)

```diff
-           Grzm: function(dd, Jd) {
+           SFJn: function(QQ, FQ) {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L139)

```diff
-           SKNr: function(dd, Jd) {
+           JxRZ: function(QQ, FQ) {
```

#### 21. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L142)

```diff
-           R4Bs: function() {
+           AuEx: function() {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L204)

```diff
-       return Bd = dd, sd = dd.exports, qd = Jd, Qd = null, sd.OQRv(), sd
+       return SQ = QQ, iQ = QQ.exports, CQ = FQ, YQ = null, iQ.VInp(), iQ
```

#### 23. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L228)

```diff
-           if (!dd.ok) throw new Error(`failed to fetch Wasm: ${dd.status} ${dd.statusText} fetching '${dd.url}'`);
+           if (!QQ.ok) throw new Error(`failed to fetch Wasm: ${QQ.status} ${QQ.statusText} fetching '${QQ.url}'`);
```

#### 24. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L259-L260)

```diff
-     var bd = kd(2770),
-       Sd = kd(6483);
+     var IQ = wQ(2811),
+       UQ = wQ(6446);
```

#### 25. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L265)

```diff
-         super((0, bd.A)(dd, Jd), {
+         super((0, IQ.N)(QQ, FQ), {
```

#### 26. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L279` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L279) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L279)

```diff
-           return kd = Jd ??= (0, bd.B)(dd.url(), (0, Sd.e)(dd.name)), await kd
+           return wQ = FQ ??= (0, IQ.R)(QQ.url(), (0, UQ.e)(QQ.name)), await wQ
```

#### 27. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L281)

```diff
-           throw Jd === kd && (Jd = null), dd.error((0, bd.G)(pd), pd)
+           throw FQ === wQ && (FQ = null), QQ.error((0, IQ.X)(LQ), LQ)
```

#### 28. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L315)

```diff
-       url: () => new kd.U(kd(61203)),
+       url: () => new wQ.U(wQ(60976)),
```

#### 29. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L348)

```diff
-   6483: (dd, Jd, kd) => {
+   6446: (QQ, FQ, wQ) => {
```

#### 30. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L352)

```diff
-     var pd = kd(2770);
+     var LQ = wQ(2811);
```

#### 31. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L354-L365` → after: `L354-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L354-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L354-L365) · [Before (L354-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L354-L365)

```diff
-       bloxd_wasm: () => "67c6401d5811eb7b9cff2814a29f966a9dd1ab923e175fa19497af26b4502816",
-       bloxd_wasm_client: () => "6258b24df63176123d93f549bb48f56da442317b3a5ee1b22458e2637caf578d",
-       bloxd_wasm_workers: () => "be7c28fa29cbecc24e19062f2c6bc0a5894a203c3dda65452eccc860e930d821",
-       bloxd_wasm_models: () => "6bdd581d4d0becff3e95b66a27a1a5da4e04f924bcd5bc0dd36e885168896016",
-       bloxd_wasm_webgpu: () => "7696327997962eac9535a5b8094b153b4298d06883723f642562040590146af1",
-       bloxd_wasm_webgl: () => "8873dc66cf374a905034792d179a1bc9e3d8a0d5138b511825a78d7a954240d0",
-       bloxd_wasm_webgl1: () => "8397ed5ce5c8ac7579e7003101c4f8c9a1ce8368296cd2e41ac9a9b90beb7a65",
-       bloxd_wasm_replay: () => "d71b023241834dbfc2db6804be33469db924450506350004c541b0b754121656",
-       bloxd_wasm_recorder: () => "f2e9b9c8ae12c235b86b64a44b272450d96f214d5d6982878bbf330e3339f352",
-       bloxd_wasm_anim: () => "3c8d34a5af00d244cdef6e97addab208455d3fad6df89d6004ea567630021fe8",
-       bloxd_wasm_textures: () => "dfcd6892e79c79af74dba72d92f489620c1624d3bfcd825b670886933b48749c",
-       bloxd_wasm_shader_pack: () => "ca7501d2ff0cccb80272a18641201d2ce4e4b1e9ec5a5ceca284d9a4fa45907f"
+       bloxd_wasm: () => "1dd71b260cf77c239728051b861ab33f1bc93c07cb4fd28db7884da2815d9fb7",
+       bloxd_wasm_client: () => "3cfdd659c2eb8b6808b191f6b866ba4e169bdaee4701af255db5568969af1bb7",
+       bloxd_wasm_workers: () => "e767134c25f99ed90bec9c0af92587618ddb83193667d16121760ce713ad3288",
+       bloxd_wasm_models: () => "7efbd9cd4bdaa31a2b1cc79e297121e9fc854705c550b2f59e1da981f144f4cb",
+       bloxd_wasm_webgpu: () => "5a2823876f9d5f8660104cc25ddeb02c3ddbc283e88525fa31e6d0deaa802210",
+       bloxd_wasm_webgl: () => "08bd13fedb12bff9b9605ef44db652dccf2f7dcf60a963258385b5f773a6f220",
+       bloxd_wasm_webgl1: () => "d6f63b1aa81b972a9480431e3334c89fc0648b9790fe3b5c8ff72a4945814f45",
+       bloxd_wasm_replay: () => "225276b91dfdf588b8a1477982fd12458f6ce65cfbaf6a782c82ab32d22513fb",
+       bloxd_wasm_recorder: () => "5fccb956d97b8d65d45cf6afb9a7042d1e4e4bad858c8aa1ec94da37e97ec72f",
+       bloxd_wasm_anim: () => "3f5071fcbbd4cd73afc810a4abff7c2f49f86a8638003d25fa9521ff9c12ae28",
+       bloxd_wasm_textures: () => "f13f878b8e801e1b7391eae5c539ceb75b7c99a88018bdad896fe7b520427f2f",
+       bloxd_wasm_shader_pack: () => "e521fc18804ece0348d56f2c73e39ef69fee01e1ad9f9c53d92bd0fdbf472492"
```

#### 32. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L367)

```diff
-     var Wd = kd(4563);
+     var oQ = wQ(4540);
```

#### 33. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L373)

```diff
-         onMismatch: Wd.G
+         onMismatch: oQ.o
```

#### 34. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmRecorder.js#L375)

```diff
-       throw new pd.f(`${dd} has no release digest, so this build refuses it`)
+       throw new LQ.j(`${QQ} has no release digest, so this build refuses it`)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmReplay.js` (x17cru.159bd7ce → bqoxjr.2558012f)

- **File**: `bundles/bloxd.io/chunks/js/wasmReplay.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581)

#### 1. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L4-L5)

```diff
-   61213: (dd, Jd, kd) => {
-     dd.exports = kd.p + "static/media/bloxd_wasm_replay_bg.b5e6e24b7cd4f7bda6f6.wasm"
+   60988: (QQ, FQ, wQ) => {
+     QQ.exports = wQ.p + "static/media/bloxd_wasm_replay_bg.6817b8cd52234e0f59f4.wasm"
```

#### 2. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L7)

```diff
-   6483: (dd, Jd, kd) => {
+   6446: (QQ, FQ, wQ) => {
```

#### 3. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L11)

```diff
-     var pd = kd(2770);
+     var LQ = wQ(2811);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L13-L24` → after: `L13-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L13-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L13-L24) · [Before (L13-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L13-L24)

```diff
-       bloxd_wasm: () => "67c6401d5811eb7b9cff2814a29f966a9dd1ab923e175fa19497af26b4502816",
-       bloxd_wasm_client: () => "6258b24df63176123d93f549bb48f56da442317b3a5ee1b22458e2637caf578d",
-       bloxd_wasm_workers: () => "be7c28fa29cbecc24e19062f2c6bc0a5894a203c3dda65452eccc860e930d821",
-       bloxd_wasm_models: () => "6bdd581d4d0becff3e95b66a27a1a5da4e04f924bcd5bc0dd36e885168896016",
-       bloxd_wasm_webgpu: () => "7696327997962eac9535a5b8094b153b4298d06883723f642562040590146af1",
-       bloxd_wasm_webgl: () => "8873dc66cf374a905034792d179a1bc9e3d8a0d5138b511825a78d7a954240d0",
-       bloxd_wasm_webgl1: () => "8397ed5ce5c8ac7579e7003101c4f8c9a1ce8368296cd2e41ac9a9b90beb7a65",
-       bloxd_wasm_replay: () => "d71b023241834dbfc2db6804be33469db924450506350004c541b0b754121656",
-       bloxd_wasm_recorder: () => "f2e9b9c8ae12c235b86b64a44b272450d96f214d5d6982878bbf330e3339f352",
-       bloxd_wasm_anim: () => "3c8d34a5af00d244cdef6e97addab208455d3fad6df89d6004ea567630021fe8",
-       bloxd_wasm_textures: () => "dfcd6892e79c79af74dba72d92f489620c1624d3bfcd825b670886933b48749c",
-       bloxd_wasm_shader_pack: () => "ca7501d2ff0cccb80272a18641201d2ce4e4b1e9ec5a5ceca284d9a4fa45907f"
+       bloxd_wasm: () => "1dd71b260cf77c239728051b861ab33f1bc93c07cb4fd28db7884da2815d9fb7",
+       bloxd_wasm_client: () => "3cfdd659c2eb8b6808b191f6b866ba4e169bdaee4701af255db5568969af1bb7",
+       bloxd_wasm_workers: () => "e767134c25f99ed90bec9c0af92587618ddb83193667d16121760ce713ad3288",
+       bloxd_wasm_models: () => "7efbd9cd4bdaa31a2b1cc79e297121e9fc854705c550b2f59e1da981f144f4cb",
+       bloxd_wasm_webgpu: () => "5a2823876f9d5f8660104cc25ddeb02c3ddbc283e88525fa31e6d0deaa802210",
+       bloxd_wasm_webgl: () => "08bd13fedb12bff9b9605ef44db652dccf2f7dcf60a963258385b5f773a6f220",
+       bloxd_wasm_webgl1: () => "d6f63b1aa81b972a9480431e3334c89fc0648b9790fe3b5c8ff72a4945814f45",
+       bloxd_wasm_replay: () => "225276b91dfdf588b8a1477982fd12458f6ce65cfbaf6a782c82ab32d22513fb",
+       bloxd_wasm_recorder: () => "5fccb956d97b8d65d45cf6afb9a7042d1e4e4bad858c8aa1ec94da37e97ec72f",
+       bloxd_wasm_anim: () => "3f5071fcbbd4cd73afc810a4abff7c2f49f86a8638003d25fa9521ff9c12ae28",
+       bloxd_wasm_textures: () => "f13f878b8e801e1b7391eae5c539ceb75b7c99a88018bdad896fe7b520427f2f",
+       bloxd_wasm_shader_pack: () => "e521fc18804ece0348d56f2c73e39ef69fee01e1ad9f9c53d92bd0fdbf472492"
```

#### 5. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L26)

```diff
-     var Wd = kd(4563);
+     var oQ = wQ(4540);
```

#### 6. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L32)

```diff
-         onMismatch: Wd.G
+         onMismatch: oQ.o
```

#### 7. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L34)

```diff
-       throw new pd.f(`${dd} has no release digest, so this build refuses it`)
+       throw new LQ.j(`${QQ} has no release digest, so this build refuses it`)
```

#### 8. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L37)

```diff
-   61211: (dd, Jd, kd) => {
+   60983: (QQ, FQ, wQ) => {
```

#### 9. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L47-L49` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L47-L49) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L47-L49)

```diff
-       KWd: () => Nd,
-       HPd: () => bd,
-       hK: () => Wd,
+       xoQ: () => qQ,
+       qkQ: () => IQ,
+       FH: () => oQ,
```

#### 10. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L52-L54` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L52-L54) · [Before (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L52-L54)

```diff
-       rK: () => Pd,
-       PWd: () => Zd,
-       oWd: () => gd
+       wH: () => DQ,
+       uoQ: () => kQ,
+       AoQ: () => vQ
```

#### 11. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L63-L66` → after: `L63-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L63-L66) · [Before (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L63-L66)

```diff
-         ad.VXYC(dd, 0)
-       }
-       eWd(dd, Jd, kd, pd, Nd, Wd) {
-         ad.e3KC(this.__wbg_ptr, dd, Jd, kd, pd, Nd, Wd)
+         WQ.XjrD(QQ, 0)
+       }
+       GoQ(QQ, FQ, wQ, LQ, qQ, oQ) {
+         WQ.dblD(this.__wbg_ptr, QQ, FQ, wQ, LQ, qQ, oQ)
```

#### 12. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L69)

```diff
-         ad.Yg9h(this.__wbg_ptr)
+         WQ.vCLj(this.__wbg_ptr)
```

#### 13. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L72-L90` → after: `L72-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L72-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L72-L90) · [Before (L72-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L72-L90)

```diff
-         ad.uYh3(this.__wbg_ptr, dd, Jd)
-       }
-       GWd(dd, Jd) {
-         ad.WMfU(this.__wbg_ptr, dd, Jd)
-       }
-       xWd() {
-         return ad.Wj2h(this.__wbg_ptr) >>> 0
-       }
-       vWd() {
-         return ad.C4Cm(this.__wbg_ptr) >>> 0
-       }
-       qWd() {
-         return ad.um6I(this.__wbg_ptr) >>> 0
-       }
-       BWd() {
-         return ad.Uull(this.__wbg_ptr) >>> 0
- ... (3 more removed lines; see GitHub link above)
+         WQ.OsrM(this.__wbg_ptr, QQ, FQ)
+       }
+       CoQ(QQ, FQ) {
+         WQ.Sjac(this.__wbg_ptr, QQ, FQ)
+       }
+       ioQ() {
+         return WQ.iVie(this.__wbg_ptr) >>> 0
+       }
+       SoQ() {
+         return WQ.AMoe(this.__wbg_ptr) >>> 0
+       }
+       WoQ() {
+         return WQ.qtpf(this.__wbg_ptr) >>> 0
+       }
+       RoQ() {
+         return WQ.JNLr(this.__wbg_ptr) >>> 0
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L93)

```diff
-         const dd = ad.hJqx();
+         const QQ = WQ.bMko();
```

#### 15. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L97-L100` → after: `L97-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L97-L100) · [Before (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L97-L100)

```diff
-         ad.aRIB(this.__wbg_ptr)
-       }
-       kWd() {
-         return ad.OWjI(this.__wbg_ptr) >>> 0
+         WQ.lO9O(this.__wbg_ptr)
+       }
+       ooQ() {
+         return WQ.fZEk(this.__wbg_ptr) >>> 0
```

#### 16. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L103)

```diff
-         ad.yRGC(this.__wbg_ptr)
+         WQ.iZjQ(this.__wbg_ptr)
```

#### 17. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L106)

```diff
-         ad.N2V6(this.__wbg_ptr)
+         WQ.ZovV(this.__wbg_ptr)
```

#### 18. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L109-L112` → after: `L109-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L109-L112) · [Before (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L109-L112)

```diff
-         return ad.ViaV(this.__wbg_ptr) >>> 0
-       }
-       sWd() {
-         ad.ANai(this.__wbg_ptr)
+         return WQ.tRF8(this.__wbg_ptr) >>> 0
+       }
+       OoQ() {
+         WQ.W9nU(this.__wbg_ptr)
```

#### 19. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L115-L120` → after: `L115-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L115-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L115-L120) · [Before (L115-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L115-L120)

```diff
-         ad.Upew(this.__wbg_ptr, dd, Jd)
-       }
-       aWd(dd) {
-         ad.a0m2(this.__wbg_ptr, dd)
-       }
-       RWd(dd, Jd) {
+         WQ.n7ud(this.__wbg_ptr, QQ, FQ)
+       }
+       roQ(QQ) {
+         WQ.IawZ(this.__wbg_ptr, QQ)
+       }
+       poQ(QQ, FQ) {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L127)

```diff
-           }(Jd, ad.fThp),
+           }(FQ, WQ.O9fp),
```

#### 21. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L129-L135` → after: `L129-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L129-L135) · [Before (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L129-L135)

```diff
-         ad.U7n2(this.__wbg_ptr, dd, kd, pd)
-       }
-       OWd(dd, Jd) {
-         ad.DCTO(this.__wbg_ptr, dd, Jd)
-       }
-       iWd(dd) {
-         ad.bbLy(this.__wbg_ptr, dd)
+         WQ.GbZy(this.__wbg_ptr, QQ, wQ, LQ)
+       }
+       MoQ(QQ, FQ) {
+         WQ.GIAv(this.__wbg_ptr, QQ, FQ)
+       }
+       soQ(QQ) {
+         WQ.cFQv(this.__wbg_ptr, QQ)
```

#### 22. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L138)

```diff
-         return ad.QP85(this.__wbg_ptr, dd) >>> 0
+         return WQ.Hxzv(this.__wbg_ptr, QQ) >>> 0
```

#### 23. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L141)

```diff
-         return ad.go56(this.__wbg_ptr, dd, Jd) >>> 0
+         return WQ.IYpZ(this.__wbg_ptr, QQ, FQ) >>> 0
```

#### 24. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L167)

```diff
-         }(dd, ad.fThp, ad.QMY6),
+         }(QQ, WQ.O9fp, WQ.QSaN),
```

#### 25. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L169)

```diff
-         Nd = ad.lAmF(kd, pd, Jd);
+         qQ = WQ.XpBj(wQ, LQ, FQ);
```

#### 26. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L174-L182` → after: `L174-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L174-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L174-L182) · [Before (L174-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L174-L182)

```diff
-       ad.XXT3()
-     }
- 
-     function Zd() {
-       return ad.AHKj() >>> 0
-     }
- 
-     function gd() {
-       return Id(ad.PCJW())
+       WQ.vyNZ()
+     }
+ 
+     function kQ() {
+       return WQ.BHjA() >>> 0
+     }
+ 
+     function vQ() {
+       return MQ(WQ.MkIr())
```

#### 27. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L188)

```diff
-         yqJQ: {
+         hOo0: {
```

#### 28. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L190)

```diff
-           jDX5: function(dd, Jd) {
+           WG1V: function(QQ, FQ) {
```

#### 29. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L193)

```diff
-           cMjD: function() {
+           y03V: function() {
```

#### 30. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L196)

```diff
-           RK9r: function(dd, Jd) {
+           o88w: function(QQ, FQ) {
```

#### 31. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L199)

```diff
-           Fl89: function(dd, Jd) {
+           vznD: function(QQ, FQ) {
```

#### 32. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L202` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L202) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L202)

```diff
-           Y6JG: function() {
+           U0kg: function() {
```

#### 33. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L265)

```diff
-       return sd = dd, ad = dd.exports, Bd = Jd, ld = null, Ld = null, ad.cWLt(), ad
+       return iQ = QQ, WQ = QQ.exports, SQ = FQ, bQ = null, xQ = null, WQ.ssx9(), WQ
```

#### 34. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L289)

```diff
-           if (!dd.ok) throw new Error(`failed to fetch Wasm: ${dd.status} ${dd.statusText} fetching '${dd.url}'`);
+           if (!QQ.ok) throw new Error(`failed to fetch Wasm: ${QQ.status} ${QQ.statusText} fetching '${QQ.url}'`);
```

#### 35. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L320-L321` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L320-L321) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L320-L321)

```diff
-     var Sd = kd(2770),
-       jd = kd(6483);
+     var UQ = wQ(2811),
+       NQ = wQ(6446);
```

#### 36. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L325)

```diff
-         super((0, Sd.A)(dd, Jd), {
+         super((0, UQ.N)(QQ, FQ), {
```

#### 37. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L344)

```diff
-           await Jd, fd ??= (0, Sd.B)(new kd.U(kd(61213)), (0, jd.e)("bloxd_wasm_replay"));
+           await FQ, KQ ??= (0, UQ.R)(new wQ.U(wQ(60988)), (0, NQ.e)("bloxd_wasm_replay"));
```

#### 38. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplay.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplay.js#L348)

```diff
-             throw fd = null, new Xd((0, Sd.G)(Wd), Wd)
+             throw KQ = null, new TQ((0, UQ.X)(oQ), oQ)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (x17cru.159bd7ce → bqoxjr.2558012f)

- **File**: `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (91 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d)

#### 1. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L4)

```diff
-   37141: (dd, Jd, kd) => {
+   36605: (QQ, FQ, wQ) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L6-L7)

```diff
-       e: () => Pd,
-       i: () => Zd
+       c: () => DQ,
+       f: () => kQ
```

#### 3. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L9)

```diff
-     var pd = kd(29);
+     var LQ = wQ(22);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L98-L99` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L98-L99) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L98-L99)

```diff
-       const kd = null !== (Jd = dd.timeoutMs) && void 0 !== Jd ? Jd : "Error" === dd.type ? Nd : Wd;
-       pd.j.nO("showBottomMessage", {
+       const wQ = null !== (FQ = QQ.timeoutMs) && void 0 !== FQ ? FQ : "Error" === QQ.type ? qQ : oQ;
+       LQ.l.GA("showBottomMessage", {
```

#### 5. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L106)

```diff
-   37154: (dd, Jd, kd) => {
+   36614: (QQ, FQ, wQ) => {
```

#### 6. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L108-L109` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L108-L109) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L108-L109)

```diff
-       e: () => pd,
-       f: () => Nd
+       d: () => LQ,
+       g: () => qQ
```

#### 7. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L162` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L162)

```diff
-   37160: (dd, Jd, kd) => {
+   36619: (QQ, FQ, wQ) => {
```

#### 8. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L164-L166` → after: `L164-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L164-L166) · [Before (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L164-L166)

```diff
-       d: () => Cd,
-       e: () => od,
-       h: () => Kd
+       b: () => mQ,
+       f: () => HQ,
+       g: () => uQ
```

#### 9. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L168-L170` → after: `L168-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L168-L170) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L168-L170)

```diff
-     var pd = kd(22),
-       Nd = kd(29),
-       Wd = kd(37154);
+     var LQ = wQ(17),
+       qQ = wQ(22),
+       oQ = wQ(36614);
```

#### 10. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L177)

```diff
-         of Wd.f) dd[Jd] = !0;
+         of oQ.g) QQ[FQ] = !0;
```

#### 11. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L183)

```diff
-       Nd.j.nO("replayViewer|uiVisibilityChanged")
+       qQ.l.GA("replayViewer|uiVisibilityChanged")
```

#### 12. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L194` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L194) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L194)

```diff
-       }, "nametag" === dd && pd.d.set({
+       }, "nametag" === QQ && LQ.c.set({
```

#### 13. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L200)

```diff
-       Zd = Pd(), pd.d.set({
+       kQ = DQ(), LQ.c.set({
```

#### 14. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L205)

```diff
-   39378: (dd, Jd, kd) => {
+   38776: (QQ, FQ, wQ) => {
```

#### 15. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L207)

```diff
-       c: () => md
+       b: () => rQ
```

#### 16. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L209-L212` → after: `L209-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L209-L212) · [Before (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L209-L212)

```diff
-     var pd = kd(1769),
-       Nd = kd(1371),
-       Wd = kd(56),
-       Pd = kd(1044),
+     var LQ = wQ(1739),
+       qQ = wQ(1362),
+       oQ = wQ(53),
+       DQ = wQ(1070),
```

#### 17. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L214-L215` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L214-L215) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L214-L215)

```diff
-       gd = kd(1461),
-       Cd = kd(95);
+       vQ = wQ(1451),
+       mQ = wQ(96);
```

#### 18. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L220)

```diff
-       return "webm" === dd ? Kd : od
+       return "webm" === QQ ? uQ : HQ
```

#### 19. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L232)

```diff
-     var Od = kd(1103);
+     var AQ = wQ(1107);
```

#### 20. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L301)

```diff
-             children: `Your device does not support exporting. Try recording with an external software like ${dd}.`
+             children: `Your device does not support exporting. Try recording with an external software like ${QQ}.`
```

#### 21. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L304` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L304) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L304)

```diff
-             children: (0, Od.jsx)(gd.B, {
+             children: (0, AQ.jsx)(vQ.F, {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L376)

```diff
-           children: [(0, Od.jsx)(gd.j, {
+           children: [(0, AQ.jsx)(vQ.m, {
```

#### 23. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L386` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L386) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L386)

```diff
-           }), (0, Od.jsx)(gd.B, {
+           }), (0, AQ.jsx)(vQ.F, {
```

#### 24. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L396-L398` → after: `L396-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L396-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L396-L398) · [Before (L396-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L396-L398)

```diff
-     var vd = kd(4743),
-       xd = kd(37154),
-       qd = kd(37160);
+     var pQ = wQ(4694),
+       cQ = wQ(36614),
+       CQ = wQ(36619);
```

#### 25. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L403` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L403) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L403)

```diff
-         const dd = (0, qd.d)();
+         const QQ = (0, CQ.b)();
```

#### 26. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L408` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L408) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L408)

```diff
-           of xd.f)
+           of cQ.g)
```

#### 27. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L437` → after: `L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L437) · [Before (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L437)

```diff
-     var Md = kd(39228);
+     var RQ = wQ(38620);
```

#### 28. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L441)

```diff
-       dd.holdInput(!1), (0, Md.f)(!1)
+       QQ.holdInput(!1), (0, RQ.e)(!1)
```

#### 29. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L487` → after: `L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L487) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L487)

```diff
-       const Kd = null !== (Jd = null === (kd = Wd.startFailure) || void 0 === kd ? void 0 : kd.call(Wd)) && void 0 !== Jd ? Jd : null;
+       const uQ = null !== (FQ = null === (wQ = oQ.startFailure) || void 0 === wQ ? void 0 : wQ.call(oQ)) && void 0 !== FQ ? FQ : null;
```

#### 30. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L493` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L493) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L493)

```diff
-           return !(0, Md.d)() && ((0, Md.f)(!0), dd.holdInput(!0), !0)
+           return !(0, RQ.d)() && ((0, RQ.e)(!0), QQ.holdInput(!0), !0)
```

#### 31. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L497` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L497) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L497)

```diff
-         od = await ad(Pd.includeUi, (() => Wd.canvas()), Wd.AY)
+         HQ = await WQ(DQ.includeUi, (() => oQ.canvas()), oQ.mN)
```

#### 32. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L510` → after: `L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L510) · [Before (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L510)

```diff
-         Ld = Wd.playbackSpeed(), Wd.closeViewer(), Wd.setPlaybackSpeed(1), Wd.pause(), Wd.seekToTick(null !== Zd && void 0 !== Zd ? Zd : 0);
+         xQ = oQ.playbackSpeed(), oQ.closeViewer(), oQ.setPlaybackSpeed(1), oQ.pause(), oQ.seekToTick(null !== kQ && void 0 !== kQ ? kQ : 0);
```

#### 33. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L518` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L518) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L518)

```diff
-           return null !== kd && void 0 !== kd ? kd : null
+           return null !== wQ && void 0 !== wQ ? wQ : null
```

#### 34. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L525)

```diff
-           if (!Jd) throw new Error(`No MediaRecorder mime type available for ${dd}`);
+           if (!FQ) throw new Error(`No MediaRecorder mime type available for ${QQ}`);
```

#### 35. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L568)

```diff
-         const Kd = null !== (qd = null === (md = Wd.playbackFailure) || void 0 === md ? void 0 : md.call(Wd)) && void 0 !== qd ? qd : null;
+         const uQ = null !== (CQ = null === (rQ = oQ.playbackFailure) || void 0 === rQ ? void 0 : rQ.call(oQ)) && void 0 !== CQ ? CQ : null;
```

#### 36. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L571)

```diff
-           subtitle: `${Kd} Nothing was saved.`
+           subtitle: `${uQ} Nothing was saved.`
```

#### 37. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L576` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L576) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L576)

```diff
-         Od.size > 0 ? (0, pd.d)(Od, function(dd, Jd) {
+         AQ.size > 0 ? (0, LQ.e)(AQ, function(QQ, FQ) {
```

#### 38. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L580-L581` → after: `L580-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L580-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L580-L581) · [Before (L580-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L580-L581)

```diff
-           if (dd) return `${dd.replace(/\.bloxdreplay$/i,"")}.${kd}`;
-           return `bloxd-replay-${Date.now()}.${kd}`
+           if (QQ) return `${QQ.replace(/\.bloxdreplay$/i,"")}.${wQ}`;
+           return `bloxd-replay-${Date.now()}.${wQ}`
```

#### 39. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L614` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L614) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L614)

```diff
-   4743: (dd, Jd, kd) => {
+   4694: (QQ, FQ, wQ) => {
```

#### 40. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L621-L622` → after: `L621-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L621-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L621-L622) · [Before (L621-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L621-L622)

```diff
-     var pd, Nd = kd(4745),
-       Wd = kd(4516);
+     var LQ, qQ = wQ(4702),
+       oQ = wQ(4494);
```

#### 41. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L627` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L627) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L627)

```diff
-       if (Pd.ctx || !Pd.usingWebAudio || "undefined" === typeof AudioContext || !(0, Wd.h)()) return;
+       if (DQ.ctx || !DQ.usingWebAudio || "undefined" === typeof AudioContext || !(0, oQ.i)()) return;
```

#### 42. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L639` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L639) · [Before (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L639)

```diff
-       Nd.gain.setValueAtTime(Pd._muted ? 0 : null !== (dd = Pd._volume) && void 0 !== dd ? dd : 1, pd.currentTime), Nd.connect(pd.destination), Pd.ctx = pd, Pd.masterGain = Nd, null === (Jd = Pd._setup) || void 0 === Jd || Jd.call(Pd)
+       qQ.gain.setValueAtTime(DQ._muted ? 0 : null !== (QQ = DQ._volume) && void 0 !== QQ ? QQ : 1, LQ.currentTime), qQ.connect(LQ.destination), DQ.ctx = LQ, DQ.masterGain = qQ, null === (FQ = DQ._setup) || void 0 === FQ || FQ.call(DQ)
```

#### 43. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L682` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L682) · [Before (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L682)

```diff
-   42497: (dd, Jd, kd) => {
+   41962: (QQ, FQ, wQ) => {
```

#### 44. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L684-L685` → after: `L684-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L684-L685) · [Before (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L684-L685)

```diff
-       b: () => pd,
-       f: () => Nd
+       c: () => LQ,
+       d: () => qQ
```

#### 45. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L694` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L694) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L694)

```diff
-   42535: (dd, Jd, kd) => {
+   41999: (QQ, FQ, wQ) => {
```

#### 46. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L699-L702` → after: `L699-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L699-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L699-L702) · [Before (L699-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L699-L702)

```diff
-     var pd = kd(37141),
-       Nd = kd(37160),
-       Wd = kd(4680),
-       Pd = kd(42497);
+     var LQ = wQ(36605),
+       qQ = wQ(36619),
+       oQ = wQ(4632),
+       DQ = wQ(41962);
```

#### 47. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L704` → after: `L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L704) · [Before (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L704)

```diff
-       gd = new Set(["EQ"]);
+       vQ = new Set(["JY"]);
```

#### 48. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L708` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L708) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L708)

```diff
-         this.deps = dd, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
+         this.deps = QQ, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
```

#### 49. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L717` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L717) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L717)

```diff
-         return null !== this.lastView && this.lastView.state !== Wd.sd.None
+         return null !== this.lastView && this.lastView.state !== oQ.Uc.None
```

#### 50. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L729` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L729) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L729)

```diff
-         return this.cropping ? pd.e.cropBusy.text : null
+         return this.cropping ? LQ.c.cropBusy.text : null
```

#### 51. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L740` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L740) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L740)

```diff
-           if (!gd.setPlayback(!0)) throw new Error(pd.e.cantOpen.text);
+           if (!vQ.setPlayback(!0)) throw new Error(LQ.c.cantOpen.text);
```

#### 52. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L751` → after: `L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L751) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L751)

```diff
-         if (Cd !== this.epoch) throw new Error(pd.e.coreStopped.text);
+         if (mQ !== this.epoch) throw new Error(LQ.c.coreStopped.text);
```

#### 53. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L759-L764` → after: `L759-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L759-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L759-L764) · [Before (L759-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L759-L764)

```diff
-               case Wd.ed.ModuleTrap:
-                 return pd.e.coreStopped;
-               case Wd.ed.ModuleLoad:
-                 return pd.e.viewerLoadFailed;
-               case Wd.ed.TooLarge:
-                 return pd.e.cantOpen
+               case oQ.Oc.ModuleTrap:
+                 return LQ.c.coreStopped;
+               case oQ.Oc.ModuleLoad:
+                 return LQ.c.viewerLoadFailed;
+               case oQ.Oc.TooLarge:
+                 return LQ.c.cantOpen
```

#### 54. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L770` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L770) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L770)

```diff
-         return this.rejectSave(new Error(pd.e.saveClosed.text)), this.fileName = null !== (kd = null !== (Nd = Jd.fileName) && void 0 !== Nd ? Nd : null === (Pd = Jd.fileHandle) || void 0 === Pd ? void 0 : Pd.name) && void 0 !== kd ? kd : null, this.fileHandle = null !== (Zd = Jd … [truncated]
+         return this.rejectSave(new Error(LQ.c.saveClosed.text)), this.fileName = null !== (wQ = null !== (qQ = FQ.fileName) && void 0 !== qQ ? qQ : null === (DQ = FQ.fileHandle) || void 0 === DQ ? void 0 : DQ.name) && void 0 !== wQ ? wQ : null, this.fileHandle = null !== (kQ = FQ … [truncated]
```

#### 55. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L778` → after: `L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L778) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L778)

```diff
-         this.holds.has("EQ") || this.deps.client.play()
+         this.holds.has("JY") || this.deps.client.play()
```

#### 56. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L784` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L784) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L784)

```diff
-         this.isOpen && this.pause(), this.hold("EQ")
+         this.isOpen && this.pause(), this.hold("JY")
```

#### 57. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L789` → after: `L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L789) · [Before (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L789)

```diff
-         null !== kd && (Jd || dd < kd.Do) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(dd, Jd)
+         null !== wQ && (FQ || QQ < wQ.fH) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(QQ, FQ)
```

#### 58. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L799` → after: `L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L799) · [Before (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L799)

```diff
-         null !== dd && dd.state !== Wd.sd.None && this.setCameraMode(Pd.b[(Pd.b.indexOf(dd.cameraMode) + 1) % Pd.b.length])
+         null !== QQ && QQ.state !== oQ.Uc.None && this.setCameraMode(DQ.c[(DQ.c.indexOf(QQ.cameraMode) + 1) % DQ.c.length])
```

#### 59. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L817` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L817) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L817)

```diff
-         return !(Jd <= dd) && (null !== this.pendingSave ? (this.deps.notify(pd.e.saveBusy), !1) : !!this.deps.client.crop(dd, Jd) && (this.cropAsked = !0, this.hold("crop"), !0))
+         return !(FQ <= QQ) && (null !== this.pendingSave ? (this.deps.notify(LQ.c.saveBusy), !1) : !!this.deps.client.crop(QQ, FQ) && (this.cropAsked = !0, this.hold("crop"), !0))
```

#### 60. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L820` → after: `L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L820) · [Before (L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L820)

```diff
-         return null !== this.pendingSave ? Promise.reject(new Error(pd.e.saveBusy.text)) : new Promise(((dd, Jd) => {
+         return null !== this.pendingSave ? Promise.reject(new Error(LQ.c.saveBusy.text)) : new Promise(((QQ, FQ) => {
```

#### 61. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L825` → after: `L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L825) · [Before (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L825)

```diff
-           this.pendingSave = kd, this.editsAtSave = this.edits, this.deps.client.save((0, Pd.f)()).then((dd => {
+           this.pendingSave = wQ, this.editsAtSave = this.edits, this.deps.client.save((0, DQ.d)()).then((QQ => {
```

#### 62. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L828` → after: `L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L828) · [Before (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L828)

```diff
-             this.pendingSave === kd && this.rejectSave(dd instanceof Error ? dd : new Error(String(dd)))
+             this.pendingSave === wQ && this.rejectSave(QQ instanceof Error ? QQ : new Error(String(QQ)))
```

#### 63. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L846)

```diff
-         this.fileHandle = dd, this.fileName = null !== (kd = null !== (pd = null === dd || void 0 === dd ? void 0 : dd.name) && void 0 !== pd ? pd : Jd) && void 0 !== kd ? kd : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
+         this.fileHandle = QQ, this.fileName = null !== (wQ = null !== (LQ = null === QQ || void 0 === QQ ? void 0 : QQ.name) && void 0 !== LQ ? LQ : FQ) && void 0 !== wQ ? wQ : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
```

#### 64. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L849` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L849) · [Before (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L849)

```diff
-         this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(pd.e.coreStopped.text)), this.rejectSave(new Error(pd.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
+         this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(LQ.c.coreStopped.text)), this.rejectSave(new Error(LQ.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
```

#### 65. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L855-L856` → after: `L855-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L855-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L855-L856) · [Before (L855-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L855-L856)

```diff
-         this.lastView = pd, this.opening && null !== pd && pd.state !== Wd.sd.None && pd.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Nd.e)()), this.cropAsked ? (this.cropAsked = !1, null !== pd && pd.state === Wd.sd.Cropping ? this.crop … [truncated]
-         const Cd = 0 === this.settleFrames && 0 === (null !== (dd = null === (Jd = (kd = this.deps).meshPending) || void 0 === Jd ? void 0 : Jd.call(kd)) && void 0 !== dd ? dd : 0);
+         this.lastView = LQ, this.opening && null !== LQ && LQ.state !== oQ.Uc.None && LQ.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, qQ.f)()), this.cropAsked ? (this.cropAsked = !1, null !== LQ && LQ.state === oQ.Uc.Cropping ? this.crop … [truncated]
+         const mQ = 0 === this.settleFrames && 0 === (null !== (QQ = null === (FQ = (wQ = this.deps).meshPending) || void 0 === FQ ? void 0 : FQ.call(wQ)) && void 0 !== QQ ? QQ : 0);
```

#### 66. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L863` → after: `L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L863) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L863)

```diff
-         (0, Nd.e)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
+         (0, qQ.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
```

#### 67. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L867)

```diff
-           case Wd.ed.TooLarge:
+           case oQ.Oc.TooLarge:
```

#### 68. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L869-L871` → after: `L869-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L869-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L869-L871) · [Before (L869-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L869-L871)

```diff
-           case Wd.ed.Open:
-           case Wd.ed.NothingStaged:
-             this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(pd.e.cantOpen), this.settleOpen(new Error(pd.e.cantOpen.text));
+           case oQ.Oc.Open:
+           case oQ.Oc.NothingStaged:
+             this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(LQ.c.cantOpen), this.settleOpen(new Error(LQ.c.cantOpen.text));
```

#### 69. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L873-L874` → after: `L873-L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L873-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L873-L874) · [Before (L873-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L873-L874)

```diff
-           case Wd.ed.Crop:
-             if (dd.code === Wd.bd.Busy) {
+           case oQ.Oc.Crop:
+             if (QQ.code === oQ.Kc.Busy) {
```

#### 70. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L882` → after: `L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L882) · [Before (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L882)

```diff
-             this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(pd.e.cropFailed);
+             this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(LQ.c.cropFailed);
```

#### 71. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L884-L887` → after: `L884-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L884-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L884-L887) · [Before (L884-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L884-L887)

```diff
-           case Wd.ed.ModuleTrap:
-           case Wd.ed.ModuleLoad:
-           case Wd.ed.Port:
-             this.moduleEnded(dd.reason === Wd.ed.ModuleTrap ? pd.e.coreStopped : pd.e.cantOpen);
+           case oQ.Oc.ModuleTrap:
+           case oQ.Oc.ModuleLoad:
+           case oQ.Oc.Port:
+             this.moduleEnded(QQ.reason === oQ.Oc.ModuleTrap ? LQ.c.coreStopped : LQ.c.cantOpen);
```

#### 72. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L889` → after: `L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L889) · [Before (L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L889)

```diff
-           case Wd.ed.NotLive:
+           case oQ.Oc.NotLive:
```

#### 73. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L893` → after: `L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L893) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L893)

```diff
-             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${dd.reason})`), this.seekAsked = !1, this.release("seek")
+             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${QQ.reason})`), this.seekAsked = !1, this.release("seek")
```

#### 74. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L905` → after: `L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L905) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L905)

```diff
-         this.rejectSave(new Error(dd ? pd.e.saveBusy.text : "The replay couldn't be saved"))
+         this.rejectSave(new Error(QQ ? LQ.c.saveBusy.text : "The replay couldn't be saved"))
```

#### 75. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L911` → after: `L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L911) · [Before (L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L911)

```diff
-         null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(pd.e.cropBusy.text)) : this.deps.notify(pd.e.cropBusy)
+         null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(LQ.c.cropBusy.text)) : this.deps.notify(LQ.c.cropBusy)
```

#### 76. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L936` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L936) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L936)

```diff
-   42529: (dd, Jd, kd) => {
+   41990: (QQ, FQ, wQ) => {
```

#### 77. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L942-L945` → after: `L942-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L942-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L942-L945) · [Before (L942-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L942-L945)

```diff
-     var pd = kd(39378),
-       Nd = kd(42535),
-       Wd = kd(4680),
-       Pd = kd(2352);
+     var LQ = wQ(38776),
+       qQ = wQ(41999),
+       oQ = wQ(4632),
+       DQ = wQ(2327);
```

#### 78. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L952` → after: `L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L952) · [Before (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L952)

```diff
-       return (null === (Jd = dd.view) || void 0 === Jd ? void 0 : Jd.state) === Wd.sd.Cropping || dd.EC.includes("crop")
+       return (null === (FQ = QQ.view) || void 0 === FQ ? void 0 : FQ.state) === oQ.Uc.Cropping || QQ.ym.includes("crop")
```

#### 79. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L956` → after: `L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L956) · [Before (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L956)

```diff
-       return (0, pd.c)((() => function(dd) {
+       return (0, LQ.b)((() => function(QQ) {
```

#### 80. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L959)

```diff
-           Ld = null !== (Jd = null === Qd || void 0 === Qd ? void 0 : Qd.view) && void 0 !== Jd ? Jd : null,
+           xQ = null !== (FQ = null === YQ || void 0 === YQ ? void 0 : YQ.view) && void 0 !== FQ ? FQ : null,
```

#### 81. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L961-L962` → after: `L961-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L961-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L961-L962) · [Before (L961-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L961-L962)

```diff
-         if (!Qd || !Ld || Ld.state === Wd.sd.None || 0 === Ld.totalTicks || !Od || Kd(Qd)) return null;
-         const ed = null !== (kd = dd.now) && void 0 !== kd ? kd : () => performance.now(),
+         if (!YQ || !xQ || xQ.state === oQ.Uc.None || 0 === xQ.totalTicks || !AQ || uQ(YQ)) return null;
+         const tQ = null !== (wQ = QQ.now) && void 0 !== wQ ? wQ : () => performance.now(),
```

#### 82. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L966` → after: `L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L966) · [Before (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L966)

```diff
-             return Jd === Qd && Jd.id === Rd && Jd.isOpen ? Jd : null
+             return FQ === YQ && FQ.id === eQ && FQ.isOpen ? FQ : null
```

#### 83. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L968` → after: `L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L968) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L968)

```diff
-           Gd = Math.min(null !== (pd = null === (Nd = Ld.mark) || void 0 === Nd ? void 0 : Nd.outTick) && void 0 !== pd ? pd : 1 / 0, Ld.totalTicks - 1);
+           GQ = Math.min(null !== (LQ = null === (qQ = xQ.mark) || void 0 === qQ ? void 0 : qQ.outTick) && void 0 !== LQ ? LQ : 1 / 0, xQ.totalTicks - 1);
```

#### 84. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L973` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L973) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L973)

```diff
-           return (null === (dd = Id()) || void 0 === dd || null === (Jd = dd.view) || void 0 === Jd ? void 0 : Jd.state) === Wd.sd.Playing
+           return (null === (QQ = MQ()) || void 0 === QQ || null === (FQ = QQ.view) || void 0 === FQ ? void 0 : FQ.state) === oQ.Uc.Playing
```

#### 85. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L976-L977` → after: `L976-L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L976-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L976-L977) · [Before (L976-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L976-L977)

```diff
-           AY: Wd.Gd,
-           playbackMarkInTick: null !== (od = null === (ld = Ld.mark) || void 0 === ld ? void 0 : ld.inTick) && void 0 !== od ? od : null,
+           mN: oQ.cd,
+           playbackMarkInTick: null !== (HQ = null === (bQ = xQ.mark) || void 0 === bQ ? void 0 : bQ.inTick) && void 0 !== HQ ? HQ : null,
```

#### 86. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L984` → after: `L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L984) · [Before (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L984)

```diff
-             return null !== (dd = null === (Jd = Id()) || void 0 === Jd ? void 0 : Jd.fileName) && void 0 !== dd ? dd : null
+             return null !== (QQ = null === (FQ = MQ()) || void 0 === FQ ? void 0 : FQ.fileName) && void 0 !== QQ ? QQ : null
```

#### 87. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L988` → after: `L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L988) · [Before (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L988)

```diff
-             return null !== (dd = null === (Jd = Id()) || void 0 === Jd || null === (kd = Jd.view) || void 0 === kd ? void 0 : kd.speed) && void 0 !== dd ? dd : 1
+             return null !== (QQ = null === (FQ = MQ()) || void 0 === FQ || null === (wQ = FQ.view) || void 0 === wQ ? void 0 : wQ.speed) && void 0 !== QQ ? QQ : 1
```

#### 88. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1009` → after: `L1009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1009) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1009)

```diff
-               null === kd ? (clearInterval(Jd), dd()) : kd.EC.includes("seek") || (clearInterval(Jd), setTimeout(dd, Cd))
+               null === wQ ? (clearInterval(FQ), QQ()) : wQ.ym.includes("seek") || (clearInterval(FQ), setTimeout(QQ, mQ))
```

#### 89. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1014` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1014) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1014)

```diff
-             return null !== vd && null !== Id() && (!!qd() || !xd && (null !== (dd = null === (Jd = Id()) || void 0 === Jd || null === (kd = Jd.view) || void 0 === kd ? void 0 : kd.Do) && void 0 !== dd ? dd : 0) < Gd && ed() - vd < Zd)
+             return null !== pQ && null !== MQ() && (!!CQ() || !cQ && (null !== (QQ = null === (FQ = MQ()) || void 0 === FQ || null === (wQ = FQ.view) || void 0 === wQ ? void 0 : wQ.fH) && void 0 !== QQ ? QQ : 0) < GQ && tQ() - pQ < kQ)
```

#### 90. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1028)

```diff
-             return null === kd ? "The replay closed before the video finished." : (null !== (dd = null === (Jd = kd.view) || void 0 === Jd ? void 0 : Jd.Do) && void 0 !== dd ? dd : 0) >= Gd ? null : xd ? "The replay stopped before the video finished." : "The replay didn't start p … [truncated]
+             return null === wQ ? "The replay closed before the video finished." : (null !== (QQ = null === (FQ = wQ.view) || void 0 === FQ ? void 0 : FQ.fH) && void 0 !== QQ ? QQ : 0) >= GQ ? null : cQ ? "The replay stopped before the video finished." : "The replay didn't start p … [truncated]
```

#### 91. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1037` → after: `L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1037) · [Before (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1037)

```diff
-           holdInput: Pd.f
+           holdInput: DQ.e
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (x17cru.159bd7ce → bqoxjr.2558012f)

- **File**: `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445)

#### 1. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L77)

```diff
-         const Ld = gd ? 1 << gd : Nd,
+         const xQ = vQ ? 1 << vQ : qQ,
```

#### 2. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L85)

```diff
-         const Rd = new kd((1 == Jd ? Od || ed : Jd ? 0 : ed) + 12);
+         const eQ = new wQ((1 == FQ ? AQ || tQ : FQ ? 0 : tQ) + 12);
```

#### 3. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L91)

```diff
-           w: Jd && 1 != Jd ? Jd : Rd.subarray(12),
+           w: FQ && 1 != FQ ? FQ : eQ.subarray(12),
```

#### 4. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L291` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L291) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L291)

```diff
-             (ad ? Bd : qd)(dd.subarray(Wd, Wd += id), Md.subarray(Fd), Nd)
+             (RQ ? SQ : CQ)(QQ.subarray(oQ, oQ += WQ), OQ.subarray(sQ), qQ)
```

#### 5. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L356)

```diff
-             Nd ? Jd.y += ad : Md = Pd(Md, 0, ad)
+             qQ ? FQ.y += RQ : OQ = DQ(OQ, 0, RQ)
```

#### 6. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L380` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L380) · [Before (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L380)

```diff
-       if (this.parts.push(dd), this.EC += dd.length, this.EC < this.needed) return;
+       if (this.parts.push(QQ), this.ym += QQ.length, this.ym < this.needed) return;
```

#### 7. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L389` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L389) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L389)

```diff
-       })(this.parts, this.EC);
+       })(this.parts, this.ym);
```

#### 8. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L418` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L418) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L418)

```diff
-       this.parts = Nd.length ? [Nd] : [], this.EC = Nd.length, pd.b = 0
+       this.parts = qQ.length ? [qQ] : [], this.ym = qQ.length, LQ.b = 0
```

#### 9. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L434)

```diff
-         this.stop(kd instanceof RangeError ? `out of memory decoding ${this.href}: ${dd(kd)}` : `${this.href} did not decode: ${dd(kd)}`)
+         this.stop(wQ instanceof RangeError ? `out of memory decoding ${this.href}: ${QQ(wQ)}` : `${this.href} did not decode: ${QQ(wQ)}`)
```

#### 10. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L438)

```diff
-       if (null === this.rQ) {
+       if (null === this.PY) {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L440` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L440) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L440)

```diff
-         return this.href = Jd, void(this.rQ = new id(kd))
+         return this.href = FQ, void(this.PY = new WQ(wQ))
```

#### 12. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L443)

```diff
-       const Jd = this.rQ;
+       const FQ = this.PY;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (x17cru.159bd7ce → bqoxjr.2558012f)

- **File**: `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89)

#### 1. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L4)

```diff
-   36585: (dd, Jd, kd) => {
+   36060: (QQ, FQ, wQ) => {
```

#### 2. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L13-L23` → after: `L13-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L13-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L13-L23) · [Before (L13-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L13-L23)

```diff
-     var pd = kd(300),
-       Nd = kd(22),
-       Wd = kd(2646),
-       Pd = kd(3282),
-       Zd = kd(626),
-       gd = kd(284),
-       Cd = kd(95),
-       Kd = kd(103),
-       od = kd(2651),
-       ld = kd(33),
-       Qd = kd(111),
+     var LQ = wQ(307),
+       qQ = wQ(17),
+       oQ = wQ(2689),
+       DQ = wQ(3318),
+       kQ = wQ(634),
+       vQ = wQ(291),
+       mQ = wQ(96),
+       uQ = wQ(106),
+       HQ = wQ(2697),
+       bQ = wQ(27),
+       YQ = wQ(118),
```

#### 3. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L25-L27` → after: `L25-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L25-L27) · [Before (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L25-L27)

```diff
-       Od = kd(2704),
-       ed = kd(313),
-       Rd = kd(9151);
+       AQ = wQ(2753),
+       tQ = wQ(317),
+       eQ = wQ(9001);
```

#### 4. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L32)

```diff
-       return `"${(dd.length>Jd?`${dd.slice(0,Jd)}...`:dd).replace(/[^ -~]|["\\]/g,"?")}"`
+       return `"${(QQ.length>FQ?`${QQ.slice(0,FQ)}...`:QQ).replace(/[^ -~]|["\\]/g,"?")}"`
```

#### 5. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L42)

```diff
-       return [`loss holds ${xd(dd.lossHolds)}`, `stops packs ${xd(dd.lossStopsPack)}`, `any loss ${xd(dd.anyLoss)}`, `old intel ${xd(dd.oldIntelDriver)}`, `default off for packs ${xd(dd.defaultOffForPacks)}`, `default off reason ${null!==(Jd=dd.defaultOffReason)&&void 0!==Jd?Jd:" … [truncated]
+       return [`loss holds ${cQ(QQ.lossHolds)}`, `stops packs ${cQ(QQ.lossStopsPack)}`, `any loss ${cQ(QQ.anyLoss)}`, `old intel ${cQ(QQ.oldIntelDriver)}`, `default off for packs ${cQ(QQ.defaultOffForPacks)}`, `default off reason ${null!==(FQ=QQ.defaultOffReason)&&void 0!==FQ?FQ:" … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L53` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L53) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L53)

```diff
-       return `renderer requested ${Jd}, runs ${kd}, from ${pd}${null===Nd?"":`, fell back: ${vd(Nd,80)}`}`
+       return `renderer requested ${FQ}, runs ${wQ}, from ${LQ}${null===qQ?"":`, fell back: ${pQ(qQ,80)}`}`
```

#### 7. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L57` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L57) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L57)

```diff
-       return dd ? `stopping packs: iOS, ${null!==Jd&&void 0!==Jd?Jd:1} losses in a row within a day` : "stopping packs"
+       return QQ ? `stopping packs: iOS, ${null!==FQ&&void 0!==FQ?FQ:1} losses in a row within a day` : "stopping packs"
```

#### 8. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L62-L66` → after: `L62-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L62-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L62-L66) · [Before (L62-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L62-L66)

```diff
-       return `pick (wasm): backend ${null!==(Jd=dd.backend)&&void 0!==Jd?Jd:"none"}, webgpu fallback ${null!==(kd=dd.reason)&&void 0!==kd?kd:"none"}, from ${null!==(pd=dd.source)&&void 0!==pd?pd:"none"}, storage pull breaks ${xd(dd.storagePullBreaks)}; packs run ${xd("webgpu"===d … [truncated]
-     }
- 
-     function Md(dd, Jd, kd) {
-       return `pack ${null===dd?"(name not read)":vd(dd,Id)} ${Jd}${null===kd?"":`, ${kd} variants`}`
+       return `pick (wasm): backend ${null!==(FQ=QQ.backend)&&void 0!==FQ?FQ:"none"}, webgpu fallback ${null!==(wQ=QQ.reason)&&void 0!==wQ?wQ:"none"}, from ${null!==(LQ=QQ.source)&&void 0!==LQ?LQ:"none"}, storage pull breaks ${cQ(QQ.storagePullBreaks)}; packs run ${cQ("webgpu"===Q … [truncated]
+     }
+ 
+     function RQ(QQ, FQ, wQ) {
+       return `pack ${null===QQ?"(name not read)":pQ(QQ,MQ)} ${FQ}${null===wQ?"":`, ${wQ} variants`}`
```

#### 9. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L89)

```diff
-       (0, Od.h)("webgpuloss", dd)
+       (0, AQ.m)("webgpuloss", QQ)
```

#### 10. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L94-L104` → after: `L94-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L94-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L94-L104) · [Before (L94-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L94-L104)

```diff
-         lossHolds: (0, Ld.z)(),
-         lossStopsPack: (0, Ld.G)(),
-         anyLoss: (0, Ld.i)(),
-         oldIntelDriver: !0 === ld.i.getItem(Qd.D),
-         defaultOffForPacks: Nd.d.isWebGpuDefaultOff(),
-         defaultOffReason: Nd.d.webGpuDefaultOffReason(),
-         settingStored: ld.i.getItem(pd._b),
-         setting: Nd.d.get("clientEscMenuOptions").useWebGpu,
-         urlRenderer: Kd.currentUrl.getSearchParam(od.d),
-         storedRenderer: ld.i.getItem(od.h),
-         hiddenLossArm: gd.c.webgpu_hidden_loss_v1
+         lossHolds: (0, xQ.r)(),
+         lossStopsPack: (0, xQ.v)(),
+         anyLoss: (0, xQ.g)(),
+         oldIntelDriver: !0 === bQ.i.getItem(YQ.J),
+         defaultOffForPacks: qQ.c.isWebGpuDefaultOff(),
+         defaultOffReason: qQ.c.webGpuDefaultOffReason(),
+         settingStored: bQ.i.getItem(LQ.lc),
+         setting: qQ.c.get("clientEscMenuOptions").useWebGpu,
+         urlRenderer: uQ.currentUrl.getSearchParam(HQ.b),
+         storedRenderer: bQ.i.getItem(HQ.e),
+         hiddenLossArm: vQ.e.webgpu_hidden_loss_v1
```

#### 11. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L111)

```diff
-         if ("object" !== typeof dd) return `unreadable (${typeof dd})`;
+         if ("object" !== typeof QQ) return `unreadable (${typeof QQ})`;
```

#### 12. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L114)

```diff
-         return ["browser " + (Jd ? "this one" : "another"), null === Nd ? "no time" : `set ${((kd-Nd)/ed.j).toFixed(1)} h ago`, `losses ${"number"===typeof pd.losses?pd.losses:"unset (1)"}${null!==Nd&&kd-Nd<ed.i?", the last within a day":""}`, `hidden-only ${"number"===typeof pd. … [truncated]
+         return ["browser " + (FQ ? "this one" : "another"), null === qQ ? "no time" : `set ${((wQ-qQ)/tQ.n).toFixed(1)} h ago`, `losses ${"number"===typeof LQ.losses?LQ.losses:"unset (1)"}${null!==qQ&&wQ-qQ<tQ.j?", the last within a day":""}`, `hidden-only ${"number"===typeof LQ. … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L125)

```diff
-       const dd = (0, Ld.p)().now;
+       const QQ = (0, xQ.m)().now;
```

#### 14. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L134-L135` → after: `L134-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L134-L135) · [Before (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L134-L135)

```diff
-       } = (0, Ld.p)(), pd = JSON.stringify(dd) === JSON.stringify(Jd) ? "qQ" : `now ${fd(Jd)}`;
-       jd(`load (${Zd.x?"wasm":"js"}, os ${(0,Cd.getOperatingSystem)()}): stored loss ${fd(dd)}; ${pd}; unreported ${function(dd){if(null===dd||void 0===dd||"object"!==typeof dd)return"none";const{hidden:Jd,visible:kd}=dd;return`
+       } = (0, xQ.m)(), LQ = JSON.stringify(QQ) === JSON.stringify(FQ) ? "iY" : `now ${KQ(FQ)}`;
+       NQ(`load (${kQ.s?"wasm":"js"}, os ${(0,mQ.getOperatingSystem)()}): stored loss ${KQ(QQ)}; ${LQ}; unreported ${function(QQ){if(null===QQ||void 0===QQ||"object"!==typeof QQ)return"none";const{hidden:FQ,visible:wQ}=QQ;return`
```

#### 15. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L137` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L137) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L137)

```diff
-           "number" === typeof Jd ? Jd : 0
+           "number" === typeof FQ ? FQ : 0
```

#### 16. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L139-L141` → after: `L139-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L139-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L139-L141) · [Before (L139-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L139-L141)

```diff
-           "number" === typeof kd ? kd : 0
-         }
-         `}(kd)}; webgpu_loss_page ${Ld.D}`), jd(`load: ${qd(Xd())}; pack expected ${(0,Pd.d)(Cd.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
+           "number" === typeof wQ ? wQ : 0
+         }
+         `}(wQ)}; webgpu_loss_page ${xQ.t}`), NQ(`load: ${CQ(TQ())}; pack expected ${(0,DQ.f)(mQ.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
```

#### 17. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L146-L148` → after: `L146-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L146-L148) · [Before (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L146-L148)

```diff
-         const pd = dd.setting ? "the setting is on" : (0, Rd.d)(dd.packActive, dd.defaultOffForPacks) ? "the pack forces it" : dd.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
-         return `engine (js): useWebGpu ${xd(dd.useWebGpu)} (${pd}); ${Bd(Jd)}; webgpu fallback ${null!==kd&&void 0!==kd?kd:"unset"}`
-       }(dd, (0, Wd.m)(), (0, Cd.getWebGpuFallbackReason)()))
+         const LQ = QQ.setting ? "the setting is on" : (0, eQ.e)(QQ.packActive, QQ.defaultOffForPacks) ? "the pack forces it" : QQ.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
+         return `engine (js): useWebGpu ${cQ(QQ.useWebGpu)} (${LQ}); ${SQ(FQ)}; webgpu fallback ${null!==wQ&&void 0!==wQ?wQ:"unset"}`
+       }(QQ, (0, oQ.i)(), (0, mQ.getWebGpuFallbackReason)()))
```

#### 18. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L165` → after: `L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L165) · [Before (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L165)

```diff
-           }] = await Promise.all([kd.e(130).then((() => kd(39347))), kd.e(90).then((() => kd(41237))), kd.e(134).then((() => kd(41242)))]), gd = await Nd.load();
+           }] = await Promise.all([wQ.e(130).then((() => wQ(38741))), wQ.e(90).then((() => wQ(40660))), wQ.e(134).then((() => wQ(40664)))]), vQ = await qQ.load();
```

#### 19. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L167)

```diff
-           const Cd = null !== (Jd = Wd()) && void 0 !== Jd ? Jd : Pd(dd),
+           const mQ = null !== (FQ = oQ()) && void 0 !== FQ ? FQ : DQ(QQ),
```

#### 20. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L171` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L171) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L171)

```diff
-             text: `${"active"===gd.status?Md(gd.pack.name,"active",Kd.length):Md(null,`blocked (${gd.messageKey})`,null!==(pd=null===Kd||void 0===Kd?void 0:Kd.length)&&void 0!==pd?pd:null)}; game policy ${Cd}, runs in it ${od?"yes":"no"}`,
+             text: `${"active"===vQ.status?RQ(vQ.pack.name,"active",uQ.length):RQ(null,`blocked (${vQ.messageKey})`,null!==(LQ=null===uQ||void 0===uQ?void 0:uQ.length)&&void 0!==LQ?LQ:null)}; game policy ${mQ}, runs in it ${HQ?"yes":"no"}`,
```

#### 21. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L175)

```diff
-       if (null === Pd) return void(Yd.noPack() && jd(`join ${Wd}: no shader pack on this page (further joins without one not logged)`));
+       if (null === DQ) return void(sQ.noPack() && NQ(`join ${oQ}: no shader pack on this page (further joins without one not logged)`));
```

#### 22. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L178` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L178) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L178)

```diff
-       if ("cap" === Zd) return void jd(`join ${Wd}: further joins not logged`);
+       if ("cap" === kQ) return void NQ(`join ${oQ}: further joins not logged`);
```

#### 23. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L182-L184` → after: `L182-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L182-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L182-L184) · [Before (L182-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L182-L184)

```diff
-               return void 0 === dd.couldntRun ? "joined" : `joined without the pack: ${dd.couldntRun}`;
-             case "CJ":
-               return "CJ";
+               return void 0 === QQ.couldntRun ? "joined" : `joined without the pack: ${QQ.couldntRun}`;
+             case "wF":
+               return "wF";
```

#### 24. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L186)

```diff
-               return `failed: ${dd.messageKey}`
+               return `failed: ${QQ.messageKey}`
```

#### 25. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L189-L190` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L189-L190) · [Before (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L189-L190)

```diff
-         Cd = ("ok" === Jd.status ? Jd.couldntRun : "failed" === Jd.status ? Jd.messageKey : void 0) === Fd ? `; cause: ${Nd()}` : "";
-       "outcome" !== Zd ? (jd(`join ${Wd}: ${Pd.text}`), Pd.runs && (jd(`join ${Wd}: needs WebGPU; ${pd()}`), jd(`join ${Wd}: ${qd(Xd())}`)), jd(`join ${Wd}: ${gd}${Cd}`)) : jd(`join ${Wd}: ${gd}${Cd}`)
+         mQ = ("ok" === FQ.status ? FQ.couldntRun : "failed" === FQ.status ? FQ.messageKey : void 0) === OQ ? `; cause: ${qQ()}` : "";
+       "outcome" !== kQ ? (NQ(`join ${oQ}: ${DQ.text}`), DQ.runs && (NQ(`join ${oQ}: needs WebGPU; ${LQ()}`), NQ(`join ${oQ}: ${CQ(TQ())}`)), NQ(`join ${oQ}: ${vQ}${mQ}`)) : NQ(`join ${oQ}: ${vQ}${mQ}`)
```

#### 26. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L196-L197` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L196-L197) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L196-L197)

```diff
-       return Td(dd, kd, (() => `Lite runtime ${null===Jd?"no":"yes, running "+(Nd?"yes":"no")}; ${Bd((0,Wd.m)())}`), (() => {
-         return dd = md, Jd = Xd(), kd = "ios" === (0, Cd.getOperatingSystem)(), pd = nd(), null === dd ? "engine choice not seen" : dd.packActive ? (0, Rd.d)(dd.packActive, dd.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : Jd.lossSt … [truncated]
+       return XQ(QQ, wQ, (() => `Lite runtime ${null===FQ?"no":"yes, running "+(qQ?"yes":"no")}; ${SQ((0,oQ.i)())}`), (() => {
+         return QQ = rQ, FQ = TQ(), wQ = "ios" === (0, mQ.getOperatingSystem)(), LQ = zQ(), null === QQ ? "engine choice not seen" : QQ.packActive ? (0, eQ.e)(QQ.packActive, QQ.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : FQ.lossSt … [truncated]
```

#### 27. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L208` → after: `L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L208) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L208)

```diff
-         couldntRun: null !== kd && void 0 !== kd ? kd : void 0
+         couldntRun: null !== wQ && void 0 !== wQ ? wQ : void 0
```

#### 28. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L211)

```diff
-         return null === dd ? "pick not seen" : "off_after_loss" === dd.reason ? `off after a loss, ${"pack"===dd.source?sd(kd,pd):`from ${null!==(Zd=dd.source)&&void 0!==Zd?Zd:"none"}`}` : "not_requested" === dd.reason ? `not requested, from ${null!==(Pd=dd.source)&&void 0!==Pd?P … [truncated]
+         return null === QQ ? "pick not seen" : "off_after_loss" === QQ.reason ? `off after a loss, ${"pack"===QQ.source?iQ(wQ,LQ):`from ${null!==(kQ=QQ.source)&&void 0!==kQ?kQ:"none"}`}` : "not_requested" === QQ.reason ? `not requested, from ${null!==(DQ=QQ.source)&&void 0!==DQ?D … [truncated]
```

#### 29. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L221-L222` → after: `L221-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L221-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L221-L222) · [Before (L221-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L221-L222)

```diff
-         return `loss (${dd}): ${Jd}${null===kd?"":` ${vd(kd,Gd)}`}; ${pd}`
-       }(dd, Jd, kd, `stored ${fd((0,Ld.p)().now)}; holds ${Nd.lossHolds?"yes":"no"}, stops packs ${Nd.lossStopsPack?"yes":"no"}`))
+         return `loss (${QQ}): ${FQ}${null===wQ?"":` ${pQ(wQ,GQ)}`}; ${LQ}`
+       }(QQ, FQ, wQ, `stored ${KQ((0,xQ.m)().now)}; holds ${qQ.lossHolds?"yes":"no"}, stops packs ${qQ.lossStopsPack?"yes":"no"}`))
```

#### 30. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L225)

```diff
-   9151: (dd, Jd, kd) => {
+   9001: (QQ, FQ, wQ) => {
```

#### 31. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L230)

```diff
-       d: () => pd
+       e: () => LQ
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (x17cru.159bd7ce → bqoxjr.2558012f)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1035 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 1. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1)

```diff
- /*! For license information please see x17cru.worldgenWorker.d513f69c.chunk.js.LICENSE.txt */
+ /*! For license information please see bqoxjr.worldgenWorker.9eb1c0bc.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4)

```diff
-       1683: dd => {
+       1649: QQ => {
```

#### 3. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L82)

```diff
-             return Jd === 1 / 0 ? Jd : void 0 !== Jd ? Math.max(0, Math.ceil(Jd - kd())) : 0
+             return FQ === 1 / 0 ? FQ : void 0 !== FQ ? Math.max(0, Math.ceil(FQ - wQ())) : 0
```

#### 4. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L151)

```diff
-       2740: dd => {
+       2788: QQ => {
```

#### 5. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L157)

```diff
-       2743: dd => {
+       2790: QQ => {
```

#### 6. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L167)

```diff
-       61078: dd => {
+       60845: QQ => {
```

#### 7. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L171` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L171) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L171)

```diff
-             for (var Pd = Nd[Wd] = new Array(Jd), Zd = Wd < pd / 2 ? Wd : Wd + 1, gd = 1; gd <= Jd; gd++) {
+             for (var DQ = qQ[oQ] = new Array(FQ), kQ = oQ < LQ / 2 ? oQ : oQ + 1, vQ = 1; vQ <= FQ; vQ++) {
```

#### 8. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L178-L180` → after: `L178-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L178-L180) · [Before (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L178-L180)

```diff
-       2736: (dd, Jd, kd) => {
-         var pd = kd(2740),
-           Nd = kd(2743),
+       2786: (QQ, FQ, wQ) => {
+         var LQ = wQ(2788),
+           qQ = wQ(2790),
```

#### 9. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L325-L328` → after: `L325-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L325-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L325-L328) · [Before (L325-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L325-L328)

```diff
-       61049: (dd, Jd, kd) => {
-         var pd = kd(61057).integer,
-           Nd = kd(61065),
-           Wd = kd(61070);
+       60824: (QQ, FQ, wQ) => {
+         var LQ = wQ(60831).integer,
+           qQ = wQ(60834),
+           oQ = wQ(60837);
```

#### 10. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L392-L395` → after: `L392-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L392-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L392-L395) · [Before (L392-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L392-L395)

```diff
-       61082: (dd, Jd, kd) => {
-         var pd = kd(61057).array,
-           Nd = kd(61065),
-           Wd = kd(61070);
+       60853: (QQ, FQ, wQ) => {
+         var LQ = wQ(60831).array,
+           qQ = wQ(60834),
+           oQ = wQ(60837);
```

#### 11. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L478-L479` → after: `L478-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L478-L479) · [Before (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L478-L479)

```diff
-       61070: (dd, Jd, kd) => {
-         var pd = kd(61078);
+       60837: (QQ, FQ, wQ) => {
+         var LQ = wQ(60845);
```

#### 12. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L498-L500` → after: `L498-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L498-L500) · [Before (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L498-L500)

```diff
-       61041: (dd, Jd, kd) => {
-         var pd = kd(61049),
-           Nd = kd(61082);
+       60821: (QQ, FQ, wQ) => {
+         var LQ = wQ(60824),
+           qQ = wQ(60853);
```

#### 13. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L521)

```diff
-       61065: dd => {
+       60834: QQ => {
```

#### 14. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L535)

```diff
-       61057: dd => {
+       60831: QQ => {
```

#### 15. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L561-L562` → after: `L561-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L561-L562) · [Before (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L561-L562)

```diff
-       37929: (dd, Jd, kd) => {
-         var pd = kd(37932);
+       37286: (QQ, FQ, wQ) => {
+         var LQ = wQ(37294);
```

#### 16. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L594` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L594) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L594)

```diff
-       37932: (dd, Jd) => {
+       37294: (QQ, FQ) => {
```

#### 17. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L648` → after: `L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L648) · [Before (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L648)

```diff
-       60995: (dd, Jd, kd) => {
+       60762: (QQ, FQ, wQ) => {
```

#### 18. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L652-L654` → after: `L652-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L652-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L652-L654) · [Before (L652-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L652-L654)

```diff
-         var pd = kd(61013),
-           Nd = kd(61001),
-           Wd = kd(61090);
+         var LQ = wQ(60785),
+           qQ = wQ(60772),
+           oQ = wQ(60864);
```

#### 19. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L663` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L663) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L663)

```diff
-           return Pd(`${dd}Wasteland`)
+           return DQ(`${QQ}Wasteland`)
```

#### 20. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L698)

```diff
-           return 36 * (1 === pd ? dd : Jd) + 2 + Math.floor(32 * gd(dd, Jd, kd ^ ld ^ pd))
+           return 36 * (1 === LQ ? QQ : FQ) + 2 + Math.floor(32 * vQ(QQ, FQ, wQ ^ bQ ^ LQ))
```

#### 21. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L700-L701` → after: `L700-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L700-L701) · [Before (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L700-L701)

```diff
-         var ed = kd(60999),
-           Rd = kd(61009);
+         var tQ = wQ(60770),
+           eQ = wQ(60776);
```

#### 22. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L728` → after: `L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L728) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L728)

```diff
-             dd !== id && (id = dd, ad = (0, ed.j)(dd), Md = Zd(dd))
+             QQ !== WQ && (WQ = QQ, RQ = (0, tQ.h)(QQ), OQ = kQ(QQ))
```

#### 23. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L777)

```diff
-               return pd > kd && (Wd = .25 - Wd), dd < 0 && (Wd = .5 - Wd), Jd < 0 ? 1 - Wd : Wd
+               return LQ > wQ && (oQ = .25 - oQ), QQ < 0 && (oQ = .5 - oQ), FQ < 0 ? 1 - oQ : oQ
```

#### 24. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L810` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L810) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L810)

```diff
-             return kd && bd(kd, dd, Jd) ? kd : null
+             return wQ && UQ(wQ, QQ, FQ) ? wQ : null
```

#### 25. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L817` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L817) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L817)

```diff
-                 if (Wd && Nd >= Wd.floorY - Rd.e && pd <= Wd.topY + Gd) {
+                 if (oQ && qQ >= oQ.floorY - eQ.g && LQ <= oQ.topY + GQ) {
```

#### 26. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L842` → after: `L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L842) · [Before (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L842)

```diff
-         var yd = kd(61033);
+         var aQ = wQ(60804);
```

#### 27. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L846)

```diff
-             this.KL = Jd, this.chances = Nd, this.mound = Wd, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = kd.salt ^ Pd(pd), this.sinkholes = kd.sinkholes;
+             this.tx = FQ, this.chances = qQ, this.mound = oQ, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = wQ.salt ^ DQ(LQ), this.sinkholes = wQ.sinkholes;
```

#### 28. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L867)

```diff
-               for (let Nd = 0; Nd < Zd.height && gd + Nd < this.KL; Nd++) gd + Nd >= 0 && dd.set(pd - Jd, gd + Nd, Wd - kd, Zd.block);
+               for (let qQ = 0; qQ < kQ.height && vQ + qQ < this.tx; qQ++) vQ + qQ >= 0 && QQ.set(LQ - FQ, vQ + qQ, oQ - wQ, kQ.block);
```

#### 29. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L874` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L874) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L874)

```diff
-               if (Kd += null !== (od = this.chances[ld]) && void 0 !== od ? od : 0, Cd < Kd) return void(Dd.has(ld) && this.sinkholes.taking(pd, Wd) || this.place(dd, pd - Jd, Pd + 1 - Nd, Wd - kd, ld, gd(pd, Wd, 1540483477 ^ this.salt)))
+               if (uQ += null !== (HQ = this.chances[bQ]) && void 0 !== HQ ? HQ : 0, mQ < uQ) return void(XQ.has(bQ) && this.sinkholes.taking(LQ, oQ) || this.place(QQ, LQ - FQ, DQ + 1 - qQ, oQ - wQ, bQ, vQ(LQ, oQ, 1540483477 ^ this.salt)))
```

#### 30. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L879` → after: `L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L879) · [Before (L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L879)

```diff
-                 kd + Nd >= 0 && kd + Nd < this.KL && dd.set(Jd, kd + Nd, pd, Wd)
+                 wQ + qQ >= 0 && wQ + qQ < this.tx && QQ.set(FQ, wQ + qQ, LQ, oQ)
```

#### 31. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L896)

```diff
-             super.init(), this.floraGenerator = new Td(this.blockMetadata, this.KL, this.noise, this.seed, this.floraChances, ((dd, Jd) => this.mound(dd, Jd)))
+             super.init(), this.floraGenerator = new fQ(this.blockMetadata, this.tx, this.noise, this.seed, this.floraChances, ((QQ, FQ) => this.mound(QQ, FQ)))
```

#### 32. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L934` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L934) · [Before (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L934)

```diff
-               return 0 === pd || 1 === pd && gd(dd, Jd, kd ^ ld ^ 3) < .5 ? 2 - pd : 0
+               return 0 === LQ || 1 === LQ && vQ(QQ, FQ, wQ ^ bQ ^ 3) < .5 ? 2 - LQ : 0
```

#### 33. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L963` → after: `L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L963) · [Before (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L963)

```diff
-             })), this.canyon = new Nd.l([{
+             })), this.canyon = new qQ.f([{
```

#### 34. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L966` → after: `L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L966) · [Before (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L966)

```diff
-             }], `${dd}WastelandCanyon`), this.canyonWarp = new Nd.l([{
+             }], `${QQ}WastelandCanyon`), this.canyonWarp = new qQ.f([{
```

#### 35. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L969` → after: `L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L969) · [Before (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L969)

```diff
-             }], `${dd}WastelandCanyonWarp`), this.canyonMask = new Nd.l([{
+             }], `${QQ}WastelandCanyonWarp`), this.canyonMask = new qQ.f([{
```

#### 36. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L972)

```diff
-             }], `${dd}WastelandCanyonMask`), this.patchNoise = new Nd.l([{
+             }], `${QQ}WastelandCanyonMask`), this.patchNoise = new qQ.f([{
```

#### 37. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L978` → after: `L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L978) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L978)

```diff
-             }], `${dd}WastelandPatch`), this.fineNoise = new Nd.l([{
+             }], `${QQ}WastelandPatch`), this.fineNoise = new qQ.f([{
```

#### 38. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L984` → after: `L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L984) · [Before (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L984)

```diff
-             }], `${dd}WastelandFine`)
+             }], `${QQ}WastelandFine`)
```

#### 39. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1007-L1010` → after: `L1007-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1007-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1007-L1010) · [Before (L1007-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1007-L1010)

```diff
-         var rd = kd(4099),
-           ud = kd(610),
-           td = kd(39278),
-           Vd = kd(61025);
+         var EQ = wQ(4136),
+           nQ = wQ(619),
+           gQ = wQ(38669),
+           PQ = wQ(60795);
```

#### 40. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1020-L1021` → after: `L1020-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1020-L1021) · [Before (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1020-L1021)

```diff
-             const dd = new td.c;
-             return dd.set(0, 0, 0, Hd("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
+             const QQ = new gQ.b;
+             return QQ.set(0, 0, 0, yQ("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
```

#### 41. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1061-L1062` → after: `L1061-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1061-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1061-L1062) · [Before (L1061-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1061-L1062)

```diff
-               qualityDistribution: new rd.h([{
-                 value: ud.j.UNCOMMON,
+               qualityDistribution: new EQ.c([{
+                 value: nQ.g.UNCOMMON,
```

#### 42. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1065` → after: `L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1065) · [Before (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1065)

```diff
-                 value: ud.j.RARE,
+                 value: nQ.g.RARE,
```

#### 43. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1068` → after: `L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1068) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1068)

```diff
-                 value: ud.j.EPIC,
+                 value: nQ.g.EPIC,
```

#### 44. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1076` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1076) · [Before (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1076)

```diff
-               mobTypeDistribution: new rd.h([{
+               mobTypeDistribution: new EQ.c([{
```

#### 45. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1084)

```diff
-           return (0, yd.bb)(dd, [{
+           return (0, aQ.db)(QQ, [{
```

#### 46. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1087` → after: `L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1087) · [Before (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1087)

```diff
-           }, ...yd.f.map((dd => ({
+           }, ...aQ.g.map((QQ => ({
```

#### 47. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1094` → after: `L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1094) · [Before (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1094)

```diff
-             super(dd, Jd, kd, `${Wd}DustFlats`, Pd, Zd, pJ(pd.h.MEDIUM, 1.25, dJ)), this.key = "dustFlats", this.floraChances = {
+             super(QQ, FQ, wQ, `${oQ}DustFlats`, DQ, kQ, LF(LQ.j.MEDIUM, 1.25, QF)), this.key = "dustFlats", this.floraChances = {
```

#### 48. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1098` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1098) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1098)

```diff
-             }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = Qd.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new Nd.l([{
+             }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = YQ.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new qQ.f([{
```

#### 49. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1104` → after: `L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1104) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1104)

```diff
-             }], `${Wd}DustFlatsHeight`)
+             }], `${oQ}DustFlatsHeight`)
```

#### 50. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1119` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1119) · [Before (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1119)

```diff
-             super(dd, Jd, kd, `${pd}ScorchedMesa`, Wd, Pd), this.key = "scorchedMesa", this.floraChances = {
+             super(QQ, FQ, wQ, `${LQ}ScorchedMesa`, oQ, DQ), this.key = "scorchedMesa", this.floraChances = {
```

#### 51. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1123` → after: `L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1123) · [Before (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1123)

```diff
-             }, this.outcropChance = Qd.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids[" … [truncated]
+             }, this.outcropChance = YQ.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids[" … [truncated]
```

#### 52. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1129` → after: `L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1129) · [Before (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1129)

```diff
-             }], `${pd}ScorchedMesaHeight`);
+             }], `${LQ}ScorchedMesaHeight`);
```

#### 53. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1161` → after: `L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1161) · [Before (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1161)

```diff
-             super(dd, Jd, kd, `${pd}ShatteredHighlands`, Wd, Pd), this.key = "shatteredHighlands", this.floraChances = {
+             super(QQ, FQ, wQ, `${LQ}ShatteredHighlands`, oQ, DQ), this.key = "shatteredHighlands", this.floraChances = {
```

#### 54. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1164` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1164) · [Before (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1164)

```diff
-             }, this.outcropChance = Qd.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids[ … [truncated]
+             }, this.outcropChance = YQ.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids[ … [truncated]
```

#### 55. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1167` → after: `L1167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1167) · [Before (L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1167)

```diff
-             }], `${pd}HighlandsRidge1`), this.ridge2 = new Nd.l([{
+             }], `${LQ}HighlandsRidge1`), this.ridge2 = new qQ.f([{
```

#### 56. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1170)

```diff
-             }], `${pd}HighlandsRidge2`), this.bumps = new Nd.l([{
+             }], `${LQ}HighlandsRidge2`), this.bumps = new qQ.f([{
```

#### 57. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1173` → after: `L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1173) · [Before (L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1173)

```diff
-             }], `${pd}HighlandsBumps`)
+             }], `${LQ}HighlandsBumps`)
```

#### 58. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1184` → after: `L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1184) · [Before (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1184)

```diff
-             return 0 !== Nd ? Nd : Jd > 50 ? this.ids.Stone : Jd > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
+             return 0 !== qQ ? qQ : FQ > 50 ? this.ids.Stone : FQ > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
```

#### 59. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1195` → after: `L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1195) · [Before (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1195)

```diff
-               return null === Pd || Cd(dd >> 2, Jd, kd >> 2, Nd) >= .25 ? null : Cd(dd, Jd, kd, Nd) < .65 ? Pd : null
+               return null === DQ || mQ(QQ >> 2, FQ, wQ >> 2, qQ) >= .25 ? null : mQ(QQ, FQ, wQ, qQ) < .65 ? DQ : null
```

#### 60. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1202` → after: `L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1202) · [Before (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1202)

```diff
-             super(dd, Jd, kd, `${Wd}RuinFields`, Pd, Zd, pJ(pd.h.HIGH, 2.25, JJ)), this.key = "ruinFields", this.floraChances = {
+             super(QQ, FQ, wQ, `${oQ}RuinFields`, DQ, kQ, LF(LQ.j.HIGH, 2.25, FF)), this.key = "ruinFields", this.floraChances = {
```

#### 61. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1207` → after: `L1207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1207) · [Before (L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1207)

```diff
-             }, this.outcropChance = Qd.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new Nd.l([{
+             }, this.outcropChance = YQ.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new qQ.f([{
```

#### 62. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1213` → after: `L1213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1213) · [Before (L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1213)

```diff
-             }], `${Wd}RuinFieldsHeight`)
+             }], `${oQ}RuinFieldsHeight`)
```

#### 63. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1225` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1225) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1225)

```diff
-             super(dd, Jd, kd, `${pd}SaltFlats`, Wd, Pd), this.key = "saltFlats", this.floraChances = {
+             super(QQ, FQ, wQ, `${LQ}SaltFlats`, oQ, DQ), this.key = "saltFlats", this.floraChances = {
```

#### 64. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1228` → after: `L1228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1228) · [Before (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1228)

```diff
-             }, this.outcropChance = Qd.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new Nd.l([{
+             }, this.outcropChance = YQ.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new qQ.f([{
```

#### 65. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1234` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1234) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1234)

```diff
-             }], `${pd}SaltFlatsHeight`)
+             }], `${LQ}SaltFlatsHeight`)
```

#### 66. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1252)

```diff
-             super(dd, Jd, kd, `${pd}SurvivorGrove`, Wd, Pd), this.key = "survivorGrove", this.floraChances = {
+             super(QQ, FQ, wQ, `${LQ}SurvivorGrove`, oQ, DQ), this.key = "survivorGrove", this.floraChances = {
```

#### 67. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1256` → after: `L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1256) · [Before (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1256)

```diff
-             }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = Qd.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new Nd.l([{
+             }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = YQ.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new qQ.f([{
```

#### 68. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1262` → after: `L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1262) · [Before (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1262)

```diff
-             }], `${pd}SurvivorGroveHeight`)
+             }], `${LQ}SurvivorGroveHeight`)
```

#### 69. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1277` → after: `L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1277) · [Before (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1277)

```diff
-               KL: Jd,
+               tx: FQ,
```

#### 70. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1293` → after: `L1293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1293) · [Before (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1293)

```diff
-               od = (0, Wd.j)(kd);
+               HQ = (0, oQ.l)(wQ);
```

#### 71. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1303` → after: `L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1303) · [Before (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1303)

```diff
-       588: (dd, Jd, kd) => {
+       592: (QQ, FQ, wQ) => {
```

#### 72. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1313-L1314` → after: `L1313-L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1313-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1313-L1314) · [Before (L1313-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1313-L1314)

```diff
-               if (void 0 !== kd[dd]) throw new Error(`Duplicate value found in bi-directional table: ${String(dd)}`);
-               kd[dd] = "string" === Jd ? pd : Number(pd)
+               if (void 0 !== wQ[QQ]) throw new Error(`Duplicate value found in bi-directional table: ${String(QQ)}`);
+               wQ[QQ] = "string" === FQ ? LQ : Number(LQ)
```

#### 73. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1326` → after: `L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1326) · [Before (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1326)

```diff
-       61025: (dd, Jd, kd) => {
+       60795: (QQ, FQ, wQ) => {
```

#### 74. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1328` → after: `L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1328) · [Before (L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1328)

```diff
-           e: () => Nd
+           b: () => qQ
```

#### 75. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1330` → after: `L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1330) · [Before (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1330)

```diff
-         var pd = kd(39278);
+         var LQ = wQ(38669);
```

#### 76. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1333` → after: `L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1333) · [Before (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1333)

```diff
-             let Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new pd.c,
+             let oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new LQ.b,
```

#### 77. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1359` → after: `L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1359) · [Before (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1359)

```diff
-       39278: (dd, Jd, kd) => {
+       38669: (QQ, FQ, wQ) => {
```

#### 78. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1361` → after: `L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1361) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1361)

```diff
-           c: () => pd
+           b: () => LQ
```

#### 79. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1486` → after: `L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1486) · [Before (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1486)

```diff
-             super(`${pd.name} has been mutated during iteration`)
+             super(`${LQ.name} has been mutated during iteration`)
```

#### 80. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1490` → after: `L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1490) · [Before (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1490)

```diff
-       61087: (dd, Jd, kd) => {
+       60860: (QQ, FQ, wQ) => {
```

#### 81. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1492-L1493` → after: `L1492-L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1492-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1492-L1493) · [Before (L1492-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1492-L1493)

```diff
-           c: () => pd,
-           f: () => Pd
+           d: () => LQ,
+           g: () => DQ
```

#### 82. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1560` → after: `L1560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1560) · [Before (L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1560)

```diff
-           return dd > -Wd && dd < Wd && Jd > -Wd && Jd < Wd ? dd * (2 * Wd) + Jd : `${dd}|${Jd}`
+           return QQ > -oQ && QQ < oQ && FQ > -oQ && FQ < oQ ? QQ * (2 * oQ) + FQ : `${QQ}|${FQ}`
```

#### 83. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1572` → after: `L1572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1572) · [Before (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1572)

```diff
-       61033: (dd, Jd, kd) => {
+       60804: (QQ, FQ, wQ) => {
```

#### 84. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1574-L1575` → after: `L1574-L1575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1574-L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1574-L1575) · [Before (L1574-L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1574-L1575)

```diff
-           c: () => Td,
-           f: () => id,
+           e: () => fQ,
+           g: () => WQ,
```

#### 85. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1577-L1580` → after: `L1577-L1579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1577-L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1577-L1579) · [Before (L1577-L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1577-L1580)

```diff
-           k: () => rd,
-           l: () => ud,
-           o: () => wd,
-           s: () => Yd,
+           m: () => EQ,
+           n: () => nQ,
+           p: () => BQ,
```

#### 86. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1583-L1584` → after: `L1582-L1583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1582-L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1582-L1583) · [Before (L1583-L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1583-L1584)

```diff
-           v: () => zd,
-           x: () => Ed,
+           w: () => yQ,
+           y: () => ZQ,
```

#### 87. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1586-L1588` → after: `L1585-L1587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1585-L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1585-L1587) · [Before (L1586-L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1586-L1588)

```diff
-           A: () => fd,
-           D: () => bd,
-           E: () => Dd,
+           B: () => IQ,
+           F: () => zQ,
+           G: () => UQ,
```

#### 88. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1592` → after: `L1590-L1591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1590-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1590-L1591) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1592)

```diff
-           N: () => Sd,
+           O: () => TQ,
+           P: () => aQ,
```

#### 89. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1597-L1598` → after: `L1596-L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1596-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1596-L1598) · [Before (L1597-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1597-L1598)

```diff
-           _: () => Xd,
-           bb: () => Md
+           Z: () => lQ,
+           bb: () => KQ,
+           db: () => OQ
```

#### 90. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1600-L1603` → after: `L1600-L1603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1600-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1600-L1603) · [Before (L1600-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1600-L1603)

```diff
-         var pd = kd(61001),
-           Nd = kd(610),
-           Wd = kd(61039),
-           Pd = kd(4099);
+         var LQ = wQ(60772),
+           qQ = wQ(619),
+           oQ = wQ(60813),
+           DQ = wQ(4136);
```

#### 91. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1610` → after: `L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1610) · [Before (L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1610)

```diff
-             this.columnRandom = new Pd.j(""), this.flowerPatchRandom = new Pd.j(""), this.cactusRandom = new Pd.j(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = v … [truncated]
+             this.columnRandom = new DQ.e(""), this.flowerPatchRandom = new DQ.e(""), this.cactusRandom = new DQ.e(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = v … [truncated]
```

#### 92. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1753)

```diff
-             if (Zd + 3 >= Wd && Zd + 1 < Wd + this.KL) {
+             if (kQ + 3 >= oQ && kQ + 1 < oQ + this.tx) {
```

#### 93. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1755` → after: `L1755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1755) · [Before (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1755)

```diff
-               gd.reseed(`${Nd}${Pd}${this.seed}flora`);
+               vQ.reseed(`${qQ}${DQ}${this.seed}flora`);
```

#### 94. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1759` → after: `L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1759) · [Before (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1759)

```diff
-                 0 <= pd && pd < this.KL && dd.set(Nd - Jd, pd, Pd - kd, this.grassId)
+                 0 <= LQ && LQ < this.tx && QQ.set(qQ - FQ, LQ, DQ - wQ, this.grassId)
```

#### 95. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1764` → after: `L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1764) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1764)

```diff
-                     0 <= pd && pd < this.KL && dd.set(Nd - Jd, pd, Pd - kd, this.tallGrassId)
+                     0 <= LQ && LQ < this.tx && QQ.set(qQ - FQ, LQ, DQ - wQ, this.tallGrassId)
```

#### 96. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1767` → after: `L1767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1767) · [Before (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1767)

```diff
-                     0 <= pd && pd < this.KL && dd.set(Nd - Jd, pd, Pd - kd, this.tallGrassTopId)
+                     0 <= LQ && LQ < this.tx && QQ.set(qQ - FQ, LQ, DQ - wQ, this.tallGrassTopId)
```

#### 97. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1774` → after: `L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1774) · [Before (L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1774)

```diff
-                     0 <= pd && pd < this.KL && dd.set(Nd - Jd, pd, Pd - kd, this.cornSeedsId)
+                     0 <= LQ && LQ < this.tx && QQ.set(qQ - FQ, LQ, DQ - wQ, this.cornSeedsId)
```

#### 98. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1777)

```diff
-                     0 <= pd && pd < this.KL && dd.set(Nd - Jd, pd, Pd - kd, this.cornPlantId)
+                     0 <= LQ && LQ < this.tx && QQ.set(qQ - FQ, LQ, DQ - wQ, this.cornPlantId)
```

#### 99. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1780` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1780) · [Before (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1780)

```diff
-                     0 <= pd && pd < this.KL && dd.set(Nd - Jd, pd, Pd - kd, this.cornPlantId)
+                     0 <= LQ && LQ < this.tx && QQ.set(qQ - FQ, LQ, DQ - wQ, this.cornPlantId)
```

#### 100. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1786)

```diff
-                   0 <= pd && pd < this.KL && dd.set(Nd - Jd, pd, Pd - kd, this.spectralGrassId)
+                   0 <= LQ && LQ < this.tx && QQ.set(qQ - FQ, LQ, DQ - wQ, this.spectralGrassId)
```

#### 101. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1789` → after: `L1789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1789) · [Before (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1789)

```diff
-                   0 <= pd && pd < this.KL && dd.set(Nd - Jd, pd, Pd - kd, this.pineGrassId)
+                   0 <= LQ && LQ < this.tx && QQ.set(qQ - FQ, LQ, DQ - wQ, this.pineGrassId)
```

#### 102. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1792` → after: `L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1792) · [Before (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1792)

```diff
-                   0 <= pd && pd < this.KL && dd.set(Nd - Jd, pd, Pd - kd, this.pineFernId)
+                   0 <= LQ && LQ < this.tx && QQ.set(qQ - FQ, LQ, DQ - wQ, this.pineFernId)
```

#### 103. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1797` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1797) · [Before (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1797)

```diff
-                       0 <= pd && pd < this.KL && dd.set(Nd - Jd, pd, Pd - kd, this.jungleTallGrassId)
+                       0 <= LQ && LQ < this.tx && QQ.set(qQ - FQ, LQ, DQ - wQ, this.jungleTallGrassId)
```

#### 104. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1800` → after: `L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1800) · [Before (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1800)

```diff
-                       0 <= pd && pd < this.KL && dd.set(Nd - Jd, pd, Pd - kd, this.jungleTallGrassTopId)
+                       0 <= LQ && LQ < this.tx && QQ.set(qQ - FQ, LQ, DQ - wQ, this.jungleTallGrassTopId)
```

#### 105. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1806` → after: `L1806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1806) · [Before (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1806)

```diff
-                     0 <= pd && pd < this.KL && dd.set(Nd - Jd, pd, Pd - kd, this.catnipId)
+                     0 <= LQ && LQ < this.tx && QQ.set(qQ - FQ, LQ, DQ - wQ, this.catnipId)
```

#### 106. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1809` → after: `L1809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1809) · [Before (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1809)

```diff
-                     0 <= pd && pd < this.KL && dd.set(Nd - Jd, pd, Pd - kd, this.autumnFernId)
+                     0 <= LQ && LQ < this.tx && QQ.set(qQ - FQ, LQ, DQ - wQ, this.autumnFernId)
```

#### 107. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1815` → after: `L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1815) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1815)

```diff
-                   Kd = (0, pd.H)(Cd, Nd, Pd);
+                   uQ = (0, LQ.w)(mQ, qQ, DQ);
```

#### 108. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1818` → after: `L1818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1818) · [Before (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1818)

```diff
-                   pd.reseed(`${Cd[0]}${Cd[1]}${this.seed}flowerpatch`);
+                   LQ.reseed(`${mQ[0]}${mQ[1]}${this.seed}flowerpatch`);
```

#### 109. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1833` → after: `L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1833) · [Before (L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1833)

```diff
-               pd.reseed(`${Nd}${Pd}${this.seed}cactus`);
+               LQ.reseed(`${qQ}${DQ}${this.seed}cactus`);
```

#### 110. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1837` → after: `L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1837) · [Before (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1837)

```diff
-                   Kd = Math.min(Zd + Cd + 1, Wd + this.KL),
+                   uQ = Math.min(kQ + mQ + 1, oQ + this.tx),
```

#### 111. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1844-L1846` → after: `L1844-L1846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1844-L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1844-L1846) · [Before (L1844-L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1844-L1846)

```diff
-         var gd = kd(61013),
-           Cd = kd(61025),
-           Kd = kd(39278);
+         var vQ = wQ(60785),
+           mQ = wQ(60795),
+           uQ = wQ(38669);
```
