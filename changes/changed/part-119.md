# Changed — Bundle Modifications Report (Part 119 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `119 / 126` (**416** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 118](part-118.md) · [Part 120 →](part-120.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmPlay.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmPlay.js` (1092 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f)

#### 951. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8282` → after: `L8344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8344) · [Before (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8282)

```diff
-           _shopVersion: NJ.e
+           _shopVersion: qS.c
```

#### 952. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8284` → after: `L8346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8346) · [Before (L8284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8284)

```diff
-       }(RR.conn) : RR.phase === pG.H.Held ? function(RR) {
+       }(rr.conn) : rr.phase === OQ.G.Held ? function(rr) {
```

#### 953. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8287-L8288` → after: `L8349-L8350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8349-L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8349-L8350) · [Before (L8287-L8288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8287-L8288)

```diff
-           yR = null !== (JR = null === GR || void 0 === GR ? void 0 : GR.pendingHold) && void 0 !== JR ? JR : null;
-         if (null !== GR && null !== yR && yR.conn === RR) return GR.pendingHold = null, GR.heldConn = RR, Ai = 0, console.warn(`${pZ} the core holds the game, reconnecting`), void GR.resume.onDropped(yR.token);
+           Zr = null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.pendingHold) && void 0 !== Sr ? Sr : null;
+         if (null !== Qr && null !== Zr && Zr.conn === rr) return Qr.pendingHold = null, Qr.heldConn = rr, nf = 0, console.warn(`${vj} the core holds the game, reconnecting`), void Qr.resume.onDropped(Zr.token);
```

#### 954. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8292` → after: `L8354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8354) · [Before (L8292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8292)

```diff
-           null === JR || JR.isStopped || (console.info(`${pZ} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), BV(JR, "close", RR))
+           null === Sr || Sr.isStopped || (console.info(`${vj} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), Kp(Sr, "close", rr))
```

#### 955. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8294` → after: `L8356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8356) · [Before (L8294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8294)

```diff
-       }(RR.conn) : RR.phase === pG.H.Closed && (null === (GR = ei) || void 0 === GR || null === (yR = GR.pendingHold) || void 0 === yR ? void 0 : yR.conn) === RR.conn && (ei.heldConn === RR.conn ? function(RR) {
+       }(rr.conn) : rr.phase === OQ.G.Closed && (null === (Qr = Nf) || void 0 === Qr || null === (Zr = Qr.pendingHold) || void 0 === Zr ? void 0 : Zr.conn) === rr.conn && (Nf.heldConn === rr.conn ? function(rr) {
```

#### 956. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8297` → after: `L8359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8359) · [Before (L8297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8297)

```diff
-         WV(RR, "refused"), console.info(`${pZ} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
+         hp(rr, "refused"), console.info(`${vj} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
```

#### 957. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8300-L8303` → after: `L8362-L8365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8362-L8365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8362-L8365) · [Before (L8300-L8303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8300-L8303)

```diff
-       }(ei) : ei.pendingHold = null), RR.phase !== pG.H.Held && RR.phase !== pG.H.Left && RR.phase !== pG.H.Closed || (ni.add(RR.conn), RR.conn === Li && (Li = 0));
-       const qR = Object.keys(pG.H).find((JR => pG.H[JR] === RR.phase)),
-         iR = 0 === RR.code ? "" : ` (code ${RR.code})`;
-       console.info(`${pZ} conn ${RR.conn}: ${null!==qR&&void 0!==qR?qR:RR.phase}${iR}, ${Fq} raw messages so far`), (null === (tR = ui) || void 0 === tR ? void 0 : tR.conn) !== RR.conn || RR.phase !== pG.H.Left && RR.phase !== pG.H.Closed || jf(null), Vi !== RR.conn || RR.phase ! … [truncated]
+       }(Nf) : Nf.pendingHold = null), rr.phase !== OQ.G.Held && rr.phase !== OQ.G.Left && rr.phase !== OQ.G.Closed || (hf.add(rr.conn), rr.conn === tf && (tf = 0));
+       const Ir = Object.keys(OQ.G).find((Sr => OQ.G[Sr] === rr.phase)),
+         fr = 0 === rr.code ? "" : ` (code ${rr.code})`;
+       console.info(`${vj} conn ${rr.conn}: ${null!==Ir&&void 0!==Ir?Ir:rr.phase}${fr}, ${JI} raw messages so far`), (null === (Wr = Wf) || void 0 === Wr ? void 0 : Wr.conn) !== rr.conn || rr.phase !== OQ.G.Left && rr.phase !== OQ.G.Closed || AE(null), Ef !== rr.conn || rr.phase ! … [truncated]
```

#### 958. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8307` → after: `L8369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8369) · [Before (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8307)

```diff
-         (0, bG.j)(fR, `${pZ} a connection listener threw`)
+         (0, lQ.k)(Er, `${vj} a connection listener threw`)
```

#### 959. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8314` → after: `L8376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8376) · [Before (L8314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8314)

```diff
-       (0, wu.t)(), ef.forget(), null === ui && null === qi || (0, Xy.i)(), queueMicrotask((() => {
+       (0, xa.l)(), mE.forget(), null === Wf && null === jf || (0, yZ.e)(), queueMicrotask((() => {
```

#### 960. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8318-L8319` → after: `L8380-L8381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8380-L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8380-L8381) · [Before (L8318-L8319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8318-L8319)

```diff
-           console.warn(`${pZ} stopping before the reload threw`, RR)
-         }(0, Vy.flushCrashReports)(KJ.d).then(KJ.j, KJ.j)
+           console.warn(`${vj} stopping before the reload threw`, rr)
+         }(0, pZ.flushCrashReports)(xS.c).then(xS.h, xS.h)
```

#### 961. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8340` → after: `L8402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8402) · [Before (L8340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8340)

```diff
-         uR && "all" !== yR && !document.hidden && CK("backlog", `a shown tab's net-in is ${RR.rings.net.cursor} bytes behind: one frame reads it all`);
+         ar && "all" !== Zr && !document.hidden && nx("backlog", `a shown tab's net-in is ${rr.rings.net.cursor} bytes behind: one frame reads it all`);
```

#### 962. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8346` → after: `L8408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8408) · [Before (L8346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8346)

```diff
-           nV(), Sq = performance.now(), Tq = null, sq = !1, (0, jR.H)(), null === (uR = lq) || void 0 === uR || uR.beforeFrame(), it(Sq, RR), (0, jR.z)(Sq, uK), kq = !0;
+           Up(), VI = performance.now(), DI = null, dI = !1, (0, wr.Q)(), null === (ar = TI) || void 0 === ar || ar.beforeFrame(), fW(VI, rr), (0, wr.G)(VI, Zx), oI = !0;
```

#### 963. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8355` → after: `L8417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8417) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8355)

```diff
-           Si.observe(null !== (ZR = null === (qR = RR.lastHeader) || void 0 === qR ? void 0 : qR.chunksCancelled) && void 0 !== ZR ? ZR : 0);
+           Af.observe(null !== (jr = null === (Ir = rr.lastHeader) || void 0 === Ir ? void 0 : Ir.chunksCancelled) && void 0 !== jr ? jr : 0);
```

#### 964. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8360-L8361` → after: `L8422-L8423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8422-L8423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8422-L8423) · [Before (L8360-L8361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8360-L8361)

```diff
-           })(wR), null === (iR = Yi) || void 0 === iR || iR.frame(RR, Sq, KR), JR && (ff = wR);
-           wR && ((0, yG.b)(Sq), tf.frame(Sq), wf.end());
+           })(mr), null === (fr = of) || void 0 === fr || fr.frame(rr, VI, xr), Sr && (IE = mr);
+           mr && ((0, ZQ.e)(VI), ZE.frame(VI), pE.end());
```

#### 965. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8372` → after: `L8434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8434) · [Before (L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8372)

```diff
-           null !== Tq && (null === rR || void 0 === rR ? void 0 : rR.conn) === Tq && LK(rR, JJ.j);
+           null !== DI && (null === Nr || void 0 === Nr ? void 0 : Nr.conn) === DI && Ux(Nr, SS.o);
```

#### 966. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8375-L8376` → after: `L8437-L8438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8437-L8438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8437-L8438) · [Before (L8375-L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8375-L8376)

```diff
-               const JR = 0 !== (RR.headerWord(gG.L.LoadSteps) & gG.Y.JoinPreload);
-               JR !== fi && (fi = JR, (0, Vy.setCrashAdPreload)(JR), (0, Ly.G)())
+               const Sr = 0 !== (rr.headerWord(LQ.L.LoadSteps) & LQ.T.JoinPreload);
+               Sr !== ff && (ff = Sr, (0, pZ.setCrashAdPreload)(Sr), (0, hZ.U)())
```

#### 967. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8381-L8382` → after: `L8443-L8444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8443-L8444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8443-L8444) · [Before (L8381-L8382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8381-L8382)

```diff
-               null === yf || Zf === ui && !yf.frame(Sq, 0 !== (uR & gG.ab.TerrainDrawn)) || (yf = null);
-               if (0 === (uR & gG.Y.PlayerBound)) return;
+               null === QE || aE === Wf && !QE.frame(VI, 0 !== (ar & LQ.V.TerrainDrawn)) || (QE = null);
+               if (0 === (ar & LQ.T.PlayerBound)) return;
```

#### 968. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8387-L8389` → after: `L8449-L8451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8449-L8451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8449-L8451) · [Before (L8387-L8389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8387-L8389)

```diff
-               const iR = null !== (JR = null === ZR || void 0 === ZR ? void 0 : ZR.firstView) && void 0 !== JR ? JR : pG._.NotYet;
-               if (Di && iR === pG._.NotYet) return;
-               if (Fi && (!0 !== (null === (yR = (0, dR.l)()) || void 0 === yR ? void 0 : yR.isSessionLive) || !qR)) return;
+               const fr = null !== (Sr = null === jr || void 0 === jr ? void 0 : jr.firstView) && void 0 !== Sr ? Sr : OQ.bb.NotYet;
+               if (Hf && fr === OQ.bb.NotYet) return;
+               if (Df && (!0 !== (null === (Zr = (0, cr.f)()) || void 0 === Zr ? void 0 : Zr.isSessionLive) || !Ir)) return;
```

#### 969. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8392` → after: `L8454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8454) · [Before (L8392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8392)

```diff
-                 let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : KG.i;
+                 let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xQ.j;
```

#### 970. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8400` → after: `L8462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8462) · [Before (L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8400)

```diff
-               }(ri.game, null !== (fR = RR.firstViewTerrainCodes()) && void 0 !== fR ? fR : []);
+               }(mf.game, null !== (Er = rr.firstViewTerrainCodes()) && void 0 !== Er ? Er : []);
```

#### 971. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8403` → after: `L8465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8465) · [Before (L8403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8403)

```diff
-                   ui === VR && (0, eR.q)()
+                   Wf === pr && (0, Ur.s)()
```

#### 972. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8414` → after: `L8476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8476) · [Before (L8414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8414)

```diff
-               Fi = !0, tf.shown(), performance.mark(DZ), (0, Du.n)("render") && Promise.all([GR.e(91), GR.e(57)]).then((() => GR(5539))).then((RR => {
+               Df = !0, ZE.shown(), performance.mark(qj), (0, qa.p)("render") && Promise.all([Qr.e(91), Qr.e(57)]).then((() => Qr(5481))).then((rr => {
```

#### 973. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8424` → after: `L8486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8486) · [Before (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8424)

```diff
-               null !== wR && (0, eR.y)("wasm_view_links", KR, (0, LR.Fb)(wR));
+               null !== mr && (0, Ur.D)("wasm_view_links", xr, (0, hr.Tb)(mr));
```

#### 974. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8428-L8430` → after: `L8490-L8492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8490-L8492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8490-L8492) · [Before (L8428-L8430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8428-L8430)

```diff
-               null !== nR && (0, eR.v)(nR);
-               if (Di && iR !== pG._.Drawn) {
-                 const JR = iR === pG._.HeldBackstop ? "held_draws" : "long",
+               null !== zr && (0, Ur.z)(zr);
+               if (Hf && fr !== OQ.bb.Drawn) {
+                 const Sr = fr === OQ.bb.HeldBackstop ? "held_draws" : "long",
```

#### 975. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8434` → after: `L8496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8496) · [Before (L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8434)

```diff
-                 if (console.warn(`${pZ} playable at ${KR} ms on the first view's ${JR} backstop, ${GR}: it wasn't drawn whole in time`), (0, eR.y)("wasm_view_backstop", KR, `${JR}:${GR}`), "long" === JR) {
+                 if (console.warn(`${vj} playable at ${xr} ms on the first view's ${Sr} backstop, ${Qr}: it wasn't drawn whole in time`), (0, Ur.D)("wasm_view_backstop", xr, `${Sr}:${Qr}`), "long" === Sr) {
```

#### 976. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8436` → after: `L8498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8498) · [Before (L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8436)

```diff
-                   const JR = null !== (UR = null === (WR = ri) || void 0 === WR ? void 0 : WR.game) && void 0 !== UR ? UR : "";
+                   const Sr = null !== (Yr = null === (nr = mf) || void 0 === nr ? void 0 : nr.game) && void 0 !== Yr ? Yr : "";
```

#### 977. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8442` → after: `L8504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8504) · [Before (L8442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8442)

```diff
-                     (0, Vy.reportFirstViewNoTerrain)(JR, GR, yR, qq), (0, zJ.t)("noTerrain")
+                     (0, pZ.reportFirstViewNoTerrain)(Sr, Qr, Zr, jI), (0, VS.x)("noTerrain")
```

#### 978. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8445-L8450` → after: `L8507-L8512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8507-L8512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8507-L8512) · [Before (L8445-L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8445-L8450)

```diff
-               } else console.info(`${pZ} playable at ${KR} ms${Di?"":" (no renderer)"}`);
-               setTimeout(Ii, 0), (0, kJ.d)().catch((RR => {
-                 console.error(`${pZ} item sprites didn't load, so item particles show the missing texture`, RR)
-               })), Yt.b.warm()
-             }(RR), wR && null !== ui && 0 !== (RR.headerWord(gG.L.LoadSteps) & gG.ab.MeshLanded) && (qf = ui), (0, kt.m)(null !== ui && qf === ui && Zf !== ui), (0, kt.o)(null !== ui));
-           (0, jG.K)(RR, {
+               } else console.info(`${vj} playable at ${xr} ms${Hf?"":" (no renderer)"}`);
+               setTimeout(Mf, 0), (0, bS.h)().catch((rr => {
+                 console.error(`${vj} item sprites didn't load, so item particles show the missing texture`, rr)
+               })), FW.c.warm()
+             }(rr), mr && null !== Wf && 0 !== (rr.headerWord(LQ.L.LoadSteps) & LQ.V.MeshLanded) && (jE = Wf), (0, oW.f)(null !== Wf && jE === Wf && aE !== Wf), (0, oW.i)(null !== Wf));
+           (0, wQ.S)(rr, {
```

#### 979. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8457` → after: `L8519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8519) · [Before (L8457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8457)

```diff
-               (0, yt.b)(JR)
+               (0, ZW.e)(Sr)
```

#### 980. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8459-L8460` → after: `L8521-L8522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8521-L8522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8521-L8522) · [Before (L8459-L8460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8459-L8460)

```diff
-               if ((0, bG.h)(aR)) {
-                 RR.crashOn(jG.g, aR);
+               if ((0, lQ.g)(tr)) {
+                 rr.crashOn(wQ.k, tr);
```

#### 981. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8463` → after: `L8525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8525) · [Before (L8463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8463)

```diff
-               console.error(`${ut} an input action listener threw`, aR)
+               console.error(`${aW} an input action listener threw`, tr)
```

#### 982. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8466` → after: `L8528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8528) · [Before (L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8466)

```diff
-           }(RR), tR && (0, qG.d)();
+           }(rr), Wr && (0, IQ.b)();
```

#### 983. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8475` → after: `L8537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8537) · [Before (L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8475)

```diff
-       console.error(`${pZ} a frame-start listener threw`, RR)
+       console.error(`${vj} a frame-start listener threw`, rr)
```

#### 984. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8484` → after: `L8546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8546) · [Before (L8484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8484)

```diff
-       console.error(`${pZ} a before-frame listener threw`, RR)
+       console.error(`${vj} a before-frame listener threw`, rr)
```

#### 985. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8491` → after: `L8553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8553) · [Before (L8491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8491)

```diff
-       if (yR.isStopped || Wf || (0, wu.c)()) return void tf.shown();
+       if (Zr.isStopped || zE || (0, xa.d)()) return void ZE.shown();
```

#### 986. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8500-L8501` → after: `L8562-L8563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8562-L8563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8562-L8563) · [Before (L8500-L8501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8500-L8501)

```diff
-         bound: 0 !== (qR & gG.Y.PlayerBound),
-         preload: 0 !== (qR & gG.Y.JoinPreload),
+         bound: 0 !== (Ir & LQ.T.PlayerBound),
+         preload: 0 !== (Ir & LQ.T.JoinPreload),
```

#### 987. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8503` → after: `L8565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8565) · [Before (L8503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8503)

```diff
-         renderPending: null !== (JR = null === (GR = yR.lastHeader) || void 0 === GR ? void 0 : GR.renderPending) && void 0 !== JR ? JR : 0,
+         renderPending: null !== (Sr = null === (Qr = Zr.lastHeader) || void 0 === Qr ? void 0 : Qr.renderPending) && void 0 !== Sr ? Sr : 0,
```

#### 988. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8507` → after: `L8569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8569) · [Before (L8507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8507)

```diff
-       iR.bound && null === iR.wait && console.warn(`${pZ} the first view's wait couldn't be read as the load ended: its report says lacked none`), (0, Vy.reportFirstViewUnshown)(uf, tR, iR, ZR, qq), "hidden" !== RR && "pagehide" !== RR || (0, Vy.flushCrashReports)(KJ.d)
+       fr.bound && null === fr.wait && console.warn(`${vj} the first view's wait couldn't be read as the load ended: its report says lacked none`), (0, pZ.reportFirstViewUnshown)(WE, Wr, fr, jr, jI), "hidden" !== rr && "pagehide" !== rr || (0, pZ.flushCrashReports)(xS.c)
```

#### 989. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8519-L8520` → after: `L8581-L8582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8581-L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8581-L8582) · [Before (L8519-L8520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8519-L8520)

```diff
-       const JR = (0, dR.l)(),
-         GR = (0, dR.u)(),
+       const Sr = (0, cr.f)(),
+         Qr = (0, cr.l)(),
```

#### 990. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8524` → after: `L8586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8586) · [Before (L8524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8524)

```diff
-         cause: (0, My.l)(tR, yR),
+         cause: (0, BZ.n)(Wr, Zr),
```

#### 991. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8540-L8541` → after: `L8602-L8603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8602-L8603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8602-L8603) · [Before (L8540-L8541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8540-L8541)

```diff
-       if (null === Rf && rK() && (Rf = performance.now()), null === ui || 0 === (RR.headerWord(gG.L.LoadSteps) & gG.Y.PlayerBound) ? Gf = null : Gf ??= performance.now(), null === qi && null === ui) return;
-       null === Rf || Jf || (Jf = !0, (0, eR.y)("wasm_startup_loaded", Rf));
+       if (null === uf && xx() && (uf = performance.now()), null === Wf || 0 === (rr.headerWord(LQ.L.LoadSteps) & LQ.T.PlayerBound) ? SE = null : SE ??= performance.now(), null === jf && null === Wf) return;
+       null === uf || rE || (rE = !0, (0, Ur.D)("wasm_startup_loaded", uf));
```

#### 992. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8543` → after: `L8605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8605) · [Before (L8543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8543)

```diff
-       null !== ui ? GR = -1 : !0 === (null === (JR = Bi) || void 0 === JR ? void 0 : JR.activated) && (GR = ~gG.ab.TerrainDrawn);
+       null !== Wf ? Qr = -1 : !0 === (null === (Sr = Bf) || void 0 === Sr ? void 0 : Sr.activated) && (Qr = ~LQ.V.TerrainDrawn);
```

#### 993. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8549-L8550` → after: `L8611-L8612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8611-L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8611-L8612) · [Before (L8549-L8550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8549-L8550)

```diff
-       0 !== (yR & gG.ab.PlayerChunk) && (tf.playerChunk(tR, document.hidden), uf = null !== (uR = null !== (ZR = null === (qR = ri) || void 0 === qR ? void 0 : qR.game) && void 0 !== ZR ? ZR : ii) && void 0 !== uR ? uR : "", (0, Vy.warmCrashCounts)());
-       for (const [iR, fR] of Object.entries(VK)) 0 !== (yR & gG.ab[iR]) && (0, eR.y)(fR, tR)
+       0 !== (Zr & LQ.V.PlayerChunk) && (ZE.playerChunk(Wr, document.hidden), WE = null !== (ar = null !== (jr = null === (Ir = mf) || void 0 === Ir ? void 0 : Ir.game) && void 0 !== jr ? jr : If) && void 0 !== ar ? ar : "", (0, pZ.warmCrashCounts)());
+       for (const [fr, Er] of Object.entries(fx)) 0 !== (Zr & LQ.V[fr]) && (0, Ur.D)(Er, Wr)
```

#### 994. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8583` → after: `L8645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8645) · [Before (L8583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8583)

```diff
-       Wf = !0, Vf.stop(), wf.end(), (0, ou.endLookDebugTake)(), zu = null, UV(), (0, jR.E)().unlockPointer(), (0, jR.B)(null), null === (RR = pq) || void 0 === RR || RR(), pq = null, null === (JR = (0, dR.u)()) || void 0 === JR || JR.followCursorAim(null), (0, qG.I)(), (0, dR.i)( … [truncated]
+       zE = !0, fE.stop(), pE.end(), (0, ga.endLookDebugTake)(), Aa = null, tp(), (0, wr.N)().unlockPointer(), (0, wr.K)(null), null === (rr = vI) || void 0 === rr || rr(), vI = null, null === (Sr = (0, cr.l)()) || void 0 === Sr || Sr.followCursorAim(null), (0, IQ.y)(), (0, cr.e)( … [truncated]
```

#### 995. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8585` → after: `L8647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8647) · [Before (L8585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8585)

```diff
-       Aq = null, nR && (nR.stop(), bK(nR)), null === (KR = Nq) || void 0 === KR || KR.dispose(), Nq = null, null === (wR = Dq) || void 0 === wR || wR.dispose(), Dq = null, gq = null, null === (rR = vq) || void 0 === rR || rR(), vq = null, null === (eR = Bq) || void 0 === eR || eR … [truncated]
+       nI = null, zr && (zr.stop(), Ox(zr)), null === (xr = HI) || void 0 === xr || xr.dispose(), HI = null, null === (mr = qI) || void 0 === mr || mr.dispose(), qI = null, OI = null, null === (Nr = lI) || void 0 === Nr || Nr(), lI = null, null === (Ur = BI) || void 0 === Ur || Ur … [truncated]
```

#### 996. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8591-L8592` → after: `L8653-L8654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8653-L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8653-L8654) · [Before (L8591-L8592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8591-L8592)

```diff
-         console.warn(`${pZ} the sky's images didn't release`, WR)
-       }(0, Qt.f)(null), null === (LR = Rq) || void 0 === LR || LR.pagePreviews().endSession(null === (0, HJ.i)())
+         console.warn(`${vj} the sky's images didn't release`, nr)
+       }(0, bW.g)(null), null === (hr = uj) || void 0 === hr || hr.pagePreviews().endSession(null === (0, gS.l)())
```

#### 997. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8597-L8603` → after: `L8659-L8665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8659-L8665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8659-L8665) · [Before (L8597-L8603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8597-L8603)

```diff
-       const tR = null !== (GR = null === (yR = Aq) || void 0 === yR ? void 0 : yR.details()) && void 0 !== GR ? GR : {},
-         uR = RR.site === bZ || RR.site === vZ || RR.site === Vy.RENDER_RELOAD_SITE || RR.site === OZ ? RR.error instanceof WebAssembly.RuntimeError || RR.error instanceof cG.e : !(0, zG.s)(RR.error) && (0, jG.E)(RR);
-       uR && RR.error instanceof Error && (0, HJ.J)(RR.error);
-       const ZR = uR || RR.site === jG.r ? (0, Vy.readTrap)(RR.error) : null,
-         qR = null !== ZR && (0, OG.c)(ZR.kind, ZR.refusedBytes) ? ZR.refusedBytes : 0,
-         iR = (0, Zy.r)(),
-         fR = null === Cq ? (0, jt.v)(function() {
+       const Wr = null !== (Qr = null === (Zr = nI) || void 0 === Zr ? void 0 : Zr.details()) && void 0 !== Qr ? Qr : {},
+         ar = rr.site === Lj || rr.site === lj || rr.site === pZ.RENDER_RELOAD_SITE || rr.site === Xj ? rr.error instanceof WebAssembly.RuntimeError || rr.error instanceof MQ.d : !(0, VQ.t)(rr.error) && (0, wQ.O)(rr);
+       ar && rr.error instanceof Error && (0, gS.V)(rr.error);
+       const jr = ar || rr.site === wQ.B ? (0, pZ.readTrap)(rr.error) : null,
+         Ir = null !== jr && (0, PQ.e)(jr.kind, jr.refusedBytes) ? jr.refusedBytes : 0,
+         fr = (0, jZ.o)(),
+         Er = null === eI ? (0, iW.r)(function() {
```

#### 998. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8605` → after: `L8667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8667) · [Before (L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8605)

```diff
-             return (0, HJ.m)().buffer.byteLength
+             return (0, gS.s)().buffer.byteLength
```

#### 999. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8610` → after: `L8672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8672) · [Before (L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8610)

```diff
-         VR = qR > 0 && !fR && NV() && !(0, wu.c)() ? (0, Zy.t)() : void 0;
+         pr = Ir > 0 && !Er && Xp() && !(0, xa.d)() ? (0, jZ.r)() : void 0;
```

#### 1000. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8612` → after: `L8674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8674) · [Before (L8612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8612)

```diff
-       if (UK(), (0, wu.c)()) return ef.releaseNow(), console.warn(`${pZ} the session stopped at ${RR.site} as the page reloads`, RR.error), void((0, zG.s)(RR.error) || (null === (KR = RR.header) || void 0 === KR ? void 0 : KR.lastError) === pG.K.CoreBusy || (0, Vy.reportStoppedCo … [truncated]
+       if (hx(), (0, xa.d)()) return mE.releaseNow(), console.warn(`${vj} the session stopped at ${rr.site} as the page reloads`, rr.error), void((0, VQ.t)(rr.error) || (null === (xr = rr.header) || void 0 === xr ? void 0 : xr.lastError) === OQ.J.CoreBusy || (0, pZ.reportStoppedCo … [truncated]
```

#### 1001. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8630-L8631` → after: `L8692-L8693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8692-L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8692-L8693) · [Before (L8630-L8631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8630-L8631)

```diff
-       Uf = !0, (0, Ly.W)(), null === (JR = gi) || void 0 === JR || JR.abort(), gi = null, yu.d.release();
-       const ZR = af ? null !== (GR = yR.cancel) && void 0 !== GR ? GR : "general:back" : null;
+       hE = !0, (0, hZ.eb)(), null === (Sr = vf) || void 0 === Sr || Sr.abort(), vf = null, Qa.b.release();
+       const jr = NE ? null !== (Qr = Zr.cancel) && void 0 !== Qr ? Qr : "general:back" : null;
```

#### 1002. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8635` → after: `L8697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8697) · [Before (L8635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8635)

```diff
-           if (null === GR || wG(!1) || wG(!0)) return void(0, KJ.j)();
+           if (null === Qr || mQ(!1) || mQ(!0)) return void(0, xS.h)();
```

#### 1003. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8650` → after: `L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8712) · [Before (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8650)

```diff
-       return !(GR - hq[RR] < jZ) && (hq[RR] = GR, console.warn(`${pZ} ${JR}`), !0)
+       return !(Qr - sI[rr] < ij) && (sI[rr] = Qr, console.warn(`${vj} ${Sr}`), !0)
```

#### 1004. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8659` → after: `L8721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8721) · [Before (L8659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8659)

```diff
-       uR !== Ri && CK("dropped", `${uR} records dropped so far (input ${JR.dropped}, options ${tR}, net ${GR.dropped}, worker ${yR.dropped}, net-out ${Ji})`) && (Ri = uR)
+       ar !== uI && nx("dropped", `${ar} records dropped so far (input ${Sr.dropped}, options ${Wr}, net ${Qr.dropped}, worker ${Zr.dropped}, net-out ${rf})`) && (uI = ar)
```

#### 1005. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8664` → after: `L8726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8726) · [Before (L8664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8664)

```diff
-       const GR = (0, ay.g)();
+       const Qr = (0, tZ.d)();
```

#### 1006. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8666` → after: `L8728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8728) · [Before (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8666)

```diff
-       const yR = (0, Cy.v)(GR);
+       const Zr = (0, KZ.p)(Qr);
```

#### 1007. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8669` → after: `L8731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8731) · [Before (L8669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8669)

```diff
-         horizontal: Math.min(yR.horizontal, null !== (RR = null === (JR = Aq) || void 0 === JR ? void 0 : JR.shedDistanceInUse()) && void 0 !== RR ? RR : 1 / 0)
+         horizontal: Math.min(Zr.horizontal, null !== (rr = null === (Sr = nI) || void 0 === Sr ? void 0 : Sr.shedDistanceInUse()) && void 0 !== rr ? rr : 1 / 0)
```

#### 1008. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8677` → after: `L8739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8739) · [Before (L8677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8677)

```diff
-         samples: Di ? ji : null,
+         samples: Hf ? Vf : null,
```

#### 1009. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8679` → after: `L8741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8741) · [Before (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8679)

```diff
-         renderDistance: null !== (JR = null === (GR = MK()) || void 0 === GR ? void 0 : GR.horizontal) && void 0 !== JR ? JR : null
+         renderDistance: null !== (Sr = null === (Qr = Kx()) || void 0 === Qr ? void 0 : Qr.horizontal) && void 0 !== Sr ? Sr : null
```

#### 1010. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8684` → after: `L8746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8746) · [Before (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8684)

```diff
-       ii = RR, (0, Ly.G)()
+       If = rr, (0, hZ.U)()
```

#### 1011. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8692-L8693` → after: `L8754-L8755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8754-L8755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8754-L8755) · [Before (L8692-L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8692-L8693)

```diff
-         renderDistance: null !== (JR = null === yR || void 0 === yR ? void 0 : yR.horizontal) && void 0 !== JR ? JR : null,
-         renderDistanceVertical: null !== (GR = null === yR || void 0 === yR ? void 0 : yR.vertical) && void 0 !== GR ? GR : null,
+         renderDistance: null !== (Sr = null === Zr || void 0 === Zr ? void 0 : Zr.horizontal) && void 0 !== Sr ? Sr : null,
+         renderDistanceVertical: null !== (Qr = null === Zr || void 0 === Zr ? void 0 : Zr.vertical) && void 0 !== Qr ? Qr : null,
```

#### 1012. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8696` → after: `L8758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8758) · [Before (L8696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8696)

```diff
-         renderBackend: (0, wu.M)(),
+         renderBackend: (0, xa.z)(),
```

#### 1013. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8698` → after: `L8760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8760) · [Before (L8698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8698)

```diff
-         ...(0, ny.d)(ii)
+         ...(0, zZ.c)(If)
```

#### 1014. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8704` → after: `L8766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8766) · [Before (L8704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8704)

```diff
-       console.info(`${pZ} wasm memory at the session's end`, RR.details());
+       console.info(`${vj} wasm memory at the session's end`, rr.details());
```

#### 1015. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8716` → after: `L8778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8778) · [Before (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8716)

```diff
-         renderBackend: null !== (JR = (0, wu.M)()) && void 0 !== JR ? JR : "none",
+         renderBackend: null !== (Sr = (0, xa.z)()) && void 0 !== Sr ? Sr : "none",
```

#### 1016. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8718` → after: `L8780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8780) · [Before (L8718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8718)

```diff
-         deviceMemory: String(null !== uR && void 0 !== uR ? uR : "unreported")
+         deviceMemory: String(null !== ar && void 0 !== ar ? ar : "unreported")
```

#### 1017. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8726` → after: `L8788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8788) · [Before (L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8726)

```diff
-         RR.crash(jG.v, GR)
+         rr.crash(wQ.E, Qr)
```

#### 1018. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8731` → after: `L8793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8793) · [Before (L8731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8731)

```diff
-       return Uq ??= GR.e(84).then((() => GR(54695))).catch((RR => {
+       return zI ??= Qr.e(84).then((() => Qr(55186))).catch((rr => {
```

#### 1019. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8776` → after: `L8838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8838) · [Before (L8776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8776)

```diff
-         const ZR = await (0, Ct.l)(RR, {
+         const jr = await (0, eW.i)(rr, {
```

#### 1020. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8779` → after: `L8841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8841) · [Before (L8779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8779)

```diff
-             yR(), await Promise.all([(0, Vy.flushCrashReports)(KJ.d), null === uR || void 0 === uR ? void 0 : uR()])
+             Zr(), await Promise.all([(0, pZ.flushCrashReports)(xS.c), null === ar || void 0 === ar ? void 0 : ar()])
```

#### 1021. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8781` → after: `L8843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8843) · [Before (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8781)

```diff
-           reload: KJ.j
+           reload: xS.h
```

#### 1022. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8795` → after: `L8857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8857) · [Before (L8795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8795)

```diff
-         } = await GR.e(132).then((() => GR(42579)));
+         } = await Qr.e(132).then((() => Qr(42906)));
```

#### 1023. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8823` → after: `L8885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8885) · [Before (L8823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8823)

```diff
-       zK || (zK = !0, pJ = (RR, JR) => (0, nJ.w)(UJ.g.get().getCurrentLanguageCode(), RR, JR), pf("play", fJ), (0, wR.q)(new tw), qR.gameBridge.attach(hR), sK().catch((() => {})), (0, dR.y)((RR => {
+       kx || (kx = !0, OS = (rr, Sr) => (0, zS.z)(YS.f.get().getCurrentLanguageCode(), rr, Sr), TE("play", ES), (0, mr.l)(new Qm), Ir.gameBridge.attach(ur), Dx().catch((() => {})), (0, cr.n)((rr => {
```

#### 1024. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8833-L8835` → after: `L8895-L8897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8895-L8897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8895-L8897) · [Before (L8833-L8835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8833-L8835)

```diff
-       booted: uR.j.INITIALISE_NOA,
-       texturesIn: uR.j.REGISTRATION,
-       modelsIn: uR.j.SETUP_LIFEFORMS
+       booted: ar.i.INITIALISE_NOA,
+       texturesIn: ar.i.REGISTRATION,
+       modelsIn: ar.i.SETUP_LIFEFORMS
```

#### 1025. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8839` → after: `L8901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8901) · [Before (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8839)

```diff
-       iR.n.JK("matchmakeAndPlayStepCompleted", {
+       fr.i.Jp("matchmakeAndPlayStepCompleted", {
```

#### 1026. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8850` → after: `L8912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8912) · [Before (L8850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8850)

```diff
-       } = (0, wR.d)();
+       } = (0, mr.b)();
```

#### 1027. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8852` → after: `L8914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8914) · [Before (L8852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8852)

```diff
-       PR.c.leftGame(JR, RR.code), iR.n.JK("unwantedLeftGame", {
+       Gr.c.leftGame(Sr, rr.code), fr.i.Jp("unwantedLeftGame", {
```

#### 1028. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8866` → after: `L8928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8928) · [Before (L8866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8866)

```diff
-       } : "gameOrPluginKick" === RR.name ? (0, vJ.b)(RR.reason) : `You have disconnected from the server.\n${RR.reason}`
+       } : "gameOrPluginKick" === rr.name ? (0, XS.d)(rr.reason) : `You have disconnected from the server.\n${rr.reason}`
```

#### 1029. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8871` → after: `L8933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8933) · [Before (L8871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8871)

```diff
-       yR = (0, fR.D)(RR, JR), Promise.resolve().then((() => GR(1663))).then((RR => {
+       Zr = (0, Er.G)(rr, Sr), Promise.resolve().then((() => Qr(1644))).then((rr => {
```

#### 1030. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8882` → after: `L8944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8944) · [Before (L8882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8882)

```diff
-       return SK ??= Promise.all([GR.e(85), GR.e(89), GR.e(86), GR.e(87), GR.e(88), GR.e(105), GR.e(102), GR.e(306), GR.e(127), GR.e(280), GR.e(254), GR.e(246), GR.e(55)]).then((() => GR(42538))).then((RR => {
+       return Ax ??= Promise.all([Qr.e(85), Qr.e(89), Qr.e(86), Qr.e(87), Qr.e(88), Qr.e(105), Qr.e(102), Qr.e(307), Qr.e(127), Qr.e(281), Qr.e(255), Qr.e(247), Qr.e(55)]).then((() => Qr(42871))).then((rr => {
```

#### 1031. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8889` → after: `L8951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8951) · [Before (L8889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8889)

```diff
-                 null === JR || JR.isStopped || Wf ? console.warn(`${pZ} the play sources threw as they attached, after the client stopped`, RR) : WK({
+                 null === Sr || Sr.isStopped || zE ? console.warn(`${vj} the play sources threw as they attached, after the client stopped`, rr) : zx({
```

#### 1032. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8898` → after: `L8960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8960) · [Before (L8898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8898)

```diff
-         throw SK = null, new dR.e(RR)
+         throw Ax = null, new cr.b(rr)
```

#### 1033. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8908` → after: `L8970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8970) · [Before (L8908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8908)

```diff
-       const qR = (0, KR.e)();
+       const Ir = (0, xr.d)();
```

#### 1034. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8921` → after: `L8983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8983) · [Before (L8921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8921)

```diff
-           ZR = JR.place.gameNameWithVariation, await (0, aR.d)();
+           jr = Sr.place.gameNameWithVariation, await (0, tr.b)();
```

#### 1035. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8923` → after: `L8985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8985) · [Before (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8923)

```diff
-             target: await (0, yJ.f)(RR.userContext, JR.place, zV(), qR),
+             target: await (0, ZS.g)(rr.userContext, Sr.place, Gp(), Ir),
```

#### 1036. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8925` → after: `L8987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR8987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L8987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L8987) · [Before (L8925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8925)

```diff
-             freshMs: yJ.c
+             freshMs: ZS.d
```

#### 1037. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8950-L8951` → after: `L9012-L9013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9012-L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9012-L9013) · [Before (L8950-L8951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8950-L8951)

```diff
-             (0, KR.o)((() => {
-               RR.endJoinAd() && ((0, eR.u)(), DR.adEnded())
+             (0, xr.n)((() => {
+               rr.endJoinAd() && ((0, Ur.w)(), Rr.adEnded())
```

#### 1038. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8954` → after: `L9016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9016) · [Before (L8954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8954)

```diff
-           return dK || (dK = !0, (0, oR.d)()), jK ? (kK(uR.j.CONNECT_TO_GAME_SERVER), kK(uR.j.SHADER_PACK), function() {
+           return ix || (ix = !0, (0, Cr.c)()), Vx ? (Fx(ar.i.CONNECT_TO_GAME_SERVER), Fx(ar.i.SHADER_PACK), function() {
```

#### 1039. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8957` → after: `L9019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9019) · [Before (L8957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8957)

```diff
-           }() && (0, HR.f)(RR.userContext, ZR).catch((RR => {
+           }() && (0, gr.c)(rr.userContext, jr).catch((rr => {
```

#### 1040. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8962` → after: `L9024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9024) · [Before (L8962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8962)

```diff
-               return null !== (RR = null === (JR = oq) || void 0 === JR ? void 0 : JR.couldntRunInJoinedGame()) && void 0 !== RR ? RR : null
+               return null !== (rr = null === (Sr = gI) || void 0 === Sr ? void 0 : Sr.couldntRunInJoinedGame()) && void 0 !== rr ? rr : null
```

#### 1041. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8964` → after: `L9026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9026) · [Before (L8964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8964)

```diff
-             null !== RR && (0, HR.e)(RR)
+             null !== rr && (0, gr.b)(rr)
```

#### 1042. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8969` → after: `L9031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9031) · [Before (L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8969)

```diff
-             if ((fR.error instanceof JJ.m || fR.error instanceof JJ.b) && fR.error.code === yR.e.serverUpdating.code) {
+             if ((Er.error instanceof SS.q || Er.error instanceof SS.e) && Er.error.code === Zr.e.serverUpdating.code) {
```

#### 1043. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8974` → after: `L9036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9036) · [Before (L8974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8974)

```diff
-               } = (0, wR.d)();
+               } = (0, mr.b)();
```

#### 1044. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8977` → after: `L9039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9039) · [Before (L8977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8977)

```diff
-             return fR.error instanceof VJ.c ? tR.e.errorWithCode(fR.error.messageKey, uR.j.SHADER_PACK, {
+             return Er.error instanceof pS.c ? Wr.e.errorWithCode(Er.error.messageKey, ar.i.SHADER_PACK, {
```

#### 1045. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8980-L8983` → after: `L9042-L9045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9042-L9045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9042-L9045) · [Before (L8980-L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8980-L8983)

```diff
-               if (RR instanceof JJ.z || RR instanceof zR.g) return RR.message;
-               if (Rw(RR)) return (0, RJ.f)(RR.code, RR.serverText);
-               return RJ.c
-             }(fR.error), uR.j.CONNECT_TO_GAME_SERVER, {
+               if (rr instanceof SS.C || rr instanceof Vr.c) return rr.message;
+               if (sx(rr)) return (0, rS.j)(rr.code, rr.serverText);
+               return rS.e
+             }(Er.error), ar.i.CONNECT_TO_GAME_SERVER, {
```

#### 1046. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8987-L8989` → after: `L9049-L9051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9049-L9051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9049-L9051) · [Before (L8987-L8989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8987-L8989)

```diff
-               joinFailure: (0, GJ.g)(fR.error),
-               rematch: (0, IR.e)(fR.error),
-               gameRefused: (0, mR.d)(fR.error)
+               joinFailure: (0, QS.j)(Er.error),
+               rematch: (0, kr.b)(Er.error),
+               gameRefused: (0, Ar.c)(Er.error)
```

#### 1047. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L8995` → after: `L9057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9057) · [Before (L8995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L8995)

```diff
-         case "xR":
+         case "Rr":
```

#### 1048. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9001` → after: `L9063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9063) · [Before (L9001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9001)

```diff
-       return RR instanceof JJ.m || RR instanceof JJ.b && "attach" !== RR.stage
+       return rr instanceof SS.q || rr instanceof SS.e && "attach" !== rr.stage
```

#### 1049. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9005` → after: `L9067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9067) · [Before (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9005)

```diff
-       return !(RR instanceof JJ.z) && !Rw(RR) && void 0 === (0, GJ.b)(RR)
+       return !(rr instanceof SS.C) && !sx(rr) && void 0 === (0, QS.b)(rr)
```

#### 1050. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9009` → after: `L9071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9071) · [Before (L9009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9009)

```diff
-       return Rw(RR) ? RR instanceof JJ.b && (0, RJ.e)(RR.code).requiresRefresh ? "medium" : "low" : Jw(RR) || RR instanceof JJ.z ? "medium" : "low"
+       return sx(rr) ? rr instanceof SS.e && (0, rS.i)(rr.code).requiresRefresh ? "medium" : "low" : ux(rr) || rr instanceof SS.C ? "medium" : "low"
```

#### 1051. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9013` → after: `L9075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9075) · [Before (L9013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9013)

```diff
-       return tR.e.errorWithCode(RR, uR.j.CONNECT_TO_GAME_SERVER, {
+       return Wr.e.errorWithCode(rr, ar.i.CONNECT_TO_GAME_SERVER, {
```

#### 1052. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9015` → after: `L9077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9077) · [Before (L9015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9015)

```diff
-         xR: !0
+         Rr: !0
```

#### 1053. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9020` → after: `L9082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9082) · [Before (L9020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9020)

```diff
-         if ((0, SR.b)()) {
+         if ((0, ir.d)()) {
```

#### 1054. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9022` → after: `L9084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9084) · [Before (L9022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9022)

```diff
-           if ((0, ZR.b)()) return;
+           if ((0, jr.e)()) return;
```

#### 1055. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9030` → after: `L9092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9092) · [Before (L9030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9030)

```diff
-         jK = !1, (0, cR.e)();
+         Vx = !1, (0, Mr.h)();
```

#### 1056. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9033` → after: `L9095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9095) · [Before (L9033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9033)

```diff
-           null === (JR = (0, dR.u)()) || void 0 === JR || JR.clearWasmCameraScreen()
+           null === (Sr = (0, cr.l)()) || void 0 === Sr || Sr.clearWasmCameraScreen()
```

#### 1057. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9039` → after: `L9101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9101) · [Before (L9039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9039)

```diff
-         } = (0, wR.d)();
+         } = (0, mr.b)();
```

#### 1058. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9043` → after: `L9105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9105) · [Before (L9043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9043)

```diff
-           (0, wR.s)({
+           (0, mr.m)({
```

#### 1059. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9045` → after: `L9107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9107) · [Before (L9045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9045)

```diff
-           }), iR.n.JK("leaveGame", {
+           }), fr.i.Jp("leaveGame", {
```

#### 1060. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9047` → after: `L9109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9109) · [Before (L9047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9047)

```diff
-           }), (0, VR.S)()
+           }), (0, pr.G)()
```

#### 1061. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9051` → after: `L9113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9113) · [Before (L9051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9051)

```diff
-         return (0, SR.b)()
+         return (0, ir.d)()
```

#### 1062. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9055` → after: `L9117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9117) · [Before (L9055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9055)

```diff
-   42472: (RR, JR, GR) => {
+   42796: (rr, Sr, Qr) => {
```

#### 1063. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9057-L9060` → after: `L9119-L9122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9119-L9122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9119-L9122) · [Before (L9057-L9060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9057-L9060)

```diff
-       d: () => tR,
-       f: () => yR,
-       h: () => qR,
-       l: () => ZR
+       e: () => Wr,
+       i: () => Zr,
+       m: () => Ir,
+       o: () => jr
```

#### 1064. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9072` → after: `L9134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9134) · [Before (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9072)

```diff
-       return `it sent no start within ${Math.round(RR)} ms`
+       return `it sent no start within ${Math.round(rr)} ms`
```

#### 1065. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9115` → after: `L9177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9177) · [Before (L9115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9115)

```diff
-   40985: (RR, JR, GR) => {
+   41338: (rr, Sr, Qr) => {
```

#### 1066. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9117` → after: `L9179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9179) · [Before (L9117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9117)

```diff
-       c: () => qR
+       d: () => Ir
```

#### 1067. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9119` → after: `L9181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9181) · [Before (L9119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9119)

```diff
-     var yR = GR(377),
+     var Zr = Qr(379),
```

#### 1068. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9125-L9126` → after: `L9187-L9188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9187-L9188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9187-L9188) · [Before (L9125-L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9125-L9126)

```diff
-       const JR = (0, yR.Sb)(RR);
-       return "greenville" === JR ? !(0, yR.Mb)(RR) : "classic" !== JR ? uR.has(JR) : !(0, tR.n)(RR) && !ZR.has((0, yR.Mb)(RR))
+       const Sr = (0, Zr.Mb)(rr);
+       return "greenville" === Sr ? !(0, Zr.Hb)(rr) : "classic" !== Sr ? ar.has(Sr) : !(0, Wr.l)(rr) && !jr.has((0, Zr.Hb)(rr))
```

#### 1069. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9129` → after: `L9191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9191) · [Before (L9129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9129)

```diff
-   38902: (RR, JR, GR) => {
+   39242: (rr, Sr, Qr) => {
```

#### 1070. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9134-L9139` → after: `L9196-L9202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9196-L9202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9196-L9202) · [Before (L9134-L9139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9134-L9139)

```diff
-       c: () => LR,
-       e: () => XR,
-       i: () => CR,
-       k: () => MR,
-       m: () => qR,
-       p: () => ZR,
+       B: () => tr,
+       d: () => hr,
+       g: () => yr,
+       j: () => Kr,
+       l: () => Br,
+       o: () => Ir,
+       q: () => jr,
```

#### 1071. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9167` → after: `L9229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9229) · [Before (L9167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9167)

```diff
-       return `~${function(RR){return RR.length<2?RR:":"===RR[1]?RR[0]:RR[0]+RR[1]}(JR)}~${RR}`
+       return `~${function(rr){return rr.length<2?rr:":"===rr[1]?rr[0]:rr[0]+rr[1]}(Sr)}~${rr}`
```

#### 1072. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9213` → after: `L9275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9275) · [Before (L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9213)

```diff
-       if (GR <= JR) return `t ${RR}`;
+       if (Qr <= Sr) return `t ${rr}`;
```

#### 1073. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9247` → after: `L9309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9309) · [Before (L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9247)

```diff
-   42411: (RR, JR, GR) => {
+   42741: (rr, Sr, Qr) => {
```

#### 1074. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9275` → after: `L9337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9337) · [Before (L9275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9275)

```diff
-   39956: (RR, JR, GR) => {
+   40304: (rr, Sr, Qr) => {
```

#### 1075. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9277` → after: `L9339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9339) · [Before (L9277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9277)

```diff
-       b: () => uR
+       d: () => ar
```

#### 1076. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9279` → after: `L9341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9341) · [Before (L9279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9279)

```diff
-     var yR = GR(2448);
+     var Zr = Qr(2396);
```

#### 1077. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9283` → after: `L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9345) · [Before (L9283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9283)

```diff
-       const RR = () => (0, yR.w)();
+       const rr = () => (0, Zr.z)();
```

#### 1078. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9285-L9287` → after: `L9347-L9349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9347-L9349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9347-L9349) · [Before (L9285-L9287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9285-L9287)

```diff
-         memoryBytes: () => (0, yR.m)().buffer.byteLength,
-         reserveUpFront: JR => RR().IK(JR),
-         reserveAhead: JR => RR().PK(JR),
+         memoryBytes: () => (0, Zr.s)().buffer.byteLength,
+         reserveUpFront: Sr => rr().gx(Sr),
+         reserveAhead: Sr => rr().Rx(Sr),
```

#### 1079. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9289` → after: `L9351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9351) · [Before (L9289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9289)

```diff
-           RR().mK(JR)
+           rr().Cx(Sr)
```

#### 1080. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9291` → after: `L9353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9353) · [Before (L9291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9291)

```diff
-         lowWater: () => tR[RR().cK()] ?? "none",
+         lowWater: () => Wr[rr().tx()] ?? "none",
```

#### 1081. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9293` → after: `L9355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9355) · [Before (L9293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9293)

```diff
-           const JR = new Uint32Array((0, yR.m)().buffer, RR, 17),
+           const Sr = new Uint32Array((0, Zr.s)().buffer, rr, 17),
```

#### 1082. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9314-L9316` → after: `L9376-L9378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9376-L9378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9376-L9378) · [Before (L9314-L9316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9314-L9316)

```diff
-         }(RR().zK()),
-         takeBallast: () => RR().SK(),
-         takePressure: () => RR().jK()
+         }(rr().Mx()),
+         takeBallast: () => rr().Gx(),
+         takePressure: () => rr().kx()
```

#### 1083. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9320` → after: `L9382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9382) · [Before (L9320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9320)

```diff
-   6084: (RR, JR, GR) => {
+   6007: (rr, Sr, Qr) => {
```

#### 1084. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9323-L9324` → after: `L9385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9385) · [Before (L9323-L9324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9323-L9324)

```diff
-       e: () => ZR,
-       f: () => yR,
+       g: () => jr,
```

#### 1085. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9326-L9327` → after: `L9387-L9388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9387-L9388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9387-L9388) · [Before (L9326-L9327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9326-L9327)

```diff
-       l: () => KR,
-       o: () => tR,
+       k: () => tr,
+       n: () => xr,
```

#### 1086. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9329-L9330` → after: `L9390-L9392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9390-L9392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9390-L9392) · [Before (L9329-L9330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9329-L9330)

```diff
-       t: () => fR,
-       x: () => VR,
+       s: () => ar,
+       v: () => Er,
+       w: () => pr,
```

#### 1087. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9350` → after: `L9412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9412) · [Before (L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9350)

```diff
-         if ("string" !== typeof yR) return `${GR} isn't text.`;
+         if ("string" !== typeof Zr) return `${Qr} isn't text.`;
```

#### 1088. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9359` → after: `L9421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9421) · [Before (L9359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9359)

```diff
-           if (RR.length > qR) return `The pack has more than ${qR} .wgsl files.`;
+           if (rr.length > Ir) return `The pack has more than ${Ir} .wgsl files.`;
```

#### 1089. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9367` → after: `L9429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9429) · [Before (L9367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9367)

```diff
-             if (JR.has(GR)) return `The pack has two files at ${GR}.`;
+             if (Sr.has(Qr)) return `The pack has two files at ${Qr}.`;
```

#### 1090. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9370` → after: `L9432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9432) · [Before (L9370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9370)

```diff
-           return wR(RR) > ZR ? `The pack's .wgsl files are over ${ZR/1024} KB in total.` : null
+           return mr(rr) > jr ? `The pack's .wgsl files are over ${jr/1024} KB in total.` : null
```

#### 1091. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9395-L9398` → after: `L9457-L9460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9457-L9460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9457-L9460) · [Before (L9395-L9398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9395-L9398)

```diff
-       if (!RR.toLowerCase().endsWith(".wgsl")) return `${RR} isn't a .wgsl file.`;
-       if (RR.length > iR) return `A file path is over ${iR} characters.`;
-       if (RR.includes("\\") || /[\u0000-\u001f]/.test(RR)) return `${RR} isn't a valid file path.`;
-       return RR.split("/").some((RR => "" === RR || "." === RR || ".." === RR)) ? `${RR} isn't a valid file path.` : null
+       if (!rr.toLowerCase().endsWith(".wgsl")) return `${rr} isn't a .wgsl file.`;
+       if (rr.length > fr) return `A file path is over ${fr} characters.`;
+       if (rr.includes("\\") || /[\u0000-\u001f]/.test(rr)) return `${rr} isn't a valid file path.`;
+       return rr.split("/").some((rr => "" === rr || "." === rr || ".." === rr)) ? `${rr} isn't a valid file path.` : null
```

#### 1092. `bundles/bloxd.io/chunks/js/wasmPlay.js` (Changed code · before: `L9431` → after: `L9493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9fR9493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fa4d6c99cfa77ba2d5c916de4ec6e21d6d762c633f7d6e63b7ac8c46f873be9f) · [After (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmPlay.js#L9493) · [Before (L9431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmPlay.js#L9431)

```diff
-           return (JR[GR]?.numAnimStates ?? 0) > 1 && !qR.has(yR) ? yR : RR
+           return (Sr[Qr]?.numAnimStates ?? 0) > 1 && !Ir.has(Zr) ? Zr : rr
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmRecorder.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/wasmRecorder.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864)

#### 1. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L4-L5)

```diff
-   64343: (RR, JR, GR) => {
-     RR.exports = GR.p + "static/media/bloxd_wasm_recorder_bg.abf0a8c8735d5f103ccc.wasm"
+   64815: (rr, Sr, Qr) => {
+     rr.exports = Qr.p + "static/media/bloxd_wasm_recorder_bg.f5359b830e339e18ba6d.wasm"
```

#### 2. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L7)

```diff
-   64335: (RR, JR, GR) => {
+   64808: (rr, Sr, Qr) => {
```

#### 3. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L19-L21` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L19-L21) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L19-L21)

```diff
-       vZR: () => tR,
-       GiR: () => vR,
-       HK: () => uR,
+       Cjr: () => Wr,
+       Efr: () => Xr,
+       HE: () => ar,
```

#### 4. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L24-L26` → after: `L24-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L24-L26) · [Before (L24-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L24-L26)

```diff
-       oK: () => ZR,
-       gZR: () => qR,
-       AZR: () => iR
+       ip: () => jr,
+       Rjr: () => Ir,
+       Ojr: () => fr
```

#### 5. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L35)

```diff
-         BR.IZKb(RR, 0)
+         Tr.WUYS(rr, 0)
```

#### 6. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L38)

```diff
-         return 0 !== BR.a9dM(this.__wbg_ptr)
+         return 0 !== Tr.kbZ0(this.__wbg_ptr)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L41-L59` → after: `L41-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L41-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L41-L59) · [Before (L41-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L41-L59)

```diff
-         return 0 !== BR.YUzY(this.__wbg_ptr, RR, JR)
-       }
-       CZR(RR) {
-         return BR.rwOF(this.__wbg_ptr, RR) >>> 0
-       }
-       WZR() {
-         BR.ySGR(this.__wbg_ptr)
-       }
-       UZR() {
-         return BR.iSsS(this.__wbg_ptr) >>> 0
-       }
-       nZR() {
-         return BR.cQto(this.__wbg_ptr)
-       }
-       BZR() {
-         return BR.BetY(this.__wbg_ptr) >>> 0
- ... (3 more removed lines; see GitHub link above)
+         return 0 !== Tr.F4bQ(this.__wbg_ptr, rr, Sr)
+       }
+       Ljr(rr) {
+         return Tr.WIJm(this.__wbg_ptr, rr) >>> 0
+       }
+       vjr() {
+         Tr.WF2N(this.__wbg_ptr)
+       }
+       Tjr() {
+         return Tr.ABz1(this.__wbg_ptr) >>> 0
+       }
+       yjr() {
+         return Tr.Uonh(this.__wbg_ptr)
+       }
+       Pjr() {
+         return Tr.g0p0(this.__wbg_ptr) >>> 0
+ ... (3 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L62)

```diff
-         return BR.stUw(this.__wbg_ptr, RR) >>> 0
+         return Tr.y2oM(this.__wbg_ptr, rr) >>> 0
```

#### 9. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L65)

```diff
-         const RR = BR.qVlU();
+         const rr = Tr.C8Z9();
```

#### 10. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L68-L75` → after: `L68-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L68-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L68-L75) · [Before (L68-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L68-L75)

```diff
-       MZR() {
-         return BR.STlR(this.__wbg_ptr) >>> 0
-       }
-       yiR() {
-         return BR.RyNC(this.__wbg_ptr) >>> 0
-       }
-       LZR(RR, JR, GR) {
-         return 0 !== BR.qCeT(this.__wbg_ptr, RR, JR, GR)
+       Xjr() {
+         return Tr.n4dt(this.__wbg_ptr) >>> 0
+       }
+       pfr() {
+         return Tr.tgn8(this.__wbg_ptr) >>> 0
+       }
+       Kjr(rr, Sr, Qr) {
+         return 0 !== Tr.vfZv(this.__wbg_ptr, rr, Sr, Qr)
```

#### 11. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L78)

```diff
-         return BR.j3gb(this.__wbg_ptr, RR) >>> 0
+         return Tr.Bnzg(this.__wbg_ptr, rr) >>> 0
```

#### 12. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L81)

```diff
-         return BR.sxJx(this.__wbg_ptr) >>> 0
+         return Tr.Y27G(this.__wbg_ptr) >>> 0
```

#### 13. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L107)

```diff
-         }(RR, BR.mp7v, BR.hl4r),
+         }(rr, Tr.I9Tm, Tr.cBEG),
```

#### 14. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L109)

```diff
-         tR = BR.XH8V(GR, yR, JR);
+         Wr = Tr.IheL(Qr, Zr, Sr);
```

#### 15. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L114-L122` → after: `L114-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L114-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L114-L122) · [Before (L114-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L114-L122)

```diff
-       BR.AWWD()
-     }
- 
-     function qR() {
-       return BR.E6nY() >>> 0
-     }
- 
-     function iR() {
-       return nR(BR.iNPq())
+       Tr.hYWI()
+     }
+ 
+     function Ir() {
+       return Tr.qGvy() >>> 0
+     }
+ 
+     function fr() {
+       return zr(Tr.l8cP())
```

#### 16. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L128)

```diff
-         pT7H: {
+         cKxT: {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L130)

```diff
-           C16B: function(RR, JR) {
+           ZmCF: function(rr, Sr) {
```

#### 18. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L133)

```diff
-           S7th: function() {
+           ORnr: function() {
```

#### 19. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L136)

```diff
-           OcIc: function(RR, JR) {
+           g1KC: function(rr, Sr) {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L139)

```diff
-           pe2e: function(RR, JR) {
+           PEwc: function(rr, Sr) {
```

#### 21. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L142)

```diff
-           jDhP: function() {
+           KTum: function() {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L204)

```diff
-       return MR = RR, BR = RR.exports, XR = JR, rR = null, BR.YhGr(), BR
+       return Br = rr, Tr = rr.exports, yr = Sr, Nr = null, Tr.TpM8(), Tr
```

#### 23. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L228)

```diff
-           if (!RR.ok) throw new Error(`failed to fetch Wasm: ${RR.status} ${RR.statusText} fetching '${RR.url}'`);
+           if (!rr.ok) throw new Error(`failed to fetch Wasm: ${rr.status} ${rr.statusText} fetching '${rr.url}'`);
```

#### 24. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L259-L260)

```diff
-     var OR = GR(2457),
-       xR = GR(7762);
+     var Pr = Qr(2398),
+       Hr = Qr(7577);
```

#### 25. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L265)

```diff
-         super((0, OR.z)(RR, JR), {
+         super((0, Pr.F)(rr, Sr), {
```

#### 26. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L279` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L279) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L279)

```diff
-           return GR = JR ??= (0, OR.A)(RR.url(), (0, xR.c)(RR.name)), await GR
+           return Qr = Sr ??= (0, Pr.I)(rr.url(), (0, Hr.c)(rr.name)), await Qr
```

#### 27. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L281)

```diff
-           throw JR === GR && (JR = null), RR.error((0, OR.E)(yR), yR)
+           throw Sr === Qr && (Sr = null), rr.error((0, Pr.M)(Zr), Zr)
```

#### 28. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L315)

```diff
-       url: () => new GR.U(GR(64343)),
+       url: () => new Qr.U(Qr(64815)),
```

#### 29. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L348)

```diff
-   7762: (RR, JR, GR) => {
+   7577: (rr, Sr, Qr) => {
```

#### 30. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L352)

```diff
-     var yR = GR(2457);
+     var Zr = Qr(2398);
```

#### 31. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L354-L365` → after: `L354-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L354-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L354-L365) · [Before (L354-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L354-L365)

```diff
-       bloxd_wasm: () => "31dc7d689c00e0ba537ee7f626a34d0004a848135d46f08eb518035abee4bd78",
-       bloxd_wasm_client: () => "3b6f626c672c16835e48be6eda2b8710ce7ef029c244b4a5763ca9c72afd1b15",
-       bloxd_wasm_workers: () => "57abc294db658237bc7d99b35bd3f29743c220eedebc8ac3f7feffe93ef605d9",
-       bloxd_wasm_models: () => "91848043cbb1596bc2da50dc271a4cd1d5748938f8eaa4bb6e2a97c3115313e3",
-       bloxd_wasm_webgpu: () => "f945f7dfcd84e1c2443e02ed24bd7fc26f3a25462a20b367dbcf6b52367ae837",
-       bloxd_wasm_webgl: () => "9fbafd6231ee584775c304827d74014f8c15cff0854a0975bc3b6d00259cb13b",
-       bloxd_wasm_webgl1: () => "23c52ed9fe5a4512122e2f73d5ee88fdaeeb108903994541446badd1fee1bb4c",
-       bloxd_wasm_replay: () => "972e1c6128c0d1cd8598ec680bedb57345cf87b953e82efa23119df1c888426d",
-       bloxd_wasm_recorder: () => "c168224dbeb3a34221482e3a0ad41a3c0ebe14db31539da9b26d296033e9fb3d",
-       bloxd_wasm_anim: () => "3cc08cf0d193225c4efab3299a0dd42815a95a9b8b44e2d5957de0a151ae7db3",
-       bloxd_wasm_textures: () => "78779f7faa55b7ab66454ef9cac79a3b6156f91b60fc795d24d615f3dca40e19",
-       bloxd_wasm_shader_pack: () => "2aca035dd9675be55a94be3cc38a846b93983e04d5e35b062d6e7f0e268c5303"
+       bloxd_wasm: () => "0c8b86ea7f87e28f201c328dade5c6244d58a98edf5279fe5c0ea9b57062f385",
+       bloxd_wasm_client: () => "299c35eb71d5d037788ea25f6b7287e40485e2a6ed22851efd5823593ae5be1b",
+       bloxd_wasm_workers: () => "eaeeb1e1d8f554dcf56047201f83b3954f1d231f54df5846dca6de7c92e59bde",
+       bloxd_wasm_models: () => "dc6d52b18d6afa3461a33750f7f1f0c757dbae6ea30bca3991affab56fad42de",
+       bloxd_wasm_webgpu: () => "4397e4e2e7e494aef2a757d6873b432cca5ceac83c5a3e54dd330b4ece9ba81a",
+       bloxd_wasm_webgl: () => "e3e0bf0da073da5cd2c55227a812527d1d5b4fd38f91e8c71b70364278ad47cf",
+       bloxd_wasm_webgl1: () => "6b69ab072c5f9793e3fee3b1fa30c246fb689a2400aefd7f486fe41358e364e5",
+       bloxd_wasm_replay: () => "f884251e5cfbdf122fa0e4c2746c9cc8bb3465ab2dcf3e9877f29ba5868851b0",
+       bloxd_wasm_recorder: () => "92aabaf952eabf5eb693775f1095c77a6582e07a32896291ede0cd044a026b22",
+       bloxd_wasm_anim: () => "74e18404f7ee650a703373595c2a2a131482e1a0dcb950788bac36e01714fec0",
+       bloxd_wasm_textures: () => "4752f813d0338c3727c1127168df7e6c13b50988f32409a906ecc533947797ed",
+       bloxd_wasm_shader_pack: () => "bc15fb00e7a581fb79301bdbfc659bdbc7ccbe7b0e189b588edf35cbec796fbe"
```

#### 32. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L367)

```diff
-     var uR = GR(5554);
+     var ar = Qr(5498);
```

#### 33. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L373)

```diff
-         onMismatch: uR.E
+         onMismatch: ar.F
```

#### 34. `bundles/bloxd.io/chunks/js/wasmRecorder.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-04e0faf9f5256762654ae5b17ec421a989cf4685ad31f737075dd3428efc6864) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmRecorder.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmRecorder.js#L375)

```diff
-       throw new yR.g(`${RR} has no release digest, so this build refuses it`)
+       throw new Zr.g(`${rr} has no release digest, so this build refuses it`)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmReplay.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/wasmReplay.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581)

#### 1. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L4-L5)

```diff
-   64357: (RR, JR, GR) => {
-     RR.exports = GR.p + "static/media/bloxd_wasm_replay_bg.547b5be7aba9dc782cfc.wasm"
+   64827: (rr, Sr, Qr) => {
+     rr.exports = Qr.p + "static/media/bloxd_wasm_replay_bg.860cd0e877c2f616376e.wasm"
```

#### 2. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L7)

```diff
-   7762: (RR, JR, GR) => {
+   7577: (rr, Sr, Qr) => {
```

#### 3. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L11)

```diff
-     var yR = GR(2457);
+     var Zr = Qr(2398);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L13-L24` → after: `L13-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L13-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L13-L24) · [Before (L13-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L13-L24)

```diff
-       bloxd_wasm: () => "31dc7d689c00e0ba537ee7f626a34d0004a848135d46f08eb518035abee4bd78",
-       bloxd_wasm_client: () => "3b6f626c672c16835e48be6eda2b8710ce7ef029c244b4a5763ca9c72afd1b15",
-       bloxd_wasm_workers: () => "57abc294db658237bc7d99b35bd3f29743c220eedebc8ac3f7feffe93ef605d9",
-       bloxd_wasm_models: () => "91848043cbb1596bc2da50dc271a4cd1d5748938f8eaa4bb6e2a97c3115313e3",
-       bloxd_wasm_webgpu: () => "f945f7dfcd84e1c2443e02ed24bd7fc26f3a25462a20b367dbcf6b52367ae837",
-       bloxd_wasm_webgl: () => "9fbafd6231ee584775c304827d74014f8c15cff0854a0975bc3b6d00259cb13b",
-       bloxd_wasm_webgl1: () => "23c52ed9fe5a4512122e2f73d5ee88fdaeeb108903994541446badd1fee1bb4c",
-       bloxd_wasm_replay: () => "972e1c6128c0d1cd8598ec680bedb57345cf87b953e82efa23119df1c888426d",
-       bloxd_wasm_recorder: () => "c168224dbeb3a34221482e3a0ad41a3c0ebe14db31539da9b26d296033e9fb3d",
-       bloxd_wasm_anim: () => "3cc08cf0d193225c4efab3299a0dd42815a95a9b8b44e2d5957de0a151ae7db3",
-       bloxd_wasm_textures: () => "78779f7faa55b7ab66454ef9cac79a3b6156f91b60fc795d24d615f3dca40e19",
-       bloxd_wasm_shader_pack: () => "2aca035dd9675be55a94be3cc38a846b93983e04d5e35b062d6e7f0e268c5303"
+       bloxd_wasm: () => "0c8b86ea7f87e28f201c328dade5c6244d58a98edf5279fe5c0ea9b57062f385",
+       bloxd_wasm_client: () => "299c35eb71d5d037788ea25f6b7287e40485e2a6ed22851efd5823593ae5be1b",
+       bloxd_wasm_workers: () => "eaeeb1e1d8f554dcf56047201f83b3954f1d231f54df5846dca6de7c92e59bde",
+       bloxd_wasm_models: () => "dc6d52b18d6afa3461a33750f7f1f0c757dbae6ea30bca3991affab56fad42de",
+       bloxd_wasm_webgpu: () => "4397e4e2e7e494aef2a757d6873b432cca5ceac83c5a3e54dd330b4ece9ba81a",
+       bloxd_wasm_webgl: () => "e3e0bf0da073da5cd2c55227a812527d1d5b4fd38f91e8c71b70364278ad47cf",
+       bloxd_wasm_webgl1: () => "6b69ab072c5f9793e3fee3b1fa30c246fb689a2400aefd7f486fe41358e364e5",
+       bloxd_wasm_replay: () => "f884251e5cfbdf122fa0e4c2746c9cc8bb3465ab2dcf3e9877f29ba5868851b0",
+       bloxd_wasm_recorder: () => "92aabaf952eabf5eb693775f1095c77a6582e07a32896291ede0cd044a026b22",
+       bloxd_wasm_anim: () => "74e18404f7ee650a703373595c2a2a131482e1a0dcb950788bac36e01714fec0",
+       bloxd_wasm_textures: () => "4752f813d0338c3727c1127168df7e6c13b50988f32409a906ecc533947797ed",
+       bloxd_wasm_shader_pack: () => "bc15fb00e7a581fb79301bdbfc659bdbc7ccbe7b0e189b588edf35cbec796fbe"
```

#### 5. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L26)

```diff
-     var uR = GR(5554);
+     var ar = Qr(5498);
```

#### 6. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L32)

```diff
-         onMismatch: uR.E
+         onMismatch: ar.F
```

#### 7. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L34)

```diff
-       throw new yR.g(`${RR} has no release digest, so this build refuses it`)
+       throw new Zr.g(`${rr} has no release digest, so this build refuses it`)
```

#### 8. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L37)

```diff
-   64348: (RR, JR, GR) => {
+   64824: (rr, Sr, Qr) => {
```

#### 9. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L47-L49` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L47-L49) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L47-L49)

```diff
-       xZR: () => tR,
-       GiR: () => OR,
-       HK: () => uR,
+       Gjr: () => Wr,
+       Efr: () => Pr,
+       HE: () => ar,
```

#### 10. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L52-L54` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L52-L54) · [Before (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L52-L54)

```diff
-       oK: () => ZR,
-       gZR: () => qR,
-       NZR: () => iR
+       ip: () => jr,
+       Rjr: () => Ir,
+       kjr: () => fr
```

#### 11. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L63-L66` → after: `L63-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L63-L66) · [Before (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L63-L66)

```diff
-         lR.d11U(RR, 0)
-       }
-       PZR(RR, JR, GR, yR, tR, uR) {
-         lR.df3w(this.__wbg_ptr, RR, JR, GR, yR, tR, uR)
+         vr.vkxj(rr, 0)
+       }
+       wjr(rr, Sr, Qr, Zr, Wr, ar) {
+         vr.lvz0(this.__wbg_ptr, rr, Sr, Qr, Zr, Wr, ar)
```

#### 12. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L69)

```diff
-         lR.A5dd(this.__wbg_ptr)
+         vr.VL0L(this.__wbg_ptr)
```

#### 13. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L72-L90` → after: `L72-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L72-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L72-L90) · [Before (L72-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L72-L90)

```diff
-         lR.iQJZ(this.__wbg_ptr, RR, JR)
-       }
-       zZR(RR, JR) {
-         lR.W2K5(this.__wbg_ptr, RR, JR)
-       }
-       jZR() {
-         return lR.QdSl(this.__wbg_ptr) >>> 0
-       }
-       SZR() {
-         return lR.XTlY(this.__wbg_ptr) >>> 0
-       }
-       dZR() {
-         return lR.RBb8(this.__wbg_ptr) >>> 0
-       }
-       EZR() {
-         return lR.G7o6(this.__wbg_ptr) >>> 0
- ... (3 more removed lines; see GitHub link above)
+         vr.iyiL(this.__wbg_ptr, rr, Sr)
+       }
+       bjr(rr, Sr) {
+         vr.DjWb(this.__wbg_ptr, rr, Sr)
+       }
+       Djr() {
+         return vr.vJ3X(this.__wbg_ptr) >>> 0
+       }
+       Jjr() {
+         return vr.oBrn(this.__wbg_ptr) >>> 0
+       }
+       djr() {
+         return vr.GdHs(this.__wbg_ptr) >>> 0
+       }
+       ujr() {
+         return vr.FoEU(this.__wbg_ptr) >>> 0
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L93)

```diff
-         const RR = lR.FJIm();
+         const rr = vr.QXcA();
```

#### 15. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L97-L100` → after: `L97-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L97-L100) · [Before (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L97-L100)

```diff
-         lR.MkdV(this.__wbg_ptr)
-       }
-       MZR() {
-         return lR.X6Zm(this.__wbg_ptr) >>> 0
+         vr.kZzq(this.__wbg_ptr)
+       }
+       Xjr() {
+         return vr.StfA(this.__wbg_ptr) >>> 0
```

#### 16. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L103)

```diff
-         lR.WgJ1(this.__wbg_ptr)
+         vr.uGIA(this.__wbg_ptr)
```

#### 17. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L106)

```diff
-         lR.HiHc(this.__wbg_ptr)
+         vr.fNWx(this.__wbg_ptr)
```

#### 18. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L109-L112` → after: `L109-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L109-L112) · [Before (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L109-L112)

```diff
-         return lR.kBKw(this.__wbg_ptr) >>> 0
-       }
-       YZR() {
-         lR.KCa1(this.__wbg_ptr)
+         return vr.RyCt(this.__wbg_ptr) >>> 0
+       }
+       rIr() {
+         vr.Elf7(this.__wbg_ptr)
```

#### 19. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L115-L120` → after: `L115-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L115-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L115-L120) · [Before (L115-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L115-L120)

```diff
-         lR.wayX(this.__wbg_ptr, RR, JR)
-       }
-       QZR(RR) {
-         lR.fxXN(this.__wbg_ptr, RR)
-       }
-       IZR(RR, JR) {
+         vr.iEs5(this.__wbg_ptr, rr, Sr)
+       }
+       QIr(rr) {
+         vr.aHui(this.__wbg_ptr, rr)
+       }
+       cjr(rr, Sr) {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L127)

```diff
-           }(JR, lR.OYjn),
+           }(Sr, vr.NziH),
```

#### 21. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L129-L135` → after: `L129-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L129-L135) · [Before (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L129-L135)

```diff
-         lR.PAAb(this.__wbg_ptr, RR, GR, yR)
-       }
-       cZR(RR, JR) {
-         lR.EO0H(this.__wbg_ptr, RR, JR)
-       }
-       kZR(RR) {
-         lR.uNHK(this.__wbg_ptr, RR)
+         vr.F9si(this.__wbg_ptr, rr, Qr, Zr)
+       }
+       ijr(rr, Sr) {
+         vr.LSLu(this.__wbg_ptr, rr, Sr)
+       }
+       SIr(rr) {
+         vr.w9Kl(this.__wbg_ptr, rr)
```

#### 22. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L138)

```diff
-         return lR.ra9W(this.__wbg_ptr, RR) >>> 0
+         return vr.sQWX(this.__wbg_ptr, rr) >>> 0
```

#### 23. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L141)

```diff
-         return lR.pWAM(this.__wbg_ptr, RR, JR) >>> 0
+         return vr.xVYn(this.__wbg_ptr, rr, Sr) >>> 0
```

#### 24. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L167)

```diff
-         }(RR, lR.OYjn, lR.q9Ov),
+         }(rr, vr.NziH, vr.AXWx),
```

#### 25. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L169)

```diff
-         tR = lR.wuWY(GR, yR, JR);
+         Wr = vr.xgH7(Qr, Zr, Sr);
```

#### 26. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L174-L182` → after: `L174-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L174-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L174-L182) · [Before (L174-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L174-L182)

```diff
-       lR.nCoM()
-     }
- 
-     function qR() {
-       return lR.ooOE() >>> 0
-     }
- 
-     function iR() {
-       return UR(lR.Fv70())
+       vr.ZAgD()
+     }
+ 
+     function Ir() {
+       return vr.lGzk() >>> 0
+     }
+ 
+     function fr() {
+       return Yr(vr.hysy())
```

#### 27. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L188)

```diff
-         ZZFq: {
+         oPxw: {
```

#### 28. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L190)

```diff
-           AMzf: function(RR, JR) {
+           Snw8: function(rr, Sr) {
```

#### 29. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L193)

```diff
-           kqIg: function() {
+           kk0o: function() {
```

#### 30. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L196)

```diff
-           haMa: function(RR, JR) {
+           P1F0: function(rr, Sr) {
```

#### 31. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L199)

```diff
-           Lo33: function(RR, JR) {
+           MHQf: function(rr, Sr) {
```

#### 32. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L202` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L202) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L202)

```diff
-           GP1j: function() {
+           zTd5: function() {
```

#### 33. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L265)

```diff
-       return BR = RR, lR = RR.exports, MR = JR, wR = null, eR = null, lR.PM74(), lR
+       return Tr = rr, vr = rr.exports, Br = Sr, mr = null, Ur = null, vr.ktA6(), vr
```

#### 34. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L289)

```diff
-           if (!RR.ok) throw new Error(`failed to fetch Wasm: ${RR.status} ${RR.statusText} fetching '${RR.url}'`);
+           if (!rr.ok) throw new Error(`failed to fetch Wasm: ${rr.status} ${rr.statusText} fetching '${rr.url}'`);
```

#### 35. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L320-L321` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L320-L321) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L320-L321)

```diff
-     var xR = GR(2457),
-       NR = GR(7762);
+     var Hr = Qr(2398),
+       qr = Qr(7577);
```

#### 36. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L325)

```diff
-         super((0, xR.z)(RR, JR), {
+         super((0, Hr.F)(rr, Sr), {
```

#### 37. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L344)

```diff
-           await JR, HR ??= (0, xR.A)(new GR.U(GR(64357)), (0, NR.c)("bloxd_wasm_replay"));
+           await Sr, gr ??= (0, Hr.I)(new Qr.U(Qr(64827)), (0, qr.c)("bloxd_wasm_replay"));
```

#### 38. `bundles/bloxd.io/chunks/js/wasmReplay.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-32ab818058f1fafb5b3069f9592a4825eb296a945c90bcb1c2773cb3b93fa581) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplay.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplay.js#L348)

```diff
-             throw HR = null, new DR((0, xR.E)(uR), uR)
+             throw gr = null, new Rr((0, Hr.M)(ar), ar)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (99 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d)

#### 1. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L4)

```diff
-   38101: (RR, JR, GR) => {
+   38450: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L6)

```diff
-       c: () => KR,
+       d: () => xr,
```

#### 3. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L9-L11)

```diff
-     var yR = GR(679),
-       tR = GR(46),
-       uR = GR(38053);
+     var Zr = Qr(688),
+       Wr = Qr(43),
+       ar = Qr(38411);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L24)

```diff
-         fR = await Promise.race([(async () => await tR.g.setItem(qR, GR) && tR.g.setItem(ZR, uR))(), (0, yR.T)(VR).then((() => !1))]);
+         Er = await Promise.race([(async () => await Wr.h.setItem(Ir, Qr) && Wr.h.setItem(jr, ar))(), (0, Zr.T)(pr).then((() => !1))]);
```

#### 5. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L28)

```diff
-         tK: fR
+         sp: Er
```

#### 6. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L30)

```diff
-       tR.k.setItem(iR, KR)
+       Wr.n.setItem(fr, xr)
```

#### 7. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L34-L35` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L34-L35) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L34-L35)

```diff
-       const JR = tR.k.getItem(iR);
-       null !== JR && tR.k.removeItem(iR);
+       const Sr = Wr.n.getItem(fr);
+       null !== Sr && Wr.n.removeItem(fr);
```

#### 8. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L37)

```diff
-         yR = await tR.g.getItem(qR),
+         Zr = await Wr.h.getItem(Ir),
```

#### 9. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L41)

```diff
-       if (null !== yR && (KR || ("number" !== typeof yR || GR - yR > fR)) && (wR = VR && KR && JR.tK ? await tR.g.getItem(ZR) : null, await Promise.all([tR.g.removeItem(qR), tR.g.removeItem(ZR)])), !VR) return null;
+       if (null !== Zr && (xr || ("number" !== typeof Zr || Qr - Zr > Er)) && (mr = pr && xr && Sr.sp ? await Wr.h.getItem(jr) : null, await Promise.all([Wr.h.removeItem(Ir), Wr.h.removeItem(jr)])), !pr) return null;
```

#### 10. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L49)

```diff
-   38094: (RR, JR, GR) => {
+   38446: (rr, Sr, Qr) => {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L52-L53` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L53) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L52-L53)

```diff
-       g: () => uR,
-       k: () => tR
+       f: () => Wr
```

#### 12. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L65)

```diff
-   38053: (RR, JR, GR) => {
+   38411: (rr, Sr, Qr) => {
```

#### 13. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L68-L69` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L68-L69) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L68-L69)

```diff
-       e: () => fR,
-       i: () => iR
+       f: () => Er,
+       h: () => fr
```

#### 14. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L71)

```diff
-     var yR = GR(32);
+     var Zr = Qr(34);
```

#### 15. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L173-L174` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L173-L174) · [Before (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L173-L174)

```diff
-       const GR = null !== (JR = RR.timeoutMs) && void 0 !== JR ? JR : "Error" === RR.type ? tR : uR;
-       yR.n.JK("showBottomMessage", {
+       const Qr = null !== (Sr = rr.timeoutMs) && void 0 !== Sr ? Sr : "Error" === rr.type ? Wr : ar;
+       Zr.i.Jp("showBottomMessage", {
```

#### 16. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L181)

```diff
-   38112: (RR, JR, GR) => {
+   38462: (rr, Sr, Qr) => {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L183-L184` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L183-L184) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L183-L184)

```diff
-       e: () => yR,
-       h: () => tR
+       d: () => Zr,
+       e: () => Wr
```

#### 18. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L237)

```diff
-   38116: (RR, JR, GR) => {
+   38464: (rr, Sr, Qr) => {
```

#### 19. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L239-L241` → after: `L239-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L239-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L239-L241) · [Before (L239-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L239-L241)

```diff
-       e: () => fR,
-       f: () => KR,
-       i: () => VR
+       c: () => Er,
+       d: () => xr,
+       e: () => pr
```

#### 20. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L243-L245` → after: `L243-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L243-L245) · [Before (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L243-L245)

```diff
-     var yR = GR(25),
-       tR = GR(32),
-       uR = GR(38112);
+     var Zr = Qr(26),
+       Wr = Qr(34),
+       ar = Qr(38462);
```

#### 21. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L252)

```diff
-         of uR.h) RR[JR] = !0;
+         of ar.e) rr[Sr] = !0;
```

#### 22. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L258)

```diff
-       tR.n.JK("replayViewer|uiVisibilityChanged")
+       Wr.i.Jp("replayViewer|uiVisibilityChanged")
```

#### 23. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L269)

```diff
-       }, "nametag" === RR && yR.d.set({
+       }, "nametag" === rr && Zr.c.set({
```

#### 24. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L275)

```diff
-       qR = ZR(), yR.d.set({
+       Ir = jr(), Zr.c.set({
```

#### 25. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L280)

```diff
-   40530: (RR, JR, GR) => {
+   40828: (rr, Sr, Qr) => {
```

#### 26. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L282)

```diff
-       e: () => vR
+       c: () => Xr
```

#### 27. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L284-L287` → after: `L284-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L284-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L284-L287) · [Before (L284-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L284-L287)

```diff
-     var yR = GR(1963),
-       tR = GR(1493),
-       uR = GR(66),
-       ZR = GR(1163),
+     var Zr = Qr(1904),
+       Wr = Qr(1475),
+       ar = Qr(72),
+       jr = Qr(1155),
```

#### 28. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L289-L290` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L289-L290) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L289-L290)

```diff
-       iR = GR(1590),
-       fR = GR(103);
+       fr = Qr(1576),
+       Er = Qr(109);
```

#### 29. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L295` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L295) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L295)

```diff
-       return "webm" === RR ? VR : KR
+       return "webm" === rr ? pr : xr
```

#### 30. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L307` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L307) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L307)

```diff
-     var aR = GR(1378);
+     var tr = Qr(1338);
```

#### 31. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L376)

```diff
-             children: `Your device does not support exporting. Try recording with an external software like ${RR}.`
+             children: `Your device does not support exporting. Try recording with an external software like ${rr}.`
```

#### 32. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L379)

```diff
-             children: (0, aR.jsx)(iR.M, {
+             children: (0, tr.jsx)(fr.L, {
```

#### 33. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L451)

```diff
-           children: [(0, aR.jsx)(iR.n, {
+           children: [(0, tr.jsx)(fr.p, {
```

#### 34. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L461)

```diff
-           }), (0, aR.jsx)(iR.M, {
+           }), (0, tr.jsx)(fr.L, {
```

#### 35. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L471-L473` → after: `L471-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L471-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L471-L473) · [Before (L471-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L471-L473)

```diff
-     var AR = GR(5742),
-       CR = GR(38112),
-       XR = GR(38116);
+     var er = Qr(5681),
+       Kr = Qr(38462),
+       yr = Qr(38464);
```

#### 36. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L478)

```diff
-         const RR = (0, XR.e)();
+         const rr = (0, yr.c)();
```

#### 37. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L483` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L483) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L483)

```diff
-           of CR.h)
+           of Kr.e)
```

#### 38. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L512)

```diff
-     var pR = GR(40333);
+     var Or = Qr(40646);
```

#### 39. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L520)

```diff
-       if ((0, pR.b)() || gR) return;
+       if ((0, Or.e)() || Lr) return;
```

#### 40. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L562` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L562) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L562)

```diff
-       const VR = null !== (JR = null === (GR = uR.startFailure) || void 0 === GR ? void 0 : GR.call(uR)) && void 0 !== JR ? JR : null;
+       const pr = null !== (Sr = null === (Qr = ar.startFailure) || void 0 === Qr ? void 0 : Qr.call(ar)) && void 0 !== Sr ? Sr : null;
```

#### 41. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L568)

```diff
-           return !(0, pR.b)() && ((0, pR.f)(!0), RR.holdInput(!0), !0)
+           return !(0, Or.e)() && ((0, Or.f)(!0), rr.holdInput(!0), !0)
```

#### 42. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L572` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L572) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L572)

```diff
-         KR = await lR(ZR.includeUi, (() => uR.canvas()), uR.lH)
+         xr = await vr(jr.includeUi, (() => ar.canvas()), ar.pC)
```

#### 43. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L585` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L585) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L585)

```diff
-         eR = uR.playbackSpeed(), uR.closeViewer(), uR.setPlaybackSpeed(1), uR.pause(), uR.seekToTick(null !== qR && void 0 !== qR ? qR : 0);
+         Ur = ar.playbackSpeed(), ar.closeViewer(), ar.setPlaybackSpeed(1), ar.pause(), ar.seekToTick(null !== Ir && void 0 !== Ir ? Ir : 0);
```

#### 44. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L593)

```diff
-           return null !== GR && void 0 !== GR ? GR : null
+           return null !== Qr && void 0 !== Qr ? Qr : null
```

#### 45. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L600` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L600) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L600)

```diff
-           if (!JR) throw new Error(`No MediaRecorder mime type available for ${RR}`);
+           if (!Sr) throw new Error(`No MediaRecorder mime type available for ${rr}`);
```

#### 46. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L643` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L643) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L643)

```diff
-         const VR = null !== (XR = null === (vR = uR.playbackFailure) || void 0 === vR ? void 0 : vR.call(uR)) && void 0 !== XR ? XR : null;
+         const pr = null !== (yr = null === (Xr = ar.playbackFailure) || void 0 === Xr ? void 0 : Xr.call(ar)) && void 0 !== yr ? yr : null;
```

#### 47. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L646` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L646) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L646)

```diff
-           subtitle: `${VR} Nothing was saved.`
+           subtitle: `${pr} Nothing was saved.`
```

#### 48. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L651` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L651) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L651)

```diff
-         aR.size > 0 ? (0, yR.e)(aR, function(RR, JR) {
+         tr.size > 0 ? (0, Zr.c)(tr, function(rr, Sr) {
```

#### 49. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L655-L656` → after: `L655-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L655-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L655-L656) · [Before (L655-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L655-L656)

```diff
-           if (RR) return `${RR.replace(/\.bloxdreplay$/i,"")}.${GR}`;
-           return `bloxd-replay-${Date.now()}.${GR}`
+           if (rr) return `${rr.replace(/\.bloxdreplay$/i,"")}.${Qr}`;
+           return `bloxd-replay-${Date.now()}.${Qr}`
```

#### 50. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L689)

```diff
-   5742: (RR, JR, GR) => {
+   5681: (rr, Sr, Qr) => {
```

#### 51. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L696-L698` → after: `L696-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L696-L698) · [Before (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L696-L698)

```diff
-     var yR, tR = GR(5744),
-       uR = GR(4757),
-       ZR = GR(5456);
+     var Zr, Wr = Qr(5689),
+       ar = Qr(4681),
+       jr = Qr(5413);
```

#### 52. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L703` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L703) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L703)

```diff
-       if (qR.ctx || !qR.usingWebAudio || "undefined" === typeof AudioContext || !(0, ZR.h)()) return;
+       if (Ir.ctx || !Ir.usingWebAudio || "undefined" === typeof AudioContext || !(0, jr.i)()) return;
```

#### 53. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L715` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L715) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L715)

```diff
-       tR.gain.setValueAtTime(qR._muted ? 0 : null !== (RR = qR._volume) && void 0 !== RR ? RR : 1, yR.currentTime), tR.connect(yR.destination), qR.ctx = yR, qR.masterGain = tR, null === (JR = qR._setup) || void 0 === JR || JR.call(qR)
+       Wr.gain.setValueAtTime(Ir._muted ? 0 : null !== (rr = Ir._volume) && void 0 !== rr ? rr : 1, Zr.currentTime), Wr.connect(Zr.destination), Ir.ctx = Zr, Ir.masterGain = Wr, null === (Sr = Ir._setup) || void 0 === Sr || Sr.call(Ir)
```

#### 54. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L742)

```diff
-     }, (0, ZR.h)() && (qR._unlockAudio = () => {
+     }, (0, jr.i)() && (Ir._unlockAudio = () => {
```

#### 55. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L767)

```diff
-           } else "afterPaint" === yR && (yR = "queued", (0, uR.d)(JR.timeStamp, (() => {
+           } else "afterPaint" === Zr && (Zr = "queued", (0, ar.e)(Sr.timeStamp, (() => {
```

#### 56. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L775` → after: `L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L775) · [Before (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L775)

```diff
-       for (const uR of ZR.b) document.addEventListener(uR, fR, {
+       for (const ar of jr.c) document.addEventListener(ar, Er, {
```

#### 57. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L809)

```diff
-   54582: (RR, JR, GR) => {
+   55093: (rr, Sr, Qr) => {
```

#### 58. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L811-L812` → after: `L811-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L811-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L811-L812) · [Before (L811-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L811-L812)

```diff
-       d: () => yR,
-       g: () => tR
+       c: () => Zr,
+       d: () => Wr
```

#### 59. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L821` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L821) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L821)

```diff
-   64119: (RR, JR, GR) => {
+   64584: (rr, Sr, Qr) => {
```

#### 60. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L826-L831` → after: `L826-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L826-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L826-L831) · [Before (L826-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L826-L831)

```diff
-     var yR = GR(38053),
-       tR = GR(38101),
-       uR = GR(38094),
-       ZR = GR(38116),
-       qR = GR(5676),
-       iR = GR(54582);
+     var Zr = Qr(38411),
+       Wr = Qr(38450),
+       ar = Qr(38446),
+       jr = Qr(38464),
+       Ir = Qr(5610),
+       fr = Qr(55093);
```

#### 61. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L833)

```diff
-       VR = new Set(["Be"]);
+       pr = new Set(["zU"]);
```

#### 62. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L837)

```diff
-         this.deps = RR, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
+         this.deps = rr, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this … [truncated]
```

#### 63. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L846)

```diff
-         return null !== this.lastView && this.lastView.state !== qR.ld.None
+         return null !== this.lastView && this.lastView.state !== Ir.yd.None
```

#### 64. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L876)

```diff
-           KR = await fR.open(RR, (() => (0, tR.c)(RR, JR)))
+           xr = await Er.open(rr, (() => (0, Wr.d)(rr, Sr)))
```

#### 65. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L888` → after: `L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L888) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L888)

```diff
-               case qR.cd.ModuleTrap:
+               case Ir.kd.ModuleTrap:
```

#### 66. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L890` → after: `L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L890) · [Before (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L890)

```diff
-               case qR.cd.ModuleLoad:
+               case Ir.kd.ModuleLoad:
```

#### 67. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L892)

```diff
-               case qR.cd.TooLarge:
+               case Ir.kd.TooLarge:
```

#### 68. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L899` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L899) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L899)

```diff
-         return this.rejectSave(new Error(yR.d.saveClosed.text)), this.fileName = null !== (GR = null !== (uR = JR.fileName) && void 0 !== uR ? uR : null === (ZR = JR.fileHandle) || void 0 === ZR ? void 0 : ZR.name) && void 0 !== GR ? GR : null, this.fileHandle = null !== (iR = JR … [truncated]
+         return this.rejectSave(new Error(Zr.d.saveClosed.text)), this.fileName = null !== (Qr = null !== (ar = Sr.fileName) && void 0 !== ar ? ar : null === (jr = Sr.fileHandle) || void 0 === jr ? void 0 : jr.name) && void 0 !== Qr ? Qr : null, this.fileHandle = null !== (fr = Sr … [truncated]
```

#### 69. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L907)

```diff
-         this.holds.has("Be") || this.deps.client.play()
+         this.holds.has("zU") || this.deps.client.play()
```

#### 70. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L913` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L913) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L913)

```diff
-         this.isOpen && this.pause(), this.hold("Be")
+         this.isOpen && this.pause(), this.hold("zU")
```

#### 71. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L918` → after: `L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L918) · [Before (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L918)

```diff
-         null !== GR && (JR || RR < GR.gK) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(RR, JR)
+         null !== Qr && (Sr || rr < Qr.lx) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(rr, Sr)
```

#### 72. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L928` → after: `L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L928) · [Before (L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L928)

```diff
-         null !== RR && RR.state !== qR.ld.None && this.setCameraMode(iR.d[(iR.d.indexOf(RR.cameraMode) + 1) % iR.d.length])
+         null !== rr && rr.state !== Ir.yd.None && this.setCameraMode(fr.c[(fr.c.indexOf(rr.cameraMode) + 1) % fr.c.length])
```

#### 73. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L954)

```diff
-           this.pendingSave = GR, this.editsAtSave = this.edits, this.deps.client.save((0, iR.g)()).then((RR => {
+           this.pendingSave = Qr, this.editsAtSave = this.edits, this.deps.client.save((0, fr.d)()).then((rr => {
```

#### 74. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L957` → after: `L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L957) · [Before (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L957)

```diff
-             this.pendingSave === GR && this.rejectSave(RR instanceof Error ? RR : new Error(String(RR)))
+             this.pendingSave === Qr && this.rejectSave(rr instanceof Error ? rr : new Error(String(rr)))
```

#### 75. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L975` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L975) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L975)

```diff
-         this.fileHandle = RR, this.fileName = null !== (GR = null !== (yR = null === RR || void 0 === RR ? void 0 : RR.name) && void 0 !== yR ? yR : JR) && void 0 !== GR ? GR : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
+         this.fileHandle = rr, this.fileName = null !== (Qr = null !== (Zr = null === rr || void 0 === rr ? void 0 : rr.name) && void 0 !== Zr ? Zr : Sr) && void 0 !== Qr ? Qr : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this … [truncated]
```

#### 76. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L984-L985` → after: `L984-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L984-L985) · [Before (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L984-L985)

```diff
-         this.lastView = yR, this.opening && null !== yR && yR.state !== qR.ld.None && yR.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, ZR.f)()), this.cropAsked ? (this.cropAsked = !1, null !== yR && yR.state === qR.ld.Cropping ? this.crop … [truncated]
-         const uR = 0 === this.settleFrames && 0 === (null !== (RR = null === (JR = (GR = this.deps).meshPending) || void 0 === JR ? void 0 : JR.call(GR)) && void 0 !== RR ? RR : 0);
+         this.lastView = Zr, this.opening && null !== Zr && Zr.state !== Ir.yd.None && Zr.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, jr.d)()), this.cropAsked ? (this.cropAsked = !1, null !== Zr && Zr.state === Ir.yd.Cropping ? this.crop … [truncated]
+         const ar = 0 === this.settleFrames && 0 === (null !== (rr = null === (Sr = (Qr = this.deps).meshPending) || void 0 === Sr ? void 0 : Sr.call(Qr)) && void 0 !== rr ? rr : 0);
```

#### 77. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L992` → after: `L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L992) · [Before (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L992)

```diff
-         (0, ZR.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
+         (0, jr.d)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
```

#### 78. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L996` → after: `L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L996) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L996)

```diff
-           case qR.cd.TooLarge:
+           case Ir.kd.TooLarge:
```

#### 79. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L998-L999` → after: `L998-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L998-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L998-L999) · [Before (L998-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L998-L999)

```diff
-           case qR.cd.Open:
-           case qR.cd.NothingStaged: {
+           case Ir.kd.Open:
+           case Ir.kd.NothingStaged: {
```

#### 80. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1001` → after: `L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1001) · [Before (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1001)

```diff
-             const JR = (0, uR.g)(RR.version) ? yR.d.replayTooOld : yR.d.cantOpen;
+             const Sr = (0, ar.e)(rr.version) ? Zr.d.replayTooOld : Zr.d.cantOpen;
```

#### 81. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1005-L1006` → after: `L1005-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1005-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1005-L1006) · [Before (L1005-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1005-L1006)

```diff
-           case qR.cd.Crop:
-             if (RR.code === qR.ad.Busy) {
+           case Ir.kd.Crop:
+             if (rr.code === Ir.jd.Busy) {
```

#### 82. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1016-L1019` → after: `L1016-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1016-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1016-L1019) · [Before (L1016-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1016-L1019)

```diff
-           case qR.cd.ModuleTrap:
-           case qR.cd.ModuleLoad:
-           case qR.cd.Port:
-             this.moduleEnded(RR.reason === qR.cd.ModuleTrap ? yR.d.coreStopped : yR.d.cantOpen);
+           case Ir.kd.ModuleTrap:
+           case Ir.kd.ModuleLoad:
+           case Ir.kd.Port:
+             this.moduleEnded(rr.reason === Ir.kd.ModuleTrap ? Zr.d.coreStopped : Zr.d.cantOpen);
```

#### 83. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1021)

```diff
-           case qR.cd.NotLive:
+           case Ir.kd.NotLive:
```

#### 84. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1025` → after: `L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1025) · [Before (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1025)

```diff
-             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${RR.reason})`), this.seekAsked = !1, this.release("seek")
+             console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${rr.reason})`), this.seekAsked = !1, this.release("seek")
```

#### 85. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1068` → after: `L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1068) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1068)

```diff
-   64117: (RR, JR, GR) => {
+   64578: (rr, Sr, Qr) => {
```

#### 86. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1074-L1077` → after: `L1074-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1074-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1074-L1077) · [Before (L1074-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1074-L1077)

```diff
-     var yR = GR(40530),
-       tR = GR(64119),
-       uR = GR(5676),
-       ZR = GR(3441);
+     var Zr = Qr(40828),
+       Wr = Qr(64584),
+       ar = Qr(5610),
+       jr = Qr(3381);
```

#### 87. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1084)

```diff
-       return (null === (JR = RR.view) || void 0 === JR ? void 0 : JR.state) === uR.ld.Cropping || RR.Qq.includes("crop")
+       return (null === (Sr = rr.view) || void 0 === Sr ? void 0 : Sr.state) === ar.yd.Cropping || rr.wI.includes("crop")
```

#### 88. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1088` → after: `L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1088) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1088)

```diff
-       return (0, yR.e)((() => function(RR) {
+       return (0, Zr.c)((() => function(rr) {
```

#### 89. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1091` → after: `L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1091) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1091)

```diff
-           eR = null !== (JR = null === rR || void 0 === rR ? void 0 : rR.view) && void 0 !== JR ? JR : null,
+           Ur = null !== (Sr = null === Nr || void 0 === Nr ? void 0 : Nr.view) && void 0 !== Sr ? Sr : null,
```

#### 90. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1093-L1094` → after: `L1093-L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1093-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1093-L1094) · [Before (L1093-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1093-L1094)

```diff
-         if (!rR || !eR || eR.state === uR.ld.None || 0 === eR.totalTicks || !aR || VR(rR)) return null;
-         const LR = null !== (GR = RR.now) && void 0 !== GR ? GR : () => performance.now(),
+         if (!Nr || !Ur || Ur.state === ar.yd.None || 0 === Ur.totalTicks || !tr || pr(Nr)) return null;
+         const hr = null !== (Qr = rr.now) && void 0 !== Qr ? Qr : () => performance.now(),
```

#### 91. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1098` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1098) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1098)

```diff
-             return JR === rR && JR.id === nR && JR.isOpen ? JR : null
+             return Sr === Nr && Sr.id === zr && Sr.isOpen ? Sr : null
```

#### 92. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1100` → after: `L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1100) · [Before (L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1100)

```diff
-           WR = Math.min(null !== (yR = null === (tR = eR.mark) || void 0 === tR ? void 0 : tR.outTick) && void 0 !== yR ? yR : 1 / 0, eR.totalTicks - 1);
+           nr = Math.min(null !== (Zr = null === (Wr = Ur.mark) || void 0 === Wr ? void 0 : Wr.outTick) && void 0 !== Zr ? Zr : 1 / 0, Ur.totalTicks - 1);
```

#### 93. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1105` → after: `L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1105) · [Before (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1105)

```diff
-           return (null === (RR = UR()) || void 0 === RR || null === (JR = RR.view) || void 0 === JR ? void 0 : JR.state) === uR.ld.Playing
+           return (null === (rr = Yr()) || void 0 === rr || null === (Sr = rr.view) || void 0 === Sr ? void 0 : Sr.state) === ar.yd.Playing
```

#### 94. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1108-L1109` → after: `L1108-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1108-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1108-L1109) · [Before (L1108-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1108-L1109)

```diff
-           lH: uR.Bd,
-           playbackMarkInTick: null !== (KR = null === (wR = eR.mark) || void 0 === wR ? void 0 : wR.inTick) && void 0 !== KR ? KR : null,
+           pC: ar.Pd,
+           playbackMarkInTick: null !== (xr = null === (mr = Ur.mark) || void 0 === mr ? void 0 : mr.inTick) && void 0 !== xr ? xr : null,
```

#### 95. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1116` → after: `L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1116) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1116)

```diff
-             return null !== (RR = null === (JR = UR()) || void 0 === JR ? void 0 : JR.fileName) && void 0 !== RR ? RR : null
+             return null !== (rr = null === (Sr = Yr()) || void 0 === Sr ? void 0 : Sr.fileName) && void 0 !== rr ? rr : null
```

#### 96. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1120` → after: `L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1120) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1120)

```diff
-             return null !== (RR = null === (JR = UR()) || void 0 === JR || null === (GR = JR.view) || void 0 === GR ? void 0 : GR.speed) && void 0 !== RR ? RR : 1
+             return null !== (rr = null === (Sr = Yr()) || void 0 === Sr || null === (Qr = Sr.view) || void 0 === Qr ? void 0 : Qr.speed) && void 0 !== rr ? rr : 1
```

#### 97. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1141` → after: `L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1141) · [Before (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1141)

```diff
-               null === GR ? (clearInterval(JR), RR()) : GR.Qq.includes("seek") || (clearInterval(JR), setTimeout(RR, fR))
+               null === Qr ? (clearInterval(Sr), rr()) : Qr.wI.includes("seek") || (clearInterval(Sr), setTimeout(rr, Er))
```

#### 98. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1146` → after: `L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1146) · [Before (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1146)

```diff
-             return null !== AR && null !== UR() && (!!XR() || !CR && (null !== (RR = null === (JR = UR()) || void 0 === JR || null === (GR = JR.view) || void 0 === GR ? void 0 : GR.gK) && void 0 !== RR ? RR : 0) < WR && LR() - AR < qR)
+             return null !== er && null !== Yr() && (!!yr() || !Kr && (null !== (rr = null === (Sr = Yr()) || void 0 === Sr || null === (Qr = Sr.view) || void 0 === Qr ? void 0 : Qr.lx) && void 0 !== rr ? rr : 0) < nr && hr() - er < Ir)
```

#### 99. `bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js` (Changed code · before: `L1160` → after: `L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39dR1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cd9bfd40231d6b5750eb0d3def5c2749800c57f127d51b60936ef28acef0a39d) · [After (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1160) · [Before (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmReplayVideoExport.js#L1160)

```diff
-             return null === GR ? "The replay closed before the video finished." : (null !== (RR = null === (JR = GR.view) || void 0 === JR ? void 0 : JR.gK) && void 0 !== RR ? RR : 0) >= WR ? null : CR ? "The replay stopped before the video finished." : "The replay didn't start p … [truncated]
+             return null === Qr ? "The replay closed before the video finished." : (null !== (rr = null === (Sr = Qr.view) || void 0 === Sr ? void 0 : Sr.lx) && void 0 !== rr ? rr : 0) >= nr ? null : Kr ? "The replay stopped before the video finished." : "The replay didn't start p … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445)

#### 1. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L81)

```diff
-         const eR = iR ? 1 << iR : tR,
+         const Ur = fr ? 1 << fr : Wr,
```

#### 2. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L89)

```diff
-         const nR = new GR((1 == JR ? aR || LR : JR ? 0 : LR) + 12);
+         const zr = new Qr((1 == Sr ? tr || hr : Sr ? 0 : hr) + 12);
```

#### 3. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L95)

```diff
-           w: JR && 1 != JR ? JR : nR.subarray(12),
+           w: Sr && 1 != Sr ? Sr : zr.subarray(12),
```

#### 4. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L295` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L295) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L295)

```diff
-             (pR ? MR : XR)(RR.subarray(uR, uR += lR), gR.subarray(bR), tR)
+             (Or ? Br : yr)(rr.subarray(ar, ar += vr), Lr.subarray(lr), Wr)
```

#### 5. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L360)

```diff
-             tR ? JR.y += pR : gR = ZR(gR, 0, pR)
+             Wr ? Sr.y += Or : Lr = jr(Lr, 0, Or)
```

#### 6. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L384)

```diff
-       if (this.parts.push(RR), this.Qq += RR.length, this.Qq < this.needed) return;
+       if (this.parts.push(rr), this.wI += rr.length, this.wI < this.needed) return;
```

#### 7. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L393` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L393) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L393)

```diff
-       })(this.parts, this.Qq);
+       })(this.parts, this.wI);
```

#### 8. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L422)

```diff
-       this.parts = tR.length ? [tR] : [], this.Qq = tR.length, yR.b = 0
+       this.parts = Wr.length ? [Wr] : [], this.wI = Wr.length, Zr.b = 0
```

#### 9. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L438)

```diff
-         this.stop(GR instanceof RangeError ? `out of memory decoding ${this.href}: ${RR(GR)}` : `${this.href} did not decode: ${RR(GR)}`)
+         this.stop(Qr instanceof RangeError ? `out of memory decoding ${this.href}: ${rr(Qr)}` : `${this.href} did not decode: ${rr(Qr)}`)
```

#### 10. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L442` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L442) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L442)

```diff
-       if (null === this.VK) {
+       if (null === this.Ix) {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L444)

```diff
-         return this.href = JR, void(this.VK = new lR(GR))
+         return this.href = Sr, void(this.Ix = new vr(Qr))
```

#### 12. `bundles/bloxd.io/chunks/js/wasmZstdDecoder.js` (Changed code · before: `L447` → after: `L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-773a3ff3aadc81dec87bb0126126a4fb7fb793eb8e6b168c322a5188fc1ec445) · [After (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L447) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/wasmZstdDecoder.js#L447)

```diff
-       const JR = this.VK;
+       const Sr = this.Ix;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89)

#### 1. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L4)

```diff
-   37580: (RR, JR, GR) => {
+   37958: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L13-L29` → after: `L13-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L13-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L13-L29) · [Before (L13-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L13-L29)

```diff
-     var yR = GR(359),
-       tR = GR(25),
-       uR = GR(3933),
-       ZR = GR(4776),
-       qR = GR(709),
-       iR = GR(103),
-       fR = GR(112),
-       VR = GR(3935),
-       KR = GR(46),
-       wR = GR(123),
-       rR = GR(327),
-       eR = GR(342),
-       aR = GR(704),
-       LR = GR(3960),
-       nR = GR(377),
-       UR = GR(371),
- ... (1 more removed lines; see GitHub link above)
+     var Zr = Qr(360),
+       Wr = Qr(26),
+       ar = Qr(3884),
+       jr = Qr(4690),
+       Ir = Qr(712),
+       fr = Qr(109),
+       Er = Qr(120),
+       pr = Qr(3886),
+       xr = Qr(43),
+       mr = Qr(127),
+       Nr = Qr(335),
+       Ur = Qr(345),
+       tr = Qr(703),
+       hr = Qr(3909),
+       zr = Qr(379),
+       Yr = Qr(374),
+ ... (1 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L34)

```diff
-       return `"${(RR.length>JR?`${RR.slice(0,JR)}...`:RR).replace(/[^ -~]|["\\]/g,"?")}"`
+       return `"${(rr.length>Sr?`${rr.slice(0,Sr)}...`:rr).replace(/[^ -~]|["\\]/g,"?")}"`
```

#### 4. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L44)

```diff
-       return [`loss holds ${MR(RR.lossHolds)}`, `stops packs ${MR(RR.lossStopsPack)}`, `any loss ${MR(RR.anyLoss)}`, `old intel ${MR(RR.oldIntelDriver)}`, `few wasm memories ${MR(RR.fewWasmMemories)}`, `default off for packs ${MR(RR.defaultOffForPacks)}`, `default off reason ${nu … [truncated]
+       return [`loss holds ${Br(rr.lossHolds)}`, `stops packs ${Br(rr.lossStopsPack)}`, `any loss ${Br(rr.anyLoss)}`, `old intel ${Br(rr.oldIntelDriver)}`, `few wasm memories ${Br(rr.fewWasmMemories)}`, `default off for packs ${Br(rr.defaultOffForPacks)}`, `default off reason ${nu … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L55` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L55) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L55)

```diff
-       return `renderer requested ${JR}, runs ${GR}, from ${yR}${null===tR?"":`, fell back: ${XR(tR,80)}`}`
+       return `renderer requested ${Sr}, runs ${Qr}, from ${Zr}${null===Wr?"":`, fell back: ${yr(Wr,80)}`}`
```

#### 6. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L59)

```diff
-       return RR ? `stopping packs: iOS, ${null!==JR&&void 0!==JR?JR:1} losses in a row within a day` : "stopping packs"
+       return rr ? `stopping packs: iOS, ${null!==Sr&&void 0!==Sr?Sr:1} losses in a row within a day` : "stopping packs"
```

#### 7. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L64-L68` → after: `L64-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L64-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L64-L68) · [Before (L64-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L64-L68)

```diff
-       return `pick (wasm): backend ${null!==(JR=RR.backend)&&void 0!==JR?JR:"none"}, webgpu fallback ${null!==(GR=RR.reason)&&void 0!==GR?GR:"none"}, from ${null!==(yR=RR.source)&&void 0!==yR?yR:"none"}, storage pull breaks ${MR(RR.storagePullBreaks)}; packs run ${MR("webgpu"===R … [truncated]
-     }
- 
-     function bR(RR, JR, GR) {
-       return `pack ${null===RR?"(name not read)":XR(RR,AR)} ${JR}${null===GR?"":`, ${GR} variants`}`
+       return `pick (wasm): backend ${null!==(Sr=rr.backend)&&void 0!==Sr?Sr:"none"}, webgpu fallback ${null!==(Qr=rr.reason)&&void 0!==Qr?Qr:"none"}, from ${null!==(Zr=rr.source)&&void 0!==Zr?Zr:"none"}, storage pull breaks ${Br(rr.storagePullBreaks)}; packs run ${Br("webgpu"===r … [truncated]
+     }
+ 
+     function lr(rr, Sr, Qr) {
+       return `pack ${null===rr?"(name not read)":yr(rr,er)} ${Sr}${null===Qr?"":`, ${Qr} variants`}`
```

#### 8. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L91)

```diff
-       (0, LR.k)("webgpuloss", RR)
+       (0, hr.l)("webgpuloss", rr)
```

#### 9. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L97-L104` → after: `L97-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L97-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L97-L104) · [Before (L97-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L97-L104)

```diff
-         lossStopsPack: (0, eR.F)(),
-         anyLoss: (0, eR.j)(),
-         oldIntelDriver: !0 === KR.i.getItem(wR.J),
-         fewWasmMemories: (0, rR.d)(),
-         defaultOffForPacks: tR.d.isWebGpuDefaultOff(),
-         defaultOffReason: tR.d.webGpuDefaultOffReason(),
-         settingStored: KR.i.getItem(yR.jc),
-         setting: tR.d.get("clientEscMenuOptions").useWebGpu,
+         lossStopsPack: (0, Ur.C)(),
+         anyLoss: (0, Ur.l)(),
+         oldIntelDriver: !0 === xr.j.getItem(mr.F),
+         fewWasmMemories: (0, Nr.i)(),
+         defaultOffForPacks: Wr.c.isWebGpuDefaultOff(),
+         defaultOffReason: Wr.c.webGpuDefaultOffReason(),
+         settingStored: xr.j.getItem(Zr.mc),
+         setting: Wr.c.get("clientEscMenuOptions").useWebGpu,
```

#### 10. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L106)

```diff
-         storedRenderer: KR.i.getItem(VR.e)
+         storedRenderer: xr.j.getItem(pr.f)
```

#### 11. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L114)

```diff
-         if ("object" !== typeof RR) return `unreadable (${typeof RR})`;
+         if ("object" !== typeof rr) return `unreadable (${typeof rr})`;
```

#### 12. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L117)

```diff
-           ZR = ["browser " + (JR ? "this one" : "another"), null === uR ? "no time" : `set ${((GR-uR)/nR.m).toFixed(1)} h ago`, `losses ${"number"===typeof tR.losses?tR.losses:"unset (1)"}${null!==uR&&GR-uR<nR.i?", the last within a day":""}`, `first page ${"hidden"===tR.firstPag … [truncated]
+           jr = ["browser " + (Sr ? "this one" : "another"), null === ar ? "no time" : `set ${((Qr-ar)/zr.h).toFixed(1)} h ago`, `losses ${"number"===typeof Wr.losses?Wr.losses:"unset (1)"}${null!==ar&&Qr-ar<zr.d?", the last within a day":""}`, `first page ${"hidden"===Wr.firstPag … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L119-L120` → after: `L119-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L119-L120) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L119-L120)

```diff
-           const RR = "string" === typeof tR.reason ? XR(tR.reason, UR.c) : "no reason";
-           ZR.push(`cause ${RR} ${!0===tR.causeSent?"reported":"unreported"}`)
+           const rr = "string" === typeof Wr.reason ? yr(Wr.reason, Yr.d) : "no reason";
+           jr.push(`cause ${rr} ${!0===Wr.causeSent?"reported":"unreported"}`)
```

#### 14. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L125)

```diff
-           return "object" === typeof RR && null !== RR && RR.browser === (0, eR.h)()
+           return "object" === typeof rr && null !== rr && rr.browser === (0, Ur.j)()
```

#### 15. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L133)

```diff
-       const RR = (0, eR.n)().now;
+       const rr = (0, Ur.q)().now;
```

#### 16. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L142-L143` → after: `L142-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L142-L143) · [Before (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L142-L143)

```diff
-       } = (0, eR.n)(), yR = JSON.stringify(RR) === JSON.stringify(JR) ? "tK" : `now ${cR(JR)}`;
-       HR(`load (${qR.G?"wasm":"js"}, os ${(0,iR.getOperatingSystem)()}): stored loss ${cR(RR)}; ${yR}; cause kept apart ${function(RR,JR){if(null===RR||void 0===RR)return"none";const{reason:GR,at:yR}="object"===typeof RR?RR:{},tR="number"===typeof yR?`
+       } = (0, Ur.q)(), Zr = JSON.stringify(rr) === JSON.stringify(Sr) ? "sp" : `now ${Mr(Sr)}`;
+       gr(`load (${Ir.I?"wasm":"js"}, os ${(0,fr.getOperatingSystem)()}): stored loss ${Mr(rr)}; ${Zr}; cause kept apart ${function(rr,Sr){if(null===rr||void 0===rr)return"none";const{reason:Qr,at:Zr}="object"===typeof rr?rr:{},Wr="number"===typeof Zr?`
```

#### 17. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L145)

```diff
-           ((JR - yR) / nR.m).toFixed(1)
+           ((Sr - Zr) / zr.h).toFixed(1)
```

#### 18. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L149)

```diff
-           "string" === typeof GR ? XR(GR, UR.c) : "no reason"
+           "string" === typeof Qr ? yr(Qr, Yr.d) : "no reason"
```

#### 19. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L153` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L153) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L153)

```diff
-         `}((0,aR.i)(),Date.now())}; unreported ${function(RR,JR){if(null===RR||void 0===RR||"object"!==typeof RR)return"none";const GR=RR;return JR.map((RR=>`${RR} ${"number"===typeof GR[RR]?GR[RR]:0}`)).join(", ")}(GR,eR.e)}; webgpu_loss_page ${eR.A}`), HR(`load: ${BR(oR())}; pa … [truncated]
+         `}((0,tr.g)(),Date.now())}; unreported ${function(rr,Sr){if(null===rr||void 0===rr||"object"!==typeof rr)return"none";const Qr=rr;return Sr.map((rr=>`${rr} ${"number"===typeof Qr[rr]?Qr[rr]:0}`)).join(", ")}(Qr,Ur.g)}; webgpu_loss_page ${Ur.z}`), gr(`load: ${Tr(Cr())}; pa … [truncated]
```

#### 20. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L158-L159` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L158-L159) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L158-L159)

```diff
-         const yR = RR.setting ? "the setting is on" : (0, WR.b)(RR.packActive, RR.defaultOffForPacks) ? "the pack forces it" : RR.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
-         return `engine (js): useWebGpu ${MR(RR.useWebGpu)} (${yR}); ${lR(JR)}; webgpu fallback ${null!==GR&&void 0!==GR?GR:"unset"}`
+         const Zr = rr.setting ? "the setting is on" : (0, nr.d)(rr.packActive, rr.defaultOffForPacks) ? "the pack forces it" : rr.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
+         return `engine (js): useWebGpu ${Br(rr.useWebGpu)} (${Zr}); ${vr(Sr)}; webgpu fallback ${null!==Qr&&void 0!==Qr?Qr:"unset"}`
```

#### 21. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L177)

```diff
-           }] = await Promise.all([GR.e(138).then((() => GR(40495))), GR.e(108).then((() => GR(44974))), GR.e(162).then((() => GR(44983)))]), iR = await tR.load();
+           }] = await Promise.all([Qr.e(138).then((() => Qr(40792))), Qr.e(108).then((() => Qr(45277))), Qr.e(162).then((() => Qr(45279)))]), fr = await Wr.load();
```

#### 22. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L179)

```diff
-           const fR = null !== (JR = uR()) && void 0 !== JR ? JR : ZR(RR),
+           const Er = null !== (Sr = ar()) && void 0 !== Sr ? Sr : jr(rr),
```

#### 23. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L183)

```diff
-             text: `${"active"===iR.status?bR(iR.pack.name,"active",VR.length):bR(null,`blocked (${iR.messageKey})`,null!==(yR=null===VR||void 0===VR?void 0:VR.length)&&void 0!==yR?yR:null)}; game policy ${fR}, runs in it ${KR?"yes":"no"}`,
+             text: `${"active"===fr.status?lr(fr.pack.name,"active",pr.length):lr(null,`blocked (${fr.messageKey})`,null!==(Zr=null===pr||void 0===pr?void 0:pr.length)&&void 0!==Zr?Zr:null)}; game policy ${Er}, runs in it ${xr?"yes":"no"}`,
```

#### 24. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L187)

```diff
-       if (null === ZR) return void(OR.noPack() && HR(`join ${uR}: no shader pack on this page (further joins without one not logged)`));
+       if (null === jr) return void(Pr.noPack() && gr(`join ${ar}: no shader pack on this page (further joins without one not logged)`));
```

#### 25. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L190)

```diff
-       if ("cap" === qR) return void HR(`join ${uR}: further joins not logged`);
+       if ("cap" === Ir) return void gr(`join ${ar}: further joins not logged`);
```

#### 26. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L194-L196` → after: `L194-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L194-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L194-L196) · [Before (L194-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L194-L196)

```diff
-               return void 0 === RR.couldntRun ? "joined" : `joined without the pack: ${RR.couldntRun}`;
-             case "xR":
-               return "xR";
+               return void 0 === rr.couldntRun ? "joined" : `joined without the pack: ${rr.couldntRun}`;
+             case "Rr":
+               return "Rr";
```

#### 27. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L198` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L198) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L198)

```diff
-               return `failed: ${RR.messageKey}`
+               return `failed: ${rr.messageKey}`
```

#### 28. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L201-L202` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L201-L202) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L201-L202)

```diff
-         fR = ("ok" === JR.status ? JR.couldntRun : "failed" === JR.status ? JR.messageKey : void 0) === vR ? `; cause: ${tR()}` : "";
-       "outcome" !== qR ? (HR(`join ${uR}: ${ZR.text}`), ZR.runs && (HR(`join ${uR}: needs WebGPU; ${yR()}`), HR(`join ${uR}: ${BR(oR())}`)), HR(`join ${uR}: ${iR}${fR}`)) : HR(`join ${uR}: ${iR}${fR}`)
+         Er = ("ok" === Sr.status ? Sr.couldntRun : "failed" === Sr.status ? Sr.messageKey : void 0) === Xr ? `; cause: ${Wr()}` : "";
+       "outcome" !== Ir ? (gr(`join ${ar}: ${jr.text}`), jr.runs && (gr(`join ${ar}: needs WebGPU; ${Zr()}`), gr(`join ${ar}: ${Tr(Cr())}`)), gr(`join ${ar}: ${fr}${Er}`)) : gr(`join ${ar}: ${fr}${Er}`)
```

#### 29. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L208` → after: `L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L208) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L208)

```diff
-       return SR(RR, GR, (() => `Lite runtime ${null===JR?"no":"yes, running "+(tR?"yes":"no")}; ${lR((0,uR.j)())}`), (() => function(RR, JR, GR, yR) {
+       return ir(rr, Qr, (() => `Lite runtime ${null===Sr?"no":"yes, running "+(Wr?"yes":"no")}; ${vr((0,ar.j)())}`), (() => function(rr, Sr, Qr, Zr) {
```

#### 30. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L211)

```diff
-         if ((0, WR.b)(RR.packActive, RR.defaultOffForPacks)) return "the pack forced WebGPU, yet nothing asked for a renderer: unexpected";
+         if ((0, nr.d)(rr.packActive, rr.defaultOffForPacks)) return "the pack forced WebGPU, yet nothing asked for a renderer: unexpected";
```

#### 31. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L213)

```diff
-         return `a loss ${pR(GR,yR)}`
+         return `a loss ${Or(Qr,Zr)}`
```

#### 32. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L223)

```diff
-         couldntRun: null !== GR && void 0 !== GR ? GR : void 0
+         couldntRun: null !== Qr && void 0 !== Qr ? Qr : void 0
```

#### 33. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L226` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L226) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L226)

```diff
-         return null === RR ? "pick not seen" : "off_after_loss" === RR.reason ? `off after a loss, ${"pack"===RR.source?pR(GR,yR):`from ${null!==(qR=RR.source)&&void 0!==qR?qR:"none"}`}` : "not_requested" === RR.reason ? `not requested, from ${null!==(ZR=RR.source)&&void 0!==ZR?Z … [truncated]
+         return null === rr ? "pick not seen" : "off_after_loss" === rr.reason ? `off after a loss, ${"pack"===rr.source?Or(Qr,Zr):`from ${null!==(Ir=rr.source)&&void 0!==Ir?Ir:"none"}`}` : "not_requested" === rr.reason ? `not requested, from ${null!==(jr=rr.source)&&void 0!==jr?j … [truncated]
```

#### 34. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L236-L237` → after: `L236-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L236-L237) · [Before (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L236-L237)

```diff
-         return `loss (${RR}): ${JR}${null===GR?"":` ${XR(GR,CR)}`}; ${yR}`
-       }(RR, JR, GR, `stored ${cR((0,eR.n)().now)}; holds ${tR.lossHolds?"yes":"no"}, stops packs ${tR.lossStopsPack?"yes":"no"}`))
+         return `loss (${rr}): ${Sr}${null===Qr?"":` ${yr(Qr,Kr)}`}; ${Zr}`
+       }(rr, Sr, Qr, `stored ${Mr((0,Ur.q)().now)}; holds ${Wr.lossHolds?"yes":"no"}, stops packs ${Wr.lossStopsPack?"yes":"no"}`))
```

#### 35. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L240` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L240) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L240)

```diff
-   35064: (RR, JR, GR) => {
+   35378: (rr, Sr, Qr) => {
```

#### 36. `bundles/bloxd.io/chunks/js/webGpuLossDebug.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2b85bf6b0909c8dca69633fd66eb879daeec082d7f773ac6ed6ef03d099c1f89) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/webGpuLossDebug.js#L245)

```diff
-       b: () => yR
+       d: () => Zr
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1017 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 1. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1)

```diff
- /*! For license information please see 4udp6d.worldgenWorker.8512e70a.chunk.js.LICENSE.txt */
+ /*! For license information please see fl4vv.worldgenWorker.fdbfecc9.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L4)

```diff
-       1805: RR => {
+       1767: rr => {
```

#### 3. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L82)

```diff
-             return JR === 1 / 0 ? JR : void 0 !== JR ? Math.max(0, Math.ceil(JR - GR())) : 0
+             return Sr === 1 / 0 ? Sr : void 0 !== Sr ? Math.max(0, Math.ceil(Sr - Qr())) : 0
```

#### 4. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L151)

```diff
-       3998: RR => {
+       3947: rr => {
```

#### 5. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L157)

```diff
-       4e3: RR => {
+       3950: rr => {
```

#### 6. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L167)

```diff
-       41294: RR => {
+       41667: rr => {
```

#### 7. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L171` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L171) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L171)

```diff
-             for (var ZR = tR[uR] = new Array(JR), qR = uR < yR / 2 ? uR : uR + 1, iR = 1; iR <= JR; iR++) {
+             for (var jr = Wr[ar] = new Array(Sr), Ir = ar < Zr / 2 ? ar : ar + 1, fr = 1; fr <= Sr; fr++) {
```

#### 8. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L178-L180` → after: `L178-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L178-L180) · [Before (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L178-L180)

```diff
-       3991: (RR, JR, GR) => {
-         var yR = GR(3998),
-           tR = GR(4e3),
+       3938: (rr, Sr, Qr) => {
+         var Zr = Qr(3947),
+           Wr = Qr(3950),
```

#### 9. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L325-L328` → after: `L325-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L325-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L325-L328) · [Before (L325-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L325-L328)

```diff
-       41274: (RR, JR, GR) => {
-         var yR = GR(41282).integer,
-           tR = GR(41287),
-           uR = GR(41292);
+       41638: (rr, Sr, Qr) => {
+         var Zr = Qr(41644).integer,
+           Wr = Qr(41650),
+           ar = Qr(41659);
```

#### 10. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L392-L395` → after: `L392-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L392-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L392-L395) · [Before (L392-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L392-L395)

```diff
-       41297: (RR, JR, GR) => {
-         var yR = GR(41282).array,
-           tR = GR(41287),
-           uR = GR(41292);
+       41671: (rr, Sr, Qr) => {
+         var Zr = Qr(41644).array,
+           Wr = Qr(41650),
+           ar = Qr(41659);
```

#### 11. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L478-L479` → after: `L478-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L478-L479) · [Before (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L478-L479)

```diff
-       41292: (RR, JR, GR) => {
-         var yR = GR(41294);
+       41659: (rr, Sr, Qr) => {
+         var Zr = Qr(41667);
```

#### 12. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L498-L500` → after: `L498-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L498-L500) · [Before (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L498-L500)

```diff
-       41265: (RR, JR, GR) => {
-         var yR = GR(41274),
-           tR = GR(41297);
+       41636: (rr, Sr, Qr) => {
+         var Zr = Qr(41638),
+           Wr = Qr(41671);
```

#### 13. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L521)

```diff
-       41287: RR => {
+       41650: rr => {
```

#### 14. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L535)

```diff
-       41282: RR => {
+       41644: rr => {
```

#### 15. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L561-L562` → after: `L561-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L561-L562) · [Before (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L561-L562)

```diff
-       38891: (RR, JR, GR) => {
-         var yR = GR(38898);
+       39230: (rr, Sr, Qr) => {
+         var Zr = Qr(39238);
```

#### 16. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L594` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L594) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L594)

```diff
-       38898: (RR, JR) => {
+       39238: (rr, Sr) => {
```

#### 17. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L648` → after: `L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L648) · [Before (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L648)

```diff
-       41208: (RR, JR, GR) => {
+       41589: (rr, Sr, Qr) => {
```

#### 18. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L650` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L650) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L650)

```diff
-           c: () => VJ
+           b: () => pS
```

#### 19. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L652-L654` → after: `L652-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L652-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L652-L654) · [Before (L652-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L652-L654)

```diff
-         var yR = GR(41234),
-           tR = GR(41219),
-           uR = GR(41309);
+         var Zr = Qr(41603),
+           Wr = Qr(41596),
+           ar = Qr(41684);
```

#### 20. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L663` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L663) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L663)

```diff
-           return ZR(`${RR}Wasteland`)
+           return jr(`${rr}Wasteland`)
```

#### 21. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L698)

```diff
-           return 36 * (1 === yR ? RR : JR) + 2 + Math.floor(32 * iR(RR, JR, GR ^ wR ^ yR))
+           return 36 * (1 === Zr ? rr : Sr) + 2 + Math.floor(32 * fr(rr, Sr, Qr ^ mr ^ Zr))
```

#### 22. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L700-L701` → after: `L700-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L700-L701) · [Before (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L700-L701)

```diff
-         var LR = GR(41210),
-           nR = GR(41226);
+         var hr = Qr(41592),
+           zr = Qr(41598);
```

#### 23. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L777)

```diff
-               return yR > GR && (uR = .25 - uR), RR < 0 && (uR = .5 - uR), JR < 0 ? 1 - uR : uR
+               return Zr > Qr && (ar = .25 - ar), rr < 0 && (ar = .5 - ar), Sr < 0 ? 1 - ar : ar
```

#### 24. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L810` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L810) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L810)

```diff
-             return GR && xR(GR, RR, JR) ? GR : null
+             return Qr && Hr(Qr, rr, Sr) ? Qr : null
```

#### 25. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L817` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L817) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L817)

```diff
-                 if (uR && tR >= uR.floorY - nR.f && yR <= uR.topY + WR) {
+                 if (ar && Wr >= ar.floorY - zr.d && Zr <= ar.topY + nr) {
```

#### 26. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L842` → after: `L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L842) · [Before (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L842)

```diff
-         var IR = GR(41254);
+         var kr = Qr(41627);
```

#### 27. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L846)

```diff
-             this.LK = JR, this.chances = tR, this.mound = uR, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = GR.salt ^ ZR(yR), this.sinkholes = GR.sinkholes;
+             this.hx = Sr, this.chances = Wr, this.mound = ar, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = Qr.salt ^ jr(Zr), this.sinkholes = Qr.sinkholes;
```

#### 28. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L867)

```diff
-               for (let tR = 0; tR < qR.height && iR + tR < this.LK; tR++) iR + tR >= 0 && RR.set(yR - JR, iR + tR, uR - GR, qR.block);
+               for (let Wr = 0; Wr < Ir.height && fr + Wr < this.hx; Wr++) fr + Wr >= 0 && rr.set(Zr - Sr, fr + Wr, ar - Qr, Ir.block);
```

#### 29. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L874` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L874) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L874)

```diff
-               if (VR += null !== (KR = this.chances[wR]) && void 0 !== KR ? KR : 0, fR < VR) return void(mR.has(wR) && this.sinkholes.taking(yR, uR) || this.place(RR, yR - JR, ZR + 1 - tR, uR - GR, wR, iR(yR, uR, 1540483477 ^ this.salt)))
+               if (pr += null !== (xr = this.chances[mr]) && void 0 !== xr ? xr : 0, Er < pr) return void(Ar.has(mr) && this.sinkholes.taking(Zr, ar) || this.place(rr, Zr - Sr, jr + 1 - Wr, ar - Qr, mr, fr(Zr, ar, 1540483477 ^ this.salt)))
```

#### 30. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L879` → after: `L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L879) · [Before (L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L879)

```diff
-                 GR + tR >= 0 && GR + tR < this.LK && RR.set(JR, GR + tR, yR, uR)
+                 Qr + Wr >= 0 && Qr + Wr < this.hx && rr.set(Sr, Qr + Wr, Zr, ar)
```

#### 31. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L888` → after: `L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L888) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L888)

```diff
-         class SR extends IR.j {
+         class ir extends kr.h {
```

#### 32. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L896)

```diff
-             super.init(), this.floraGenerator = new zR(this.blockMetadata, this.LK, this.noise, this.seed, this.floraChances, ((RR, JR) => this.mound(RR, JR)))
+             super.init(), this.floraGenerator = new Vr(this.blockMetadata, this.hx, this.noise, this.seed, this.floraChances, ((rr, Sr) => this.mound(rr, Sr)))
```

#### 33. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L934` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L934) · [Before (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L934)

```diff
-               return 0 === yR || 1 === yR && iR(RR, JR, GR ^ wR ^ 3) < .5 ? 2 - yR : 0
+               return 0 === Zr || 1 === Zr && fr(rr, Sr, Qr ^ mr ^ 3) < .5 ? 2 - Zr : 0
```

#### 34. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L966` → after: `L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L966) · [Before (L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L966)

```diff
-             }], `${RR}WastelandCanyon`), this.canyonWarp = new tR.g([{
+             }], `${rr}WastelandCanyon`), this.canyonWarp = new Wr.g([{
```

#### 35. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L969` → after: `L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L969) · [Before (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L969)

```diff
-             }], `${RR}WastelandCanyonWarp`), this.canyonMask = new tR.g([{
+             }], `${rr}WastelandCanyonWarp`), this.canyonMask = new Wr.g([{
```

#### 36. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L972)

```diff
-             }], `${RR}WastelandCanyonMask`), this.patchNoise = new tR.g([{
+             }], `${rr}WastelandCanyonMask`), this.patchNoise = new Wr.g([{
```

#### 37. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L978` → after: `L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L978) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L978)

```diff
-             }], `${RR}WastelandPatch`), this.fineNoise = new tR.g([{
+             }], `${rr}WastelandPatch`), this.fineNoise = new Wr.g([{
```

#### 38. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L984` → after: `L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L984) · [Before (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L984)

```diff
-             }], `${RR}WastelandFine`)
+             }], `${rr}WastelandFine`)
```

#### 39. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1007-L1010` → after: `L1007-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1007-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1007-L1010) · [Before (L1007-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1007-L1010)

```diff
-         var ER = GR(3031),
-           YR = GR(679),
-           kR = GR(40416),
-           QR = GR(41249);
+         var Fr = Qr(2999),
+           or = Qr(688),
+           br = Qr(40712),
+           Jr = Qr(41613);
```

#### 40. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1020-L1021` → after: `L1020-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1020-L1021) · [Before (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1020-L1021)

```diff
-             const RR = new kR.e;
-             return RR.set(0, 0, 0, TR("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
+             const rr = new br.b;
+             return rr.set(0, 0, 0, dr("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
```

#### 41. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1061` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1061) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1061)

```diff
-               qualityDistribution: new ER.f([{
+               qualityDistribution: new Fr.h([{
```

#### 42. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1076` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1076) · [Before (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1076)

```diff
-               mobTypeDistribution: new ER.f([{
+               mobTypeDistribution: new Fr.h([{
```

#### 43. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1084)

```diff
-           return (0, IR.db)(RR, [{
+           return (0, kr.bb)(rr, [{
```

#### 44. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1087` → after: `L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1087) · [Before (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1087)

```diff
-           }, ...IR.g.map((RR => ({
+           }, ...kr.e.map((rr => ({
```

#### 45. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1094` → after: `L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1094) · [Before (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1094)

```diff
-             super(RR, JR, GR, `${uR}DustFlats`, ZR, qR, yJ(yR.l.MEDIUM, 1.25, RJ)), this.key = "dustFlats", this.floraChances = {
+             super(rr, Sr, Qr, `${ar}DustFlats`, jr, Ir, ZS(Zr.m.MEDIUM, 1.25, rS)), this.key = "dustFlats", this.floraChances = {
```

#### 46. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1104` → after: `L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1104) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1104)

```diff
-             }], `${uR}DustFlatsHeight`)
+             }], `${ar}DustFlatsHeight`)
```

#### 47. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1119` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1119) · [Before (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1119)

```diff
-             super(RR, JR, GR, `${yR}ScorchedMesa`, uR, ZR), this.key = "scorchedMesa", this.floraChances = {
+             super(rr, Sr, Qr, `${Zr}ScorchedMesa`, ar, jr), this.key = "scorchedMesa", this.floraChances = {
```

#### 48. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1129` → after: `L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1129) · [Before (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1129)

```diff
-             }], `${yR}ScorchedMesaHeight`);
+             }], `${Zr}ScorchedMesaHeight`);
```

#### 49. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1161` → after: `L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1161) · [Before (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1161)

```diff
-             super(RR, JR, GR, `${yR}ShatteredHighlands`, uR, ZR), this.key = "shatteredHighlands", this.floraChances = {
+             super(rr, Sr, Qr, `${Zr}ShatteredHighlands`, ar, jr), this.key = "shatteredHighlands", this.floraChances = {
```

#### 50. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1167` → after: `L1167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1167) · [Before (L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1167)

```diff
-             }], `${yR}HighlandsRidge1`), this.ridge2 = new tR.g([{
+             }], `${Zr}HighlandsRidge1`), this.ridge2 = new Wr.g([{
```

#### 51. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1170)

```diff
-             }], `${yR}HighlandsRidge2`), this.bumps = new tR.g([{
+             }], `${Zr}HighlandsRidge2`), this.bumps = new Wr.g([{
```

#### 52. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1173` → after: `L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1173) · [Before (L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1173)

```diff
-             }], `${yR}HighlandsBumps`)
+             }], `${Zr}HighlandsBumps`)
```

#### 53. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1184` → after: `L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1184) · [Before (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1184)

```diff
-             return 0 !== tR ? tR : JR > 50 ? this.ids.Stone : JR > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
+             return 0 !== Wr ? Wr : Sr > 50 ? this.ids.Stone : Sr > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
```

#### 54. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1195` → after: `L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1195) · [Before (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1195)

```diff
-               return null === ZR || fR(RR >> 2, JR, GR >> 2, tR) >= .25 ? null : fR(RR, JR, GR, tR) < .65 ? ZR : null
+               return null === jr || Er(rr >> 2, Sr, Qr >> 2, Wr) >= .25 ? null : Er(rr, Sr, Qr, Wr) < .65 ? jr : null
```

#### 55. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L1202` → after: `L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1202) · [Before (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/worldgenWorker.js#L1202)

```diff
-             super(RR, JR, GR, `${uR}RuinFields`, ZR, qR, yJ(yR.l.HIGH, 2.25, JJ)), this.key = "ruinFields", this.floraChances = {
+             super(rr, Sr, Qr, `${ar}RuinFields`, jr, Ir, ZS(Zr.m.HIGH, 2.25, SS)), this.key = "ruinFields", this.floraChances = {
```
