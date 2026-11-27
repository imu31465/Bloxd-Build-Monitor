# Changed — Bundle Modifications Report (Part 112 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `112 / 126` (**401** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 111](part-111.md) · [Part 113 →](part-113.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (130 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab)

#### 17. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L273)

```diff
-           suppressed: null !== (yR = null === (tR = GR) || void 0 === tR ? void 0 : tR.suppressed) && void 0 !== yR ? yR : 0
+           suppressed: null !== (Zr = null === (Wr = Qr) || void 0 === Wr ? void 0 : Wr.suppressed) && void 0 !== Zr ? Zr : 0
```

#### 18. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L293` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L293) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L293)

```diff
-       return yR.pathname = `${yR.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(JR)}`, yR.searchParams.set("timestamp", String(Math.round(GR - 5e3))), yR.toString()
+       return Zr.pathname = `${Zr.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(Sr)}`, Zr.searchParams.set("timestamp", String(Math.round(Qr - 5e3))), Zr.toString()
```

#### 19. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L308` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L308) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L308)

```diff
-           error_fingerprint: null !== (tR = JR.fingerprint) && void 0 !== tR ? tR : null,
+           error_fingerprint: null !== (Wr = Sr.fingerprint) && void 0 !== Wr ? Wr : null,
```

#### 20. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L354)

```diff
-           this.unboundKeyPresses.set(GR, (null !== (JR = this.unboundKeyPresses.get(GR)) && void 0 !== JR ? JR : 0) + yR)
+           this.unboundKeyPresses.set(Qr, (null !== (Sr = this.unboundKeyPresses.get(Qr)) && void 0 !== Sr ? Sr : 0) + Zr)
```

#### 21. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L362)

```diff
-             first_game: null !== (RR = this.gamesJoined[0]) && void 0 !== RR ? RR : "",
+             first_game: null !== (rr = this.gamesJoined[0]) && void 0 !== rr ? rr : "",
```

#### 22. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L396-L397` → after: `L396-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L396-L397) · [Before (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L396-L397)

```diff
-         const GR = null !== (JR = this.firstGame.leftAtMs) && void 0 !== JR ? JR : RR;
-         return null !== GR && GR - this.firstGame.joinedAtMs < yR.p
+         const Qr = null !== (Sr = this.firstGame.leftAtMs) && void 0 !== Sr ? Sr : rr;
+         return null !== Qr && Qr - this.firstGame.joinedAtMs < Zr.m
```

#### 23. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L400-L403` → after: `L400-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L400-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L400-L403) · [Before (L400-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L400-L403)

```diff
-     var TR = GR(1317),
-       sR = GR(1136),
-       hR = GR(377),
-       RJ = GR(1141),
+     var dr = Qr(1279),
+       sr = Qr(1131),
+       ur = Qr(379),
+       rS = Qr(1133),
```

#### 24. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L405-L417` → after: `L405-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L405-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L405-L417) · [Before (L405-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L405-L417)

```diff
-       GJ = GR(3918),
-       yJ = GR(25),
-       tJ = GR(2134),
-       uJ = GR(32),
-       ZJ = GR(1449),
-       qJ = GR(1397),
-       iJ = GR(1655),
-       fJ = GR(2380),
-       VJ = GR(1800),
-       KJ = GR(41066),
-       wJ = GR(103),
-       rJ = GR(41062),
-       eJ = GR(1419);
+       QS = Qr(3868),
+       ZS = Qr(26),
+       WS = Qr(2089),
+       aS = Qr(34),
+       jS = Qr(1422),
+       IS = Qr(1364),
+       fS = Qr(1635),
+       ES = Qr(2329),
+       pS = Qr(1758),
+       xS = Qr(41430),
+       mS = Qr(109),
+       NS = Qr(41427),
+       US = Qr(1385);
```

#### 25. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L431)

```diff
-             this.captureError("error", RR.message, RR.filename ? `${RR.filename}:${RR.lineno}:${RR.colno}` : null, JR instanceof Error ? JR.name : null, (0, rJ.c)(RR))
+             this.captureError("error", rr.message, rr.filename ? `${rr.filename}:${rr.lineno}:${rr.colno}` : null, Sr instanceof Error ? Sr.name : null, (0, NS.d)(rr))
```

#### 26. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L434-L435` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L434-L435) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L434-L435)

```diff
-             this.captureError("unhandled_rejection", JR instanceof Error ? JR.message : String(JR), null, JR instanceof Error ? JR.name : null, (0, rJ.c)(RR))
-           })), uJ.n.subscribe("unrecoverableError", (RR => {
+             this.captureError("unhandled_rejection", Sr instanceof Error ? Sr.message : String(Sr), null, Sr instanceof Error ? Sr.name : null, (0, NS.d)(rr))
+           })), aS.i.subscribe("unrecoverableError", (rr => {
```

#### 27. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L446)

```diff
-                   ZR = !(null !== yR && JR.startTime - yR.endMs < 50) || JR.duration >= 3 * (null !== (GR = null === (tR = yR) || void 0 === tR ? void 0 : tR.durationMs) && void 0 !== GR ? GR : 0);
+                   jr = !(null !== Zr && Sr.startTime - Zr.endMs < 50) || Sr.duration >= 3 * (null !== (Qr = null === (Wr = Zr) || void 0 === Wr ? void 0 : Wr.durationMs) && void 0 !== Qr ? Qr : 0);
```

#### 28. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L452` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L452) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L452)

```diff
-                   mainThreadMs: (0, eJ.j)(JR)
+                   mainThreadMs: (0, US.o)(Sr)
```

#### 29. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L464` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L464) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L464)

```diff
-         const RR = (0, qJ.J)().gameRender();
+         const rr = (0, IS.U)().gameRender();
```

#### 30. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L477` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L477) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L477)

```diff
-         const qR = this.errorThrottle.allow(`${RR}:${ZR}`, Date.now());
+         const Ir = this.errorThrottle.allow(`${rr}:${jr}`, Date.now());
```

#### 31. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L494` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L494) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L494)

```diff
-         (0, VJ.o)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(JR));
+         (0, pS.l)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(Sr));
```

#### 32. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L497` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L497) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L497)

```diff
-           Bi: Math.round(JR),
+           ef: Math.round(Sr),
```

#### 33. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L504-L505` → after: `L504-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L504-L505) · [Before (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L504-L505)

```diff
-     var LJ = GR(7630),
-       nJ = GR(359);
+     var hS = Qr(7464),
+       zS = Qr(360);
```

#### 34. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L578` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L578) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L578)

```diff
-         JR - (null !== GR && void 0 !== GR ? GR : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && yR && tR && uR && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
+         Sr - (null !== Qr && void 0 !== Qr ? Qr : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && Zr && Wr && ar && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
```

#### 35. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L592-L593` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L592-L593) · [Before (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L592-L593)

```diff
-     const XJ = LJ.g.indexOf("first_input"),
-       MJ = LJ.g.indexOf("first_move"),
+     const yS = hS.e.indexOf("first_input"),
+       BS = hS.e.indexOf("first_move"),
```

#### 36. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L613)

```diff
-         this.reachStep("page_loaded"), uJ.n.subscribe("sessionReplayStayOpened", (RR => {
+         this.reachStep("page_loaded"), aS.i.subscribe("sessionReplayStayOpened", (rr => {
```

#### 37. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L615)

```diff
-         })), uJ.n.subscribe("pointerLockUpdate", (RR => {
+         })), aS.i.subscribe("pointerLockUpdate", (rr => {
```

#### 38. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L617)

```diff
-         })), uJ.n.subscribe("localBlockMined", (() => {
+         })), aS.i.subscribe("localBlockMined", (() => {
```

#### 39. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L619` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L619) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L619)

```diff
-         })), uJ.n.subscribe("blockChangeRefused", (() => {
+         })), aS.i.subscribe("blockChangeRefused", (() => {
```

#### 40. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L621` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L621) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L621)

```diff
-         })), uJ.n.subscribe("controlsTutorialShown", (RR => {
+         })), aS.i.subscribe("controlsTutorialShown", (rr => {
```

#### 41. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L623` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L623) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L623)

```diff
-         })), uJ.n.subscribe("showShopTouchTutorial", (RR => {
+         })), aS.i.subscribe("showShopTouchTutorial", (rr => {
```

#### 42. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L625)

```diff
-         })), uJ.n.subscribe("appManagerUpdated|openInGameMenuName", (RR => {
+         })), aS.i.subscribe("appManagerUpdated|openInGameMenuName", (rr => {
```

#### 43. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L627` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L627) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L627)

```diff
-         })), uJ.n.subscribe("appManagerUpdated|openEverythingMenuName", (RR => {
+         })), aS.i.subscribe("appManagerUpdated|openEverythingMenuName", (rr => {
```

#### 44. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L647)

```diff
-           ladder: new UJ(LJ.g, "first_move"),
+           ladder: new YS(hS.e, "first_move"),
```

#### 45. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L670` → after: `L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L670) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L670)

```diff
-           lastInputAtMs: Math.max(null !== (RR = this.quitContext.getLastInputAtMs()) && void 0 !== RR ? RR : 0, null !== (JR = null === (GR = this.currentStay) || void 0 === GR ? void 0 : GR.playableAtMs) && void 0 !== JR ? JR : 0),
+           lastInputAtMs: Math.max(null !== (rr = this.quitContext.getLastInputAtMs()) && void 0 !== rr ? rr : 0, null !== (Sr = null === (Qr = this.currentStay) || void 0 === Qr ? void 0 : Qr.playableAtMs) && void 0 !== Sr ? Sr : 0),
```

#### 46. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L695` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L695) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L695)

```diff
-         this.everythingMenu = RR, null !== RR && (this.menuOpened(RR, RR === nJ.o.SETTINGS ? "first_settings_open" : null), RR === nJ.o.SETTINGS && JR && null !== this.currentStay && this.noteFrustration("menu_toggling"))
+         this.everythingMenu = rr, null !== rr && (this.menuOpened(rr, rr === zS.q.SETTINGS ? "first_settings_open" : null), rr === zS.q.SETTINGS && Sr && null !== this.currentStay && this.noteFrustration("menu_toggling"))
```

#### 47. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L701` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L701) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L701)

```diff
-         const JR = `controls_tutorial_${RR}`;
+         const Sr = `controls_tutorial_${rr}`;
```

#### 48. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L710` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L710) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L710)

```diff
-         null !== RR && RR.unboundKeyPresses < LJ.i && (RR.unboundKeyPresses++, this.deps.publishStayProgress({
+         null !== rr && rr.unboundKeyPresses < hS.g && (rr.unboundKeyPresses++, this.deps.publishStayProgress({
```

#### 49. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L730` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L730) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L730)

```diff
-           furthest_step: null !== (RR = this.ladder.furthest) && void 0 !== RR ? RR : "",
+           furthest_step: null !== (rr = this.ladder.furthest) && void 0 !== rr ? rr : "",
```

#### 50. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L746` → after: `L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L746) · [Before (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L746)

```diff
-           furthestStep: null !== (GR = JR.ladder.furthest) && void 0 !== GR ? GR : void 0,
+           furthestStep: null !== (Qr = Sr.ladder.furthest) && void 0 !== Qr ? Qr : void 0,
```

#### 51. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L772` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L772) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L772)

```diff
-           yR = null !== (RR = null === (JR = this.currentStay) || void 0 === JR ? void 0 : JR.playableAtMs) && void 0 !== RR ? RR : null;
+           Zr = null !== (rr = null === (Sr = this.currentStay) || void 0 === Sr ? void 0 : Sr.playableAtMs) && void 0 !== rr ? rr : null;
```

#### 52. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L780` → after: `L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L780) · [Before (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L780)

```diff
-           signal: LJ.d.indexOf(RR)
+           signal: hS.c.indexOf(rr)
```

#### 53. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L792` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L792) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L792)

```diff
-         if (0 === this.moveSubscriptions.length && (null !== (RR = null === (JR = this.currentStay) || void 0 === JR ? void 0 : JR.ladder.furthestStepIndex) && void 0 !== RR ? RR : 1 / 0) < MJ) {
+         if (0 === this.moveSubscriptions.length && (null !== (rr = null === (Sr = this.currentStay) || void 0 === Sr ? void 0 : Sr.ladder.furthestStepIndex) && void 0 !== rr ? rr : 1 / 0) < BS) {
```

#### 54. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L796)

```diff
-           this.moveSubscriptions = [uJ.n.subscribe("usedKeyboard", RR), uJ.n.subscribe("stickMoved", RR)]
+           this.moveSubscriptions = [aS.i.subscribe("usedKeyboard", rr), aS.i.subscribe("stickMoved", rr)]
```

#### 55. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L800)

```diff
-         for (const RR of this.moveSubscriptions) uJ.n.unsubscribe(RR);
+         for (const rr of this.moveSubscriptions) aS.i.unsubscribe(rr);
```

#### 56. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L809)

```diff
-       return null !== (JR = gJ.find((JR => RR.includes(JR)))) && void 0 !== JR ? JR : "none"
+       return null !== (Sr = LS.find((Sr => rr.includes(Sr)))) && void 0 !== Sr ? Sr : "none"
```

#### 57. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L863` → after: `L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L863) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L863)

```diff
-             return vJ(JR.lastHitchAtMs, RR.nowMs, 15e3) && tR.push("quit_after_hitch"), vJ(JR.lastDeathAtMs, RR.nowMs, 15e3) && tR.push("quit_after_death"), RR.loading ? tR.push("quit_during_load") : "page" !== RR.quitFrom || RR.inGame && !RR.menuOpen || tR.push("quit_in_menu"),  … [truncated]
+             return XS(Sr.lastHitchAtMs, rr.nowMs, 15e3) && Wr.push("quit_after_hitch"), XS(Sr.lastDeathAtMs, rr.nowMs, 15e3) && Wr.push("quit_after_death"), rr.loading ? Wr.push("quit_during_load") : "page" !== rr.quitFrom || rr.inGame && !rr.menuOpen || Wr.push("quit_in_menu"),  … [truncated]
```

#### 58. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L867)

```diff
-             return vJ(JR.lastDeathAtMs, RR, 1e4) || vJ(null !== (GR = JR.lastErrorAtMs) && void 0 !== GR ? GR : null, RR, 1e4)
+             return XS(Sr.lastDeathAtMs, rr, 1e4) || XS(null !== (Qr = Sr.lastErrorAtMs) && void 0 !== Qr ? Qr : null, rr, 1e4)
```

#### 59. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L878-L879` → after: `L878-L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L878-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L878-L879) · [Before (L878-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L878-L879)

```diff
-         JR.includes("quit_during_load") && (yR.last_load_step = null !== (tR = this.lastLoadStep) && void 0 !== tR ? tR : "none");
-         null !== RR.gameName && (yR.game_name_with_variation = RR.gameName, yR.game_name = (0, hR.Sb)(RR.gameName));
+         Sr.includes("quit_during_load") && (Zr.last_load_step = null !== (Wr = this.lastLoadStep) && void 0 !== Wr ? Wr : "none");
+         null !== rr.gameName && (Zr.game_name_with_variation = rr.gameName, Zr.game_name = (0, ur.Mb)(rr.gameName));
```

#### 60. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L988` → after: `L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L988) · [Before (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L988)

```diff
-     var NJ = GR(7640);
+     var qS = Qr(7469);
```

#### 61. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1003-L1004` → after: `L1003-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1003-L1004) · [Before (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1003-L1004)

```diff
-             in_game: "inGame" === yJ.d.get("gameState"),
-             menu_open: (0, VJ.o)(),
+             in_game: "inGame" === ZS.c.get("gameState"),
+             menu_open: (0, pS.l)(),
```

#### 62. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1007` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1007) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1007)

```diff
-         })), uJ.n.subscribe("leaveGame", (() => {
+         })), aS.i.subscribe("leaveGame", (() => {
```

#### 63. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1015` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1015) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1015)

```diff
-         const yR = (0, ZJ.d)().gameNameWithVariation;
+         const Zr = (0, jS.b)().gameNameWithVariation;
```

#### 64. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1017-L1018` → after: `L1017-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1017-L1018) · [Before (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1017-L1018)

```diff
-         const tR = null !== (JR = (0, NJ.i)(RR)) && void 0 !== JR ? JR : RR;
-         this.counts.set(tR, (null !== (GR = this.counts.get(tR)) && void 0 !== GR ? GR : 0) + 1), this.timer ??= setTimeout((() => {
+         const Wr = null !== (Sr = (0, qS.f)(rr)) && void 0 !== Sr ? Sr : rr;
+         this.counts.set(Wr, (null !== (Qr = this.counts.get(Wr)) && void 0 !== Qr ? Qr : 0) + 1), this.timer ??= setTimeout((() => {
```

#### 65. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1036` → after: `L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1036) · [Before (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1036)

```diff
-           game_name: null === this.game ? null : (0, hR.Sb)(this.game),
+           game_name: null === this.game ? null : (0, ur.Mb)(this.game),
```

#### 66. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1042` → after: `L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1042) · [Before (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1042)

```diff
-     var HJ = GR(163);
+     var gS = Qr(161);
```

#### 67. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1046` → after: `L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1046) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1046)

```diff
-       return null !== (JR = null === (GR = HJ.j[RR]) || void 0 === GR ? void 0 : GR.toLowerCase()) && void 0 !== JR ? JR : String(RR)
+       return null !== (Sr = null === (Qr = gS.i[rr]) || void 0 === Qr ? void 0 : Qr.toLowerCase()) && void 0 !== Sr ? Sr : String(rr)
```

#### 68. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1154` → after: `L1154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1154) · [Before (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1154)

```diff
-         this.replay = RR, this.quitContext = JR, this.settings = yJ.d.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
+         this.replay = rr, this.quitContext = Sr, this.settings = ZS.c.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
```

#### 69. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1157` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1157) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1157)

```diff
-         uJ.n.subscribe("purchaseStarted", (RR => {
+         aS.i.subscribe("purchaseStarted", (rr => {
```

#### 70. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1164` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1164) · [Before (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1164)

```diff
-         })), uJ.n.subscribe("purchaseEnded", (RR => {
+         })), aS.i.subscribe("purchaseEnded", (rr => {
```

#### 71. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1171` → after: `L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1171) · [Before (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1171)

```diff
-         })), uJ.n.subscribe("adRequested", (RR => {
+         })), aS.i.subscribe("adRequested", (rr => {
```

#### 72. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1181` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1181) · [Before (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1181)

```diff
-         })), uJ.n.subscribe("appManagerUpdated|soundOnFromAd", (RR => {
+         })), aS.i.subscribe("appManagerUpdated|soundOnFromAd", (rr => {
```

#### 73. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1183-L1184` → after: `L1183-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1183-L1184) · [Before (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1183-L1184)

```diff
-         })), uJ.n.subscribe("appManagerUpdated|clientEscMenuOptions", (RR => {
-           yJ.d.isApplyingDefaults ? this.settings = RR : this.onSettingsChanged(RR)
+         })), aS.i.subscribe("appManagerUpdated|clientEscMenuOptions", (rr => {
+           ZS.c.isApplyingDefaults ? this.settings = rr : this.onSettingsChanged(rr)
```

#### 74. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1192-L1193` → after: `L1192-L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1192-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1192-L1193) · [Before (L1192-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1192-L1193)

```diff
-           ad_kind: null !== (RR = null === yR || void 0 === yR ? void 0 : yR.adKind) && void 0 !== RR ? RR : "unknown",
-           provider: null !== (JR = null === yR || void 0 === yR ? void 0 : yR.provider) && void 0 !== JR ? JR : null,
+           ad_kind: null !== (rr = null === Zr || void 0 === Zr ? void 0 : Zr.adKind) && void 0 !== rr ? rr : "unknown",
+           provider: null !== (Sr = null === Zr || void 0 === Zr ? void 0 : Zr.provider) && void 0 !== Sr ? Sr : null,
```

#### 75. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1210` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1210) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1210)

```diff
-           in_game: "inGame" === yJ.d.get("gameState")
+           in_game: "inGame" === ZS.c.get("gameState")
```

#### 76. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1228` → after: `L1228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1228) · [Before (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1228)

```diff
-       switch ((0, TR.q)(RR)) {
+       switch ((0, dr.w)(rr)) {
```

#### 77. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1234` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1234) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1234)

```diff
-           return (0, TR.E)(RR) ? "public" : "private"
+           return (0, dr.M)(rr) ? "public" : "private"
```

#### 78. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1252)

```diff
-             uJ.n.JK("sessionReplayGameQuit", {
+             aS.i.Jp("sessionReplayGameQuit", {
```

#### 79. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1254)

```diff
-               gameName: "string" === typeof yR ? yR : null
+               gameName: "string" === typeof Zr ? Zr : null
```

#### 80. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1257-L1258` → after: `L1257-L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1257-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1257-L1258) · [Before (L1257-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1257-L1258)

```diff
-           isMenuOpen: VJ.o,
-           isJoinAbandoned: fJ.f,
+           isMenuOpen: pS.l,
+           isJoinAbandoned: ES.d,
```

#### 81. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1263-L1264` → after: `L1263-L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1263-L1264) · [Before (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1263-L1264)

```diff
-             isTouchScreen: () => yJ.d.get("isTouchScreen"),
-             getInputDevice: () => yJ.d.get("activeInputDevice"),
+             isTouchScreen: () => ZS.c.get("isTouchScreen"),
+             getInputDevice: () => ZS.c.get("activeInputDevice"),
```

#### 82. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1268` → after: `L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1268) · [Before (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1268)

```diff
-               uJ.n.JK("sessionReplayStayProgress", RR)
+               aS.i.Jp("sessionReplayStayProgress", rr)
```

#### 83. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1277-L1278` → after: `L1277-L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1277-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1277-L1278) · [Before (L1277-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1277-L1278)

```diff
-         const GR = yJ.d.get("gameState");
-         "inGame" === GR ? this.joinConnectedGame() : "loadingScreen" !== GR && "findingLobby" !== GR || this.leaves.joinStarted(), this.subscribeToGameFlow(), new mJ(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstI … [truncated]
+         const Qr = ZS.c.get("gameState");
+         "inGame" === Qr ? this.joinConnectedGame() : "loadingScreen" !== Qr && "findingLobby" !== Qr || this.leaves.joinStarted(), this.subscribeToGameFlow(), new AS(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstI … [truncated]
```

#### 84. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1281` → after: `L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1281) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1281)

```diff
-           this.UW()
+           this.FY()
```

#### 85. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1292)

```diff
-           const yR = null !== (JR = null === (GR = this.flows.stay) || void 0 === GR ? void 0 : GR.playableAtMs) && void 0 !== JR ? JR : null;
+           const Zr = null !== (Sr = null === (Qr = this.flows.stay) || void 0 === Qr ? void 0 : Qr.playableAtMs) && void 0 !== Sr ? Sr : null;
```

#### 86. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1301` → after: `L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1301) · [Before (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1301)

```diff
-         uJ.n.subscribe("joinedGame", (RR => {
+         aS.i.subscribe("joinedGame", (rr => {
```

#### 87. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1306-L1307` → after: `L1306-L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1306-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1306-L1307) · [Before (L1306-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1306-L1307)

```diff
-           (0, fJ.f)() || this.onJoinedGame(JR, GR)
-         })), uJ.n.subscribe("leaveGame", (() => {
+           (0, ES.d)() || this.onJoinedGame(Sr, Qr)
+         })), aS.i.subscribe("leaveGame", (() => {
```

#### 88. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1309)

```diff
-           const GR = null !== (RR = null === (JR = this.flows.stay) || void 0 === JR ? void 0 : JR.name) && void 0 !== RR ? RR : null;
+           const Qr = null !== (rr = null === (Sr = this.flows.stay) || void 0 === Sr ? void 0 : Sr.name) && void 0 !== rr ? rr : null;
```

#### 89. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1311` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1311) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1311)

```diff
-         })), uJ.n.subscribe("replayViewer|replayLoaded", (() => {
+         })), aS.i.subscribe("replayViewer|replayLoaded", (() => {
```

#### 90. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1314)

```diff
-         })), uJ.n.subscribe("matchmakeAndPlayStepCompleted", (RR => {
+         })), aS.i.subscribe("matchmakeAndPlayStepCompleted", (rr => {
```

#### 91. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1319` → after: `L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1319) · [Before (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1319)

```diff
-         })), uJ.n.subscribe("leftPlayPage", (() => {
+         })), aS.i.subscribe("leftPlayPage", (() => {
```

#### 92. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1321` → after: `L1321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1321) · [Before (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1321)

```diff
-         })), uJ.n.subscribe("joinFailed", (RR => {
+         })), aS.i.subscribe("joinFailed", (rr => {
```

#### 93. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1329` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1329) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1329)

```diff
-             game_name_with_variation: (0, ZJ.d)().requestedGameNameWithVariation,
+             game_name_with_variation: (0, jS.b)().requestedGameNameWithVariation,
```

#### 94. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1332` → after: `L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1332) · [Before (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1332)

```diff
-         })), uJ.n.subscribe("kickedForAfk", (() => {
+         })), aS.i.subscribe("kickedForAfk", (() => {
```

#### 95. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1334-L1335` → after: `L1334-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1334-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1334-L1335) · [Before (L1334-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1334-L1335)

```diff
-           this.leaves.kickedForAfk(null !== (RR = null === (JR = this.flows.stay) || void 0 === JR ? void 0 : JR.name) && void 0 !== RR ? RR : null)
-         })), uJ.n.subscribe("unwantedLeftGame", (RR => {
+           this.leaves.kickedForAfk(null !== (rr = null === (Sr = this.flows.stay) || void 0 === Sr ? void 0 : Sr.name) && void 0 !== rr ? rr : null)
+         })), aS.i.subscribe("unwantedLeftGame", (rr => {
```

#### 96. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1342)

```diff
-         })), uJ.n.subscribe("appManagerUpdated|gameState", (RR => {
+         })), aS.i.subscribe("appManagerUpdated|gameState", (rr => {
```

#### 97. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1344)

```diff
-             entry_source: yJ.d.get("gameEntrySource")
+             entry_source: ZS.c.get("gameEntrySource")
```

#### 98. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1348)

```diff
-         })), uJ.n.subscribe("appManagerUpdated|gameEntrySource", (RR => {
+         })), aS.i.subscribe("appManagerUpdated|gameEntrySource", (rr => {
```

#### 99. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1352` → after: `L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1352) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1352)

```diff
-         })), uJ.n.subscribe("sessionReplayPlayerKill", (RR => {
+         })), aS.i.subscribe("sessionReplayPlayerKill", (rr => {
```

#### 100. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1362)

```diff
-         (0, fJ.f)() || (0, ZJ.g)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
+         (0, ES.d)() || (0, jS.e)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
```

#### 101. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1368)

```diff
-         if ((0, ZJ.g)()) return;
+         if ((0, jS.e)()) return;
```

#### 102. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1372` → after: `L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1372) · [Before (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1372)

```diff
-         } = (0, ZJ.d)();
+         } = (0, jS.b)();
```

#### 103. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1377-L1379` → after: `L1377-L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1377-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1377-L1379) · [Before (L1377-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1377-L1379)

```diff
-         const GR = (0, TR.E)(JR),
-           yR = yJ.d.get("gameEntrySource");
-         this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, RR, "autoReconnect" === yR || "manualReconnect" === yR), "inGame" === yJ.d.get("gameState") && this.flows.gamePlayable();
+         const Qr = (0, dr.M)(Sr),
+           Zr = ZS.c.get("gameEntrySource");
+         this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, rr, "autoReconnect" === Zr || "manualReconnect" === Zr), "inGame" === ZS.c.get("gameState") && this.flows.gamePlayable();
```

#### 104. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1382` → after: `L1382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1382) · [Before (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1382)

```diff
-             game_name: (0, hR.Sb)(RR),
+             game_name: (0, ur.Mb)(rr),
```

#### 105. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1385-L1386` → after: `L1385-L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1385-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1385-L1386) · [Before (L1385-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1385-L1386)

```diff
-             game_analytics_id: (0, RJ.e)(RR, GR),
-             is_custom_game: (0, JJ.n)(RR),
+             game_analytics_id: (0, rS.d)(rr, Qr),
+             is_custom_game: (0, SS.l)(rr),
```

#### 106. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1395` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1395) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1395)

```diff
-           $screen_name: uR.is_custom_game ? `custom: ${uR.game_analytics_id}` : uR.game_name
+           $screen_name: ar.is_custom_game ? `custom: ${ar.game_analytics_id}` : ar.game_name
```

#### 107. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1445` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1445) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1445)

```diff
-         this.flows.gK();
+         this.flows.lx();
```

#### 108. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1447-L1448` → after: `L1447-L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1447-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1447-L1448) · [Before (L1447-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1447-L1448)

```diff
-         this.replay.addFpsSample(uR && GR && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / JR : null);
-         const ZR = uR ? GJ.c.getLastColyseusPingMs() : null;
+         this.replay.addFpsSample(ar && Qr && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / Sr : null);
+         const jr = ar ? QS.e.getLastColyseusPingMs() : null;
```

#### 109. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1452-L1454` → after: `L1452-L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1452-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1452-L1454) · [Before (L1452-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1452-L1454)

```diff
-     var jJ = GR(1295),
-       dJ = GR(1282),
-       EJ = GR(41038);
+     var wS = Qr(1267),
+       cS = Qr(1262),
+       FS = Qr(41387);
```

#### 110. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1464` → after: `L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1464) · [Before (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1464)

```diff
-       return EJ.i.fetch(RR, {
+       return FS.g.fetch(rr, {
```

#### 111. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1470` → after: `L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1470) · [Before (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1470)

```diff
-         signal: (0, jJ.t)(3e4)
+         signal: (0, wS.o)(3e4)
```

#### 112. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1477` → after: `L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1477) · [Before (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1477)

```diff
-         this.uploadToken = RR, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (JR = tR.url) && void 0 !==  … [truncated]
+         this.uploadToken = rr, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (Sr = Wr.url) && void 0 !==  … [truncated]
```

#### 113. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1509-L1510` → after: `L1509-L1510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1509-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1509-L1510) · [Before (L1509-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1509-L1510)

```diff
-           GR = (0, EJ.j)(JSON.stringify(JR));
-         JR.properties.length > 32768 || JR.event.length > 64 || YJ(this.uploadToken) + GR > 102400 ? console.warn(`Session replay timeline event ${JR.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
+           Qr = (0, FS.i)(JSON.stringify(Sr));
+         Sr.properties.length > 32768 || Sr.event.length > 64 || oS(this.uploadToken) + Qr > 102400 ? console.warn(`Session replay timeline event ${Sr.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
```

#### 114. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1554` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1554) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1554)

```diff
-         GR.length < RR.events.length && console.error(`Session replay timeline: dropped ${RR.events.length-GR.length} events after 3 attempts.`), this.retries.push(...GR), this.trimToCap()
+         Qr.length < rr.events.length && console.error(`Session replay timeline: dropped ${rr.events.length-Qr.length} events after 3 attempts.`), this.retries.push(...Qr), this.trimToCap()
```

#### 115. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1565` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1565) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1565)

```diff
-           yR = await this.post(this.url, GR, (0, EJ.j)(GR)), yR.ok && (tR = await yR.json())
+           Zr = await this.post(this.url, Qr, (0, FS.i)(Qr)), Zr.ok && (Wr = await Zr.json())
```

#### 116. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1569` → after: `L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1569) · [Before (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1569)

```diff
-         return null === tR ? 408 === yR.status || 429 === yR.status || yR.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${yR.status}; dropped ${RR.events.length} events.`), "dropped") : "rejected" in tR ? tR.retryable ? "retryLater" : ( … [truncated]
+         return null === Wr ? 408 === Zr.status || 429 === Zr.status || Zr.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${Zr.status}; dropped ${rr.events.length} events.`), "dropped") : "rejected" in Wr ? Wr.retryable ? "retryLater" : ( … [truncated]
```

#### 117. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1572-L1574` → after: `L1572-L1574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1572-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1572-L1574) · [Before (L1572-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1572-L1574)

```diff
-     var TJ = GR(41049),
-       sJ = GR(5492),
-       hJ = GR(1406);
+     var dS = Qr(41403),
+       sS = Qr(5448),
+       uS = Qr(1371);
```

#### 118. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1612-L1613` → after: `L1612-L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1612-L1613) · [Before (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1612-L1613)

```diff
-             showsChat: (0, yR.y)(GR),
-             allowAutomatedBrowsers: (0, sJ.c)((0, sJ.i)(), !1),
+             showsChat: (0, Zr.u)(Qr),
+             allowAutomatedBrowsers: (0, sS.e)((0, sS.j)(), !1),
```

#### 119. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1625` → after: `L1625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1625) · [Before (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1625)

```diff
-             RR !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${RR} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
+             rr !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${rr} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
```

#### 120. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1638` → after: `L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1638) · [Before (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1638)

```diff
-               client_build: IR.d
+               client_build: kr.e
```

#### 121. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1650` → after: `L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1650) · [Before (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1650)

```diff
-               }), uJ.n.JK("sessionReplayLowFps", {
+               }), aS.i.Jp("sessionReplayLowFps", {
```

#### 122. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1659` → after: `L1659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1659) · [Before (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1659)

```diff
-               }), uJ.n.JK("sessionReplayLowFps", {
+               }), aS.i.Jp("sessionReplayLowFps", {
```

#### 123. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1664)

```diff
-             dashboardHost: null !== (JR = RR.posthog.dashboardHost) && void 0 !== JR ? JR : RR.posthog.apiHost,
+             dashboardHost: null !== (Sr = rr.posthog.dashboardHost) && void 0 !== Sr ? Sr : rr.posthog.apiHost,
```

#### 124. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1751` → after: `L1751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1751) · [Before (L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1751)

```diff
-           epochMs: (0, TJ.c)(),
+           epochMs: (0, dS.e)(),
```

#### 125. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1810)

```diff
-   41049: (RR, JR, GR) => {
+   41403: (rr, Sr, Qr) => {
```

#### 126. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1812` → after: `L1812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1812) · [Before (L1812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1812)

```diff
-       c: () => uR
+       e: () => ar
```

#### 127. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1823` → after: `L1823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1823) · [Before (L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1823)

```diff
-   41038: (RR, JR, GR) => {
+   41387: (rr, Sr, Qr) => {
```

#### 128. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1825-L1827` → after: `L1825-L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1825-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1825-L1827) · [Before (L1825-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1825-L1827)

```diff
-       e: () => yR,
-       i: () => uR,
-       j: () => tR
+       d: () => Zr,
+       g: () => ar,
+       i: () => Wr
```

#### 129. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1859` → after: `L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1859) · [Before (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1859)

```diff
-         return (null !== (JR = this.inFlightLabels.get(RR)) && void 0 !== JR ? JR : 0) > 0
+         return (null !== (Sr = this.inFlightLabels.get(rr)) && void 0 !== Sr ? Sr : 0) > 0
```

#### 130. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1872` → after: `L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1872) · [Before (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1872)

```diff
-         void 0 !== RR && this.inFlightLabels.set(RR, (null !== (GR = this.inFlightLabels.get(RR)) && void 0 !== GR ? GR : 0) + JR)
+         void 0 !== rr && this.inFlightLabels.set(rr, (null !== (Qr = this.inFlightLabels.get(rr)) && void 0 !== Qr ? Qr : 0) + Sr)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (141 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db)

#### 1. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4)

```diff
-   41087: () => {
+   41452: () => {
```

#### 2. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L26)

```diff
-           return "symbol" == RR(GR) ? GR : GR + ""
+           return "symbol" == rr(Qr) ? Qr : Qr + ""
```

#### 3. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L114)

```diff
-       new RegExp(`^${aR.source}`, "i"), new RegExp(aR.source, "gi"), "0".repeat(32), "0".repeat(16);
+       new RegExp(`^${tr.source}`, "i"), new RegExp(tr.source, "gi"), "0".repeat(32), "0".repeat(16);
```

#### 4. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L179)

```diff
-         const yR = `${RR}.${String(GR)}`;
+         const Zr = `${rr}.${String(Qr)}`;
```

#### 5. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L213)

```diff
-               return "function" == typeof RR ? null !== (JR = RR.__rrweb_layer__) && void 0 !== JR ? JR : RR.__posthog_layer__ : void 0
+               return "function" == typeof rr ? null !== (Sr = rr.__rrweb_layer__) && void 0 !== Sr ? Sr : rr.__posthog_layer__ : void 0
```

#### 6. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L235)

```diff
-             XR = (null == RR ? void 0 : RR.toString().includes("[native code]")) ? RR : null
+             yr = (null == rr ? void 0 : rr.toString().includes("[native code]")) ? rr : null
```

#### 7. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L306)

```diff
-         }, zR = [], SR = 0, mR = (JR = RR) && JR > 0 ? JR : null, oR = bR(), cR = vR)
+         }, Vr = [], ir = 0, Ar = (Sr = rr) && Sr > 0 ? Sr : null, Cr = lr(), Mr = Xr)
```

#### 8. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L317)

```diff
-         } : (HR -= 1) > 0 ? PR : (PR.durationMs = bR() - oR, PR.deferredStylesheetCount = SR, ER.deferredCount += SR, mR = null, DR(PR.durationMs, cR) ? PR : IR = PR)
+         } : (gr -= 1) > 0 ? Gr : (Gr.durationMs = lr() - Cr, Gr.deferredStylesheetCount = ir, Fr.deferredCount += ir, Ar = null, Rr(Gr.durationMs, Mr) ? Gr : kr = Gr)
```

#### 9. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L408` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L408) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L408)

```diff
-           return "symbol" == yJ(JR) ? JR : JR + ""
+           return "symbol" == ZS(Sr) ? Sr : Sr + ""
```

#### 10. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L439-L440` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L439-L440) · [Before (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L439-L440)

```diff
-         const GR = ["@import", `url(${JSON.stringify(RR.href)})`];
-         return "" === RR.layerName ? GR.push("layer") : RR.layerName && GR.push(`layer(${RR.layerName})`), RR.supportsText && GR.push(`supports(${RR.supportsText})`), RR.media.length && GR.push(RR.media.mediaText), GR.join(" ") + ";"
+         const Qr = ["@import", `url(${JSON.stringify(rr.href)})`];
+         return "" === rr.layerName ? Qr.push("layer") : rr.layerName && Qr.push(`layer(${rr.layerName})`), rr.supportsText && Qr.push(`supports(${rr.supportsText})`), rr.media.length && Qr.push(rr.media.mediaText), Qr.join(" ") + ";"
```

#### 11. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L499` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L499)

```diff
-           return RR && null !== (JR = null === (GR = this.getMeta(RR)) || void 0 === GR ? void 0 : GR.id) && void 0 !== JR ? JR : -1
+           return rr && null !== (Sr = null === (Qr = this.getMeta(rr)) || void 0 === Qr ? void 0 : Qr.id) && void 0 !== Sr ? Sr : -1
```

#### 12. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L501)

```diff
-         JtR(RR) {
+         lZr(rr) {
```

#### 13. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L527` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L527) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L527)

```diff
-           const GR = this.JtR(RR);
+           const Qr = this.lZr(rr);
```

#### 14. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L566` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L566) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L566)

```diff
-         return yR ? tR ? ZR && CJ.has(AJ(GR)) ? yR : "*".repeat(yR.length) : uR ? uR(GR, yR, JR) : yR : yR
+         return Zr ? Wr ? jr && KS.has(eS(Qr)) ? Zr : "*".repeat(Zr.length) : ar ? ar(Qr, Zr, Sr) : Zr : Zr
```

#### 15. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L588-L590` → after: `L588-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L588-L590) · [Before (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L588-L590)

```diff
-           if (pJ.test(qR) || gJ.test(qR)) return `url(${iR}${qR}${iR})`;
-           if (bJ.test(qR)) return `url(${iR}${qR}${iR})`;
-           if ("/" === qR[0]) return `url(${iR}${function(RR){let JR="";return JR=RR.indexOf("//")>-1?RR.split("/").slice(0,3).join("/"):RR.split("/")[0],JR=JR.split("?")[0],JR}(JR)+qR}${iR})`;
+           if (OS.test(Ir) || LS.test(Ir)) return `url(${fr}${Ir}${fr})`;
+           if (lS.test(Ir)) return `url(${fr}${Ir}${fr})`;
+           if ("/" === Ir[0]) return `url(${fr}${function(rr){let Sr="";return Sr=rr.indexOf("//")>-1?rr.split("/").slice(0,3).join("/"):rr.split("/")[0],Sr=Sr.split("?")[0],Sr}(Sr)+Ir}${fr})`;
```

#### 16. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L595)

```diff
-           return `url(${iR}${fR.join("/")}${iR})`
+           return `url(${fr}${Er.join("/")}${fr})`
```

#### 17. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L652-L653` → after: `L652-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L652-L653) · [Before (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L652-L653)

```diff
-                   const ZR = tR.toDataURL(GR || "image/webp", null != yR ? yR : .4),
-                     qR = JR.length > ZR.length ? ZR : JR;
+                   const jr = Wr.toDataURL(Qr || "image/webp", null != Zr ? Zr : .4),
+                     Ir = Sr.length > jr.length ? jr : Sr;
```

#### 18. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L712)

```diff
-         }(RR, yR) : "style" === GR ? vJ(yR, SJ(RR)) : "object" === JR && "data" === GR ? zJ(RR, yR) : yR : zJ(RR, yR)
+         }(rr, Zr) : "style" === Qr ? XS(Zr, iS(rr)) : "object" === Sr && "data" === Qr ? VS(rr, Zr) : Zr : VS(rr, Zr)
```

#### 19. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L742)

```diff
-               if (tR.closest(`.${JR}`)) return !0
+               if (Wr.closest(`.${Sr}`)) return !0
```

#### 20. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L805` → after: `L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L805) · [Before (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L805)

```diff
-         if (OR >= xR) return JG = !0, RG || (RG = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${xR}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
+         if (Pr >= Hr) return SQ = !0, rQ || (rQ = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${Hr}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
```

#### 21. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L967` → after: `L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L967) · [Before (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L967)

```diff
-                         console.warn(`Cannot inline img src=${yR}! Error: ${RR}`)
+                         console.warn(`Cannot inline img src=${Zr}! Error: ${rr}`)
```

#### 22. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L987-L990` → after: `L987-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L987-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L987-L990) · [Before (L987-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L987-L990)

```diff
-                     rr_width: `${JR}px`,
-                     rr_height: `${yR}px`,
-                     rr_left: `${Math.floor(tR+((null===(bR=GR.defaultView)||void 0===bR?void 0:bR.scrollX)||0))}px`,
-                     rr_top: `${Math.floor(uR+((null===(vR=GR.defaultView)||void 0===vR?void 0:vR.scrollY)||0))}px`
+                     rr_width: `${Sr}px`,
+                     rr_height: `${Zr}px`,
+                     rr_left: `${Math.floor(Wr+((null===(lr=Qr.defaultView)||void 0===lr?void 0:lr.scrollX)||0))}px`,
+                     rr_top: `${Math.floor(ar+((null===(Xr=Qr.defaultView)||void 0===Xr?void 0:Xr.scrollY)||0))}px`
```

#### 23. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1054` → after: `L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1054) · [Before (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1054)

```diff
-                     console.warn(`Cannot get CSS styles from text's parentNode. Error: ${JR}`, RR)
+                     console.warn(`Cannot get CSS styles from text's parentNode. Error: ${Sr}`, rr)
```

#### 24. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1114` → after: `L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1114) · [Before (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1114)

```diff
-                 return null !== (JR = null == yR ? void 0 : yR[1]) && void 0 !== JR ? JR : null
+                 return null !== (Sr = null == Zr ? void 0 : Zr[1]) && void 0 !== Sr ? Sr : null
```

#### 25. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1413)

```diff
-           JtR: () => (console.warn(fG), null),
+           lZr: () => (console.warn(EQ), null),
```

#### 26. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1500` → after: `L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1500) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1500)

```diff
-         return RR ? RR.nodeType === RR.ELEMENT_NODE ? RR : gR.parentElement(RR) : null
+         return rr ? rr.nodeType === rr.ELEMENT_NODE ? rr : Lr.parentElement(rr) : null
```

#### 27. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1554` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1554) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1554)

```diff
-           return null !== (JR = this.styleIDMap.get(RR)) && void 0 !== JR ? JR : -1
+           return null !== (Sr = this.styleIDMap.get(rr)) && void 0 !== Sr ? Sr : -1
```

#### 28. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1586)

```diff
-         return "boolean" == typeof GR ? GR : function(RR) {
+         return "boolean" == typeof Qr ? Qr : function(rr) {
```

#### 29. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1631)

```diff
-         xG = (RR, JR) => `${RR}@${JR}`,
+         HQ = (rr, Sr) => `${rr}@${Sr}`,
```

#### 30. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1643` → after: `L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1643) · [Before (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1643)

```diff
-                 GR = bR() - RR, yR = JR, HR > 0 || DR(GR, null != yR ? yR : vR) || GR > dR.slowestBatchMs && (dR.slowestBatchMs = GR)
+                 Qr = lr() - rr, Zr = Sr, gr > 0 || Rr(Qr, null != Zr ? Zr : Xr) || Qr > cr.slowestBatchMs && (cr.slowestBatchMs = Qr)
```

#### 31. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1815` → after: `L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1815) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1815)

```diff
-                     ZR = null !== (JR = RR.attributeNamespace) && void 0 !== JR ? JR : null;
+                     jr = null !== (Sr = rr.attributeNamespace) && void 0 !== Sr ? Sr : null;
```

#### 32. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1820-L1822` → after: `L1820-L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1820-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1820-L1822) · [Before (L1820-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1820-L1822)

```diff
-                       if ("http://www.w3.org/1999/xlink" === GR) return `xlink:${JR}`;
-                       if ("http://www.w3.org/XML/1998/namespace" === GR) return `xml:${JR}`;
-                       if ("http://www.w3.org/2000/xmlns/" === GR) return "xmlns" === JR ? JR : `xmlns:${JR}`;
+                       if ("http://www.w3.org/1999/xlink" === Qr) return `xlink:${Sr}`;
+                       if ("http://www.w3.org/XML/1998/namespace" === Qr) return `xml:${Sr}`;
+                       if ("http://www.w3.org/2000/xmlns/" === Qr) return "xmlns" === Sr ? Sr : `xmlns:${Sr}`;
```

#### 33. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1824` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1824) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1824)

```diff
-                       return tR ? `${tR}:${JR}` : JR
+                       return Wr ? `${Wr}:${Sr}` : Sr
```

#### 34. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1864` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1864) · [Before (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1864)

```diff
-                         yR !== JR.style.getPropertyValue(RR) || tR !== JR.style.getPropertyPriority(RR) ? fR.styleDiff[RR] = "" === tR ? yR : [yR, tR] : fR._unchangedStyles[RR] = [yR, tR]
+                         Zr !== Sr.style.getPropertyValue(rr) || Wr !== Sr.style.getPropertyPriority(rr) ? Er.styleDiff[rr] = "" === Wr ? Zr : [Zr, Wr] : Er._unchangedStyles[rr] = [Zr, Wr]
```

#### 35. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2066` → after: `L2066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2066) · [Before (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2066)

```diff
-             const KR = `${fR},${VR}`;
+             const xr = `${Er},${pr}`;
```

#### 36. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2117` → after: `L2117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2117) · [Before (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2117)

```diff
-         ZR = GR.getId("#document" === JR.nodeName ? JR : gR.host(JR));
+         jr = Qr.getId("#document" === Sr.nodeName ? Sr : Lr.host(Sr));
```

#### 37. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2383` → after: `L2383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2383) · [Before (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2383)

```diff
-                 "radio" === LR && nR && aR && GR.querySelectorAll(`input[type="radio"][name="${nR}"]`).forEach((RR => {
+                 "radio" === hr && zr && tr && Qr.querySelectorAll(`input[type="radio"][name="${zr}"]`).forEach((rr => {
```

#### 38. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2552` → after: `L2552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2552) · [Before (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2552)

```diff
-                 return uR.CSSStyleSheet.prototype.insertRule.apply(this, [`${RR} { ${JR} }`, GR])
+                 return ar.CSSStyleSheet.prototype.insertRule.apply(this, [`${rr} { ${Sr} }`, Qr])
```

#### 39. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2765` → after: `L2765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2765) · [Before (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2765)

```diff
-                   fontSource: "string" == typeof JR ? JR : JSON.stringify(Array.from(new Uint8Array(JR)))
+                   fontSource: "string" == typeof Sr ? Sr : JSON.stringify(Array.from(new Uint8Array(Sr)))
```

#### 40. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2813` → after: `L2813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2813) · [Before (L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2813)

```diff
-                 WL: qR
+                 yh: Ir
```

#### 41. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2832` → after: `L2832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2832) · [Before (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2832)

```diff
-                   console.warn(`Custom element callback failed for ${JR}`)
+                   console.warn(`Custom element callback failed for ${Sr}`)
```

#### 42. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2838` → after: `L2838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2838) · [Before (L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2838)

```diff
-           for (const JR of RR.plugins) KR(`plugin:${JR.name}`, (() => JR.observer(JR.callback, GR, JR.options)))
+           for (const Sr of rr.plugins) xr(`plugin:${Sr.name}`, (() => Sr.observer(Sr.callback, Qr, Sr.options)))
```

#### 43. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2873` → after: `L2873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2873) · [Before (L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2873)

```diff
-             return "number" != typeof JR || 0 > JR ? JR : null !== (yR = (GR || this.getLocalIdToRemoteIdMap(RR)).get(JR)) && void 0 !== yR ? yR : -1
+             return "number" != typeof Sr || 0 > Sr ? Sr : null !== (Zr = (Qr || this.getLocalIdToRemoteIdMap(rr)).get(Sr)) && void 0 !== Zr ? Zr : -1
```

#### 44. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2906` → after: `L2906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2906) · [Before (L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2906)

```diff
-             return null !== (JR = null !== (GR = null === (yR = this.attachedIframes.get(RR)) || void 0 === yR ? void 0 : yR.element) && void 0 !== GR ? GR : this.iframeElementsById.get(RR)) && void 0 !== JR ? JR : null
+             return null !== (Sr = null !== (Qr = null === (Zr = this.attachedIframes.get(rr)) || void 0 === Zr ? void 0 : Zr.element) && void 0 !== Qr ? Qr : this.iframeElementsById.get(rr)) && void 0 !== Sr ? Sr : null
```

#### 45. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3058` → after: `L3058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3058) · [Before (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3058)

```diff
-                     return JR.data.WL.forEach((JR => {
+                     return Sr.data.yh.forEach((Sr => {
```

#### 46. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3092` → after: `L3092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3092) · [Before (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3092)

```diff
-               GR = (null == JR ? void 0 : JR.element) || this.iframeElementsById.get(RR) || this.mirror.JtR(RR);
+               Qr = (null == Sr ? void 0 : Sr.element) || this.iframeElementsById.get(rr) || this.mirror.lZr(rr);
```

#### 47. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3159` → after: `L3159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3159) · [Before (L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3159)

```diff
-             const uR = null !== (GR = null === (tR = gR.host(RR)) || void 0 === tR ? void 0 : tR.ownerDocument) && void 0 !== GR ? GR : JR,
+             const ar = null !== (Qr = null === (Wr = Lr.host(rr)) || void 0 === Wr ? void 0 : Wr.ownerDocument) && void 0 !== Qr ? Qr : Sr,
```

#### 48. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3334` → after: `L3334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3334) · [Before (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3334)

```diff
-                     return JR && "object" == typeof JR ? JR : null
+                     return Sr && "object" == typeof Sr ? Sr : null
```

#### 49. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3343` → after: `L3343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3343) · [Before (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3343)

```diff
-                     usage: "number" == typeof uR.usage ? uR.usage | qR : qR
+                     usage: "number" == typeof ar.usage ? ar.usage | Ir : Ir
```

#### 50. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3440` → after: `L3440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3440) · [Before (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3440)

```diff
-         console.warn(`[replay] canvas capture: ${RR}`, ...GR)
+         console.warn(`[replay] canvas capture: ${rr}`, ...Qr)
```

#### 51. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3501` → after: `L3501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3501) · [Before (L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3501)

```diff
-               return Xy(`disabled because the encode worker did not start. ${Cy}`, RR), void iR()
+               return yZ(`disabled because the encode worker did not start. ${KZ}`, rr), void fr()
```

#### 52. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3506` → after: `L3506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3506) · [Before (L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3506)

```diff
-               wR = !0, Xy(`stopped because the encode worker failed. ${Cy}`, RR), cancelAnimationFrame(LR), null === (JR = VR.terminate) || void 0 === JR || JR.call(VR), this.resetFrameDedup = null
+               mr = !0, yZ(`stopped because the encode worker failed. ${KZ}`, rr), cancelAnimationFrame(hr), null === (Sr = pr.terminate) || void 0 === Sr || Sr.call(pr), this.resetFrameDedup = null
```

#### 53. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3812` → after: `L3812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3812) · [Before (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3812)

```diff
-                           if (JR.media && "string" == typeof JR.media.mediaText) return `@media ${JR.media.mediaText} {`;
+                           if (Sr.media && "string" == typeof Sr.media.mediaText) return `@media ${Sr.media.mediaText} {`;
```

#### 54. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3816` → after: `L3816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3816) · [Before (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3816)

```diff
-                             return `${RR.selectorText} {${GR?" "+GR:""}`
+                             return `${rr.selectorText} {${Qr?" "+Qr:""}`
```

#### 55. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3818` → after: `L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3818) · [Before (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3818)

```diff
-                           if ("containerName" in JR) return "string" != typeof JR.containerQuery || JR.containerName && !LJ.test(JR.containerName) ? null : `@container ${JR.containerName?`${JR.containerName} `:""}${JR.containerQuery} {`;
+                           if ("containerName" in Sr) return "string" != typeof Sr.containerQuery || Sr.containerName && !hS.test(Sr.containerName) ? null : `@container ${Sr.containerName?`${Sr.containerName} `:""}${Sr.containerQuery} {`;
```

#### 56. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3827` → after: `L3827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3827) · [Before (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3827)

```diff
-                             return "" === yR || "Object" === yR || "CSSSupportsRule" === yR ? `@supports ${JR.conditionText} {` : null
+                             return "" === Zr || "Object" === Zr || "CSSSupportsRule" === Zr ? `@supports ${Sr.conditionText} {` : null
```

#### 57. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3829` → after: `L3829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3829) · [Before (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3829)

```diff
-                           return "string" == typeof JR.name ? "keyText" in JR.cssRules[0] ? LJ.test(JR.name) ? `@keyframes ${JR.name} {` : null : "" === JR.name ? "@layer {" : nJ.test(JR.name) ? `@layer ${JR.name} {` : null : null
+                           return "string" == typeof Sr.name ? "keyText" in Sr.cssRules[0] ? hS.test(Sr.name) ? `@keyframes ${Sr.name} {` : null : "" === Sr.name ? "@layer {" : zS.test(Sr.name) ? `@layer ${Sr.name} {` : null : null
```

#### 58. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3913` → after: `L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3913) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3913)

```diff
-                     let ZR = RR > 0 ? RR : 1;
+                     let jr = rr > 0 ? rr : 1;
```

#### 59. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3942` → after: `L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3942) · [Before (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3942)

```diff
-                   text: () => GR ? yR : null,
+                   text: () => Qr ? Zr : null,
```

#### 60. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3981` → after: `L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3981) · [Before (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3981)

```diff
-                   VR && this.pendingDeferredSheets.delete(ZR), DR(KR = bR() - iR, null != (wR = fR) ? wR : vR) || (ER.totalMs += KR, KR > ER.slowestSliceMs && (ER.slowestSliceMs = KR))
+                   pr && this.pendingDeferredSheets.delete(jr), Rr(xr = lr() - fr, null != (mr = Er) ? mr : Xr) || (Fr.totalMs += xr, xr > Fr.slowestSliceMs && (Fr.slowestSliceMs = xr))
```

#### 61. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4187` → after: `L4187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4187) · [Before (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4187)

```diff
-           } : void 0 !== WR ? WR : {
+           } : void 0 !== nr ? nr : {
```

#### 62. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4228` → after: `L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4228) · [Before (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4228)

```diff
-                   const RR = xy.JtR(yR.node.id);
+                   const rr = HZ.lZr(Zr.node.id);
```

#### 63. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4562` → after: `L4562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4562) · [Before (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4562)

```diff
-               const GR = xy.JtR(JR);
+               const Qr = HZ.lZr(Sr);
```

#### 64. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4712` → after: `L4712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4712) · [Before (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4712)

```diff
-                 uR = null !== (RR = null !== (JR = null !== (GR = null !== (yR = tR.fullscreenElement) && void 0 !== yR ? yR : tR.webkitFullscreenElement) && void 0 !== GR ? GR : tR.mozFullScreenElement) && void 0 !== JR ? JR : tR.msFullscreenElement) && void 0 !== RR ? RR : null … [truncated]
+                 ar = null !== (rr = null !== (Sr = null !== (Qr = null !== (Zr = Wr.fullscreenElement) && void 0 !== Zr ? Zr : Wr.webkitFullscreenElement) && void 0 !== Qr ? Qr : Wr.mozFullScreenElement) && void 0 !== Sr ? Sr : Wr.msFullscreenElement) && void 0 !== rr ? rr : null … [truncated]
```

#### 65. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4765` → after: `L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4765) · [Before (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4765)

```diff
-       new RegExp(`^${oy.source}`, "i"), new RegExp(oy.source, "gi"), "0".repeat(32), "0".repeat(16);
+       new RegExp(`^${CZ.source}`, "i"), new RegExp(CZ.source, "gi"), "0".repeat(32), "0".repeat(16);
```

#### 66. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4788` → after: `L4788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4788) · [Before (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4788)

```diff
-           return "symbol" == Py(JR) ? JR : JR + ""
+           return "symbol" == GZ(Sr) ? Sr : Sr + ""
```

#### 67. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4804` → after: `L4804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4804) · [Before (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4804)

```diff
-             return this.functionName ? `${this.functionName} (${this.fileName}:${RR}:${JR})` : `${this.fileName}:${RR}:${JR}`
+             return this.functionName ? `${this.functionName} (${this.fileName}:${rr}:${Sr})` : `${this.fileName}:${rr}:${Sr}`
```

#### 68. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4817` → after: `L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4817) · [Before (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4817)

```diff
-             if (!JR) throw new Error(`Cannot parse given url: ${RR}`);
+             if (!Sr) throw new Error(`Cannot parse given url: ${rr}`);
```

#### 69. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4919` → after: `L4919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4919) · [Before (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4919)

```diff
-           tR.length > 1 && (GR += `:eq(${tR.indexOf(RR)})`), JR = GR + (JR ? ">" + JR : ""), RR = yR
+           Wr.length > 1 && (Qr += `:eq(${Wr.indexOf(rr)})`), Sr = Qr + (Sr ? ">" + Sr : ""), rr = Zr
```

#### 70. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4957` → after: `L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4957) · [Before (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4957)

```diff
-             return GR.stringLengthLimit && JR.length > GR.stringLengthLimit && (JR = `${JR.slice(0,GR.stringLengthLimit)}...`), JR
+             return Qr.stringLengthLimit && Sr.length > Qr.stringLengthLimit && (Sr = `${Sr.slice(0,Qr.stringLengthLimit)}...`), Sr
```

#### 71. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5002` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5002) · [Before (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5002)

```diff
-             JR.reason instanceof Error ? (GR = JR.reason, tR = [Fy(`Uncaught (in promise) ${GR.name}: ${GR.message}`, yR.stringifyOptions)]) : (GR = new Error, tR = [Fy("Uncaught (in promise)", yR.stringifyOptions), Fy(JR.reason, yR.stringifyOptions)]), RR({
+             Sr.reason instanceof Error ? (Qr = Sr.reason, Wr = [DZ(`Uncaught (in promise) ${Qr.name}: ${Qr.message}`, Zr.stringifyOptions)]) : (Qr = new Error, Wr = [DZ("Uncaught (in promise)", Zr.stringifyOptions), DZ(Sr.reason, Zr.stringifyOptions)]), rr({
```

#### 72. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5064` → after: `L5064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5064) · [Before (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5064)

```diff
-                   return "function" == typeof RR ? null !== (JR = RR.__rrweb_layer__) && void 0 !== JR ? JR : RR.__posthog_layer__ : void 0
+                   return "function" == typeof rr ? null !== (Sr = rr.__rrweb_layer__) && void 0 !== Sr ? Sr : rr.__posthog_layer__ : void 0
```

#### 73. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5086` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5086) · [Before (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5086)

```diff
-       const tt = null != hy ? hy : {},
+       const WW = null != uZ ? uZ : {},
```

#### 74. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5104` → after: `L5104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5104) · [Before (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5104)

```diff
-         return JR > GR && (yR.warn("min cannot be greater than max."), JR = GR), Lt(RR) ? RR > GR ? (yR.warn(" cannot be  greater than max: " + GR + ". Using max value instead."), GR) : JR > RR ? (yR.warn(" cannot be less than min: " + JR + ". Using min value instead."), JR) : RR … [truncated]
+         return Sr > Qr && (Zr.warn("min cannot be greater than max."), Sr = Qr), tW(rr) ? rr > Qr ? (Zr.warn(" cannot be  greater than max: " + Qr + ". Using max value instead."), Qr) : Sr > rr ? (Zr.warn(" cannot be less than min: " + Sr + ". Using min value instead."), Sr) : rr … [truncated]
```

#### 75. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5146` → after: `L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5146) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5146)

```diff
-           }(Xt, `Native gzip produced invalid output: ${RR}`)
+           }(KW, `Native gzip produced invalid output: ${rr}`)
```

#### 76. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5245` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5245) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5245)

```diff
-               GR.error(`You must initialize PostHog before calling ${RR}`)
+               Qr.error(`You must initialize PostHog before calling ${rr}`)
```

#### 77. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5247` → after: `L5247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5247) · [Before (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5247)

```diff
-             createLogger: (JR, GR) => Ot(`${RR} ${JR}`, GR)
+             createLogger: (Sr, Qr) => XW(`${rr} ${Sr}`, Qr)
```

#### 78. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5266` → after: `L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5266) · [Before (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5266)

```diff
-         } = null != yR ? yR : {};
+         } = null != Zr ? Zr : {};
```

#### 79. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5280` → after: `L5280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5280) · [Before (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5280)

```diff
-           if (ft(RR)) return null !== (JR = RR.__posthog_layer__) && void 0 !== JR ? JR : RR.__rrweb_layer__
+           if (EW(rr)) return null !== (Sr = rr.__posthog_layer__) && void 0 !== Sr ? Sr : rr.__rrweb_layer__
```

#### 80. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5347` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5347) · [Before (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5347)

```diff
-             return wt(RR) && RR ? RR : JR
+             return mW(rr) && rr ? rr : Sr
```

#### 81. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5374` → after: `L5374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5374) · [Before (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5374)

```diff
-         return Math.min(st, null !== (JR = RR.payloadSizeLimitBytes) && void 0 !== JR ? JR : st)
+         return Math.min(dW, null !== (Sr = rr.payloadSizeLimitBytes) && void 0 !== Sr ? Sr : dW)
```

#### 82. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5406` → after: `L5406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5406) · [Before (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5406)

```diff
-         return wt(tR) && (tR = parseInt(tR)), tR > GR ? `[SessionRecording] ${yR} body too large to record (${tR} bytes)` : RR
+         return mW(Wr) && (Wr = parseInt(Wr)), Wr > Qr ? `[SessionRecording] ${Zr} body too large to record (${Wr} bytes)` : rr
```

#### 83. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5506` → after: `L5506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5506) · [Before (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5506)

```diff
-         return nt(ZR) ? ZR : uR(ZR)
+         return hW(jr) ? jr : ar(jr)
```

#### 84. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5608` → after: `L5608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5608) · [Before (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5608)

```diff
-         return `${pu}: ${RR}`
+         return `${va}: ${rr}`
```

#### 85. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5612` → after: `L5612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5612) · [Before (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5612)

```diff
-         return `[SessionReplay] Body too large to record (> ${RR} bytes)`
+         return `[SessionReplay] Body too large to record (> ${rr} bytes)`
```

#### 86. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5739` → after: `L5739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5739) · [Before (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5739)

```diff
-             if (uR && ZR) return `Content-Type ${uR} is not supported`;
+             if (ar && jr) return `Content-Type ${ar} is not supported`;
```

#### 87. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6110` → after: `L6110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6110) · [Before (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6110)

```diff
-         return 0 === JR ? wZ : (null == RR ? void 0 : RR.get_property(GR ? yR + GR : tR)) === uR ? VZ : KZ
+         return 0 === Sr ? xj : (null == rr ? void 0 : rr.get_property(Qr ? Zr + Qr : Wr)) === ar ? Ej : pj
```

#### 88. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6116` → after: `L6116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6116) · [Before (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6116)

```diff
-           return "regex" === JR.matching && (null !== (yR = null == GR ? void 0 : GR.get(JR.url)) && void 0 !== yR ? yR : new RegExp(JR.url)).test(RR)
+           return "regex" === Sr.matching && (null !== (Zr = null == Qr ? void 0 : Qr.get(Sr.url)) && void 0 !== Zr ? Zr : new RegExp(Sr.url)).test(rr)
```

#### 89. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6121` → after: `L6121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6121) · [Before (L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6121)

```diff
-         return RR.includes("trigger_activated") ? VZ : RR.includes("trigger_pending") ? KZ : wZ
+         return rr.includes("trigger_activated") ? Ej : rr.includes("trigger_pending") ? pj : xj
```

#### 90. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6268` → after: `L6268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6268) · [Before (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6268)

```diff
-                   uR = nt(JR) ? !0 === JR : GR ? JR === GR : !!JR
+                   ar = hW(Sr) ? !0 === Sr : Qr ? Sr === Qr : !!Sr
```

#### 91. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6381` → after: `L6381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6381) · [Before (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6381)

```diff
-         return JR ? uZ : "trigger_activated" === GR ? ZZ : "trigger_pending" === GR ? qZ : !1 === RR.isSampled ? tZ : ZZ
+         return Sr ? Wj : "trigger_activated" === Qr ? aj : "trigger_pending" === Qr ? jj : !1 === rr.isSampled ? Zj : aj
```

#### 92. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6392` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6392) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6392)

```diff
-         return GR && "trigger_pending" === JR ? qZ : GR && "trigger_disabled" === JR || yR && !RR.isSampled ? tZ : !0 === RR.isSampled ? uZ : ZZ
+         return Qr && "trigger_pending" === Sr ? jj : Qr && "trigger_disabled" === Sr || Zr && !rr.isSampled ? Zj : !0 === rr.isSampled ? Wj : aj
```

#### 93. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6520` → after: `L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6520) · [Before (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6520)

```diff
-           var yR = new(RR instanceof NZ ? NZ : RR instanceof DZ ? DZ : xZ)(GR - JR);
+           var Zr = new(rr instanceof Hj ? Hj : rr instanceof qj ? qj : Pj)(Qr - Sr);
```

#### 94. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6696` → after: `L6696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6696) · [Before (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6696)

```diff
-           }, this.vt = RR => this._rrweb.mirror.JtR(RR), this.bt = RR => {
+           }, this.vt = rr => this._rrweb.mirror.lZr(rr), this.bt = rr => {
```

#### 95. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6698` → after: `L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6698) · [Before (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6698)

```diff
-             return (null !== (JR = null === (GR = RR.removes) || void 0 === GR ? void 0 : GR.length) && void 0 !== JR ? JR : 0) + (null !== (yR = null === (tR = RR.attributes) || void 0 === tR ? void 0 : tR.length) && void 0 !== yR ? yR : 0) + (null !== (uR = null === (ZR = RR.te … [truncated]
+             return (null !== (Sr = null === (Qr = rr.removes) || void 0 === Qr ? void 0 : Qr.length) && void 0 !== Sr ? Sr : 0) + (null !== (Zr = null === (Wr = rr.attributes) || void 0 === Wr ? void 0 : Wr.length) && void 0 !== Zr ? Zr : 0) + (null !== (ar = null === (jr = rr.te … [truncated]
```

#### 96. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6728-L6729` → after: `L6728-L6729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6728-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6728-L6729) · [Before (L6728-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6728-L6729)

```diff
-             bucketSize: null !== (GR = this.it.bucketSize) && void 0 !== GR ? GR : 100,
-             refillRate: null !== (yR = this.it.refillRate) && void 0 !== yR ? yR : 10,
+             bucketSize: null !== (Qr = this.it.bucketSize) && void 0 !== Qr ? Qr : 100,
+             refillRate: null !== (Zr = this.it.refillRate) && void 0 !== Zr ? Zr : 10,
```

#### 97. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6733` → after: `L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6733) · [Before (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6733)

```diff
-           }), this.dt = null !== (tR = this.it.bytesBucketSize) && void 0 !== tR ? tR : 0, this.ht = null !== (uR = this.it.bytesRefillRate) && void 0 !== uR ? uR : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
+           }), this.dt = null !== (Wr = this.it.bytesBucketSize) && void 0 !== Wr ? Wr : 0, this.ht = null !== (ar = this.it.bytesRefillRate) && void 0 !== ar ? ar : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
```

#### 98. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6735` → after: `L6735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6735) · [Before (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6735)

```diff
-           this.xt = Lt(ZR) && Number.isFinite(ZR) && ZR > 0 ? ZR : 3e5
+           this.xt = tW(jr) && Number.isFinite(jr) && jr > 0 ? jr : 3e5
```

#### 99. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6858` → after: `L6858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6858) · [Before (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6858)

```diff
-           const yR = "person" === RR.type ? GR : JR,
+           const Zr = "person" === rr.type ? Qr : Sr,
```

#### 100. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6869` → after: `L6869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6869) · [Before (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6869)

```diff
-         return JR ? RR : "!" + RR
+         return Sr ? rr : "!" + rr
```

#### 101. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6904` → after: `L6904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6904) · [Before (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6904)

```diff
-             return Lt(GR) ? GR : null
+             return tW(Qr) ? Qr : null
```

#### 102. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6930` → after: `L6930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6930) · [Before (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6930)

```diff
-             VR && (KR ? this.qt("sampled") : Xq.warn(`Sample rate (${GR}) has determined that this sessionId (${RR}) will not be sent to the server.`)), null === (JR = this._instance.persistence) || void 0 === JR || JR.register({
+             pr && (xr ? this.qt("sampled") : KI.warn(`Sample rate (${Qr}) has determined that this sessionId (${rr}) will not be sent to the server.`)), null === (Sr = this._instance.persistence) || void 0 === Sr || Sr.register({
```

#### 103. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7008` → after: `L7008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7008) · [Before (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7008)

```diff
-               return tR ? uZ : yR ? qZ : tZ
+               return Wr ? Wj : Zr ? jj : Zj
```

#### 104. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7069` → after: `L7069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7069) · [Before (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7069)

```diff
-                 fR = "string" == typeof JR && JR !== RR, VR = Lt(GR) && GR !== uR, iR = JR === RR && Lt(GR) && GR === uR && nt(yR) ? yR : null
+                 Er = "string" == typeof Sr && Sr !== rr, pr = tW(Qr) && Qr !== ar, fr = Sr === rr && tW(Qr) && Qr === ar && hW(Zr) ? Zr : null
```

#### 105. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7125` → after: `L7125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7125) · [Before (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7125)

```diff
-             return this.Gt.flatMap((JR => "trigger_pending" !== JR.triggerStatusNoSideEffects(RR) ? [] : JR.getPendingTriggerConditions(RR).map((RR => `trigger group "${JR.group.name}": ${RR}`))))
+             return this.Gt.flatMap((Sr => "trigger_pending" !== Sr.triggerStatusNoSideEffects(rr) ? [] : Sr.getPendingTriggerConditions(rr).map((rr => `trigger group "${Sr.group.name}": ${rr}`))))
```

#### 106. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7280` → after: `L7280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7280) · [Before (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7280)

```diff
-           tR = 0 > yR ? GR : GR.slice(yR + 1);
+           Wr = 0 > Zr ? Qr : Qr.slice(Zr + 1);
```

#### 107. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7282` → after: `L7282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7282) · [Before (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7282)

```diff
-           return JR(tR) ? tR : void 0
+           return Sr(Wr) ? Wr : void 0
```

#### 108. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7306` → after: `L7306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7306) · [Before (L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7306)

```diff
-           return tR.length ? tR : void 0
+           return Wr.length ? Wr : void 0
```

#### 109. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7318` → after: `L7318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7318) · [Before (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7318)

```diff
-               GR = "string" == typeof RR ? [RR] : it(RR) ? RR : [],
+               Qr = "string" == typeof rr ? [rr] : fW(rr) ? rr : [],
```

#### 110. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7330` → after: `L7330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7330) · [Before (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7330)

```diff
-           const yR = "@type" === fR ? uR.length ? "string" == typeof tR ? uR[0] : uR : void 0 : "@id" === fR ? jq(Iq(RR, fR), JR) : Sq(Iq(RR, fR), GR.maskUrl);
+           const Zr = "@type" === Er ? ar.length ? "string" == typeof Wr ? ar[0] : ar : void 0 : "@id" === Er ? iI(GI(rr, Er), Sr) : VI(GI(rr, Er), Qr.maskUrl);
```

#### 111. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7348` → after: `L7348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7348) · [Before (L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7348)

```diff
-         return Kt(iR) || Eq(qR, "@graph", iR), Object.keys(qR).length ? qR : null
+         return xW(fr) || cI(Ir, "@graph", fr), Object.keys(Ir).length ? Ir : null
```

#### 112. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7534` → after: `L7534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7534) · [Before (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7534)

```diff
-         return it(RR) && 0 === RR.length ? (Vi = null !== (JR = Vi) && void 0 !== JR ? JR : qi([]), Vi) : qi(RR)
+         return fW(rr) && 0 === rr.length ? (Ef = null !== (Sr = Ef) && void 0 !== Sr ? Sr : jf([]), Ef) : jf(rr)
```

#### 113. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7544` → after: `L7544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7544) · [Before (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7544)

```diff
-           return it(RR) && 0 === RR.length ? Vi || (Ki = null !== (JR = Ki) && void 0 !== JR ? JR : ii([]).then((RR => (Vi = RR, RR))).catch((RR => {
+           return fW(rr) && 0 === rr.length ? Ef || (pf = null !== (Sr = pf) && void 0 !== Sr ? Sr : If([]).then((rr => (Ef = rr, rr))).catch((rr => {
```

#### 114. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7665` → after: `L7665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7665) · [Before (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7665)

```diff
-           return Lt(JR) ? JR : null
+           return tW(Sr) ? Sr : null
```

#### 115. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7669` → after: `L7669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7669) · [Before (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7669)

```diff
-           return null !== (RR = null === (JR = this.re) || void 0 === JR ? void 0 : JR.getMinimumDuration(this.sessionId)) && void 0 !== RR ? RR : null
+           return null !== (rr = null === (Sr = this.re) || void 0 === Sr ? void 0 : Sr.getMinimumDuration(this.sessionId)) && void 0 !== rr ? rr : null
```

#### 116. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7712` → after: `L7712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7712) · [Before (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7712)

```diff
-             return Lt(GR) && Lt(yR) ? yR - GR : null
+             return tW(Qr) && tW(Zr) ? Zr - Qr : null
```

#### 117. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7757-L7760` → after: `L7757-L7760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7757-L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7757-L7760) · [Before (L7757-L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7757-L7760)

```diff
-             KR = null !== (uR = null == VR ? void 0 : VR.maskAllInputs) && void 0 !== uR ? uR : null == fR ? void 0 : fR.maskAllInputs,
-             wR = null !== (ZR = null == VR ? void 0 : VR.maskTextSelector) && void 0 !== ZR ? ZR : null == fR ? void 0 : fR.maskTextSelector,
-             rR = null !== (qR = null == VR ? void 0 : VR.blockSelector) && void 0 !== qR ? qR : null == fR ? void 0 : fR.blockSelector,
-             eR = null !== (iR = null == VR ? void 0 : VR.maskAllElementAttributes) && void 0 !== iR ? iR : null == fR ? void 0 : fR.maskAllElementAttributes;
+             xr = null !== (ar = null == pr ? void 0 : pr.maskAllInputs) && void 0 !== ar ? ar : null == Er ? void 0 : Er.maskAllInputs,
+             mr = null !== (jr = null == pr ? void 0 : pr.maskTextSelector) && void 0 !== jr ? jr : null == Er ? void 0 : Er.maskTextSelector,
+             Nr = null !== (Ir = null == pr ? void 0 : pr.blockSelector) && void 0 !== Ir ? Ir : null == Er ? void 0 : Er.blockSelector,
+             Ur = null !== (fr = null == pr ? void 0 : pr.maskAllElementAttributes) && void 0 !== fr ? fr : null == Er ? void 0 : Er.maskAllElementAttributes;
```

#### 118. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7797-L7799` → after: `L7797-L7799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7797-L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7797-L7799) · [Before (L7797-L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7797-L7799)

```diff
-             fR = null !== (JR = null !== (GR = null == qR ? void 0 : qR.recordCanvas) && void 0 !== GR ? GR : null == iR ? void 0 : iR.enabled) && void 0 !== JR && JR,
-             VR = null !== (yR = null !== (tR = null == qR ? void 0 : qR.canvasFps) && void 0 !== tR ? tR : null == iR ? void 0 : iR.fps) && void 0 !== yR ? yR : 4;
-           let KR = null !== (uR = null !== (ZR = null == qR ? void 0 : qR.canvasQuality) && void 0 !== ZR ? ZR : null == iR ? void 0 : iR.quality) && void 0 !== uR ? uR : .4;
+             Er = null !== (Sr = null !== (Qr = null == Ir ? void 0 : Ir.recordCanvas) && void 0 !== Qr ? Qr : null == fr ? void 0 : fr.enabled) && void 0 !== Sr && Sr,
+             pr = null !== (Zr = null !== (Wr = null == Ir ? void 0 : Ir.canvasFps) && void 0 !== Wr ? Wr : null == fr ? void 0 : fr.fps) && void 0 !== Zr ? Zr : 4;
+           let xr = null !== (ar = null !== (jr = null == Ir ? void 0 : Ir.canvasQuality) && void 0 !== jr ? jr : null == fr ? void 0 : fr.quality) && void 0 !== ar ? ar : .4;
```

#### 119. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7814` → after: `L7814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7814) · [Before (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7814)

```diff
-           return null != GR ? GR : JR
+           return null != Qr ? Qr : Sr
```

#### 120. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7827` → after: `L7827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7827) · [Before (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7827)

```diff
-             fR = !!(nt(qR) ? qR : iR);
+             Er = !!(hW(Ir) ? Ir : fr);
```

#### 121. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7840` → after: `L7840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7840) · [Before (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7840)

```diff
-           if (this.iK && ft(uR))
+           if (this.Wx && EW(ar))
```

#### 122. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7873` → after: `L7873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7873) · [Before (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7873)

```diff
-                   return !GR && JR.isInitial ? GR : yR(yR({}, JR), {}, {
+                   return !Qr && Sr.isInitial ? Qr : Zr(Zr({}, Sr), {}, {
```

#### 123. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7891` → after: `L7891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7891) · [Before (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7891)

```diff
-                   return et(ZR) && uR ? (iu.add(uR), uR) : null != ZR ? ZR : void 0
+                   return UW(jr) && ar ? (Ia.add(ar), ar) : null != jr ? jr : void 0
```

#### 124. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7901` → after: `L7901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7901) · [Before (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7901)

```diff
-               })(this._instance.config, this.iK, RR)), {}, {
+               })(this._instance.config, this.Wx, rr)), {}, {
```

#### 125. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7937` → after: `L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7937) · [Before (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7937)

```diff
-             return null !== (GR = null == yR ? void 0 : yR.name) && void 0 !== GR ? GR : null == yR ? void 0 : yR.url
+             return null !== (Qr = null == Zr ? void 0 : Zr.name) && void 0 !== Qr ? Qr : null == Zr ? void 0 : Zr.url
```

#### 126. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8007` → after: `L8007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8007) · [Before (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8007)

```diff
-             return Lt(RR) && Number.isFinite(RR) && RR >= 1e3 && 36e5 >= RR ? RR : 6e4
+             return tW(rr) && Number.isFinite(rr) && rr >= 1e3 && 36e5 >= rr ? rr : 6e4
```

#### 127. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8009` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8009) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8009)

```diff
-           return null !== (JR = null === (GR = this._instance.config.session_recording) || void 0 === GR ? void 0 : GR.full_snapshot_interval_millis) && void 0 !== JR ? JR : 3e5
+           return null !== (Sr = null === (Qr = this._instance.config.session_recording) || void 0 === Qr ? void 0 : Qr.full_snapshot_interval_millis) && void 0 !== Sr ? Sr : 3e5
```

#### 128. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8039` → after: `L8039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8039) · [Before (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8039)

```diff
-               const GR = "url" === RR ? Su : ju;
+               const Qr = "url" === rr ? Va : ia;
```

#### 129. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8058` → after: `L8058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8058) · [Before (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8058)

```diff
-             JR = Vt(RR) ? RR : JSON.parse(RR)
+             Sr = pW(rr) ? rr : JSON.parse(rr)
```

#### 130. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8064` → after: `L8064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8064) · [Before (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8064)

```diff
-             const yR = null !== (GR = JR.cache_timestamp) && void 0 !== GR ? GR : Date.now();
+             const Zr = null !== (Qr = Sr.cache_timestamp) && void 0 !== Qr ? Qr : Date.now();
```

#### 131. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8186-L8187` → after: `L8186-L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8186-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8186-L8187) · [Before (L8186-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8186-L8187)

```diff
-           const GR = `${this.sessionId}:${RR}`;
-           GR !== this.Vn && (this.Vn = GR, Ji.info(`holding buffer: ${RR}. nothing is uploaded until the user interacts with the page`))
+           const Qr = `${this.sessionId}:${rr}`;
+           Qr !== this.Vn && (this.Vn = Qr, rf.info(`holding buffer: ${rr}. nothing is uploaded until the user interacts with the page`))
```

#### 132. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8342-L8343` → after: `L8342-L8343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8342-L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8342-L8343) · [Before (L8342-L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8342-L8343)

```diff
-           const WR = null !== (yR = null !== (tR = null !== (uR = null == LR ? void 0 : LR.currentSessionId) && void 0 !== uR ? uR : null == nR ? void 0 : nR.nextSessionId) && void 0 !== tR ? tR : null == UR ? void 0 : UR.sessionId) && void 0 !== yR ? yR : this.Xt,
-             AR = null !== (ZR = null !== (qR = null !== (iR = null == LR ? void 0 : LR.currentWindowId) && void 0 !== iR ? iR : null == nR ? void 0 : nR.nextWindowId) && void 0 !== qR ? qR : null == UR ? void 0 : UR.windowId) && void 0 !== ZR ? ZR : this.je;
+           const nr = null !== (Zr = null !== (Wr = null !== (ar = null == hr ? void 0 : hr.currentSessionId) && void 0 !== ar ? ar : null == zr ? void 0 : zr.nextSessionId) && void 0 !== Wr ? Wr : null == Yr ? void 0 : Yr.sessionId) && void 0 !== Zr ? Zr : this.Xt,
+             er = null !== (jr = null !== (Ir = null !== (fr = null == hr ? void 0 : hr.currentWindowId) && void 0 !== fr ? fr : null == zr ? void 0 : zr.nextWindowId) && void 0 !== Ir ? Ir : null == Yr ? void 0 : Yr.windowId) && void 0 !== jr ? jr : this.je;
```

#### 133. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8436` → after: `L8436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8436) · [Before (L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8436)

```diff
-           return null !== (RR = null === (JR = this.re) || void 0 === JR ? void 0 : JR.getPendingTriggerConditions(this.sessionId)) && void 0 !== RR ? RR : []
+           return null !== (rr = null === (Sr = this.re) || void 0 === Sr ? void 0 : Sr.getPendingTriggerConditions(this.sessionId)) && void 0 !== rr ? rr : []
```

#### 134. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8447` → after: `L8447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8447) · [Before (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8447)

```diff
-             yR = `${this.sessionId}:${GR}`;
+             Zr = `${this.sessionId}:${Qr}`;
```

#### 135. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8450` → after: `L8450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8450) · [Before (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8450)

```diff
-           }), Ji.info(`buffering: ${GR}`))
+           }), rf.info(`buffering: ${Qr}`))
```

#### 136. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8649` → after: `L8649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8649) · [Before (L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8649)

```diff
-             const RR = null != KR ? KR : {},
+             const rr = null != xr ? xr : {},
```

#### 137. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8671` → after: `L8671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8671) · [Before (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8671)

```diff
-                 return null !== (yR = GR(RR)) && void 0 !== yR ? yR : null
+                 return null !== (Zr = Qr(rr)) && void 0 !== Zr ? Zr : null
```

#### 138. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8676` → after: `L8676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8676) · [Before (L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8676)

```diff
-           }), this.ln && (JR.maskAllInputs = null === (tR = this.ln.maskAllInputs) || void 0 === tR || tR, JR.maskTextSelector = null !== (uR = this.ln.maskTextSelector) && void 0 !== uR ? uR : void 0, JR.blockSelector = null !== (ZR = this.ln.blockSelector) && void 0 !== ZR ? ZR … [truncated]
+           }), this.ln && (Sr.maskAllInputs = null === (Wr = this.ln.maskAllInputs) || void 0 === Wr || Wr, Sr.maskTextSelector = null !== (ar = this.ln.maskTextSelector) && void 0 !== ar ? ar : void 0, Sr.blockSelector = null !== (jr = this.ln.blockSelector) && void 0 !== jr ? jr … [truncated]
```

#### 139. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8679` → after: `L8679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8679) · [Before (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8679)

```diff
-           this.Bn = null !== (RR = this.Bn) && void 0 !== RR ? RR : new Kq(iR, {
+           this.Bn = null !== (rr = this.Bn) && void 0 !== rr ? rr : new pI(fr, {
```

#### 140. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8683` → after: `L8683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8683) · [Before (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8683)

```diff
-               const GR = `Too many mutations on node '${RR}'. Rate limiting. This could be due to SVG animations or something similar`;
+               const Qr = `Too many mutations on node '${rr}'. Rate limiting. This could be due to SVG animations or something similar`;
```

#### 141. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8713` → after: `L8713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8713) · [Before (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8713)

```diff
-                 return JR.maskAllElementAttributes || JR.maskAttributeFn || (null == GR ? void 0 : GR.length) && !GR.includes("id") ? xq : GR => {
+                 return Sr.maskAllElementAttributes || Sr.maskAttributeFn || (null == Qr ? void 0 : Qr.length) && !Qr.includes("id") ? PI : Qr => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (152 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af)

#### 1. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L4)

```diff
-   41009: (RR, JR, GR) => {
+   41361: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L20-L21` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L20-L21) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L20-L21)

```diff
-     var qR = GR(41017).b,
-       iR = GR(41023).d,
+     var Ir = Qr(41364).c,
+       fr = Qr(41369).b,
```

#### 3. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L23)

```diff
-     JR.e = function(RR) {
+     Sr.d = function(rr) {
```

#### 4. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L39)

```diff
-   41023: (RR, JR) => {
+   41369: (rr, Sr) => {
```

#### 5. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L125)

```diff
-     }, JR.d = VR
+     }, Sr.b = pr
```

#### 6. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L127)

```diff
-   41017: (RR, JR) => {
+   41364: (rr, Sr) => {
```

#### 7. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L175)

```diff
-     }, JR.b = uR
+     }, Sr.c = ar
```

#### 8. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L177)

```diff
-   40994: (RR, JR, GR) => {
+   41346: (rr, Sr, Qr) => {
```

#### 9. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L210-L211` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L210-L211) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L210-L211)

```diff
-     var ZR = GR(3918),
-       qR = GR(32);
+     var jr = Qr(3868),
+       Ir = Qr(34);
```

#### 10. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L214)

```diff
-     var VR = GR(4700);
+     var pr = Qr(4635);
```

#### 11. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L298)

```diff
-           if (tR = JR ? RR : tR, qR) null !== (uR = yR) && void 0 !== uR && uR.isActive && (GR += Math.max(1, yR.end - yR.start)), yR = {
+           if (Wr = Sr ? rr : Wr, Ir) null !== (ar = Zr) && void 0 !== ar && ar.isActive && (Qr += Math.max(1, Zr.end - Zr.start)), Zr = {
```

#### 12. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L326)

```diff
-         !this.WK && this.chars + tR > this.chunkChars && yR.push(this.finish());
+         !this.nx && this.chars + Wr > this.chunkChars && Zr.push(this.finish());
```

#### 13. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L330)

```diff
-           !this.WK && this.chars + tR.length > this.chunkChars && (yR.push(this.finish()), uR = !1), uR || (this.counter.addMessage(), uR = !0), this.counter.addEvent(RR), this.lines.push(tR), this.chars += tR.length, this.startMs = Math.min(this.startMs, RR.timestamp), this.endM … [truncated]
+           !this.nx && this.chars + Wr.length > this.chunkChars && (Zr.push(this.finish()), ar = !1), ar || (this.counter.addMessage(), ar = !0), this.counter.addEvent(rr), this.lines.push(Wr), this.chars += Wr.length, this.startMs = Math.min(this.startMs, rr.timestamp), this.endM … [truncated]
```

#### 14. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L334)

```diff
-         if (this.WK) return null;
+         if (this.nx) return null;
```

#### 15. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L406)

```diff
-       return ZR.byteLength > iR || qR > fR ? (console.warn(`Session replay: dropped a ${qR}-byte page recording chunk, over the size limits`), null) : {
+       return jr.byteLength > fr || Ir > Er ? (console.warn(`Session replay: dropped a ${Ir}-byte page recording chunk, over the size limits`), null) : {
```

#### 16. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L414)

```diff
-     var BR = GR(41001);
+     var Tr = Qr(41355);
```

#### 17. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L422)

```diff
-         null === JR || null !== this.tailTimer || this.writer.WK || (this.tailTimer = setTimeout((() => {
+         null === Sr || null !== this.tailTimer || this.writer.nx || (this.tailTimer = setTimeout((() => {
```

#### 18. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L439` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L439) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L439)

```diff
-         if (!this.tickedSinceVideoCut || this.writer.WK) return;
+         if (!this.tickedSinceVideoCut || this.writer.nx) return;
```

#### 19. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L458)

```diff
-               return JR.length <= fR || (console.warn(`Session replay: dropped a page recording chunk of ${JR.length} characters, over the size limits`), !1)
+               return Sr.length <= Er || (console.warn(`Session replay: dropped a page recording chunk of ${Sr.length} characters, over the size limits`), !1)
```

#### 20. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L492)

```diff
-           RR.packed ??= (0, BR.d)(RR.text.text)
+           rr.packed ??= (0, Tr.b)(rr.text.text)
```

#### 21. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L541-L547` → after: `L541-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L541-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L541-L547) · [Before (L541-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L541-L547)

```diff
-     var pR = GR(41028);
-     var gR = GR(41031),
-       bR = GR(4139),
-       vR = GR(103),
-       OR = GR(112),
-       xR = GR(46),
-       NR = GR(5492);
+     var Or = Qr(41371);
+     var Lr = Qr(41379),
+       lr = Qr(4091),
+       Xr = Qr(109),
+       Pr = Qr(120),
+       Hr = Qr(43),
+       qr = Qr(5448);
```

#### 22. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L553-L554` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L553-L554) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L553-L554)

```diff
-       const JR = xR.i.getItem(RR);
-       return "number" === typeof JR && Number.isFinite(JR) ? JR : null
+       const Sr = Hr.j.getItem(rr);
+       return "number" === typeof Sr && Number.isFinite(Sr) ? Sr : null
```

#### 23. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L558` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L558) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L558)

```diff
-       const tR = xR.i.getItem(RR);
+       const Wr = Hr.j.getItem(rr);
```

#### 24. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L563` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L563) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L563)

```diff
-       const JR = xR.i.getItem("replayGrab");
+       const Sr = Hr.j.getItem("replayGrab");
```

#### 25. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L568-L571` → after: `L568-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L568-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L568-L571) · [Before (L568-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L568-L571)

```diff
-     var mR = GR(1295),
-       zR = GR(41038),
-       SR = GR(41041),
-       jR = GR(41046);
+     var Ar = Qr(1267),
+       Vr = Qr(41387),
+       ir = Qr(41392),
+       wr = Qr(41398);
```

#### 26. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L574` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L574) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L574)

```diff
-       return `replayJoiner/${RR}`
+       return `replayJoiner/${rr}`
```

#### 27. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L578` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L578) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L578)

```diff
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zR.i;
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vr.g;
```

#### 28. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L582)

```diff
-         const GR = (0, SR.g)(RR, JR),
+         const Qr = (0, ir.e)(rr, Sr),
```

#### 29. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L589` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L589) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L589)

```diff
-         return this.post("/v1/finish", JR, (0, zR.j)(JR), 3e4, RR.sequence)
+         return this.post("/v1/finish", Sr, (0, Vr.i)(Sr), 3e4, rr.sequence)
```

#### 30. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L592)

```diff
-         return !this.keepalive.isInFlight(dR(RR.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${PR}`, JSON.stringify(RR))
+         return !this.keepalive.isInFlight(cr(rr.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${Gr}`, JSON.stringify(rr))
```

#### 31. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L595)

```diff
-         const uR = `${this.baseUrl}${RR}`,
+         const ar = `${this.baseUrl}${rr}`,
```

#### 32. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L602` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L602) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L602)

```diff
-             signal: (0, mR.t)(yR)
+             signal: (0, Ar.o)(Zr)
```

#### 33. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L604-L605` → after: `L604-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L604-L605) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L604-L605)

```diff
-           qR = GR <= zR.e ? await this.keepalive.fetch(uR, ZR, GR, dR(tR)) : await fetch(uR, ZR);
-         if (!qR.ok) throw new jR.d(`Part joiner ${RR} failed with ${qR.status}`, qR.status);
+           Ir = Qr <= Vr.d ? await this.keepalive.fetch(ar, jr, Qr, cr(Wr)) : await fetch(ar, jr);
+         if (!Ir.ok) throw new wr.d(`Part joiner ${rr} failed with ${Ir.status}`, Ir.status);
```

#### 34. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L612)

```diff
-         releaseUrl: `${RR.url}${PR}`,
+         releaseUrl: `${rr.url}${Gr}`,
```

#### 35. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L615)

```diff
-           url: `${RR.url}/v1/relay`,
+           url: `${rr.url}/v1/relay`,
```

#### 36. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L620-L623` → after: `L620-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L620-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L620-L623) · [Before (L620-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L620-L623)

```diff
-     var kR = GR(7630),
-       QR = GR(41049),
-       FR = GR(41051),
-       TR = GR(41053);
+     var br = Qr(7464),
+       Jr = Qr(41403),
+       Dr = Qr(41405),
+       dr = Qr(41413);
```

#### 37. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L626` → after: `L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L626) · [Before (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L626)

```diff
-       return (0, gR.c)().manifestUrl
+       return (0, Lr.b)().manifestUrl
```

#### 38. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L641` → after: `L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L641) · [Before (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L641)

```diff
-         const tR = Math.round((0, QR.c)());
+         const Wr = Math.round((0, Jr.e)());
```

#### 39. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L668` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L668) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L668)

```diff
-         RR > (null !== (GR = null === (yR = this.manifest.still) || void 0 === yR ? void 0 : yR.atMs) && void 0 !== GR ? GR : -1 / 0) && (this.manifest.still = {
+         rr > (null !== (Qr = null === (Zr = this.manifest.still) || void 0 === Zr ? void 0 : Zr.atMs) && void 0 !== Qr ? Qr : -1 / 0) && (this.manifest.still = {
```

#### 40. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L689)

```diff
-           joinedAtMs: Math.round((0, QR.c)()),
+           joinedAtMs: Math.round((0, Jr.e)()),
```

#### 41. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L707-L709` → after: `L707-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L707-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L707-L709) · [Before (L707-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L707-L709)

```diff
-         const uR = (0, kR.l)(tR.furthestStep, RR.furthestStep),
-           ZR = Math.max(null !== (JR = tR.unboundKeyPresses) && void 0 !== JR ? JR : 0, null !== (GR = RR.unboundKeyPresses) && void 0 !== GR ? GR : 0);
-         return (uR !== tR.furthestStep || ZR !== (null !== (yR = tR.unboundKeyPresses) && void 0 !== yR ? yR : 0)) && (void 0 !== uR && (tR.furthestStep = uR), ZR > 0 && (tR.unboundKeyPresses = ZR), !0)
+         const ar = (0, br.j)(Wr.furthestStep, rr.furthestStep),
+           jr = Math.max(null !== (Sr = Wr.unboundKeyPresses) && void 0 !== Sr ? Sr : 0, null !== (Qr = rr.unboundKeyPresses) && void 0 !== Qr ? Qr : 0);
+         return (ar !== Wr.furthestStep || jr !== (null !== (Zr = Wr.unboundKeyPresses) && void 0 !== Zr ? Zr : 0)) && (void 0 !== ar && (Wr.furthestStep = ar), jr > 0 && (Wr.unboundKeyPresses = jr), !0)
```

#### 42. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L713)

```diff
-         RR && null === RR.leftAtMs && (RR.leftAtMs = Math.round((0, QR.c)()))
+         rr && null === rr.leftAtMs && (rr.leftAtMs = Math.round((0, Jr.e)()))
```

#### 43. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L724` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L724) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L724)

```diff
-         if (this.sending) return void(this.queuedSend = JJ(null !== (JR = this.queuedSend) && void 0 !== JR ? JR : [], RR));
+         if (this.sending) return void(this.queuedSend = SS(null !== (Sr = this.queuedSend) && void 0 !== Sr ? Sr : [], rr));
```

#### 44. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L737` → after: `L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L737) · [Before (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L737)

```diff
-           of null !== (JR = this.prepareSend(RR)) && void 0 !== JR ? JR : []) {
+           of null !== (Sr = this.prepareSend(rr)) && void 0 !== Sr ? Sr : []) {
```

#### 45. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L739` → after: `L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L739) · [Before (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L739)

```diff
-           zR.i.sendBeacon(sR(), JSON.stringify(GR)) || (0, FR.b)(sR(), GR)
+           Vr.g.sendBeacon(sr(), JSON.stringify(Qr)) || (0, Dr.e)(sr(), Qr)
```

#### 46. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L748` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L748) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L748)

```diff
-           const RR = await (0, FR.b)(sR(), JR);
+           const rr = await (0, Dr.e)(sr(), Sr);
```

#### 47. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L769` → after: `L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L769) · [Before (L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L769)

```diff
-         this.manifest.endedAtMs = Math.round((0, QR.c)());
+         this.manifest.endedAtMs = Math.round((0, Jr.e)());
```

#### 48. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L870-L871` → after: `L870-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L870-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L870-L871) · [Before (L870-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L870-L871)

```diff
-     var GJ = GR(41034),
-       yJ = GR(5506);
+     var QS = Qr(41385),
+       ZS = Qr(5459);
```

#### 49. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L893` → after: `L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L893) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L893)

```diff
-           lateUploadUntilMs: JR.expiresAtMs + GJ.d,
+           lateUploadUntilMs: Sr.expiresAtMs + QS.c,
```

#### 50. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L951` → after: `L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L951) · [Before (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L951)

```diff
-         this.record.nextDomSequence = Math.max(null !== (tR = this.record.nextDomSequence) && void 0 !== tR ? tR : 0, RR + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
+         this.record.nextDomSequence = Math.max(null !== (Wr = this.record.nextDomSequence) && void 0 !== Wr ? Wr : 0, rr + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
```

#### 51. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L979` → after: `L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L979) · [Before (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L979)

```diff
-         xR.i.setItem(yJ.m, !0)
+         Hr.j.setItem(ZS.n, !0)
```

#### 52. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1043` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1043) · [Before (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1043)

```diff
-     var qJ = GR(37156),
+     var IS = Qr(37500),
```

#### 53. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1047)

```diff
-       return iJ()('/*! For license information please see sessionReplayVideo.worker.14b10f1e.worker.js.LICENSE.txt */\n(()=>{var RR={5:()=>{}},JR={};function GR(yR){var tR=JR[yR];if(void 0!==tR)return tR.exports;var uR=JR[yR]={exports:{}};return RR[yR](uR,uR.exports,GR),uR.export … [truncated]
+       return fS()('/*! For license information please see sessionReplayVideo.worker.32b3983d.worker.js.LICENSE.txt */\n(()=>{var rr={15:()=>{}},Sr={};function Qr(Zr){var Wr=Sr[Zr];if(void 0!==Wr)return Wr.exports;var ar=Sr[Zr]={exports:{}};return rr[Zr](ar,ar.exports,Qr),ar.expor … [truncated]
```

#### 54. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1102` → after: `L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1102) · [Before (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1102)

```diff
-         this.requester = "requestFrame" in yR ? yR : this.stream, this.video.muted = !0, this.video.playsInline = !0, this.video.srcObject = this.stream, this.video.play().catch(GR), this.video.requestVideoFrameCallback(this.onVideoFrame)
+         this.requester = "requestFrame" in Zr ? Zr : this.stream, this.video.muted = !0, this.video.playsInline = !0, this.video.srcObject = this.stream, this.video.play().catch(Qr), this.video.requestVideoFrameCallback(this.onVideoFrame)
```

#### 55. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1130` → after: `L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1130) · [Before (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1130)

```diff
-             this.stream === JR && (this.stop(), this.onUnavailable(`the canvas capture stream didn't play: ${RR instanceof Error?RR.message:String(RR)}`))
+             this.stream === Sr && (this.stop(), this.onUnavailable(`the canvas capture stream didn't play: ${rr instanceof Error?rr.message:String(rr)}`))
```

#### 56. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1155` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1155) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1155)

```diff
-           OR: {
+           IS: {
```

#### 57. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1187` → after: `L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1187) · [Before (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1187)

```diff
-             const yR = JR.width * JR.height < RR.width * RR.height ? JR : RR;
+             const Zr = Sr.width * Sr.height < rr.width * rr.height ? Sr : rr;
```

#### 58. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1205` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1205) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1205)

```diff
-           }(0 === GR.width ? JR.OR : GR, JR.OR, this.grab.maxMacroblocks);
+           }(0 === Qr.width ? Sr.IS : Qr, Sr.IS, this.grab.maxMacroblocks);
```

#### 59. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1240` → after: `L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1240) · [Before (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1240)

```diff
-           OR: JR.OR,
+           IS: Sr.IS,
```

#### 60. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1255` → after: `L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1255) · [Before (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1255)

```diff
-         !(RR instanceof DOMException && "InvalidStateError" === RR.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${RR instanceof Error?RR.message:String(RR)}`))
+         !(rr instanceof DOMException && "InvalidStateError" === rr.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${rr instanceof Error?rr.message:String(rr)}`))
```

#### 61. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1268` → after: `L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1268) · [Before (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1268)

```diff
-     var LJ = GR(1397);
+     var hS = Qr(1364);
```

#### 62. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1280` → after: `L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1280) · [Before (L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1280)

```diff
-         const RR = (0, LJ.J)().gameRender();
+         const rr = (0, hS.U)().gameRender();
```

#### 63. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1394` → after: `L1394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1394) · [Before (L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1394)

```diff
-             console.warn(`Session replay part joiner failed on video segment ${JR.sequence}; uploading it straight to storage.`, RR), RR instanceof AJ || (this.downUntilMs = this.options.nowMs() + WJ), this.handBack(JR, RR instanceof AJ ? RR.reason : "unreachable")
+             console.warn(`Session replay part joiner failed on video segment ${Sr.sequence}; uploading it straight to storage.`, rr), rr instanceof eS || (this.downUntilMs = this.options.nowMs() + nS), this.handBack(Sr, rr instanceof eS ? rr.reason : "unreachable")
```

#### 64. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1419` → after: `L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1419) · [Before (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1419)

```diff
-             if (void 0 === GR) throw new AJ("missing", `the joiner asked for part ${JR} of ${RR.parts.length}`);
+             if (void 0 === Qr) throw new eS("missing", `the joiner asked for part ${Sr} of ${rr.parts.length}`);
```

#### 65. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1445` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1445) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1445)

```diff
-           return new AJ("refused", `refused: ${RR.reason}`)
+           return new eS("refused", `refused: ${rr.reason}`)
```

#### 66. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1448` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1448) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1448)

```diff
-         return new AJ(JR, `answered ${RR.outcome}`)
+         return new eS(Sr, `answered ${rr.outcome}`)
```

#### 67. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1464` → after: `L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1464) · [Before (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1464)

```diff
-     const XJ = zR.e;
+     const yS = Vr.d;
```

#### 68. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1503` → after: `L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1503) · [Before (L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1503)

```diff
-         if ((null === JR || void 0 === JR ? void 0 : JR.sequence) === RR) return this.telemetry = null, BJ(JR.Qq, this.nowMs()) ? JR.Qq.target : void 0
+         if ((null === Sr || void 0 === Sr ? void 0 : Sr.sequence) === rr) return this.telemetry = null, TS(Sr.wI, this.nowMs()) ? Sr.wI.target : void 0
```

#### 69. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1511` → after: `L1511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1511) · [Before (L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1511)

```diff
-           tR = null === yR || void 0 === yR ? void 0 : yR.Qq.get(GR);
+           Wr = null === Zr || void 0 === Zr ? void 0 : Zr.wI.get(Qr);
```

#### 70. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1513` → after: `L1513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1513) · [Before (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1513)

```diff
-           for (const [uR, ZR] of yR.Qq) ZR.expiresAtMs <= tR.expiresAtMs && yR.Qq.delete(uR)
+           for (const [ar, jr] of Zr.wI) jr.expiresAtMs <= Wr.expiresAtMs && Zr.wI.delete(ar)
```

#### 71. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1529` → after: `L1529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1529) · [Before (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1529)

```diff
-           Qq: new Map,
+           wI: new Map,
```

#### 72. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1535` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1535) · [Before (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1535)

```diff
-         const GR = RR.Qq.get(JR);
+         const Qr = rr.wI.get(Sr);
```

#### 73. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1541` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1541) · [Before (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1541)

```diff
-         return this.telemetryAsked === RR || null !== JR && JR.sequence === RR && BJ(JR.Qq, this.nowMs()) ? null : RR
+         return this.telemetryAsked === rr || null !== Sr && Sr.sequence === rr && TS(Sr.wI, this.nowMs()) ? null : rr
```

#### 74. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1600` → after: `L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1600) · [Before (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1600)

```diff
-               RR.Qq.set(JR + yR, {
+               rr.wI.set(Sr + Zr, {
```

#### 75. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1605` → after: `L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1605) · [Before (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1605)

```diff
-             return null !== tR && tR >= this.nextTelemetrySequence() && (null !== (uR = null === (ZR = this.telemetry) || void 0 === ZR ? void 0 : ZR.sequence) && void 0 !== uR ? uR : -1) <= tR && void 0 !== GR.telemetryTarget && (this.telemetry = {
+             return null !== Wr && Wr >= this.nextTelemetrySequence() && (null !== (ar = null === (jr = this.telemetry) || void 0 === jr ? void 0 : jr.sequence) && void 0 !== ar ? ar : -1) <= Wr && void 0 !== Qr.telemetryTarget && (this.telemetry = {
```

#### 76. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1607)

```diff
-               Qq: {
+               wI: {
```

#### 77. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1631)

```diff
-       return `${RR}:${JR}`
+       return `${rr}:${Sr}`
```

#### 78. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1662` → after: `L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1662) · [Before (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1662)

```diff
-           return null !== (RR = this.nextSequence.get("telemetry")) && void 0 !== RR ? RR : 0
+           return null !== (rr = this.nextSequence.get("telemetry")) && void 0 !== rr ? rr : 0
```

#### 79. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1706` → after: `L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1706) · [Before (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1706)

```diff
-         const yR = null !== (JR = null === (GR = RR.part) || void 0 === GR ? void 0 : GR.sequence) && void 0 !== JR ? JR : null;
+         const Zr = null !== (Sr = null === (Qr = rr.part) || void 0 === Qr ? void 0 : Qr.sequence) && void 0 !== Sr ? Sr : null;
```

#### 80. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1712` → after: `L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1712) · [Before (L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1712)

```diff
-             sequence: null !== yR && void 0 !== yR ? yR : this.takeSequence(RR.kind)
+             sequence: null !== Zr && void 0 !== Zr ? Zr : this.takeSequence(rr.kind)
```

#### 81. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1723` → after: `L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1723) · [Before (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1723)

```diff
-         const GR = null !== (JR = this.nextSequence.get(RR)) && void 0 !== JR ? JR : 0;
+         const Qr = null !== (Sr = this.nextSequence.get(rr)) && void 0 !== Sr ? Sr : 0;
```

#### 82. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1761` → after: `L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1761) · [Before (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1761)

```diff
-             this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= RR.bytes.byteLength, "uploaded" !== JR.type ? (this.callbacks.onDropped(RR, JR.reason, RR.sequence), this.segmentBroken(RR), "refused" !== JR.type || this.stopped || "telemetry" !== RR.kind || (console. … [truncated]
+             this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= rr.bytes.byteLength, "uploaded" !== Sr.type ? (this.callbacks.onDropped(rr, Sr.reason, rr.sequence), this.segmentBroken(rr), "refused" !== Sr.type || this.stopped || "telemetry" !== rr.kind || (console. … [truncated]
```

#### 83. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1778` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1778) · [Before (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1778)

```diff
-                 throw new Error(`rejected for now: ${GR.reason}`)
+                 throw new Error(`rejected for now: ${Qr.reason}`)
```

#### 84. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1785` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1785) · [Before (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1785)

```diff
-               if (yR instanceof jR.d && null !== yR.status && yR.status < 500 && !NJ.has(yR.status) && (null === yR.storageCode || !DJ.has(yR.storageCode))) return console.warn(`Session replay ${RR.kind} segment ${RR.sequence} refused by storage:`, yR), {
+               if (Zr instanceof wr.d && null !== Zr.status && Zr.status < 500 && !qS.has(Zr.status) && (null === Zr.storageCode || !RS.has(Zr.storageCode))) return console.warn(`Session replay ${rr.kind} segment ${rr.sequence} refused by storage:`, Zr), {
```

#### 85. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1796-L1797` → after: `L1796-L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1796-L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1796-L1797) · [Before (L1796-L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1796-L1797)

```diff
-               uR = void 0 === RR.part ? "" : ` part ${RR.part.index}`;
-             if (console.warn(`Session replay ${RR.kind} segment ${RR.sequence}${uR} upload failed:`, yR), yR instanceof jR.d && (403 === yR.status && (JR = null, void 0 !== RR.part && this.targets.expire(RR.kind, RR.sequence, RR.part.index)), ++GR >= this.options.maxAttempts)) re … [truncated]
+               ar = void 0 === rr.part ? "" : ` part ${rr.part.index}`;
+             if (console.warn(`Session replay ${rr.kind} segment ${rr.sequence}${ar} upload failed:`, Zr), Zr instanceof wr.d && (403 === Zr.status && (Sr = null, void 0 !== rr.part && this.targets.expire(rr.kind, rr.sequence, rr.part.index)), ++Qr >= this.options.maxAttempts)) re … [truncated]
```

#### 86. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1815` → after: `L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1815) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1815)

```diff
-           return "rejected" in GR ? GR : {
+           return "rejected" in Qr ? Qr : {
```

#### 87. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1838` → after: `L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1838) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1838)

```diff
-         return "rejected" in tR ? tR : {
+         return "rejected" in Wr ? Wr : {
```

#### 88. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1952` → after: `L1952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1952) · [Before (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1952)

```diff
-           }, null !== (yR = RR.completeUntilIndex) && void 0 !== yR ? yR : 0)
+           }, null !== (Zr = rr.completeUntilIndex) && void 0 !== Zr ? Zr : 0)
```

#### 89. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1980-L1981` → after: `L1980-L1981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1980-L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1980-L1981) · [Before (L1980-L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1980-L1981)

```diff
-     var cJ = GR(4137),
-       PJ = GR(5484);
+     var MS = Qr(4088),
+       GS = Qr(5446);
```

#### 90. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2011` → after: `L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2011) · [Before (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2011)

```diff
-           console.warn("Session replay couldn't start its video; recording DOM and events without it.", JR), this.videoUnavailable(`video couldn't start: ${JR instanceof Error?JR.message:String(JR)}`)
+           console.warn("Session replay couldn't start its video; recording DOM and events without it.", Sr), this.videoUnavailable(`video couldn't start: ${Sr instanceof Error?Sr.message:String(Sr)}`)
```

#### 91. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2017` → after: `L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2017) · [Before (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2017)

```diff
-           ZR = (0, GJ.m)(JR),
+           jr = (0, QS.j)(Sr),
```

#### 92. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2028-L2029` → after: `L2028-L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2028-L2029) · [Before (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2028-L2029)

```diff
-           console.error("Session replay video worker error.", RR.message), this.worker === uR && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${RR.message||"it didn't load"}`))
-         }, this.worker = uR, this.uploads = fR, this.joiner = iR, this.deps.debug.joiner = null !== (GR = null === iR || void 0 === iR ? void 0 : iR.stats) && void 0 !== GR ? GR : null, this.videoStarted = !0, this.deps.stills.start();
+           console.error("Session replay video worker error.", rr.message), this.worker === ar && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${rr.message||"it didn't load"}`))
+         }, this.worker = ar, this.uploads = Er, this.joiner = fr, this.deps.debug.joiner = null !== (Qr = null === fr || void 0 === fr ? void 0 : fr.stats) && void 0 !== Qr ? Qr : null, this.videoStarted = !0, this.deps.stills.start();
```

#### 93. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2045` → after: `L2045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2045) · [Before (L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2045)

```diff
-           journalRecordingId: null !== (yR = null === (tR = this.deps.journal) || void 0 === tR ? void 0 : tR.recordingId) && void 0 !== yR ? yR : null
+           journalRecordingId: null !== (Zr = null === (Wr = this.deps.journal) || void 0 === Wr ? void 0 : Wr.recordingId) && void 0 !== Zr ? Zr : null
```

#### 94. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2096` → after: `L2096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2096) · [Before (L2096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2096)

```diff
-               atMs: (0, QR.c)(),
+               atMs: (0, Jr.e)(),
```

#### 95. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2100` → after: `L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2100) · [Before (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2100)

```diff
-             }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${RR.level} (${RR.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
+             }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${rr.level} (${rr.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
```

#### 96. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2114` → after: `L2114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2114) · [Before (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2114)

```diff
-         this.videoStatus = RR, (0, cJ.i)("dom_only", this.deps.recording), null !== this.deps.dom() && (0, PJ.i)(RR, JR)
+         this.videoStatus = rr, (0, MS.j)("dom_only", this.deps.recording), null !== this.deps.dom() && (0, GS.h)(rr, Sr)
```

#### 97. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2119` → after: `L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2119) · [Before (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2119)

```diff
-         console.warn(`Session replay stats: ${JR} fps encoded, ${RR.encodeWidth}x${RR.encodeHeight} ${RR.hardwareAcceleration}`)
+         console.warn(`Session replay stats: ${Sr} fps encoded, ${rr.encodeWidth}x${rr.encodeHeight} ${rr.hardwareAcceleration}`)
```

#### 98. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2139` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2139) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2139)

```diff
-     const mJ = 3 * zR.e / 4,
+     const AS = 3 * Vr.d / 4,
```

#### 99. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2145` → after: `L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2145) · [Before (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2145)

```diff
-     var SJ = GR(41060);
+     var iS = Qr(41420);
```

#### 100. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2148` → after: `L2148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2148) · [Before (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2148)

```diff
-         maxBytes: GJ.g
+         maxBytes: QS.h
```

#### 101. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2153` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2153) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2153)

```diff
-         let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zR.i;
+         let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Vr.g;
```

#### 102. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2167` → after: `L2167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2167) · [Before (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2167)

```diff
-         const uR = GR.byteLength <= jJ.maxBytes ? GR : yR;
+         const ar = Qr.byteLength <= wS.maxBytes ? Qr : Zr;
```

#### 103. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2177` → after: `L2177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2177) · [Before (L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2177)

```diff
-         if (this.stopped || null === GR || GR.atMs <= (null !== (RR = null === (JR = this.queued) || void 0 === JR ? void 0 : JR.atMs) && void 0 !== RR ? RR : -1 / 0)) return;
+         if (this.stopped || null === Qr || Qr.atMs <= (null !== (rr = null === (Sr = this.queued) || void 0 === Sr ? void 0 : Sr.atMs) && void 0 !== rr ? rr : -1 / 0)) return;
```

#### 104. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2207` → after: `L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2207) · [Before (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2207)

```diff
-         if (this.stopped || null === tR || tR.atMs <= (null !== (RR = null === (JR = this.manifest.contents.still) || void 0 === JR ? void 0 : JR.atMs) && void 0 !== RR ? RR : -1 / 0)) return;
+         if (this.stopped || null === Wr || Wr.atMs <= (null !== (rr = null === (Sr = this.manifest.contents.still) || void 0 === Sr ? void 0 : Sr.atMs) && void 0 !== rr ? rr : -1 / 0)) return;
```

#### 105. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2210` → after: `L2210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2210) · [Before (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2210)

```diff
-         const ZR = null !== (yR = null === uR || void 0 === uR ? void 0 : uR.sequence) && void 0 !== yR ? yR : this.nextSequence,
+         const jr = null !== (Zr = null === ar || void 0 === ar ? void 0 : ar.sequence) && void 0 !== Zr ? Zr : this.nextSequence,
```

#### 106. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2222` → after: `L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2222) · [Before (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2222)

```diff
-         }, JR, dJ, this.keepalive)) && void 0 !== GR ? GR : null;
+         }, Sr, cS, this.keepalive)) && void 0 !== Qr ? Qr : null;
```

#### 107. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2227` → after: `L2227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2227) · [Before (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2227)

```diff
-         } = (0, SJ.d)(RR, JR, dJ);
+         } = (0, iS.g)(rr, Sr, cS);
```

#### 108. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2241-L2246` → after: `L2241-L2246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2241-L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2241-L2246) · [Before (L2241-L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2241-L2246)

```diff
-     var YJ = GR(5497),
-       kJ = GR(41062),
-       QJ = GR(41066),
-       FJ = GR(41072),
-       TJ = GR(7633),
-       sJ = GR(7640);
+     var oS = Qr(5452),
+       bS = Qr(41427),
+       JS = Qr(41430),
+       DS = Qr(41438),
+       dS = Qr(7467),
+       sS = Qr(7469);
```

#### 109. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2253` → after: `L2253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2253) · [Before (L2253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2253)

```diff
-         this.writer = new TJ.b((0, QR.c)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
+         this.writer = new dS.c((0, Jr.e)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
```

#### 110. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2256-L2258` → after: `L2256-L2258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2256-L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2256-L2258) · [Before (L2256-L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2256-L2258)

```diff
-         null !== RR && (this.setActionBits(RR.getActionBits(), (0, QR.c)()), this.unsubscribers.push(RR.onKey(((RR, JR, GR, yR, tR, uR) => {
-           const ZR = (0, sJ.e)(RR);
-           tR ? this.writer.writeKey(hJ(uR), ZR, JR, GR, yR) : 0 !== ZR && null === (0, sJ.i)(RR) && this.writer.writeKey(hJ(uR), 0, JR, GR, yR)
+         null !== rr && (this.setActionBits(rr.getActionBits(), (0, Jr.e)()), this.unsubscribers.push(rr.onKey(((rr, Sr, Qr, Zr, Wr, ar) => {
+           const jr = (0, sS.c)(rr);
+           Wr ? this.writer.writeKey(uS(ar), jr, Sr, Qr, Zr) : 0 !== jr && null === (0, sS.f)(rr) && this.writer.writeKey(uS(ar), 0, Sr, Qr, Zr)
```

#### 111. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2263-L2265` → after: `L2263-L2265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2263-L2265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2263-L2265) · [Before (L2263-L2265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2263-L2265)

```diff
-         })))), this.unsubscribers.push((0, LJ.D)((() => {
-           const RR = (0, LJ.h)();
-           this.writer.writeFrame((0, QR.c)() - RR, RR), this.framesSinceFpsSample++, JR()
+         })))), this.unsubscribers.push((0, hS.I)((() => {
+           const rr = (0, hS.l)();
+           this.writer.writeFrame((0, Jr.e)() - rr, rr), this.framesSinceFpsSample++, Sr()
```

#### 112. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2269` → after: `L2269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2269) · [Before (L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2269)

```diff
-         this.writer.writeState((0, QR.c)(), {
+         this.writer.writeState((0, Jr.e)(), {
```

#### 113. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2282` → after: `L2282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2282) · [Before (L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2282)

```diff
-         this.writer.writeEvent((0, QR.c)(), RR)
+         this.writer.writeEvent((0, Jr.e)(), rr)
```

#### 114. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2298` → after: `L2298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2298) · [Before (L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2298)

```diff
-           JR = (0, QR.c)(),
+           Sr = (0, Jr.e)(),
```

#### 115. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2314-L2315` → after: `L2314-L2315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2314-L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2314-L2315) · [Before (L2314-L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2314-L2315)

```diff
-     var JG = GR(5515),
-       GG = GR(41079);
+     var SQ = Qr(5461),
+       QQ = Qr(41444);
```

#### 116. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2320-L2322` → after: `L2320-L2322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2320-L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2320-L2322) · [Before (L2320-L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2320-L2322)

```diff
-         const yR = JR.dryRun ? null : null !== (GR = RR.partJoiner) && void 0 !== GR ? GR : null,
-           tR = null === yR ? null : (0, SR.j)(YR(yR)),
-           ZR = JR.dryRun ? new SJ.b : new SJ.c((0, gR.c)().segmentUploadUrl, {
+         const Zr = Sr.dryRun ? null : null !== (Qr = rr.partJoiner) && void 0 !== Qr ? Qr : null,
+           Wr = null === Zr ? null : (0, ir.f)(or(Zr)),
+           jr = Sr.dryRun ? new iS.c : new iS.d((0, Lr.b)().segmentUploadUrl, {
```

#### 117. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2329-L2330` → after: `L2329-L2330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2329-L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2329-L2330) · [Before (L2329-L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2329-L2330)

```diff
-             qR = xR.i.getItem("replaySkipLowMemory"),
-             iR = "boolean" === typeof qR ? qR : null;
+             Ir = Hr.j.getItem("replaySkipLowMemory"),
+             fr = "boolean" === typeof Ir ? Ir : null;
```

#### 118. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2333-L2336` → after: `L2333-L2336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2333-L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2333-L2336) · [Before (L2333-L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2333-L2336)

```diff
-             maxFps: null !== (JR = HR("replayMaxFps")) && void 0 !== JR ? JR : ZR.maxFps,
-             maxMacroblocks: null !== (GR = HR("replayMaxMacroblocks")) && void 0 !== GR ? GR : ZR.maxMacroblocks,
-             captureBudgetMsPerSecond: null !== (yR = HR("replayCaptureBudgetMs")) && void 0 !== yR ? yR : ZR.captureBudgetMsPerSecond,
-             captureFrameCostFloorMs: null !== (tR = HR("replayCaptureCostFloorMs")) && void 0 !== tR ? tR : ZR.captureFrameCostFloorMs,
+             maxFps: null !== (Sr = gr("replayMaxFps")) && void 0 !== Sr ? Sr : jr.maxFps,
+             maxMacroblocks: null !== (Qr = gr("replayMaxMacroblocks")) && void 0 !== Qr ? Qr : jr.maxMacroblocks,
+             captureBudgetMsPerSecond: null !== (Zr = gr("replayCaptureBudgetMs")) && void 0 !== Zr ? Zr : jr.captureBudgetMsPerSecond,
+             captureFrameCostFloorMs: null !== (Wr = gr("replayCaptureCostFloorMs")) && void 0 !== Wr ? Wr : jr.captureFrameCostFloorMs,
```

#### 119. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2340` → after: `L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2340) · [Before (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2340)

```diff
-             skipLowMemoryDevices: null !== iR && void 0 !== iR ? iR : ZR.skipLowMemoryDevices
+             skipLowMemoryDevices: null !== fr && void 0 !== fr ? fr : jr.skipLowMemoryDevices
```

#### 120. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2347` → after: `L2347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2347) · [Before (L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2347)

```diff
-         (0, cJ.i)("recorded" === VR ? "video" : "dom_only", RR), this.manifest = new RJ(RR.recordingId, RR.uploadToken, !JR.dryRun, {
+         (0, MS.j)("recorded" === pr ? "video" : "dom_only", rr), this.manifest = new rS(rr.recordingId, rr.uploadToken, !Sr.dryRun, {
```

#### 121. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2360` → after: `L2360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2360) · [Before (L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2360)

```diff
-             if ("videoSegments" === JR) null === (yR = this.video.uploads) || void 0 === yR || yR.listed(GR.sequence, null !== (tR = GR.parts) && void 0 !== tR ? tR : null);
+             if ("videoSegments" === Sr) null === (Zr = this.video.uploads) || void 0 === Zr || Zr.listed(Qr.sequence, null !== (Wr = Qr.parts) && void 0 !== Wr ? Wr : null);
```

#### 122. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2369` → after: `L2369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2369) · [Before (L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2369)

```diff
-         }), !JR.dryRun && FJ.e.supported && (this.journal = new uJ(new FJ.e, RR, this.manifest.contents, (0, gR.c)())), this.debug = function() {
+         }), !Sr.dryRun && DS.e.supported && (this.journal = new aS(new DS.e, rr, this.manifest.contents, (0, Lr.b)())), this.debug = function() {
```

#### 123. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2389` → after: `L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2389) · [Before (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2389)

```diff
-             this.debug.uploadedBytesByKind[RR.kind] = (null !== (GR = this.debug.uploadedBytesByKind[RR.kind]) && void 0 !== GR ? GR : 0) + RR.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(RR.meta, JR, RR.bytes), this.pageExi … [truncated]
+             this.debug.uploadedBytesByKind[rr.kind] = (null !== (Qr = this.debug.uploadedBytesByKind[rr.kind]) && void 0 !== Qr ? Qr : 0) + rr.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(rr.meta, Sr, rr.bytes), this.pageExi … [truncated]
```

#### 124. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2393` → after: `L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2393) · [Before (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2393)

```diff
-             if (console.warn(`Session replay dropped a ${RR.kind} segment: ${JR}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === RR.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (yR = this.video.uplo … [truncated]
+             if (console.warn(`Session replay dropped a ${rr.kind} segment: ${Sr}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === rr.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (Zr = this.video.uplo … [truncated]
```

#### 125. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2404` → after: `L2404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2404) · [Before (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2404)

```diff
-             this.stop(`uploads refused: ${RR}`)
+             this.stop(`uploads refused: ${rr}`)
```

#### 126. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2440` → after: `L2440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2440) · [Before (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2440)

```diff
-             logStats: !0 === xR.i.getItem("replayLogStats")
+             logStats: !0 === Hr.j.getItem("replayLogStats")
```

#### 127. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2448` → after: `L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2448) · [Before (L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2448)

```diff
-           const JR = null !== (RR = (0, NR.g)() ? OR.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== RR ? RR : xR.i.getItem("replayPostHogHost");
+           const Sr = null !== (rr = (0, qr.g)() ? Pr.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== rr ? rr : Hr.j.getItem("replayPostHogHost");
```

#### 128. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2461` → after: `L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2461) · [Before (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2461)

```diff
-           }) : null, qR.n.subscribe("sessionReplayLowFps", (RR => {
+           }) : null, Ir.i.subscribe("sessionReplayLowFps", (rr => {
```

#### 129. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2466` → after: `L2466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2466) · [Before (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2466)

```diff
-           })), qR.n.subscribe("sessionReplayStayProgress", (RR => {
+           })), Ir.i.subscribe("sessionReplayStayProgress", (rr => {
```

#### 130. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2468` → after: `L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2468) · [Before (L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2468)

```diff
-           })), qR.n.subscribe("sessionReplayGameQuit", (RR => {
+           })), Ir.i.subscribe("sessionReplayGameQuit", (rr => {
```

#### 131. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2474` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2474) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2474)

```diff
-           })), null !== JR.currentGame && (this.listStay(JR.currentGame), qR.n.JK("sessionReplayStayOpened", JR.currentGame.gameNameWithVariation)), this.start(RR.expiresAtMs), this.dom = null, null !== KR) {
+           })), null !== Sr.currentGame && (this.listStay(Sr.currentGame), Ir.i.Jp("sessionReplayStayOpened", Sr.currentGame.gameNameWithVariation)), this.start(rr.expiresAtMs), this.dom = null, null !== xr) {
```

#### 132. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2478-L2479` → after: `L2478-L2479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2478-L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2478-L2479) · [Before (L2478-L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2478-L2479)

```diff
-           }, this.journal, new pR.d);
-           this.dom = GR, (0, PJ.e)({
+           }, this.journal, new Or.c);
+           this.dom = Qr, (0, GS.d)({
```

#### 133. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2492` → after: `L2492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2492) · [Before (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2492)

```diff
-         return null !== (RR = null === (JR = this.videoConfig) || void 0 === JR ? void 0 : JR.manifestIntervalMs) && void 0 !== RR ? RR : 3e4
+         return null !== (rr = null === (Sr = this.videoConfig) || void 0 === Sr ? void 0 : Sr.manifestIntervalMs) && void 0 !== rr ? rr : 3e4
```

#### 134. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2502` → after: `L2502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2502) · [Before (L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2502)

```diff
-         this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === JR ? GR : {
+         this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === Sr ? Qr : {
```

#### 135. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2510` → after: `L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2510) · [Before (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2510)

```diff
-         }), this.flushTelemetry(), this.listStay(RR), qR.n.JK("sessionReplayStayOpened", RR.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
+         }), this.flushTelemetry(), this.listStay(rr), Ir.i.Jp("sessionReplayStayOpened", rr.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
```

#### 136. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2537` → after: `L2537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2537) · [Before (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2537)

```diff
-           (0, kJ.c)(RR) && this.manifest.flagCurrentGame("hadError")
+           (0, bS.d)(rr) && this.manifest.flagCurrentGame("hadError")
```

#### 137. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2541` → after: `L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2541) · [Before (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2541)

```diff
-         (0, JG.h)((() => {
+         (0, SQ.f)((() => {
```

#### 138. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2543` → after: `L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2543) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2543)

```diff
-         }), JR), null !== this.journal && (0, YJ.b)(JR)
+         }), Sr), null !== this.journal && (0, oS.c)(Sr)
```

#### 139. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2548` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2548) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2548)

```diff
-           console.warn(`Session replay stopped recording: ${RR}`), this.debug.stoppedReason = RR, this.lifetime.abort();
+           console.warn(`Session replay stopped recording: ${rr}`), this.debug.stoppedReason = rr, this.lifetime.abort();
```

#### 140. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2550` → after: `L2550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2550) · [Before (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2550)

```diff
-           this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, PJ.l)(), this.telemetry.stop(), this.flushTelemetry(), null === (JR = this.dom) || void 0 === JR || JR.cut(), null === (GR = this.dom) || void 0 === GR || GR.close(), this.video.endVideo(), this … [truncated]
+           this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, GS.k)(), this.telemetry.stop(), this.flushTelemetry(), null === (Sr = this.dom) || void 0 === Sr || Sr.cut(), null === (Qr = this.dom) || void 0 === Qr || Qr.close(), this.video.endVideo(), this … [truncated]
```

#### 141. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2559` → after: `L2559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2559) · [Before (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2559)

```diff
-         } = this.video.canvasWatch, yR = ZR.c.getLastColyseusPingMs();
+         } = this.video.canvasWatch, Zr = jr.e.getLastColyseusPingMs();
```

#### 142. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2624` → after: `L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2624) · [Before (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2624)

```diff
-   7633: (RR, JR, GR) => {
+   7467: (rr, Sr, Qr) => {
```

#### 143. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2626-L2627` → after: `L2626-L2627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2626-L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2626-L2627) · [Before (L2626-L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2626-L2627)

```diff
-       b: () => pR,
-       d: () => gR
+       c: () => Or,
+       g: () => Lr
```

#### 144. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2629` → after: `L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2629) · [Before (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2629)

```diff
-     var yR = GR(7640);
+     var Zr = Qr(7469);
```

#### 145. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2675` → after: `L2675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2675) · [Before (L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2675)

```diff
-         GR.setUint8(yR, fR), GR.setUint32(yR + 1, this.timeUnits(RR), !0), GR.setUint16(yR + 5, lR(JR.backingWidth), !0), GR.setUint16(yR + 7, lR(JR.backingHeight), !0), GR.setUint16(yR + 9, lR(JR.cssWidth), !0), GR.setUint16(yR + 11, lR(JR.cssHeight), !0), GR.setUint16(yR + 13,  … [truncated]
+         Qr.setUint8(Zr, Er), Qr.setUint32(Zr + 1, this.timeUnits(rr), !0), Qr.setUint16(Zr + 5, vr(Sr.backingWidth), !0), Qr.setUint16(Zr + 7, vr(Sr.backingHeight), !0), Qr.setUint16(Zr + 9, vr(Sr.cssWidth), !0), Qr.setUint16(Zr + 11, vr(Sr.cssHeight), !0), Qr.setUint16(Zr + 13,  … [truncated]
```

#### 146. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2690` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2690) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2690)

```diff
-         this.view.setUint8(uR, wR), this.view.setUint32(uR + 1, this.timeUnits(RR), !0), this.view.setUint8(uR + 5, JR), this.view.setUint8(uR + 6, (GR ? UR : 0) | (yR ? WR : 0) | (tR ? AR : 0)), this.length += nR
+         this.view.setUint8(ar, mr), this.view.setUint32(ar + 1, this.timeUnits(rr), !0), this.view.setUint8(ar + 5, Sr), this.view.setUint8(ar + 6, (Qr ? Yr : 0) | (Zr ? nr : 0) | (Wr ? er : 0)), this.length += zr
```
