# Changed — Bundle Modifications Report (Part 042 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `42 / 126` (**417** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 041](part-041.md) · [Part 043 →](part-043.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/185.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/185.js` (756 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072)

#### 675. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4090-L4091` → after: `L4254-L4255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4254-L4255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4254-L4255) · [Before (L4090-L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4090-L4091)

```diff
-     var yR = GR(203),
-       tR = GR(385),
+     var Zr = Qr(208),
+       Wr = Qr(388),
```

#### 676. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4093-L4096` → after: `L4257-L4260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4257-L4260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4257-L4260) · [Before (L4093-L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4093-L4096)

```diff
-       ZR = GR(37466),
-       qR = GR(37470),
-       iR = GR(2435);
-     const fR = yR.g.Kn * yR.g.playerEyeToHeightRatio,
+       jr = Qr(37843),
+       Ir = Qr(37851),
+       fr = Qr(2383);
+     const Er = Zr.i.Uz * Zr.i.playerEyeToHeightRatio,
```

#### 677. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4125-L4127` → after: `L4289-L4291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4289-L4291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4289-L4291) · [Before (L4125-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4125-L4127)

```diff
-           const yR = (0, qR.f)(JR.soundName);
-           if (!yR) return console.error(`AudioEntityManager: no sound found for "${JR.soundName}", dropping audio entity ${RR}`), void this.remove(RR);
-           const tR = ZR.d.play(yR, JR.volume, GR, JR.maxHearDist, JR.refDistance, !0);
+           const Zr = (0, Ir.c)(Sr.soundName);
+           if (!Zr) return console.error(`AudioEntityManager: no sound found for "${Sr.soundName}", dropping audio entity ${rr}`), void this.remove(rr);
+           const Wr = jr.b.play(Zr, Sr.volume, Qr, Sr.maxHearDist, Sr.refDistance, !0);
```

#### 678. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4134` → after: `L4298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4298) · [Before (L4134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4134)

```diff
-           const RR = (0, iR.i)();
+           const rr = (0, fr.e)();
```

#### 679. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4136` → after: `L4300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4300) · [Before (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4136)

```diff
-           const JR = RR.zC.vW(RR.WH);
+           const Sr = rr.YB.JY(rr.fC);
```

#### 680. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4139-L4140` → after: `L4303-L4304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4303-L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4303-L4304) · [Before (L4139-L4140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4139-L4140)

```diff
-               if (!RR.zC.RGR(GR, "position")) continue;
-               const tR = RR.zC.vW(GR),
+               if (!rr.YB.TSr(Qr, "position")) continue;
+               const Wr = rr.YB.JY(Qr),
```

#### 681. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4151` → after: `L4315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4315) · [Before (L4151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4151)

```diff
-   40304: (RR, JR, GR) => {
+   40625: (rr, Sr, Qr) => {
```

#### 682. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4153-L4154` → after: `L4317-L4318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4317-L4318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4317-L4318) · [Before (L4153-L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4153-L4154)

```diff
-       c: () => fR,
-       f: () => VR
+       d: () => Er,
+       h: () => pr
```

#### 683. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4156-L4161` → after: `L4320-L4325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4320-L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4320-L4325) · [Before (L4156-L4161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4156-L4161)

```diff
-     var yR = GR(1916),
-       tR = GR(203),
-       uR = GR(1879),
-       ZR = GR(1997),
-       qR = GR(1282),
-       iR = GR(1201);
+     var Zr = Qr(1846),
+       Wr = Qr(208),
+       ar = Qr(1815),
+       jr = Qr(1940),
+       Ir = Qr(1262),
+       fr = Qr(1187);
```

#### 684. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4166` → after: `L4330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4330) · [Before (L4166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4166)

```diff
-         return uR.c.supports("appCheck") && RR.isLoggedIn() && !RR.hasTriedAppAttestation()
+         return ar.b.supports("appCheck") && rr.isLoggedIn() && !rr.hasTriedAppAttestation()
```

#### 685. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4171` → after: `L4335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4335) · [Before (L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4171)

```diff
-           } = await (0, ZR.b)(), {
+           } = await (0, jr.d)(), {
```

#### 686. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4173` → after: `L4337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4337) · [Before (L4173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4173)

```diff
-           } = await (0, iR.postJsonWithMetricsCookiesAndJsonResponse)(`${qR.clientSideServerUrls.indexUrl}/index/app-attestation`, {
+           } = await (0, fr.postJsonWithMetricsCookiesAndJsonResponse)(`${Ir.clientSideServerUrls.indexUrl}/index/app-attestation`, {
```

#### 687. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4180` → after: `L4344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4344) · [Before (L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4180)

```diff
-           return JR instanceof yR.b && "failed" === JR.code ? (console.warn("The app couldn't get an App Check token:", JR), RR.markAppAttestationTried()) : console.error("Failed to attest the app:", JR), !1
+           return Sr instanceof Zr.e && "failed" === Sr.code ? (console.warn("The app couldn't get an App Check token:", Sr), rr.markAppAttestationTried()) : console.error("Failed to attest the app:", Sr), !1
```

#### 688. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4193` → after: `L4357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4357) · [Before (L4193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4193)

```diff
-   40295: (RR, JR, GR) => {
+   40617: (rr, Sr, Qr) => {
```

#### 689. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4195-L4196` → after: `L4359-L4360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4359-L4360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4359-L4360) · [Before (L4195-L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4195-L4196)

```diff
-       e: () => wR,
-       h: () => VR
+       b: () => mr,
+       d: () => pr
```

#### 690. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4198-L4201` → after: `L4362-L4365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4362-L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4362-L4365) · [Before (L4198-L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4198-L4201)

```diff
-     var yR = GR(203),
-       tR = GR(2023),
-       uR = GR(1295),
-       ZR = GR(10298);
+     var Zr = Qr(208),
+       Wr = Qr(1974),
+       ar = Qr(1267),
+       jr = Qr(10062);
```

#### 691. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4211` → after: `L4375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4375) · [Before (L4211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4211)

```diff
-       return (JR === tR.code || JR === iR) && (GR === tR.text || GR === tR.text + yR.k)
+       return (Sr === Wr.code || Sr === fr) && (Qr === Wr.text || Qr === Wr.text + Zr.l)
```

#### 692. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4214` → after: `L4378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4378) · [Before (L4214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4214)

```diff
-       let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tR.b;
+       let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wr.e;
```

#### 693. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4217` → after: `L4381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4381) · [Before (L4217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4217)

```diff
-         (0, uR.r)(JR);
+         (0, ar.l)(Sr);
```

#### 694. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4230` → after: `L4394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4394) · [Before (L4230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4230)

```diff
-       const JR = (0, ZR.h)(RR);
+       const Sr = (0, jr.d)(rr);
```

#### 695. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4234` → after: `L4398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4398) · [Before (L4234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4234)

```diff
-   40276: (RR, JR, GR) => {
+   40593: (rr, Sr, Qr) => {
```

#### 696. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4236-L4237` → after: `L4400-L4401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4400-L4401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4400-L4401) · [Before (L4236-L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4236-L4237)

```diff
-       c: () => uR,
-       g: () => tR
+       b: () => ar,
+       e: () => Wr
```

#### 697. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4239` → after: `L4403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4403) · [Before (L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4239)

```diff
-     var yR = GR(32);
+     var Zr = Qr(34);
```

#### 698. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4246` → after: `L4410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4410) · [Before (L4246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4246)

```diff
-       "refetchCode" !== RR ? "Plugin|MobAiPlugin|ShowPetUi" !== RR ? Promise.all([GR.e(128), GR.e(129), GR.e(118), GR.e(120), GR.e(247)]).then((() => GR(53753))).then((GR => {
+       "refetchCode" !== rr ? "Plugin|MobAiPlugin|ShowPetUi" !== rr ? Promise.all([Qr.e(128), Qr.e(129), Qr.e(118), Qr.e(120), Qr.e(248)]).then((() => Qr(54268))).then((Qr => {
```

#### 699. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4252-L4253` → after: `L4416-L4417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4416-L4417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4416-L4417) · [Before (L4252-L4253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4252-L4253)

```diff
-         console.error(`Game message ${RR} failed`, JR)
-       })) : yR.n.JK("showPetUi", JR) : yR.n.JK("refetchCode")
+         console.error(`Game message ${rr} failed`, Sr)
+       })) : Zr.i.Jp("showPetUi", Sr) : Zr.i.Jp("refetchCode")
```

#### 700. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4256` → after: `L4420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4420) · [Before (L4256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4256)

```diff
-   40310: (RR, JR, GR) => {
+   40627: (rr, Sr, Qr) => {
```

#### 701. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4258` → after: `L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4422) · [Before (L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4258)

```diff
-       c: () => iR
+       b: () => fr
```

#### 702. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4260-L4262` → after: `L4424-L4426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4424-L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4424-L4426) · [Before (L4260-L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4260-L4262)

```diff
-     var yR = GR(10298),
-       tR = GR(37640),
-       uR = GR(40317);
+     var Zr = Qr(10062),
+       Wr = Qr(38018),
+       ar = Qr(40632);
```

#### 703. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4275` → after: `L4439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4439) · [Before (L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4275)

```diff
-       if (RR instanceof tR.g) return {
+       if (rr instanceof Wr.c) return {
```

#### 704. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4279-L4281` → after: `L4443-L4445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4443-L4445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4443-L4445) · [Before (L4279-L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4279-L4281)

```diff
-       const GR = (0, yR.h)(RR),
-         iR = "number" === typeof GR ? GR : 0;
-       return null !== (0, uR.e)(iR).name ? {
+       const Qr = (0, Zr.d)(rr),
+         fr = "number" === typeof Qr ? Qr : 0;
+       return null !== (0, ar.i)(fr).name ? {
```

#### 705. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4290` → after: `L4454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4454) · [Before (L4290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4290)

```diff
-   10298: (RR, JR, GR) => {
+   10062: (rr, Sr, Qr) => {
```

#### 706. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4293-L4296` → after: `L4458-L4460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4458-L4460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4458-L4460) · [Before (L4293-L4296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4293-L4296)

```diff
-       h: () => ZR,
-       k: () => qR,
-       n: () => fR,
-       p: () => iR
+       e: () => Ir,
+       f: () => Er,
+       g: () => fr
```

#### 707. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4298-L4299` → after: `L4462-L4463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4462-L4463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4462-L4463) · [Before (L4298-L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4298-L4299)

```diff
-     var yR = GR(203),
-       tR = GR(5425);
+     var Zr = Qr(208),
+       Wr = Qr(5384);
```

#### 708. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4311` → after: `L4475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4475) · [Before (L4311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4311)

```diff
-       return null !== (JR = Object.keys(tR.d).find((JR => tR.d[JR] === RR))) && void 0 !== JR ? JR : null
+       return null !== (Sr = Object.keys(Wr.b).find((Sr => Wr.b[Sr] === rr))) && void 0 !== Sr ? Sr : null
```

#### 709. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4324` → after: `L4488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4488) · [Before (L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4324)

```diff
-   10285: (RR, JR, GR) => {
+   10047: (rr, Sr, Qr) => {
```

#### 710. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4326-L4327` → after: `L4490-L4491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4490-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4490-L4491) · [Before (L4326-L4327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4326-L4327)

```diff
-       b: () => fR,
-       e: () => iR
+       d: () => Er,
+       f: () => fr
```

#### 711. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4329` → after: `L4493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4493) · [Before (L4329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4329)

```diff
-     var yR = GR(377);
+     var Zr = Qr(379);
```

#### 712. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4340` → after: `L4504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4504) · [Before (L4340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4340)

```diff
-         if (null === (0, yR.Ee)(RR)) return !1;
+         if (null === (0, Zr.te)(rr)) return !1;
```

#### 713. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4345` → after: `L4509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4509) · [Before (L4345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4345)

```diff
-       }(JR) ? JR : RR
+       }(Sr) ? Sr : rr
```

#### 714. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4347-L4348` → after: `L4511-L4512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4511-L4512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4511-L4512) · [Before (L4347-L4348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4347-L4348)

```diff
-     var uR = GR(1270),
-       ZR = GR(1343);
+     var ar = Qr(1251),
+       jr = Qr(1304);
```

#### 715. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4351` → after: `L4515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4515) · [Before (L4351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4351)

```diff
-       return (0, uR.w)(ZR.g.get().getCurrentLanguageCode(), RR.translationKey, RR.params)
+       return (0, ar.z)(jr.f.get().getCurrentLanguageCode(), rr.translationKey, rr.params)
```

#### 716. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4356` → after: `L4520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4520) · [Before (L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4356)

```diff
-       return "string" === typeof JR ? JR : qR(JR)
+       return "string" === typeof Sr ? Sr : Ir(Sr)
```

#### 717. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4361` → after: `L4525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4525) · [Before (L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4361)

```diff
-       return "string" === typeof JR ? JR : qR({
+       return "string" === typeof Sr ? Sr : Ir({
```

#### 718. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4369` → after: `L4533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4533) · [Before (L4369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4369)

```diff
-   40258: (RR, JR, GR) => {
+   40583: (rr, Sr, Qr) => {
```

#### 719. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4371` → after: `L4535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4535) · [Before (L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4371)

```diff
-       d: () => VR
+       b: () => pr
```

#### 720. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4373-L4379` → after: `L4537-L4543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4537-L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4537-L4543) · [Before (L4373-L4379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4373-L4379)

```diff
-     var yR = GR(1317),
-       tR = GR(1459),
-       uR = GR(25),
-       ZR = GR(1444),
-       qR = GR(1449),
-       iR = GR(1663),
-       fR = GR(37620);
+     var Zr = Qr(1279),
+       Wr = Qr(1433),
+       ar = Qr(26),
+       jr = Qr(1413),
+       Ir = Qr(1422),
+       fr = Qr(1644),
+       Er = Qr(38001);
```

#### 721. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4383-L4384` → after: `L4547-L4548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4547-L4548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4547-L4548) · [Before (L4383-L4384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4383-L4384)

```diff
-         au: JR,
-         Lu: GR
+         xa: Sr,
+         ma: Qr
```

#### 722. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4386-L4388` → after: `L4550-L4552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4550-L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4550-L4552) · [Before (L4386-L4388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4386-L4388)

```diff
-       const VR = null !== JR && void 0 !== JR ? JR : (0, qR.d)().gameNameWithVariation;
-       (0, yR.D)(VR) && ((0, fR.i)(), (0, ZR.ib)((() => {
-         console.log("Received matchmaking order from game server to game", JR), (0, uR.k)("inGameReplay"), (0, iR.navigatePreserveSearch)((0, tR.e)(VR, null !== GR && void 0 !== GR ? GR : void 0))
+       const pr = null !== Sr && void 0 !== Sr ? Sr : (0, Ir.b)().gameNameWithVariation;
+       (0, Zr.J)(pr) && ((0, Er.o)(), (0, jr.Y)((() => {
+         console.log("Received matchmaking order from game server to game", Sr), (0, ar.m)("inGameReplay"), (0, fr.navigatePreserveSearch)((0, Wr.c)(pr, null !== Qr && void 0 !== Qr ? Qr : void 0))
```

#### 723. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4392` → after: `L4556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4556) · [Before (L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4392)

```diff
-   40256: (RR, JR, GR) => {
+   40574: (rr, Sr, Qr) => {
```

#### 724. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4394-L4397` → after: `L4558-L4561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4558-L4561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4558-L4561) · [Before (L4394-L4397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4394-L4397)

```diff
-       c: () => VR,
-       f: () => iR,
-       g: () => fR,
-       i: () => KR
+       b: () => pr,
+       e: () => fr,
+       h: () => Er,
+       j: () => xr
```

#### 725. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4399-L4402` → after: `L4563-L4566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4563-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4563-L4566) · [Before (L4399-L4402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4399-L4402)

```diff
-     var yR = GR(2134),
-       tR = GR(32),
-       uR = GR(1493),
-       ZR = GR(1351);
+     var Zr = Qr(2089),
+       Wr = Qr(34),
+       ar = Qr(1475),
+       jr = Qr(1317);
```

#### 726. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4406` → after: `L4570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4570) · [Before (L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4406)

```diff
-       tR.n.JK("newUiRequest", {
+       Wr.i.Jp("newUiRequest", {
```

#### 727. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4413` → after: `L4577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4577) · [Before (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4413)

```diff
-       tR.n.JK("removeUiRequest", RR, !0);
+       Wr.i.Jp("removeUiRequest", rr, !0);
```

#### 728. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4419` → after: `L4583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4583) · [Before (L4419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4419)

```diff
-       tR.n.JK("clearUiRequests");
+       Wr.i.Jp("clearUiRequests");
```

#### 729. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4431` → after: `L4595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4595) · [Before (L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4431)

```diff
-             title: (0, ZR.f)(iR.params, yR.gameBridge.latest("hiddenPlayerNames"))
+             title: (0, jr.e)(fr.params, Zr.gameBridge.latest("hiddenPlayerNames"))
```

#### 730. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4443` → after: `L4607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4607) · [Before (L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4443)

```diff
-   40327: (RR, JR, GR) => {
+   40640: (rr, Sr, Qr) => {
```

#### 731. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4445` → after: `L4609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4609) · [Before (L4445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4445)

```diff
-       c: () => rR,
+       d: () => Nr,
```

#### 732. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4452-L4453` → after: `L4616-L4617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4616-L4617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4616-L4617) · [Before (L4452-L4453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4452-L4453)

```diff
-       qR = new RegExp(`^${uR}$`);
-     new RegExp(`^${yR}(${[...tR,"other"].join("|")}):(?:n|k(${uR})|b(0|[1-9][0-9]?)):([01])([01])$`);
+       Ir = new RegExp(`^${ar}$`);
+     new RegExp(`^${Zr}(${[...Wr,"other"].join("|")}):(?:n|k(${ar})|b(0|[1-9][0-9]?)):([01])([01])$`);
```

#### 733. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4456` → after: `L4620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4620) · [Before (L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4456)

```diff
-       const fR = "string" === typeof RR && tR.includes(RR) ? RR : "other";
+       const Er = "string" === typeof rr && Wr.includes(rr) ? rr : "other";
```

#### 734. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4458` → after: `L4622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4622) · [Before (L4458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4458)

```diff
-       return "string" === typeof JR ? VR = qR.test(JR) ? `k${JR}` : "n" : "number" === typeof GR && Number.isInteger(GR) && GR >= 0 && GR <= ZR && (VR = `b${GR}`), `${yR}${fR}:${VR}:${uR?1:0}${iR?1:0}`
+       return "string" === typeof Sr ? pr = Ir.test(Sr) ? `k${Sr}` : "n" : "number" === typeof Qr && Number.isInteger(Qr) && Qr >= 0 && Qr <= jr && (pr = `b${Qr}`), `${Zr}${Er}:${pr}:${ar?1:0}${fr?1:0}`
```

#### 735. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4460-L4461` → after: `L4624-L4625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4624-L4625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4624-L4625) · [Before (L4460-L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4460-L4461)

```diff
-     var fR = GR(1850),
-       VR = GR(1950);
+     var Er = Qr(1793),
+       pr = Qr(1890);
```

#### 736. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4465` → after: `L4629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4629) · [Before (L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4465)

```diff
-       const JR = RR instanceof Element && RR !== document.body && RR !== document.documentElement && !(0, fR.v)(RR) && !RR.closest("#root");
+       const Sr = rr instanceof Element && rr !== document.body && rr !== document.documentElement && !(0, Er.q)(rr) && !rr.closest("#root");
```

#### 737. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4467` → after: `L4631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4631) · [Before (L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4467)

```diff
-         editable: (0, VR.b)(RR),
+         editable: (0, pr.e)(rr),
```

#### 738. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4486` → after: `L4650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4650) · [Before (L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4486)

```diff
-   40317: (RR, JR, GR) => {
+   40632: (rr, Sr, Qr) => {
```

#### 739. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4490-L4491` → after: `L4653-L4655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4653-L4655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4653-L4655) · [Before (L4490-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4490-L4491)

```diff
-       f: () => ZR,
-       h: () => tR
+       i: () => fr,
+       j: () => jr,
+       n: () => Wr
```

#### 740. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4493` → after: `L4657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4657) · [Before (L4493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4493)

```diff
-     var yR = GR(203);
+     var Zr = Qr(208);
```

#### 741. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4496` → after: `L4660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4660) · [Before (L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4496)

```diff
-       const JR = RR.endsWith(yR.k);
+       const Sr = rr.endsWith(Zr.l);
```

#### 742. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4498` → after: `L4662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4662) · [Before (L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4498)

```diff
-         text: (JR ? RR.slice(0, -yR.k.length) : RR) || null,
+         text: (Sr ? rr.slice(0, -Zr.l.length) : rr) || null,
```

#### 743. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4506` → after: `L4670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4670) · [Before (L4506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4506)

```diff
-       return null !== GR.name && "" === yR.e[GR.name].text && null !== JR ? JR : GR.reason
+       return null !== Qr.name && "" === Zr.e[Qr.name].text && null !== Sr ? Sr : Qr.reason
```

#### 744. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4513` → after: `L4677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4677) · [Before (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4513)

```diff
-       const tR = null !== (JR = Object.keys(yR.e).find((JR => yR.e[JR].code === RR))) && void 0 !== JR ? JR : null;
+       const Wr = null !== (Sr = Object.keys(Zr.e).find((Sr => Zr.e[Sr].code === rr))) && void 0 !== Sr ? Sr : null;
```

#### 745. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4517` → after: `L4681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4681) · [Before (L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4517)

```diff
-         reason: null !== GR && void 0 !== GR ? GR : `${uR}\nCode: ${RR}`,
+         reason: null !== Qr && void 0 !== Qr ? Qr : `${ar}\nCode: ${rr}`,
```

#### 746. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4529` → after: `L4693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4693) · [Before (L4529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4529)

```diff
-         reason: "" !== ZR ? ZR : null !== GR && void 0 !== GR ? GR : RR === yR.e.gameOrPluginKick.code ? qR : `Code: ${RR}`,
+         reason: "" !== jr ? jr : null !== Qr && void 0 !== Qr ? Qr : rr === Zr.e.gameOrPluginKick.code ? Ir : `Code: ${rr}`,
```

#### 747. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4536` → after: `L4700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4700) · [Before (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4536)

```diff
-   40251: (RR, JR, GR) => {
+   40568: (rr, Sr, Qr) => {
```

#### 748. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4538` → after: `L4702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4702) · [Before (L4538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4538)

```diff
-       d: () => yR
+       b: () => Zr
```

#### 749. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4550-L4551` → after: `L4714-L4715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4714-L4715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4714-L4715) · [Before (L4550-L4551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4550-L4551)

```diff
-         for (const yR of RR.vt) {
-           let RR = this.members.get(yR.Ot);
+         for (const Zr of rr.vW) {
+           let rr = this.members.get(Zr.OW);
```

#### 750. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4555-L4556` → after: `L4719-L4720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4719-L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4719-L4720) · [Before (L4555-L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4555-L4556)

```diff
-             }, this.members.set(yR.Ot, RR), JR.added.push(yR.Ot)), null !== yR.xt && (RR.name = yR.xt), null !== yR.Nt || yR.Dt.length > 0) {
-             const GR = null === yR.Nt ? {} : JSON.parse(yR.Nt);
+             }, this.members.set(Zr.OW, rr), Sr.added.push(Zr.OW)), null !== Zr.LW && (rr.name = Zr.LW), null !== Zr.lW || Zr.XW.length > 0) {
+             const Qr = null === Zr.lW ? {} : JSON.parse(Zr.lW);
```

#### 751. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4558` → after: `L4722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4722) · [Before (L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4558)

```diff
-             for (const JR of yR.Dt) delete RR.settings[JR], GR[JR] = void 0;
+             for (const Sr of Zr.XW) delete rr.settings[Sr], Qr[Sr] = void 0;
```

#### 752. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4560` → after: `L4724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4724) · [Before (L4560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4560)

```diff
-               playerId: yR.Ot,
+               playerId: Zr.OW,
```

#### 753. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4565` → after: `L4729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4729) · [Before (L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4565)

```diff
-         for (const yR of RR.Ht) {
+         for (const Zr of rr.PW) {
```

#### 754. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4570` → after: `L4734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4734) · [Before (L4570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4570)

```diff
-             name: null !== (GR = RR.name) && void 0 !== GR ? GR : void 0
+             name: null !== (Qr = rr.name) && void 0 !== Qr ? Qr : void 0
```

#### 755. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4583` → after: `L4747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4747) · [Before (L4583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4583)

```diff
-         return null !== (JR = null === (GR = this.members.get(RR)) || void 0 === GR ? void 0 : GR.name) && void 0 !== JR ? JR : void 0
+         return null !== (Sr = null === (Qr = this.members.get(rr)) || void 0 === Qr ? void 0 : Qr.name) && void 0 !== Sr ? Sr : void 0
```

#### 756. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4598` → after: `L4762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4762) · [Before (L4598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4598)

```diff
-   40283: (RR, JR, GR) => {
+   40599: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/186.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/186.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f)

#### 1. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/186.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/186.js#L4)

```diff
-   10311: (RR, JR, GR) => {
+   10070: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/186.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/186.js#L6-L7)

```diff
-       e: () => tR,
-       f: () => ZR
+       b: () => Wr,
+       c: () => jr
```

#### 3. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/186.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/186.js#L9)

```diff
-     var yR = GR(188);
+     var Zr = Qr(194);
```

#### 4. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/186.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/186.js#L19)

```diff
-         return yR.T.flatMap((RR => {
+         return Zr.Z.flatMap((rr => {
```

#### 5. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/186.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/186.js#L21)

```diff
-           const GR = null !== (JR = this.marks.get(RR)) && void 0 !== JR ? JR : uR.marks.get(RR);
+           const Qr = null !== (Sr = this.marks.get(rr)) && void 0 !== Sr ? Sr : ar.marks.get(rr);
```

#### 6. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/186.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/186.js#L34)

```diff
-   10303: (RR, JR, GR) => {
+   10068: (rr, Sr, Qr) => {
```

#### 7. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L41-L47` → after: `L41-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L41-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/186.js#L41-L47) · [Before (L41-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/186.js#L41-L47)

```diff
-     var yR = GR(4422),
-       tR = GR(3243),
-       uR = GR(2363),
-       ZR = GR(5452),
-       qR = GR(4850),
-       iR = GR(5467),
-       fR = GR(10311);
+     var Zr = Qr(4354),
+       Wr = Qr(3216),
+       ar = Qr(2304),
+       jr = Qr(5411),
+       Ir = Qr(4759),
+       fr = Qr(5428),
+       Er = Qr(10070);
```

#### 8. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/186.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/186.js#L51)

```diff
-       return Promise.all([GR.e(91), GR.e(105), GR.e(240), GR.e(158), GR.e(244), GR.e(161), GR.e(255), GR.e(71)]).then((() => GR(42208)))
+       return Promise.all([Qr.e(91), Qr.e(105), Qr.e(241), Qr.e(158), Qr.e(245), Qr.e(161), Qr.e(256), Qr.e(71)]).then((() => Qr(42541)))
```

#### 9. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L55` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/186.js#L55) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/186.js#L55)

```diff
-       return Promise.all([GR.e(88), GR.e(91), GR.e(105), GR.e(240), GR.e(158), GR.e(244), GR.e(222), GR.e(161), GR.e(250), GR.e(242), GR.e(103), GR.e(246), GR.e(255), GR.e(76)]).then((() => GR(42387)))
+       return Promise.all([Qr.e(88), Qr.e(91), Qr.e(105), Qr.e(241), Qr.e(158), Qr.e(245), Qr.e(223), Qr.e(161), Qr.e(251), Qr.e(243), Qr.e(103), Qr.e(247), Qr.e(256), Qr.e(76)]).then((() => Qr(42720)))
```

#### 10. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/186.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/186.js#L59)

```diff
-       Promise.all([GR.e(85), GR.e(89), GR.e(86), GR.e(87), GR.e(88), GR.e(105), GR.e(102), GR.e(306), GR.e(127), GR.e(280), GR.e(254), GR.e(246), GR.e(55)]).then((() => GR(42538))).catch((() => {}))
+       Promise.all([Qr.e(85), Qr.e(89), Qr.e(86), Qr.e(87), Qr.e(88), Qr.e(105), Qr.e(102), Qr.e(307), Qr.e(127), Qr.e(281), Qr.e(255), Qr.e(247), Qr.e(55)]).then((() => Qr(42871))).catch((() => {}))
```

#### 11. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/186.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/186.js#L63)

```diff
-       return ZR.e.cancelDownloadForJoin(), (0, qR.e)(), (0, tR.d)(), (0, iR.h)(), (0, uR.i)(), rR(), KR().then((RR => {
+       return jr.e.cancelDownloadForJoin(), (0, Ir.d)(), (0, Wr.g)(), (0, fr.e)(), (0, ar.j)(), Nr(), xr().then((rr => {
```

#### 12. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L68-L69` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/186.js#L68-L69) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/186.js#L68-L69)

```diff
-       }), (() => {})), VR ??= wR().then((RR => ((0, fR.f)("phase_chunk"), RR.startWasmPlay(), (0, fR.f)("phase_start"), RR.followPageUiPack((RR => {
-         yR.b.showGamePack(RR)
+       }), (() => {})), pr ??= mr().then((rr => ((0, Er.c)("phase_chunk"), rr.startWasmPlay(), (0, Er.c)("phase_start"), rr.followPageUiPack((rr => {
+         Zr.d.showGamePack(rr)
```

#### 13. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L76-L77` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/186.js#L76-L77) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/186.js#L76-L77)

```diff
-       return rR(), GR.e(132).then((() => GR(42579))).catch((() => {})), wR().then((() => {
-         (0, fR.f)("phase_chunk")
+       return Nr(), Qr.e(132).then((() => Qr(42906))).catch((() => {})), mr().then((() => {
+         (0, Er.c)("phase_chunk")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/187.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/187.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3)

#### 1. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/187.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/187.js#L4)

```diff
-   10338: (RR, JR, GR) => {
+   10090: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/188.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/188.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071)

#### 1. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/188.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/188.js#L4)

```diff
-   10340: (RR, JR, GR) => {
+   10093: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/189.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/189.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63)

#### 1. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/189.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/189.js#L4)

```diff
-   10345: (RR, JR, GR) => {
+   10097: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/190.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/190.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f)

#### 1. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/190.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/190.js#L4)

```diff
-   10350: (RR, JR, GR) => {
+   10106: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/191.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/191.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f)

#### 1. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/191.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/191.js#L4)

```diff
-   10355: (RR, JR, GR) => {
+   10108: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/192.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/192.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4)

#### 1. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/192.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/192.js#L4)

```diff
-   10362: (RR, JR, GR) => {
+   10115: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/193.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/193.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2)

#### 1. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/193.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/193.js#L4)

```diff
-   10369: (RR, JR, GR) => {
+   10121: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/194.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/194.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27)

#### 1. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/194.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/194.js#L4)

```diff
-   10372: (RR, JR, GR) => {
+   10126: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/195.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/195.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985)

#### 1. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/195.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/195.js#L4)

```diff
-   10379: (RR, JR, GR) => {
+   10131: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/196.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/196.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38)

#### 1. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/196.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/196.js#L4)

```diff
-   10384: (RR, JR, GR) => {
+   10139: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/197.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/197.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b)

#### 1. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/197.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/197.js#L4)

```diff
-   10390: (RR, JR, GR) => {
+   10144: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/198.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/198.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31)

#### 1. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/198.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/198.js#L4)

```diff
-   10392: (RR, JR, GR) => {
+   10149: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/199.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/199.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93)

#### 1. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/199.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/199.js#L4)

```diff
-   10399: (RR, JR, GR) => {
+   10158: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/200.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/200.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f)

#### 1. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/200.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/200.js#L4)

```diff
-   10401: (RR, JR, GR) => {
+   10165: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/201.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/201.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9)

#### 1. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/201.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/201.js#L4)

```diff
-   10406: (RR, JR, GR) => {
+   10169: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/202.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/202.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9)

#### 1. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/202.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/202.js#L4)

```diff
-   10409: (RR, JR, GR) => {
+   10178: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/203.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/203.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd)

#### 1. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/203.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/203.js#L4)

```diff
-   10413: (RR, JR, GR) => {
+   10184: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/204.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/204.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1)

#### 1. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/204.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/204.js#L4)

```diff
-   10417: (RR, JR, GR) => {
+   10192: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/205.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/205.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7)

#### 1. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/205.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/205.js#L4)

```diff
-   10421: (RR, JR, GR) => {
+   10197: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/206.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/206.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643)

#### 1. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/206.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/206.js#L4)

```diff
-   10426: (RR, JR, GR) => {
+   10201: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/207.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/207.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376)

#### 1. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/207.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/207.js#L4)

```diff
-   10430: (RR, JR, GR) => {
+   10204: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/208.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/208.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1)

#### 1. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/208.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/208.js#L4)

```diff
-   10438: (RR, JR, GR) => {
+   10212: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/209.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/209.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9)

#### 1. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/209.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/209.js#L4)

```diff
-   10441: (RR, JR, GR) => {
+   10219: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/210.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/210.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2)

#### 1. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/210.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/210.js#L4)

```diff
-   10445: (RR, JR, GR) => {
+   10223: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/211.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/211.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56)

#### 1. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/211.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/211.js#L4)

```diff
-   10448: (RR, JR, GR) => {
+   10232: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/212.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/212.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02)

#### 1. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/212.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/212.js#L4)

```diff
-   10452: (RR, JR, GR) => {
+   10239: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/213.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/213.js` (177 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723)

#### 1. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L4)

```diff
-   10571: (RR, JR) => {
+   10357: (rr, Sr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L9-L10)

```diff
-         tR = !RR.hostname.includes("trycloudflare.com") && !RR.hostname.includes("discordsays.com") && yR.length > 2 ? `/${yR[0]}` : "";
-       return RR.pathname.startsWith("/.proxy") ? `${RR.protocol}//${GR}${tR}${RR.pathname}${RR.search}` : `${RR.protocol}//${GR}/.proxy/colyseus${tR}${RR.pathname}${RR.search}`
+         Wr = !rr.hostname.includes("trycloudflare.com") && !rr.hostname.includes("discordsays.com") && Zr.length > 2 ? `/${Zr[0]}` : "";
+       return rr.pathname.startsWith("/.proxy") ? `${rr.protocol}//${Qr}${Wr}${rr.pathname}${rr.search}` : `${rr.protocol}//${Qr}/.proxy/colyseus${Wr}${rr.pathname}${rr.search}`
```

#### 3. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L13-L16` → after: `L13-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L13-L16) · [Before (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L13-L16)

```diff
-   10562: (RR, JR, GR) => {
-     var yR, tR, uR, ZR, qR = GR(10474),
-       iR = GR(10564),
-       fR = GR(10530);
+   10352: (rr, Sr, Qr) => {
+     var Zr, Wr, ar, jr, Ir = Qr(10256),
+       fr = Qr(10355),
+       Er = Qr(10319);
```

#### 4. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L102-L103` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L102-L103) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L102-L103)

```diff
-               fR = `Login with ${RR[0].toUpperCase()+RR.substring(1)}`,
-               VR = this.http.client.getHttpEndpoint(`${JR.prefix||`${this.settings.path}/provider`}/${RR}${iR}`),
+               Er = `Login with ${rr[0].toUpperCase()+rr.substring(1)}`,
+               pr = this.http.client.getHttpEndpoint(`${Sr.prefix||`${this.settings.path}/provider`}/${rr}${fr}`),
```

#### 5. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L111)

```diff
-                 qR.__classPrivateFieldGet(this, uR, "f") && !qR.__classPrivateFieldGet(this, uR, "f").closed || (qR.__classPrivateFieldSet(this, uR, void 0, "f"), yR("xR"), window.removeEventListener("message", rR))
+                 Ir.__classPrivateFieldGet(this, ar, "f") && !Ir.__classPrivateFieldGet(this, ar, "f").closed || (Ir.__classPrivateFieldSet(this, ar, void 0, "f"), Zr("Rr"), window.removeEventListener("message", Nr))
```

#### 6. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L130-L136` → after: `L130-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L130-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L130-L136) · [Before (L130-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L130-L136)

```diff
-   10465: (RR, JR, GR) => {
-     var yR, tR = GR(10474),
-       uR = GR(10480),
-       ZR = GR(10482),
-       qR = GR(10545),
-       iR = GR(10562),
-       fR = GR(10571);
+   10252: (rr, Sr, Qr) => {
+     var Zr, Wr = Qr(10256),
+       ar = Qr(10265),
+       jr = Qr(10271),
+       Ir = Qr(10345),
+       fr = Qr(10352),
+       Er = Qr(10357);
```

#### 7. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L210)

```diff
-             console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${yR.roomId}'...`);
+             console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${Zr.roomId}'...`);
```

#### 8. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L215)

```diff
-                 yield this.consumeSeatReservation(RR, JR, qR), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${yR.roomId}'`)
+                 yield this.consumeSeatReservation(rr, Sr, Ir), console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${Zr.roomId}'`)
```

#### 9. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L217)

```diff
-                 GR < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${GR} out of 8)`), setTimeout(uR, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server log … [truncated]
+                 Qr < 8 ? (console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${Qr} out of 8)`), setTimeout(ar, 2e3)) : console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server log … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L227` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L227)

```diff
-                   RR && qR.rC(128, new Uint8Array(RR))
+                   rr && Ir.Uy(128, new Uint8Array(rr))
```

#### 11. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L239` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L239) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L239)

```diff
-           const uR = (yield this.http.post(`matchmake/${RR}/${JR}`, {
+           const ar = (yield this.http.post(`matchmake/${rr}/${Sr}`, {
```

#### 12. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L252)

```diff
-         return new ZR.Lw(RR, JR)
+         return new jr.Ym(rr, Sr)
```

#### 13. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L259)

```diff
-         for (const ZR in JR) JR.hasOwnProperty(ZR) && (yR += (yR ? "&" : "") + `${ZR}=${JR[ZR]}`);
+         for (const jr in Sr) Sr.hasOwnProperty(jr) && (Zr += (Zr ? "&" : "") + `${jr}=${Sr[jr]}`);
```

#### 14. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L261-L263` → after: `L261-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L261-L263) · [Before (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L261-L263)

```diff
-         let tR = this.settings.secure ? `${GR}s://` : `${GR}://`;
-         RR.publicAddress ? tR += `${RR.publicAddress}` : tR += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
-         const uR = `${tR}/${RR.processId}/${RR.roomId}?${yR}`;
+         let Wr = this.settings.secure ? `${Qr}s://` : `${Qr}://`;
+         rr.publicAddress ? Wr += `${rr.publicAddress}` : Wr += `${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;
+         const ar = `${Wr}/${rr.processId}/${rr.roomId}?${Zr}`;
```

#### 15. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L268-L269)

```diff
-         const JR = RR.startsWith("/") ? RR : `/${RR}`;
-         let GR = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${JR}`;
+         const Sr = rr.startsWith("/") ? rr : `/${rr}`;
+         let Qr = `${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${Sr}`;
```

#### 16. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L278-L280` → after: `L278-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L278-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L278-L280) · [Before (L278-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L278-L280)

```diff
-   10486: (RR, JR, GR) => {
-     var yR = GR(10489),
-       tR = GR(10504);
+   10277: (rr, Sr, Qr) => {
+     var Zr = Qr(10281),
+       Wr = Qr(10296);
```

#### 17. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L303-L304` → after: `L303-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L303-L304) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L303-L304)

```diff
-   10545: (RR, JR, GR) => {
-     var yR = GR(10480);
+   10345: (rr, Sr, Qr) => {
+     var Zr = Qr(10265);
```

#### 18. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L311)

```diff
-           Object.defineProperty(JR, GR, yR.get ? yR : {
+           Object.defineProperty(Sr, Qr, Zr.get ? Zr : {
```

#### 19. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L320` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L320) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L320)

```diff
-     var uR = tR(GR(10554));
+     var ar = Wr(Qr(10347));
```

#### 20. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L358)

```diff
-   10516: (RR, JR) => {
+   10303: (rr, Sr) => {
```

#### 21. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L362-L371` → after: `L362-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L362-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L362-L371) · [Before (L362-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L362-L371)

```diff
-   10482: (RR, JR, GR) => {
-     var yR = GR(10486),
-       tR = GR(10516),
-       uR = GR(10524),
-       ZR = GR(10530),
-       qR = GR(10537),
-       iR = GR(10496),
-       fR = GR(10541),
-       VR = GR(10480),
-       KR = GR(10543);
+   10271: (rr, Sr, Qr) => {
+     var Zr = Qr(10277),
+       Wr = Qr(10303),
+       ar = Qr(10312),
+       jr = Qr(10319),
+       Ir = Qr(10324),
+       fr = Qr(10287),
+       Er = Qr(10327),
+       pr = Qr(10265),
+       xr = Qr(10336);
```

#### 22. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L374` → after: `L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L374) · [Before (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L374)

```diff
-         this.onStateChange = qR.createSignal(), this.onError = qR.createSignal(), this.oW = qR.createSignal(), this.onJoin = qR.createSignal(), this.hasJoined = !1, this.onMessageHandlers = ZR.createNanoEvents(), this.roomId = null, this.name = RR, this.packr = new KR.Packr, this … [truncated]
+         this.onStateChange = Ir.createSignal(), this.onError = Ir.createSignal(), this.WK = Ir.createSignal(), this.onJoin = Ir.createSignal(), this.hasJoined = !1, this.onMessageHandlers = jr.createNanoEvents(), this.roomId = null, this.name = rr, this.packr = new xr.Packr, this … [truncated]
```

#### 23. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L376-L377` → after: `L376-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L376-L377) · [Before (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L376-L377)

```diff
-           return null === (GR = console.warn) || void 0 === GR ? void 0 : GR.call(console, `colyseus.js - onError => (${RR}) ${JR}`)
-         })), this.oW((() => this.IU()))
+           return null === (Qr = console.warn) || void 0 === Qr ? void 0 : Qr.call(console, `colyseus.js - onError => (${rr}) ${Sr}`)
+         })), this.WK((() => this.hY()))
```

#### 24. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L386-L387` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L386-L387) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L386-L387)

```diff
-             if (!GR.hasJoined) return null === (yR = console.warn) || void 0 === yR || yR.call(console, `Room connection was closed unexpectedly (${RR.code}): ${RR.reason}`), void GR.onError.invoke(RR.code, RR.reason);
-             RR.code === VR.CloseCode.DEVMODE_RESTART && JR ? JR() : (GR.oW.invoke(RR.code, RR.reason), GR.destroy())
+             if (!Qr.hasJoined) return null === (Zr = console.warn) || void 0 === Zr || Zr.call(console, `Room connection was closed unexpectedly (${rr.code}): ${rr.reason}`), void Qr.onError.invoke(rr.code, rr.reason);
+             rr.code === pr.CloseCode.DEVMODE_RESTART && Sr ? Sr() : (Qr.WK.invoke(rr.code, rr.reason), Qr.destroy())
```

#### 25. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L390` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L390) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L390)

```diff
-             null === (JR = console.warn) || void 0 === JR || JR.call(console, `Room, onError (${RR.code}): ${RR.reason}`), GR.onError.invoke(RR.code, RR.reason)
+             null === (Sr = console.warn) || void 0 === Sr || Sr.call(console, `Room, onError (${rr.code}): ${rr.reason}`), Qr.onError.invoke(rr.code, rr.reason)
```

#### 26. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L399` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L399) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L399)

```diff
-           this.oW((RR => JR(RR))), this.connection ? RR ? (this.packr.buffer[0] = tR.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.oW.invoke(VR.CloseCode.CONSENTED)
+           this.WK((rr => Sr(rr))), this.connection ? rr ? (this.packr.buffer[0] = Wr.Protocol.LEAVE_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))) : this.connection.close() : this.WK.invoke(pr.CloseCode.CONSENTED)
```

#### 27. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L432)

```diff
-         return this.jU.getState()
+         return this.TY.getState()
```

#### 28. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L435` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L435) · [Before (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L435)

```diff
-         this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.oW.clear(), this.onMessageHandlers.events = {}, this.jU instanceof fR.zD && (this.jU.VK.root.callbacks = {})
+         this.onJoin.clear(), this.onStateChange.clear(), this.onError.clear(), this.WK.clear(), this.onMessageHandlers.events = {}, this.TY instanceof Er.kR && (this.TY.Ix.root.callbacks = {})
```

#### 29. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L445` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L445) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L445)

```diff
-           if (this.serializerId = iR.decode.utf8Read(JR, GR, JR[GR.offset++]), !this.jU) {
+           if (this.serializerId = fr.decode.utf8Read(Sr, Qr, Sr[Qr.offset++]), !this.TY) {
```

#### 30. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L447` → after: `L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L447) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L447)

```diff
-             this.jU = new RR
+             this.TY = new rr
```

#### 31. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L449` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L449) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L449)

```diff
-           JR.byteLength > GR.offset && this.jU.handshake && this.jU.handshake(JR, GR), this.reconnectionToken = `${this.roomId}:${RR}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = tR.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
+           Sr.byteLength > Qr.offset && this.TY.handshake && this.TY.handshake(Sr, Qr), this.reconnectionToken = `${this.roomId}:${rr}`, this.hasJoined = !0, this.onJoin.invoke(), this.packr.buffer[0] = Wr.Protocol.JOIN_ROOM, this.connection.send(this.packr.buffer.subarray(0, 1))
```

#### 32. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L455-L456` → after: `L455-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L455-L456) · [Before (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L455-L456)

```diff
-         else if (yR === tR.Protocol.ROOM_STATE) this.jU.setState(JR, GR), this.onStateChange.invoke(this.jU.getState());
-         else if (yR === tR.Protocol.ROOM_STATE_PATCH) this.jU.patch(JR, GR), this.onStateChange.invoke(this.jU.getState());
+         else if (Zr === Wr.Protocol.ROOM_STATE) this.TY.setState(Sr, Qr), this.onStateChange.invoke(this.TY.getState());
+         else if (Zr === Wr.Protocol.ROOM_STATE_PATCH) this.TY.patch(Sr, Qr), this.onStateChange.invoke(this.TY.getState());
```

#### 33. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L471` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L471) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L471)

```diff
-         this.onMessageHandlers.events[yR] ? this.onMessageHandlers.emit(yR, JR) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", RR, JR) : null === (GR = console.warn) || void 0 === GR || GR.call(console, `colyseus.js: onMessage() not registered for type '$ … [truncated]
+         this.onMessageHandlers.events[Zr] ? this.onMessageHandlers.emit(Zr, Sr) : this.onMessageHandlers.events["*"] ? this.onMessageHandlers.emit("*", rr, Sr) : null === (Qr = console.warn) || void 0 === Qr || Qr.call(console, `colyseus.js: onMessage() not registered for type '$ … [truncated]
```

#### 34. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L474` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L474) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L474)

```diff
-         this.jU && this.jU.teardown()
+         this.TY && this.TY.teardown()
```

#### 35. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L481)

```diff
-             return `i${RR}`;
+             return `i${rr}`;
```

#### 36. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L487` → after: `L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L487) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L487)

```diff
-     JR.Lw = wR
+     Sr.Ym = mr
```

#### 37. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L489-L490` → after: `L489-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L489-L490) · [Before (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L489-L490)

```diff
-   10564: (RR, JR, GR) => {
-     var yR = GR(10474);
+   10355: (rr, Sr, Qr) => {
+     var Zr = Qr(10256);
```

#### 38. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L547` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L547) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L547)

```diff
-   10530: (RR, JR) => {
+   10319: (rr, Sr) => {
```

#### 39. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L564` → after: `L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L564) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L564)

```diff
-   10537: (RR, JR) => {
+   10324: (rr, Sr) => {
```

#### 40. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L607` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L607) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L607)

```diff
-   10480: (RR, JR) => {
+   10265: (rr, Sr) => {
```

#### 41. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L622-L632` → after: `L622-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L622-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L622-L632) · [Before (L622-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L622-L632)

```diff
-   10456: (RR, JR, GR) => {
-     GR(10462);
-     var yR = GR(10465),
-       tR = GR(10516),
-       uR = GR(10482),
-       ZR = GR(10562),
-       qR = GR(10480),
-       iR = GR(10541),
-       fR = GR(10574),
-       VR = GR(10524);
-     VR.registerSerializer("schema", iR.zD), VR.registerSerializer("none", fR.NoneSerializer), JR.Client = yR.Client, JR.MatchMakeError = yR.MatchMakeError, Object.defineProperty(JR, "ErrorCode", {
+   10242: (rr, Sr, Qr) => {
+     Qr(10245);
+     var Zr = Qr(10252),
+       Wr = Qr(10303),
+       ar = Qr(10271),
+       jr = Qr(10352),
+       Ir = Qr(10265),
+       fr = Qr(10327),
+       Er = Qr(10363),
+       pr = Qr(10312);
+     pr.registerSerializer("schema", fr.kR), pr.registerSerializer("none", Er.NoneSerializer), Sr.Client = Zr.Client, Sr.MatchMakeError = Zr.MatchMakeError, Object.defineProperty(Sr, "ErrorCode", {
```

#### 42. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L642)

```diff
-     }), JR.Lw = uR.Lw, JR.Auth = ZR.Auth, JR.ServerError = qR.ServerError, JR.zD = iR.zD, JR.getStateCallbacks = iR.getStateCallbacks, JR.registerSerializer = VR.registerSerializer
+     }), Sr.Ym = ar.Ym, Sr.Auth = jr.Auth, Sr.ServerError = Ir.ServerError, Sr.kR = fr.kR, Sr.getStateCallbacks = fr.getStateCallbacks, Sr.registerSerializer = pr.registerSerializer
```

#### 43. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L644` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L644) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L644)

```diff
-   10462: () => {
+   10245: () => {
```

#### 44. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L647)

```diff
-   10574: (RR, JR) => {
+   10363: (rr, Sr) => {
```

#### 45. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L658-L660` → after: `L658-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L658-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L658-L660) · [Before (L658-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L658-L660)

```diff
-   10541: (RR, JR, GR) => {
-     var yR = GR(10496);
-     JR.zD = class {
+   10327: (rr, Sr, Qr) => {
+     var Zr = Qr(10287);
+     Sr.kR = class {
```

#### 46. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L662` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L662) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L662)

```diff
-         this.VK.decode(RR, JR)
+         this.Ix.decode(rr, Sr)
```

#### 47. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L668` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L668) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L668)

```diff
-         return this.VK.decode(RR, JR)
+         return this.Ix.decode(rr, Sr)
```

#### 48. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L671` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L671) · [Before (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L671)

```diff
-         this.VK.root.clearRefs()
+         this.Ix.root.clearRefs()
```

#### 49. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L674` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L674) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L674)

```diff
-         this.state ? (yR.Reflection.decode(RR, JR), this.VK = new yR.Decoder(this.state)) : (this.VK = yR.Reflection.decode(RR, JR), this.state = this.VK.state)
+         this.state ? (Zr.Reflection.decode(rr, Sr), this.Ix = new Zr.Decoder(this.state)) : (this.Ix = Zr.Reflection.decode(rr, Sr), this.state = this.Ix.state)
```

#### 50. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L678` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L678) · [Before (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L678)

```diff
-         return yR.getDecoderStateCallbacks(RR.jU.VK)
+         return Zr.getDecoderStateCallbacks(rr.TY.Ix)
```

#### 51. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L684` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L684) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L684)

```diff
-   10524: (RR, JR) => {
+   10312: (rr, Sr) => {
```

#### 52. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L694-L696` → after: `L694-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L694-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L694-L696) · [Before (L694-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L694-L696)

```diff
-   10489: (RR, JR, GR) => {
-     var yR = GR(10474),
-       tR = GR(10496);
+   10281: (rr, Sr, Qr) => {
+     var Zr = Qr(10256),
+       Wr = Qr(10287);
```

#### 53. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L816-L817` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L816-L817) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L816-L817)

```diff
-   10504: (RR, JR, GR) => {
-     var yR = GR(10512);
+   10296: (rr, Sr, Qr) => {
+     var Zr = Qr(10298);
```

#### 54. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L848` → after: `L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L848) · [Before (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L848)

```diff
-   10512: RR => {
+   10298: rr => {
```

#### 55. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L853` → after: `L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L853) · [Before (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L853)

```diff
-   10554: (RR, JR, GR) => {
+   10347: (rr, Sr, Qr) => {
```

#### 56. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L874` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L874) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L874)

```diff
-             }(fR.status >= 400 ? uR : tR)(fR)
+             }(Er.status >= 400 ? ar : Wr)(Er)
```

#### 57. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L895` → after: `L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L895) · [Before (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L895)

```diff
-   10543: (RR, JR, GR) => {
+   10336: (rr, Sr, Qr) => {
```

#### 58. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L956` → after: `L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L956) · [Before (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L956)

```diff
-         RR.buffer || RR.constructor !== ArrayBuffer || (RR = "undefined" !== typeof Buffer ? Buffer.from(RR) : new Uint8Array(RR)), "object" === typeof JR ? (uR = JR.end || RR.length, ZR = JR.start || 0) : (ZR = 0, uR = JR > -1 ? JR : RR.length), eR = 0, nR = 0, fR = null, rR = q … [truncated]
+         rr.buffer || rr.constructor !== ArrayBuffer || (rr = "undefined" !== typeof Buffer ? Buffer.from(rr) : new Uint8Array(rr)), "object" === typeof Sr ? (ar = Sr.end || rr.length, jr = Sr.start || 0) : (jr = 0, ar = Sr > -1 ? Sr : rr.length), Ur = 0, zr = 0, Er = null, Nr = I … [truncated]
```

#### 59. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1020` → after: `L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L1020) · [Before (L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L1020)

```diff
-               RR = JSON.stringify(JR, ((RR, JR) => "bigint" === typeof JR ? `${JR}n` : JR)).slice(0, 100)
+               rr = JSON.stringify(Sr, ((rr, Sr) => "bigint" === typeof Sr ? `${Sr}n` : Sr)).slice(0, 100)
```

#### 60. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1406` → after: `L1406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L1406) · [Before (L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L1406)

```diff
-       return yR.string = null != KR ? KR : oR(RR)
+       return Zr.string = null != xr ? xr : Cr(rr)
```

#### 61. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1638` → after: `L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L1638) · [Before (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L1638)

```diff
-             JR < 16 ? BJ[vJ++] = 144 | JR : JR < 65536 ? (BJ[vJ++] = 220, BJ[vJ++] = JR >> 8, BJ[vJ++] = 255 & JR) : (BJ[vJ++] = 221, pJ.setUint32(vJ, JR), vJ += 4);
+             Sr < 16 ? TS[XS++] = 144 | Sr : Sr < 65536 ? (TS[XS++] = 220, TS[XS++] = Sr >> 8, TS[XS++] = 255 & Sr) : (TS[XS++] = 221, OS.setUint32(XS, Sr), XS += 4);
```

#### 62. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1652` → after: `L1652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L1652) · [Before (L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L1652)

```diff
-                 return OJ[GR ? 0 : 1] += RR, BJ[vJ++] = 193, void WR(GR ? -tR : tR)
+                 return PS[Qr ? 0 : 1] += rr, TS[XS++] = 193, void nr(Qr ? -Wr : Wr)
```

#### 63. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1658` → after: `L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L1658) · [Before (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L1658)

```diff
-                 for (JR = 0; JR < tR; JR++) uR = RR.charCodeAt(JR), uR < 128 ? BJ[qR++] = uR : uR < 2048 ? (BJ[qR++] = uR >> 6 | 192, BJ[qR++] = 63 & uR | 128) : 55296 === (64512 & uR) && 56320 === (64512 & (ZR = RR.charCodeAt(JR + 1))) ? (uR = 65536 + ((1023 & uR) << 10) + (1023 … [truncated]
+                 for (Sr = 0; Sr < Wr; Sr++) ar = rr.charCodeAt(Sr), ar < 128 ? TS[Ir++] = ar : ar < 2048 ? (TS[Ir++] = ar >> 6 | 192, TS[Ir++] = 63 & ar | 128) : 55296 === (64512 & ar) && 56320 === (64512 & (jr = rr.charCodeAt(Sr + 1))) ? (ar = 65536 + ((1023 & ar) << 10) + (1023 … [truncated]
```

#### 64. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1661` → after: `L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L1661) · [Before (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L1661)

```diff
-               GR < 32 ? BJ[vJ++] = 160 | GR : GR < 256 ? (yR < 2 && BJ.copyWithin(vJ + 2, vJ + 1, vJ + 1 + GR), BJ[vJ++] = 217, BJ[vJ++] = GR) : GR < 65536 ? (yR < 3 && BJ.copyWithin(vJ + 3, vJ + 2, vJ + 2 + GR), BJ[vJ++] = 218, BJ[vJ++] = GR >> 8, BJ[vJ++] = 255 & GR) : (yR < 5  … [truncated]
+               Qr < 32 ? TS[XS++] = 160 | Qr : Qr < 256 ? (Zr < 2 && TS.copyWithin(XS + 2, XS + 1, XS + 1 + Qr), TS[XS++] = 217, TS[XS++] = Qr) : Qr < 65536 ? (Zr < 3 && TS.copyWithin(XS + 3, XS + 2, XS + 2 + Qr), TS[XS++] = 218, TS[XS++] = Qr >> 8, TS[XS++] = 255 & Qr) : (Zr < 5  … [truncated]
```

#### 65. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1663-L1664` → after: `L1663-L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1663-L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L1663-L1664) · [Before (L1663-L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L1663-L1664)

```diff
-               if (RR >>> 0 === RR) RR < 32 || RR < 128 && !1 === this.useRecords || RR < 64 && !this.randomAccessStructure ? BJ[vJ++] = RR : RR < 256 ? (BJ[vJ++] = 204, BJ[vJ++] = RR) : RR < 65536 ? (BJ[vJ++] = 205, BJ[vJ++] = RR >> 8, BJ[vJ++] = 255 & RR) : (BJ[vJ++] = 206, pJ.s … [truncated]
-               else if ((RR | 0) === RR) RR >= -32 ? BJ[vJ++] = 256 + RR : RR >= -128 ? (BJ[vJ++] = 208, BJ[vJ++] = RR + 256) : RR >= -32768 ? (BJ[vJ++] = 209, pJ.setInt16(vJ, RR), vJ += 2) : (BJ[vJ++] = 210, pJ.setInt32(vJ, RR), vJ += 4);
+               if (rr >>> 0 === rr) rr < 32 || rr < 128 && !1 === this.useRecords || rr < 64 && !this.randomAccessStructure ? TS[XS++] = rr : rr < 256 ? (TS[XS++] = 204, TS[XS++] = rr) : rr < 65536 ? (TS[XS++] = 205, TS[XS++] = rr >> 8, TS[XS++] = 255 & rr) : (TS[XS++] = 206, OS.s … [truncated]
+               else if ((rr | 0) === rr) rr >= -32 ? TS[XS++] = 256 + rr : rr >= -128 ? (TS[XS++] = 208, TS[XS++] = rr + 256) : rr >= -32768 ? (TS[XS++] = 209, OS.setInt16(XS, rr), XS += 2) : (TS[XS++] = 210, OS.setInt32(XS, rr), XS += 4);
```

#### 66. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L1694)

```diff
-                     (GR = RR.size) < 16 ? BJ[vJ++] = 128 | GR : GR < 65536 ? (BJ[vJ++] = 222, BJ[vJ++] = GR >> 8, BJ[vJ++] = 255 & GR) : (BJ[vJ++] = 223, pJ.setUint32(vJ, GR), vJ += 4);
+                     (Qr = rr.size) < 16 ? TS[XS++] = 128 | Qr : Qr < 65536 ? (TS[XS++] = 222, TS[XS++] = Qr >> 8, TS[XS++] = 255 & Qr) : (TS[XS++] = 223, OS.setUint32(XS, Qr), XS += 4);
```

#### 67. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1768` → after: `L1768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L1768) · [Before (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L1768)

```diff
-             if (yR < 16 ? BJ[vJ++] = 128 | yR : yR < 65536 ? (BJ[vJ++] = 222, BJ[vJ++] = yR >> 8, BJ[vJ++] = 255 & yR) : (BJ[vJ++] = 223, pJ.setUint32(vJ, yR), vJ += 4), this.coercibleKeyAsNumber)
+             if (Zr < 16 ? TS[XS++] = 128 | Zr : Zr < 65536 ? (TS[XS++] = 222, TS[XS++] = Zr >> 8, TS[XS++] = 255 & Zr) : (TS[XS++] = 223, OS.setUint32(XS, Zr), XS += 4), this.coercibleKeyAsNumber)
```

#### 68. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1772` → after: `L1772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L1772) · [Before (L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L1772)

```diff
-                 WR(isNaN(yR) ? GR : yR), WR(RR[GR])
+                 nr(isNaN(Zr) ? Qr : Zr), nr(rr[Qr])
```

#### 69. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1784` → after: `L1784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L1784) · [Before (L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L1784)

```diff
-           CR = !1 === this.useRecords ? AR : RR.progressiveRecords && !KR ? RR => {
+           Kr = !1 === this.useRecords ? er : rr.progressiveRecords && !xr ? rr => {
```

#### 70. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1804` → after: `L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L1804) · [Before (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L1804)

```diff
-               GR ? BJ[ZR + JR] = GR : pR(uR, Object.keys(RR), ZR, 0)
+               Qr ? TS[jr + Sr] = Qr : Or(ar, Object.keys(rr), jr, 0)
```

#### 71. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L1811` → after: `L1811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L1811) · [Before (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L1811)

```diff
-             uR ? uR >= 96 && KR ? (BJ[vJ++] = 96 + (31 & (uR -= 96)), BJ[vJ++] = uR >> 5) : BJ[vJ++] = uR : lR(GR, GR.__keys__ || Object.keys(RR), tR);
+             ar ? ar >= 96 && xr ? (TS[XS++] = 96 + (31 & (ar -= 96)), TS[XS++] = ar >> 5) : TS[XS++] = ar : vr(Qr, Qr.__keys__ || Object.keys(rr), Wr);
```

#### 72. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2114` → after: `L2114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2114) · [Before (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2114)

```diff
-   10496: (RR, JR, GR) => {
+   10287: (rr, Sr, Qr) => {
```

#### 73. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2161` → after: `L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2161) · [Before (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2161)

```diff
-       pe: () => ay,
+       nU: () => tZ,
```

#### 74. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2243` → after: `L2243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2243) · [Before (L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2243)

```diff
-       for (var yR = 0, tR = 0, uR = JR.length; tR < uR; tR++)(yR = JR.charCodeAt(tR)) < 128 ? RR[GR.offset++] = yR : yR < 2048 ? (RR[GR.offset] = 192 | yR >> 6, RR[GR.offset + 1] = 128 | 63 & yR, GR.offset += 2) : yR < 55296 || yR >= 57344 ? (RR[GR.offset] = 224 | yR >> 12, RR[GR … [truncated]
+       for (var Zr = 0, Wr = 0, ar = Sr.length; Wr < ar; Wr++)(Zr = Sr.charCodeAt(Wr)) < 128 ? rr[Qr.offset++] = Zr : Zr < 2048 ? (rr[Qr.offset] = 192 | Zr >> 6, rr[Qr.offset + 1] = 128 | 63 & Zr, Qr.offset += 2) : Zr < 55296 || Zr >= 57344 ? (rr[Qr.offset] = 224 | Zr >> 12, rr[Qr … [truncated]
```

#### 75. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2418` → after: `L2418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2418) · [Before (L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2418)

```diff
-           return GR < 192 ? yR = 31 & GR : 217 === GR ? yR = VJ(RR, JR) : 218 === GR ? yR = wJ(RR, JR) : 219 === GR && (yR = eJ(RR, JR)), iJ(RR, JR, yR)
+           return Qr < 192 ? Zr = 31 & Qr : 217 === Qr ? Zr = pS(rr, Sr) : 218 === Qr ? Zr = mS(rr, Sr) : 219 === Qr && (Zr = US(rr, Sr)), fS(rr, Sr, Zr)
```

#### 76. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2422` → after: `L2422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2422) · [Before (L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2422)

```diff
-           return GR < 128 ? GR : 202 === GR ? aJ(RR, JR) : 203 === GR ? LJ(RR, JR) : 204 === GR ? VJ(RR, JR) : 205 === GR ? wJ(RR, JR) : 206 === GR ? eJ(RR, JR) : 207 === GR ? UJ(RR, JR) : 208 === GR ? fJ(RR, JR) : 209 === GR ? KJ(RR, JR) : 210 === GR ? rJ(RR, JR) : 211 === GR ?  … [truncated]
+           return Qr < 128 ? Qr : 202 === Qr ? tS(rr, Sr) : 203 === Qr ? hS(rr, Sr) : 204 === Qr ? pS(rr, Sr) : 205 === Qr ? mS(rr, Sr) : 206 === Qr ? US(rr, Sr) : 207 === Qr ? YS(rr, Sr) : 208 === Qr ? ES(rr, Sr) : 209 === Qr ? xS(rr, Sr) : 210 === Qr ? NS(rr, Sr) : 211 === Qr ?  … [truncated]
```

#### 77. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2512` → after: `L2512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2512) · [Before (L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2512)

```diff
-       if ("number" !== typeof JR || "number" !== typeof GR || !(GR > JR) || !Number.isFinite(JR) || !Number.isFinite(GR)) throw new Error(`t.quantized(): require finite min < max (got min=${JR}, max=${GR}).`);
+       if ("number" !== typeof Sr || "number" !== typeof Qr || !(Qr > Sr) || !Number.isFinite(Sr) || !Number.isFinite(Qr)) throw new Error(`t.quantized(): require finite min < max (got min=${Sr}, max=${Qr}).`);
```

#### 78. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2514` → after: `L2514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2514) · [Before (L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2514)

```diff
-       if (8 !== yR && 16 !== yR && 32 !== yR) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${yR}).`);
+       if (8 !== Zr && 16 !== Zr && 32 !== Zr) throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${Zr}).`);
```

#### 79. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2516` → after: `L2516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2516) · [Before (L2516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2516)

```diff
-       if ("clamp" !== tR && "wrap" !== tR) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(tR)}).`);
+       if ("clamp" !== Wr && "wrap" !== Wr) throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(Wr)}).`);
```

#### 80. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2526` → after: `L2526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2526) · [Before (L2526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2526)

```diff
-         span: uR ? ZR : JR === -GR ? ZR - 2 : ZR - 1
+         span: ar ? jr : Sr === -Qr ? jr - 2 : jr - 1
```

#### 81. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2630` → after: `L2630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2630) · [Before (L2630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2630)

```diff
-       if (tR) throw new Error(`${JR?`${JR}: `:""}@colyseus/schema: nested collections are not supported ("${yR}" of "${tR}"). Collections can only hold primitive types or Schema classes, wrap the inner ${tR} in a Schema class.`);
+       if (Wr) throw new Error(`${Sr?`${Sr}: `:""}@colyseus/schema: nested collections are not supported ("${Zr}" of "${Wr}"). Collections can only hold primitive types or Schema classes, wrap the inner ${Wr} in a Schema class.`);
```

#### 82. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2650` → after: `L2650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2650) · [Before (L2650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2650)

```diff
-       if (oJ(RR)) return "string" === typeof RR.quantized.wire ? RR : {
+       if (CS(rr)) return "string" === typeof rr.quantized.wire ? rr : {
```

#### 83. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2669` → after: `L2669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2669) · [Before (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2669)

```diff
-           if (JR >= 63) throw new Error(`Can't define field '${GR}'.\nSchema instances may only have up to 63 fields.`);
+           if (Sr >= 63) throw new Error(`Can't define field '${Qr}'.\nSchema instances may only have up to 63 fields.`);
```

#### 84. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2728` → after: `L2728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2728) · [Before (L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2728)

```diff
-           if ("string" !== typeof RR[GR].type) throw new Error(`@unreliable cannot be applied to ref-type field "${JR}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
+           if ("string" !== typeof rr[Qr].type) throw new Error(`@unreliable cannot be applied to ref-type field "${Sr}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);
```

#### 85. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2738` → after: `L2738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2738) · [Before (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2738)

```diff
-           if (RR[GR].fullStateOnly) throw new Error(`field "${JR}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
+           if (rr[Qr].fullStateOnly) throw new Error(`field "${Sr}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
```

#### 86. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2751` → after: `L2751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2751) · [Before (L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2751)

```diff
-           if (RR[GR].patchOnly) throw new Error(`field "${JR}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
+           if (rr[Qr].patchOnly) throw new Error(`field "${Sr}" cannot be both patchOnly and fullStateOnly \u2014 those are the only two delivery channels, so the field would never reach a client.`);
```

#### 87. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2774` → after: `L2774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2774) · [Before (L2774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2774)

```diff
-           const uR = SJ(tR, `${RR.name}.${yR}`),
+           const ar = iS(Wr, `${rr.name}.${Zr}`),
```

#### 88. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2801` → after: `L2801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2801) · [Before (L2801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2801)

```diff
-             if (void 0 !== uR[qR]) throw new Error(`@colyseus/schema: Duplicate '${qR}' definition on '${GR.name||"(anonymous)"}'.`);
+             if (void 0 !== ar[Ir]) throw new Error(`@colyseus/schema: Duplicate '${Ir}' definition on '${Qr.name||"(anonymous)"}'.`);
```

#### 89. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2877` → after: `L2877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2877) · [Before (L2877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2877)

```diff
-         0 === GR ? this.ops[RR] = JR : (GR === tR.DELETE || GR === tR.ADD && JR === tR.DELETE_AND_ADD) && (this.ops[RR] = tR.DELETE_AND_ADD), RR < 32 ? this.dirtyLow |= 1 << RR : this.dirtyHigh |= 1 << RR - 32
+         0 === Qr ? this.ops[rr] = Sr : (Qr === Wr.DELETE || Qr === Wr.ADD && Sr === Wr.DELETE_AND_ADD) && (this.ops[rr] = Wr.DELETE_AND_ADD), rr < 32 ? this.dirtyLow |= 1 << rr : this.dirtyHigh |= 1 << rr - 32
```

#### 90. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2880` → after: `L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2880) · [Before (L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2880)

```diff
-         this.ops[RR] = JR, RR < 32 ? this.dirtyLow |= 1 << RR : this.dirtyHigh |= 1 << RR - 32
+         this.ops[rr] = Sr, rr < 32 ? this.dirtyLow |= 1 << rr : this.dirtyHigh |= 1 << rr - 32
```

#### 91. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2924-L2925` → after: `L2924-L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2924-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2924-L2925) · [Before (L2924-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2924-L2925)

```diff
-         const GR = this.Ja.get(RR);
-         void 0 === GR ? this.Ja.set(RR, JR) : (GR === tR.DELETE || GR === tR.ADD && JR === tR.DELETE_AND_ADD) && this.Ja.set(RR, tR.DELETE_AND_ADD)
+         const Qr = this.cU.get(rr);
+         void 0 === Qr ? this.cU.set(rr, Sr) : (Qr === Wr.DELETE || Qr === Wr.ADD && Sr === Wr.DELETE_AND_ADD) && this.cU.set(rr, Wr.DELETE_AND_ADD)
```

#### 92. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2928` → after: `L2928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2928) · [Before (L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2928)

```diff
-         this.Ja.set(RR, JR)
+         this.cU.set(rr, Sr)
```

#### 93. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2931` → after: `L2931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2931) · [Before (L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2931)

```diff
-         this.Ja.set(RR, JR)
+         this.cU.set(rr, Sr)
```

#### 94. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2934` → after: `L2934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2934) · [Before (L2934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2934)

```diff
-         this.pureOps.push([this.Ja.size, RR])
+         this.pureOps.push([this.cU.size, rr])
```

#### 95. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2937` → after: `L2937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2937) · [Before (L2937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2937)

```diff
-         return this.Ja.get(RR)
+         return this.cU.get(rr)
```

#### 96. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2940` → after: `L2940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2940) · [Before (L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2940)

```diff
-         this.Ja.has(RR) && this.Ja.set(RR, JR)
+         this.cU.has(rr) && this.cU.set(rr, Sr)
```

#### 97. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2950` → after: `L2950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2950) · [Before (L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2950)

```diff
-           for (const [uR, ZR] of this.Ja) {
+           for (const [ar, jr] of this.cU) {
```

#### 98. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2962` → after: `L2962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2962) · [Before (L2962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2962)

```diff
-           for (const [yR, tR] of this.Ja) JR(RR, yR, tR)
+           for (const [Zr, Wr] of this.cU) Sr(rr, Zr, Wr)
```

#### 99. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2965` → after: `L2965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2965) · [Before (L2965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2965)

```diff
-         return this.Ja.size + this.pureOps.length
+         return this.cU.size + this.pureOps.length
```

#### 100. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2968` → after: `L2968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2968) · [Before (L2968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2968)

```diff
-         return this.Ja.size > 0 || this.pureOps.length > 0
+         return this.cU.size > 0 || this.pureOps.length > 0
```

#### 101. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2971` → after: `L2971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2971) · [Before (L2971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2971)

```diff
-         this.Ja.clear(), this.pureOps.length = 0
+         this.cU.clear(), this.pureOps.length = 0
```

#### 102. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L2975-L2976` → after: `L2975-L2976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R2975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L2975-L2976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L2975-L2976) · [Before (L2975-L2976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L2975-L2976)

```diff
-         for (const [GR, yR] of this.Ja) JR.set(GR + RR, yR);
-         this.Ja = JR
+         for (const [Qr, Zr] of this.cU) Sr.set(Qr + rr, Zr);
+         this.cU = Sr
```

#### 103. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L3096` → after: `L3096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R3096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L3096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L3096) · [Before (L3096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L3096)

```diff
-         const ZR = (uR?.[xR]?.includes(GR) ? BG : 0) | (uR?.[DR]?.includes(GR) ? lG : 0),
+         const jr = (ar?.[Hr]?.includes(Qr) ? TQ : 0) | (ar?.[Rr]?.includes(Qr) ? vQ : 0),
```

#### 104. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L3330` → after: `L3330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R3330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L3330) · [Before (L3330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L3330)

```diff
-         this.flags = RR ? this.flags | BG : this.flags & ~BG
+         this.flags = rr ? this.flags | TQ : this.flags & ~TQ
```

#### 105. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L3336` → after: `L3336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R3336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L3336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L3336) · [Before (L3336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L3336)

```diff
-         this.flags = RR ? this.flags | lG : this.flags & ~lG
+         this.flags = rr ? this.flags | vQ : this.flags & ~vQ
```

#### 106. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L3348` → after: `L3348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R3348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L3348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L3348) · [Before (L3348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L3348)

```diff
-         this.flags = RR ? this.flags | pG : -129 & this.flags
+         this.flags = rr ? this.flags | OQ : -129 & this.flags
```

#### 107. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L3391` → after: `L3391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R3391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L3391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L3391) · [Before (L3391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L3391)

```diff
-         RR < 4 ? this.opsLow = this.opsLow & tR | JR << yR : this.opsHigh = this.opsHigh & tR | JR << yR
+         rr < 4 ? this.opsLow = this.opsLow & Wr | Sr << Zr : this.opsHigh = this.opsHigh & Wr | Sr << Zr
```

#### 108. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L3394` → after: `L3394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R3394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L3394) · [Before (L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L3394)

```diff
-         RR < 32 ? this.dirtyLow |= 1 << RR : this.dirtyHigh |= 1 << RR - 32
+         rr < 32 ? this.dirtyLow |= 1 << rr : this.dirtyHigh |= 1 << rr - 32
```

#### 109. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L3404` → after: `L3404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R3404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L3404) · [Before (L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L3404)

```diff
-           uR = void 0 === yR ? JR : yR === tR.DELETE || yR === tR.ADD && JR === tR.DELETE_AND_ADD ? tR.DELETE_AND_ADD : yR, GR.set(RR, uR)
+           ar = void 0 === Zr ? Sr : Zr === Wr.DELETE || Zr === Wr.ADD && Sr === Wr.DELETE_AND_ADD ? Wr.DELETE_AND_ADD : Zr, Qr.set(rr, ar)
```

#### 110. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L3602` → after: `L3602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R3602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L3602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L3602) · [Before (L3602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L3602)

```diff
-             throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${RR}'`)
+             throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${rr}'`)
```

#### 111. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L3972` → after: `L3972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R3972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L3972) · [Before (L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L3972)

```diff
-         (qR & tR.ADD) === tR.ADD ? VR === SG ? (KR = WJ.string(JR, GR), ZR.setIndex(iR, KR)) : KR = iR : KR = ZR.getIndex(iR);
+         (Ir & Wr.ADD) === Wr.ADD ? pr === iQ ? (xr = nS.string(Sr, Qr), jr.setIndex(fr, xr)) : xr = fr : xr = jr.getIndex(fr);
```

#### 112. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L3976` → after: `L3976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R3976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L3976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L3976) · [Before (L3976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L3976)

```diff
-           case SG:
+           case iQ:
```

#### 113. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L3979` → after: `L3979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R3979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L3979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L3979) · [Before (L3979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L3979)

```diff
-           case jG:
+           case wQ:
```

#### 114. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L3982-L3984` → after: `L3982-L3984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R3982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L3982-L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L3982-L3984) · [Before (L3982-L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L3982-L3984)

```diff
-           case dG:
-           case EG:
-           case YG:
+           case cQ:
+           case FQ:
+           case oQ:
```

#### 115. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L3988` → after: `L3988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R3988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L3988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L3988) · [Before (L3988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L3988)

```diff
-             console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${ZR.constructor?.name} \u2014 item at index ${iR} was not stored.`)
+             console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${jr.constructor?.name} \u2014 item at index ${fr} was not stored.`)
```

#### 116. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L4039` → after: `L4039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R4039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L4039) · [Before (L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L4039)

```diff
-       if (!(RR instanceof JR)) throw new sG(`a '${JR.name}' was expected, but '${RR&&RR.constructor.name}' was provided in ${GR.constructor.name}#${yR}`)
+       if (!(rr instanceof Sr)) throw new sQ(`a '${Sr.name}' was expected, but '${rr&&rr.constructor.name}' was provided in ${Qr.constructor.name}#${Zr}`)
```

#### 117. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L4543` → after: `L4543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R4543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L4543) · [Before (L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L4543)

```diff
-         if (void 0 === JR || null === JR) throw new Error(`MapSchema#set('${RR}', ${JR}): trying to set ${JR} value on '${RR}'.`);
+         if (void 0 === Sr || null === Sr) throw new Error(`MapSchema#set('${rr}', ${Sr}): trying to set ${Sr} value on '${rr}'.`);
```

#### 118. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5175` → after: `L5175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5175) · [Before (L5175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5175)

```diff
-         throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof JR?`use the type name instead: t.array("${JR}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
+         throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type \u2014 ${"string"===typeof Sr?`use the type name instead: t.array("${Sr}")`:'collections accept a Schema class or a primitive type name ("string", "number", \u2026)'}.`)
```

#### 119. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5260-L5261` → after: `L5260-L5261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5260-L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5260-L5261) · [Before (L5260-L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5260-L5261)

```diff
-         if (!RR) throw new Error(`${tR.name}: @type() reference provided for "${yR}" is undefined. Make sure you don't have any circular dependencies.`);
-         RR = SJ(RR, `${tR.name}.${yR}`), mJ.register(tR);
+         if (!rr) throw new Error(`${Wr.name}: @type() reference provided for "${Zr}" is undefined. Make sure you don't have any circular dependencies.`);
+         rr = iS(rr, `${Wr.name}.${Zr}`), AS.register(Wr);
```

#### 120. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5268-L5269` → after: `L5268-L5269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5268-L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5268-L5269) · [Before (L5268-L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5268-L5269)

```diff
-             const RR = new Error(`@colyseus/schema: Duplicate '${yR}' definition on '${tR.name}'.\nCheck @type() annotation`);
-             throw new Error(`${RR.message} ${RR.stack.split("\n")[4].trim()}`)
+             const rr = new Error(`@colyseus/schema: Duplicate '${Zr}' definition on '${Wr.name}'.\nCheck @type() annotation`);
+             throw new Error(`${rr.message} ${rr.stack.split("\n")[4].trim()}`)
```

#### 121. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5350-L5351` → after: `L5350-L5351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5350-L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5350-L5351) · [Before (L5350-L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5350-L5351)

```diff
-                 const JR = GR && GR.constructor ? ` (${GR.constructor.name})` : "";
-                 throw new sG(`a '${yR}' was expected, but '${JSON.stringify(GR)}'${JR} was provided in ${this.constructor.name}#${RR}`)
+                 const Sr = Qr && Qr.constructor ? ` (${Qr.constructor.name})` : "";
+                 throw new sQ(`a '${Zr}' was expected, but '${JSON.stringify(Qr)}'${Sr} was provided in ${this.constructor.name}#${rr}`)
```

#### 122. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5363` → after: `L5363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5363) · [Before (L5363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5363)

```diff
-             if ("number" !== typeof yR) throw new sG(`a 'number' was expected, but '${JSON.stringify(yR)}' was provided in ${this.constructor.name}#${RR}`);
+             if ("number" !== typeof Zr) throw new sQ(`a 'number' was expected, but '${JSON.stringify(Zr)}' was provided in ${this.constructor.name}#${rr}`);
```

#### 123. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5402` → after: `L5402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5402) · [Before (L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5402)

```diff
-             throw new Error(`${GR} is deprecated.`)
+             throw new Error(`${Qr} is deprecated.`)
```

#### 124. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5420` → after: `L5420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5420) · [Before (L5420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5420)

```diff
-       if (null == RR || "object" !== typeof RR) throw new Error(`schema(): first argument must be a fields object (got ${typeof RR}).`);
+       if (null == rr || "object" !== typeof rr) throw new Error(`schema(): first argument must be a fields object (got ${typeof rr}).`);
```

#### 125. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5427` → after: `L5427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5427) · [Before (L5427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5427)

```diff
-             "function" === typeof JR ? ZR[RR] = JR : JR && "function" === typeof JR.clone ? ZR[RR] = () => JR.clone() : uR[RR] = JR
+             "function" === typeof Sr ? jr[rr] = Sr : Sr && "function" === typeof Sr.clone ? jr[rr] = () => Sr.clone() : ar[rr] = Sr
```

#### 126. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5452` → after: `L5452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5452) · [Before (L5452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5452)

```diff
-           uR = `schema(${JR?`'${JR}'`:""}): field '${CR}'`;
+           ar = `schema(${Sr?`'${Sr}'`:""}): field '${Kr}'`;
```

#### 127. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5456` → after: `L5456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5456) · [Before (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5456)

```diff
-             if (void 0 !== RR.view || RR.unreliable || RR.patchOnly || RR.fullStateOnly || RR.stream) throw new Error(`${uR} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
+             if (void 0 !== rr.view || rr.unreliable || rr.patchOnly || rr.fullStateOnly || rr.stream) throw new Error(`${ar} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);
```

#### 128. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5460` → after: `L5460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5460) · [Before (L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5460)

```diff
-           if (RR.patchOnly && RR.fullStateOnly) throw new Error(`${uR} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
+           if (rr.patchOnly && rr.fullStateOnly) throw new Error(`${ar} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client \u2014 use .noSync() if that is intended.`);
```

#### 129. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5462` → after: `L5462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5462) · [Before (L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5462)

```diff
-           if ("function" === typeof JR && !by.is(JR)) throw new Error(`${uR} is a synced ref to non-Schema class '${JR.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
+           if ("function" === typeof Sr && !lZ.is(Sr)) throw new Error(`${ar} is a synced ref to non-Schema class '${Sr.name||"(anonymous)"}' \u2014 use .noSync(), or Metadata.setFields().`);
```

#### 130. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5465` → after: `L5465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5465) · [Before (L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5465)

```diff
-           if ("function" !== typeof GR) throw new Error(`${uR} must be a t.* builder, Schema subclass, or method (got ${typeof GR}).`);
+           if ("function" !== typeof Qr) throw new Error(`${ar} must be a t.* builder, Schema subclass, or method (got ${typeof Qr}).`);
```

#### 131. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5520` → after: `L5520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5520) · [Before (L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5520)

```diff
-         void 0 !== RR ? (GR.refs.push(`refId#${RR.ref[qR]}`), RR.forEach(((RR, JR) => {
+         void 0 !== rr ? (Qr.refs.push(`refId#${rr.ref[Ir]}`), rr.forEach(((rr, Sr) => {
```

#### 132. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5547` → after: `L5547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5547) · [Before (L5547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5547)

```diff
-         if (void 0 !== JR.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${RR.constructor.name}) with multiple parents.`);
+         if (void 0 !== Sr.extraParents) throw new Error(`@colyseus/schema: cannot reset a shared instance (${rr.constructor.name}) with multiple parents.`);
```

#### 133. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5573` → after: `L5573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5573) · [Before (L5573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5573)

```diff
-         return void 0 === GR ? void 0 === tR : void 0 === tR || (tR === ey ? GR.isChangeTreeVisible(RR[aR]) : GR.hasTagOnTree(RR[aR], tR))
+         return void 0 === Qr ? void 0 === Wr : void 0 === Wr || (Wr === UZ ? Qr.isChangeTreeVisible(rr[tr]) : Qr.hasTagOnTree(rr[tr], Wr))
```

#### 134. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5678` → after: `L5678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5678) · [Before (L5678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5678)

```diff
-         const uR = JR ? ` - ${JSON.stringify(RR.toJSON())}` : "",
+         const ar = Sr ? ` - ${JSON.stringify(rr.toJSON())}` : "",
```

#### 135. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5682-L5683` → after: `L5682-L5683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5682-L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5682-L5683) · [Before (L5682-L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5682-L5683)

```diff
-           VR = fR > 1 ? ` [\xd7${fR}]` : "";
-         let KR = `${function(RR){return new Array(RR).fill(0).map(((JR,GR)=>GR===RR-1?"\u2514\u2500 ":"   ")).join("")}(GR)}${tR}${RR.constructor.name} (refId: ${iR})${VR}${uR}\n`;
+           pr = Er > 1 ? ` [\xd7${Er}]` : "";
+         let xr = `${function(rr){return new Array(rr).fill(0).map(((Sr,Qr)=>Qr===rr-1?"\u2514\u2500 ":"   ")).join("")}(Qr)}${Wr}${rr.constructor.name} (refId: ${fr})${pr}${ar}\n`;
```

#### 136. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5687` → after: `L5687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5687) · [Before (L5687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5687)

```diff
-           const qR = void 0 !== RR.forEach && void 0 !== ZR ? `["${ZR}"]: ` : "";
+           const Ir = void 0 !== rr.forEach && void 0 !== jr ? `["${jr}"]: ` : "";
```

#### 137. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5714` → after: `L5714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5714) · [Before (L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5714)

```diff
-         let uR = `${RR.constructor.name} (${RR[qR]}) -> .${yR}:\n`;
+         let ar = `${rr.constructor.name} (${rr[Ir]}) -> .${Zr}:\n`;
```

#### 138. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5716` → after: `L5716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5716) · [Before (L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5716)

```diff
-           uR += `- [${RR}]: ADD (${JSON.stringify(GR.getValue(Number(RR),!0))})\n`
+           ar += `- [${rr}]: ADD (${JSON.stringify(Qr.getValue(Number(rr),!0))})\n`
```

#### 139. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5718` → after: `L5718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5718) · [Before (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5718)

```diff
-           RR < 0 || !JR || (uR += `- [${RR}]: ${tR[JR]} (${JSON.stringify(GR.getValue(Number(RR),!1))})\n`)
+           rr < 0 || !Sr || (ar += `- [${rr}]: ${Wr[Sr]} (${JSON.stringify(Qr.getValue(Number(rr),!1))})\n`)
```

#### 140. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5892` → after: `L5892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R5892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L5892) · [Before (L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L5892)

```diff
-       return "string" === JR ? JSON.stringify(RR.length > 30 ? `${RR.slice(0,30)}\u2026` : RR) : "object" !== JR && "function" !== JR ? `${JR} ${String(RR)}` : Array.isArray(RR) ? `Array(${RR.length})` : RR.constructor?.name ?? "Object"
+       return "string" === Sr ? JSON.stringify(rr.length > 30 ? `${rr.slice(0,30)}\u2026` : rr) : "object" !== Sr && "function" !== Sr ? `${Sr} ${String(rr)}` : Array.isArray(rr) ? `Array(${rr.length})` : rr.constructor?.name ?? "Object"
```

#### 141. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6006` → after: `L6006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6006) · [Before (L6006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6006)

```diff
-         if (!uR) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${Hy(RR)}`), !1;
+         if (!ar) return console.warn(`StateView#add(): expected a Schema instance or collection, received ${gZ(rr)}`), !1;
```

#### 142. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6008` → after: `L6008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6008) · [Before (L6008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6008)

```diff
-         if (!ZR && 0 !== RR[qR]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${uR.ref.constructor.name}" instance to the state before calling view.add()`);
+         if (!jr && 0 !== rr[Ir]) throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${ar.ref.constructor.name}" instance to the state before calling view.add()`);
```

#### 143. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6063` → after: `L6063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6063) · [Before (L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6063)

```diff
-           void 0 !== ZR && ZR !== ey && 0 !== (ZR & JR) && this.addTag(GR, JR), uR.set(GR.isArray ? RR : yR, tR.ADD)
+           void 0 !== jr && jr !== UZ && 0 !== (jr & Sr) && this.addTag(Qr, Sr), ar.set(Qr.isArray ? rr : Zr, Wr.ADD)
```

#### 144. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6084` → after: `L6084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6084) · [Before (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6084)

```diff
-         if (!yR) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${Hy(RR)}`), this;
+         if (!Zr) return console.warn(`StateView#remove(): expected a Schema instance or collection, received ${gZ(rr)}`), this;
```

#### 145. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6125` → after: `L6125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6125) · [Before (L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6125)

```diff
-             const JR = uR.isArray ? yR : yR.parentIndex,
+             const Sr = ar.isArray ? Zr : Zr.parentIndex,
```

#### 146. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6146` → after: `L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6146) · [Before (L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6146)

```diff
-         if (!GR) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${Hy(RR)}`), this;
+         if (!Qr) return console.warn(`StateView#subscribe(): expected a Schema collection, received ${gZ(rr)}`), this;
```

#### 147. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6154` → after: `L6154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6154) · [Before (L6154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6154)

```diff
-             if (void 0 === yR) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${JR} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
+             if (void 0 === Zr) console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 this ${Sr} is not attached to a state yet, so it cannot be identified as a stream. Subscribe after assigning it to the state.`);
```

#### 148. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6157-L6158` → after: `L6157-L6158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6157-L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6157-L6158) · [Before (L6157-L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6157-L6158)

```diff
-                 tR = RR ? `${yR.constructor.name}#${RR}` : JR;
-               console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${tR} is a ${JR}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
+                 Wr = rr ? `${Zr.constructor.name}#${rr}` : Sr;
+               console.warn(`StateView#subscribe(): \`priority\` ignored \u2014 ${Wr} is a ${Sr}, not a streaming collection. Declare the field with .stream() (e.g. t.map(X).stream()) or use t.stream(X) to enable priority batching.`)
```

#### 149. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6174` → after: `L6174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6174) · [Before (L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6174)

```diff
-         if (!JR) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${Hy(RR)}`), this;
+         if (!Sr) return console.warn(`StateView#unsubscribe(): expected a Schema collection, received ${gZ(rr)}`), this;
```

#### 150. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6194` → after: `L6194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6194) · [Before (L6194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6194)

```diff
-             void 0 === yR && (yR = new Map, this.changes.set(GR, yR)), yR.set(RR ? JR : uR, tR.DELETE), this.unmarkVisible(JR)
+             void 0 === Zr && (Zr = new Map, this.changes.set(Qr, Zr)), Zr.set(rr ? Sr : ar, Wr.DELETE), this.unmarkVisible(Sr)
```

#### 151. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6573` → after: `L6573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6573) · [Before (L6573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6573)

```diff
-         void 0 !== uR ? tR !== uR && (RR[yR.offset++] = 213, JJ.number(RR, uR, yR)) : console.warn(`@colyseus/schema WARNING: Class "${GR.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
+         void 0 !== ar ? Wr !== ar && (rr[Zr.offset++] = 213, SS.number(rr, ar, Zr)) : console.warn(`@colyseus/schema WARNING: Class "${Qr.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`)
```

#### 152. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6622` → after: `L6622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6622) · [Before (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6622)

```diff
-             throw new dy(`trying to remove refId '${RR}' with 0 refCount (${JR.constructor.name}: ${JSON.stringify(JR)})`)
+             throw new cZ(`trying to remove refId '${rr}' with 0 refCount (${Sr.constructor.name}: ${JSON.stringify(Sr)})`)
```

#### 153. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6656` → after: `L6656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6656) · [Before (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6656)

```diff
-           throw new Error(`Can't addCallback on '${RR}' (refId is undefined)`)
+           throw new Error(`Can't addCallback on '${rr}' (refId is undefined)`)
```

#### 154. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6684` → after: `L6684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6684) · [Before (L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6684)

```diff
-         const tR = void 0 !== this.jD ? [] : null,
+         const Wr = void 0 !== this.oR ? [] : null,
```

#### 155. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6693` → after: `L6693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6693) · [Before (L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6693)

```diff
-             tR ? (GR = tR, qR = GR.constructor[VR], this.currentRefId = yR) : (console.error(`"refId" not found: ${yR}`, {
+             Wr ? (Qr = Wr, Ir = Qr.constructor[pr], this.currentRefId = Zr) : (console.error(`"refId" not found: ${Zr}`, {
```

#### 156. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6702` → after: `L6702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6702) · [Before (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6702)

```diff
-         }(this, tR), null !== tR && this.jD?.(tR), uR.garbageCollectDeletedRefs(), tR
+         }(this, Wr), null !== Wr && this.oR?.(Wr), ar.garbageCollectDeletedRefs(), Wr
```

#### 157. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6844` → after: `L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6844) · [Before (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6844)

```diff
-             mC: function(JR) {
+             zB: function(Sr) {
```

#### 158. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6854` → after: `L6854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6854) · [Before (L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6854)

```diff
-             eD: function(RR) {
+             bq: function(rr) {
```

#### 159. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6874` → after: `L6874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6874) · [Before (L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6874)

```diff
-               if (!RR[JR]) throw new Error(`Can't access '${JR}' through callback proxy. access the instance directly.`);
+               if (!rr[Sr]) throw new Error(`Can't access '${Sr}' through callback proxy. access the instance directly.`);
```

#### 160. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6893` → after: `L6893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6893) · [Before (L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6893)

```diff
-       return RR.jD = function(RR) {
+       return rr.oR = function(rr) {
```

#### 161. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L6940` → after: `L6940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L6940) · [Before (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L6940)

```diff
-       RR.jD = JR
+       rr.oR = Sr
```

#### 162. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L7053` → after: `L7053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L7053) · [Before (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L7053)

```diff
-         this.VK = RR, this.VK.jD = this.jD.bind(this)
+         this.Ix = rr, this.Ix.oR = this.oR.bind(this)
```

#### 163. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L7056` → after: `L7056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L7056) · [Before (L7056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L7056)

```diff
-         return this.VK.root.callbacks
+         return this.Ix.root.callbacks
```

#### 164. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L7059` → after: `L7059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L7059) · [Before (L7059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L7059)

```diff
-         return this.VK.state
+         return this.Ix.state
```

#### 165. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L7062` → after: `L7062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L7062) · [Before (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L7062)

```diff
-         return this.VK.root.addCallback(RR, JR, GR)
+         return this.Ix.root.addCallback(rr, Sr, Qr)
```

#### 166. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L7198` → after: `L7198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L7198) · [Before (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L7198)

```diff
-         if ("VK" in RR.jU) return new Jt(RR.jU.VK);
+         if ("Ix" in rr.TY) return new SW(rr.TY.Ix);
```

#### 167. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L7203` → after: `L7203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L7203) · [Before (L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L7203)

```diff
-         if ("VK" in RR.jU) return hy(RR.jU.VK);
+         if ("Ix" in rr.TY) return uZ(rr.TY.Ix);
```

#### 168. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L7242` → after: `L7242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L7242) · [Before (L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L7242)

```diff
-   10474: (RR, JR, GR) => {
+   10256: (rr, Sr, Qr) => {
```

#### 169. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L7317` → after: `L7317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L7317) · [Before (L7317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L7317)

```diff
-         ZR = uR < 3 ? JR : null === yR ? yR = Object.getOwnPropertyDescriptor(JR, GR) : yR;
+         jr = ar < 3 ? Sr : null === Zr ? Zr = Object.getOwnPropertyDescriptor(Sr, Qr) : Zr;
```

#### 170. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L7335` → after: `L7335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L7335) · [Before (L7335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L7335)

```diff
-       for (var qR, iR = yR.kind, fR = "getter" === iR ? "get" : "setter" === iR ? "set" : "value", VR = !JR && RR ? yR.static ? RR : RR.prototype : null, KR = JR || (VR ? Object.getOwnPropertyDescriptor(VR, yR.name) : {}), wR = !1, rR = GR.length - 1; rR >= 0; rR--) {
+       for (var Ir, fr = Zr.kind, Er = "getter" === fr ? "get" : "setter" === fr ? "set" : "value", pr = !Sr && rr ? Zr.static ? rr : rr.prototype : null, xr = Sr || (pr ? Object.getOwnPropertyDescriptor(pr, Zr.name) : {}), mr = !1, Nr = Qr.length - 1; Nr >= 0; Nr--) {
```

#### 171. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L7358` → after: `L7358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L7358) · [Before (L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L7358)

```diff
-       return yR ? GR : void 0
+       return Zr ? Qr : void 0
```

#### 172. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L7362` → after: `L7362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L7362) · [Before (L7362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L7362)

```diff
-       return "symbol" === typeof RR ? RR : "".concat(RR)
+       return "symbol" === typeof rr ? rr : "".concat(rr)
```

#### 173. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L7396` → after: `L7396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L7396) · [Before (L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L7396)

```diff
-           RR.done ? tR(RR.value) : (JR = RR.value, JR instanceof GR ? JR : new GR((function(RR) {
+           rr.done ? Wr(rr.value) : (Sr = rr.value, Sr instanceof Qr ? Sr : new Qr((function(rr) {
```

#### 174. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L7668` → after: `L7668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L7668) · [Before (L7668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L7668)

```diff
-       return RR && RR.__esModule ? RR : {
+       return rr && rr.__esModule ? rr : {
```

#### 175. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L7675-L7676` → after: `L7675-L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7675-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L7675-L7676) · [Before (L7675-L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L7675-L7676)

```diff
-       if ("function" === typeof JR ? RR !== JR || !yR : !JR.has(RR)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
-       return "m" === GR ? yR : "a" === GR ? yR.call(RR) : yR ? yR.value : JR.get(RR)
+       if ("function" === typeof Sr ? rr !== Sr || !Zr : !Sr.has(rr)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
+       return "m" === Qr ? Zr : "a" === Qr ? Zr.call(rr) : Zr ? Zr.value : Sr.get(rr)
```

#### 176. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L7682-L7683` → after: `L7682-L7683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7682-L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L7682-L7683) · [Before (L7682-L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L7682-L7683)

```diff
-       if ("function" === typeof JR ? RR !== JR || !tR : !JR.has(RR)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
-       return "a" === yR ? tR.call(RR, GR) : tR ? tR.value = GR : JR.set(RR, GR), GR
+       if ("function" === typeof Sr ? rr !== Sr || !Wr : !Sr.has(rr)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
+       return "a" === Zr ? Wr.call(rr, Qr) : Wr ? Wr.value = Qr : Sr.set(rr, Qr), Qr
```

#### 177. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L7688` → after: `L7688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R7688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/213.js#L7688) · [Before (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/213.js#L7688)

```diff
-       return "function" === typeof RR ? JR === RR : RR.has(JR)
+       return "function" === typeof rr ? Sr === rr : rr.has(Sr)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/214.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/214.js` (193 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352)

#### 1. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L4)

```diff
-   40409: (RR, JR, GR) => {
+   40710: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L6)

```diff
-       d: () => yR
+       b: () => Zr
```

#### 3. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L35)

```diff
-   39889: (RR, JR, GR) => {
+   40221: (rr, Sr, Qr) => {
```

#### 4. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L37-L38` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L37-L38) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L37-L38)

```diff
-       d: () => uR,
-       e: () => tR
+       e: () => ar,
+       h: () => Wr
```

#### 5. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L50)

```diff
-   37433: (RR, JR, GR) => {
+   37815: (rr, Sr, Qr) => {
```

#### 6. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L53-L56` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L54-L56) · [Before (L53-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L53-L56)

```diff
-       g: () => qR,
-       i: () => fR,
-       l: () => iR,
-       o: () => WR
+       f: () => Er,
+       h: () => fr,
+       k: () => nr
```

#### 7. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L58-L60` → after: `L58-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L58-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L58-L60) · [Before (L58-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L58-L60)

```diff
-     var yR = GR(688),
-       tR = GR(1963),
-       uR = GR(5685);
+     var Zr = Qr(692),
+       Wr = Qr(1904),
+       ar = Qr(5617);
```

#### 8. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L63)

```diff
-         this.width = RR, this.hK = JR, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(RR * JR)
+         this.width = rr, this.sx = Sr, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(rr * Sr)
```

#### 9. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L70)

```diff
-         this.next = (this.next + 1) % this.hK, this.size = Math.min(this.size + 1, this.hK)
+         this.next = (this.next + 1) % this.sx, this.size = Math.min(this.size + 1, this.sx)
```

#### 10. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L76` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L76) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L76)

```diff
-           yR = (this.next - this.size + this.hK) % this.hK;
+           Zr = (this.next - this.size + this.sx) % this.sx;
```

#### 11. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L78)

```diff
-           const uR = (yR + tR) % this.hK * this.width;
+           const ar = (Zr + Wr) % this.sx * this.width;
```

#### 12. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L90-L93` → after: `L90-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L90-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L90-L93) · [Before (L90-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L90-L93)

```diff
-         tK: 1,
-         xH: 2,
-         IH: 3,
-         lL: 4
+         sp: 1,
+         tC: 2,
+         YC: 3,
+         Xh: 4
```

#### 13. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L127)

```diff
-         this.steps = new ZR(qR, KR), this.events = new ZR(rR.length, KR), this.frames = new ZR(eR.length, KR), this.cameraSets = new ZR(uR.e, 256), this.changes = new ZR(LR.length, 256)
+         this.steps = new jr(Ir, xr), this.events = new jr(Nr.length, xr), this.frames = new jr(Ur.length, xr), this.cameraSets = new jr(ar.i, 256), this.changes = new jr(hr.length, 256)
```

#### 14. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L148)

```diff
-         RR[JR + 6] !== iR.lL && (null === (GR = this.rings) || void 0 === GR || GR.steps.push(RR, JR))
+         rr[Sr + 6] !== fr.Xh && (null === (Qr = this.rings) || void 0 === Qr || Qr.steps.push(rr, Sr))
```

#### 15. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L179)

```diff
-         return [`look records (${this.startedClient}): ${wR.join(",")}`, ...null !== (RR = null === GR || void 0 === GR ? void 0 : GR.steps.lines()) && void 0 !== RR ? RR : [], `mousemove events: ${rR.join(",")}`, ...null !== (JR = null === GR || void 0 === GR ? void 0 : GR.event … [truncated]
+         return [`look records (${this.startedClient}): ${mr.join(",")}`, ...null !== (rr = null === Qr || void 0 === Qr ? void 0 : Qr.steps.lines()) && void 0 !== rr ? rr : [], `mousemove events: ${Nr.join(",")}`, ...null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.event … [truncated]
```

#### 16. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L188)

```diff
-             const uR = null !== (GR = null === RR || void 0 === RR ? void 0 : RR.rows(yR, tR)) && void 0 !== GR ? GR : [];
+             const ar = null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.rows(Zr, Wr)) && void 0 !== Qr ? Qr : [];
```

#### 17. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L196-L197` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L196-L197) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L196-L197)

```diff
-           version: yR.d,
-           client: null !== (GR = this.startedClient) && void 0 !== GR ? GR : "not started",
+           version: Zr.e,
+           client: null !== (Qr = this.startedClient) && void 0 !== Qr ? Qr : "not started",
```

#### 18. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L208` → after: `L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L208) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L208)

```diff
-           un: null !== document.pointerLockElement,
+           Ez: null !== document.pointerLockElement,
```

#### 19. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L223)

```diff
-         (0, tR.e)(new Blob([JR], {
+         (0, Wr.c)(new Blob([Sr], {
```

#### 20. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L229)

```diff
-   40957: (RR, JR, GR) => {
+   41299: (rr, Sr, Qr) => {
```

#### 21. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L231)

```diff
-       e: () => tR
+       d: () => Wr
```

#### 22. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L233` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L233) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L233)

```diff
-     var yR = GR(39375);
+     var Zr = Qr(39715);
```

#### 23. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L237-L238` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L237-L238) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L237-L238)

```diff
-       const KR = (0, yR.d)(RR, JR, GR[0], GR[1], GR[2]),
-         wR = KR ? null !== (tR = KR.textCell) && void 0 !== tR ? tR : KR.rect.anchor : GR,
+       const xr = (0, Zr.b)(rr, Sr, Qr[0], Qr[1], Qr[2]),
+         mr = xr ? null !== (Wr = xr.textCell) && void 0 !== Wr ? Wr : xr.rect.anchor : Qr,
```

#### 24. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L246-L247` → after: `L246-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L246-L247) · [Before (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L246-L247)

```diff
-         text: null !== (uR = null === rR || void 0 === rR || null === (ZR = rR.persisted) || void 0 === ZR || null === (qR = ZR.shared) || void 0 === qR ? void 0 : qR.text) && void 0 !== uR ? uR : "",
-         textSize: null !== (iR = null === rR || void 0 === rR || null === (fR = rR.persisted) || void 0 === fR || null === (VR = fR.shared) || void 0 === VR ? void 0 : VR.textSize) && void 0 !== iR ? iR : null
+         text: null !== (ar = null === Nr || void 0 === Nr || null === (jr = Nr.persisted) || void 0 === jr || null === (Ir = jr.shared) || void 0 === Ir ? void 0 : Ir.text) && void 0 !== ar ? ar : "",
+         textSize: null !== (fr = null === Nr || void 0 === Nr || null === (Er = Nr.persisted) || void 0 === Er || null === (pr = Er.shared) || void 0 === pr ? void 0 : pr.textSize) && void 0 !== fr ? fr : null
```

#### 25. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L251` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L251) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L251)

```diff
-   39689: (RR, JR, GR) => {
+   40031: (rr, Sr, Qr) => {
```

#### 26. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L264-L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L265) · [Before (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L264-L265)

```diff
-       f: () => uR,
-       h: () => yR
+       f: () => Zr
```

#### 27. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L270` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L270) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L270)

```diff
-   40448: (RR, JR, GR) => {
+   40739: (rr, Sr, Qr) => {
```

#### 28. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L272-L273` → after: `L272-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L272-L273) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L272-L273)

```diff
-       d: () => tR,
-       e: () => uR
+       c: () => Wr,
+       f: () => ar
```

#### 29. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L275)

```diff
-     var yR = GR(377);
+     var Zr = Qr(379);
```

#### 30. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L282)

```diff
-         const JR = (0, yR.Sb)(RR);
+         const Sr = (0, Zr.Mb)(rr);
```

#### 31. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L287` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L287) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L287)

```diff
-           if ("function" !== typeof GR) throw new Error(`${JR}'s client code has no default-exported factory`);
+           if ("function" !== typeof Qr) throw new Error(`${Sr}'s client code has no default-exported factory`);
```

#### 32. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L294)

```diff
-         const JR = (0, yR.Sb)(RR);
+         const Sr = (0, Zr.Mb)(rr);
```

#### 33. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L297` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L297) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L297)

```diff
-         if (!GR) throw new Error(`${JR}'s client code started before it loaded`);
+         if (!Qr) throw new Error(`${Sr}'s client code started before it loaded`);
```

#### 34. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L302)

```diff
-   40441: (RR, JR, GR) => {
+   40736: (rr, Sr, Qr) => {
```

#### 35. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L310)

```diff
-       b: () => yR
+       c: () => Zr
```

#### 36. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L313` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L313) · [Before (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L313)

```diff
-   40959: (RR, JR, GR) => {
+   41303: (rr, Sr, Qr) => {
```

#### 37. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L315)

```diff
-       c: () => ZR
+       d: () => jr
```

#### 38. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L317-L319` → after: `L317-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L317-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L317-L319) · [Before (L317-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L317-L319)

```diff
-     var yR = GR(5953),
-       tR = GR(35162),
-       uR = GR(4555);
+     var Zr = Qr(5878),
+       Wr = Qr(35472),
+       ar = Qr(4489);
```

#### 39. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L322-L323` → after: `L322-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L322-L323) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L322-L323)

```diff
-       if (RR === yR.b) return 0;
-       const JR = (0, uR.b)(RR);
+       if (rr === Zr.e) return 0;
+       const Sr = (0, ar.e)(rr);
```

#### 40. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L325)

```diff
-       const GR = (0, uR.b)(RR.split("|")[0]);
+       const Qr = (0, ar.e)(rr.split("|")[0]);
```

#### 41. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L327` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L327) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L327)

```diff
-       throw new Error(`Invalid block name. You sent ${RR}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
+       throw new Error(`Invalid block name. You sent ${rr}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
```

#### 42. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L330)

```diff
-   40491: (RR, JR, GR) => {
+   40789: (rr, Sr, Qr) => {
```

#### 43. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L334)

```diff
-     var yR = GR(25);
+     var Zr = Qr(26);
```

#### 44. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L346` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L346) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L346)

```diff
-         this.hidesHud !== RR && (this.hidesHud = RR, yR.d.set({
+         this.hidesHud !== rr && (this.hidesHud = rr, Zr.c.set({
```

#### 45. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L352)

```diff
-   40482: (RR, JR, GR) => {
+   40781: (rr, Sr, Qr) => {
```

#### 46. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L354-L355` → after: `L354-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L354-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L354-L355) · [Before (L354-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L354-L355)

```diff
-       c: () => uR,
-       d: () => tR
+       b: () => ar,
+       c: () => Wr
```

#### 47. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L357)

```diff
-     var yR = GR(37845);
+     var Zr = Qr(38207);
```

#### 48. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L361` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L361) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L361)

```diff
-       const GR = "default" === RR.mode ? "movement" : null !== (JR = RR.playerFacing) && void 0 !== JR ? JR : "movement";
+       const Qr = "default" === rr.mode ? "movement" : null !== (Sr = rr.playerFacing) && void 0 !== Sr ? Sr : "movement";
```

#### 49. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L372` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L372) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L372)

```diff
-       return ZR.bD = 0, ZR.PD = 0, ZR.pointedAt = void 0, void 0 !== tR ? uR ? (ZR.pointedAt = tR, RR) : (0, yR.v)(tR.heading) : uR ? (ZR.bD = JR, ZR.PD = GR, RR) : (0, yR.v)(RR + JR)
+       return jr.xR = 0, jr.yR = 0, jr.pointedAt = void 0, void 0 !== Wr ? ar ? (jr.pointedAt = Wr, rr) : (0, Zr.q)(Wr.heading) : ar ? (jr.xR = Sr, jr.yR = Qr, rr) : (0, Zr.q)(rr + Sr)
```

#### 50. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L375)

```diff
-   40466: (RR, JR, GR) => {
+   40761: (rr, Sr, Qr) => {
```

#### 51. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L377)

```diff
-       d: () => jR
+       b: () => wr
```

#### 52. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L379-L381` → after: `L379-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L379-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L379-L381) · [Before (L379-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L379-L381)

```diff
-     var yR = GR(40470),
-       tR = GR(37845),
-       uR = GR(38106);
+     var Zr = Qr(40770),
+       Wr = Qr(38207),
+       ar = Qr(38457);
```

#### 53. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L386` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L386) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L386)

```diff
-       return Math.abs(JR - tR) < 1e-9 ? JR : tR
+       return Math.abs(Sr - Wr) < 1e-9 ? Sr : Wr
```

#### 54. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L390` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L390) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L390)

```diff
-         this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.mD = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
+         this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.gR = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
```

#### 55. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L399` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L399) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L399)

```diff
-         !this.isGoingOut() && this.sinceTurnMs < yR.k.minFadeTurnMs ? this.waiting = {
+         !this.isGoingOut() && this.sinceTurnMs < Zr.j.minFadeTurnMs ? this.waiting = {
```

#### 56. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L405` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L405) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L405)

```diff
-         this.isGoingOut() ? this.sinceTurnMs < yR.k.minFadeTurnMs ? this.waiting = {
+         this.isGoingOut() ? this.sinceTurnMs < Zr.j.minFadeTurnMs ? this.waiting = {
```

#### 57. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L413` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L413) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L413)

```diff
-         const GR = yR.k.minFadeTurnMs - this.sinceTurnMs;
+         const Qr = Zr.j.minFadeTurnMs - this.sinceTurnMs;
```

#### 58. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L422)

```diff
-         ("in" === this.phase || null === this.phase && this.clearMs < yR.k.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = RR.colour), this.outMs = RR.outMs, this.holdMs = RR.holdMs, this.inMs = RR.inMs
+         ("in" === this.phase || null === this.phase && this.clearMs < Zr.j.minFadeTurnMs) && (this.sinceTurnMs = 0), this.phase = "out", 0 === this.screen.alpha && (this.screen.colour = rr.colour), this.outMs = rr.outMs, this.holdMs = rr.holdMs, this.inMs = rr.inMs
```

#### 59. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L435` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L435) · [Before (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L435)

```diff
-           this.phase = "hold", this.mD = 0, tR = Math.max(0, RR - yR), GR = !0
+           this.phase = "hold", this.gR = 0, Wr = Math.max(0, rr - Zr), Qr = !0
```

#### 60. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L439-L440` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L439-L440) · [Before (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L439-L440)

```diff
-           this.mD += tR;
-           const RR = Math.min(this.mD - this.holdMs, this.sinceTurnMs - yR.k.minFadeTurnMs);
+           this.gR += Wr;
+           const rr = Math.min(this.gR - this.holdMs, this.sinceTurnMs - Zr.j.minFadeTurnMs);
```

#### 61. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L447-L450` → after: `L447-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L447-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L447-L450) · [Before (L447-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L447-L450)

```diff
-     var iR = GR(40462),
-       fR = GR(40476),
-       VR = GR(2102),
-       KR = GR(37771);
+     var fr = Qr(40748),
+       Er = Qr(40775),
+       pr = Qr(2049),
+       xr = Qr(38133);
```

#### 62. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L458)

```diff
-       return null !== (GR = RR.fov) && void 0 !== GR ? GR : JR.getDefaultFov()
+       return null !== (Qr = rr.fov) && void 0 !== Qr ? Qr : Sr.getDefaultFov()
```

#### 63. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L473` → after: `L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L473) · [Before (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L473)

```diff
-         this.settings = RR, this.NK = JR, this.targets = GR, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.BL = [0, 0, 0, 0, 0, 0], this.started = !1, this.a … [truncated]
+         this.settings = rr, this.qx = Sr, this.targets = Qr, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Lh = [0, 0, 0, 0, 0, 0], this.started = !1, this.a … [truncated]
```

#### 64. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L477-L480` → after: `L477-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L477-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L477-L480) · [Before (L477-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L477-L480)

```diff
-           heading: (0, tR.v)((0, VR.g)(null !== (uR = RR.viewHeading) && void 0 !== uR ? uR : 0)),
-           pitch: (0, tR.h)((0, VR.g)(null !== (ZR = RR.viewElevation) && void 0 !== ZR ? ZR : 45))
-         }, this.closestDistance = null !== (qR = RR.closestDistance) && void 0 !== qR ? qR : Math.min(6, null !== (iR = RR.furthestDistance) && void 0 !== iR ? iR : 1 / 0), this.furthestDistance = null !== (fR = RR.furthestDistance) && void 0 !== fR ? fR : Math.max(64, this.close … [truncated]
-         const KR = (0, tR.e)(this.base.heading, this.base.pitch, this.forward),
+           heading: (0, Wr.q)((0, pr.k)(null !== (ar = rr.viewHeading) && void 0 !== ar ? ar : 0)),
+           pitch: (0, Wr.i)((0, pr.k)(null !== (jr = rr.viewElevation) && void 0 !== jr ? jr : 45))
+         }, this.closestDistance = null !== (Ir = rr.closestDistance) && void 0 !== Ir ? Ir : Math.min(6, null !== (fr = rr.furthestDistance) && void 0 !== fr ? fr : 1 / 0), this.furthestDistance = null !== (Er = rr.furthestDistance) && void 0 !== Er ? Er : Math.max(64, this.close … [truncated]
+         const xr = (0, Wr.f)(this.base.heading, this.base.pitch, this.forward),
```

#### 65. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L487-L490` → after: `L487-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L487-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L487-L490) · [Before (L487-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L487-L490)

```diff
-         this.placeGoal(null !== (yR = this.settings.fov) && void 0 !== yR ? yR : this.NK.getBaseFov()), this.goal[4] = (0, tR.y)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
-         const ZR = null !== (uR = this.settings.smoothMs) && void 0 !== uR ? uR : 400;
-         !this.started || ZR < 1 ? (wR(this.goal, this.smoothed), this.BL.fill(0), this.started = !0) : eR(this.smoothed, this.BL, this.goal, ZR, RR), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, tR.h)(this.smoothed[5]), JR.apply(this.angles, GR);
-         const qR = (0, tR.e)(GR.heading, GR.pitch, this.forward);
+         this.placeGoal(null !== (Zr = this.settings.fov) && void 0 !== Zr ? Zr : this.qx.getBaseFov()), this.goal[4] = (0, Wr.v)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
+         const jr = null !== (ar = this.settings.smoothMs) && void 0 !== ar ? ar : 400;
+         !this.started || jr < 1 ? (mr(this.goal, this.smoothed), this.Lh.fill(0), this.started = !0) : Ur(this.smoothed, this.Lh, this.goal, jr, rr), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, Wr.i)(this.smoothed[5]), Sr.apply(this.angles, Qr);
+         const Ir = (0, Wr.f)(Qr.heading, Qr.pitch, this.forward);
```

#### 66. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L492)

```diff
-         GR.fov = rR(this.settings, this.NK)
+         Qr.fov = Nr(this.settings, this.qx)
```

#### 67. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L495` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L495) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L495)

```diff
-         RR instanceof aR && (wR(RR.goal, this.goal), wR(RR.smoothed, this.smoothed), wR(RR.BL, this.BL), this.framedTargets = RR.framedTargets, this.started = RR.started)
+         rr instanceof tr && (mr(rr.goal, this.goal), mr(rr.smoothed, this.smoothed), mr(rr.Lh, this.Lh), this.framedTargets = rr.framedTargets, this.started = rr.started)
```

#### 68. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L498` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L498) · [Before (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L498)

```diff
-         this.BL.fill(0), this.started = !1
+         this.Lh.fill(0), this.started = !1
```

#### 69. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L509` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L509) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L509)

```diff
-           const RR = this.targets.aimPoint(this.NK.localPlayerId);
+           const rr = this.targets.aimPoint(this.qx.localPlayerId);
```

#### 70. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L525-L528` → after: `L525-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L525-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L525-L528) · [Before (L525-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L525-L528)

```diff
-         const uR = Math.tan((0, VR.g)(RR) / 2),
-           ZR = Math.atan(uR * (!0 === this.settings.letterbox ? KR.f : 1)),
-           qR = Math.atan(uR * this.NK.getAspectRatio()),
-           fR = (tR + (null !== (JR = this.settings.padding) && void 0 !== JR ? JR : 2)) / Math.sin(Math.min(ZR, qR));
+         const ar = Math.tan((0, pr.k)(rr) / 2),
+           jr = Math.atan(ar * (!0 === this.settings.letterbox ? xr.d : 1)),
+           Ir = Math.atan(ar * this.qx.getAspectRatio()),
+           Er = (Wr + (null !== (Sr = this.settings.padding) && void 0 !== Sr ? Sr : 2)) / Math.sin(Math.min(jr, Ir));
```

#### 71. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L540` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L540) · [Before (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L540)

```diff
-         this.limits = RR, this.yawOffset = 0, this.pitchOffset = 0, this.GL = 0, this.pointedAt = null
+         this.limits = rr, this.yawOffset = 0, this.pitchOffset = 0, this.zh = 0, this.pointedAt = null
```

#### 72. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L543` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L543) · [Before (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L543)

```diff
-         this.limits && (this.yawOffset = RR.yawOffset, this.pitchOffset = RR.pitchOffset, this.GL = RR.GL)
+         this.limits && (this.yawOffset = rr.yawOffset, this.pitchOffset = rr.pitchOffset, this.zh = rr.zh)
```

#### 73. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L548-L550` → after: `L548-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L548-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L548-L550) · [Before (L548-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L548-L550)

```diff
-         const yR = Number.isFinite(JR.bD) ? JR.bD : 0,
-           tR = Number.isFinite(JR.PD) ? JR.PD : 0;
-         if (JR.pointedAt) this.GL = 0, this.pointedAt = {
+         const Zr = Number.isFinite(Sr.xR) ? Sr.xR : 0,
+           Wr = Number.isFinite(Sr.yR) ? Sr.yR : 0;
+         if (Sr.pointedAt) this.zh = 0, this.pointedAt = {
```

#### 74. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L554` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L554) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L554)

```diff
-         else if (0 !== yR || 0 !== tR) this.GL = 0, this.yawOffset += yR, this.pitchOffset += tR;
+         else if (0 !== Zr || 0 !== Wr) this.zh = 0, this.yawOffset += Zr, this.pitchOffset += Wr;
```

#### 75. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L556-L557` → after: `L556-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L556-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L556-L557) · [Before (L556-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L556-L557)

```diff
-           const JR = Math.max(0, this.GL + RR - 200) - Math.max(0, this.GL - 200);
-           if (this.GL += RR, void 0 !== GR.returnMs && JR > 0) {
+           const Sr = Math.max(0, this.zh + rr - 200) - Math.max(0, this.zh - 200);
+           if (this.zh += rr, void 0 !== Qr.returnMs && Sr > 0) {
```

#### 76. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L565)

```diff
-         if (RR.maxYaw >= 180) this.yawOffset = (0, tR.x)(0, this.yawOffset);
+         if (rr.maxYaw >= 180) this.yawOffset = (0, Wr.r)(0, this.yawOffset);
```

#### 77. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L567` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L567) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L567)

```diff
-           const JR = (0, VR.g)(RR.maxYaw);
+           const Sr = (0, pr.k)(rr.maxYaw);
```

#### 78. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L570` → after: `L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L570) · [Before (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L570)

```diff
-         const JR = (0, VR.g)(RR.maxPitch);
+         const Sr = (0, pr.k)(rr.maxPitch);
```

#### 79. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L574-L576` → after: `L574-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L574-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L574-L576) · [Before (L574-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L574-L576)

```diff
-         this.pointedAt && this.limits && (this.yawOffset = (0, tR.x)(RR.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - RR.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
-         const GR = (0, tR.h)(RR.pitch + this.pitchOffset);
-         this.pitchOffset = GR - RR.pitch, JR.heading = (0, tR.v)(RR.heading + this.yawOffset), JR.pitch = GR
+         this.pointedAt && this.limits && (this.yawOffset = (0, Wr.r)(rr.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - rr.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
+         const Qr = (0, Wr.i)(rr.pitch + this.pitchOffset);
+         this.pitchOffset = Qr - rr.pitch, Sr.heading = (0, Wr.q)(rr.heading + this.yawOffset), Sr.pitch = Qr
```

#### 80. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L579` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L579) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L579)

```diff
-         JR.heading = (0, tR.v)(RR.heading - this.yawOffset), JR.pitch = (0, tR.h)(RR.pitch - this.pitchOffset)
+         Sr.heading = (0, Wr.q)(rr.heading - this.yawOffset), Sr.pitch = (0, Wr.i)(rr.pitch - this.pitchOffset)
```

#### 81. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L607` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L607) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L607)

```diff
-       for (let ZR = 0; ZR < 3; ZR++) uR[ZR] = tR ? RR[ZR] * yR : GR[ZR] - JR[ZR];
+       for (let jr = 0; jr < 3; jr++) ar[jr] = Wr ? rr[jr] * Zr : Qr[jr] - Sr[jr];
```

#### 82. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L630-L633` → after: `L630-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L630-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L630-L633) · [Before (L630-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L630-L633)

```diff
-       const qR = uR ? RR : 2 * JR - GR,
-         iR = ZR ? GR : 2 * JR - RR,
-         fR = uR ? yR : tR,
-         VR = ZR ? tR : yR,
+       const Ir = ar ? rr : 2 * Sr - Qr,
+         fr = jr ? Qr : 2 * Sr - rr,
+         Er = ar ? Zr : Wr,
+         pr = jr ? Wr : Zr,
```

#### 83. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L680` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L680) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L680)

```diff
-         if (ZR > 0 && "aim" !== VR && "aim" !== KR && this.liveTangent(RR, iR)) return GR.heading = (0, tR.v)(iR.heading), void(GR.pitch = iR.pitch);
+         if (jr > 0 && "aim" !== pr && "aim" !== xr && this.liveTangent(rr, fr)) return Qr.heading = (0, Wr.q)(fr.heading), void(Qr.pitch = fr.pitch);
```

#### 84. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L682` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L682) · [Before (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L682)

```diff
-         !qR && ZR > 0 && ("tangent" === VR && this.liveTangent(RR, iR), "tangent" === KR && this.liveTangent(RR, fR)), "none" === VR ? (0, tR.l)(fR, iR) : "none" === KR && (0, tR.l)(iR, fR);
+         !Ir && jr > 0 && ("tangent" === pr && this.liveTangent(rr, fr), "tangent" === xr && this.liveTangent(rr, Er)), "none" === pr ? (0, Wr.j)(Er, fr) : "none" === xr && (0, Wr.j)(fr, Er);
```

#### 85. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L685-L687` → after: `L685-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L685-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L685-L687) · [Before (L685-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L685-L687)

```diff
-           eR = (0, tR.y)(iR.heading, fR.heading),
-           aR = pR(RR, wR ? (0, tR.y)(iR.heading, this.beforeAngles.heading) : 0, iR.heading, eR, rR ? (0, tR.y)(eR, this.afterAngles.heading) : 0, wR, rR);
-         GR.heading = (0, tR.v)(aR), GR.pitch = (0, tR.h)(pR(RR, this.beforeAngles.pitch, iR.pitch, fR.pitch, this.afterAngles.pitch, wR, rR))
+           Ur = (0, Wr.v)(fr.heading, Er.heading),
+           tr = Or(rr, mr ? (0, Wr.v)(fr.heading, this.beforeAngles.heading) : 0, fr.heading, Ur, Nr ? (0, Wr.v)(Ur, this.afterAngles.heading) : 0, mr, Nr);
+         Qr.heading = (0, Wr.q)(tr), Qr.pitch = (0, Wr.i)(Or(rr, this.beforeAngles.pitch, fr.pitch, Er.pitch, this.afterAngles.pitch, mr, Nr))
```

#### 86. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L699` → after: `L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L699) · [Before (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L699)

```diff
-         if (uR.lookDirection) return (0, tR.o)(uR.lookDirection, yR), "aim";
+         if (ar.lookDirection) return (0, Wr.l)(ar.lookDirection, Zr), "aim";
```

#### 87. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L702` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L702) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L702)

```diff
-           if (RR) return (0, tR.t)(JR, RR, yR), "aim"
+           if (rr) return (0, Wr.p)(Sr, rr, Zr), "aim"
```

#### 88. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L705` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L705) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L705)

```diff
-         return ZR ? ((0, tR.l)(ZR, yR), "tangent") : "none"
+         return jr ? ((0, Wr.j)(jr, Zr), "tangent") : "none"
```

#### 89. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L712)

```diff
-         return UR(uR) > 1e-9 ? ((0, tR.o)(uR, JR), !0) : !(CR(GR, yR) < nR) && ((0, tR.o)(MR(GR, yR, RR.u < .5 ? RR.toTangent : RR.fromTangent, uR), JR), !0)
+         return Yr(ar) > 1e-9 ? ((0, Wr.l)(ar, Sr), !0) : !(Kr(Qr, Zr) < zr) && ((0, Wr.l)(Br(Qr, Zr, rr.u < .5 ? rr.toTangent : rr.fromTangent, ar), Sr), !0)
```

#### 90. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L717` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L717) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L717)

```diff
-         if (UR(uR) > 1e-9) return (0, tR.o)(uR, {
+         if (Yr(ar) > 1e-9) return (0, Wr.l)(ar, {
```

#### 91. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L721-L722` → after: `L721-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L721-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L721-L722) · [Before (L721-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L721-L722)

```diff
-         const ZR = null !== (yR = this.restDirectionTo(GR, GR + 1, RR, JR)) && void 0 !== yR ? yR : this.restDirectionTo(GR, GR - 1, RR, JR);
-         return ZR ? (0, tR.o)(ZR, {
+         const jr = null !== (Zr = this.restDirectionTo(Qr, Qr + 1, rr, Sr)) && void 0 !== Zr ? Zr : this.restDirectionTo(Qr, Qr - 1, rr, Sr);
+         return jr ? (0, Wr.l)(jr, {
```

#### 92. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L742)

```diff
-       }(RR.lookDirection, JR.lookDirection) : (yR = RR.lookAt, tR = JR.lookAt, "object" !== typeof yR || "object" !== typeof tR ? yR === tR : CR(yR, tR) < nR);
+       }(rr.lookDirection, Sr.lookDirection) : (Zr = rr.lookAt, Wr = Sr.lookAt, "object" !== typeof Zr || "object" !== typeof Wr ? Zr === Wr : Kr(Zr, Wr) < zr);
```

#### 93. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L769` → after: `L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L769) · [Before (L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L769)

```diff
-             easing: (0, uR.m)(null !== (JR = RR.easing) && void 0 !== JR ? JR : "linear")
+             easing: (0, ar.s)(null !== (Sr = rr.easing) && void 0 !== Sr ? Sr : "linear")
```

#### 94. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L783-L786` → after: `L783-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L783-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L783-L786) · [Before (L783-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L783-L786)

```diff
-             const ZR = null !== RR && void 0 !== RR ? RR : BR(null !== GR && void 0 !== GR ? GR : JR, JR),
-               qR = null !== GR && void 0 !== GR ? GR : BR(null !== RR && void 0 !== RR ? RR : JR, JR),
-               iR = RR ? yR : tR,
-               fR = GR ? tR : yR,
+             const jr = null !== rr && void 0 !== rr ? rr : Tr(null !== Qr && void 0 !== Qr ? Qr : Sr, Sr),
+               Ir = null !== Qr && void 0 !== Qr ? Qr : Tr(null !== rr && void 0 !== rr ? rr : Sr, Sr),
+               fr = rr ? Zr : Wr,
+               Er = Qr ? Wr : Zr,
```

#### 95. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L823` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L823) · [Before (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L823)

```diff
-         return GR.index = yR, GR.toIndex = tR, GR.segmentMs = ZR, GR.u = ZR > 0 ? (0, uR.l)((RR - JR[yR].timeMs) / ZR, JR[yR].easing) : 1, GR.curved = this.smooth && ZR > 0, GR.beforeIndex = this.prevNodes[yR], GR.afterIndex = this.nextNodes[tR], GR.beforeMs = this.prevGaps[yR],  … [truncated]
+         return Qr.index = Zr, Qr.toIndex = Wr, Qr.segmentMs = jr, Qr.u = jr > 0 ? (0, ar.r)((rr - Sr[Zr].timeMs) / jr, Sr[Zr].easing) : 1, Qr.curved = this.smooth && jr > 0, Qr.beforeIndex = this.prevNodes[Zr], Qr.afterIndex = this.nextNodes[Wr], Qr.beforeMs = this.prevGaps[Zr],  … [truncated]
```

#### 96. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L837)

```diff
-         return null !== (GR = this.nodes[RR].keyframe.fov) && void 0 !== GR ? GR : JR
+         return null !== (Qr = this.nodes[rr].keyframe.fov) && void 0 !== Qr ? Qr : Sr
```

#### 97. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L842` → after: `L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L842) · [Before (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L842)

```diff
-         return yR >= 0 && yR <= GR ? yR : this.loopMs <= 0 || GR < 2 ? -1 : yR < 0 ? GR - 1 : 1
+         return Zr >= 0 && Zr <= Qr ? Zr : this.loopMs <= 0 || Qr < 2 ? -1 : Zr < 0 ? Qr - 1 : 1
```

#### 98. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L850` → after: `L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L850) · [Before (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L850)

```diff
-         const yR = 0 === RR ? GR : RR;
+         const Zr = 0 === rr ? Qr : rr;
```

#### 99. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L860` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L860) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L860)

```diff
-         this.NK = RR, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.lastPitches = new Map, this.lastLookHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = JR => RR.getEntityPosition(JR), this.readAimP … [truncated]
+         this.qx = rr, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.lastPitches = new Map, this.lastLookHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = Sr => rr.getEntityPosition(Sr), this.readAimP … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L863` → after: `L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L863) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L863)

```diff
-         return "string" !== typeof RR ? (0, iR.p)(RR, 3) ? RR : null : this.resolve(RR, this.readAimPoint, this.lastAimPoints)
+         return "string" !== typeof rr ? (0, fr.p)(rr, 3) ? rr : null : this.resolve(rr, this.readAimPoint, this.lastAimPoints)
```

#### 101. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L866-L867` → after: `L866-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L866-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L866-L867) · [Before (L866-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L866-L867)

```diff
-         const JR = "string" === typeof RR ? this.NK.getEntityAimPoint(RR) : RR;
-         return JR && (0, iR.p)(JR, 3) ? JR : null
+         const Sr = "string" === typeof rr ? this.qx.getEntityAimPoint(rr) : rr;
+         return Sr && (0, fr.p)(Sr, 3) ? Sr : null
```

#### 102. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L873-L874` → after: `L873-L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L873-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L873-L874) · [Before (L873-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L873-L874)

```diff
-         const JR = xR(this.lastHeadings, RR, this.NK.getEntityHeading(RR));
-         return void 0 !== JR ? JR : RR === this.NK.localPlayerId ? 0 : this.heading(this.NK.localPlayerId)
+         const Sr = Hr(this.lastHeadings, rr, this.qx.getEntityHeading(rr));
+         return void 0 !== Sr ? Sr : rr === this.qx.localPlayerId ? 0 : this.heading(this.qx.localPlayerId)
```

#### 103. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L878` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L878) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L878)

```diff
-         return null !== (JR = xR(this.lastPitches, RR, this.NK.getEntityPitch(RR))) && void 0 !== JR ? JR : 0
+         return null !== (Sr = Hr(this.lastPitches, rr, this.qx.getEntityPitch(rr))) && void 0 !== Sr ? Sr : 0
```

#### 104. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L882` → after: `L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L882) · [Before (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L882)

```diff
-         return null !== (JR = xR(this.lastLookHeadings, RR, this.NK.getEntityLookHeading(RR))) && void 0 !== JR ? JR : this.heading(RR)
+         return null !== (Sr = Hr(this.lastLookHeadings, rr, this.qx.getEntityLookHeading(rr))) && void 0 !== Sr ? Sr : this.heading(rr)
```

#### 105. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L887` → after: `L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L887) · [Before (L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L887)

```diff
-         return yR && (0, iR.p)(yR, 3) ? (tR || (tR = [0, 0, 0], GR.set(RR, tR)), tR[0] = yR[0], tR[1] = yR[1], tR[2] = yR[2], tR) : tR || (RR === this.NK.localPlayerId ? null : this.resolve(this.NK.localPlayerId, JR, GR))
+         return Zr && (0, fr.p)(Zr, 3) ? (Wr || (Wr = [0, 0, 0], Qr.set(rr, Wr)), Wr[0] = Zr[0], Wr[1] = Zr[1], Wr[2] = Zr[2], Wr) : Wr || (rr === this.qx.localPlayerId ? null : this.resolve(this.qx.localPlayerId, Sr, Qr))
```

#### 106. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L899` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L899) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L899)

```diff
-       Number.isFinite(RR.heading) && Number.isFinite(RR.pitch) || (0, tR.l)(JR, RR)
+       Number.isFinite(rr.heading) && Number.isFinite(rr.pitch) || (0, Wr.j)(Sr, rr)
```

#### 107. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L903)

```diff
-       if (JR) return void(0, tR.o)(JR, uR);
+       if (Sr) return void(0, Wr.l)(Sr, ar);
```

#### 108. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L905` → after: `L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L905) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L905)

```diff
-       ZR && (0, tR.t)(RR, ZR, uR)
+       jr && (0, Wr.p)(rr, jr, ar)
```

#### 109. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L909` → after: `L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L909) · [Before (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L909)

```diff
-         this.settings = RR, this.NK = JR, this.targets = GR, this.base = void 0, this.base = DR(yR)
+         this.settings = rr, this.qx = Sr, this.targets = Qr, this.base = void 0, this.base = Rr(Zr)
```

#### 110. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L914` → after: `L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L914) · [Before (L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L914)

```diff
-         (0, iR.i)(tR.position, GR.position), oR(tR.position, tR.lookDirection, null !== (yR = tR.lookAt) && void 0 !== yR ? yR : this.NK.localPlayerId, this.targets, this.base), JR.apply(this.base, GR), GR.fov = rR(tR, this.NK)
+         (0, fr.i)(Wr.position, Qr.position), Cr(Wr.position, Wr.lookDirection, null !== (Zr = Wr.lookAt) && void 0 !== Zr ? Zr : this.qx.localPlayerId, this.targets, this.base), Sr.apply(this.base, Qr), Qr.fov = Nr(Wr, this.qx)
```

#### 111. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L917` → after: `L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L917) · [Before (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L917)

```diff
-         RR instanceof cR && (0, tR.l)(RR.base, this.base)
+         rr instanceof Mr && (0, Wr.j)(rr.base, this.base)
```

#### 112. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L925` → after: `L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L925) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L925)

```diff
-         this.settings = RR, this.NK = JR, this.targets = GR, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.BL = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin =  … [truncated]
+         this.settings = rr, this.qx = Sr, this.targets = Qr, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Lh = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin =  … [truncated]
```

#### 113. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L930` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L930) · [Before (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L930)

```diff
-           qR = null !== (yR = ZR.target) && void 0 !== yR ? yR : this.NK.localPlayerId,
+           Ir = null !== (Zr = jr.target) && void 0 !== Zr ? Zr : this.qx.localPlayerId,
```

#### 114. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L935-L937` → after: `L935-L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L935-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L935-L937) · [Before (L935-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L935-L937)

```diff
-         fR && (KR = this.foundFeet && CR(this.lastFeet, fR) > 32 + .1 * RR, (0, iR.i)(fR, this.lastFeet), this.foundFeet = !0, this.placeGoal(null !== (wR = VR ? this.targets.aimPoint(qR) : null) && void 0 !== wR ? wR : fR, qR));
-         const aR = null !== (uR = ZR.smoothMs) && void 0 !== uR ? uR : 0;
-         !this.started || aR < 1 || KR ? ((0, iR.i)(this.goal, this.smoothed), this.BL.fill(0), this.started = !0) : eR(this.smoothed, this.BL, this.goal, aR, RR), KR && (this.distance = -1), (0, iR.i)(this.smoothed, GR.position);
+         Er && (xr = this.foundFeet && Kr(this.lastFeet, Er) > 32 + .1 * rr, (0, fr.i)(Er, this.lastFeet), this.foundFeet = !0, this.placeGoal(null !== (mr = pr ? this.targets.aimPoint(Ir) : null) && void 0 !== mr ? mr : Er, Ir));
+         const tr = null !== (ar = jr.smoothMs) && void 0 !== ar ? ar : 0;
+         !this.started || tr < 1 || xr ? ((0, fr.i)(this.goal, this.smoothed), this.Lh.fill(0), this.started = !0) : Ur(this.smoothed, this.Lh, this.goal, tr, rr), xr && (this.distance = -1), (0, fr.i)(this.smoothed, Qr.position);
```

#### 115. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L949` → after: `L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L949) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L949)

```diff
-             uR = (0, tR.v)(this.eyeHeading + (0, tR.x)(this.eyeHeading, JR) * yR),
+             ar = (0, Wr.q)(this.eyeHeading + (0, Wr.r)(this.eyeHeading, Sr) * Zr),
```

#### 116. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L951-L952` → after: `L951-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L951-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L951-L952) · [Before (L951-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L951-L952)

```diff
-             iR = qR !== this.NK.localPlayerId && Number.isFinite(uR) && Number.isFinite(ZR) && !KR;
-           this.eyeHeading = iR ? uR : (0, tR.v)(JR), this.eyePitch = iR ? ZR : GR, this.base.heading = this.eyeHeading, this.base.pitch = this.eyePitch
+             fr = Ir !== this.qx.localPlayerId && Number.isFinite(ar) && Number.isFinite(jr) && !xr;
+           this.eyeHeading = fr ? ar : (0, Wr.q)(Sr), this.eyePitch = fr ? jr : Qr, this.base.heading = this.eyeHeading, this.base.pitch = this.eyePitch
```

#### 117. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L955` → after: `L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L955) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L955)

```diff
-           this.eyeHeading = NaN, this.eyePitch = NaN, oR(nR, ZR.lookDirection, null !== (UR = ZR.lookAt) && void 0 !== UR ? UR : qR, this.targets, this.base)
+           this.eyeHeading = NaN, this.eyePitch = NaN, Cr(zr, jr.lookDirection, null !== (Yr = jr.lookAt) && void 0 !== Yr ? Yr : Ir, this.targets, this.base)
```

#### 118. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L957` → after: `L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L957) · [Before (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L957)

```diff
-         JR.apply(this.base, GR), GR.fov = rR(ZR, this.NK)
+         Sr.apply(this.base, Qr), Qr.fov = Nr(jr, this.qx)
```

#### 119. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L960` → after: `L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/214.js#L960) · [Before (L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/214.js#L960)

```diff
-         RR instanceof PR && (0, yR.s)(RR.settings.target, this.settings.target) && ((0, tR.l)(RR.base, this.base), (0, iR.i)(RR.goal, this.goal), (0, iR.i)(RR.lastFeet, this.lastFeet), this.foundFeet = RR.foundFeet, (0, iR.i)(RR.smoothed, this.smoothed), (0, iR.i)(RR.BL, this.BL) … [truncated]
+         rr instanceof Gr && (0, Zr.s)(rr.settings.target, this.settings.target) && ((0, Wr.j)(rr.base, this.base), (0, fr.i)(rr.goal, this.goal), (0, fr.i)(rr.lastFeet, this.lastFeet), this.foundFeet = rr.foundFeet, (0, fr.i)(rr.smoothed, this.smoothed), (0, fr.i)(rr.Lh, this.Lh) … [truncated]
```
