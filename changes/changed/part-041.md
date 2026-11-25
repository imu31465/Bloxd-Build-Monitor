# Changed — Bundle Modifications Report (Part 041 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `41 / 56` (**402** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 040](part-040.md) · [Part 042 →](part-042.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (902 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226)

#### 508. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4579` → after: `L4703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4703) · [Before (L4579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4579)

```diff
-           for (const XQ of QQ) XQ.onPlayerAltAction && (WQ |= 1 << jQ.yc.AltAction), (XQ.onPlayerClick || XQ.onPlayerClickUp || XQ.onPlayerAttackEntity) && (WQ |= 1 << jQ.yc.Click), XQ.onPlayerChangeBlock && (WQ |= 1 << jQ.yc.ChangeBlock), XQ.onPlayerDropItem && (WQ |= 1 << jQ.yc … [truncated]
+           for (const iM of MM) iM.onPlayerAltAction && (rM |= 1 << hM._b.AltAction), (iM.onPlayerClick || iM.onPlayerClickUp || iM.onPlayerAttackEntity) && (rM |= 1 << hM._b.Click), iM.onPlayerChangeBlock && (rM |= 1 << hM._b.ChangeBlock), iM.onPlayerDropItem && (rM |= 1 << hM._b … [truncated]
```

#### 509. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4582` → after: `L4706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4706) · [Before (L4582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4582)

```diff
-         (0 !== XQ || this.hooksSet) && ((0, jQ.Sf)(WQ, 0, XQ) ? this.hooksSet = 0 !== XQ : this.onError(new Error("SetHooks didn't fit the command ring")))
+         (0 !== iM || this.hooksSet) && ((0, hM.Zf)(rM, 0, iM) ? this.hooksSet = 0 !== iM : this.onError(new Error("SetHooks didn't fit the command ring")))
```

#### 510. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4591` → after: `L4715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4715) · [Before (L4591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4591)

```diff
-         WQ !== this.promptWatchSent && QQ && !this.stopped() && (0, jQ.hg)(QQ, 0, Lw[WQ]) && (this.promptWatchSent = WQ)
+         rM !== this.promptWatchSent && MM && !this.stopped() && (0, hM.xg)(MM, 0, VO[rM]) && (this.promptWatchSent = rM)
```

#### 511. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4595` → after: `L4719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4719) · [Before (L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4595)

```diff
-         WQ && QQ !== this.writtenPublicLobby && ((0, jQ.ag)(WQ, 0, QQ ? 1 : 0) ? this.writtenPublicLobby = QQ : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
+         rM && MM !== this.writtenPublicLobby && ((0, hM.ig)(rM, 0, MM ? 1 : 0) ? this.writtenPublicLobby = MM : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
```

#### 512. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4599` → after: `L4723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4723) · [Before (L4599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4599)

```diff
-         WQ && ((0, jQ.Uf)(WQ, 0, null === QQ ? 0 : 1, null === QQ ? Cw : Ew.encode(QQ)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
+         rM && ((0, hM.$f)(rM, 0, null === MM ? 0 : 1, null === MM ? qO : KO.encode(MM)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
```

#### 513. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4609` → after: `L4733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4733) · [Before (L4609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4609)

```diff
-             this.nI(XQ)
+             this.aL(iM)
```

#### 514. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4615` → after: `L4739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4739) · [Before (L4615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4615)

```diff
-           zQ.k.mB(QQ, WQ)
+           aM.i.Tz(MM, rM)
```

#### 515. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4622` → after: `L4746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4746) · [Before (L4622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4622)

```diff
-           this.nI(QQ)
+           this.aL(MM)
```

#### 516. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4629` → after: `L4753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4753) · [Before (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4629)

```diff
-           this.nI(QQ)
+           this.aL(MM)
```

#### 517. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4634` → after: `L4758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4758) · [Before (L4634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4634)

```diff
-         this.sessionLive = !1;
+         this.sessionLive = !1, this.localPhysicsType = tM.n.DEFAULT;
```

#### 518. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4664` → after: `L4788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4788) · [Before (L4664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4664)

```diff
-         void 0 !== WQ && this.nI(WQ)
+         void 0 !== rM && this.aL(rM)
```

#### 519. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4674` → after: `L4798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4798) · [Before (L4674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4674)

```diff
-             XQ ? this.onError(qQ) : this.nI(qQ)
+             iM ? this.onError(SM) : this.aL(SM)
```

#### 520. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4682` → after: `L4806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4806) · [Before (L4682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4682)

```diff
-           this.nI(WQ)
+           this.aL(rM)
```

#### 521. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4688` → after: `L4812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4812) · [Before (L4688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4688)

```diff
-       return QQ === jQ.wd ? null : String(QQ)
+       return MM === hM.Lc ? null : String(MM)
```

#### 522. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4692` → after: `L4816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4816) · [Before (L4692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4692)

```diff
-       QQ.fJ(rQ.Id)
+       MM.bL(mM.td)
```

#### 523. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4713` → after: `L4837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4837) · [Before (L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4713)

```diff
-         XQ.length > 0 && (WQ.preload(XQ), WQ.preload([GW]))
+         iM.length > 0 && (rM.preload(iM.flatMap((MM => Zr(MM)))), rM.preload(Zr(br)))
```

#### 524. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4716-L4719` → after: `L4840-L4843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4840-L4843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4840-L4843) · [Before (L4716-L4719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4716-L4719)

```diff
-     var ew = XQ(36750),
-       nw = XQ(5212),
-       xw = XQ(37049),
-       Yw = XQ(37081);
+     var SS = iM(37390),
+       jS = iM(5265),
+       aS = iM(37705),
+       PS = iM(37744);
```

#### 525. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4723` → after: `L4847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4847) · [Before (L4723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4723)

```diff
-           ...(0, xw.h)(QQ),
+           src: [...(0, aS.r)(MM).src],
```

#### 526. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4726` → after: `L4850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4850) · [Before (L4726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4726)

```diff
-         }), "sheet"),
+         }), "sound"),
```

#### 527. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4728` → after: `L4852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4852) · [Before (L4728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4728)

```diff
-       return WQ.load = () => (WQ._preload = !0, (0, Yw.e)(QQ), XQ()), WQ
+       return rM.load = () => (rM._preload = !0, (0, PS.c)(MM), iM()), rM
```

#### 528. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4756-L4757` → after: `L4880-L4881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4880-L4881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4880-L4881) · [Before (L4756-L4757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4756-L4757)

```diff
-     var mw = XQ(36864),
-       Mw = XQ(39489);
+     var mS = iM(37501),
+       HS = iM(40291);
```

#### 529. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4766` → after: `L4890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4890) · [Before (L4766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4766)

```diff
-       return Wq ??= new Mw.c(new mw.d(Xq)), Wq
+       return JS ??= new HS.e(new mS.f(dS)), JS
```

#### 530. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4775` → after: `L4899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4899) · [Before (L4775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4775)

```diff
-       wQ.b.get("scriptedCameraFacing") !== QQ && wQ.b.set({
+       OM.d.get("scriptedCameraFacing") !== MM && OM.d.set({
```

#### 531. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4779-L4784` → after: `L4903-L4908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4903-L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4903-L4908) · [Before (L4779-L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4779-L4784)

```diff
-     var zq = XQ(9679),
-       sq = XQ(9634),
-       Fq = XQ(39527),
-       Pq = XQ(41245),
-       gq = XQ(3555);
-     const Jq = Object.entries(jQ.wc).reduce(((QQ, WQ) => {
+     var US = iM(9918),
+       GS = iM(9863),
+       CS = iM(40325),
+       eS = iM(42144),
+       bS = iM(3693);
+     const wS = Object.entries(hM.Wb).reduce(((MM, rM) => {
```

#### 532. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4791` → after: `L4915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4915) · [Before (L4791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4791)

```diff
-       return 0 !== ((null !== (XQ = QQ.itemFlags[WQ]) && void 0 !== XQ ? XQ : 0) & jQ.$c.Stackable)
+       return 0 !== ((null !== (iM = MM.itemFlags[rM]) && void 0 !== iM ? iM : 0) & hM.pc.Stackable)
```

#### 533. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4805` → after: `L4929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4929) · [Before (L4805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4805)

```diff
-           return XQ === jQ.ed ? void 0 : XQ
+           return iM === hM.tc ? void 0 : iM
```

#### 534. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4809` → after: `L4933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4933) · [Before (L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4809)

```diff
-           const wQ = null !== (XQ = QQ.itemHarvests[WQ]) && void 0 !== XQ ? XQ : 0;
+           const OM = null !== (iM = MM.itemHarvests[rM]) && void 0 !== iM ? iM : 0;
```

#### 535. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4814-L4815` → after: `L4938-L4939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4938-L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4938-L4939) · [Before (L4814-L4815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4814-L4815)

```diff
-           const qQ = null !== (XQ = QQ.itemLevels[WQ]) && void 0 !== XQ ? XQ : jQ.ed;
-           return qQ !== jQ.ed ? qQ : null !== (wQ = (0, Xw.harvestsNullLevelOf)(WQ)) && void 0 !== wQ ? wQ : void 0
+           const SM = null !== (iM = MM.itemLevels[rM]) && void 0 !== iM ? iM : hM.tc;
+           return SM !== hM.tc ? SM : null !== (OM = (0, yO.harvestsNullLevelOf)(rM)) && void 0 !== OM ? OM : void 0
```

#### 536. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4836` → after: `L4960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4960) · [Before (L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4836)

```diff
-           if (void 0 === WQ) throw new Error(`No item is named ${QQ}, an item's root`);
+           if (void 0 === rM) throw new Error(`No item is named ${MM}, an item's root`);
```

#### 537. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4847-L4854` → after: `L4971-L4978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4971-L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4971-L4978) · [Before (L4847-L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4847-L4854)

```diff
-           blockFlags: Bq(qQ, jQ.F.BYTES, jQ.F.flags),
-           blockHarvestTypes: Bq(qQ, jQ.F.BYTES, jQ.F.harvestType),
-           blockHarvestLevels: Bq(qQ, jQ.F.BYTES, jQ.F.harvestLevel),
-           blockAttachedTops: yq(qQ, jQ.F.BYTES, jQ.F.attachedTop),
-           itemFlags: Bq(TQ, jQ.dd.BYTES, jQ.dd.flags),
-           itemHarvests: Bq(TQ, jQ.dd.BYTES, jQ.dd.harvests),
-           itemLevels: Bq(TQ, jQ.dd.BYTES, jQ.dd.level)
-         }, (0, gq.i)(Object.freeze(wQ)), (0, Pq.e)()
+           blockFlags: RS(SM, hM.z.BYTES, hM.z.flags),
+           blockHarvestTypes: RS(SM, hM.z.BYTES, hM.z.harvestType),
+           blockHarvestLevels: RS(SM, hM.z.BYTES, hM.z.harvestLevel),
+           blockAttachedTops: pS(SM, hM.z.BYTES, hM.z.attachedTop),
+           itemFlags: RS(jM, hM.qc.BYTES, hM.qc.flags),
+           itemHarvests: RS(jM, hM.qc.BYTES, hM.qc.harvests),
+           itemLevels: RS(jM, hM.qc.BYTES, hM.qc.level)
+         }, (0, bS.j)(Object.freeze(OM)), (0, eS.h)()
```

#### 538. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4857-L4859` → after: `L4981-L4983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4981-L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4981-L4983) · [Before (L4857-L4859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4857-L4859)

```diff
-         if ("number" === typeof QQ) return void 0 === (0, gq.e)(QQ) ? void 0 : QQ;
-         const WQ = (0, gq.c)(QQ);
-         return void 0 === WQ && Iq.test(QQ) ? void 0 === (0, gq.e)(+QQ) ? void 0 : +QQ : WQ
+         if ("number" === typeof MM) return void 0 === (0, bS.g)(MM) ? void 0 : MM;
+         const rM = (0, bS.d)(MM);
+         return void 0 === rM && gS.test(MM) ? void 0 === (0, bS.g)(+MM) ? void 0 : +MM : rM
```

#### 539. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4862` → after: `L4986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4986) · [Before (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4862)

```diff
-         if (!QQ || QQ === zq.b) return zq.c;
+         if (!MM || MM === US.c) return US.e;
```

#### 540. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4864` → after: `L4988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4988) · [Before (L4864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4864)

```diff
-         if (void 0 === WQ) throw new Error(`Item ${QQ} not found in registry`);
+         if (void 0 === rM) throw new Error(`Item ${MM} not found in registry`);
```

#### 541. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4868` → after: `L4992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4992) · [Before (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4868)

```diff
-         return 0 !== QQ && void 0 !== (0, gq.e)(QQ) ? this.metaOf(QQ).rootId : QQ
+         return 0 !== MM && void 0 !== (0, bS.g)(MM) ? this.metaOf(MM).rootId : MM
```

#### 542. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4871` → after: `L4995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4995) · [Before (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4871)

```diff
-         return this.metas[QQ] ??= (0, sq.j)((0, gq.e)(QQ), QQ, this.rootIdOf, (0, Xw.rootMetaDescOf)(QQ))
+         return this.metas[MM] ??= (0, GS.i)((0, bS.g)(MM), MM, this.rootIdOf, (0, yO.rootMetaDescOf)(MM))
```

#### 543. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4874` → after: `L4998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4998) · [Before (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4874)

```diff
-         if (!QQ || QQ === zq.b) return 0;
+         if (!MM || MM === US.c) return 0;
```

#### 544. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4876` → after: `L5000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5000) · [Before (L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4876)

```diff
-         if (void 0 === WQ) throw new Error(`Invalid block name. You sent ${QQ}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
+         if (void 0 === rM) throw new Error(`Invalid block name. You sent ${MM}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
```

#### 545. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4880` → after: `L5004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5004) · [Before (L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4880)

```diff
-         if (!QQ || QQ === zq.b) return zq.b;
+         if (!MM || MM === US.c) return US.c;
```

#### 546. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4882-L4883` → after: `L5006-L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5006-L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5006-L5007) · [Before (L4882-L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4882-L4883)

```diff
-         if (void 0 === WQ) throw new Error(`Item ${QQ} not found in registry`);
-         return (0, gq.e)(WQ)
+         if (void 0 === rM) throw new Error(`Item ${MM} not found in registry`);
+         return (0, bS.g)(rM)
```

#### 547. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4887` → after: `L5011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5011) · [Before (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4887)

```diff
-         if (QQ === zq.b) return 0;
+         if (MM === US.c) return 0;
```

#### 548. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4891-L4892` → after: `L5015-L5016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5015-L5016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5015-L5016) · [Before (L4891-L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4891-L4892)

```diff
-             wQ = WQ > 0 ? (0, gq.c)(QQ.slice(0, WQ)) : void 0;
-           XQ = void 0 !== wQ && this.isBlockId(wQ) && (0, Xw.rootMetaDescOf)(wQ) === QQ ? wQ : void 0
+             OM = rM > 0 ? (0, bS.d)(MM.slice(0, rM)) : void 0;
+           iM = void 0 !== OM && this.isBlockId(OM) && (0, yO.rootMetaDescOf)(OM) === MM ? OM : void 0
```

#### 549. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4895` → after: `L5019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5019) · [Before (L4895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4895)

```diff
-         if (!WQ) throw new Error(`Invalid block name. You sent ${QQ}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
+         if (!rM) throw new Error(`Invalid block name. You sent ${MM}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
```

#### 550. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4902` → after: `L5026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5026) · [Before (L4902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4902)

```diff
-         return 0 !== QQ && (0, gq.e)(QQ) || zq.b
+         return 0 !== MM && (0, bS.g)(MM) || US.c
```

#### 551. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4910` → after: `L5034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5034) · [Before (L4910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4910)

```diff
-           name: (0, gq.e)(WQ),
+           name: (0, bS.g)(rM),
```

#### 552. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4920` → after: `L5044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5044) · [Before (L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4920)

```diff
-         if (Fq.e.has(WQ)) {
+         if (CS.d.has(rM)) {
```

#### 553. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4922` → after: `L5046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5046) · [Before (L4922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4922)

```diff
-             wQ = this.options.get((0, Fq.f)(XQ, WQ));
+             OM = this.options.get((0, CS.g)(iM, rM));
```

#### 554. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4936-L4937` → after: `L5060-L5061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5060-L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5060-L5061) · [Before (L4936-L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4936-L4937)

```diff
-           throw new Error(`ClientApi.${QQ} is not available yet in the wasm client (${WQ})`)
-         }(`getItemStat("${QQ}")`, `a table of the stat: the wasm client answers ${Object.keys(jq).join(", ")}`), WQ
+           throw new Error(`ClientApi.${MM} is not available yet in the wasm client (${rM})`)
+         }(`getItemStat("${MM}")`, `a table of the stat: the wasm client answers ${Object.keys(uS).join(", ")}`), rM
```

#### 555. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4942` → after: `L5066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5066) · [Before (L4942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4942)

```diff
-         return null !== qQ && void 0 !== qQ || "displayName" !== WQ ? qQ : this.getItemName(QQ)
+         return null !== SM && void 0 !== SM || "displayName" !== rM ? SM : this.getItemName(MM)
```

#### 556. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4948` → after: `L5072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5072) · [Before (L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4948)

```diff
-         return this.getClientOption(`${QQ}GunStats`)
+         return this.getClientOption(`${MM}GunStats`)
```

#### 557. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4955` → after: `L5079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5079) · [Before (L4955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4955)

```diff
-         return 0 !== ((null !== (WQ = this.props.blockFlags[QQ]) && void 0 !== WQ ? WQ : 0) & jQ.C.Solid)
+         return 0 !== ((null !== (rM = this.props.blockFlags[MM]) && void 0 !== rM ? rM : 0) & hM.x.Solid)
```

#### 558. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4962` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5086) · [Before (L4962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4962)

```diff
-         return 0 !== ((null !== (WQ = this.props.blockFlags[QQ]) && void 0 !== WQ ? WQ : 0) & jQ.C.Fluid)
+         return 0 !== ((null !== (rM = this.props.blockFlags[MM]) && void 0 !== rM ? rM : 0) & hM.x.Fluid)
```

#### 559. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4966` → after: `L5090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5090) · [Before (L4966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4966)

```diff
-         return 0 !== ((null !== (WQ = this.props.blockFlags[QQ]) && void 0 !== WQ ? WQ : 0) & jQ.C.PlaceOver)
+         return 0 !== ((null !== (rM = this.props.blockFlags[MM]) && void 0 !== rM ? rM : 0) & hM.x.PlaceOver)
```

#### 560. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4970` → after: `L5094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5094) · [Before (L4970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4970)

```diff
-         return null !== (WQ = this.props.blockAttachedTops[QQ]) && void 0 !== WQ ? WQ : 0
+         return null !== (rM = this.props.blockAttachedTops[MM]) && void 0 !== rM ? rM : 0
```

#### 561. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4987-L4989` → after: `L5111-L5113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5111-L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5111-L5113) · [Before (L4987-L4989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4987-L4989)

```diff
-               for (let QQ = 0; QQ + jQ.ke.BYTES <= TQ; QQ += jQ.ke.BYTES) sQ.push(Object.freeze({
-                 item: WQ.nameOfId(jQ.ke.item(zQ, QQ)),
-                 amt: jQ.ke.amount(zQ, QQ)
+               for (let MM = 0; MM + hM.Pd.BYTES <= jM; MM += hM.Pd.BYTES) PM.push(Object.freeze({
+                 item: rM.nameOfId(hM.Pd.item(aM, MM)),
+                 amt: hM.Pd.amount(aM, MM)
```

#### 562. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5009-L5015` → after: `L5133-L5139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5133-L5139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5133-L5139) · [Before (L5009-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5009-L5015)

```diff
-     var Gq = XQ(40984),
-       Uq = XQ(37229),
-       bq = XQ(37219),
-       vq = XQ(37221),
-       dq = XQ(36809),
-       Hq = XQ(40902),
-       aq = XQ(42867);
+     var kS = iM(41858),
+       ZS = iM(37885),
+       oS = iM(37864),
+       fS = iM(37872),
+       YS = iM(34822),
+       NS = iM(41761),
+       AS = iM(53658);
```

#### 563. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5023` → after: `L5147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5147) · [Before (L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5023)

```diff
-       return WQ.byteLength < rQ.Qc ? WQ : WQ.subarray(0, rQ.Qc - 1)
+       return rM.byteLength < mM.Fc ? rM : rM.subarray(0, mM.Fc - 1)
```

#### 564. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5031` → after: `L5155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5155) · [Before (L5031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5031)

```diff
-         this.keyframesVersion = lq, this.reloadFrom = null !== (QQ = null === (WQ = this.view()) || void 0 === WQ ? void 0 : WQ.version) && void 0 !== QQ ? QQ : lq
+         this.keyframesVersion = xS, this.reloadFrom = null !== (MM = null === (rM = this.view()) || void 0 === rM ? void 0 : rM.version) && void 0 !== MM ? MM : xS
```

#### 565. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5034` → after: `L5158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5158) · [Before (L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5034)

```diff
-         const WQ = 1 === this.deps.core.mqQ(QQ);
+         const rM = 1 === this.deps.core.YSM(MM);
```

#### 566. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5055` → after: `L5179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5179) · [Before (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5055)

```diff
-         this.deps.replay.setCameraMode(aq.e.indexOf(QQ))
+         this.deps.replay.setCameraMode(AS.c.indexOf(MM))
```

#### 567. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5059` → after: `L5183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5183) · [Before (L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5059)

```diff
-         const WQ = jQ.x.replayViewPtr(this.deps.apiView(), 0);
+         const rM = hM.v.replayViewPtr(this.deps.apiView(), 0);
```

#### 568. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5061-L5062` → after: `L5185-L5186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5185-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5185-L5186) · [Before (L5061-L5062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5061-L5062)

```diff
-         const XQ = new DataView(this.deps.buffer(), WQ, jQ.he.BYTES),
-           wQ = jQ.he.version(XQ, 0),
+         const iM = new DataView(this.deps.buffer(), rM, hM.Id.BYTES),
+           OM = hM.Id.version(iM, 0),
```

#### 569. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5065` → after: `L5189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5189) · [Before (L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5065)

```diff
-         const TQ = jQ.he.markIn(XQ, 0),
+         const jM = hM.Id.markIn(iM, 0),
```

#### 570. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5068-L5073` → after: `L5192-L5197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5192-L5197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5192-L5197) · [Before (L5068-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5068-L5073)

```diff
-             state: jQ.he.state(XQ, 0),
-             cameraMode: null !== (QQ = aq.e[jQ.he.cameraMode(XQ, 0)]) && void 0 !== QQ ? QQ : "recording",
-             fJ: jQ.he.fJ(XQ, 0),
-             totalTicks: jQ.he.totalTicks(XQ, 0),
-             speed: jQ.he.speed(XQ, 0),
-             mark: TQ === jQ.ee ? null : {
+             state: hM.Id.state(iM, 0),
+             cameraMode: null !== (MM = AS.c[hM.Id.cameraMode(iM, 0)]) && void 0 !== MM ? MM : "recording",
+             bL: hM.Id.bL(iM, 0),
+             totalTicks: hM.Id.totalTicks(iM, 0),
+             speed: hM.Id.speed(iM, 0),
+             mark: jM === hM.Ed ? null : {
```

#### 571. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5075` → after: `L5199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5199) · [Before (L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5075)

```diff
-               outTick: jQ.he.markOut(XQ, 0)
+               outTick: hM.Id.markOut(iM, 0)
```

#### 572. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5077` → after: `L5201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5201) · [Before (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5077)

```diff
-             editVersion: jQ.he.editVersion(XQ, 0)
+             editVersion: hM.Id.editVersion(iM, 0)
```

#### 573. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5085` → after: `L5209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5209) · [Before (L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5085)

```diff
-         const WQ = this.reloadFrom === lq && QQ.state !== rQ.td.Cropping && QQ.state !== rQ.td.None,
+         const rM = this.reloadFrom === xS && MM.state !== mM.hd.Cropping && MM.state !== mM.hd.None,
```

#### 574. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5090` → after: `L5214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5214) · [Before (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5090)

```diff
-         } = this.deps, qQ = wQ.MqQ(), TQ = wQ.Ly(), zQ = [];
+         } = this.deps, SM = OM.ASM(), jM = OM.qd(), aM = [];
```

#### 575. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5092` → after: `L5216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5216) · [Before (L5092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5092)

```diff
-           const QQ = new DataView(this.deps.buffer(), TQ, qQ * rQ.Fc);
+           const MM = new DataView(this.deps.buffer(), jM, SM * mM.uc);
```

#### 576. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5094` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5218) · [Before (L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5094)

```diff
-             const XQ = WQ * rQ.Fc,
+             const iM = rM * mM.uc,
```

#### 577. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5097-L5100` → after: `L5221-L5224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5221-L5224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5221-L5224) · [Before (L5097-L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5097-L5100)

```diff
-               fJ: QQ.getUint32(XQ + rQ.Pc, !0),
-               position: [wQ(rQ.Lc), wQ(rQ.Lc + 8), wQ(rQ.Lc + 16)],
-               direction: [wQ(rQ.Gc), wQ(rQ.Gc + 8), wQ(rQ.Gc + 16)],
-               easing: [wQ(rQ.Jc), wQ(rQ.Jc + 8), wQ(rQ.Jc + 16), wQ(rQ.Jc + 24)]
+               bL: MM.getUint32(iM + mM.Ec, !0),
+               position: [OM(mM.Cc), OM(mM.Cc + 8), OM(mM.Cc + 16)],
+               direction: [OM(mM.vc), OM(mM.vc + 8), OM(mM.vc + 16)],
+               easing: [OM(mM.zc), OM(mM.zc + 8), OM(mM.zc + 16), OM(mM.zc + 24)]
```

#### 578. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5108` → after: `L5232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5232) · [Before (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5108)

```diff
-           WQ = [jQ.x.eye(QQ, 0, 0), jQ.x.eye(QQ, 0, 1), jQ.x.eye(QQ, 0, 2)];
+           rM = [hM.v.eye(MM, 0, 0), hM.v.eye(MM, 0, 1), hM.v.eye(MM, 0, 2)];
```

#### 579. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5112` → after: `L5236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5236) · [Before (L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5112)

```diff
-         }(jQ.x.heading(QQ, 0), jQ.x.pitch(QQ, 0)))
+         }(hM.v.heading(MM, 0), hM.v.pitch(MM, 0)))
```

#### 580. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5115` → after: `L5239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5239) · [Before (L5115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5115)

```diff
-         return this.deps.replay.setKeyframe(QQ.fJ, Float64Array.from([...QQ.position, ...QQ.direction, ...QQ.easing]))
+         return this.deps.replay.setKeyframe(MM.bL, Float64Array.from([...MM.position, ...MM.direction, ...MM.easing]))
```

#### 581. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5125` → after: `L5249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5249) · [Before (L5125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5125)

```diff
-         return this.deps.replay.setMark(null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.inTick) && void 0 !== WQ ? WQ : -1, null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.outTick) && void 0 !== XQ ? XQ : -1)
+         return this.deps.replay.setMark(null !== (rM = null === MM || void 0 === MM ? void 0 : MM.inTick) && void 0 !== rM ? rM : -1, null !== (iM = null === MM || void 0 === MM ? void 0 : MM.outTick) && void 0 !== iM ? iM : -1)
```

#### 582. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5142` → after: `L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5266) · [Before (L5142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5142)

```diff
-         return null !== XQ && (0, jQ.Cf)(XQ, 0, QQ, null === WQ ? hq : iq.encode(WQ))
+         return null !== iM && (0, hM.Ef)(iM, 0, MM, null === rM ? vS : FS.encode(rM))
```

#### 583. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5151` → after: `L5275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5275) · [Before (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5151)

```diff
-         return null !== qQ && (0, jQ.Ef)(qQ, 0, QQ, WQ, Math.max(0, XQ), iq.encode(wQ))
+         return null !== SM && (0, hM.Gf)(SM, 0, MM, rM, Math.max(0, iM), FS.encode(OM))
```

#### 584. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5159` → after: `L5283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5283) · [Before (L5159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5159)

```diff
-                 return QQ + YX.ub + (null !== (XQ = null === WQ || void 0 === WQ ? void 0 : WQ.byteLength) && void 0 !== XQ ? XQ : 0)
+                 return MM + nO.tb + (null !== (iM = null === rM || void 0 === rM ? void 0 : rM.byteLength) && void 0 !== iM ? iM : 0)
```

#### 585. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5166` → after: `L5290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5290) · [Before (L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5166)

```diff
-               wQ.setUint16(qQ, null !== (TQ = null === zQ || void 0 === zQ ? void 0 : zQ.byteLength) && void 0 !== TQ ? TQ : rQ.Qc, !0), qQ += YX.ub, null !== zQ && (XQ.set(zQ, qQ), qQ += zQ.byteLength)
+               OM.setUint16(SM, null !== (jM = null === aM || void 0 === aM ? void 0 : aM.byteLength) && void 0 !== jM ? jM : mM.Fc, !0), SM += nO.tb, null !== aM && (iM.set(aM, SM), SM += aM.byteLength)
```

#### 586. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5170` → after: `L5294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5294) · [Before (L5170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5170)

```diff
-         return null !== TQ && (0, jQ.zf)(TQ, 0, null !== (wQ = QQ.id) && void 0 !== wQ ? wQ : jQ.xd, null !== (qQ = WQ.id) && void 0 !== qQ ? qQ : jQ.xd, zQ)
+         return null !== jM && (0, hM.Af)(jM, 0, null !== (OM = MM.id) && void 0 !== OM ? OM : hM.Nc, null !== (SM = rM.id) && void 0 !== SM ? SM : hM.Nc, aM)
```

#### 587. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5181` → after: `L5305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5305) · [Before (L5181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5181)

```diff
-         this.deps.core.QTQ()
+         this.deps.core.xSM()
```

#### 588. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5199` → after: `L5323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5323) · [Before (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5199)

```diff
-         }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (WQ = QQ.now) && void 0 !== WQ ? WQ : () => performance.now()
+         }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (rM = MM.now) && void 0 !== rM ? rM : () => performance.now()
```

#### 589. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5210` → after: `L5334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5334) · [Before (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5210)

```diff
-         this.live && (this.viewerShown(!0 === (null === (WQ = (XQ = this.deps).viewerOpen) || void 0 === WQ ? void 0 : WQ.call(XQ))), this.deps.client.recorderSession(QQ, (0, aq.i)()))
+         this.live && (this.viewerShown(!0 === (null === (rM = (iM = this.deps).viewerOpen) || void 0 === rM ? void 0 : rM.call(iM))), this.deps.client.recorderSession(MM, (0, AS.e)()))
```

#### 590. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5217` → after: `L5341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5341) · [Before (L5217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5217)

```diff
-         this.live && (this.state.recording || !0 !== (null === (QQ = (WQ = this.deps).viewerOpen) || void 0 === QQ ? void 0 : QQ.call(WQ))) ? this.deps.client.recorderControl(rQ.ad.ToggleRecording) : this.deps.notify(vq.b.closeViewerFirst)
+         this.live && (this.state.recording || !0 !== (null === (MM = (rM = this.deps).viewerOpen) || void 0 === MM ? void 0 : MM.call(rM))) ? this.deps.client.recorderControl(mM.Sc.ToggleRecording) : this.deps.notify(fS.c.closeViewerFirst)
```

#### 591. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5220` → after: `L5344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5344) · [Before (L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5220)

```diff
-         this.live ? this.deps.client.recorderControl(rQ.ad.SaveClip) : this.deps.notify(vq.b.clippingNotOn)
+         this.live ? this.deps.client.recorderControl(mM.Sc.SaveClip) : this.deps.notify(fS.c.clippingNotOn)
```

#### 592. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5223` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5347) · [Before (L5223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5223)

```diff
-         this.live && this.deps.client.recorderControl(QQ ? rQ.ad.ViewerOpened : rQ.ad.ViewerClosed)
+         this.live && this.deps.client.recorderControl(MM ? mM.Sc.ViewerOpened : mM.Sc.ViewerClosed)
```

#### 593. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5258` → after: `L5382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5382) · [Before (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5258)

```diff
-         } = this.deps, qQ = vq.b;
+         } = this.deps, SM = fS.c;
```

#### 594. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5260` → after: `L5384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5384) · [Before (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5260)

```diff
-           case rQ.Yc.RecordingStarted:
+           case mM.Qc.RecordingStarted:
```

#### 595. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5267-L5268` → after: `L5391-L5392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5391-L5392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5391-L5392) · [Before (L5267-L5268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5267-L5268)

```diff
-           case rQ.Yc.RecordingStopped:
-             this.stopRecording(), wQ(qQ.recordingStopped), this.saveState(rQ.md.Recording, "saving");
+           case mM.Qc.RecordingStopped:
+             this.stopRecording(), OM(SM.recordingStopped), this.saveState(mM._c.Recording, "saving");
```

#### 596. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5270` → after: `L5394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5394) · [Before (L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5270)

```diff
-           case rQ.Yc.RecordingDiscarded:
+           case mM.Qc.RecordingDiscarded:
```

#### 597. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5273` → after: `L5397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5397) · [Before (L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5273)

```diff
-           case rQ.Yc.RecordingTurnedOff:
+           case mM.Qc.RecordingTurnedOff:
```

#### 598. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5276` → after: `L5400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5400) · [Before (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5276)

```diff
-           case rQ.Yc.LimitReached:
+           case mM.Qc.LimitReached:
```

#### 599. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5279-L5280` → after: `L5403-L5404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5403-L5404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5403-L5404) · [Before (L5279-L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5279-L5280)

```diff
-           case rQ.Yc.ClipSaved:
-             this.saveState(rQ.md.Clip, "saving");
+           case mM.Qc.ClipSaved:
+             this.saveState(mM._c.Clip, "saving");
```

#### 600. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5282` → after: `L5406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5406) · [Before (L5282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5282)

```diff
-           case rQ.Yc.ClipEmpty:
+           case mM.Qc.ClipEmpty:
```

#### 601. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5285` → after: `L5409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5409) · [Before (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5285)

```diff
-           case rQ.Yc.ClippingNotOn:
+           case mM.Qc.ClippingNotOn:
```

#### 602. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5288` → after: `L5412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5412) · [Before (L5288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5288)

```diff
-           case rQ.Yc.Disallowed:
+           case mM.Qc.Disallowed:
```

#### 603. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5291` → after: `L5415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5415) · [Before (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5291)

```diff
-           case rQ.Yc.ClippingOn:
+           case mM.Qc.ClippingOn:
```

#### 604. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5298` → after: `L5422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5422) · [Before (L5298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5298)

```diff
-           case rQ.Yc.ClippingOff:
+           case mM.Qc.ClippingOff:
```

#### 605. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5305` → after: `L5429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5429) · [Before (L5305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5305)

```diff
-           case rQ.Yc.ClipSettingsChanged:
+           case mM.Qc.ClipSettingsChanged:
```

#### 606. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5311` → after: `L5435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5435) · [Before (L5311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5311)

```diff
-           case rQ.Yc.SaveBusy:
+           case mM.Qc.SaveBusy:
```

#### 607. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5314` → after: `L5438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5438) · [Before (L5314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5314)

```diff
-           case rQ.Yc.CloseViewerFirst:
+           case mM.Qc.CloseViewerFirst:
```

#### 608. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5319` → after: `L5443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5443) · [Before (L5319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5319)

```diff
-         this.deps.download(WQ), this.saveState(QQ, "done"), this.deps.notify(QQ === rQ.md.Clip ? vq.b.clipSaved : vq.b.recordingSaved)
+         this.deps.download(rM), this.saveState(MM, "done"), this.deps.notify(MM === mM._c.Clip ? fS.c.clipSaved : fS.c.recordingSaved)
```

#### 609. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5322` → after: `L5446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5446) · [Before (L5322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5322)

```diff
-         this.saveState(QQ, "failed"), this.deps.notify(QQ === rQ.md.Clip ? vq.b.clipFailed : vq.b.recordingFailed)
+         this.saveState(MM, "failed"), this.deps.notify(MM === mM._c.Clip ? fS.c.clipFailed : fS.c.recordingFailed)
```

#### 610. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5344` → after: `L5468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5468) · [Before (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5344)

```diff
-         if (WQ + YX.ub > XQ) return null;
+         if (rM + nO.tb > iM) return null;
```

#### 611. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5346` → after: `L5470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5470) · [Before (L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5346)

```diff
-         if (WQ += YX.ub, wQ !== rQ.Qc) {
+         if (rM += nO.tb, OM !== mM.Fc) {
```

#### 612. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5351` → after: `L5475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5475) · [Before (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5351)

```diff
-       return WQ === XQ ? qQ : null
+       return rM === iM ? SM : null
```

#### 613. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5368` → after: `L5492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5492) · [Before (L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5368)

```diff
-               case rQ.od.Cleared:
+               case mM.cd.Cleared:
```

#### 614. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5370` → after: `L5494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5494) · [Before (L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5370)

```diff
-               case rQ.od.Text:
+               case mM.cd.Text:
```

#### 615. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5372` → after: `L5496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5496) · [Before (L5372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5372)

```diff
-               case rQ.od.Int:
+               case mM.cd.Int:
```

#### 616. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5374` → after: `L5498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5498) · [Before (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5374)

```diff
-               case rQ.od.Double:
+               case mM.cd.Double:
```

#### 617. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5389` → after: `L5513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5513) · [Before (L5389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5389)

```diff
-               case rQ.rd.FlyingText: {
+               case mM.fd.FlyingText: {
```

#### 618. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5393-L5394` → after: `L5517-L5518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5517-L5518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5517-L5518) · [Before (L5393-L5394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5393-L5394)

```diff
-                   hT: XQ,
-                   lT: wQ,
+                   Yi: iM,
+                   oi: OM,
```

#### 619. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5399` → after: `L5523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5523) · [Before (L5399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5399)

```diff
-               case rQ.rd.PlayerKilled: {
+               case mM.fd.PlayerKilled: {
```

#### 620. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5409` → after: `L5533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5533) · [Before (L5409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5409)

```diff
-               case rQ.rd.Killfeed: {
+               case mM.fd.Killfeed: {
```

#### 621. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5451` → after: `L5575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5575) · [Before (L5451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5451)

```diff
-       return (QQ, WQ, TQ, zQ) => !(QQ < rQ.Z.ReplayFailed || QQ > rQ.Z.RecorderEvent) && (XQ = WQ, wQ = !0, (0, jQ.we)(QQ, WQ, TQ, zQ, qQ) && wQ)
+       return (MM, rM, jM, aM) => !(MM < mM.Y.ReplayFailed || MM > mM.Y.RecorderEvent) && (iM = rM, OM = !0, (0, hM.ge)(MM, rM, jM, aM, SM) && OM)
```

#### 622. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5467` → after: `L5591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5591) · [Before (L5467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5467)

```diff
-               if (qQ + rQ.V > XQ.byteLength) throw new Error(`the recorder module's events end mid-head at ${qQ}`);
+               if (SM + mM.U > iM.byteLength) throw new Error(`the recorder module's events end mid-head at ${SM}`);
```

#### 623. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5471-L5473` → after: `L5595-L5597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5595-L5597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5595-L5597) · [Before (L5471-L5473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5471-L5473)

```diff
-                 sQ = qQ + rQ.V;
-               if (sQ + zQ > XQ.byteLength || !WQ(TQ, wQ, sQ, zQ)) throw new Error(`the recorder module wrote a malformed event ${TQ} (${zQ} bytes) at ${qQ}`);
-               qQ = sQ + (0, rQ.te)(zQ)
+                 PM = SM + mM.U;
+               if (PM + aM > iM.byteLength || !rM(jM, OM, PM, aM)) throw new Error(`the recorder module wrote a malformed event ${jM} (${aM} bytes) at ${SM}`);
+               SM = PM + (0, mM.oe)(aM)
```

#### 624. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5491` → after: `L5615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5615) · [Before (L5491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5491)

```diff
-         const XQ = null !== (WQ = this.parts.get(QQ.save)) && void 0 !== WQ ? WQ : [];
+         const iM = null !== (rM = this.parts.get(MM.save)) && void 0 !== rM ? rM : [];
```

#### 625. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5515` → after: `L5639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5639) · [Before (L5515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5515)

```diff
-       return XQ.e(63).then((() => XQ(60861)))
+       return iM.e(72).then((() => iM(63239)))
```

#### 626. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5540` → after: `L5664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5664) · [Before (L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5540)

```diff
-             WQ === rQ.md.Edited ? null === (wQ = this.viewer) || void 0 === wQ || wQ.saveDone(XQ) : this.recorder.fileReady(WQ, XQ)
+             rM === mM._c.Edited ? null === (OM = this.viewer) || void 0 === OM || OM.saveDone(iM) : this.recorder.fileReady(rM, iM)
```

#### 627. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5572` → after: `L5696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5696) · [Before (L5572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5572)

```diff
-               case rQ.Yc.FileDiscarded:
+               case mM.Qc.FileDiscarded:
```

#### 628. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5575` → after: `L5699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5699) · [Before (L5575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5575)

```diff
-               case rQ.Yc.SaveFailed:
+               case mM.Qc.SaveFailed:
```

#### 629. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5578` → after: `L5702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5702) · [Before (L5578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5578)

```diff
-               case rQ.Yc.SaveBusy:
+               case mM.Qc.SaveBusy:
```

#### 630. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5601` → after: `L5725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5725) · [Before (L5601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5601)

```diff
-         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (QQ = this.deps.loadViewer) && void 0 !== QQ ? QQ : Sq)().catch((QQ => {
+         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (MM = this.deps.loadViewer) && void 0 !== MM ? MM : rj)().catch((MM => {
```

#### 631. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5619` → after: `L5743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5743) · [Before (L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5619)

```diff
-           QQ > 0 && this.recorder.fJ()
+           MM > 0 && this.recorder.bL()
```

#### 632. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5631` → after: `L5755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5755) · [Before (L5631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5631)

```diff
-         QQ === rQ.md.Edited ? null === (WQ = this.viewer) || void 0 === WQ || WQ.saveFailed(!1) : this.recorder.failed(QQ)
+         MM === mM._c.Edited ? null === (rM = this.viewer) || void 0 === rM || rM.saveFailed(!1) : this.recorder.failed(MM)
```

#### 633. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5634-L5637` → after: `L5758-L5761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5758-L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5758-L5761) · [Before (L5634-L5637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5634-L5637)

```diff
-     var oq = XQ(40847),
-       eq = XQ(40857),
-       nq = XQ(5146),
-       xq = XQ(41136);
+     var Oj = iM(41704),
+       Sj = iM(41712),
+       jj = iM(5204),
+       aj = iM(42022);
```

#### 634. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5644` → after: `L5768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5768) · [Before (L5644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5644)

```diff
-         const XQ = (0, LQ.s)(0, performance.now()),
+         const iM = (0, YM.u)(0, performance.now()),
```

#### 635. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5646-L5647` → after: `L5770-L5771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5770-L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5770-L5771) · [Before (L5646-L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5646-L5647)

```diff
-         (0, xq.h)((() => {
-           (0, LQ.w)(rQ.qb.MouseDown, 0, 0, 0, XQ), (0, LQ.w)(rQ.qb.MouseMove, 0, QQ * wQ, WQ * wQ, 0), (0, LQ.w)(rQ.qb.MouseUp, 0, 0, 0, XQ)
+         (0, aj.j)((() => {
+           (0, YM.z)(mM.tb.MouseDown, 0, 0, 0, iM), (0, YM.z)(mM.tb.MouseMove, 0, MM * OM, rM * OM, 0), (0, YM.z)(mM.tb.MouseUp, 0, 0, 0, iM)
```

#### 636. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5652` → after: `L5776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5776) · [Before (L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5652)

```diff
-         this.analogue[0] = null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.x) && void 0 !== WQ ? WQ : 0, this.analogue[1] = null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.y) && void 0 !== XQ ? XQ : 0, this.send()
+         this.analogue[0] = null !== (rM = null === MM || void 0 === MM ? void 0 : MM.x) && void 0 !== rM ? rM : 0, this.analogue[1] = null !== (iM = null === MM || void 0 === MM ? void 0 : MM.y) && void 0 !== iM ? iM : 0, this.send()
```

#### 637. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5655-L5656` → after: `L5779-L5780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5779-L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5779-L5780) · [Before (L5655-L5656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5655-L5656)

```diff
-         const XQ = "freeCamUp" === QQ ? jQ.pc.Up : jQ.pc.Down;
-         this.keys = WQ ? this.keys | XQ : this.keys & ~XQ, this.send()
+         const iM = "freeCamUp" === MM ? hM.Nb.Up : hM.Nb.Down;
+         this.keys = rM ? this.keys | iM : this.keys & ~iM, this.send()
```

#### 638. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5663` → after: `L5787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5787) · [Before (L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5663)

```diff
-         this.unsent = null !== QQ && !(0, jQ.Ke)(QQ, 0, this.analogue, this.keys)
+         this.unsent = null !== MM && !(0, hM.Ae)(MM, 0, this.analogue, this.keys)
```

#### 639. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5666-L5672` → after: `L5790-L5796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5790-L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5790-L5796) · [Before (L5666-L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5666-L5672)

```diff
-     var Nq = XQ(3810),
-       Zq = XQ(761),
-       Oq = XQ(318),
-       Kq = XQ(105),
-       mq = XQ(34435),
-       Mq = XQ(747),
-       QT = XQ(36888);
+     var nj = iM(3961),
+       Qj = iM(766),
+       zj = iM(255),
+       Lj = iM(83),
+       mj = iM(34956),
+       Hj = iM(746),
+       hj = iM(37529);
```

#### 640. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5675-L5676` → after: `L5799-L5800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5799-L5800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5799-L5800) · [Before (L5675-L5676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5675-L5676)

```diff
-       const QQ = wQ.b.get("clientEscMenuOptions"),
-         WQ = (0, Zq.u)(QQ);
+       const MM = OM.d.get("clientEscMenuOptions"),
+         rM = (0, Qj.t)(MM);
```

#### 641. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5678` → after: `L5802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5802) · [Before (L5678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5678)

```diff
-         mouse: (0, Kq.isMobile)() ? WQ : QQ.mouseSensitivity,
+         mouse: (0, Lj.isMobile)() ? rM : MM.mouseSensitivity,
```

#### 642. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5685-L5686` → after: `L5809-L5810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5809-L5810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5809-L5810) · [Before (L5685-L5686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5685-L5686)

```diff
-       const QQ = wQ.b.get("clientEscMenuOptions"),
-         WQ = wQ.b.get("isTouchScreen") ? (0, Zq.u)(QQ) : QQ.mouseSensitivity,
+       const MM = OM.d.get("clientEscMenuOptions"),
+         rM = OM.d.get("isTouchScreen") ? (0, Qj.t)(MM) : MM.mouseSensitivity,
```

#### 643. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5688` → after: `L5812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5812) · [Before (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5688)

```diff
-       return XQ > 0 ? WQ / XQ : 1
+       return iM > 0 ? rM / iM : 1
```

#### 644. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5693` → after: `L5817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5817) · [Before (L5693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5693)

```diff
-         QQ.setSoundPrefs(wQ.b.get("soundVolume"), wQ.b.get("soundOnFromAd"))
+         MM.setSoundPrefs(OM.d.get("soundVolume"), OM.d.get("soundOnFromAd"))
```

#### 645. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5702` → after: `L5826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5826) · [Before (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5702)

```diff
-         } = wQ.b.get("clientEscMenuOptions"), sQ = {
+         } = OM.d.get("clientEscMenuOptions"), PM = {
```

#### 646. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5707` → after: `L5831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5831) · [Before (L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5707)

```diff
-           cellLight: (0, Nq.e)("cellLight") ? (0, Nq.e)("cellLightUnlit") ? "all" : "lit" : "off"
+           cellLight: (0, nj.i)("cellLight") ? (0, nj.i)("cellLightUnlit") ? "all" : "lit" : "off"
```

#### 647. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5709` → after: `L5833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5833) · [Before (L5709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5709)

```diff
-         XQ && (0, rQ.fe)(XQ) === (0, rQ.fe)(sQ) && XQ.fogChunks === TQ || (XQ = sQ, QQ.setEnvPrefs(XQ))
+         iM && (0, mM.ae)(iM) === (0, mM.ae)(PM) && iM.fogChunks === jM || (iM = PM, MM.setEnvPrefs(iM))
```

#### 648. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5714` → after: `L5838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5838) · [Before (L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5714)

```diff
-           const QQ = wQ.b.get("clientEscMenuOptions");
+           const MM = OM.d.get("clientEscMenuOptions");
```

#### 649. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5716` → after: `L5840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5840) · [Before (L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5716)

```diff
-             nametagsHidden: wQ.b.get("areNametagsHidden"),
+             nametagsHidden: OM.d.get("areNametagsHidden"),
```

#### 650. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5723` → after: `L5847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5847) · [Before (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5723)

```diff
-             touchWalk: !(0, QT.f)(),
+             touchWalk: !(0, hj.e)(),
```

#### 651. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5725-L5726` → after: `L5849-L5850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5849-L5850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5849-L5850) · [Before (L5725-L5726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5725-L5726)

```diff
-             edgeGuardLong: (0, Mq.c)(),
-             nametagCutDistance: (0, mq.d)()
+             edgeGuardLong: (0, Hj.b)(),
+             nametagCutDistance: (0, mj.f)()
```

#### 652. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5729` → after: `L5853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5853) · [Before (L5729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5729)

```diff
-         (0, aQ.Wd)(TQ, WQ) || (TQ = WQ, QQ.setUiPrefs(WQ))
+         (0, gM.Td)(jM, rM) || (jM = rM, MM.setUiPrefs(rM))
```

#### 653. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5734` → after: `L5858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5858) · [Before (L5734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5734)

```diff
-         (0, aQ.Wd)(FQ, WQ) || (FQ = WQ, QQ.setLookPrefs(WQ))
+         (0, gM.Td)(nM, rM) || (nM = rM, MM.setLookPrefs(rM))
```

#### 654. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5737` → after: `L5861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5861) · [Before (L5737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5737)

```diff
-       const gQ = [(0, zQ.o)("appManagerUpdated|soundVolume", WQ), (0, zQ.o)("appManagerUpdated|soundOnFromAd", WQ), (0, zQ.o)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const zM = [(0, aM.j)("appManagerUpdated|soundVolume", rM), (0, aM.j)("appManagerUpdated|soundOnFromAd", rM), (0, aM.j)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 655. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5739` → after: `L5863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5863) · [Before (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5739)

```diff
-       })), (0, zQ.o)(QT.c, sQ), (0, zQ.o)("appManagerUpdated|enabledDebugFeatures", qQ), (0, zQ.o)("appManagerUpdated|areNametagsHidden", sQ), (0, zQ.o)("appManagerUpdated|showDistantNametags", sQ)];
+       })), (0, aM.j)(hj.c, PM), (0, aM.j)("appManagerUpdated|enabledDebugFeatures", SM), (0, aM.j)("appManagerUpdated|areNametagsHidden", PM), (0, aM.j)("appManagerUpdated|showDistantNametags", PM)];
```

#### 656. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5744-L5749` → after: `L5868-L5873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5868-L5873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5868-L5873) · [Before (L5744-L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5744-L5749)

```diff
-     var qT = XQ(41114),
-       TT = XQ(41122);
-     var zT = (0, TT.b)("lend"),
-       sT = (0, TT.b)("starting"),
-       FT = (0, TT.b)("generation"),
-       PT = (0, TT.b)("end");
+     var lj = iM(41998),
+       Ej = iM(42006);
+     var Uj = (0, Ej.e)("lend"),
+       Gj = (0, Ej.e)("starting"),
+       Cj = (0, Ej.e)("generation"),
+       ej = (0, Ej.e)("end");
```

#### 657. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5786` → after: `L5910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5910) · [Before (L5786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5786)

```diff
-           0 !== sQ ? (new Uint8Array(WQ.buffer, sQ, zQ.length).set(zQ), QQ.WTQ(XQ.headLen, wQ, qQ) && (TQ = "sealing")) : TQ = "tooLarge"
+           0 !== PM ? (new Uint8Array(rM.buffer, PM, aM.length).set(aM), MM.vSM(iM.headLen, OM, SM) && (jM = "sealing")) : jM = "tooLarge"
```

#### 658. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5795` → after: `L5919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5919) · [Before (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5795)

```diff
-             WQ = QQ.XTQ(), WQ > 0 && (XQ = QQ.wTQ())
+             rM = MM.FSM(), rM > 0 && (iM = MM.BSM())
```

#### 659. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5807` → after: `L5931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5931) · [Before (L5807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5807)

```diff
-           QQ.qTQ()
+           MM.XSM()
```

#### 660. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5816` → after: `L5940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5940) · [Before (L5816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5816)

```diff
-           QQ.qTQ()
+           MM.XSM()
```

#### 661. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5843` → after: `L5967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5967) · [Before (L5843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5843)

```diff
-         if (QQ.busy() || !IT(QQ.memoryBytes(), QQ.clipSeconds())) return "HI";
+         if (MM.busy() || !gj(MM.memoryBytes(), MM.clipSeconds())) return "ML";
```

#### 662. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5851` → after: `L5975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5975) · [Before (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5851)

```diff
-         if (!XQ) return QQ.trapped() ? "trapped" : QQ.zj() ? "zj" : "failed";
+         if (!iM) return MM.trapped() ? "trapped" : MM.dh() ? "dh" : "failed";
```

#### 663. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5858-L5898` → after: `L5982-L6022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R5982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L5982-L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5982-L6022) · [Before (L5858-L5898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L5858-L5898)

```diff
-       VT = new Set([rQ.ad.ToggleRecording, rQ.ad.SaveClip]);
-     var DT = (0, TT.b)("bindings"),
-       pT = (0, TT.b)("module"),
-       GT = (0, TT.b)("memory"),
-       UT = (0, TT.b)("trapped"),
-       bT = (0, TT.b)("zj"),
-       vT = (0, TT.b)("recycleDue"),
-       dT = (0, TT.b)("loading"),
-       HT = (0, TT.b)("generation"),
-       aT = (0, TT.b)("viewDrawn"),
-       lT = (0, TT.b)("clip"),
-       hT = (0, TT.b)("session"),
-       iT = (0, TT.b)("control"),
-       cT = (0, TT.b)("deferred"),
-       AT = (0, TT.b)("coreU8"),
-       RT = (0, TT.b)("coreU32"),
- ... (25 more removed lines; see GitHub link above)
+       Wj = new Set([mM.Sc.ToggleRecording, mM.Sc.SaveClip]);
+     var sj = (0, Ej.e)("bindings"),
+       Dj = (0, Ej.e)("module"),
+       kj = (0, Ej.e)("memory"),
+       Zj = (0, Ej.e)("trapped"),
+       oj = (0, Ej.e)("dh"),
+       fj = (0, Ej.e)("recycleDue"),
+       Yj = (0, Ej.e)("loading"),
+       Nj = (0, Ej.e)("generation"),
+       Aj = (0, Ej.e)("viewDrawn"),
+       xj = (0, Ej.e)("clip"),
+       vj = (0, Ej.e)("session"),
+       Fj = (0, Ej.e)("control"),
+       Bj = (0, Ej.e)("deferred"),
+       Xj = (0, Ej.e)("coreU8"),
+       Ij = (0, Ej.e)("coreU32"),
+ ... (25 more added lines; see GitHub link above)
```

#### 664. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6028` → after: `L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6152) · [Before (L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6028)

```diff
-         }, (0, qT.d)(this, OT)[OT](rQ.Xc.Prefs, rT(QQ, WQ)), QQ && (0, qT.d)(this, aT)[aT] && (0, qT.d)(this, ST)[ST]()
+         }, (0, lj.d)(this, za)[za](mM.Oc.Prefs, tj(MM, rM)), MM && (0, lj.d)(this, Aj)[Aj] && (0, lj.d)(this, ra)[ra]()
```

#### 665. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6034-L6035` → after: `L6158-L6159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6158-L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6158-L6159) · [Before (L6034-L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6034-L6035)

```diff
-         if (VT.has(QQ)) return (0, qT.d)(this, pT)[pT] ? void(0, qT.d)(this, OT)[OT](rQ.Xc.Control, WQ) : ((0, qT.d)(this, iT)[iT] = WQ, void(0, qT.d)(this, ST)[ST]());
-         (0, qT.d)(this, bT)[bT] || this.deps.coreCommand(rQ.Xc.Control, WQ)
+         if (Wj.has(MM)) return (0, lj.d)(this, Dj)[Dj] ? void(0, lj.d)(this, za)[za](mM.Oc.Control, rM) : ((0, lj.d)(this, Fj)[Fj] = rM, void(0, lj.d)(this, ra)[ra]());
+         (0, lj.d)(this, oj)[oj] || this.deps.coreCommand(mM.Oc.Control, rM)
```

#### 666. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6041` → after: `L6165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6165) · [Before (L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6041)

```diff
-         (0, qT.d)(this, OT)[OT](rQ.Xc.FilePartDone, function(QQ, WQ) {
+         (0, lj.d)(this, za)[za](mM.Oc.FilePartDone, function(MM, rM) {
```

#### 667. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6048` → after: `L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6172) · [Before (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6048)

```diff
-         return (0, qT.d)(this, OT)[OT](rQ.Xc.FileDone, function(QQ) {
+         return (0, lj.d)(this, za)[za](mM.Oc.FileDone, function(MM) {
```

#### 668. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6063` → after: `L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6187) · [Before (L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6063)

```diff
-         if (!WQ || !XQ) return void(null === QQ || void 0 === QQ || QQ.resolve((0, qT.d)(this, UT)[UT] ? "trapped" : "HI"));
+         if (!rM || !iM) return void(null === MM || void 0 === MM || MM.resolve((0, lj.d)(this, Zj)[Zj] ? "trapped" : "ML"));
```

#### 669. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6066` → after: `L6190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6190) · [Before (L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6066)

```diff
-         } = this.deps, qQ = wQ.sTQ(2);
+         } = this.deps, SM = OM.qSM(2);
```

#### 670. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6072` → after: `L6196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6196) · [Before (L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6072)

```diff
-           PQ = null !== (JQ = QQ[qQ >>> 2]) && void 0 !== JQ ? JQ : 0, gQ = null !== (rQ = QQ[1 + (qQ >>> 2)]) && void 0 !== rQ ? rQ : 0
+           QM = null !== (LM = MM[SM >>> 2]) && void 0 !== LM ? LM : 0, zM = null !== (mM = MM[1 + (SM >>> 2)]) && void 0 !== mM ? mM : 0
```

#### 671. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6079` → after: `L6203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6203) · [Before (L6079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6079)

```diff
-           TQ = WQ.step(), zQ = WQ.FTQ(), sQ = WQ.PTQ(), FQ = WQ.gTQ()
+           jM = rM.step(), aM = rM.TSM(), PM = rM.VSM(), nM = rM.cSM()
```

#### 672. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6081` → after: `L6205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6205) · [Before (L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6081)

```diff
-           if (!(0, qT.d)(this, Tz)[Tz](IQ)) throw null === QQ || void 0 === QQ || QQ.resolve("HI"), IQ;
+           if (!(0, lj.d)(this, Ea)[Ea](HM)) throw null === MM || void 0 === MM || MM.resolve("ML"), HM;
```

#### 673. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6085` → after: `L6209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6209) · [Before (L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6085)

```diff
-           const QQ = wQ.JTQ(2, TQ);
+           const MM = OM.MjM(2, jM);
```

#### 674. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6093` → after: `L6217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6217) · [Before (L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6093)

```diff
-             throw null === QQ || void 0 === QQ || QQ.resolve("HI"), IQ
+             throw null === MM || void 0 === MM || MM.resolve("ML"), HM
```

#### 675. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6100` → after: `L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6224) · [Before (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6100)

```diff
-         if (!(0, qT.d)(this, kT)[kT]() && !(0, qT.d)(this, fT)[fT]()) return (0, qT.d)(this, KT)[KT](), void(null === QQ || void 0 === QQ || QQ.resolve("HI"));
+         if (!(0, lj.d)(this, cj)[cj]() && !(0, lj.d)(this, Ma)[Ma]()) return (0, lj.d)(this, La)[La](), void(null === MM || void 0 === MM || MM.resolve("ML"));
```

#### 676. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6109` → after: `L6233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6233) · [Before (L6109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6109)

```diff
-       (0, qT.d)(this, OT)[OT](rQ.Xc.Session, function(QQ) {
+       (0, lj.d)(this, za)[za](mM.Oc.Session, function(MM) {
```

#### 677. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6161` → after: `L6285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6285) · [Before (L6161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6161)

```diff
-       if (!(0, qT.d)(this, pT)[pT]) return Promise.resolve((0, qT.d)(this, UT)[UT] ? "trapped" : "HI");
+       if (!(0, lj.d)(this, Dj)[Dj]) return Promise.resolve((0, lj.d)(this, Zj)[Zj] ? "trapped" : "ML");
```

#### 678. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6190` → after: `L6314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6314) · [Before (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6190)

```diff
-           qQ = (0, qT.d)(this, qz)[qz]((() => wQ.rTQ()));
+           SM = (0, lj.d)(this, la)[la]((() => OM.rjM()));
```

#### 679. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6192-L6193` → after: `L6316-L6317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6316-L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6316-L6317) · [Before (L6192-L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6192-L6193)

```diff
-         const TQ = this.deps.core.ITQ();
-         if (qQ !== TQ) return await (0, qT.d)(this, Xz)[Xz](new Error(`recorder port version ${qQ}, the core's ${TQ}`)), !1;
+         const jM = this.deps.core.ijM();
+         if (SM !== jM) return await (0, lj.d)(this, da)[da](new Error(`recorder port version ${SM}, the core's ${jM}`)), !1;
```

#### 680. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6198` → after: `L6322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6322) · [Before (L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6198)

```diff
-         if (!(0, qT.d)(this, qz)[qz]((() => ((0, qT.d)(this, pT)[pT] = new WQ.jTQ, (0, qT.d)(this, GT)[GT] = WQ.TTQ(), !0)))) return !1;
+         if (!(0, lj.d)(this, la)[la]((() => ((0, lj.d)(this, Dj)[Dj] = new rM.OjM, (0, lj.d)(this, kj)[kj] = rM.ISM(), !0)))) return !1;
```

#### 681. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6201` → after: `L6325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6325) · [Before (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6201)

```diff
-         return (0, qT.d)(this, iT)[iT] = null, QQ && (0, qT.d)(this, OT)[OT](rQ.Xc.Control, QQ), (0, qT.d)(this, YT)[YT]()
+         return (0, lj.d)(this, Fj)[Fj] = null, MM && (0, lj.d)(this, za)[za](mM.Oc.Control, MM), (0, lj.d)(this, Pa)[Pa]()
```

#### 682. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6208` → after: `L6332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6332) · [Before (L6208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6208)

```diff
-       return this.deps.core.BTQ(0), 1 === this.deps.core.BTQ(1) || ((0, qT.d)(this, KT)[KT](), this.deps.failed(yT), !1)
+       return this.deps.core.SjM(0), 1 === this.deps.core.SjM(1) || ((0, lj.d)(this, La)[La](), this.deps.failed(pj), !1)
```

#### 683. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6212` → after: `L6336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6336) · [Before (L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6212)

```diff
-       (0, qT.d)(this, lT)[lT] && (0, qT.d)(this, OT)[OT](rQ.Xc.Prefs, rT((0, qT.d)(this, lT)[lT].on, (0, qT.d)(this, lT)[lT].seconds)), (0, qT.d)(this, hT)[hT] && (0, qT.d)(this, uT)[uT]((0, qT.d)(this, hT)[hT])
+       (0, lj.d)(this, xj)[xj] && (0, lj.d)(this, za)[za](mM.Oc.Prefs, tj((0, lj.d)(this, xj)[xj].on, (0, lj.d)(this, xj)[xj].seconds)), (0, lj.d)(this, vj)[vj] && (0, lj.d)(this, Tj)[Tj]((0, lj.d)(this, vj)[vj])
```

#### 684. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6220` → after: `L6344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6344) · [Before (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6220)

```diff
-           return null !== (QQ = null === (WQ = (0, qT.d)(this, lT)[lT]) || void 0 === WQ ? void 0 : WQ.seconds) && void 0 !== QQ ? QQ : 0
+           return null !== (MM = null === (rM = (0, lj.d)(this, xj)[xj]) || void 0 === rM ? void 0 : rM.seconds) && void 0 !== MM ? MM : 0
```

#### 685. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6225` → after: `L6349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6349) · [Before (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6225)

```diff
-         zj: () => (0, qT.d)(this, bT)[bT],
+         dh: () => (0, lj.d)(this, oj)[oj],
```

#### 686. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6235` → after: `L6359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6359) · [Before (L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6235)

```diff
-         const qQ = XQ.zTQ(WQ.length);
+         const SM = iM.KSM(rM.length);
```

#### 687. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6241` → after: `L6365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6365) · [Before (L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6241)

```diff
-       (0, qT.d)(this, HT)[HT]++, (0, qT.d)(this, nT)[nT]("HI"), (0, qT.d)(this, CT)[CT].stop(), this.deps.core.BTQ(0), (0, qT.d)(this, mT)[mT](), (0, qT.d)(this, UT)[UT] || ((0, qT.d)(this, DT)[DT] = null, this.deps.unload())
+       (0, lj.d)(this, Nj)[Nj]++, (0, lj.d)(this, ja)[ja]("ML"), (0, lj.d)(this, qj)[qj].stop(), this.deps.core.SjM(0), (0, lj.d)(this, ma)[ma](), (0, lj.d)(this, Zj)[Zj] || ((0, lj.d)(this, sj)[sj] = null, this.deps.unload())
```

#### 688. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6289` → after: `L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6413) · [Before (L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6289)

```diff
-       return QQ instanceof WebAssembly.RuntimeError && ((0, qT.d)(this, UT)[UT] = !0, (0, qT.d)(this, pT)[pT] = null, (0, qT.d)(this, GT)[GT] = null, (0, qT.d)(this, ET)[ET] = null, (0, qT.d)(this, DT)[DT] = null, (0, qT.d)(this, iT)[iT] = null, (0, qT.d)(this, nT)[nT]("trapped") … [truncated]
+       return MM instanceof WebAssembly.RuntimeError && ((0, lj.d)(this, Zj)[Zj] = !0, (0, lj.d)(this, Dj)[Dj] = null, (0, lj.d)(this, kj)[kj] = null, (0, lj.d)(this, Kj)[Kj] = null, (0, lj.d)(this, sj)[sj] = null, (0, lj.d)(this, Fj)[Fj] = null, (0, lj.d)(this, ja)[ja]("trapped") … [truncated]
```

#### 689. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6291` → after: `L6415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6415) · [Before (L6291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6291)

```diff
-     var cz = XQ(38928);
+     var Ba = iM(39678);
```

#### 690. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6293` → after: `L6417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6417) · [Before (L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6293)

```diff
-       ["skyblock", () => XQ.e(54).then((() => XQ(38926)))]
+       ["skyblock", () => iM.e(58).then((() => iM(39676)))]
```

#### 691. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6299-L6300` → after: `L6423-L6424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6423-L6424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6423-L6424) · [Before (L6299-L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6299-L6300)

```diff
-         const WQ = (0, cz.b)(QQ);
-         if (!WQ) throw new Error(`${QQ}'s replay hook module registered no hook`);
+         const rM = (0, Ba.c)(MM);
+         if (!rM) throw new Error(`${MM}'s replay hook module registered no hook`);
```

#### 692. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6380-L6398` → after: `L6504-L6522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6504-L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6504-L6522) · [Before (L6380-L6398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6380-L6398)

```diff
-     var Cz = (0, TT.b)("bindings"),
-       uz = (0, TT.b)("module"),
-       Lz = (0, TT.b)("memory"),
-       kz = (0, TT.b)("trapped"),
-       fz = (0, TT.b)("generation"),
-       Sz = (0, TT.b)("loading"),
-       tz = (0, TT.b)("lend"),
-       oz = (0, TT.b)("givenUp"),
-       ez = (0, TT.b)("afterSave"),
-       nz = (0, TT.b)("opens"),
-       xz = (0, TT.b)("saveAskedAt"),
-       Yz = (0, TT.b)("unload"),
-       Nz = (0, TT.b)("dropModule"),
-       Zz = (0, TT.b)("loadFailed"),
-       Oz = (0, TT.b)("saveReadsBody"),
-       Kz = (0, TT.b)("command"),
- ... (3 more removed lines; see GitHub link above)
+     var qa = (0, Ej.e)("bindings"),
+       Ta = (0, Ej.e)("module"),
+       Va = (0, Ej.e)("memory"),
+       ca = (0, Ej.e)("trapped"),
+       MP = (0, Ej.e)("generation"),
+       rP = (0, Ej.e)("loading"),
+       iP = (0, Ej.e)("lend"),
+       OP = (0, Ej.e)("givenUp"),
+       SP = (0, Ej.e)("afterSave"),
+       jP = (0, Ej.e)("opens"),
+       aP = (0, Ej.e)("saveAskedAt"),
+       PP = (0, Ej.e)("unload"),
+       nP = (0, Ej.e)("dropModule"),
+       QP = (0, Ej.e)("loadFailed"),
+       zP = (0, Ej.e)("saveReadsBody"),
+       LP = (0, Ej.e)("command"),
+ ... (3 more added lines; see GitHub link above)
```

#### 693. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6457` → after: `L6581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6581) · [Before (L6457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6457)

```diff
-         if ((0, qT.d)(this, kz)[kz]) return rQ.id.ModuleTrap;
+         if ((0, lj.d)(this, ca)[ca]) return mM.Zc.ModuleTrap;
```

#### 694. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6468-L6471` → after: `L6592-L6595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6592-L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6592-L6595) · [Before (L6468-L6471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6468-L6471)

```diff
-           if ((0, qT.d)(this, kz)[kz]) return rQ.id.ModuleTrap;
-           const wQ = XQ.rTQ(),
-             TQ = this.deps.core.ITQ();
-           if (wQ !== TQ) return (0, qT.d)(this, Zz)[Zz](new Error(`replay port version ${wQ}, the core's ${TQ}`), WQ);
+           if ((0, lj.d)(this, ca)[ca]) return mM.Zc.ModuleTrap;
+           const OM = iM.rjM(),
+             jM = this.deps.core.ijM();
+           if (OM !== jM) return (0, lj.d)(this, QP)[QP](new Error(`replay port version ${OM}, the core's ${jM}`), rM);
```

#### 695. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6477-L6478` → after: `L6601-L6602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6601-L6602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6601-L6602) · [Before (L6477-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6477-L6478)

```diff
-               (0, qT.d)(this, uz)[uz] = new QQ.yTQ, (0, qT.d)(this, Lz)[Lz] = QQ.VTQ()
-             }))) return rQ.id.ModuleTrap
+               (0, lj.d)(this, Ta)[Ta] = new MM.jjM, (0, lj.d)(this, Va)[Va] = MM.ajM()
+             }))) return mM.Zc.ModuleTrap
```

#### 696. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6485` → after: `L6609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6609) · [Before (L6485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6485)

```diff
-         })) ? wQ ? "opening" : rQ.id.TooLarge : rQ.id.ModuleTrap
+         })) ? OM ? "opening" : mM.Zc.TooLarge : mM.Zc.ModuleTrap
```

#### 697. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6493` → after: `L6617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6617) · [Before (L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6493)

```diff
-         } = this.deps, qQ = wQ.DTQ(QQ);
+         } = this.deps, SM = OM.PjM(MM);
```

#### 698. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6498` → after: `L6622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6622) · [Before (L6498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6498)

```diff
-           zQ = WQ.step(TQ, qQ - TQ), sQ = WQ.FTQ()
+           aM = rM.step(jM, SM - jM), PM = rM.TSM()
```

#### 699. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6502` → after: `L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6626) · [Before (L6502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6502)

```diff
-         const FQ = wQ.JTQ(1, zQ);
+         const nM = OM.MjM(1, aM);
```

#### 700. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6508` → after: `L6632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6632) · [Before (L6508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6508)

```diff
-           return (0, qT.d)(this, Oz)[Oz] ? (0, qT.d)(this, ez)[ez] = "drop" : (0, qT.d)(this, Nz)[Nz](), void wQ.pTQ(rQ.id.Port)
+           return (0, lj.d)(this, zP)[zP] ? (0, lj.d)(this, SP)[SP] = "drop" : (0, lj.d)(this, nP)[nP](), void OM.njM(mM.Zc.Port)
```

#### 701. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6530` → after: `L6654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6654) · [Before (L6530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6530)

```diff
-           XQ.UTQ(QQ, WQ)
+           iM.QjM(MM, rM)
```

#### 702. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6535` → after: `L6659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6659) · [Before (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6535)

```diff
-           XQ.bTQ(QQ[0], QQ[1], QQ[2], WQ[0], WQ[1], WQ[2])
+           iM.zjM(MM[0], MM[1], MM[2], rM[0], rM[1], rM[2])
```

#### 703. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6540` → after: `L6664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6664) · [Before (L6540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6540)

```diff
-           XQ.vTQ(QQ, WQ)
+           iM.LjM(MM, rM)
```

#### 704. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6545` → after: `L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6669) · [Before (L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6545)

```diff
-           XQ.dTQ(QQ, WQ)
+           iM.mjM(MM, rM)
```

#### 705. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6550` → after: `L6674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6674) · [Before (L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6550)

```diff
-           XQ.HTQ(QQ, WQ)
+           iM.HjM(MM, rM)
```

#### 706. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6564` → after: `L6688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6688) · [Before (L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6564)

```diff
-             WQ = QQ.save(), 0 !== WQ && (XQ = new Uint8Array(wQ.buffer, QQ.aTQ(), QQ.lTQ()).slice())
+             rM = MM.save(), 0 !== rM && (iM = new Uint8Array(OM.buffer, MM.hjM(), MM.JjM()).slice())
```

#### 707. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6574-L6575` → after: `L6698-L6699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6698-L6699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6698-L6699) · [Before (L6574-L6575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6574-L6575)

```diff
-               const TQ = wQ.hTQ();
-               0 !== TQ && QQ >= 0 && WQ >= 0 && QQ + WQ <= TQ && (XQ = new Uint8Array(qQ.buffer, wQ.iTQ() + QQ, WQ))
+               const jM = OM.djM();
+               0 !== jM && MM >= 0 && rM >= 0 && MM + rM <= jM && (iM = new Uint8Array(SM.buffer, OM.yjM() + MM, rM))
```

#### 708. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6581` → after: `L6705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6705) · [Before (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6581)

```diff
-               QQ.cTQ()
+               MM.ljM()
```

#### 709. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6594` → after: `L6718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6718) · [Before (L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6594)

```diff
-           WQ.RTQ(QQ)
+           rM.EjM(MM)
```

#### 710. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6599` → after: `L6723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6723) · [Before (L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6599)

```diff
-           WQ.ETQ(QQ)
+           rM.UjM(MM)
```

#### 711. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6626` → after: `L6750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6750) · [Before (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6626)

```diff
-       }) ? "reloading" : rQ.id.ModuleLoad
+       }) ? "reloading" : mM.Zc.ModuleLoad
```

#### 712. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6656` → after: `L6780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6780) · [Before (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6656)

```diff
-       (0, qT.d)(this, kz)[kz] = !0, (0, qT.d)(this, uz)[uz] = null, (0, qT.d)(this, Lz)[Lz] = null, (0, qT.d)(this, Cz)[Cz] = null, this.deps.crash(this.deps.markTrapped(QQ)), this.deps.core.pTQ(rQ.id.ModuleTrap)
+       (0, lj.d)(this, ca)[ca] = !0, (0, lj.d)(this, Ta)[Ta] = null, (0, lj.d)(this, Va)[Va] = null, (0, lj.d)(this, qa)[qa] = null, this.deps.crash(this.deps.markTrapped(MM)), this.deps.core.njM(mM.Zc.ModuleTrap)
```

#### 713. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6658-L6659` → after: `L6782-L6783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6782-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6782-L6783) · [Before (L6658-L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6658-L6659)

```diff
-     var gs = XQ(6880),
-       rs = XQ(41229);
+     var bP = iM(6950),
+       wP = iM(42126);
```

#### 714. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6670` → after: `L6794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6794) · [Before (L6670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6670)

```diff
-         case rQ.rd.FlyingText: {
+         case mM.fd.FlyingText: {
```

#### 715. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6675` → after: `L6799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6799) · [Before (L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6675)

```diff
-             return void console.warn(`${Is} a replay's flying text isn't JSON`, PQ)
+             return void console.warn(`${tP} a replay's flying text isn't JSON`, QM)
```

#### 716. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6677` → after: `L6801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6801) · [Before (L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6677)

```diff
-           zQ.k.mB("forceFlyingMiddleMessage", {
+           aM.i.Tz("forceFlyingMiddleMessage", {
```

#### 717. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6679` → after: `L6803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6803) · [Before (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6679)

```diff
-             lT: QQ.lT,
+             oi: MM.oi,
```

#### 718. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6681` → after: `L6805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6805) · [Before (L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6681)

```diff
-             hT: QQ.hT
+             Yi: MM.Yi
```

#### 719. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6685-L6686` → after: `L6809-L6810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6809-L6810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6809-L6810) · [Before (L6685-L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6685-L6686)

```diff
-         case rQ.rd.PlayerKilled:
-           (0, rs.h)({
+         case mM.fd.PlayerKilled:
+           (0, wP.d)({
```

#### 720. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6689` → after: `L6813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6813) · [Before (L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6689)

```diff
-               deadEId: null !== (WQ = ys(QQ.dead)) && void 0 !== WQ ? WQ : "",
+               deadEId: null !== (rM = uP(MM.dead)) && void 0 !== rM ? rM : "",
```

#### 721. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6691` → after: `L6815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6815) · [Before (L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6691)

```diff
-               withItem: null !== (XQ = QQ.withItem) && void 0 !== XQ ? XQ : "",
+               withItem: null !== (iM = MM.withItem) && void 0 !== iM ? iM : "",
```

#### 722. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6696-L6697` → after: `L6820-L6821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6820-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6820-L6821) · [Before (L6696-L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6696-L6697)

```diff
-         case rQ.rd.Killfeed:
-           (0, rs.h)({
+         case mM.fd.Killfeed:
+           (0, wP.d)({
```

#### 723. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6702-L6703` → after: `L6826-L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6826-L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6826-L6827) · [Before (L6702-L6703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6702-L6703)

```diff
-                 name: null !== (wQ = QQ.killerName) && void 0 !== wQ ? wQ : void 0,
-                 colour: null !== (qQ = QQ.killerColour) && void 0 !== qQ ? qQ : void 0
+                 name: null !== (OM = MM.killerName) && void 0 !== OM ? OM : void 0,
+                 colour: null !== (SM = MM.killerColour) && void 0 !== SM ? SM : void 0
```

#### 724. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6707-L6708` → after: `L6831-L6832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6831-L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6831-L6832) · [Before (L6707-L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6707-L6708)

```diff
-                 name: null !== (TQ = QQ.victimName) && void 0 !== TQ ? TQ : void 0,
-                 colour: null !== (sQ = QQ.victimColour) && void 0 !== sQ ? sQ : void 0
+                 name: null !== (jM = MM.victimName) && void 0 !== jM ? jM : void 0,
+                 colour: null !== (PM = MM.victimColour) && void 0 !== PM ? PM : void 0
```

#### 725. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6710` → after: `L6834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6834) · [Before (L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6710)

```diff
-               withItem: null !== (FQ = QQ.withItem) && void 0 !== FQ ? FQ : ""
+               withItem: null !== (nM = MM.withItem) && void 0 !== nM ? nM : ""
```

#### 726. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6720` → after: `L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6844) · [Before (L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6720)

```diff
-       return Number.isInteger(WQ) && WQ > Rq && WQ <= 2147483647 ? WQ : null
+       return Number.isInteger(rM) && rM > IS && rM <= 2147483647 ? rM : null
```

#### 727. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6732` → after: `L6856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6856) · [Before (L6732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6732)

```diff
-       const WQ = (0, eq.j)(YX.gc.PlayerKilled, (WQ => {
+       const rM = (0, Sj.h)(nO.hc.PlayerKilled, (rM => {
```

#### 728. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6734` → after: `L6858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6858) · [Before (L6734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6734)

```diff
-           const qQ = (0, oq.h)(WQ);
+           const SM = (0, Oj.f)(rM);
```

#### 729. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6742` → after: `L6866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6866) · [Before (L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6742)

```diff
-           QQ.recordPlayerKilled(null !== (XQ = ps(TQ)) && void 0 !== XQ ? XQ : Rq, null !== (wQ = ps(zQ)) && void 0 !== wQ ? wQ : Rq, "number" === typeof FQ ? FQ : 0, "string" === typeof sQ ? sQ : "")
+           MM.recordPlayerKilled(null !== (iM = WP(jM)) && void 0 !== iM ? iM : IS, null !== (OM = WP(aM)) && void 0 !== OM ? OM : IS, "number" === typeof nM ? nM : 0, "string" === typeof PM ? PM : "")
```

#### 730. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6744-L6745` → after: `L6868-L6869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6868-L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6868-L6869) · [Before (L6744-L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6744-L6745)

```diff
-         XQ = (0, eq.j)(YX.gc.CustomKillfeed, (WQ => {
-           const XQ = (0, oq.h)(WQ);
+         iM = (0, Sj.h)(nO.hc.CustomKillfeed, (rM => {
+           const iM = (0, Oj.f)(rM);
```

#### 731. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6752` → after: `L6876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6876) · [Before (L6752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6752)

```diff
-           QQ.recordKillfeed(Gs(wQ), Gs(qQ), "string" === typeof TQ ? TQ : null)
+           MM.recordKillfeed(sP(OM), sP(SM), "string" === typeof jM ? jM : null)
```

#### 732. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6761` → after: `L6885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6885) · [Before (L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6761)

```diff
-       return void 0 === QQ || null === QQ ? null : null !== (WQ = JSON.stringify(QQ)) && void 0 !== WQ ? WQ : null
+       return void 0 === MM || null === MM ? null : null !== (rM = JSON.stringify(MM)) && void 0 !== rM ? rM : null
```

#### 733. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6770` → after: `L6894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6894) · [Before (L6770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6770)

```diff
-         } = wQ.b.get("clientEscMenuOptions"), TQ = `${XQ}:${qQ}`;
+         } = OM.d.get("clientEscMenuOptions"), jM = `${iM}:${SM}`;
```

#### 734. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6773` → after: `L6897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6897) · [Before (L6773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6773)

```diff
-       return XQ(), (0, zQ.o)("appManagerUpdated|clientEscMenuOptions", XQ)
+       return iM(), (0, aM.j)("appManagerUpdated|clientEscMenuOptions", iM)
```

#### 735. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6778` → after: `L6902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6902) · [Before (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6778)

```diff
-     function as(QQ, WQ, XQ) {
+     function YP(MM, rM, iM) {
```

#### 736. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6780` → after: `L6904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6904) · [Before (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6780)

```diff
-         return QQ.isStopped ? XQ : WQ(...arguments)
+         return MM.isStopped ? iM : rM(...arguments)
```

#### 737. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6784` → after: `L6908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6908) · [Before (L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6784)

```diff
-       open: () => Promise.reject(new Error(vq.b.coreStopped.text)),
+       open: () => Promise.reject(new Error(fS.c.coreStopped.text)),
```

#### 738. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6792` → after: `L6916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6916) · [Before (L6792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6792)

```diff
-       return XQ.e(67).then((() => XQ(61735)))
+       return iM.e(76).then((() => iM(64109)))
```

#### 739. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6796` → after: `L6920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6920) · [Before (L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6796)

```diff
-       (0, vq.e)({
+       (0, fS.d)({
```

#### 740. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6808` → after: `L6932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6932) · [Before (L6808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6808)

```diff
-         } = QQ, TQ = () => QQ.memory().buffer, zQ = () => WQ.isStopped ? null : WQ.rings.cmd, sQ = as(WQ, ((QQ, WQ) => qQ.JTQ(QQ, WQ)), 0), FQ = () => qQ.ITQ();
+         } = MM, jM = () => MM.memory().buffer, aM = () => rM.isStopped ? null : rM.rings.cmd, PM = YP(rM, ((MM, rM) => SM.MjM(MM, rM)), 0), nM = () => SM.ijM();
```

#### 741. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6812-L6816` → after: `L6936-L6940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6936-L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6936-L6940) · [Before (L6812-L6816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6812-L6816)

```diff
-             DTQ: as(WQ, (QQ => qQ.DTQ(QQ)), -1),
-             JTQ: sQ,
-             ITQ: FQ,
-             pTQ: as(WQ, (QQ => {
-               qQ.pTQ(QQ)
+             PjM: YP(rM, (MM => SM.PjM(MM)), -1),
+             MjM: PM,
+             ijM: nM,
+             njM: YP(rM, (MM => {
+               SM.njM(MM)
```

#### 742. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6820` → after: `L6944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6944) · [Before (L6820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6820)

```diff
-           load: async () => (PQ = await XQ.e(68).then((() => XQ(61750))), PQ.loadReplayModule()),
+           load: async () => (QM = await iM.e(77).then((() => iM(64121))), QM.loadReplayModule()),
```

#### 743. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6834-L6837` → after: `L6958-L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6958-L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6958-L6961) · [Before (L6834-L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6834-L6837)

```diff
-             BTQ: as(WQ, (QQ => qQ.BTQ(QQ)), 0),
-             sTQ: as(WQ, (QQ => qQ.sTQ(QQ)), 0),
-             JTQ: sQ,
-             ITQ: FQ
+             SjM: YP(rM, (MM => SM.SjM(MM)), 0),
+             qSM: YP(rM, (MM => SM.qSM(MM)), 0),
+             MjM: PM,
+             ijM: nM
```

#### 744. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6847` → after: `L6971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6971) · [Before (L6847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6847)

```diff
-               console.warn(`${Ds} the recorder module didn't prefetch, so a save loads it:`, QQ)
+               console.warn(`${pP} the recorder module didn't prefetch, so a save loads it:`, MM)
```

#### 745. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6857` → after: `L6981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6981) · [Before (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6857)

```diff
-             return null !== (QQ = null === (WQ = gQ) || void 0 === WQ ? void 0 : WQ.recorderMemoryBytes()) && void 0 !== QQ ? QQ : 0
+             return null !== (MM = null === (rM = zM) || void 0 === rM ? void 0 : rM.recorderMemoryBytes()) && void 0 !== MM ? MM : 0
```

#### 746. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6874-L6876` → after: `L6998-L7000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6998-L7000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6998-L7000) · [Before (L6874-L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6874-L6876)

```diff
-             mqQ: as(WQ, (QQ => qQ.mqQ(QQ)), 0),
-             QTQ: as(WQ, (() => {
-               qQ.QTQ()
+             YSM: YP(rM, (MM => SM.YSM(MM)), 0),
+             xSM: YP(rM, (() => {
+               SM.xSM()
```

#### 747. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6878-L6879` → after: `L7002-L7003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7002-L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7002-L7003) · [Before (L6878-L6879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6878-L6879)

```diff
-             Ly: as(WQ, (() => qQ.Ly()), 0),
-             MqQ: as(WQ, (() => qQ.MqQ()), 0)
+             qd: YP(rM, (() => SM.qd()), 0),
+             ASM: YP(rM, (() => SM.ASM()), 0)
```

#### 748. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6892` → after: `L7016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7016) · [Before (L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6892)

```diff
-             console.warn(`${Ds} the recorded game's replay hooks:`, QQ)
+             console.warn(`${pP} the recorded game's replay hooks:`, MM)
```

#### 749. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6901` → after: `L7025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7025) · [Before (L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6901)

```diff
-           notify: vq.e,
+           notify: fS.d,
```

#### 750. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6904` → after: `L7028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7028) · [Before (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6904)

```diff
-             null === (QQ = (0, Hq.d)()) || void 0 === QQ || QQ.recorderChanged()
+             null === (MM = (0, NS.f)()) || void 0 === MM || MM.recorderChanged()
```

#### 751. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6908` → after: `L7032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7032) · [Before (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6908)

```diff
-             null === (QQ = (0, Hq.d)()) || void 0 === QQ || QQ.viewerChanged()
+             null === (MM = (0, NS.f)()) || void 0 === MM || MM.viewerChanged()
```

#### 752. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6913` → after: `L7037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7037) · [Before (L6913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6913)

```diff
-               const qQ = YX.tb[WQ.key];
+               const SM = nO.pb[rM.key];
```

#### 753. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6915-L6916` → after: `L7039-L7040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7039-L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7039-L7040) · [Before (L6915-L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6915-L6916)

```diff
-               let TQ = null !== (XQ = WQ.value) && void 0 !== XQ ? XQ : JSON.parse(JSON.stringify(null !== (wQ = gs.b[qQ]) && void 0 !== wQ ? wQ : null));
-               if (null !== WQ.value && WQ.key < YX.Nb.Environment && "string" === typeof TQ) try {
+               let jM = null !== (iM = rM.value) && void 0 !== iM ? iM : JSON.parse(JSON.stringify(null !== (OM = bP.e[SM]) && void 0 !== OM ? OM : null));
+               if (null !== rM.value && rM.key < nO.Qb.Environment && "string" === typeof jM) try {
```

#### 754. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6919` → after: `L7043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7043) · [Before (L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6919)

```diff
-                 return void console.warn(`${Is} a replay's ${qQ} isn't JSON`, zQ)
+                 return void console.warn(`${tP} a replay's ${SM} isn't JSON`, aM)
```

#### 755. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6932` → after: `L7056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7056) · [Before (L6932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6932)

```diff
-             return null !== (QQ = null === (XQ = WQ.lastHeader) || void 0 === XQ ? void 0 : XQ.renderPending) && void 0 !== QQ ? QQ : 0
+             return null !== (MM = null === (iM = rM.lastHeader) || void 0 === iM ? void 0 : iM.renderPending) && void 0 !== MM ? MM : 0
```

#### 756. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6934` → after: `L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7058) · [Before (L6934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6934)

```diff
-           viewerOpen: dq.e,
+           viewerOpen: YS.b,
```

#### 757. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6939` → after: `L7063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7063) · [Before (L6939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6939)

```diff
-         this.runtime = rQ, wQ.replay = rQ.sink, (0, Hq.o)(rQ);
+         this.runtime = mM, OM.replay = mM.sink, (0, NS.v)(mM);
```

#### 758. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6948-L6949` → after: `L7072-L7073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7072-L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7072-L7073) · [Before (L6948-L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6948-L6949)

```diff
-         this.freecam = IQ, (0, Hq.n)(IQ), this.recordedOptions = function(QQ, WQ) {
-           const XQ = YX.tb,
+         this.freecam = HM, (0, NS.s)(HM), this.recordedOptions = function(MM, rM) {
+           const iM = nO.pb,
```

#### 759. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6963` → after: `L7087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7087) · [Before (L6963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6963)

```diff
-         }(rQ.recorder, QQ.options), this.stops = [(0, ww.k)((QQ => {
+         }(mM.recorder, MM.options), this.stops = [(0, lO.n)((MM => {
```

#### 760. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6970` → after: `L7094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7094) · [Before (L6970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6970)

```diff
-         })), (0, ww.x)(((QQ, WQ) => {
+         })), (0, lO.A)(((MM, rM) => {
```

#### 761. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6983` → after: `L7107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7107) · [Before (L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6983)

```diff
-         }, Us(rQ.recorder), (0, nq.j)((QQ => {
+         }, DP(mM.recorder), (0, jj.f)((MM => {
```

#### 762. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6989` → after: `L7113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7113) · [Before (L6989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6989)

```diff
-           XQ && (null === (wQ = (0, Hq.d)()) || void 0 === wQ || wQ.keyDown(WQ))
+           iM && (null === (OM = (0, NS.f)()) || void 0 === OM || OM.keyDown(rM))
```

#### 763. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6993` → after: `L7117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7117) · [Before (L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6993)

```diff
-           return !0 === (null === QQ || void 0 === QQ ? void 0 : QQ.isOpen) ? QQ : null
+           return !0 === (null === MM || void 0 === MM ? void 0 : MM.isOpen) ? MM : null
```

#### 764. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6995` → after: `L7119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7119) · [Before (L6995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6995)

```diff
-         (0, bq.e)({
+         (0, oS.i)({
```

#### 765. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6999` → after: `L7123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7123) · [Before (L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6999)

```diff
-             return null !== (QQ = null === (WQ = jQ()) || void 0 === WQ ? void 0 : WQ.id) && void 0 !== QQ ? QQ : null
+             return null !== (MM = null === (rM = hM()) || void 0 === rM ? void 0 : rM.id) && void 0 !== MM ? MM : null
```

#### 766. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7003` → after: `L7127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7127) · [Before (L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7003)

```diff
-             return null !== (QQ = null === (WQ = jQ()) || void 0 === WQ ? void 0 : WQ.saveRefusal) && void 0 !== QQ ? QQ : null
+             return null !== (MM = null === (rM = hM()) || void 0 === rM ? void 0 : rM.saveRefusal) && void 0 !== MM ? MM : null
```

#### 767. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7007` → after: `L7131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7131) · [Before (L7007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7007)

```diff
-             return null !== (QQ = null === (WQ = jQ()) || void 0 === WQ ? void 0 : WQ.save()) && void 0 !== QQ ? QQ : Promise.resolve(null)
+             return null !== (MM = null === (rM = hM()) || void 0 === rM ? void 0 : rM.save()) && void 0 !== MM ? MM : Promise.resolve(null)
```

#### 768. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7011` → after: `L7135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7135) · [Before (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7011)

```diff
-             return null !== (QQ = null === (WQ = rQ.currentViewer) || void 0 === WQ ? void 0 : WQ.fileHandle) && void 0 !== QQ ? QQ : null
+             return null !== (MM = null === (rM = mM.currentViewer) || void 0 === rM ? void 0 : rM.fileHandle) && void 0 !== MM ? MM : null
```

#### 769. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7021` → after: `L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7145) · [Before (L7021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7021)

```diff
-           if (QQ.phase === rQ.E.Activated) {
+           if (MM.phase === mM.F.Activated) {
```

#### 770. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7025` → after: `L7149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7149) · [Before (L7025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7025)

```diff
-               lobbyType: (0, lQ.s)(WQ.lobbyName),
+               lobbyType: (0, uM.w)(rM.lobbyName),
```

#### 771. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7029` → after: `L7153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7153) · [Before (L7029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7029)

```diff
-           } else QQ.phase !== rQ.E.Left && QQ.phase !== rQ.E.Closed || QQ.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
+           } else MM.phase !== mM.F.Left && MM.phase !== mM.F.Closed || MM.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
```

#### 772. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7035` → after: `L7159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7159) · [Before (L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7035)

```diff
-           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Hq.f)() === this.runtime && (0, Hq.o)(null), (0, Hq.e)() === this.freecam && (0, Hq.n)(null), (0, bq.e)(ls), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
+           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, NS.n)() === this.runtime && (0, NS.v)(null), (0, NS.j)() === this.freecam && (0, NS.s)(null), (0, oS.i)(NP), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
```

#### 773. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7042-L7043` → after: `L7166-L7167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7166-L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7166-L7167) · [Before (L7042-L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7042-L7043)

```diff
-         if (XQ.isStopped) throw new Error(vq.b.coreStopped.text);
-         if (QQ.byteLength > 67108864) throw new Error(vq.b.cantOpen.text);
+         if (iM.isStopped) throw new Error(fS.c.coreStopped.text);
+         if (MM.byteLength > 67108864) throw new Error(fS.c.cantOpen.text);
```

#### 774. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7048` → after: `L7172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7172) · [Before (L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7048)

```diff
-             return WQ.inPlayback || (0, ww.H)().leaveGame(null), WQ
+             return rM.inPlayback || (0, lO.I)().leaveGame(null), rM
```

#### 775. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7051` → after: `L7175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7175) · [Before (L7051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7051)

```diff
-           throw console.warn(`${Ds} the replay viewer didn't load`, qQ), new Error(vq.b.viewerLoadFailed.text)
+           throw console.warn(`${pP} the replay viewer didn't load`, SM), new Error(fS.c.viewerLoadFailed.text)
```

#### 776. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7053` → after: `L7177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7177) · [Before (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7053)

```diff
-         if (XQ.isStopped) throw new Error(vq.b.coreStopped.text);
+         if (iM.isStopped) throw new Error(fS.c.coreStopped.text);
```

#### 777. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7057` → after: `L7181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7181) · [Before (L7057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7057)

```diff
-     var As = XQ(2036);
+     var FP = iM(2067);
```

#### 778. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7065` → after: `L7189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7189) · [Before (L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7065)

```diff
-           aux: QQ.reset ? rQ.gc.ResetFirst : 0,
+           aux: MM.reset ? mM.$b.ResetFirst : 0,
```

#### 779. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7069` → after: `L7193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7193) · [Before (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7069)

```diff
-       QQ.queueOptions(XQ, wQ) && (WQ.reset && As.e.reset(), As.e.apply(WQ.changes))
+       MM.queueOptions(iM, OM) && (rM.reset && FP.d.reset(), FP.d.apply(rM.changes))
```

#### 780. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7142-L7146` → after: `L7266-L7270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7266-L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7266-L7270) · [Before (L7142-L7146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7142-L7146)

```diff
-     var Ss = XQ(42871),
-       ts = XQ(42878),
-       os = XQ(41164),
-       es = XQ(41202),
-       ns = XQ(3110);
+     var cP = iM(53661),
+       Mn = iM(53668),
+       rn = iM(42045),
+       On = iM(42090),
+       Sn = iM(3188);
```

#### 781. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7150` → after: `L7274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7274) · [Before (L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7150)

```diff
-         this.host = QQ, this.sets = new Map, this.table = [], this.generation = 0, this.zj = !1
+         this.host = MM, this.sets = new Map, this.table = [], this.generation = 0, this.dh = !1
```

#### 782. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7154` → after: `L7278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7278) · [Before (L7154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7154)

```diff
-           if (QQ.byteLength !== rQ.Cd) return null;
+           if (MM.byteLength !== mM.nd) return null;
```

#### 783. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7161` → after: `L7285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7285) · [Before (L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7161)

```diff
-         WQ && !this.zj && (WQ.release !== rQ.Fd && this.release(WQ.release), WQ.want !== rQ.Fd && this.want(WQ.want))
+         rM && !this.dh && (rM.release !== mM.pd && this.release(rM.release), rM.want !== mM.pd && this.want(rM.want))
```

#### 784. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7164` → after: `L7288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7288) · [Before (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7164)

```diff
-         if (!this.zj) {
+         if (!this.dh) {
```

#### 785. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7170-L7171` → after: `L7294-L7295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7294-L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7294-L7295) · [Before (L7170-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7170-L7171)

```diff
-         if (this.zj) return;
-         this.zj = !0, this.generation++, this.table = [];
+         if (this.dh) return;
+         this.dh = !0, this.generation++, this.table = [];
```

#### 786. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7177` → after: `L7301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7301) · [Before (L7177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7177)

```diff
-             this.host.BwQ(QQ)
+             this.host.SOM(MM)
```

#### 787. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7194` → after: `L7318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7318) · [Before (L7194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7194)

```diff
-         if (!XQ || 1 !== XQ.urls.length && XQ.urls.length !== YX.dc.CubeFaces) return this.host.sendReady(Os(QQ)), void this.host.onLoadFailed(QQ, "", new Error(`no image set ${QQ}`));
+         if (!iM || 1 !== iM.urls.length && iM.urls.length !== nO.dc.CubeFaces) return this.host.sendReady(Qn(MM)), void this.host.onLoadFailed(MM, "", new Error(`no image set ${MM}`));
```

#### 788. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7212` → after: `L7336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7336) · [Before (L7212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7212)

```diff
-           if (!FQ || !XQ.wanted) return this.zj ? void this.releaseAfterDispose(sQ.map(Ns)) : (this.releaseAll(sQ.map(Ns)), void(FQ && this.sets.delete(QQ)));
+           if (!nM || !iM.wanted) return this.dh ? void this.releaseAfterDispose(PM.map(Pn)) : (this.releaseAll(PM.map(Pn)), void(nM && this.sets.delete(MM)));
```

#### 789. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7222-L7223` → after: `L7346-L7347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7346-L7347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7346-L7347) · [Before (L7222-L7223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7222-L7223)

```diff
-           const XQ = wQ.map((QQ => `${QQ.width}x${QQ.height}`));
-           return void this.host.onLoadFailed(QQ, WQ.urls[0], new Error(`set ${QQ}'s images can't make its texture: ${XQ.join(", ")}`))
+           const iM = OM.map((MM => `${MM.width}x${MM.height}`));
+           return void this.host.onLoadFailed(MM, rM.urls[0], new Error(`set ${MM}'s images can't make its texture: ${iM.join(", ")}`))
```

#### 790. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7239` → after: `L7363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7363) · [Before (L7239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7239)

```diff
-         for (const WQ of QQ) this.host.BwQ(WQ)
+         for (const rM of MM) this.host.SOM(rM)
```

#### 791. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7243` → after: `L7367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7367) · [Before (L7243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7243)

```diff
-           this.host.BwQ(WQ)
+           this.host.SOM(rM)
```

#### 792. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7269` → after: `L7393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7393) · [Before (L7269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7269)

```diff
-         XQ = await (0, ns.K)(QQ)
+         iM = await (0, Sn.F)(MM)
```

#### 793. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7271` → after: `L7395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7395) · [Before (L7271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7271)

```diff
-         throw new os.e("fetch", QQ, {
+         throw new rn.d("fetch", MM, {
```

#### 794. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7304` → after: `L7428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7428) · [Before (L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7304)

```diff
-         throw new os.e("decode", QQ, {
+         throw new rn.d("decode", MM, {
```

#### 795. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7309` → after: `L7433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7433) · [Before (L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7309)

```diff
-         id: (0, os.l)(qQ),
+         id: (0, rn.n)(SM),
```

#### 796. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7314-L7318` → after: `L7438-L7442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7438-L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7438-L7442) · [Before (L7314-L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7314-L7318)

```diff
-     var Ms = XQ(2226),
-       QF = XQ(34315),
-       WF = XQ(39502);
-     const XF = Ms.d.length,
-       wF = new Set([...Ms.d, "earth"]);
+     var mn = iM(2263),
+       Hn = iM(34611),
+       hn = iM(40305);
+     const Jn = mn.e.length,
+       dn = new Set([...mn.e, "earth"]);
```

#### 797. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7333` → after: `L7457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7457) · [Before (L7333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7333)

```diff
-               urls: (0, WF.f)(qQ),
+               urls: (0, hn.g)(SM),
```

#### 798. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7343` → after: `L7467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7467) · [Before (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7343)

```diff
-       Ms.d.forEach(((WQ, XQ) => {
+       mn.e.forEach(((rM, iM) => {
```

#### 799. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7345` → after: `L7469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7469) · [Before (L7345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7345)

```diff
-         wQ(XQ, null !== (qQ = TF(QQ[WQ])) && void 0 !== qQ ? qQ : QF.m[WQ])
+         OM(iM, null !== (SM = En(MM[rM])) && void 0 !== SM ? SM : Hn.j[rM])
```

#### 800. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7356` → after: `L7480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7480) · [Before (L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7356)

```diff
-         WQ.length > 255 ? sQ.push(`Ignoring texture pack skybox ${IQ}, whose name is over 255 bytes`) : zQ.length === YX.dc.MaxAdded ? sQ.push(`Ignoring texture pack skybox ${IQ}, past the ${YX.dc.MaxAdded} skies a pack can add`) : (zQ.push(WQ), wQ(YX.dc.AddedId, QQ))
+         rM.length > 255 ? PM.push(`Ignoring texture pack skybox ${HM}, whose name is over 255 bytes`) : aM.length === nO.dc.MaxAdded ? PM.push(`Ignoring texture pack skybox ${HM}, past the ${nO.dc.MaxAdded} skies a pack can add`) : (aM.push(rM), OM(nO.dc.AddedId, MM))
```

#### 801. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7360` → after: `L7484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7484) · [Before (L7360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7360)

```diff
-         urls: QF.g.map((QQ => QF.h + QQ)),
+         urls: Hn.d.map((MM => Hn.g + MM)),
```

#### 802. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7363` → after: `L7487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7487) · [Before (L7363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7363)

```diff
-         urls: [QF.l],
+         urls: [Hn.h],
```

#### 803. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7366` → after: `L7490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7490) · [Before (L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7366)

```diff
-         urls: [QF.d],
+         urls: [Hn.c],
```

#### 804. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7393` → after: `L7517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7517) · [Before (L7393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7393)

```diff
-             "number" === typeof FQ && Number.isFinite(FQ) && (WQ.setFloat32(XQ + YX.r.CameraOffsetAt + 4 * TQ, FQ, !0), qQ |= sQ)
+             "number" === typeof nM && Number.isFinite(nM) && (rM.setFloat32(iM + nO.t.CameraOffsetAt + 4 * jM, nM, !0), SM |= PM)
```

#### 805. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7399` → after: `L7523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7523) · [Before (L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7399)

```diff
-           WQ.setUint32(XQ + YX.r.PresentAt, qQ, !0), WQ.setUint8(XQ + YX.r.FlagsAt, TQ)
+           rM.setUint32(iM + nO.t.PresentAt, SM, !0), rM.setUint8(iM + nO.t.FlagsAt, jM)
```

#### 806. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7418` → after: `L7542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7542) · [Before (L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7418)

```diff
-       })) ? QQ : null
+       })) ? MM : null
```

#### 807. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7421-L7428` → after: `L7545-L7552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7545-L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7545-L7552) · [Before (L7421-L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7421-L7428)

```diff
-         ["inclination", YX.r.Inclination],
-         ["turbidity", YX.r.Turbidity],
-         ["luminance", YX.r.Luminance],
-         ["rayleigh", YX.r.Rayleigh],
-         ["mieCoefficient", YX.r.MieCoefficient],
-         ["mieDirectionalG", YX.r.MieDirectionalG],
-         ["distance", YX.r.Distance],
-         ["azimuth", YX.r.Azimuth]
+         ["inclination", nO.t.Inclination],
+         ["turbidity", nO.t.Turbidity],
+         ["luminance", nO.t.Luminance],
+         ["rayleigh", nO.t.Rayleigh],
+         ["mieCoefficient", nO.t.MieCoefficient],
+         ["mieDirectionalG", nO.t.MieDirectionalG],
+         ["distance", nO.t.Distance],
+         ["azimuth", nO.t.Azimuth]
```

#### 808. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7431-L7433` → after: `L7555-L7557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7555-L7557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7555-L7557) · [Before (L7431-L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7431-L7433)

```diff
-         ["sunPosition", YX.r.SunPosition, YX.r.SunPositionAt],
-         ["up", YX.r.Up, YX.r.UpAt],
-         ["vertexTint", YX.r.VertexTint, YX.r.VertexTintAt]
+         ["sunPosition", nO.t.SunPosition, nO.t.SunPositionAt],
+         ["up", nO.t.Up, nO.t.UpAt],
+         ["vertexTint", nO.t.VertexTint, nO.t.VertexTintAt]
```

#### 809. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7436-L7438` → after: `L7560-L7562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7560-L7562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7560-L7562) · [Before (L7436-L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7436-L7438)

```diff
-         ["xCameraOffset", YX.r.CameraOffsetX],
-         ["yCameraOffset", YX.r.CameraOffsetY],
-         ["zCameraOffset", YX.r.CameraOffsetZ]
+         ["xCameraOffset", nO.t.CameraOffsetX],
+         ["yCameraOffset", nO.t.CameraOffsetY],
+         ["zCameraOffset", nO.t.CameraOffsetZ]
```

#### 810. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7441-L7443` → after: `L7565-L7567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7565-L7567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7565-L7567) · [Before (L7441-L7443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7441-L7443)

```diff
-         ["useSunPosition", YX.r.UseSunPosition],
-         ["dithering", YX.r.Dithering],
-         ["infiniteDistance", YX.r.InfiniteDistance]
+         ["useSunPosition", nO.t.UseSunPosition],
+         ["dithering", nO.t.Dithering],
+         ["infiniteDistance", nO.t.InfiniteDistance]
```

#### 811. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7473` → after: `L7597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7597) · [Before (L7473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7473)

```diff
-                       return "string" !== typeof QQ ? null : null !== (WQ = null === (XQ = IF.exec(QQ)) || void 0 === XQ || null === (wQ = XQ.groups) || void 0 === wQ ? void 0 : wQ.base64) && void 0 !== WQ ? WQ : null
+                       return "string" !== typeof MM ? null : null !== (rM = null === (iM = gn.exec(MM)) || void 0 === iM || null === (OM = iM.groups) || void 0 === OM ? void 0 : OM.base64) && void 0 !== rM ? rM : null
```

#### 812. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7477` → after: `L7601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7601) · [Before (L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7477)

```diff
-                 }(wQ) || (XQ(`Ignoring texture pack skybox ${WQ}, whose faces are not all data URLs`, null), !1)
+                 }(OM) || (iM(`Ignoring texture pack skybox ${rM}, whose faces are not all data URLs`, null), !1)
```

#### 813. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7490` → after: `L7614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7614) · [Before (L7490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7490)

```diff
-         this.host = QQ, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.zj = !1, this.wait = null !== (WQ = QQ.wait) && void 0 !== WQ ? WQ : (QQ, WQ) => {
+         this.host = MM, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.dh = !1, this.wait = null !== (rM = MM.wait) && void 0 !== rM ? rM : (MM, rM) => {
```

#### 814. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7493-L7494` → after: `L7617-L7618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7617-L7618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7617-L7618) · [Before (L7493-L7494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7493-L7494)

```diff
-           loadImage: null !== (XQ = QQ.loadImage) && void 0 !== XQ ? XQ : ms,
-           BwQ: null !== (wQ = QQ.BwQ) && void 0 !== wQ ? wQ : os.p,
+           loadImage: null !== (iM = MM.loadImage) && void 0 !== iM ? iM : Ln,
+           SOM: null !== (OM = MM.SOM) && void 0 !== OM ? OM : rn.o,
```

#### 815. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7502` → after: `L7626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7626) · [Before (L7502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7502)

```diff
-             QQ.warn(`sky image set ${WQ} (${XQ}) didn't load: the last sky stays`, wQ)
+             MM.warn(`sky image set ${rM} (${iM}) didn't load: the last sky stays`, OM)
```

#### 816. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7508` → after: `L7632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7632) · [Before (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7508)

```diff
-         this.wait(es.c, (() => {
+         this.wait(On.d, (() => {
```

#### 817. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7511` → after: `L7635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7635) · [Before (L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7511)

```diff
-           this.write(null !== QQ && void 0 !== QQ ? QQ : {})
+           this.write(null !== MM && void 0 !== MM ? MM : {})
```

#### 818. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7524` → after: `L7648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7648) · [Before (L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7524)

```diff
-         this.zj = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
+         this.dh = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
```

#### 819. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7527` → after: `L7651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7651) · [Before (L7527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7527)

```diff
-         if (this.zj) return;
+         if (this.dh) return;
```

#### 820. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7543-L7556` → after: `L7667-L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7667-L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7667-L7682) · [Before (L7543-L7556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7543-L7556)

```diff
-     var jF = XQ(3021),
-       BF = XQ(3243),
-       yF = XQ(325),
-       VF = XQ(218),
-       DF = XQ(3029),
-       pF = XQ(3034),
-       GF = XQ(299),
-       UF = XQ(307),
-       bF = XQ(3139),
-       vF = XQ(3160),
-       dF = XQ(3173),
-       HF = XQ(129),
-       aF = XQ(367),
-       lF = XQ(41039);
+     var un = iM(3096),
+       Rn = iM(3349),
+       pn = iM(267),
+       Wn = iM(166),
+       sn = iM(3100),
+       Dn = iM(3109),
+       kn = iM(236),
+       Zn = iM(243),
+       fn = iM(3227),
+       Yn = iM(3245),
+       Nn = iM(3251),
+       An = iM(103),
+       xn = iM(3317),
+       vn = iM(2602),
+       Fn = iM(308),
+       Bn = iM(41922);
```

#### 821. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7559-L7560` → after: `L7685-L7686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7685-L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7685-L7686) · [Before (L7559-L7560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7559-L7560)

```diff
-         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, eq.j)(Dw.H, (QQ => {
-           this.onReply((0, oq.d)(Dw.H, QQ), performance.now())
+         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Sj.h)(DO.M, (MM => {
+           this.onReply((0, Oj.d)(DO.M, MM), performance.now())
```

#### 822. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7564` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7690) · [Before (L7564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7564)

```diff
-         null === this.id ? this.id = QQ : QQ !== this.id && (this.id = QQ, this.sentMs = document.hidden ? null : WQ)
+         null === this.id ? this.id = MM : MM !== this.id && (this.id = MM, this.sentMs = document.hidden ? null : rM)
```

#### 823. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7631-L7633` → after: `L7757-L7759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7757-L7759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7757-L7759) · [Before (L7631-L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7631-L7633)

```diff
-         const XQ = QQ.headerWord(YX.F.Pacing),
-           wQ = QQ.headerWord(YX.F.PacingLagUs),
-           qQ = (XQ >>> YX.Z.LagsShift) - (this.word >>> YX.Z.LagsShift) & YX.Z.CountMask,
+         const iM = MM.headerWord(nO.K.Pacing),
+           OM = MM.headerWord(nO.K.PacingLagUs),
+           SM = (iM >>> nO._.LagsShift) - (this.word >>> nO._.LagsShift) & nO._.CountMask,
```

#### 824. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7636` → after: `L7762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7762) · [Before (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7636)

```diff
-         this.word = XQ, this.lagUs = wQ, this.primed = !0, zQ && WQ && qQ > 0 && 0 !== (XQ & YX.Z.Defaulted) && this.lags.add(TQ, qQ)
+         this.word = iM, this.lagUs = OM, this.primed = !0, aM && rM && SM > 0 && 0 !== (iM & nO._.Defaulted) && this.lags.add(jM, SM)
```

#### 825. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7645-L7651` → after: `L7771-L7777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7771-L7777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7771-L7777) · [Before (L7645-L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7645-L7651)

```diff
-     var EF = XQ(3130),
-       CF = XQ(34448),
-       uF = XQ(3146),
-       LF = XQ(41102),
-       kF = XQ(34443),
-       fF = XQ(3041),
-       SF = XQ(3152);
+     var Vn = iM(3219),
+       cn = iM(34962),
+       MQ = iM(3230),
+       rQ = iM(41984),
+       iQ = iM(34959),
+       OQ = iM(3118),
+       SQ = iM(3235);
```

#### 826. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7680` → after: `L7806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7806) · [Before (L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7680)

```diff
-         this.shell = QQ, this.tracker = new pF.d, this.gpu = new iF, this.pacing = new RF, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
+         this.shell = MM, this.tracker = new Dn.e, this.gpu = new In, this.pacing = new Tn, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
```

#### 827. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7686` → after: `L7812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7812) · [Before (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7686)

```diff
-         }, (0, CF.b)(QQ.backend, QQ.canvas, QQ.adapterVendor), this.tracker.start((() => !QQ.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, fF.d)("wasm", (() => {
+         }, (0, cn.c)(MM.backend, MM.canvas, MM.adapterVendor), this.tracker.start((() => !MM.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, OQ.c)("wasm", (() => {
```

#### 828. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7690-L7691` → after: `L7816-L7817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7816-L7817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7816-L7817) · [Before (L7690-L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7690-L7691)

```diff
-           } = (0, LF.f)();
-           return `${QQ.backend}, quality steps aim at up to ${SF.c.target.maxFps} fps, pixel n ${WQ}, msaa ${XQ}`
+           } = (0, rQ.g)();
+           return `${MM.backend}, quality steps aim at up to ${SQ.c.target.maxFps} fps, pixel n ${rM}, msaa ${iM}`
```

#### 829. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7705` → after: `L7831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7831) · [Before (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7705)

```diff
-         this.ping.onFrame(QQ.headerWord(YX.F.PingSent), WQ), this.sendsStartMs = WQ, this.sendsEndMs = XQ
+         this.ping.onFrame(MM.headerWord(nO.K.PingSent), rM), this.sendsStartMs = rM, this.sendsEndMs = iM
```

#### 830. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7709` → after: `L7835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7835) · [Before (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7709)

```diff
-         this.ping.onFrame(QQ.headerWord(YX.F.PingSent), XQ);
+         this.ping.onFrame(MM.headerWord(nO.K.PingSent), iM);
```

#### 831. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7712` → after: `L7838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7838) · [Before (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7712)

```diff
-         const zQ = QQ.headerWord(YX.F.TickUs) / 1e3 + (0, ww.I)();
+         const aM = MM.headerWord(nO.K.TickUs) / 1e3 + (0, lO.K)();
```

#### 832. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7714` → after: `L7840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7840) · [Before (L7714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7714)

```diff
-         (TQ.tV(zQ), null === (qQ = this.frameDebug) || void 0 === qQ || qQ.wasmFrame(QQ, WQ, XQ, wQ, TQ.isSampling(), zQ), null !== this.game) && (null === (sQ = this.frameDebug) || void 0 === sQ || sQ.inGame());
+         (jM.kE(aM), null === (SM = this.frameDebug) || void 0 === SM || SM.wasmFrame(MM, rM, iM, OM, jM.isSampling(), aM), null !== this.game) && (null === (PM = this.frameDebug) || void 0 === PM || PM.inGame());
```

#### 833. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7719` → after: `L7845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7845) · [Before (L7719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7719)

```diff
-         this.gpu.onFrame(QQ.headerWord(YX.F.GpuSampled), QQ.headerWord(YX.F.GpuTimed), QQ.headerWord(YX.F.GpuFrameUs), TQ.isSampling()) && TQ.onGpuSampleStarted(), TQ.onFrameCpu(PQ + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(WQ)
+         this.gpu.onFrame(MM.headerWord(nO.K.GpuSampled), MM.headerWord(nO.K.GpuTimed), MM.headerWord(nO.K.GpuFrameUs), jM.isSampling()) && jM.onGpuSampleStarted(), jM.onFrameCpu(QM + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(rM)
```

#### 834. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7745` → after: `L7871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7871) · [Before (L7745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7745)

```diff
-         if (!(WQ < dF.c)) {
+         if (!(rM < Nn.b)) {
```

#### 835. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7764` → after: `L7890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7890) · [Before (L7764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7764)

```diff
-           PQ = FQ ? zQ : (0, DF.f)(zQ),
+           QM = nM ? aM : (0, sn.h)(aM),
```

#### 836. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7768` → after: `L7894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7894) · [Before (L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7768)

```diff
-           IQ = (0, vF.v)((0, vF.u)(JQ), this.unsentPage),
+           HM = (0, Yn.x)((0, Yn.v)(LM), this.unsentPage),
```

#### 837. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7775` → after: `L7901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7901) · [Before (L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7775)

```diff
-               yQ = (0, bF.h)({
+               dM = (0, fn.g)({
```

#### 838. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7783-L7785` → after: `L7909-L7911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7909-L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7909-L7911) · [Before (L7783-L7785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7783-L7785)

```diff
-               if ((0, yF.B)(DQ)) pQ = (0, vF.e)(DQ);
-               else if ((0, vF.i)(DQ)) pQ = FQ[DQ];
-               else if ((0, bF.l)(DQ)) pQ = yQ[DQ];
+               if ((0, pn.u)(lM)) EM = (0, Yn.d)(lM);
+               else if ((0, Yn.j)(lM)) EM = nM[lM];
+               else if ((0, fn.j)(lM)) EM = dM[lM];
```

#### 839. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7790` → after: `L7916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7916) · [Before (L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7790)

```diff
-                 case "HF":
+                 case "aP":
```

#### 840. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7793-L7794` → after: `L7919-L7920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7919-L7920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7919-L7920) · [Before (L7793-L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7793-L7794)

```diff
-                 case "cF":
-                   pQ = (0, uF.C)((0, LF.f)().n);
+                 case "LP":
+                   EM = (0, MQ.F)((0, rQ.g)().n);
```

#### 841. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7796` → after: `L7922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7922) · [Before (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7796)

```diff
-                 case "AF":
+                 case "mP":
```

#### 842. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7799` → after: `L7925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7925) · [Before (L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7799)

```diff
-                 case "RF":
+                 case "HP":
```

#### 843. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7802` → after: `L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7928) · [Before (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7802)

```diff
-                 case "EF":
+                 case "hP":
```

#### 844. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7805` → after: `L7931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7931) · [Before (L7805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7805)

```diff
-                 case "CF":
+                 case "JP":
```

#### 845. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7808` → after: `L7934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7934) · [Before (L7808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7808)

```diff
-                 case "uF":
+                 case "dP":
```

#### 846. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7811` → after: `L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7937) · [Before (L7811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7811)

```diff
-                 case "LF":
+                 case "yP":
```

#### 847. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7814` → after: `L7940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7940) · [Before (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7814)

```diff
-                 case "kF":
+                 case "lP":
```

#### 848. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7817` → after: `L7943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7943) · [Before (L7817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7817)

```diff
-                 case "fF":
+                 case "EP":
```

#### 849. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7820` → after: `L7946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7946) · [Before (L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7820)

```diff
-                 case "SF":
+                 case "UP":
```

#### 850. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7823` → after: `L7949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7949) · [Before (L7823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7823)

```diff
-                 case "tF":
+                 case "GP":
```

#### 851. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7826` → after: `L7952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7952) · [Before (L7826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7826)

```diff
-                 case "oF":
+                 case "CP":
```

#### 852. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7829` → after: `L7955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7955) · [Before (L7829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7829)

```diff
-                 case "NF":
+                 case "tP":
```

#### 853. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7832` → after: `L7958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7958) · [Before (L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7832)

```diff
-                 case "ZF":
+                 case "gP":
```

#### 854. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7835` → after: `L7961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7961) · [Before (L7835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7835)

```diff
-                 case "eF":
+                 case "eP":
```

#### 855. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7838` → after: `L7964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7964) · [Before (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7838)

```diff
-                 case "nF":
+                 case "bP":
```

#### 856. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7841` → after: `L7967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7967) · [Before (L7841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7841)

```diff
-                 case "YF":
+                 case "wP":
```

#### 857. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7844` → after: `L7970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7970) · [Before (L7844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7844)

```diff
-                 case "OF":
+                 case "uP":
```

#### 858. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7847` → after: `L7973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7973) · [Before (L7847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7847)

```diff
-                 case "KF":
+                 case "RP":
```

#### 859. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7850` → after: `L7976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7976) · [Before (L7850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7850)

```diff
-                 case "mF":
+                 case "pP":
```

#### 860. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7853` → after: `L7979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7979) · [Before (L7853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7853)

```diff
-                 case "MF":
+                 case "WP":
```

#### 861. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7856-L7857` → after: `L7982-L7983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7982-L7983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7982-L7983) · [Before (L7856-L7857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7856-L7857)

```diff
-                 case "JP":
-                   pQ = (0, jF.h)(zQ);
+                 case "FP":
+                   EM = (0, un.j)(aM);
```

#### 862. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7859` → after: `L7985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7985) · [Before (L7859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7859)

```diff
-                 case "iF":
+                 case "zP":
```

#### 863. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7870-L7875` → after: `L7989-L7998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7989-L7998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7989-L7998) · [Before (L7870-L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7870-L7875)

```diff
-                 case "FP":
-                 case "PP":
-                 case "gP":
-                 case "rP":
-                 case "IP":
-                 case "jP":
+                 case "DP":
+                 case "kP":
+                 case "ZP":
+                 case "oP":
+                 case "fP":
+                 case "YP":
+                 case "NP":
+                 case "AP":
+                 case "xP":
+                 case "vP":
```

#### 864. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7879` → after: `L8005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8005) · [Before (L7879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7879)

```diff
-                 case "iP":
+                 case "Hn":
```

#### 865. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7882` → after: `L8008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8008) · [Before (L7882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7882)

```diff
-                 case "cP":
+                 case "hn":
```

#### 866. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7885-L7886` → after: `L8011-L8012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8011-L8012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8011-L8012) · [Before (L7885-L7886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7885-L7886)

```diff
-                 case "AP":
-                   pQ = lF.e[QQ.backend];
+                 case "Jn":
+                   EM = Bn.b[MM.backend];
```

#### 867. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7888` → after: `L8014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8014) · [Before (L7888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7888)

```diff
-                 case "RP":
+                 case "dn":
```

#### 868. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7891` → after: `L8017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8017) · [Before (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7891)

```diff
-                 case "EP":
+                 case "yn":
```

#### 869. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7894` → after: `L8020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8020) · [Before (L7894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7894)

```diff
-                 case "CP":
+                 case "En":
```

#### 870. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7897-L7898` → after: `L8023-L8024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8023-L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8023-L8024) · [Before (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7897-L7898)

```diff
-                 case "uP":
-                   pQ = null !== (PQ = wQ.b.get("gameEntrySource")) && void 0 !== PQ ? PQ : VF.g;
+                 case "Un":
+                   EM = null !== (QM = OM.d.get("gameEntrySource")) && void 0 !== QM ? QM : Wn.e;
```

#### 871. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7900-L7901` → after: `L8026-L8027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8026-L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8026-L8027) · [Before (L7900-L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7900-L7901)

```diff
-                 case "LP":
-                   pQ = null !== (gQ = WQ.frameLimiter) && void 0 !== gQ ? gQ : VF.g;
+                 case "Gn":
+                   EM = null !== (zM = rM.frameLimiter) && void 0 !== zM ? zM : Wn.e;
```

#### 872. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7903-L7904` → after: `L8029-L8030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8029-L8030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8029-L8030) · [Before (L7903-L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7903-L7904)

```diff
-                 case "kP":
-                   pQ = (0, GF.g)();
+                 case "Cn":
+                   EM = (0, kn.j)();
```

#### 873. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7906-L7907` → after: `L8032-L8033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8032-L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8032-L8033) · [Before (L7906-L7907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7906-L7907)

```diff
-                 case "fP":
-                   pQ = null !== (JQ = (0, UF.b)()) && void 0 !== JQ ? JQ : VF.g;
+                 case "bn":
+                   EM = null !== (LM = (0, Zn.e)()) && void 0 !== LM ? LM : Wn.e;
```

#### 874. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7909` → after: `L8035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8035) · [Before (L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7909)

```diff
-                 case "SP":
+                 case "wn":
```

#### 875. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7912-L7913` → after: `L8038-L8039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8038-L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8038-L8039) · [Before (L7912-L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7912-L7913)

```diff
-                 case "tP":
-                   pQ = (0, BF.g)(-(new Date).getTimezoneOffset());
+                 case "tn":
+                   EM = (0, Rn.j)(-(new Date).getTimezoneOffset());
```

#### 876. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7915-L7916` → after: `L8041-L8042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8041-L8042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8041-L8042) · [Before (L7915-L7916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7915-L7916)

```diff
-                 case "nP":
-                   pQ = null !== (rQ = QQ.fallbackReason) && void 0 !== rQ ? rQ : VF.g;
+                 case "sn":
+                   EM = null !== (mM = MM.fallbackReason) && void 0 !== mM ? mM : Wn.e;
```

#### 877. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7918` → after: `L8044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8044) · [Before (L7918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7918)

```diff
-                 case "NP":
+                 case "Zn":
```

#### 878. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7921` → after: `L8047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8047) · [Before (L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7921)

```diff
-                 case "ZP":
+                 case "fn":
```

#### 879. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7924` → after: `L8050-L8059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8050-L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8050-L8059) · [Before (L7924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7924)

```diff
-                 case "eP":
+                 case "un":
+                   EM = (0, xn.c)();
+                   break;
+                 case "Rn":
+                   EM = (0, vn.d)().replayState;
+                   break;
+                 case "pn":
+                   EM = (0, vn.d)().replaySelection;
+                   break;
+                 case "Wn":
```

#### 880. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7927` → after: `L8062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8062) · [Before (L7927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7927)

```diff
-                 case "OP":
+                 case "Yn":
```

#### 881. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7930` → after: `L8065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8065) · [Before (L7930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7930)

```diff
-                 case "KP": {
+                 case "Nn": {
```

#### 882. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7935` → after: `L8070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8070) · [Before (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7935)

```diff
-                 case "mP":
+                 case "xn":
```

#### 883. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7938-L7939` → after: `L8073-L8074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8073-L8074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8073-L8074) · [Before (L7938-L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7938-L7939)

```diff
-                 case "Tg":
-                   pQ = (0, vF.l)();
+                 case "Tn":
+                   EM = (0, Yn.m)();
```

#### 884. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7941-L7943` → after: `L8076-L8078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8076-L8078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8076-L8078) · [Before (L7941-L7943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7941-L7943)

```diff
-                 case "oP": {
-                   const WQ = QQ.HB();
-                   pQ = null === WQ ? VF.g : String(WQ);
+                 case "gn": {
+                   const rM = MM.DJ();
+                   EM = null === rM ? Wn.e : String(rM);
```

#### 885. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7946-L7948` → after: `L8081-L8083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8081-L8083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8081-L8083) · [Before (L7946-L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7946-L7948)

```diff
-                 case "xP":
-                 case "YP":
-                   pQ = VF.g;
+                 case "Dn":
+                 case "kn":
+                   EM = Wn.e;
```

#### 886. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7951` → after: `L8086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8086) · [Before (L7951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7951)

```diff
-                   throw new Error(`Unhandled field name: ${DQ}`)
+                   throw new Error(`Unhandled field name: ${lM}`)
```

#### 887. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7953` → after: `L8088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8088) · [Before (L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7953)

```diff
-               if (void 0 === pQ) throw new Error(`Metric ${DQ} has no value`);
+               if (void 0 === EM) throw new Error(`Metric ${lM} has no value`);
```

#### 888. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7965-L7969` → after: `L8100-L8104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8100-L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8100-L8104) · [Before (L7965-L7969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7965-L7969)

```diff
-             return (0, nW.c)(), QQ(jQ.s.Send, WQ, XQ)
-           }(this.shell.writeCmd, rQ.Ad, function(QQ) {
-             const WQ = (0, uQ.e)((0, NW.e)(QQ)),
-               XQ = new Uint8Array(jQ.le.BYTES + WQ.length);
-             return new DataView(XQ.buffer).setUint16(0, NW.d.AnalyticsUpdate, !0), XQ.set(WQ, jQ.le.BYTES), XQ
+             return (0, Oi.e)(), MM(hM.n.Send, rM, iM)
+           }(this.shell.writeCmd, mM.ld, function(MM) {
+             const rM = (0, fM.f)((0, ai.h)(MM)),
+               iM = new Uint8Array(hM.Qd.BYTES + rM.length);
+             return new DataView(iM.buffer).setUint16(0, ai.d.AnalyticsUpdate, !0), iM.set(rM, hM.Qd.BYTES), iM
```

#### 889. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7971` → after: `L8106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8106) · [Before (L7971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7971)

```diff
-         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, jF.f), (0, vF.q)(BQ, "wasm", JQ)
+         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, un.g), (0, Yn.s)(JM, "wasm", LM)
```

#### 890. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7974` → after: `L8109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8109) · [Before (L7974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7974)

```diff
-     var nF = XQ(39887);
+     var nQ = iM(40731);
```

#### 891. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7978-L7980` → after: `L8113-L8115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8113-L8115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8113-L8115) · [Before (L7978-L7980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7978-L7980)

```diff
-       return (0, nF.b)(((QQ, XQ, wQ) => WQ.ez(QQ, XQ, wQ)), ((WQ, XQ, qQ) => {
-         const TQ = `${WQ},${XQ},${qQ}`;
-         return wQ.has(TQ) || wQ.set(TQ, (0, kW.b)(QQ, WQ, XQ, qQ)), wQ.get(TQ)
+       return (0, nQ.e)(((MM, iM, OM) => rM.jP(MM, iM, OM)), ((rM, iM, SM) => {
+         const jM = `${rM},${iM},${SM}`;
+         return OM.has(jM) || OM.set(jM, (0, Xr.e)(MM, rM, iM, SM)), OM.get(jM)
```

#### 892. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7983-L7984` → after: `L8118-L8119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8118-L8119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8118-L8119) · [Before (L7983-L7984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7983-L7984)

```diff
-     var YF = XQ(39893),
-       NF = XQ(41094);
+     var zQ = iM(40739),
+       LQ = iM(41975);
```

#### 893. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7987-L7988` → after: `L8122-L8123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8122-L8123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8122-L8123) · [Before (L7987-L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7987-L7988)

```diff
-       const WQ = null !== QQ && 0 !== (jQ.x.playerFlags(QQ.api.apiView, 0) & jQ.ae.CursorAim);
-       WQ !== (0, NF.l)() && (0, NF.H)(WQ, null !== QQ)
+       const rM = null !== MM && 0 !== (hM.v.playerFlags(MM.api.apiView, 0) & hM.yd.CursorAim);
+       rM !== (0, LQ.n)() && (0, LQ.F)(rM, null !== MM)
```

#### 894. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7992` → after: `L8127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8127) · [Before (L7992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7992)

```diff
-       return (0, Vw.c)(Dw.B, QQ)
+       return (0, sO.d)(DO.D, MM)
```

#### 895. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7994-L7995` → after: `L8129-L8130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8129-L8130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8129-L8130) · [Before (L7994-L7995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7994-L7995)

```diff
-     var KF = XQ(41238);
-     const mF = new TQ.c((QQ => XQ(42886)(`./${QQ}/${QQ}Client`)));
+     var hQ = iM(42135);
+     const JQ = new jM.h((MM => iM(53677)(`./${MM}/${MM}Client`)));
```

#### 896. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7999` → after: `L8134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8134) · [Before (L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7999)

```diff
-       MF ??= XQ.e(28).then((() => XQ(39421))).then((QQ => {
+       dQ ??= iM.e(32).then((() => iM(40209))).then((MM => {
```

#### 897. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8026` → after: `L8161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8161) · [Before (L8026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8026)

```diff
-       }(), WQ.audio.prepare();
+       }();
```

#### 898. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8032` → after: `L8167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8167) · [Before (L8032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8032)

```diff
-         return QQ.crash(Gq.D, rQ), null
+         return MM.crash(kS.F, mM), null
```

#### 899. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8045` → after: `L8180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8180) · [Before (L8045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8045)

```diff
-       (0, ww.y)();
+       (0, lO.B)();
```

#### 900. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8071` → after: `L8206-L8207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8206-L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8206-L8207) · [Before (L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8071)

```diff
-               QQ >= 0 && WQ.push(DW[QQ])
+               if (null !== MM)
+                 for (let iM = MM[0]; iM < MM[0] + MM[1]; iM++) rM.push(iM)
```

#### 901. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8077-L8078` → after: `L8213-L8214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8213-L8214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8213-L8214) · [Before (L8077-L8078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8077-L8078)

```diff
-           TP(qQ.m), TP(qq), TP((() => {
-             wQ.b.set({
+           CQ(SM.n), CQ(lS), CQ((() => {
+             OM.d.set({
```

#### 902. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8100-L8102` → after: `L8236-L8238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8236-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8236-L8238) · [Before (L8100-L8102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8100-L8102)

```diff
-           (0, zQ.o)("userContextUpdated", WQ)
-         }(JQ), wP || (wP = !0, (0, zQ.o)("appManagerUpdated|openInGameMenuName", (QQ => {
-           !QQ && (0, PQ.u)().includes(PQ.e) && (0, PQ.y)(PQ.e)
+           (0, aM.j)("userContextUpdated", rM)
+         }(LM), UQ || (UQ = !0, (0, aM.j)("appManagerUpdated|openInGameMenuName", (MM => {
+           !MM && (0, QM.u)().includes(QM.e) && (0, QM.v)(QM.e)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413)

#### 1. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L1-L2)

```diff
- export const id = 60;
- export const ids = [60];
+ export const id = 69;
+ export const ids = [69];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L4)

```diff
-   40850: (QQ, WQ, XQ) => {
+   41706: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L6-L7)

```diff
-       d: () => qQ,
-       e: () => gQ
+       c: () => SM,
+       f: () => zM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L14)

```diff
-       if (WQ.at !== QQ.length) throw new Error(`msgpack: ${QQ.length-WQ.at} bytes after the value`);
+       if (rM.at !== MM.length) throw new Error(`msgpack: ${MM.length-rM.at} bytes after the value`);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L92)

```diff
-             throw new Error(`msgpack: unknown byte 0x${QQ.toString(16)} at ${this.at-1}`)
+             throw new Error(`msgpack: unknown byte 0x${MM.toString(16)} at ${this.at-1}`)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L97)

```diff
-         if (WQ + QQ > this.bytes.length) throw new Error(`msgpack: ${QQ} bytes past the end at ${WQ}`);
+         if (rM + MM > this.bytes.length) throw new Error(`msgpack: ${MM} bytes past the end at ${rM}`);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L169)

```diff
-           throw new Error(`msgpack: ext type ${WQ} of ${QQ} bytes`)
+           throw new Error(`msgpack: ext type ${rM} of ${MM} bytes`)
```
